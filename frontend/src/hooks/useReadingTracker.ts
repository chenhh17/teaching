import { useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { getPartForChapter } from '../data/chapters'
import { apiFetch } from '../lib/api'

const HEARTBEAT_MS = 5000
const MARK_READ_MS = 15000

type Options = {
  bookId?: string
  chapterId?: string
  slideId?: string
  onMarkedRead?: () => void
}

function isPageActive() {
  return document.visibilityState === 'visible' && document.hasFocus()
}

export function useReadingTracker({
  bookId,
  chapterId,
  slideId,
  onMarkedRead,
}: Options) {
  const { user } = useAuth()
  const onMarkedReadRef = useRef(onMarkedRead)
  onMarkedReadRef.current = onMarkedRead

  useEffect(() => {
    if (!user || !bookId || !chapterId || !slideId) return

    const part = getPartForChapter(chapterId)
    const partId = part?.id
    if (!partId) return

    let focusedSeconds = 0
    let lastActiveCheck = Date.now()
    let markedRead = false
    const landedAt = Date.now()

    const accumulateFocused = () => {
      const now = Date.now()
      const delta = (now - lastActiveCheck) / 1000
      lastActiveCheck = now
      if (isPageActive() && delta > 0) {
        focusedSeconds += delta
      }
    }

    const postHeartbeat = () => {
      accumulateFocused()
      if (!isPageActive()) {
        focusedSeconds = 0
        return
      }
      const seconds = Math.min(Math.max(Math.round(focusedSeconds), 0), 30)
      focusedSeconds = 0
      if (seconds <= 0) return
      void apiFetch('/progress/heartbeat', {
        method: 'POST',
        body: JSON.stringify({
          bookId,
          partId,
          chapterId,
          slideId,
          focusedSeconds: seconds,
        }),
      }).catch(() => {})
    }

    const tryMarkRead = () => {
      if (markedRead) return
      if (Date.now() - landedAt < MARK_READ_MS) return
      markedRead = true
      void apiFetch('/progress/mark-read', {
        method: 'POST',
        body: JSON.stringify({
          bookId,
          partId,
          chapterId,
          slideId,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            markedRead = false
            return
          }
          onMarkedReadRef.current?.()
        })
        .catch(() => {
          markedRead = false
        })
    }

    const onActivityChange = () => {
      accumulateFocused()
    }

    const heartbeatTimer = window.setInterval(postHeartbeat, HEARTBEAT_MS)
    const markTimer = window.setInterval(tryMarkRead, 1000)
    window.addEventListener('focus', onActivityChange)
    window.addEventListener('blur', onActivityChange)
    document.addEventListener('visibilitychange', onActivityChange)

    return () => {
      window.clearInterval(heartbeatTimer)
      window.clearInterval(markTimer)
      window.removeEventListener('focus', onActivityChange)
      window.removeEventListener('blur', onActivityChange)
      document.removeEventListener('visibilitychange', onActivityChange)
    }
  }, [user, bookId, chapterId, slideId])
}
