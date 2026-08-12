export type Keyword = {
  en: string
  zh: string
}

export type Bullet = {
  en: string
  zh: string
  keywords?: Keyword[]
}

export type SlideLayout =
  | 'title'
  | 'text'
  | 'split'
  | 'steps'
  | 'callout'

export type SlideImage = {
  src: string
  alt: string
}

export type SlideContent = {
  id: string
  titleEn: string
  titleZh: string
  subtitleEn?: string
  subtitleZh?: string
  layout?: SlideLayout
  bodyEn?: string
  bodyZh?: string
  bullets?: Bullet[]
  keywords?: Keyword[]
  noteEn?: string
  noteZh?: string
  image?: string
  imageAlt?: string
  images?: SlideImage[]
  imageQuery?: string
  imageQueries?: string[]
  illustration?:
    | 'code'
    | 'cursor'
    | 'python'
    | 'environment'
    | 'files'
    | 'terminal'
    | 'network'
    | 'protocol'
    | 'interface'
    | 'hardware'
    | 'security'
    | 'git'
    | 'title'
}

export type Section = {
  id: string
  titleEn: string
  titleZh: string
  slides: SlideContent[]
}

export type Chapter = {
  id: string
  titleEn: string
  titleZh: string
  summaryEn: string
  summaryZh: string
  sections: Section[]
}

export type PartTheme =
  | 'navy'
  | 'slate'
  | 'teal'
  | 'green'
  | 'indigo'
  | 'amber'
  | 'rose'
  | 'cyan'
  | 'orange'
  | 'violet'

export type Part = {
  id: string
  titleEn: string
  titleZh: string
  summaryEn: string
  summaryZh: string
  chapterIds: string[]
  theme: PartTheme
}

export type BookKind = 'course' | 'empty'

export type Book = {
  id: string
  titleEn: string
  titleZh: string
  summaryEn: string
  summaryZh: string
  theme: PartTheme
  kind: BookKind
  partIds?: string[]
  cover: string
  icon: 'computer' | 'video'
  spineEn: string
  spineZh: string
}
