import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import type { Chapter } from '../types/course'
import {
  getAdjacentChapters,
  getAllSlides,
  getChapterCode,
  getChapterMeta,
  getPartForChapter,
  loadChapter,
  parts,
  preloadChapter,
} from '../data/chapters'
import { SlideView } from '../components/SlideView'
import { PartIcon } from '../components/PartIcon'
import { useChineseLocale } from '../context/ChineseLocaleContext'
import {
  getSlideImageQueries,
  preloadTopicImages,
} from '../lib/topicImageCache'

export function ChapterPage() {
  const { chapterId = '', slideId } = useParams()
  const navigate = useNavigate()
  const { showChinese, pageChinese, togglePageChinese } = useChineseLocale()
  const meta = getChapterMeta(chapterId)
  const [chapter, setChapter] = useState<Chapter | undefined>()
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setChapter(undefined)
    setLoadError(false)

    if (!chapterId) return

    loadChapter(chapterId)
      .then((loaded) => {
        if (cancelled) return
        if (!loaded) {
          setLoadError(true)
          return
        }
        setChapter(loaded)
      })
      .catch(() => {
        if (!cancelled) setLoadError(true)
      })

    return () => {
      cancelled = true
    }
  }, [chapterId])

  const slides = useMemo(() => (chapter ? getAllSlides(chapter) : []), [chapter])

  const resolvedIndex = useMemo(() => {
    if (!slides.length) return 0

    if (slideId) {
      const bySlide = slides.findIndex((slide) => slide.id === slideId)
      if (bySlide >= 0) return bySlide

      const bySection = slides.findIndex((slide) => slide.sectionId === slideId)
      if (bySection >= 0) return bySection
    }

    return 0
  }, [slideId, slides])

  const current = slides[resolvedIndex]
  const { prev: prevChapter, next: nextChapter } = getAdjacentChapters(chapterId)

  useEffect(() => {
    if (!chapter || !current) return
    if (slideId === current.id) return
    navigate(`/chapter/${chapter.id}/${current.id}`, { replace: true })
  }, [chapter, current, navigate, slideId])

  useEffect(() => {
    if (nextChapter) preloadChapter(nextChapter.id)
  }, [nextChapter])

  useEffect(() => {
    if (!chapter || !slides.length || !current) return

    preloadTopicImages(
      getSlideImageQueries(current, {
        chapterTitleEn: chapter.titleEn,
        sectionTitleEn: current.sectionTitleEn,
      }),
    )

    const nextInChapter = slides[resolvedIndex + 1]
    if (nextInChapter) {
      preloadTopicImages(
        getSlideImageQueries(nextInChapter, {
          chapterTitleEn: chapter.titleEn,
          sectionTitleEn: nextInChapter.sectionTitleEn,
        }),
      )
      return
    }

    if (!nextChapter) return
    preloadTopicImages(
      getSlideImageQueries(
        {
          titleEn: nextChapter.titleEn,
          keywords: [],
        },
        {
          chapterTitleEn: nextChapter.titleEn,
          sectionTitleEn: nextChapter.sections[0]?.titleEn,
        },
      ),
    )
  }, [chapter, current, nextChapter, resolvedIndex, slides])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!chapter || !slides.length) return
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault()
        const next = Math.min(resolvedIndex + 1, slides.length - 1)
        if (next !== resolvedIndex) {
          navigate(`/chapter/${chapter.id}/${slides[next].id}`)
        }
      }
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        const prev = Math.max(resolvedIndex - 1, 0)
        if (prev !== resolvedIndex) {
          navigate(`/chapter/${chapter.id}/${slides[prev].id}`)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [chapter, navigate, resolvedIndex, slides])

  if (!meta || loadError) {
    return (
      <div className="slide">
        <h1>
          Chapter not found
          {showChinese ? ' / 未找到章节' : ''}
        </h1>
        <Link to="/">
          Back home
          {showChinese ? ' / 返回首页' : ''}
        </Link>
      </div>
    )
  }

  if (!chapter || !slides.length || !current) {
    return (
      <div className="slide route-loading">
        <p>Loading chapter…{showChinese ? ' / 正在加载章节…' : ''}</p>
      </div>
    )
  }

  const part = getPartForChapter(chapter.id)
  const partIndex = part ? parts.findIndex((item) => item.id === part.id) : -1
  const chapterCode = getChapterCode(chapter.id)

  const goTo = (nextIndex: number) => {
    const clamped = Math.max(0, Math.min(nextIndex, slides.length - 1))
    navigate(`/chapter/${chapter.id}/${slides[clamped].id}`)
  }

  return (
    <div className={`chapter-page theme-${part?.theme ?? 'navy'}`}>
      <div className="chapter-toolbar">
        <div>
          {part && partIndex >= 0 && (
            <p className="chapter-part-label">
              <PartIcon partId={part.id} className="part-icon" />
              Part {String.fromCharCode(65 + partIndex)} · {part.titleEn}
              {showChinese ? ` / ${part.titleZh}` : ''}
            </p>
          )}
          <h2>
            {chapterCode}: {chapter.titleEn}
          </h2>
          {showChinese && <p>{chapter.titleZh}</p>}
        </div>
        <div className="toolbar-actions">
          <button
            type="button"
            className={`zh-toggle-btn ${pageChinese ? 'active' : ''}`}
            onClick={togglePageChinese}
            aria-pressed={pageChinese}
            title={
              pageChinese
                ? 'Hide Chinese on this page'
                : 'Show Chinese on this page only'
            }
          >
            {pageChinese ? '中文 · On' : '中文 · Page'}
          </button>
          <button
            type="button"
            onClick={() => goTo(resolvedIndex - 1)}
            disabled={resolvedIndex === 0}
          >
            Prev{showChinese ? ' / 上一页' : ''}
          </button>
          <button
            type="button"
            onClick={() => goTo(resolvedIndex + 1)}
            disabled={resolvedIndex === slides.length - 1}
          >
            Next{showChinese ? ' / 下一页' : ''}
          </button>
        </div>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${((resolvedIndex + 1) / slides.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <SlideView
          slide={current}
          sectionTitleEn={current.sectionTitleEn}
          sectionTitleZh={current.sectionTitleZh}
          chapterTitleEn={chapter.titleEn}
          chapterCode={chapterCode ?? ''}
          slideIndex={resolvedIndex}
          slideTotal={slides.length}
        />
      </AnimatePresence>

      <div className="chapter-bottom-nav">
        {prevChapter ? (
          <Link to={`/chapter/${prevChapter.id}/${prevChapter.firstSlideId}`}>
            ← Previous Chapter{showChinese ? ' / 上一章' : ''}
          </Link>
        ) : (
          <span />
        )}
        {nextChapter ? (
          <Link to={`/chapter/${nextChapter.id}/${nextChapter.firstSlideId}`}>
            Next Chapter{showChinese ? ' / 下一章' : ''} →
          </Link>
        ) : (
          <Link to="/">
            Back to syllabus{showChinese ? ' / 返回目录' : ''}
          </Link>
        )}
      </div>
    </div>
  )
}
