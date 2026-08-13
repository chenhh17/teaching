import http from 'node:http'
import { migrate, ensureAdmin, pool } from './db.mjs'
import {
  getUserFromRequest,
  handleRegister,
  handleLogin,
  handleLogout,
  handleMe,
} from './auth.mjs'
import {
  handleHeartbeat,
  handleMarkRead,
  handleHints,
  handleAnalysis,
} from './progress.mjs'
import {
  handleListUsers,
  handleUserAnalysis,
  handleSetPassword,
} from './admin.mjs'

const BASE = '/teaching/api'
const host = process.env.HOST || '127.0.0.1'
const port = Number(process.env.PORT || 9011)

function sendJson(res, status, body) {
  const payload = JSON.stringify(body)
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(payload)
}

function applyCors(req, res) {
  const configured = process.env.CORS_ORIGIN || '*'
  const requestOrigin = req.headers.origin

  let allowOrigin = configured
  if (configured === '*') {
    allowOrigin = requestOrigin || '*'
  } else if (requestOrigin && configured.split(',').map((s) => s.trim()).includes(requestOrigin)) {
    allowOrigin = requestOrigin
  }

  res.setHeader('Access-Control-Allow-Origin', allowOrigin)
  if (allowOrigin !== '*') {
    res.setHeader('Vary', 'Origin')
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization',
  )
}

async function readJson(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  if (chunks.length === 0) return {}
  const raw = Buffer.concat(chunks).toString('utf8')
  if (!raw.trim()) return {}
  try {
    return JSON.parse(raw)
  } catch {
    const err = new Error('Invalid JSON')
    err.statusCode = 400
    throw err
  }
}

function matchPath(pathname) {
  if (!pathname.startsWith(BASE)) return null
  const rest = pathname.slice(BASE.length) || '/'
  return rest.startsWith('/') ? rest : `/${rest}`
}

async function requireAuth(req) {
  const user = await getUserFromRequest(req)
  if (!user) {
    const err = new Error('Unauthorized')
    err.statusCode = 401
    throw err
  }
  return user
}

async function requireAdmin(req) {
  const user = await requireAuth(req)
  if (user.role !== 'admin') {
    const err = new Error('Forbidden')
    err.statusCode = 403
    throw err
  }
  return user
}

async function route(req, res, path, method) {
  if (method === 'POST' && path === '/auth/register') {
    const body = await readJson(req)
    return handleRegister(body, res)
  }
  if (method === 'POST' && path === '/auth/login') {
    const body = await readJson(req)
    return handleLogin(body, res)
  }
  if (method === 'POST' && path === '/auth/logout') {
    return handleLogout(req, res)
  }
  if (method === 'GET' && path === '/auth/me') {
    return handleMe(req)
  }

  if (method === 'POST' && path === '/progress/heartbeat') {
    const user = await requireAuth(req)
    const body = await readJson(req)
    return handleHeartbeat(user, body)
  }
  if (method === 'POST' && path === '/progress/mark-read') {
    const user = await requireAuth(req)
    const body = await readJson(req)
    return handleMarkRead(user, body)
  }
  if (method === 'GET' && path === '/progress/hints') {
    const user = await requireAuth(req)
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`)
    return handleHints(user, url.searchParams.get('bookId'))
  }
  if (method === 'GET' && path === '/progress/analysis') {
    const user = await requireAuth(req)
    return handleAnalysis(user)
  }

  if (method === 'GET' && path === '/admin/users') {
    await requireAdmin(req)
    return handleListUsers()
  }

  const adminUserMatch = path.match(/^\/admin\/users\/(\d+)\/analysis$/)
  if (method === 'GET' && adminUserMatch) {
    await requireAdmin(req)
    return handleUserAnalysis(adminUserMatch[1])
  }

  const adminPassMatch = path.match(/^\/admin\/users\/(\d+)\/password$/)
  if (method === 'POST' && adminPassMatch) {
    await requireAdmin(req)
    const body = await readJson(req)
    return handleSetPassword(adminPassMatch[1], body)
  }

  return { status: 404, body: { error: 'Not found' } }
}

const server = http.createServer(async (req, res) => {
  applyCors(req, res)

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`)
    const path = matchPath(url.pathname)
    if (!path) {
      sendJson(res, 404, { error: 'Not found' })
      return
    }

    const result = await route(req, res, path, req.method || 'GET')
    sendJson(res, result.status, result.body)
  } catch (err) {
    const status = err.statusCode || 500
    if (status >= 500) console.error(err)
    sendJson(res, status, { error: err.message || 'Server error' })
  }
})

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is required')
    process.exit(1)
  }
  if (!process.env.SESSION_SECRET) {
    console.error('SESSION_SECRET is required')
    process.exit(1)
  }

  await migrate()
  await ensureAdmin()

  server.listen(port, host, () => {
    console.log(`teaching API on http://${host}:${port}${BASE}`)
  })
}

main().catch((err) => {
  console.error('Failed to start:', err)
  pool.end().finally(() => process.exit(1))
})
