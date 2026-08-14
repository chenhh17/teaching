import { chapterPath, getBook, getBookParts } from '../data/books'
import {
  chapters,
  getAllSlides,
  getChapter,
  getChapterCode,
  getChaptersByPart,
  getCourseStats,
} from '../data/chapters'
import { parts } from '../data/parts'

export type AnalysisTotals = {
  focusedMinutes: number
  readPages: number
  totalHeartbeatsSeconds?: number
  lastActiveAt?: string | null
}

export type BookRow = {
  bookId: string
  focusedMinutes: number
  readPages: number
}

export type PartRow = {
  bookId: string
  partId: string | null
  focusedMinutes: number
  readPages: number
}

export type ChapterRow = {
  bookId: string
  partId: string | null
  chapterId: string
  focusedMinutes: number
  readPages: number
}

export type DayTimeRow = {
  date: string
  seconds?: number
  focusedMinutes: number
}

export type AnalysisPayload = {
  totals: AnalysisTotals
  byBook: BookRow[]
  byPart: PartRow[]
  byChapter: ChapterRow[]
  byDay?: DayTimeRow[]
}

export type ProgressStatus = 'empty' | 'progress' | 'done'

export type PartProgress = {
  bookId: string
  partId: string
  letter: string
  titleEn: string
  titleZh: string
  theme: string
  slideCount: number
  chapterCount: number
  readPages: number
  focusedMinutes: number
  percent: number
  timeShare: number
  status: ProgressStatus
}

export type ChapterProgress = {
  bookId: string
  partId: string
  chapterId: string
  code: string
  titleEn: string
  titleZh: string
  slideCount: number
  readPages: number
  focusedMinutes: number
  percent: number
  status: ProgressStatus
  continuePath?: string
}

export type ReadingView = {
  slideCount: number
  chapterCount: number
  partCount: number
  readPages: number
  focusedMinutes: number
  focusedSeconds: number
  percent: number
  chaptersDone: number
  partsDone: number
  avgSecondsPerPage: number | null
  lastActiveAt?: string | null
  next?: ChapterProgress
  hottestPart?: PartProgress
  skimmedChapters: number
  insightEn: string
  insightZh: string
  parts: PartProgress[]
  chapters: ChapterProgress[]
  maxPartMinutes: number
  byDay: DayTimeRow[]
}

function clampPercent(read: number, total: number) {
  if (total <= 0) return 0
  return Math.min(100, Math.round((read / total) * 1000) / 10)
}

function statusOf(read: number, total: number): ProgressStatus {
  if (total <= 0 || read <= 0) return 'empty'
  if (read >= total) return 'done'
  return 'progress'
}

export function formatDuration(minutes: number) {
  if (!Number.isFinite(minutes) || minutes <= 0) return '0 min'
  const totalSeconds = Math.round(minutes * 60)
  if (totalSeconds < 60) return `${totalSeconds}s`
  const hours = Math.floor(minutes / 60)
  const mins = Math.round(minutes - hours * 60)
  if (hours <= 0) {
    return Number.isInteger(minutes) ? `${minutes} min` : `${minutes.toFixed(1)} min`
  }
  if (mins === 0) return `${hours}h`
  return `${hours}h ${mins}m`
}

export function formatPercent(value: number) {
  if (!Number.isFinite(value)) return '0%'
  return Number.isInteger(value) ? `${value}%` : `${value.toFixed(1)}%`
}

export function formatRelativeTime(iso?: string | null) {
  if (!iso) return '—'
  const then = new Date(iso).getTime()
  if (!Number.isFinite(then)) return '—'
  const diff = Date.now() - then
  if (diff < 60_000) return 'just now'
  const minutes = Math.floor(diff / 60_000)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 14) return `${days}d ago`
  return new Date(iso).toLocaleDateString()
}

export function todayShanghai() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
}

export function addDays(ymd: string, days: number) {
  const [year, month, day] = ymd.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day + days))
  return date.toISOString().slice(0, 10)
}

export function isoWeekStart(ymd: string) {
  const [year, month, day] = ymd.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  const weekday = date.getUTCDay()
  const delta = weekday === 0 ? -6 : 1 - weekday
  date.setUTCDate(date.getUTCDate() + delta)
  return date.toISOString().slice(0, 10)
}

