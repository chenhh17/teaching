import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { SlideContent, SlideImage, SlideLayout } from '../types/course'
import { useChineseLocale } from '../context/ChineseLocaleContext'
import { getSlideImageQueries } from '../lib/topicImageCache'
import { KeywordList } from './Keyword'
import { TopicSearchImages } from './TopicSearchImages'

type Props = {
  slide: SlideContent
  sectionTitleEn: string
  sectionTitleZh: string
  partTitleEn?: string
  chapterTitleEn?: string
  chapterCode: string
  slideIndex: number
  slideTotal: number
}

function resolveLayout(slide: SlideContent, hasSearchImages: boolean): SlideLayout {
  if (slide.layout) {
    if (
      hasSearchImages &&
      (slide.layout === 'text' ||
        slide.layout === 'steps' ||
        slide.layout === 'callout')
    ) {
      return 'split'
    }
    return slide.layout
  }
  if (slide.illustration === 'title') return 'title'
  if (
    hasSearchImages ||
    slide.image ||
    (slide.images && slide.images.length > 0)
  ) {
    return 'split'
  }
  return 'text'
}

function resolvePhotos(slide: SlideContent): SlideImage[] {
  const photos: SlideImage[] = []
  if (slide.images && slide.images.length > 0) {
    for (const item of slide.images) {
      if (item?.src) photos.push({ src: item.src, alt: item.alt || slide.titleEn })
    }
  }
  if (slide.image) {
    const already = photos.some((photo) => photo.src === slide.image)
    if (!already) {
      photos.push({ src: slide.image, alt: slide.imageAlt || slide.titleEn })
    }
  }
  return photos
}

export function SlideView({
  slide,
  sectionTitleEn,
  sectionTitleZh,
  partTitleEn,
  chapterTitleEn,
  chapterCode,
  slideIndex,
  slideTotal,
}: Props) {
  const { showChinese } = useChineseLocale()
  const searchQueries = useMemo(
    () =>
      getSlideImageQueries(slide, {
        chapterTitleEn,
        sectionTitleEn,
      }),
    [slide, chapterTitleEn, sectionTitleEn],
  )
  const hasSearchImages = searchQueries.length > 0
  const layout = resolveLayout(slide, hasSearchImages)
  const photos = resolvePhotos(slide)
  const showImage = photos.length > 0 || hasSearchImages
  const [expandedSrc, setExpandedSrc] = useState<string | null>(null)
  const [expandedAlt, setExpandedAlt] = useState(slide.titleEn)

  useEffect(() => {
    setExpandedSrc(null)
    setExpandedAlt(slide.titleEn)
  }, [slide.id, slide.titleEn])

  useEffect(() => {
    if (!expandedSrc) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedSrc(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expandedSrc])

  const bulletClass =
    layout === 'steps' ? 'bullet-list is-steps' : 'bullet-list'
  const photoClass =
    photos.length > 1 ? 'slide-photo-stack is-multi' : 'slide-photo-stack'

  return (
    <motion.article
      key={slide.id}
      className={`slide layout-${layout} ${showImage ? 'has-image' : 'no-image'} ${photos.length > 1 || searchQueries.length > 1 ? 'has-multi-image' : ''}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      <header className="slide-header">
        <div className="slide-section-label">
          <span>{chapterCode}</span>
          <span>
            {sectionTitleEn}
            {showChinese ? ` / ${sectionTitleZh}` : ''}
          </span>
        </div>
        <h1 className="slide-title">
          <span className="slide-title-en">{slide.titleEn}</span>
          {showChinese && (
            <span className="slide-title-zh">{slide.titleZh}</span>
          )}
        </h1>
        {(slide.subtitleEn || (showChinese && slide.subtitleZh)) && (
          <p className="slide-subtitle">
            {slide.subtitleEn && <span>{slide.subtitleEn}</span>}
            {showChinese && slide.subtitleZh && <span>{slide.subtitleZh}</span>}
          </p>
        )}
      </header>

      <div className="slide-body">
        <div className="slide-main">
          {slide.keywords && slide.keywords.length > 0 && (
            <KeywordList
              items={slide.keywords}
              partTitleEn={partTitleEn}
              chapterTitleEn={chapterTitleEn}
            />
          )}

          {(slide.bodyEn || (showChinese && slide.bodyZh)) && (
            <div className="slide-body-text">
              {slide.bodyEn && <p className="body-en">{slide.bodyEn}</p>}
              {showChinese && slide.bodyZh && (
                <p className="body-zh">{slide.bodyZh}</p>
              )}
            </div>
          )}

          {slide.bullets && slide.bullets.length > 0 && (
            <ul className={bulletClass}>
              {slide.bullets.map((bullet, index) => (
                <motion.li
                  key={`${slide.id}-b-${index}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.04 }}
                >
                  {layout === 'steps' && (
                    <span className="step-index">{index + 1}</span>
                  )}
                  <div className="bullet-copy">
                    <div className="bullet-en">{bullet.en}</div>
                    {showChinese && (
                      <div className="bullet-zh">{bullet.zh}</div>
                    )}
                    {bullet.keywords && bullet.keywords.length > 0 && (
                      <KeywordList
                        items={bullet.keywords}
                        partTitleEn={partTitleEn}
                        chapterTitleEn={chapterTitleEn}
                      />
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          )}

          {(slide.noteEn || (showChinese && slide.noteZh)) && (
            <aside className="slide-note">
              {slide.noteEn && <div>{slide.noteEn}</div>}
              {showChinese && slide.noteZh && <div>{slide.noteZh}</div>}
            </aside>
          )}
        </div>

        {hasSearchImages && (
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <TopicSearchImages
              queries={searchQueries}
              onExpand={(src, alt) => {
                setExpandedSrc(src)
                setExpandedAlt(alt)
              }}
            />
          </motion.div>
        )}

        {!hasSearchImages && photos.length > 0 && (
          <motion.div
            className={photoClass}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {photos.map((photo) => (
              <figure key={photo.src} className="slide-photo">
                <button
                  type="button"
                  className="slide-photo-button"
                  onClick={() => {
                    setExpandedSrc(photo.src)
                    setExpandedAlt(photo.alt)
                  }}
                  aria-label={`Expand image: ${photo.alt}`}
                >
                  <img src={photo.src} alt={photo.alt} />
                  <span className="slide-photo-hint">Expand</span>
                </button>
                <figcaption className="slide-photo-caption">{photo.alt}</figcaption>
              </figure>
            ))}
          </motion.div>
        )}
      </div>

      <footer className="slide-footer">
        <span>
          Slide {slideIndex + 1} / {slideTotal}
        </span>
        <span>Intro Course · Lecture Notes</span>
      </footer>

      <AnimatePresence>
        {expandedSrc && (
          <motion.div
            className="image-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedSrc(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded image"
          >
            <button
              type="button"
              className="image-lightbox-close"
              onClick={() => setExpandedSrc(null)}
              aria-label="Close"
            >
              ×
            </button>
            <motion.img
              src={expandedSrc}
              alt={expandedAlt}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
