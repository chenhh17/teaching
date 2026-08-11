import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const chaptersDir = join(root, 'src/data/chapters')
const catalogOut = join(root, 'src/data/chapterCatalog.ts')
const loadersOut = join(root, 'src/data/chapterLoaders.ts')

function readField(block, name) {
  const match = block.match(new RegExp(`${name}:\\s*'((?:\\\\'|[^'])*)'`))
  return match ? match[1].replace(/\\'/g, "'") : ''
}

function parseChapterFile(fileName, text) {
  const exportMatch = text.match(/export const (\w+)/)
  const idMatch = text.match(/id:\s*'([^']+)'/)
  if (!exportMatch || !idMatch) {
    throw new Error(`${fileName}: missing export or chapter id`)
  }

  const exportName = exportMatch[1]
  const id = idMatch[1]
  const titleEn = readField(text, 'titleEn')
  const titleZh = readField(text, 'titleZh')
  const summaryEn = readField(text, 'summaryEn')
  const summaryZh = readField(text, 'summaryZh')

  const sections = []
  const sectionChunks = text.split(/{\s*id:\s*'([^']+)'\s*,\s*titleEn:\s*'((?:\\'|[^'])*)'\s*,\s*titleZh:\s*'((?:\\'|[^'])*)'\s*,\s*slides:\s*\[/g)

  for (let i = 1; i < sectionChunks.length; i += 4) {
    const sectionId = sectionChunks[i]
    const sectionTitleEn = sectionChunks[i + 1].replace(/\\'/g, "'")
    const sectionTitleZh = sectionChunks[i + 2].replace(/\\'/g, "'")
    const body = sectionChunks[i + 3] ?? ''
    const nextSection = body.search(/{\s*id:\s*'[^']+'\s*,\s*titleEn:\s*'/)
    const slideRegion = nextSection >= 0 ? body.slice(0, nextSection) : body
    const slideIds = [...slideRegion.matchAll(/id:\s*'(ch-[a-j]-[^']+)'/g)].map(
      (item) => item[1],
    )
    if (!slideIds.length) continue
    sections.push({
      id: sectionId,
      titleEn: sectionTitleEn,
      titleZh: sectionTitleZh,
      firstSlideId: slideIds[0],
      slideIds,
    })
  }

  if (!sections.length) {
    throw new Error(`${fileName}: no sections parsed`)
  }

  const slideCount = sections.reduce((sum, section) => sum + section.slideIds.length, 0)
  const stem = fileName.replace(/\.ts$/, '')

  return {
    fileName,
    stem,
    exportName,
    id,
    titleEn,
    titleZh,
    summaryEn,
    summaryZh,
    slideCount,
    firstSlideId: sections[0].firstSlideId,
    sections,
  }
}

const files = readdirSync(chaptersDir)
  .filter((name) => /^ch-[a-j]-[a-z0-9-]+\.ts$/.test(name))
  .sort()

const chapters = files.map((fileName) =>
  parseChapterFile(fileName, readFileSync(join(chaptersDir, fileName), 'utf8')),
)

const catalogSource = `export type ChapterSectionMeta = {
  id: string
  titleEn: string
  titleZh: string
  firstSlideId: string
  slideIds: string[]
}

export type ChapterMeta = {
  id: string
  titleEn: string
  titleZh: string
  summaryEn: string
  summaryZh: string
  slideCount: number
  firstSlideId: string
  sections: ChapterSectionMeta[]
}

export const chapterCatalog: ChapterMeta[] = ${JSON.stringify(
  chapters.map(
    ({
      id,
      titleEn,
      titleZh,
      summaryEn,
      summaryZh,
      slideCount,
      firstSlideId,
      sections,
    }) => ({
      id,
      titleEn,
      titleZh,
      summaryEn,
      summaryZh,
      slideCount,
      firstSlideId,
      sections,
    }),
  ),
  null,
  2,
)}

export const chapterMetaById: Record<string, ChapterMeta> = Object.fromEntries(
  chapterCatalog.map((chapter) => [chapter.id, chapter]),
)
`

const loaderLines = chapters.map(
  (chapter) =>
    `  '${chapter.id}': () => import('./chapters/${chapter.stem}').then((m) => m.${chapter.exportName}),`,
)

const loadersSource = `import type { Chapter } from '../types/course'

export const chapterLoaders: Record<string, () => Promise<Chapter>> = {
${loaderLines.join('\n')}
}
`

writeFileSync(catalogOut, catalogSource)
writeFileSync(loadersOut, `${loadersSource}\n`)
console.log(
  `Generated catalog for ${chapters.length} chapters (${chapters.reduce((n, c) => n + c.slideCount, 0)} slides)`,
)
