import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  chapters,
  getAllSlides,
  getChapterCode,
  getChaptersByPart,
  getPartForChapter,
  parts,
} from '../data/chapters'
import {
  readSidebarCollapsed,
  saveSidebarCollapsed,
} from '../lib/courseProgress'
import { useChineseLocale } from '../context/ChineseLocaleContext'
import { PartIcon } from './PartIcon'

type Props = {
  activeChapterId?: string
  activeSlideId?: string
}

function allPartsOpen() {
  return Object.fromEntries(parts.map((part) => [part.id, true]))
}

function onlyPartOpen(partId: string) {
  return Object.fromEntries(parts.map((part) => [part.id, part.id === partId]))
}

function allChaptersClosed() {
  return Object.fromEntries(chapters.map((chapter) => [chapter.id, false]))
}

function normalize(text: string) {
  return text.trim().toLowerCase()
}

export function Sidebar({ activeChapterId, activeSlideId }: Props) {
  const location = useLocation()
  const navigate = useNavigate()
  const { showChinese, globalChinese, setShowChinese } = useChineseLocale()
  const isHome = location.pathname === '/'
  const browseAll =
    isHome && new URLSearchParams(location.search).get('browse') === '1'

  const activeSectionId = (() => {
    if (!activeChapterId || !activeSlideId) return undefined
    const chapter = chapters.find((item) => item.id === activeChapterId)
    if (!chapter) return undefined
    return getAllSlides(chapter).find((slide) => slide.id === activeSlideId)
      ?.sectionId
  })()

  const activePart = activeChapterId
    ? getPartForChapter(activeChapterId)
    : undefined
  const activePartId = activePart?.id
  const activePartLetter = (() => {
    if (!activePart) return undefined
    const partIndex = parts.findIndex((item) => item.id === activePart.id)
    if (partIndex < 0) return undefined
    return String.fromCharCode(65 + partIndex)
  })()

  const [expandedParts, setExpandedParts] = useState<Record<string, boolean>>(
    () => {
      if (browseAll || !activePartId) return allPartsOpen()
      return onlyPartOpen(activePartId)
    },
  )
  const [expandedChapters, setExpandedChapters] = useState<
    Record<string, boolean>
  >(() =>
    Object.fromEntries(
      chapters.map((chapter) => [chapter.id, chapter.id === activeChapterId]),
    ),
  )
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(() => readSidebarCollapsed())
  const [mobileOpen, setMobileOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (browseAll) {
      setExpandedParts(allPartsOpen())
      return
    }

    if (!activeChapterId || !activePartId) return

    setExpandedParts((current) => {
      if (query.trim()) return current
      return onlyPartOpen(activePartId)
    })
    setExpandedChapters((current) => ({
      ...current,
      [activeChapterId]: true,
    }))
  }, [activeChapterId, activePartId, browseAll, query])

  useEffect(() => {
    saveSidebarCollapsed(collapsed)
  }, [collapsed])

  useEffect(() => {
    if (!searchOpen) return
    searchInputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    if (!searchOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [searchOpen])

  useEffect(() => {
    const shell = document.querySelector('.app-shell')
    if (!shell) return
    shell.classList.toggle('sidebar-collapsed', collapsed)
    shell.classList.toggle('sidebar-mobile-open', mobileOpen)
  }, [collapsed, mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const filtered = useMemo(() => {
    const q = normalize(query)
    if (!q) {
      return parts.map((part) => ({
        part,
        chapters: getChaptersByPart(part).map((chapter) => ({
          chapter,
          sections: chapter.sections,
        })),
      }))
    }

    return parts
      .map((part) => {
        const partHit =
          normalize(part.titleEn).includes(q) ||
          normalize(part.titleZh).includes(q) ||
          normalize(`part ${String.fromCharCode(65 + parts.indexOf(part))}`).includes(
            q,
          )

        const matchedChapters = getChaptersByPart(part)
          .map((chapter) => {
            const code = getChapterCode(chapter.id) ?? ''
            const chapterHit =
              partHit ||
              normalize(chapter.titleEn).includes(q) ||
              normalize(chapter.titleZh).includes(q) ||
              normalize(code).includes(q) ||
              normalize(chapter.id).includes(q)

            const sections = chapter.sections.filter(
              (section) =>
                chapterHit ||
                normalize(section.titleEn).includes(q) ||
                normalize(section.titleZh).includes(q),
            )

            if (!chapterHit && sections.length === 0) return null
            return {
              chapter,
              sections: chapterHit ? chapter.sections : sections,
            }
          })
          .filter((item): item is NonNullable<typeof item> => Boolean(item))

        if (!partHit && matchedChapters.length === 0) return null
        return { part, chapters: matchedChapters }
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
  }, [query])

  useEffect(() => {
    if (!query.trim()) return
    const nextParts = Object.fromEntries(parts.map((part) => [part.id, false]))
    const nextChapters = allChaptersClosed()
    for (const group of filtered) {
      nextParts[group.part.id] = true
      for (const item of group.chapters) {
        nextChapters[item.chapter.id] = true
      }
    }
    setExpandedParts(nextParts)
    setExpandedChapters(nextChapters)
  }, [filtered, query])

  const togglePart = (partId: string) => {
    setExpandedParts((current) => ({
      ...current,
      [partId]: !current[partId],
    }))
  }

  const openPart = (partId: string) => {
    setExpandedParts((current) => ({
      ...current,
      [partId]: true,
    }))
    const part = parts.find((item) => item.id === partId)
    if (!part) return
    const firstChapter = getChaptersByPart(part)[0]
    const firstSlide = firstChapter ? getAllSlides(firstChapter)[0] : undefined
    if (!firstChapter || !firstSlide) return
    navigate(`/chapter/${firstChapter.id}/${firstSlide.id}`)
  }

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((current) => ({
      ...current,
      [chapterId]: !current[chapterId],
    }))
  }

  const showFull = !collapsed || mobileOpen

  return (
    <>
      <button
        type="button"
        className="sidebar-mobile-toggle"
        onClick={() => {
          setCollapsed(false)
          setMobileOpen(true)
        }}
        aria-label="Open course menu"
      >
        Menu
      </button>

      {mobileOpen && (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close course menu"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {searchOpen && (
        <div className="sidebar-search-modal" role="dialog" aria-modal="true" aria-label="Search course">
          <button
            type="button"
            className="sidebar-search-modal-backdrop"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
          />
          <div className="sidebar-search-modal-panel">
            <div className="sidebar-search-modal-header">
              <strong>Search</strong>
              <button
                type="button"
                className="sidebar-icon-btn"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                ×
              </button>
            </div>
            <input
              ref={searchInputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search parts, chapters…"
              aria-label="Search course contents"
            />
            {query.trim() && (
              <button
                type="button"
                className="sidebar-search-clear"
                onClick={() => setQuery('')}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      <aside
        className={`sidebar ${collapsed ? 'is-collapsed' : ''} ${mobileOpen ? 'is-mobile-open' : ''}`}
      >
        <div className="sidebar-header">
          <div className="sidebar-brand-link">
            <strong>Intro Course</strong>
            <span>
              {showChinese
                ? 'Windows · 编程 · 网络'
                : 'Windows · Programming · Network'}
            </span>
          </div>
          <div className="sidebar-header-actions">
            {showFull && (
              <button
                type="button"
                className={`sidebar-icon-btn ${searchOpen || query ? 'active' : ''}`}
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                title="Search"
              >
                ⌕
              </button>
            )}
            <button
              type="button"
              className="sidebar-icon-btn"
              onClick={() => setCollapsed((value) => !value)}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={collapsed ? 'Expand' : 'Collapse'}
            >
              {collapsed ? '»' : '«'}
            </button>
            <button
              type="button"
              className="sidebar-icon-btn sidebar-close-mobile"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
        </div>

        {showFull && (
          <div className="sidebar-locale-bar">
            <span className="sidebar-locale-label">中文</span>
            <label className="sidebar-locale-switch">
              <input
                type="checkbox"
                checked={globalChinese}
                onChange={(event) => setShowChinese(event.target.checked)}
                aria-label="Show Chinese translation for all pages"
              />
              <span className="sidebar-locale-track" aria-hidden="true">
                <span className="sidebar-locale-thumb" />
              </span>
              <span className="sidebar-locale-state">
                {globalChinese ? 'On' : 'Off'}
              </span>
            </label>
          </div>
        )}

        {showFull && query.trim() && (
          <div className="sidebar-tools">
            <p className="sidebar-search-hint">
              Filtering: “{query.trim()}”
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setSearchOpen(false)
                }}
              >
                Clear
              </button>
            </p>
          </div>
        )}

        {!showFull && (
          <div className="sidebar-focus">
            {activePart && activePartLetter ? (
              <div
                className={`sidebar-focus-card theme-${activePart.theme}`}
              >
                <button
                  type="button"
                  className="sidebar-focus-part"
                  onClick={() => setCollapsed(false)}
                  title="Expand sidebar"
                >
                  <span className="sidebar-focus-code">
                    <PartIcon partId={activePart.id} className="part-icon" />
                    Part {activePartLetter}
                  </span>
                  <span>{activePart.titleEn}</span>
                  {showChinese && <span>{activePart.titleZh}</span>}
                </button>
                <nav
                  className="sidebar-focus-chapters"
                  aria-label={`Part ${activePartLetter} chapters`}
                >
                  {getChaptersByPart(activePart).map((chapter) => {
                    const firstSlide = getAllSlides(chapter)[0]
                    const code = getChapterCode(chapter.id)
                    const isActive = chapter.id === activeChapterId
                    return (
                      <div
                        key={chapter.id}
                        className={`sidebar-focus-chapter-block ${isActive ? 'active' : ''}`}
                      >
                        <NavLink
                          to={`/chapter/${chapter.id}/${firstSlide.id}`}
                          className={() =>
                            `sidebar-focus-chapter ${isActive ? 'active' : ''}`
                          }
                          title={`${code}: ${chapter.titleEn}`}
                        >
                          <span className="sidebar-focus-code">{code}</span>
                          <span>{chapter.titleEn}</span>
                          {showChinese && <span>{chapter.titleZh}</span>}
                        </NavLink>
                        {isActive && chapter.sections.length > 0 && (
                          <ul className="sidebar-focus-sections">
                            {chapter.sections.map((section) => {
                              const sectionFirst = section.slides[0]
                              const sectionActive =
                                section.id === activeSectionId
                              return (
                                <li key={section.id}>
                                  <NavLink
                                    to={`/chapter/${chapter.id}/${sectionFirst.id}`}
                                    className={() =>
                                      `sidebar-focus-section ${sectionActive ? 'active' : ''}`
                                    }
                                    title={
                                      showChinese
                                        ? `${section.titleEn} / ${section.titleZh}`
                                        : section.titleEn
                                    }
                                  >
                                    <span>{section.titleEn}</span>
                                    {showChinese && (
                                      <span>{section.titleZh}</span>
                                    )}
                                  </NavLink>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </div>
                    )
                  })}
                </nav>
              </div>
            ) : (
              <p className="sidebar-focus-empty">No chapter selected</p>
            )}
          </div>
        )}

        <nav
          className="sidebar-nav"
          aria-label="Course chapters"
          hidden={!showFull}
          aria-hidden={!showFull}
        >
          {filtered.length === 0 && (
            <p className="sidebar-empty">No matching chapters.</p>
          )}

          {filtered.map(({ part, chapters: partChapters }) => {
            const partIndex = parts.findIndex((item) => item.id === part.id)
            const partExpanded =
              Boolean(expandedParts[part.id]) || Boolean(query.trim())
            const partActive = part.id === activePartId
            const letter = String.fromCharCode(65 + partIndex)

            return (
              <div
                key={part.id}
                className={`nav-part theme-${part.theme} ${partActive ? 'active' : ''} ${partExpanded ? 'open' : ''}`}
              >
                <div className="nav-part-row">
                  <button
                    type="button"
                    className="nav-part-toggle"
                    onClick={() => togglePart(part.id)}
                    aria-expanded={partExpanded}
                    aria-label={`Toggle Part ${letter}`}
                  >
                    {partExpanded ? '▾' : '▸'}
                  </button>
                  <button
                    type="button"
                    className="nav-part-title"
                    onClick={() => openPart(part.id)}
                  >
                    <span className="nav-part-text">
                      <span className="nav-part-label">
                        <PartIcon partId={part.id} className="part-icon" />
                        Part {letter}
                      </span>
                      <span className="nav-part-names">
                        <span>{part.titleEn}</span>
                        {showChinese && <span>{part.titleZh}</span>}
                      </span>
                    </span>
                  </button>
                </div>

                {partExpanded &&
                  partChapters.map(({ chapter, sections }) => {
                    const chapterExpanded =
                      Boolean(expandedChapters[chapter.id]) ||
                      Boolean(query.trim())
                    const firstSlide = getAllSlides(chapter)[0]
                    const chapterActive = activeChapterId === chapter.id

                    return (
                      <div
                        key={chapter.id}
                        className={`nav-chapter ${chapterActive ? 'active' : ''} ${chapterExpanded ? 'open' : ''}`}
                      >
                        <div className="nav-chapter-row">
                          <button
                            type="button"
                            className="nav-chapter-toggle"
                            onClick={() => toggleChapter(chapter.id)}
                            aria-expanded={chapterExpanded}
                            aria-label={`Toggle ${chapter.titleEn}`}
                          >
                            {chapterExpanded ? '▾' : '▸'}
                          </button>
                          <NavLink
                            to={`/chapter/${chapter.id}/${firstSlide.id}`}
                            className={() =>
                              `nav-chapter-link ${chapterActive ? 'active' : ''}`
                            }
                          >
                            <span className="nav-num">
                              {getChapterCode(chapter.id)}
                            </span>
                            <span className="nav-titles">
                              <span>{chapter.titleEn}</span>
                              {showChinese && <span>{chapter.titleZh}</span>}
                            </span>
                          </NavLink>
                        </div>

                        {chapterExpanded && (
                          <ul className="nav-sections">
                            {sections.map((section) => {
                              const sectionFirst = section.slides[0]
                              return (
                                <li key={section.id}>
                                  <NavLink
                                    to={`/chapter/${chapter.id}/${sectionFirst.id}`}
                                    className={() =>
                                      section.id === activeSectionId
                                        ? 'active'
                                        : undefined
                                    }
                                  >
                                    <span>{section.titleEn}</span>
                                    {showChinese && (
                                      <span>{section.titleZh}</span>
                                    )}
                                  </NavLink>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </div>
                    )
                  })}
              </div>
            )
          })}
        </nav>

      </aside>
    </>
  )
}
