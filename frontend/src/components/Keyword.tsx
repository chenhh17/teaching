import type { Keyword as KeywordType } from '../types/course'
import { useChineseLocale } from '../context/ChineseLocaleContext'

type Props = {
  item: KeywordType
  partTitleEn?: string
  chapterTitleEn?: string
}

function keywordSearchUrl(
  term: string,
  partTitleEn?: string,
  chapterTitleEn?: string,
) {
  const realm = [partTitleEn, chapterTitleEn].filter(Boolean).join(' ')
  const query = realm
    ? `What is ${term} in the realm of ${realm}`
    : `What is ${term}`
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`
}

export function Keyword({ item, partTitleEn, chapterTitleEn }: Props) {
  const { showChinese } = useChineseLocale()
  const href = keywordSearchUrl(item.en, partTitleEn, chapterTitleEn)
  const realm = [partTitleEn, chapterTitleEn].filter(Boolean).join(' ')
  const title = realm
    ? `Search: What is ${item.en} in the realm of ${realm}`
    : `Search: What is ${item.en}`

  return (
    <a
      className="keyword"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <span className="keyword-en">{item.en}</span>
      {showChinese && <span className="keyword-zh">{item.zh}</span>}
    </a>
  )
}

type ListProps = {
  items: KeywordType[]
  partTitleEn?: string
  chapterTitleEn?: string
}

export function KeywordList({
  items,
  partTitleEn,
  chapterTitleEn,
}: ListProps) {
  if (!items.length) return null
  return (
    <div className="keyword-list">
      {items.map((item) => (
        <Keyword
          key={`${item.en}-${item.zh}`}
          item={item}
          partTitleEn={partTitleEn}
          chapterTitleEn={chapterTitleEn}
        />
      ))}
    </div>
  )
}
