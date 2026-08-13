import crypto from 'node:crypto'
import bcrypt from 'bcryptjs'
import { query } from './db.mjs'

const SESSION_DAYS = 30
const COOKIE_NAME = 'teaching_session'

export function parseCookies(header) {
  const out = {}
  if (!header) return out
  for (const part of header.split(';')) {
    const idx = part.indexOf('=')
    if (idx === -1) continue
    const key = part.slice(0, idx).trim()
    const value = part.slice(idx + 1).trim()
    if (key) out[key] = decodeURIComponent(value)
  }
  return out
}

export function validatePassword(password) {
  if (typeof password !== 'string' || password.length < 8) {
    return 'Password must be at least 8 characters'
  }
  return null
}

function sessionCookieOptions() {
  const secure =
    process.env.HTTPS === '1' || process.env.HTTPS === 'true'
  const cookiePath = process.env.COOKIE_PATH || '/'
  const parts = [
    `${COOKIE_NAME}=`,
    `Path=${cookiePath}`,
    'SameSite=Lax',
    'HttpOnly',
  ]
  if (secure) parts.push('Secure')
  return { prefix: parts[0], rest: parts.slice(1), secure }
}

export function setSessionCookie(res, token) {
  const { rest, secure } = sessionCookieOptions()
  const maxAge = SESSION_DAYS * 24 * 60 * 60
  const value = [
    `${COOKIE_NAME}=${encodeURIComponent(token)}`,
    ...rest,
    `Max-Age=${maxAge}`,
  ].join('; ')
  res.setHeader('Set-Cookie', value)
  return secure
}

export function clearSessionCookie(res) {
  const { rest } = sessionCookieOptions()
  const value = [
    `${COOKIE_NAME}=`,
    ...rest,
    'Max-Age=0',
  ].join('; ')
  res.setHeader('Set-Cookie', value)
}

export async function getUserFromRequest(req) {
  const cookies = parseCookies(req.headers.cookie)
  const token = cookies[COOKIE_NAME]
  if (!token) return null

  const result = await query(
    `SELECT u.id, u.username, u.role
     FROM sessions s
     JOIN users u ON u.id = s.user_id
     WHERE s.id = $1 AND s.expires_at > now()`,
    [token],
  )
  if (result.rowCount === 0) return null
  return result.rows[0]
}

async function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex')
  await query(
    `INSERT INTO sessions (id, user_id, expires_at)
     VALUES ($1, $2, now() + ($3 || ' days')::interval)`,
    [token, userId, String(SESSION_DAYS)],
  )
  return token
}

export async function handleRegister(body, res) {
  const username = typeof body?.username === 'string' ? body.username.trim() : ''
  const password = body?.password

  if (!username || username.length < 2) {
    return { status: 400, body: { error: 'Username required (min 2 chars)' } }
  }
  const pwError = validatePassword(password)
  if (pwError) return { status: 400, body: { error: pwError } }

  const passwordHash = await bcrypt.hash(password, 10)
  try {
    const result = await query(
      `INSERT INTO users (username, password_hash, role)
       VALUES ($1, $2, 'user')
       RETURNING id, username, role`,
      [username, passwordHash],
    )
    const user = result.rows[0]
    const token = await createSession(user.id)
    setSessionCookie(res, token)
    return { status: 201, body: user }
  } catch (err) {
    if (err && err.code === '23505') {
      return { status: 409, body: { error: 'Username already taken' } }
    }
    throw err
  }
}

export async function handleLogin(body, res) {
  const username = typeof body?.username === 'string' ? body.username.trim() : ''
  const password = body?.password

  if (!username || typeof password !== 'string') {
    return { status: 400, body: { error: 'Username and password required' } }
  }

  const result = await query(
    'SELECT id, username, role, password_hash FROM users WHERE username = $1',
    [username],
  )
  if (result.rowCount === 0) {
    return { status: 401, body: { error: 'Invalid credentials' } }
  }

  const user = result.rows[0]
  const ok = await bcrypt.compare(password, user.password_hash)
  if (!ok) {
    return { status: 401, body: { error: 'Invalid credentials' } }
  }

  const token = await createSession(user.id)
  setSessionCookie(res, token)
  return {
    status: 200,
    body: { id: user.id, username: user.username, role: user.role },
  }
}

export async function handleLogout(req, res) {
  const cookies = parseCookies(req.headers.cookie)
  const token = cookies[COOKIE_NAME]
  if (token) {
    await query('DELETE FROM sessions WHERE id = $1', [token])
  }
  clearSessionCookie(res)
  return { status: 200, body: { ok: true } }
}

export async function handleMe(req) {
  const user = await getUserFromRequest(req)
  if (!user) return { status: 401, body: { error: 'Unauthorized' } }
  return {
    status: 200,
    body: { id: user.id, username: user.username, role: user.role },
  }
}
