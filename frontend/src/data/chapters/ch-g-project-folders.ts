import type { Chapter } from '../../types/course'

export const chGProjectFolders: Chapter = {
  id: 'project-folders',
  titleEn: 'Project Folders',
  titleZh: '项目文件夹',
  summaryEn:
    'Organize Windows project folders so scripts, data, and virtual environments stay findable and safe.',
  summaryZh:
    '组织 Windows 项目文件夹，让脚本、数据与虚拟环境易于查找且更安全。',
  sections: [
    {
      id: 'folder-basics',
      titleEn: 'Folder Basics',
      titleZh: '文件夹基础',
      slides: [
        {
          id: 'ch-g-project-folders-title',
          layout: 'title',

          titleEn: 'Part G · Project Folders',
          titleZh: '篇章 G · 项目文件夹',
          subtitleEn: 'A clean folder is part of the program',
          subtitleZh: '干净的文件夹也是程序的一部分',
          illustration: 'title',
          keywords: [
            { en: 'Project Root', zh: '项目根目录' },
            { en: 'File Explorer', zh: '资源管理器' },
            { en: 'Path', zh: '路径' },
          ],
        },
        {
          id: 'ch-g-project-folders-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will design a simple project root on Windows, name files safely, and open that folder correctly in PowerShell and your editor.',
          bodyZh:
            '你将在 Windows 上设计简单的项目根目录，安全命名文件，并在 PowerShell 与编辑器中正确打开该文件夹。',
          bullets: [
            {
              en: 'Define what belongs in the project root.',
              zh: '说明项目根目录应放什么。',
              keywords: [{ en: 'Project Root', zh: '项目根目录' }],
            },
            {
              en: 'Use naming rules that avoid PowerShell pain.',
              zh: '使用能减少 PowerShell 麻烦的命名规则。',
            },
            {
              en: 'Keep secrets, downloads clutter, and junk out of the repo folder.',
              zh: '把机密、下载杂物和垃圾挡在仓库文件夹外。',
            },
            {
              en: 'Open the same folder from Explorer, terminal, and editor.',
              zh: '从资源管理器、终端和编辑器打开同一文件夹。',
            },
          ],
        },
        {
          id: 'ch-g-project-folders-home',
          layout: 'text',

          titleEn: 'Choose a Stable Home for Projects',
          titleZh: '为项目选择稳定的家',
          bodyEn:
            'Pick one parent folder and reuse it all semester, for example `C:\\Users\\YourName\\projects\\`. Random Desktop piles make paths break when you move or rename things. Stability is a debugging feature.',
          bodyZh:
            '选一个父文件夹并整学期复用，例如 `C:\\Users\\YourName\\projects\\`。桌面随手堆放会在移动或重命名时弄断路径。稳定本身就是调试特性。',
          bullets: [
            {
              en: 'One parent folder, many project subfolders.',
              zh: '一个父文件夹，多个项目子文件夹。',
            },
            {
              en: 'Prefer short ASCII names early in the course.',
              zh: '课程前期优先用短 ASCII 名称。',
              keywords: [{ en: 'ASCII', zh: 'ASCII 字符' }],
            },
            {
              en: 'Avoid OneDrive sync surprises for venv folders when possible.',
              zh: '尽量避免把 venv 文件夹置于 OneDrive 同步的意外中。',
              keywords: [{ en: 'venv', zh: '虚拟环境' }],
            },
          ],
        },
        {
          id: 'ch-g-project-folders-naming',
          layout: 'text',

          titleEn: 'Naming That Survives the Terminal',
          titleZh: '能经得住终端的命名',
          bodyEn:
            'Spaces and special characters force extra quoting in PowerShell. Beginners lose time on quoting instead of learning Python. Use lowercase words separated by hyphens or underscores.',
          bodyZh:
            '空格和特殊字符会迫使 PowerShell 额外加引号。初学者把时间耗在引号上，而不是学 Python。用小写单词，用连字符或下划线分隔。',
          bullets: [
            {
              en: 'Good: `grade-helper`, `file_reader`.',
              zh: '好：`grade-helper`、`file_reader`。',
            },
            {
              en: 'Painful: `My Project (final)!!`.',
              zh: '痛苦：`My Project (final)!!`。',
            },
            {
              en: 'Match the folder name to the main idea of the program.',
              zh: '文件夹名与程序主旨一致。',
            },
          ],
          keywords: [{ en: 'Naming Convention', zh: '命名规范' }],
        },
      ],
    },
    {
      id: 'inside-the-root',
      titleEn: 'Inside the Project Root',
      titleZh: '项目根目录内部',
      slides: [
        {
          id: 'ch-g-project-folders-contents',
          layout: 'text',

          titleEn: 'What Usually Lives in the Root',
          titleZh: '根目录通常放什么',
          bodyEn:
            'The project root is the folder you open in Cursor or VS Code. Keep source files near the top, group data, and isolate environment folders so they are easy to ignore in Git later.',
          bodyZh:
            '项目根目录就是你在 Cursor 或 VS Code 打开的文件夹。源文件靠近顶部，数据集中放置，环境文件夹隔离，以便之后在 Git 中忽略。',
          bullets: [
            {
              en: 'Source: `main.py`, modules, maybe `src\\`.',
              zh: '源码：`main.py`、模块，也许 `src\\`。',
              keywords: [{ en: 'Source', zh: '源码' }],
            },
            {
              en: 'Data: sample `.txt` or `.csv` in `data\\`.',
              zh: '数据：示例 `.txt` 或 `.csv` 放在 `data\\`。',
            },
            {
              en: 'Environment: `.venv\\` created for this project only.',
              zh: '环境：仅为该项目创建的 `.venv\\`。',
            },
            {
              en: 'Notes: `README.txt` with run instructions.',
              zh: '说明：带运行步骤的 `README.txt`。',
            },
          ],
          illustration: 'files',
        },
        {
          id: 'ch-g-project-folders-keep-out',
          layout: 'text',

          titleEn: 'What Should Stay Out',
          titleZh: '什么不该放进来',
          bodyEn:
            'A project folder is not a Downloads dump. Mixing installers, personal photos, and secret keys with source code makes backups risky and sharing dangerous.',
          bodyZh:
            '项目文件夹不是下载垃圾桶。把安装包、个人照片和密钥与源码混放，会让备份变冒险、分享变危险。',
          bullets: [
            {
              en: 'Do not store passwords or API keys in plain text files you will upload.',
              zh: '不要把密码或 API 密钥存在将要上传的明文文件里。',
              keywords: [{ en: 'Secret', zh: '机密' }],
            },
            {
              en: 'Do not keep duplicate “final_final2” copies beside the real root.',
              zh: '不要在真正根目录旁堆“final_final2”重复副本。',
            },
            {
              en: 'Do not commit huge media files into beginner practice repos.',
              zh: '不要把巨大媒体文件提交进初学练习仓库。',
            },
          ],
        },
        {
          id: 'ch-g-project-folders-open',
          layout: 'text',

          titleEn: 'Open the Same Folder Everywhere',
          titleZh: '处处打开同一文件夹',
          bodyEn:
            'Many “file not found” bugs are really “wrong folder” bugs. Confirm Explorer, editor, and PowerShell all point at the same project root before you debug Python logic.',
          bodyZh:
            '许多“找不到文件”其实是“文件夹不对”。在调试 Python 逻辑前，先确认资源管理器、编辑器与 PowerShell 都指向同一项目根目录。',
          bullets: [
            {
              en: 'In PowerShell, `cd` into the root, then run `pwd`.',
              zh: '在 PowerShell 中 `cd` 进入根目录，再运行 `pwd`。',
              keywords: [{ en: 'pwd', zh: '打印工作目录' }],
            },
            {
              en: 'In File Explorer, copy the path from the address bar.',
              zh: '在资源管理器地址栏复制路径。',
            },
            {
              en: 'In the editor, use Open Folder on that same path.',
              zh: '在编辑器里用“打开文件夹”打开同一路径。',
            },
          ],
        },
        {
          id: 'ch-g-project-folders-try',
          layout: 'steps',
          titleEn: 'Try It: Create a Clean Project Root',
          titleZh: '动手：创建干净的项目根目录',
          bodyEn: 'Build a reusable layout for your next practice program.',
          bodyZh: '为下一个练习程序搭建可复用布局。',
          bullets: [
            {
              en: 'In File Explorer, create `C:\\Users\\YourName\\projects\\unit-converter`.',
              zh: '在资源管理器创建 `C:\\Users\\YourName\\projects\\unit-converter`。',
            },
            {
              en: 'Inside it, create `data` and an empty `main.py`.',
              zh: '在其中创建 `data` 与空的 `main.py`。',
            },
            {
              en: 'Open PowerShell and `cd` into that folder.',
              zh: '打开 PowerShell 并 `cd` 进入该文件夹。',
            },
            {
              en: 'Run `pwd` and confirm the path matches Explorer.',
              zh: '运行 `pwd`，确认路径与资源管理器一致。',
            },
            {
              en: 'Open the same folder in your editor and save a one-line print script.',
              zh: '在编辑器打开同一文件夹，保存一行 print 脚本。',
            },
          ],
        },
        {
          id: 'ch-g-project-folders-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Folder mistakes look like coding mistakes.',
          bodyZh: '文件夹错误看起来像编码错误。',
          bullets: [
            {
              en: 'Editing one copy of a file while running another copy.',
              zh: '编辑的是一份文件，运行的是另一份。',
            },
            {
              en: 'Putting the script on Desktop but running from Documents.',
              zh: '脚本在桌面，却从文档目录运行。',
            },
            {
              en: 'Using Chinese full-width punctuation in folder names by accident.',
              zh: '文件夹名里误用中文全角标点。',
            },
            {
              en: 'Saving course work only inside chat downloads.',
              zh: '只把作业保存在聊天下载目录里。',
            },
          ],
        },
        {
          id: 'ch-g-project-folders-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Verify your folder discipline before Git chapters.',
          bodyZh: '进入 Git 章节前，先检查文件夹纪律。',
          bullets: [
            {
              en: 'Where is your semester projects parent folder?',
              zh: '你本学期项目的父文件夹在哪里？',
            },
            {
              en: 'Name three items that belong in a project root.',
              zh: '说出项目根目录应有的三项内容。',
            },
            {
              en: 'How do you confirm PowerShell is in the correct folder?',
              zh: '你如何确认 PowerShell 在正确文件夹？',
            },
          ],
          noteEn: 'Answers vary by machine; `pwd` / address bar match is the key check.',
          noteZh: '答案因机器而异；关键检查是 `pwd` 与地址栏一致。',
        },
      ],
    },
  ],
}
