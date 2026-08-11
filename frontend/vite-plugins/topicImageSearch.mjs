const cache = new Map()
const CACHE_MS = 1000 * 60 * 60 * 12

const BLOCKED_HOST =
  /(?:^|\.)(?:facebook\.com|fbsbx\.com|fbcdn\.net|instagram\.com|threads\.net|tiktok\.com|pinimg\.com|pinterest\.)/i

function sendJson(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=300')
  res.end(JSON.stringify(body))
}

function decodeBingField(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/\\u0026/g, '&')
    .replace(/\\\//g, '/')
    .replace(/\\u003d/g, '=')
}

function isBlockedImageUrl(url) {
  try {
    return BLOCKED_HOST.test(new URL(url).hostname)
  } catch {
    return true
  }
}

function looksLikeImageBytes(buf) {
  if (!buf || buf.length < 24) return false
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return true
  if (
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  ) {
    return true
  }
  if (
    buf[0] === 0x47 &&
    buf[1] === 0x49 &&
    buf[2] === 0x46 &&
    buf[3] === 0x38
  ) {
    return true
  }
  if (
    buf.toString('ascii', 0, 4) === 'RIFF' &&
    buf.toString('ascii', 8, 12) === 'WEBP'
  ) {
    return true
  }
  return false
}

async function fetchImageBytes(targetUrl) {
  if (!targetUrl || isBlockedImageUrl(targetUrl)) return null
  const upstream = await fetch(targetUrl, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      Referer: 'https://www.bing.com/',
    },
    redirect: 'follow',
  })
  if (!upstream.ok) return null
  const type = (upstream.headers.get('content-type') || '').toLowerCase()
  if (!type.startsWith('image/')) return null
  const buf = Buffer.from(await upstream.arrayBuffer())
  if (!looksLikeImageBytes(buf)) return null
  return { buf, type: type.split(';')[0] || 'image/jpeg' }
}

async function searchBingCandidates(query) {
  const url = `https://www.bing.com/images/async?q=${encodeURIComponent(query)}&first=1&count=20&mmasync=1`
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: '*/*',
      Referer: `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`,
    },
  })
  if (!res.ok) return []
  const html = await res.text()
  const titles = [...html.matchAll(/&quot;t&quot;:&quot;(.+?)&quot;/g)].map((m) =>
    decodeBingField(m[1]),
  )
  const matches = [
    ...html.matchAll(
      /murl&quot;:&quot;(https?:.+?)&quot;,&quot;turl&quot;:&quot;(https?:.+?)&quot;/g,
    ),
  ]
  return matches
    .map((match, index) => ({
      image: decodeBingField(match[1]),
      thumb: decodeBingField(match[2]),
      title: titles[index] || query,
      source: 'bing',
    }))
    .filter((item) => item.image && !isBlockedImageUrl(item.image))
}

async function searchDuckDuckGoCandidates(query) {
  const pageRes = await fetch(
    `https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      },
    },
  )
  if (!pageRes.ok) return []
  const pageHtml = await pageRes.text()
  const vqd = pageHtml.match(/vqd=['"]([^'"]+)['"]/)?.[1]
  if (!vqd) return []

  const apiRes = await fetch(
    `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${encodeURIComponent(vqd)}&f=,,,,,&p=1`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Referer: 'https://duckduckgo.com/',
      },
    },
  )
  if (!apiRes.ok) return []
  const data = await apiRes.json()
  return (data.results || [])
    .map((item) => ({
      image: item.image,
      thumb: item.thumbnail || item.image,
      title: item.title || query,
      source: 'duckduckgo',
    }))
    .filter((item) => item.image && !isBlockedImageUrl(item.image))
}

async function pickWorkingHit(candidates) {
  for (const candidate of candidates.slice(0, 8)) {
    const original = await fetchImageBytes(candidate.image)
    if (original) {
      return {
        ...candidate,
        bytes: original.buf,
        contentType: original.type,
        used: 'image',
      }
    }
    const thumb = await fetchImageBytes(candidate.thumb)
    if (thumb) {
      return {
        ...candidate,
        image: candidate.thumb,
        bytes: thumb.buf,
        contentType: thumb.type,
        used: 'thumb',
      }
    }
  }
  return null
}

async function resolveHit(query) {
  const key = query.trim().toLowerCase()
  const cached = cache.get(key)
  if (cached && Date.now() - cached.at < CACHE_MS) return cached.hit

  const bing = await searchBingCandidates(query)
  let hit = await pickWorkingHit(bing)
  if (!hit) {
    const ddg = await searchDuckDuckGoCandidates(query)
    hit = await pickWorkingHit(ddg)
  }
  if (hit) cache.set(key, { hit, at: Date.now() })
  return hit
}

export function topicImageSearchPlugin() {
  return {
    name: 'topic-image-search',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          if (!req.url) return next()
          const url = new URL(req.url, 'http://localhost')

          if (url.pathname === '/api/topic-image') {
            const query = (url.searchParams.get('q') || '').trim()
            if (!query) {
              sendJson(res, 400, { error: 'Missing q' })
              return
            }
            const hit = await resolveHit(query)
            if (!hit) {
              sendJson(res, 404, { error: 'No image found', query })
              return
            }
            sendJson(res, 200, {
              query,
              title: hit.title,
              source: hit.source,
              image: hit.image,
              thumb: hit.thumb,
              used: hit.used,
              displayUrl: `/api/topic-image-file?q=${encodeURIComponent(query)}`,
              googleUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`,
            })
            return
          }

          if (url.pathname === '/api/topic-image-file') {
            const query = (url.searchParams.get('q') || '').trim()
            if (!query) {
              res.statusCode = 400
              res.end('Missing q')
              return
            }
            const hit = await resolveHit(query)
            if (!hit?.bytes) {
              res.statusCode = 404
              res.end('No image found')
              return
            }
            res.statusCode = 200
            res.setHeader('Content-Type', hit.contentType || 'image/jpeg')
            res.setHeader('Cache-Control', 'public, max-age=86400')
            res.end(hit.bytes)
            return
          }

          return next()
        } catch (error) {
          sendJson(res, 500, {
            error: error instanceof Error ? error.message : 'Search failed',
          })
        }
      })
    },
  }
}