export function weekdayIndex(ymd: string) {
  const [year, month, day] = ymd.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay()
}

export function monthDay(ymd: string) {
  const [, month, day] = ymd.split('-')
  return `${Number(month)}/${Number(day)}`
}

export const DAY_WINDOW = 7
export const WEEK_WINDOW = 8

export type PeriodMode = 'day' | 'week'

export type PeriodBar = {
  key: string
  start: string
  end: string
  minutes: number
  isCurrent: boolean
}

export function buildPeriodBars(
  byDay: DayTimeRow[],
  mode: PeriodMode,
  offset: number,
  today: string,
) {
  const minutesByDate = new Map<string, number>()
  for (const row of byDay) {
    minutesByDate.set(row.date, row.focusedMinutes)
  }
  const earliest = byDay.reduce(
    (min, row) => (row.date < min ? row.date : min),
    today,
  )
  const thisWeek = isoWeekStart(today)
  const size = mode === 'day' ? DAY_WINDOW : WEEK_WINDOW

  const items: PeriodBar[] = []
  if (mode === 'day') {
    const end = addDays(today, -offset * DAY_WINDOW)
    const start = addDays(end, -(DAY_WINDOW - 1))
    for (let i = 0; i < DAY_WINDOW; i += 1) {
      const date = addDays(start, i)
      items.push({
        key: date,
        start: date,
        end: date,
        minutes: minutesByDate.get(date) ?? 0,
        isCurrent: date === today,
      })
    }
    return {
      items,
      totalMinutes: items.reduce((sum, item) => sum + item.minutes, 0),
      start,
      end,
      canPrev: earliest < start,
      canNext: offset > 0,
    }
  }

  const endWeek = addDays(thisWeek, -offset * WEEK_WINDOW * 7)
  const startWeek = addDays(endWeek, -(WEEK_WINDOW - 1) * 7)
  for (let i = 0; i < WEEK_WINDOW; i += 1) {
    const start = addDays(startWeek, i * 7)
    const end = addDays(start, 6)
    let minutes = 0
    for (let d = 0; d < 7; d += 1) {
      minutes += minutesByDate.get(addDays(start, d)) ?? 0
    }
    items.push({
      key: start,
      start,
      end,
      minutes,
      isCurrent: start === thisWeek,
    })
  }
  return {
    items,
    totalMinutes: items.reduce((sum, item) => sum + item.minutes, 0),
    start: startWeek,
    end: addDays(endWeek, 6),
    canPrev: earliest < startWeek,
    canNext: offset > 0,
  }
}

export function courseSlideCount() {
  return getCourseStats().slideCount
}

function firstSlidePath(bookId: string, chapterId: string) {
  const chapter = getChapter(chapterId)
  if (!chapter) return undefined
  const first = getAllSlides(chapter)[0]
  if (!first) return undefined
  return chapterPath(bookId, chapter.id, first.id)
}

