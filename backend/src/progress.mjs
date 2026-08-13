import { query } from './db.mjs'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

function round1(n) {
  return Math.round(n * 10) / 10
}

function parseSlideBody(body) {
  const bookId = typeof body?.bookId === 'string' ? body.bookId.trim() : ''
  const chapterId =
    typeof body?.chapterId === 'string' ? body.chapterId.trim() : ''
  const slideId = typeof body?.slideId === 'string' ? body.slideId.trim() : ''
  const partId =
    typeof body?.partId === 'string' && body.partId.trim()
      ? body.partId.trim()
      : null

  if (!bookId || !chapterId || !slideId) {
    return { error: 'bookId, chapterId, and slideId are required' }
  }
  return { bookId, partId, chapterId, slideId }
}

export async function handleHeartbeat(user, body) {
  const parsed = parseSlideBody(body)
  if (parsed.error) return { status: 400, body: { error: parsed.error } }

  let focusedSeconds = Number(body?.focusedSeconds)
  if (!Number.isFinite(focusedSeconds)) {
    return { status: 400, body: { error: 'focusedSeconds required' } }
  }
  focusedSeconds = clamp(Math.floor(focusedSeconds), 1, 60)

  const { bookId, partId, chapterId, slideId } = parsed
  await query(
    `INSERT INTO focus_time (user_id, book_id, part_id, chapter_id, slide_id, seconds, updated_at)
     VALUES ($1, $2, $3, $4, $5, $6, now())
     ON CONFLICT (user_id, book_id, chapter_id, slide_id)
     DO UPDATE SET
       seconds = focus_time.seconds + EXCLUDED.seconds,
       part_id = COALESCE(EXCLUDED.part_id, focus_time.part_id),
       updated_at = now()`,
    [user.id, bookId, partId, chapterId, slideId, focusedSeconds],
  )

  return { status: 200, body: { ok: true, added: focusedSeconds } }
}

export async function handleMarkRead(user, body) {
  const parsed = parseSlideBody(body)
  if (parsed.error) return { status: 400, body: { error: parsed.error } }

  const { bookId, partId, chapterId, slideId } = parsed
  await query(
    `INSERT INTO page_reads (user_id, book_id, part_id, chapter_id, slide_id, first_read_at)
     VALUES ($1, $2, $3, $4, $5, now())
     ON CONFLICT (user_id, book_id, chapter_id, slide_id)
     DO UPDATE SET
       part_id = COALESCE(EXCLUDED.part_id, page_reads.part_id)`,
    [user.id, bookId, partId, chapterId, slideId],
  )

  return { status: 200, body: { ok: true } }
}

export async function handleHints(user, bookId) {
  if (!bookId) {
    return { status: 400, body: { error: 'bookId query required' } }
  }

  const result = await query(
    `SELECT chapter_id, slide_id
     FROM page_reads
     WHERE user_id = $1 AND book_id = $2`,
    [user.id, bookId],
  )

  const readSlideKeys = result.rows.map(
    (row) => `${row.chapter_id}/${row.slide_id}`,
  )
  return { status: 200, body: { readSlideKeys } }
}

export async function buildAnalysis(userId) {
  const focus = await query(
    `SELECT book_id, part_id, chapter_id, SUM(seconds)::int AS seconds
     FROM focus_time
     WHERE user_id = $1
     GROUP BY book_id, part_id, chapter_id`,
    [userId],
  )

  const reads = await query(
    `SELECT book_id, part_id, chapter_id, COUNT(*)::int AS pages
     FROM page_reads
     WHERE user_id = $1
     GROUP BY book_id, part_id, chapter_id`,
    [userId],
  )

  const focusMap = new Map()
  let totalSeconds = 0
  for (const row of focus.rows) {
    const key = `${row.book_id}\0${row.part_id ?? ''}\0${row.chapter_id}`
    focusMap.set(key, row)
    totalSeconds += row.seconds
  }

  const readMap = new Map()
  let totalPages = 0
  for (const row of reads.rows) {
    const key = `${row.book_id}\0${row.part_id ?? ''}\0${row.chapter_id}`
    readMap.set(key, row)
    totalPages += row.pages
  }

  const keys = new Set([...focusMap.keys(), ...readMap.keys()])
  const byChapter = []
  const bookAgg = new Map()
  const partAgg = new Map()

  for (const key of keys) {
    const f = focusMap.get(key)
    const r = readMap.get(key)
    const bookId = f?.book_id ?? r.book_id
    const partId = (f?.part_id ?? r?.part_id) || null
    const chapterId = f?.chapter_id ?? r.chapter_id
    const seconds = f?.seconds ?? 0
    const pages = r?.pages ?? 0
    const focusedMinutes = round1(seconds / 60)

    byChapter.push({
      bookId,
      partId,
      chapterId,
      focusedMinutes,
      readPages: pages,
    })

    if (!bookAgg.has(bookId)) {
      bookAgg.set(bookId, { bookId, seconds: 0, readPages: 0 })
    }
    const b = bookAgg.get(bookId)
    b.seconds += seconds
    b.readPages += pages

    const partKey = `${bookId}\0${partId ?? ''}`
    if (!partAgg.has(partKey)) {
      partAgg.set(partKey, { bookId, partId, seconds: 0, readPages: 0 })
    }
    const p = partAgg.get(partKey)
    p.seconds += seconds
    p.readPages += pages
  }

  byChapter.sort((a, b) => {
    if (a.bookId !== b.bookId) return a.bookId.localeCompare(b.bookId)
    const ap = a.partId ?? ''
    const bp = b.partId ?? ''
    if (ap !== bp) return ap.localeCompare(bp)
    return a.chapterId.localeCompare(b.chapterId)
  })

  const byBook = [...bookAgg.values()]
    .map((b) => ({
      bookId: b.bookId,
      focusedMinutes: round1(b.seconds / 60),
      readPages: b.readPages,
    }))
    .sort((a, b) => a.bookId.localeCompare(b.bookId))

  const byPart = [...partAgg.values()]
    .map((p) => ({
      bookId: p.bookId,
      partId: p.partId,
      focusedMinutes: round1(p.seconds / 60),
      readPages: p.readPages,
    }))
    .sort((a, b) => {
      if (a.bookId !== b.bookId) return a.bookId.localeCompare(b.bookId)
      return (a.partId ?? '').localeCompare(b.partId ?? '')
    })

  return {
    totals: {
      focusedMinutes: round1(totalSeconds / 60),
      readPages: totalPages,
      totalHeartbeatsSeconds: totalSeconds,
    },
    byBook,
    byPart,
    byChapter,
  }
}

export async function handleAnalysis(user) {
  const analysis = await buildAnalysis(user.id)
  return { status: 200, body: analysis }
}
