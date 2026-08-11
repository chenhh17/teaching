import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const chaptersDir = join(root, 'src/data/chapters')
const imagesDir = join(root, 'public/images')
const partsFile = join(root, 'src/data/parts.ts')
const indexFile = join(chaptersDir, 'index.ts')

const errors = []
const existingImages = new Set(
  existsSync(imagesDir)
    ? readdirSync(imagesDir).filter((name) => /\.(jpe?g|png|webp|gif)$/i.test(name))
    : [],
)
const filePattern = /^ch-[a-j]-[a-z0-9-]+\.ts$/
const slideIdPattern = /^ch-[a-j]-[a-z0-9-]+-[a-z0-9-]+$/

const partsText = readFileSync(partsFile, 'utf8')
const partChapterIds = [...partsText.matchAll(/chapterIds:\s*\[([^\]]+)\]/gs)].flatMap((match) =>
  [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1]),
)

const partLetters = 'abcdefghij'
const expectedFileByChapterId = new Map()

let partCursor = 0
for (const match of partsText.matchAll(/chapterIds:\s*\[([^\]]+)\]/gs)) {
  const letter = partLetters[partCursor]
  const ids = [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
  for (const id of ids) {
    expectedFileByChapterId.set(id, letter)
  }
  partCursor += 1
}

const chapterFiles = readdirSync(chaptersDir)
  .filter((name) => filePattern.test(name))
  .sort()

const chapters = []
const slideIds = new Set()
const imageOwners = new Map()
let withImageSlides = 0

for (const fileName of chapterFiles) {
  const text = readFileSync(join(chaptersDir, fileName), 'utf8')
  const idMatch = text.match(/id:\s*'([^']+)'/)
  if (!idMatch) {
    errors.push(`${fileName}: missing chapter id`)
    continue
  }
  if (/\bnumber:\s*\d+/.test(text)) {
    errors.push(`${fileName}: chapter.number is no longer allowed`)
  }

  const chapterId = idMatch[1]
  const stem = fileName.replace(/\.ts$/, '')
  const letter = stem.split('-')[1]
  const expectedLetter = expectedFileByChapterId.get(chapterId)
  if (expectedLetter && expectedLetter !== letter) {
    errors.push(
      `${fileName}: chapter "${chapterId}" belongs to Part ${expectedLetter.toUpperCase()} but file uses ${letter}`,
    )
  }

  chapters.push({ fileName, chapterId, stem, text })

  const slideBlocks = text.split(/id:\s*'(ch-[a-j]-[^']+)'/).slice(1)
  for (let i = 0; i < slideBlocks.length; i += 2) {
    const slideId = slideBlocks[i]
    const body = slideBlocks[i + 1] ?? ''
    const nextIdAt = body.search(/id:\s*'ch-[a-j]-/)
    const chunk = nextIdAt >= 0 ? body.slice(0, nextIdAt) : body.slice(0, 500)

    if (slideIds.has(slideId)) {
      errors.push(`Duplicate slide id "${slideId}"`)
    }
    slideIds.add(slideId)

    if (!slideId.startsWith(`${stem}-`)) {
      errors.push(`${fileName}: slide "${slideId}" should start with ${stem}-`)
    }
    if (!slideIdPattern.test(slideId)) {
      errors.push(`${fileName}: slide "${slideId}" has unexpected shape`)
    }

    const slideImages = [
      ...[...chunk.matchAll(/image:\s*'([^']+)'/g)].map((m) => m[1]),
      ...[...chunk.matchAll(/src:\s*'([^']+)'/g)].map((m) => m[1]),
    ]
    const uniqueSlideImages = [...new Set(slideImages)]
    if (uniqueSlideImages.length) {
      withImageSlides += 1
    }
    if (/image:\s*'/.test(chunk) && !/imageAlt:/.test(chunk)) {
      errors.push(`Slide "${slideId}" has image but missing imageAlt`)
    }
    if (/images:\s*\[/.test(chunk)) {
      for (const img of uniqueSlideImages) {
        if (!/alt:\s*'/.test(chunk)) {
          errors.push(`Slide "${slideId}" images entry missing alt`)
          break
        }
      }
    }
    for (const image of uniqueSlideImages) {
      if (!image.startsWith('/images/')) {
        errors.push(`Slide "${slideId}" image must start with /images/`)
        continue
      }
      const file = image.replace('/images/', '')
      if (!existingImages.has(file) || !existsSync(join(imagesDir, file))) {
        errors.push(`Slide "${slideId}" points to missing file ${image}`)
      }
      const owner = imageOwners.get(image)
      if (owner) {
        errors.push(
          `Repeated image ${image} on "${slideId}" (already used by "${owner}")`,
        )
      } else {
        imageOwners.set(image, slideId)
      }
    }
  }
}

const chapterById = new Map(chapters.map((chapter) => [chapter.chapterId, chapter]))
for (const chapterId of partChapterIds) {
  if (!chapterById.has(chapterId)) {
    errors.push(`parts.ts references missing chapter "${chapterId}"`)
  }
}

for (const chapter of chapters) {
  if (!partChapterIds.includes(chapter.chapterId)) {
    errors.push(`Chapter "${chapter.chapterId}" is not listed in parts.ts`)
  }
}

const numericFiles = readdirSync(chaptersDir).filter((name) => /^ch\d{2}-/.test(name))
if (numericFiles.length) {
  errors.push(`Numeric chapter files still present: ${numericFiles.join(', ')}`)
}

const indexText = readFileSync(indexFile, 'utf8')
if (indexText.includes('slideImages')) {
  errors.push('chapters/index.ts still references slideImages')
}
if (!indexText.includes('parts.flatMap')) {
  errors.push('chapters/index.ts should derive chapters order from parts')
}
if (!indexText.includes('getChapterCode')) {
  errors.push('chapters/index.ts should export getChapterCode')
}

if (errors.length) {
  console.error(`Course check failed (${errors.length}):`)
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log(
  `Course check passed: ${partChapterIds.length} part slots, ${chapters.length} chapters, ${slideIds.size} slides, images ${(
    (withImageSlides / slideIds.size) *
    100
  ).toFixed(1)}% (${withImageSlides}/${slideIds.size})`,
)
