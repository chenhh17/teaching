import { Link } from 'react-router-dom'
import {
  getChapterCode,
  getChaptersByPart,
  getCourseStats,
  parts,
  preloadChapter,
} from '../data/chapters'
import { getResumePath } from '../lib/courseProgress'
import { useChineseLocale } from '../context/ChineseLocaleContext'
import { PartIcon } from '../components/PartIcon'

export function HomePage() {
  const stats = getCourseStats()
  const { showChinese, pageChinese, togglePageChinese } = useChineseLocale()
  const firstChapter = getChaptersByPart(parts[0])[0]
  const resumePath = getResumePath()

  return (
    <div className="home">
      <section className="home-hero slide">
        <div className="home-hero-top">
          <p className="eyebrow">Windows-Focused University Slides</p>
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
        </div>
        <h1>
          <span>Programming, Internet & Computers</span>
          {showChinese && <span>编程 · 互联网 · 计算机入门（Windows）</span>}
        </h1>
        <p className="home-lead">
          <span>
            A beginner bilingual course in ten parts: Foundations, Computer
            Hardware, Operating System, Files and Data, System Tools,
            Programming, Coding Practice, Network, Web and Browser, and Digital
            Habits.
          </span>
          {showChinese && (
            <span>
              面向 Windows 初学者的双语课件，共十个大篇章：入门基础、计算机硬件、操作系统、文件与数据、系统工具、编程、编程实践、网络、网页与浏览器、数字习惯。
            </span>
          )}
        </p>
        <div className="home-stats">
          <div>
            <strong>{stats.partCount}</strong>
            <span>Parts{showChinese ? ' / 大篇章' : ''}</span>
          </div>
          <div>
            <strong>{stats.chapterCount}</strong>
            <span>Chapters{showChinese ? ' / 章节' : ''}</span>
          </div>
          <div>
            <strong>{stats.slideCount}</strong>
            <span>Slides{showChinese ? ' / 知识点页' : ''}</span>
          </div>
        </div>
        <div className="home-actions">
          {resumePath && (
            <Link className="primary-btn" to={resumePath}>
              Continue{showChinese ? ' / 继续学习' : ''}
            </Link>
          )}
              {firstChapter && (
                <Link
                  className={resumePath ? 'secondary-btn' : 'primary-btn'}
                  to={`/chapter/${firstChapter.id}/${firstChapter.firstSlideId}`}
                  onMouseEnter={() => preloadChapter(firstChapter.id)}
                  onFocus={() => preloadChapter(firstChapter.id)}
                >
                  Start Part A{showChinese ? ' / 开始篇章 A' : ''}
                </Link>
              )}
            </div>
          </section>

          {parts.map((part, partIndex) => {
            const partChapters = getChaptersByPart(part)
            return (
              <section key={part.id} className={`home-part theme-${part.theme}`}>
                <header className="home-part-header">
                  <p className="home-part-label">
                    <PartIcon partId={part.id} className="part-icon" />
                    Part {String.fromCharCode(65 + partIndex)}
                    {showChinese
                      ? ` / 篇章 ${String.fromCharCode(65 + partIndex)}`
                      : ''}
                  </p>
                  <h2>
                    <span>{part.titleEn}</span>
                    {showChinese && <span>{part.titleZh}</span>}
                  </h2>
                  <p className="home-part-summary">
                    <span>{part.summaryEn}</span>
                    {showChinese && <span>{part.summaryZh}</span>}
                  </p>
                </header>

                <div className="home-grid">
                  {partChapters.map((chapter) => (
                    <div key={chapter.id}>
                      <Link
                        to={`/chapter/${chapter.id}/${chapter.firstSlideId}`}
                        className="chapter-card"
                        onMouseEnter={() => preloadChapter(chapter.id)}
                        onFocus={() => preloadChapter(chapter.id)}
                      >
                        <span className="chapter-card-num">
                          {getChapterCode(chapter.id)}
                        </span>
                        <h3>
                          <span>{chapter.titleEn}</span>
                          {showChinese && <span>{chapter.titleZh}</span>}
                        </h3>
                        <p>
                          <span>{chapter.summaryEn}</span>
                          {showChinese && <span>{chapter.summaryZh}</span>}
                        </p>
                        <span className="chapter-card-meta">
                          {chapter.sections.length} sections · {chapter.slideCount}{' '}
                          slides
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )
    }
