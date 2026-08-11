import type { Chapter } from '../../types/course'

export const chDFiles: Chapter = {
  id: 'file-manager',
  titleEn: 'File Manager',
  titleZh: '文件管理器',
  summaryEn: 'Use Windows File Explorer for folders, paths, extensions, hidden files, and Recycle Bin.',
  summaryZh: '用 Windows 文件资源管理器处理文件夹、路径、扩展名、隐藏文件与回收站。',
  sections: [
    {
      id: 'files-and-folders',
      titleEn: 'Files and Folders',
      titleZh: '文件与文件夹',
      slides: [
        {
          id: 'ch-d-files-title',
          layout: 'title',

          titleEn: 'Part D · File Manager',
          titleZh: '篇章 D · 文件管理器',
          subtitleEn: 'Find and organize project files on Windows',
          subtitleZh: '在 Windows 上查找并整理项目文件',
          keywords: [
            { en: 'File Explorer', zh: '文件资源管理器' },
            { en: 'Folder / Directory', zh: '文件夹 / 目录' },
            { en: 'Path', zh: '路径' },
          ],
        },
        {
          id: 'ch-d-files-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Coding starts with knowing where your files live. This chapter makes File Explorer a reliable tool instead of a mystery window.',
          bodyZh:
            '编程从知道文件在哪里开始。本章让文件资源管理器成为可靠工具，而不是神秘窗口。',
          bullets: [
            {
              en: 'Navigate folders and read Windows paths.',
              zh: '浏览文件夹并读懂 Windows 路径。',
            },
            {
              en: 'Show file extensions and hidden items.',
              zh: '显示文件扩展名与隐藏项。',
              keywords: [{ en: 'File Extension', zh: '文件扩展名' }],
            },
            {
              en: 'Use Recycle Bin safely for deletes.',
              zh: '安全使用回收站处理删除。',
              keywords: [{ en: 'Recycle Bin', zh: '回收站' }],
            },
          ],
        },
        {
          id: 'ch-d-files-basics',
          layout: 'text',

          titleEn: 'Files Live Inside Folders',
          titleZh: '文件存放在文件夹里',
          bodyEn:
            'A file stores content such as hello.py or notes.txt. A folder, also called a directory, groups related files. On Windows, Desktop, Documents, and Downloads are common starting places.',
          bodyZh:
            '文件保存内容，例如 hello.py 或 notes.txt。文件夹也叫目录，把相关文件归在一起。在 Windows 上，桌面、文档与下载是常见起点。',
          bullets: [
            {
              en: 'Name files clearly so future-you can find them.',
              zh: '文件命名要清晰，方便以后的自己查找。',
              keywords: [{ en: 'File', zh: '文件' }],
            },
            {
              en: 'Folders can contain other folders, forming a tree.',
              zh: '文件夹可以包含其他文件夹，形成树状结构。',
              keywords: [{ en: 'Directory', zh: '目录' }],
            },
            {
              en: 'Desktop, Documents, and Downloads are not the only safe places.',
              zh: '桌面、文档、下载不是唯一安全的存放位置。',
              keywords: [
                { en: 'Desktop', zh: '桌面' },
                { en: 'Documents', zh: '文档' },
                { en: 'Downloads', zh: '下载' },
              ],
            },
          ],
        },
        {
          id: 'ch-d-files-path',
          layout: 'text',

          titleEn: 'What Is a Windows Path?',
          titleZh: '什么是 Windows 路径？',
          bodyEn:
            'A path tells Windows where a file is. Windows uses backslashes, for example C:\\Users\\alex\\projects\\hello.py. C: is the drive letter; Users\\alex is your user folder.',
          bodyZh:
            '路径告诉 Windows 文件在哪里。Windows 使用反斜杠，例如 C:\\Users\\alex\\projects\\hello.py。C: 是盘符；Users\\alex 是你的用户文件夹。',
          bullets: [
            {
              en: 'The address bar in File Explorer shows the current path.',
              zh: '文件资源管理器的地址栏显示当前路径。',
              keywords: [{ en: 'Path', zh: '路径' }],
            },
            {
              en: 'Click the address bar to copy the full path.',
              zh: '点击地址栏可复制完整路径。',
              keywords: [{ en: 'Backslash \\', zh: '反斜杠 \\' }],
            },
            {
              en: 'Know the path before you run a file in the terminal.',
              zh: '在终端运行文件前，先确认路径。',
              keywords: [
                { en: 'Drive Letter', zh: '盘符' },
                { en: 'User Folder', zh: '用户文件夹' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'using-file-manager',
      titleEn: 'Using File Explorer',
      titleZh: '使用文件资源管理器',
      slides: [
        {
          id: 'ch-d-files-apps',
          layout: 'text',

          titleEn: 'Windows File Explorer',
          titleZh: 'Windows 文件资源管理器',
          bodyEn:
            'File Explorer is the daily file tool on Windows. Open it with Win + E or the taskbar folder icon. The left pane jumps to common places; the main pane shows the current folder.',
          bodyZh:
            '文件资源管理器是 Windows 上的日常文件工具。用 Win + E 或任务栏文件夹图标打开。左侧可跳到常用位置；中间显示当前文件夹内容。',
          bullets: [
            {
              en: 'Win + E is the shortcut you should memorize first.',
              zh: 'Win + E 是应先记住的快捷键。',
              keywords: [{ en: 'Win + E', zh: '打开资源管理器快捷键' }],
            },
            {
              en: 'The address bar is your map of the current location.',
              zh: '地址栏是当前位置的地图。',
              keywords: [{ en: 'Address Bar', zh: '地址栏' }],
            },
            {
              en: 'In Cursor, the left Explorer sidebar shows project files similarly.',
              zh: '在 Cursor 左侧 Explorer 侧边栏也会以类似方式显示项目文件。',
              keywords: [{ en: 'Explorer Sidebar', zh: '资源管理器侧边栏' }],
            },
          ],
        },
        {
          id: 'ch-d-files-extensions',
          layout: 'text',

          titleEn: 'Show File Extensions',
          titleZh: '显示文件扩展名',
          bodyEn:
            'Extensions such as .py, .txt, and .jpg tell the file type. Hidden extensions make fake “homework.docx.exe” tricks harder to spot. Turn extensions on early and leave them on.',
          bodyZh:
            '.py、.txt、.jpg 等扩展名提示文件类型。隐藏扩展名会让假的“作业.docx.exe”更难识破。尽早打开扩展名显示并保持开启。',
          bullets: [
            {
              en: 'In File Explorer: View → Show → File name extensions.',
              zh: '在资源管理器：查看 → 显示 → 文件扩展名。',
              keywords: [{ en: 'Extension', zh: '扩展名' }],
            },
            {
              en: 'Renaming a file without seeing .txt or .py causes many beginner errors.',
              zh: '看不见 .txt 或 .py 时乱改名，会造成很多初学者错误。',
            },
            {
              en: 'Windows may warn when you change an extension; read the warning.',
              zh: '更改扩展名时 Windows 可能警告；请认真阅读。',
            },
          ],
        },
        {
          id: 'ch-d-files-hidden',
          layout: 'text',

          titleEn: 'Hidden Files',
          titleZh: '隐藏文件',
          bodyEn:
            'Some system or config files are hidden by default. You can reveal them when needed, but do not delete unknown hidden system folders.',
          bodyZh:
            '一些系统或配置文件默认隐藏。需要时可显示它们，但不要删除不认识的隐藏系统文件夹。',
          bullets: [
            {
              en: 'View → Show → Hidden items reveals hidden files and folders.',
              zh: '查看 → 显示 → 隐藏的项目 可显示隐藏文件与文件夹。',
              keywords: [{ en: 'Hidden File', zh: '隐藏文件' }],
            },
            {
              en: 'Project tools may create hidden folders such as .git or .venv.',
              zh: '项目工具可能创建 .git 或 .venv 等隐藏文件夹。',
            },
            {
              en: 'If you did not create it and do not recognize it, leave it alone.',
              zh: '若不是你创建且不认识，就先别动。',
            },
          ],
        },
        {
          id: 'ch-d-files-recycle',
          layout: 'text',

          titleEn: 'Recycle Bin',
          titleZh: '回收站',
          bodyEn:
            'Deleted files usually go to Recycle Bin first. Restore if you deleted by mistake. Emptying Recycle Bin permanently removes those files.',
          bodyZh:
            '删除的文件通常会先进入回收站。误删时可还原。清空回收站会永久删除这些文件。',
          bullets: [
            {
              en: 'Check Recycle Bin before panicking about a missing homework file.',
              zh: '作业“消失”时，先检查回收站再惊慌。',
              keywords: [{ en: 'Recycle Bin', zh: '回收站' }],
            },
            {
              en: 'Shift + Delete bypasses Recycle Bin; avoid it in class.',
              zh: 'Shift + Delete 会跳过回收站；课堂上尽量不用。',
              keywords: [{ en: 'Restore', zh: '还原' }],
            },
            {
              en: 'Empty Recycle Bin only after you confirm the list.',
              zh: '确认列表无误后再清空回收站。',
            },
          ],
        },
      ],
    },
    {
      id: 'practice-habits',
      titleEn: 'Practice Habits',
      titleZh: '练习习惯',
      slides: [
        {
          id: 'ch-d-files-practice',
          layout: 'text',

          titleEn: 'Practice Habits on Windows',
          titleZh: 'Windows 上的好习惯',
          bodyEn:
            'Create a projects folder under your user profile and keep class work there. Clear names without spaces reduce terminal pain later.',
          bodyZh:
            '在用户目录下创建 projects 文件夹存放课程作业。不含空格的清晰名称，可减少以后在终端中的麻烦。',
          bullets: [
            {
              en: 'Example home for code: C:\\Users\\You\\projects',
              zh: '代码存放示例：C:\\Users\\你的用户名\\projects',
              keywords: [{ en: 'Project Folder', zh: '项目文件夹' }],
            },
            {
              en: 'Prefer my_app over My App for folder names.',
              zh: '文件夹名尽量用 my_app，少用带空格的 My App。',
            },
            {
              en: 'Know the full path before you open a terminal in that folder.',
              zh: '在该文件夹打开终端前，先确认完整路径。',
            },
          ],
        },
        {
          id: 'ch-d-files-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Turn on visibility options, create a practice folder, and recover a test delete.',
          bodyZh: '打开可见性选项，创建练习文件夹，并恢复一次测试删除。',
          bullets: [
            {
              en: 'Open File Explorer with Win + E.',
              zh: '用 Win + E 打开文件资源管理器。',
            },
            {
              en: 'Turn on File name extensions and Hidden items under View → Show.',
              zh: '在 查看 → 显示 中打开“文件扩展名”与“隐藏的项目”。',
            },
            {
              en: 'Create C:\\Users\\You\\projects\\practice, delete a test file, then restore it from Recycle Bin.',
              zh: '创建 C:\\Users\\你的用户名\\projects\\practice，删除一个测试文件，再从回收站还原。',
            },
          ],
        },
        {
          id: 'ch-d-files-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Leaving extensions hidden, then renaming the wrong type.',
              zh: '不显示扩展名，结果改错文件类型。',
            },
            {
              en: 'Saving homework only on the Desktop with no clear folder.',
              zh: '作业只扔在桌面，没有清晰文件夹。',
            },
            {
              en: 'Emptying Recycle Bin before checking what was deleted.',
              zh: '未检查删除内容就清空回收站。',
            },
          ],
        },
        {
          id: 'ch-d-files-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What shortcut opens File Explorer?',
              zh: '打开文件资源管理器的快捷键是什么？',
            },
            {
              en: 'Why show file name extensions?',
              zh: '为什么要显示文件扩展名？',
            },
            {
              en: 'Where do deleted files usually go first?',
              zh: '删除的文件通常先去哪里？',
            },
          ],
          noteEn: 'Answers: Win + E; see real type; Recycle Bin.',
          noteZh: '参考答案：Win + E；看清真实类型；回收站。',
        },
      ],
    },
  ],
}
