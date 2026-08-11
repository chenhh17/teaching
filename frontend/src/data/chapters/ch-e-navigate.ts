import type { Chapter } from '../../types/course'

export const chENavigate: Chapter = {
  id: 'navigate-and-files-cli',
  titleEn: 'Navigate and Files in CLI',
  titleZh: '命令行导航与文件',
  summaryEn:
    'Move with cd, list with dir and ls, create folders, and confirm the working directory before running tools on Windows.',
  summaryZh:
    '在 Windows 上用 cd 移动，用 dir 与 ls 列出内容，创建文件夹，并在运行工具前确认工作目录。',
  sections: [
    {
      id: 'move-and-list',
      titleEn: 'Move and List',
      titleZh: '移动与列出',
      slides: [
        {
          id: 'ch-e-navigate-title',
          layout: 'title',

          titleEn: 'Part E · Navigate and Files in CLI',
          titleZh: '篇章 E · 命令行导航与文件',
          subtitleEn: 'Know where you are before you run py',
          subtitleZh: '运行 py 之前，先弄清你在哪',
          illustration: 'title',
          keywords: [
            { en: 'cd', zh: '切换目录' },
            { en: 'dir / ls', zh: '列出目录' },
            { en: 'Working Directory', zh: '工作目录' },
          ],
        },
        {
          id: 'ch-e-navigate-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Navigation skills prevent half of beginner “file not found” errors. Before any Python run, you should be able to prove you are in the project folder.',
          bodyZh:
            '导航技能能避免一半初学者的“找不到文件”错误。在运行任何 Python 之前，你应能证明自己已在项目文件夹中。',
          bullets: [
            {
              en: 'Read the current location with pwd or Get-Location.',
              zh: '用 pwd 或 Get-Location 查看当前位置。',
            },
            {
              en: 'Move with cd and list contents with dir, ls, or Get-ChildItem.',
              zh: '用 cd 移动，用 dir、ls 或 Get-ChildItem 列出内容。',
            },
            {
              en: 'Create a practice folder and confirm it in File Explorer.',
              zh: '创建练习文件夹，并在资源管理器中确认。',
            },
          ],
        },
        {
          id: 'ch-e-navigate-location',
          layout: 'text',

          titleEn: 'Always Know Your Location',
          titleZh: '时刻知道自己的位置',
          bodyEn:
            'PowerShell keeps a current directory, just like File Explorer has an open folder. Relative paths such as hello.py mean “in this folder”. Absolute paths such as C:\\Users\\alex\\projects\\hello.py work from anywhere but are longer to type.',
          bodyZh:
            'PowerShell 会记住当前目录，就像资源管理器有一个打开的文件夹。相对路径如 hello.py 表示“在这个文件夹里”。绝对路径如 C:\\Users\\alex\\projects\\hello.py 可从任何位置使用，但更长。',
          bullets: [
            {
              en: 'pwd and Get-Location print the current path.',
              zh: 'pwd 与 Get-Location 打印当前路径。',
              keywords: [{ en: 'pwd', zh: '打印工作目录' }],
            },
            {
              en: 'Match the prompt path with the File Explorer address bar.',
              zh: '把提示符路径与资源管理器地址栏对照。',
            },
            {
              en: 'If unsure, cd to the project root before running tools.',
              zh: '不确定时，先 cd 到项目根目录再运行工具。',
            },
          ],
        },
        {
          id: 'ch-e-navigate-commands',
          layout: 'text',

          titleEn: 'Core Navigation Commands',
          titleZh: '核心导航命令',
          bodyEn:
            'Learn a small reliable set. On Windows PowerShell, classic names and PowerShell names often both work because of aliases. Prefer understanding over collecting every synonym.',
          bodyZh:
            '先学一小套可靠命令。在 Windows PowerShell 中，经典名与 PowerShell 名常因别名而都能用。重在理解，而不是收集所有同义词。',
          bullets: [
            {
              en: 'cd projects or Set-Location projects moves into a folder.',
              zh: 'cd projects 或 Set-Location projects 进入文件夹。',
              keywords: [{ en: 'cd / Set-Location', zh: '切换目录' }],
            },
            {
              en: 'cd .. moves up one level; cd \\ goes to the drive root.',
              zh: 'cd .. 上移一层；cd \\ 回到盘符根目录。',
            },
            {
              en: 'dir, ls, and Get-ChildItem list files and folders.',
              zh: 'dir、ls 与 Get-ChildItem 列出文件与文件夹。',
              keywords: [{ en: 'Get-ChildItem', zh: '列出子项' }],
            },
          ],
        },
      ],
    },
    {
      id: 'create-and-confirm',
      titleEn: 'Create and Confirm',
      titleZh: '创建与确认',
      slides: [
        {
          id: 'ch-e-navigate-create',
          layout: 'text',

          titleEn: 'Create Folders from the Shell',
          titleZh: '在 shell 中创建文件夹',
          bodyEn:
            'Creating a clean practice folder keeps Desktop clutter out of your Python work. After you create it in PowerShell, confirm the same folder appears in File Explorer. That dual check builds trust in both tools.',
          bodyZh:
            '创建干净的练习文件夹，可避免桌面杂乱干扰 Python 练习。在 PowerShell 创建后，再到资源管理器确认同一文件夹出现。这种双重核对能建立对两种工具的信任。',
          bullets: [
            {
              en: 'mkdir python-lab or New-Item -ItemType Directory python-lab',
              zh: 'mkdir python-lab 或 New-Item -ItemType Directory python-lab',
              keywords: [{ en: 'mkdir / New-Item', zh: '新建目录' }],
            },
            {
              en: 'Use names without spaces when possible: python-lab not python lab.',
              zh: '尽量使用无空格名称：python-lab，而不是 python lab。',
            },
            {
              en: 'Open the folder in Explorer with explorer . from that directory.',
              zh: '在该目录运行 explorer . 可在资源管理器中打开。',
              keywords: [{ en: 'explorer .', zh: '打开当前文件夹' }],
            },
          ],
        },
        {
          id: 'ch-e-navigate-paths',
          layout: 'text',

          titleEn: 'Quoted Paths and Tab Completion',
          titleZh: '带引号的路径与 Tab 补全',
          bodyEn:
            'Windows paths with spaces need quotes: cd "C:\\Users\\alex\\My Documents". Tab completion expands partial names and reduces typos. If Tab fails, list the parent folder and check spelling, including Chinese or space characters.',
          bodyZh:
            '含空格的 Windows 路径需要引号：cd "C:\\Users\\alex\\My Documents"。Tab 补全能展开部分名称并减少拼写错误。若 Tab 失败，先列出父文件夹并检查拼写，包括中文或空格。',
          bullets: [
            {
              en: 'Quote any path that contains spaces.',
              zh: '路径含空格时必须加引号。',
              keywords: [{ en: 'Quoted Path', zh: '带引号路径' }],
            },
            {
              en: 'Prefer short ASCII folder names for course projects.',
              zh: '课程项目优先使用简短 ASCII 文件夹名。',
            },
            {
              en: 'Tab once or twice after typing the first letters of a folder.',
              zh: '输入文件夹前几个字母后按一次或两次 Tab。',
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
          id: 'ch-e-navigate-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Build a tiny project folder and prove you can enter it from PowerShell.',
          bodyZh: '建一个小项目文件夹，并证明你能从 PowerShell 进入它。',
          bullets: [
            {
              en: 'Open PowerShell and run Get-Location.',
              zh: '打开 PowerShell 并运行 Get-Location。',
            },
            {
              en: 'cd to your user folder if needed, then mkdir projects\\python-lab',
              zh: '如需要先 cd 到用户目录，再执行 mkdir projects\\python-lab',
            },
            {
              en: 'cd projects\\python-lab and run dir to confirm it is empty or ready.',
              zh: 'cd projects\\python-lab，再运行 dir 确认内容。',
            },
            {
              en: 'Run explorer . and confirm the same path in the address bar.',
              zh: '运行 explorer .，并在地址栏确认同一路径。',
            },
          ],
          noteEn: 'Keep this folder for Part F Python practice.',
          noteZh: '保留此文件夹，供篇章 F 的 Python 练习使用。',
        },
        {
          id: 'ch-e-navigate-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Running py hello.py from Desktop while the file lives in projects.',
              zh: '文件在 projects 里，却在桌面运行 py hello.py。',
            },
            {
              en: 'Forgetting quotes around folders with spaces.',
              zh: '忘记给含空格的文件夹加引号。',
            },
            {
              en: 'Creating python-lab on Desktop and another copy under Documents by accident.',
              zh: '不小心在桌面和文档下各建了一个 python-lab。',
            },
          ],
        },
        {
          id: 'ch-e-navigate-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'Which commands show the current directory?',
              zh: '哪些命令显示当前目录？',
            },
            {
              en: 'What does cd .. do?',
              zh: 'cd .. 做什么？',
            },
            {
              en: 'Why open File Explorer after mkdir?',
              zh: '为什么 mkdir 之后还要打开资源管理器？',
            },
          ],
          noteEn:
            'Answers: pwd / Get-Location; move up one folder; confirm the same path visually.',
          noteZh: '参考答案：pwd / Get-Location；上移一层；用可视化方式确认同一路径。',
        },
      ],
    },
  ],
}
