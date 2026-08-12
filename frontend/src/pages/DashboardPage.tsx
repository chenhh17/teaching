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
