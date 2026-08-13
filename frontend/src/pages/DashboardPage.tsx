import { Link } from 'react-router-dom'
import { books, bookCoverUrl, bookOpenPath } from '../data/books'
import { getResumePath } from '../lib/courseProgress'
import { useChineseLocale } from '../context/ChineseLocaleContext'
import { BookIcon } from '../components/BookIcon'

export function DashboardPage() {
  const { showChinese, pageChinese, togglePageChinese } = useChineseLocale()

  return (
    <div className="shelf-page">
      <header className="shelf-top">
        <div>
          <h1>Library</h1>
          {showChinese && <p className="shelf-top-zh">书库</p>}
        </div>
        <div className="shelf-top-actions">
          <Link
            to="/analysis"
            className="shelf-analysis-btn"
            aria-label="Open reading analysis"
            title="Analysis"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.998 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </Link>
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
      </header>

      <div className="shelf-stage">
        <div className="shelf-row" role="list">
          {books.map((book) => {
            const resumePath = getResumePath(book.id)
            const status =
              book.kind === 'empty'
                ? showChinese
                  ? 'Empty / 暂空'
                  : 'Empty'
                : resumePath
                  ? showChinese
                    ? 'Continue / 继续'
                    : 'Continue'
                  : showChinese
                    ? 'Open / 打开'
                    : 'Open'

            return (
              <Link
                key={book.id}
                to={bookOpenPath(book.id)}
                className={`shelf-book theme-${book.theme}`}
                role="listitem"
                aria-label={`${book.titleEn}${showChinese ? ` / ${book.titleZh}` : ''}`}
              >
                <span className="shelf-book-spine" aria-hidden="true">
                  <span>{showChinese ? book.spineZh : book.spineEn}</span>
                </span>
                <span
                  className="shelf-book-cover"
                  style={{
                    backgroundImage: `url(${bookCoverUrl(book.cover)})`,
                  }}
                >
                  <span className="shelf-book-shade" aria-hidden="true" />
                  <span className="shelf-book-content">
                    <BookIcon icon={book.icon} className="shelf-book-icon" />
                    <strong>
                      <span>{book.titleEn}</span>
                      {showChinese && <span>{book.titleZh}</span>}
                    </strong>
                    <em>{status}</em>
                  </span>
                </span>
              </Link>
            )
          })}
        </div>
        <div className="shelf-board" aria-hidden="true" />
      </div>
    </div>
  )
}
