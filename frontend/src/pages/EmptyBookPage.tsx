import { Link } from 'react-router-dom'
import type { Book } from '../types/course'
import { useChineseLocale } from '../context/ChineseLocaleContext'

type Props = {
  book: Book
}

export function EmptyBookPage({ book }: Props) {
  const { showChinese, pageChinese, togglePageChinese } = useChineseLocale()

  return (
    <div className="dashboard">
      <section className={`empty-book slide theme-${book.theme}`}>
        <div className="home-hero-top">
          <p className="eyebrow">
            Book{showChinese ? ' / 书' : ''}
          </p>
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
          <span>{book.titleEn}</span>
          {showChinese && <span>{book.titleZh}</span>}
        </h1>
        <p className="home-lead">
          <span>{book.summaryEn}</span>
          {showChinese && <span>{book.summaryZh}</span>}
        </p>
        <p className="empty-book-note">
          <span>No chapters yet. Content will be added later.</span>
          {showChinese && <span>暂无章节。内容稍后补充。</span>}
        </p>
        <div className="home-actions">
          <Link className="primary-btn" to="/">
            Back to Books{showChinese ? ' / 返回书库' : ''}
          </Link>
        </div>
      </section>
    </div>
  )
}
