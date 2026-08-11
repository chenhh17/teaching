import type { Keyword as KeywordType } from '../types/course'
import { useChineseLocale } from '../context/ChineseLocaleContext'

type Props = {
  item: KeywordType
}

export function Keyword({ item }: Props) {
  const { showChinese } = useChineseLocale()
  return (
    <span className="keyword">
      <span className="keyword-en">{item.en}</span>
      {showChinese && <span className="keyword-zh">{item.zh}</span>}
    </span>
  )
}

type ListProps = {
  items: KeywordType[]
}

export function KeywordList({ items }: ListProps) {
  if (!items.length) return null
  return (
    <div className="keyword-list">
      {items.map((item) => (
        <Keyword key={`${item.en}-${item.zh}`} item={item} />
      ))}
    </div>
  )
}
