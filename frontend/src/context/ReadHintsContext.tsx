import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useAuth } from './AuthContext'
import { apiJson } from '../lib/api'

type ReadHintsContextValue = {
  bookId?: string
  isSlideRead: (chapterId: string, slideId: string) => boolean
  areSlidesRead: (chapterId: string, slideIds: string[]) => boolean
  refresh: () => Promise<void>
}

const ReadHintsContext = createContext<ReadHintsContextValue | null>(null)

function slideKey(chapterId: string, slideId: string) {
  return `${chapterId}/${slideId}`
}

function addKeyFromString(next: Set<string>, value: string) {
  const sep = value.indexOf('/')
  if (sep <= 0 || sep >= value.length - 1) return
  next.add(slideKey(value.slice(0, sep), value.slice(sep + 1)))
}

function parseHints(data: unknown): Set<string> {
  const next = new Set<string>()
  if (!data) return next

  const push = (chapterId: unknown, slideId: unknown) => {
    if (typeof chapterId === 'string' && typeof slideId === 'string') {
      next.add(slideKey(chapterId, slideId))
    }
  }

  const ingestList = (list: unknown) => {
    if (!Array.isArray(list)) return
    for (const item of list) {
      if (typeof item === 'string') {
        addKeyFromString(next, item)
        continue
      }
      if (item && typeof item === 'object') {
        const row = item as Record<string, unknown>
        push(row.chapterId, row.slideId)
        push(row.chapter_id, row.slide_id)
      }
    }
  }

  if (Array.isArray(data)) {
    ingestList(data)
    return next
  }

  if (typeof data === 'object') {
    const record = data as Record<string, unknown>
    ingestList(record.readSlideKeys)
    ingestList(record.readSlides)
    ingestList(record.slides)
    ingestList(record.items)
    ingestList(record.read)
    ingestList(record.hints)
  }

  return next
}

export function ReadHintsProvider({
  bookId,
  children,
}: {
  bookId?: string
  children: ReactNode
}) {
  const { user } = useAuth()
  const [readSet, setReadSet] = useState<Set<string>>(new Set())

  const refresh = useCallback(async () => {
    if (!user || !bookId) {
      setReadSet(new Set())
      return
    }
    try {
      const data = await apiJson<unknown>(
        `/progress/hints?bookId=${encodeURIComponent(bookId)}`,
      )
      setReadSet(parseHints(data))
    } catch {
    }
  }, [user, bookId])

  useEffect(() => {
    void refresh()
  }, [refresh])

  useEffect(() => {
    if (!user || !bookId) return
    const timer = window.setInterval(() => {
      void refresh()
    }, 60000)
    return () => window.clearInterval(timer)
  }, [user, bookId, refresh])

  const isSlideRead = useCallback(
    (chapterId: string, slideId: string) => readSet.has(slideKey(chapterId, slideId)),
    [readSet],
  )

  const areSlidesRead = useCallback(
    (chapterId: string, slideIds: string[]) =>
      slideIds.length > 0 &&
      slideIds.every((slideId) => readSet.has(slideKey(chapterId, slideId))),
    [readSet],
  )

  const value = useMemo(
    () => ({
      bookId,
      isSlideRead,
      areSlidesRead,
      refresh,
    }),
    [bookId, isSlideRead, areSlidesRead, refresh],
  )

  return (
    <ReadHintsContext.Provider value={value}>{children}</ReadHintsContext.Provider>
  )
}

export function useReadHints(bookId?: string) {
  const context = useContext(ReadHintsContext)
  if (!context) {
    return {
      bookId,
      isSlideRead: () => false,
      areSlidesRead: () => false,
      refresh: async () => {},
    }
  }
  return context
}
