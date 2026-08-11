import type { Chapter } from '../../types/course'

export const chFPythonTerminal: Chapter = {
  id: 'python-and-terminal',
  titleEn: 'Python and the Terminal',
  titleZh: 'Python 与终端',
  summaryEn:
    'Run Python on Windows with PowerShell and the py launcher, distinguish REPL from scripts, and preview venv activation.',
  summaryZh:
    '在 Windows 上用 PowerShell 与 py 启动器运行 Python，区分 REPL 与脚本，并预览 venv 激活。',
  sections: [
    {
      id: 'relationship',
      titleEn: 'Python and Terminal Relationship',
      titleZh: 'Python 与终端的关系',
      slides: [
        {
          id: 'ch-f-python-terminal-title',
          layout: 'title',

          titleEn: 'Part F · Python and the Terminal',
          titleZh: '篇章 F · Python 与终端',
          subtitleEn: 'Use PowerShell on Windows to launch and manage Python',
          subtitleZh: '在 Windows 上用 PowerShell 启动和管理 Python',
          illustration: 'title',
          keywords: [
            { en: 'py launcher', zh: 'py 启动器' },
            { en: 'REPL', zh: '交互环境' },
            { en: 'venv', zh: '虚拟环境' },
          ],
        },
        {
          id: 'ch-f-python-terminal-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Cursor edits files, PowerShell launches tools, and Python runs your program. Confusing those three roles causes many beginner mistakes, such as typing shell commands at the >>> prompt.',
          bodyZh:
            'Cursor 编辑文件，PowerShell 启动工具，Python 运行程序。混淆这三者会造成许多初学者错误，例如在 >>> 提示符输入 shell 命令。',
          bullets: [
            {
              en: 'Explain how Cursor, PowerShell, and Python work together.',
              zh: '说明 Cursor、PowerShell 与 Python 如何协作。',
            },
            {
              en: 'Start and exit the REPL; run a .py script with py.',
              zh: '进入并退出 REPL；用 py 运行 .py 脚本。',
            },
            {
              en: 'Preview creating and activating a Windows venv.',
              zh: '预览在 Windows 上创建并激活 venv。',
            },
          ],
        },
        {
          id: 'ch-f-python-terminal-roles',
          layout: 'text',

          titleEn: 'Three Roles on Your Desk',
          titleZh: '桌面上的三种角色',
          bodyEn:
            'Think of a short assembly line. You write hello.py in Cursor. You cd to the project folder in PowerShell. You run py hello.py so the interpreter executes the file. When something fails, identify which stage broke.',
          bodyZh:
            '把它想成一条短流水线。你在 Cursor 里写 hello.py；在 PowerShell 里 cd 到项目文件夹；再运行 py hello.py 让解释器执行文件。出错时，先判断是哪一阶段坏了。',
          bullets: [
            {
              en: 'Editor: create and save UTF-8 source files.',
              zh: '编辑器：创建并保存 UTF-8 源文件。',
              keywords: [{ en: 'Cursor', zh: 'Cursor 编辑器' }],
            },
            {
              en: 'Shell: navigate folders and launch py.',
              zh: 'Shell：导航文件夹并启动 py。',
              keywords: [{ en: 'PowerShell', zh: 'PowerShell' }],
            },
            {
              en: 'Python: interpret and run the program.',
              zh: 'Python：解释并运行程序。',
            },
          ],
        },
        {
          id: 'ch-f-python-terminal-repl',
          layout: 'text',

          titleEn: 'REPL Versus Script',
          titleZh: 'REPL 与脚本',
          bodyEn:
            'py with no filename opens an interactive REPL showing >>>. It is excellent for tiny experiments. A script is a saved .py file you run with py hello.py. Exit the REPL with exit() or Ctrl+Z then Enter on Windows before typing shell commands again.',
          bodyZh:
            '不带文件名运行 py 会打开显示 >>> 的交互式 REPL，适合小实验。脚本是保存好的 .py 文件，用 py hello.py 运行。在 Windows 上用 exit() 或 Ctrl+Z 再 Enter 退出 REPL，然后才能再输入 shell 命令。',
          bullets: [
            {
              en: 'REPL: type Python statements one at a time.',
              zh: 'REPL：一次输入一条 Python 语句。',
              keywords: [{ en: '>>> prompt', zh: '>>> 提示符' }],
            },
            {
              en: 'Script: reusable file checked into your project folder.',
              zh: '脚本：放在项目文件夹中、可重复使用的文件。',
              keywords: [{ en: 'Script', zh: '脚本' }],
            },
            {
              en: 'Do not type cd or dir at the >>> prompt.',
              zh: '不要在 >>> 提示符输入 cd 或 dir。',
            },
          ],
        },
      ],
    },
    {
      id: 'venv-preview',
      titleEn: 'venv Preview',
      titleZh: 'venv 预览',
      slides: [
        {
          id: 'ch-f-python-terminal-venv',
          layout: 'text',

          titleEn: 'Create and Activate a venv',
          titleZh: '创建并激活 venv',
          bodyEn:
            'A virtual environment keeps course packages inside the project. On Windows, creation uses py -m venv .venv and activation uses the Scripts folder. After activation, the prompt often shows (.venv) and pip installs stay local.',
          bodyZh:
            '虚拟环境把课程依赖留在项目内部。在 Windows 上，创建使用 py -m venv .venv，激活使用 Scripts 文件夹。激活后提示符常显示 (.venv)，pip 安装会留在本地。',
          bullets: [
            {
              en: 'Create: py -m venv .venv',
              zh: '创建：py -m venv .venv',
              keywords: [{ en: 'py -m venv', zh: '创建虚拟环境' }],
            },
            {
              en: 'Activate: .\\.venv\\Scripts\\Activate.ps1',
              zh: '激活：.\\.venv\\Scripts\\Activate.ps1',
              keywords: [{ en: 'Activate.ps1', zh: '激活脚本' }],
            },
            {
              en: 'If blocked, review execution policy from Part E errors.',
              zh: '若被阻止，回顾篇章 E 错误章中的执行策略。',
            },
          ],
          noteEn: 'Deactivate later with the deactivate command.',
          noteZh: '稍后可用 deactivate 命令退出激活。',
        },
        {
          id: 'ch-f-python-terminal-run',
          layout: 'text',

          titleEn: 'Run Your First Script Cleanly',
          titleZh: '干净地运行第一个脚本',
          bodyEn:
            'Successful runs follow the same order every time: open PowerShell, cd to the folder that contains the file, confirm with dir, then py hello.py. If Chinese text looks wrong, confirm the file is saved as UTF-8 in Cursor.',
          bodyZh:
            '成功运行永远遵循同一顺序：打开 PowerShell，cd 到包含文件的文件夹，用 dir 确认，再执行 py hello.py。若中文显示异常，确认 Cursor 中文件已保存为 UTF-8。',
          bullets: [
            {
              en: 'cd to the project folder before py hello.py',
              zh: '运行 py hello.py 前先 cd 到项目文件夹',
            },
            {
              en: 'dir should list hello.py',
              zh: 'dir 应能列出 hello.py',
            },
            {
              en: 'Prefer UTF-8 encoding for course files with Chinese text.',
              zh: '含中文的课程文件优先使用 UTF-8 编码。',
              keywords: [{ en: 'UTF-8', zh: 'UTF-8 编码' }],
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
          id: 'ch-f-python-terminal-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Practice REPL, script run, and a local venv in one short lab.',
          bodyZh: '在一个短实验里练习 REPL、脚本运行与本地 venv。',
          bullets: [
            {
              en: 'Open PowerShell, cd to python-lab, run py --version',
              zh: '打开 PowerShell，cd 到 python-lab，运行 py --version',
            },
            {
              en: 'Start the REPL with py, run print(1+1), then exit()',
              zh: '用 py 进入 REPL，运行 print(1+1)，再 exit()',
            },
            {
              en: 'Run py hello.py and confirm Hello, World',
              zh: '运行 py hello.py 并确认输出 Hello, World',
            },
            {
              en: 'Create and activate: py -m venv .venv then .\\.venv\\Scripts\\Activate.ps1',
              zh: '创建并激活：py -m venv .venv，然后 .\\.venv\\Scripts\\Activate.ps1',
            },
          ],
        },
        {
          id: 'ch-f-python-terminal-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Typing PowerShell commands at the Python >>> prompt.',
              zh: '在 Python 的 >>> 提示符输入 PowerShell 命令。',
            },
            {
              en: 'Running Activate.ps1 from the wrong folder.',
              zh: '在错误文件夹运行 Activate.ps1。',
            },
            {
              en: 'Forgetting to open a new shell after fixing execution policy.',
              zh: '修复执行策略后忘记打开新 shell。',
            },
          ],
        },
        {
          id: 'ch-f-python-terminal-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'How do you start the interactive Python prompt on Windows?',
              zh: '在 Windows 上如何启动交互式 Python 提示符？',
            },
            {
              en: 'What command runs hello.py as a script?',
              zh: '什么命令把 hello.py 当作脚本运行？',
            },
            {
              en: 'Which activation script does Windows PowerShell use for .venv?',
              zh: 'Windows PowerShell 激活 .venv 使用哪个脚本？',
            },
          ],
          noteEn:
            'Answers: py; py hello.py; .venv\\Scripts\\Activate.ps1',
          noteZh: '参考答案：py；py hello.py；.venv\\Scripts\\Activate.ps1',
        },
      ],
    },
  ],
}
