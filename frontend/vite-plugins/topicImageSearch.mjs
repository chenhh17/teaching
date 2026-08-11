import { handleTopicImageRequest } from '../server/topicImageCore.mjs'

export function topicImageSearchPlugin() {
  return {
    name: 'topic-image-search',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url) return next()
        const handled = await handleTopicImageRequest(req.url, res)
        if (!handled) return next()
      })
    },
  }
}
