import { useEffect, useState } from 'react'
import {
  loadTopicImage,
  peekTopicImage,
  type TopicImageResult,
} from '../lib/topicImageCache'

type Props = {
  queries: string[]
  onExpand: (src: string, alt: string) => void
}

type Slot = TopicImageResult | { query: string; error: string } | null

export function TopicSearchImages({ queries, onExpand }: Props) {
  const [results, setResults] = useState<Slot[]>(() =>
    queries.map((query) => peekTopicImage(query)),
  )

  useEffect(() => {
    let cancelled = false
    setResults(queries.map((query) => peekTopicImage(query)))

    ;(async () => {
      const next = await Promise.all(queries.map((query) => loadTopicImage(query)))
      if (!cancelled) setResults(next)
    })()

    return () => {
      cancelled = true
    }
  }, [queries.join('\u0001')])

  const photoClass =
    queries.length > 1 ? 'slide-photo-stack is-multi' : 'slide-photo-stack'

  return (
    <div className={photoClass}>
      {queries.map((query, index) => {
        const item = results[index]
        const loading = !item
        const failed = item && 'error' in item

        if (loading) {
          return (
            <figure key={query} className="slide-photo is-search">
              <div className="slide-photo-loading">Searching images…</div>
              <figcaption className="slide-photo-caption">
                Google Images · {query}
              </figcaption>
            </figure>
          )
        }

        if (failed) {
          return (
            <figure key={query} className="slide-photo is-search">
              <div className="slide-photo-loading is-error">
                {item.error}
                <a
                  href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Google Images
                </a>
              </div>
              <figcaption className="slide-photo-caption">
                Google Images · {query}
              </figcaption>
            </figure>
          )
        }

        return (
          <figure key={query} className="slide-photo is-search">
            <button
              type="button"
              className="slide-photo-button"
              onClick={() => onExpand(item.displayUrl, item.title || query)}
              aria-label={`Expand image: ${item.title || query}`}
            >
              <img src={item.displayUrl} alt={item.title || query} />
              <span className="slide-photo-hint">Expand</span>
            </button>
            <figcaption className="slide-photo-caption">
              <span>
                Google Images · {query}
                {item.source !== 'google' ? ` · via ${item.source}` : ''}
              </span>
              <a href={item.googleUrl} target="_blank" rel="noreferrer">
                Open search
              </a>
            </figcaption>
          </figure>
        )
      })}
    </div>
  )
}