export function buildReadingView(data: AnalysisPayload): ReadingView {
  const stats = getCourseStats()
  const readByChapter = new Map<string, ChapterRow>()
  for (const row of data.byChapter) {
    readByChapter.set(row.chapterId, row)
  }
  const readByPart = new Map<string, PartRow>()
  for (const row of data.byPart) {
    if (row.partId) readByPart.set(row.partId, row)
  }

  const bookId = data.byBook[0]?.bookId ?? 'computer'
  const book = getBook(bookId)
  const bookParts = book ? getBookParts(book) : parts

  const partViews: PartProgress[] = bookParts.map((part, index) => {
    const partChapters = getChaptersByPart(part)
    const slideCount = partChapters.reduce(
      (sum, chapter) => sum + getAllSlides(chapter).length,
      0,
    )
    const tracked = readByPart.get(part.id)
    const readPages = Math.min(tracked?.readPages ?? 0, slideCount)
    const focusedMinutes = tracked?.focusedMinutes ?? 0
    return {
      bookId,
      partId: part.id,
      letter: String.fromCharCode(65 + index),
      titleEn: part.titleEn,
      titleZh: part.titleZh,
      theme: part.theme,
      slideCount,
      chapterCount: partChapters.length,
      readPages,
      focusedMinutes,
      percent: clampPercent(readPages, slideCount),
      timeShare: 0,
      status: statusOf(readPages, slideCount),
    }
  })

  const chapterViews: ChapterProgress[] = chapters.map((chapter) => {
    const part = parts.find((item) => item.chapterIds.includes(chapter.id))
    const slideCount = getAllSlides(chapter).length
    const tracked = readByChapter.get(chapter.id)
    const readPages = Math.min(tracked?.readPages ?? 0, slideCount)
    const focusedMinutes = tracked?.focusedMinutes ?? 0
    return {
      bookId,
      partId: part?.id ?? '',
      chapterId: chapter.id,
      code: getChapterCode(chapter.id) ?? '',
      titleEn: chapter.titleEn,
      titleZh: chapter.titleZh,
      slideCount,
      readPages,
      focusedMinutes,
      percent: clampPercent(readPages, slideCount),
      status: statusOf(readPages, slideCount),
      continuePath: firstSlidePath(bookId, chapter.id),
    }
  })

  const readPages = Math.min(data.totals.readPages, stats.slideCount)
  const focusedMinutes = data.totals.focusedMinutes
  const focusedSeconds =
    data.totals.totalHeartbeatsSeconds ?? Math.round(focusedMinutes * 60)
  const percent = clampPercent(readPages, stats.slideCount)
  const chaptersDone = chapterViews.filter((item) => item.status === 'done').length
  const partsDone = partViews.filter((item) => item.status === 'done').length
  const next = chapterViews.find((item) => item.status !== 'done')
  const hottestPart = [...partViews].sort(
    (a, b) => b.focusedMinutes - a.focusedMinutes,
  )[0]
  const skimmedChapters = chapterViews.filter(
    (item) =>
      item.readPages >= 3 &&
      item.focusedMinutes > 0 &&
      (item.focusedMinutes * 60) / item.readPages < 20,
  ).length
  const avgSecondsPerPage =
    readPages > 0 ? focusedSeconds / readPages : null
  const maxPartMinutes = Math.max(
    0.1,
    ...partViews.map((item) => item.focusedMinutes),
  )
  const totalPartMinutes = partViews.reduce(
    (sum, item) => sum + item.focusedMinutes,
    0,
  )
  for (const part of partViews) {
    part.timeShare =
      totalPartMinutes > 0
        ? Math.round((part.focusedMinutes / totalPartMinutes) * 1000) / 10
        : 0
  }

  let insightEn = 'Open a chapter and stay on each page for 15 seconds to start tracking.'
  let insightZh = '打开一章，每页停留 15 秒后开始记录进度。'
  if (readPages > 0 && next) {
    insightEn = `Next up: ${next.code} ${next.titleEn}. ${formatPercent(percent)} of the Computer book is marked read.`
    insightZh = `下一章：${next.code} ${next.titleZh}。计算机书已读 ${formatPercent(percent)}。`
  } else if (percent >= 100) {
    insightEn = 'You have marked every page in the Computer book as read.'
    insightZh = '计算机书的每一页都已标记为已读。'
  }
  if (hottestPart && hottestPart.focusedMinutes >= 1 && hottestPart.percent < 100) {
    insightEn += ` Most focus time is in Part ${hottestPart.letter} ${hottestPart.titleEn}.`
    insightZh += ` 专注时间主要在第 ${hottestPart.letter} 部分「${hottestPart.titleZh}」。`
  }
  if (skimmedChapters > 0) {
    insightEn += ` ${skimmedChapters} chapter${skimmedChapters === 1 ? '' : 's'} look skimmed (under 20s per page).`
    insightZh += ` 有 ${skimmedChapters} 章看起来读得很快（每页不足 20 秒）。`
  }

  return {
    slideCount: stats.slideCount,
    chapterCount: stats.chapterCount,
    partCount: stats.partCount,
    readPages,
    focusedMinutes,
    focusedSeconds,
    percent,
    chaptersDone,
    partsDone,
    avgSecondsPerPage,
    lastActiveAt: data.totals.lastActiveAt,
    next,
    hottestPart:
      hottestPart && hottestPart.focusedMinutes > 0 ? hottestPart : undefined,
    skimmedChapters,
    insightEn,
    insightZh,
    parts: partViews,
    chapters: chapterViews,
    maxPartMinutes,
    byDay: data.byDay ?? [],
  }
}
