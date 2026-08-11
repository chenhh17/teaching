import type { Chapter } from '../../types/course'

export const chDPaths: Chapter = {
  id: 'paths-and-folders',
  titleEn: 'Paths and Folders',
  titleZh: '路径与文件夹',
  summaryEn: 'Read Windows paths, absolute vs relative locations, and keep a clean project folder layout.',
  summaryZh: '读懂 Windows 路径、绝对与相对位置，并保持清晰的项目文件夹结构。',
  sections: [
    {
      id: 'path-basics',
      titleEn: 'Path Basics',
      titleZh: '路径基础',
      slides: [
        {
          id: 'ch-d-paths-title',
          layout: 'title',

          titleEn: 'Part D · Paths and Folders',
          titleZh: '篇章 D · 路径与文件夹',
          subtitleEn: 'Know where a file lives on your PC',
          subtitleZh: '弄清文件在电脑上的位置',
          keywords: [
            { en: 'Path', zh: '路径' },
            { en: 'Folder', zh: '文件夹' },
            { en: 'Absolute Path', zh: '绝对路径' },
          ],
        },
        {
          id: 'ch-d-paths-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Terminals, editors, and Python all need correct paths. This chapter trains you to read and build Windows paths without guessing.',
          bodyZh:
            '终端、编辑器与 Python 都需要正确路径。本章训练你读懂并构建 Windows 路径，而不是靠猜。',
          bullets: [
            {
              en: 'Read a full Windows path including drive letter.',
              zh: '读懂包含盘符的完整 Windows 路径。',
            },
            {
              en: 'Explain absolute path versus relative path.',
              zh: '解释绝对路径与相对路径。',
              keywords: [{ en: 'Absolute Path', zh: '绝对路径' }],
            },
            {
              en: 'Build a simple projects folder layout for class work.',
              zh: '为课程作业建立简单的 projects 文件夹结构。',
            },
          ],
        },
        {
          id: 'ch-d-paths-anatomy',
          layout: 'text',

          titleEn: 'Anatomy of a Windows Path',
          titleZh: 'Windows 路径的结构',
          bodyEn:
            'A typical path looks like C:\\Users\\alex\\projects\\week01\\hello.py. The drive letter comes first, then folders separated by backslashes, then the file name.',
          bodyZh:
            '典型路径形如 C:\\Users\\alex\\projects\\week01\\hello.py。盘符在前，随后是用反斜杠分隔的文件夹，最后是文件名。',
          bullets: [
            {
              en: 'C: is usually the system drive on school PCs.',
              zh: '机房电脑上 C: 通常是系统盘。',
              keywords: [{ en: 'Drive Letter', zh: '盘符' }],
            },
            {
              en: 'Users\\alex is the user profile folder.',
              zh: 'Users\\alex 是用户配置文件夹。',
              keywords: [{ en: 'Path', zh: '路径' }],
            },
            {
              en: 'File Explorer can copy the path from the address bar.',
              zh: '可从文件资源管理器地址栏复制路径。',
            },
          ],
        },
        {
          id: 'ch-d-paths-absolute',
          layout: 'text',

          titleEn: 'Absolute Paths',
          titleZh: '绝对路径',
          bodyEn:
            'An absolute path starts from the drive and points to one exact location. It does not depend on your current folder. Use it when you need certainty across tools.',
          bodyZh:
            '绝对路径从盘符开始，指向一个确切位置，不依赖你当前所在文件夹。需要在不同工具间保持确定时使用它。',
          bullets: [
            {
              en: 'Example: C:\\Users\\alex\\projects\\hello.py',
              zh: '示例：C:\\Users\\alex\\projects\\hello.py',
              keywords: [{ en: 'Absolute Path', zh: '绝对路径' }],
            },
            {
              en: 'Absolute paths are longer but less ambiguous.',
              zh: '绝对路径更长，但更不容易歧义。',
            },
            {
              en: 'Editors and installers often store absolute paths in settings.',
              zh: '编辑器与安装程序常在设置中保存绝对路径。',
            },
          ],
        },
      ],
    },
    {
      id: 'relative-and-layout',
      titleEn: 'Relative Paths and Layout',
      titleZh: '相对路径与目录结构',
      slides: [
        {
          id: 'ch-d-paths-relative',
          layout: 'text',

          titleEn: 'Relative Paths',
          titleZh: '相对路径',
          bodyEn:
            'A relative path starts from your current folder. From C:\\Users\\alex\\projects, the relative path week01\\hello.py means C:\\Users\\alex\\projects\\week01\\hello.py.',
          bodyZh:
            '相对路径从当前文件夹出发。若当前在 C:\\Users\\alex\\projects，则相对路径 week01\\hello.py 表示 C:\\Users\\alex\\projects\\week01\\hello.py。',
          bullets: [
            {
              en: '. means the current folder; .. means the parent folder.',
              zh: '. 表示当前文件夹；.. 表示上一级文件夹。',
              keywords: [{ en: 'Relative Path', zh: '相对路径' }],
            },
            {
              en: 'Relative paths break if your current folder is wrong.',
              zh: '若当前文件夹不对，相对路径就会失效。',
            },
            {
              en: 'Terminal work becomes easier when you cd into the project first.',
              zh: '先 cd 进入项目目录，终端操作会更容易。',
            },
          ],
        },
        {
          id: 'ch-d-paths-folders',
          layout: 'text',

          titleEn: 'A Clean Project Layout',
          titleZh: '清晰的项目目录结构',
          bodyEn:
            'Create one parent projects folder, then one folder per assignment or week. Avoid dumping every file on the Desktop. Clean layout saves time before exams and demos.',
          bodyZh:
            '先建一个 projects 父文件夹，再为每次作业或每周建子文件夹。避免把所有文件堆在桌面。清晰结构在考试与演示前能节省时间。',
          bullets: [
            {
              en: 'Example: C:\\Users\\You\\projects\\week01\\',
              zh: '示例：C:\\Users\\你的用户名\\projects\\week01\\',
              keywords: [{ en: 'Folder', zh: '文件夹' }],
            },
            {
              en: 'Keep downloads separate from finished homework.',
              zh: '下载内容与已完成作业分开存放。',
            },
            {
              en: 'Use short English names without spaces when possible.',
              zh: '尽可能用简短且不含空格的英文名。',
            },
          ],
        },
        {
          id: 'ch-d-paths-spaces',
          layout: 'text',

          titleEn: 'Spaces and Special Characters',
          titleZh: '空格与特殊字符',
          bodyEn:
            'Spaces in folder names force quotes in many terminal commands. Characters such as & or Chinese punctuation can confuse beginners. Prefer letters, numbers, hyphen, and underscore.',
          bodyZh:
            '文件夹名中的空格会让许多终端命令必须加引号。& 或中文标点等字符也容易困扰初学者。优先使用字母、数字、连字符与下划线。',
          bullets: [
            {
              en: 'Good: week01_lab, my_notes.txt',
              zh: '推荐：week01_lab、my_notes.txt',
            },
            {
              en: 'Awkward: My Lab (final)!!.docx',
              zh: '别扭：My Lab (final)!!.docx',
            },
            {
              en: 'If a path has spaces, quote it in PowerShell: "C:\\Users\\You\\My Lab"',
              zh: '路径含空格时，在 PowerShell 中加引号："C:\\Users\\You\\My Lab"',
            },
          ],
        },
        {
          id: 'ch-d-paths-explorer',
          layout: 'text',

          titleEn: 'Copy Path from File Explorer',
          titleZh: '从文件资源管理器复制路径',
          bodyEn:
            'Click the address bar and copy, or Shift + right-click a file and choose Copy as path. Paste that path into Cursor, PowerShell, or an assignment form.',
          bodyZh:
            '点击地址栏并复制，或对文件按 Shift + 右键选择“复制为路径”。把路径粘贴到 Cursor、PowerShell 或作业表单中。',
          bullets: [
            {
              en: 'Copied paths often include quotes; remove them if a tool complains.',
              zh: '复制出的路径常带引号；若工具报错可去掉引号。',
            },
            {
              en: 'Confirm the extension is visible before sharing a path.',
              zh: '分享路径前确认扩展名可见。',
            },
            {
              en: 'Win + E then navigate is faster than hunting Desktop shortcuts.',
              zh: 'Win + E 再导航，通常比满桌面找快捷方式更快。',
            },
          ],
        },
      ],
    },
    {
      id: 'practice',
      titleEn: 'Practice',
      titleZh: '练习',
      slides: [
        {
          id: 'ch-d-paths-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Build a tiny folder tree and prove you can copy its absolute path.',
          bodyZh: '建立一小棵文件夹树，并证明你能复制其绝对路径。',
          bullets: [
            {
              en: 'Create C:\\Users\\You\\projects\\week01 using File Explorer.',
              zh: '用文件资源管理器创建 C:\\Users\\你的用户名\\projects\\week01。',
            },
            {
              en: 'Create a file notes.txt inside week01.',
              zh: '在 week01 内创建文件 notes.txt。',
            },
            {
              en: 'Copy the full path of notes.txt from File Explorer and paste it into Notepad.',
              zh: '从文件资源管理器复制 notes.txt 的完整路径，并粘贴到记事本。',
            },
          ],
        },
        {
          id: 'ch-d-paths-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Mixing / and \\ carelessly, then wondering why Windows cannot find the file.',
              zh: '随意混用 / 与 \\，然后奇怪 Windows 找不到文件。',
            },
            {
              en: 'Using a relative path while standing in the wrong folder.',
              zh: '人在错误文件夹里却使用相对路径。',
            },
            {
              en: 'Putting every assignment directly on Desktop with no week folder.',
              zh: '每次作业都直接放桌面，没有按周分文件夹。',
            },
          ],
        },
        {
          id: 'ch-d-paths-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What does the C: part of a path mean?',
              zh: '路径中的 C: 表示什么？',
            },
            {
              en: 'What is the difference between absolute and relative paths?',
              zh: '绝对路径与相对路径有什么区别？',
            },
            {
              en: 'Why avoid spaces in project folder names?',
              zh: '为什么项目文件夹名要尽量避免空格？',
            },
          ],
          noteEn:
            'Answers: drive letter; absolute starts from drive, relative from current folder; spaces need quoting and cause mistakes.',
          noteZh:
            '参考答案：盘符；绝对从盘符起，相对从当前文件夹起；空格需要引号且易出错。',
        },
      ],
    },
  ],
}
