import http from 'node:http'
import { handleTopicImageRequest } from './topicImageCore.mjs'

const host = process.env.TEACHING_IMAGE_HOST || '127.0.0.1'
const port = Number(process.env.TEACHING_IMAGE_PORT || 9010)

const server = http.createServer(async (req, res) => {
  const handled = await handleTopicImageRequest(req.url || '/', res)
  if (handled) return
  res.statusCode = 404
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ error: 'Not found' }))
})

server.listen(port, host, () => {
  console.log(`teaching topic-image API on http://${host}:${port}`)
})
