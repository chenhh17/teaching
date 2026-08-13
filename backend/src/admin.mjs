import bcrypt from 'bcryptjs'
import { query } from './db.mjs'
import { validatePassword } from './auth.mjs'
import { buildAnalysis } from './progress.mjs'

export async function handleListUsers() {
  const result = await query(
    `SELECT
       u.id,
       u.username,
       u.role,
       u.created_at,
       COALESCE(f.seconds, 0)::int AS total_seconds,
       COALESCE(r.pages, 0)::int AS read_pages
     FROM users u
     LEFT JOIN (
       SELECT user_id, SUM(seconds) AS seconds
       FROM focus_time
       GROUP BY user_id
     ) f ON f.user_id = u.id
     LEFT JOIN (
       SELECT user_id, COUNT(*) AS pages
       FROM page_reads
       GROUP BY user_id
     ) r ON r.user_id = u.id
     ORDER BY u.id ASC`,
  )

  const users = result.rows.map((row) => ({
    id: row.id,
    username: row.username,
    role: row.role,
    createdAt: row.created_at,
    totals: {
      focusedMinutes: Math.round((row.total_seconds / 60) * 10) / 10,
      readPages: row.read_pages,
      totalHeartbeatsSeconds: row.total_seconds,
    },
  }))

  return { status: 200, body: { users } }
}

export async function handleUserAnalysis(userId) {
  const id = Number(userId)
  if (!Number.isInteger(id) || id < 1) {
    return { status: 400, body: { error: 'Invalid user id' } }
  }

  const existing = await query('SELECT id FROM users WHERE id = $1', [id])
  if (existing.rowCount === 0) {
    return { status: 404, body: { error: 'User not found' } }
  }

  const analysis = await buildAnalysis(id)
  return { status: 200, body: analysis }
}

export async function handleSetPassword(userId, body) {
  const id = Number(userId)
  if (!Number.isInteger(id) || id < 1) {
    return { status: 400, body: { error: 'Invalid user id' } }
  }

  const password = body?.password
  const pwError = validatePassword(password)
  if (pwError) return { status: 400, body: { error: pwError } }

  const existing = await query('SELECT id FROM users WHERE id = $1', [id])
  if (existing.rowCount === 0) {
    return { status: 404, body: { error: 'User not found' } }
  }

  const passwordHash = await bcrypt.hash(password, 10)
  await query('UPDATE users SET password_hash = $1 WHERE id = $2', [
    passwordHash,
    id,
  ])
  await query('DELETE FROM sessions WHERE user_id = $1', [id])

  return { status: 200, body: { ok: true } }
}
