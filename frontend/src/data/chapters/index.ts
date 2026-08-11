import type { Chapter, Part } from '../../types/course'
import { parts } from '../parts'

import { chAProgramming } from './ch-a-programming'
import { chAThinking } from './ch-a-thinking'
import { chAAlgorithms } from './ch-a-algorithms'
import { chAPractice } from './ch-a-practice'
import { chAWindowsSkills } from './ch-a-windows-skills'
import { chACursor } from './ch-a-cursor'
import { chACursorWorkspace } from './ch-a-cursor-workspace'
import { chBInsidePc } from './ch-b-inside-pc'
import { chBMotherboard } from './ch-b-motherboard'
import { chBCpu } from './ch-b-cpu'
import { chBMemory } from './ch-b-memory'
import { chBGpu } from './ch-b-gpu'
import { chBPorts } from './ch-b-ports'
import { chBBios } from './ch-b-bios'
import { chBChoosingPc } from './ch-b-choosing-pc'
import { chCOs } from './ch-c-os'
import { chCWindows } from './ch-c-windows'
import { chCDesktop } from './ch-c-desktop'
import { chCProcesses } from './ch-c-processes'
import { chCTaskManager } from './ch-c-task-manager'
import { chCUpdates } from './ch-c-updates'
import { chDFiles } from './ch-d-files'
import { chDPaths } from './ch-d-paths'
import { chDBits } from './ch-d-bits'
import { chDFormats } from './ch-d-formats'
import { chDOrganize } from './ch-d-organize'
import { chDCloud } from './ch-d-cloud'
import { chDBackup } from './ch-d-backup'
import { chEEnvironment } from './ch-e-environment'
import { chETerminal } from './ch-e-terminal'
import { chEPowershell } from './ch-e-powershell'
import { chENavigate } from './ch-e-navigate'
import { chEPath } from './ch-e-path'
import { chEErrors } from './ch-e-errors'
import { chFPython } from './ch-f-python'
import { chFInstallPython } from './ch-f-install-python'
import { chFPythonTerminal } from './ch-f-python-terminal'
import { chFVariables } from './ch-f-variables'
import { chFStrings } from './ch-f-strings'
import { chFLoops } from './ch-f-loops'
import { chFLists } from './ch-f-lists'
import { chFFunctions } from './ch-f-functions'
import { chFFilesExceptions } from './ch-f-files-exceptions'
import { chGDebugging } from './ch-g-debugging'
import { chGErrorReading } from './ch-g-error-reading'
import { chGPracticeProjects } from './ch-g-practice-projects'
import { chGProjectFolders } from './ch-g-project-folders'
import { chGGit } from './ch-g-git'
import { chGBranches } from './ch-g-branches'
import { chGGithub } from './ch-g-github'
import { chHNetwork } from './ch-h-network'
import { chHLanWan } from './ch-h-lan-wan'
import { chHIpDns } from './ch-h-ip-dns'
import { chHDhcpWifi } from './ch-h-dhcp-wifi'
import { chHProtocols } from './ch-h-protocols'
import { chHTcpUdp } from './ch-h-tcp-udp'
import { chHInterfaces } from './ch-h-interfaces'
import { chHChecks } from './ch-h-checks'
import { chIWeb } from './ch-i-web'
import { chIHttp } from './ch-i-http'
import { chIHtml } from './ch-i-html'
import { chIBrowser } from './ch-i-browser'
import { chIDevtools } from './ch-i-devtools'
import { chIHttps } from './ch-i-https'
import { chJSafety } from './ch-j-safety'
import { chJPasswords } from './ch-j-passwords'
import { chJPhishing } from './ch-j-phishing'
import { chJPrivacy } from './ch-j-privacy'
import { chJHygiene } from './ch-j-hygiene'
import { chJLab } from './ch-j-lab'

export { parts }

const chapterById: Record<string, Chapter> = Object.fromEntries(
  [
    chAProgramming,
    chAThinking,
    chAAlgorithms,
    chAPractice,
    chAWindowsSkills,
    chACursor,
    chACursorWorkspace,
    chBInsidePc,
    chBMotherboard,
    chBCpu,
    chBMemory,
    chBGpu,
    chBPorts,
    chBBios,
    chBChoosingPc,
    chCOs,
    chCWindows,
    chCDesktop,
    chCProcesses,
    chCTaskManager,
    chCUpdates,
    chDFiles,
    chDPaths,
    chDBits,
    chDFormats,
    chDOrganize,
    chDCloud,
    chDBackup,
    chEEnvironment,
    chETerminal,
    chEPowershell,
    chENavigate,
    chEPath,
    chEErrors,
    chFPython,
    chFInstallPython,
    chFPythonTerminal,
    chFVariables,
    chFStrings,
    chFLoops,
    chFLists,
    chFFunctions,
    chFFilesExceptions,
    chGDebugging,
    chGErrorReading,
    chGPracticeProjects,
    chGProjectFolders,
    chGGit,
    chGBranches,
    chGGithub,
    chHNetwork,
    chHLanWan,
    chHIpDns,
    chHDhcpWifi,
    chHProtocols,
    chHTcpUdp,
    chHInterfaces,
    chHChecks,
    chIWeb,
    chIHttp,
    chIHtml,
    chIBrowser,
    chIDevtools,
    chIHttps,
    chJSafety,
    chJPasswords,
    chJPhishing,
    chJPrivacy,
    chJHygiene,
    chJLab,
  ].map((chapter) => [chapter.id, chapter]),
)

export const chapters: Chapter[] = parts.flatMap((part) =>
  part.chapterIds
    .map((id) => chapterById[id])
    .filter((chapter): chapter is Chapter => Boolean(chapter)),
)

export function getChapter(chapterId: string): Chapter | undefined {
  return chapterById[chapterId]
}

export function getAllSlides(chapter: Chapter) {
  return chapter.sections.flatMap((section) =>
    section.slides.map((slide) => ({
      ...slide,
      sectionId: section.id,
      sectionTitleEn: section.titleEn,
      sectionTitleZh: section.titleZh,
    })),
  )
}

export function getPartForChapter(chapterId: string): Part | undefined {
  return parts.find((part) => part.chapterIds.includes(chapterId))
}

export function getChaptersByPart(part: Part): Chapter[] {
  return part.chapterIds
    .map((id) => getChapter(id))
    .filter((chapter): chapter is Chapter => Boolean(chapter))
}

export function getChapterCode(chapterId: string): string | undefined {
  const part = getPartForChapter(chapterId)
  if (!part) return undefined
  const partIndex = parts.findIndex((item) => item.id === part.id)
  const chapterIndex = part.chapterIds.indexOf(chapterId)
  if (partIndex < 0 || chapterIndex < 0) return undefined
  return `${String.fromCharCode(65 + partIndex)}${chapterIndex + 1}`
}

export function getAdjacentChapters(chapterId: string) {
  const index = chapters.findIndex((chapter) => chapter.id === chapterId)
  return {
    prev: index > 0 ? chapters[index - 1] : undefined,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : undefined,
  }
}

export function getCourseStats() {
  const slideCount = chapters.reduce(
    (sum, chapter) => sum + getAllSlides(chapter).length,
    0,
  )
  return {
    partCount: parts.length,
    chapterCount: chapters.length,
    slideCount,
  }
}
