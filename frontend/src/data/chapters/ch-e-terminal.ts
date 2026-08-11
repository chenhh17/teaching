import type { Chapter } from '../../types/course'

export const chETerminal: Chapter = {
  id: 'the-terminal',
  titleEn: 'The Terminal',
  titleZh: '终端',
  summaryEn:
    'Open Windows terminals, understand prompt and current folder, and choose PowerShell as the course default shell.',
  summaryZh:
    '打开 Windows 终端，理解提示符与当前文件夹，并选择 PowerShell 作为本课程默认 shell。',
  sections: [
    {
      id: 'what-is-terminal',
      titleEn: 'What Is a Terminal',
      titleZh: '什么是终端',
      slides: [
        {
          id: 'ch-e-terminal-title',
          layout: 'title',

          titleEn: 'Part E · The Terminal',
          titleZh: '篇章 E · 终端',
          subtitleEn: 'Talk to Windows with text commands',
          subtitleZh: '用文字命令与 Windows 对话',
          illustration: 'title',
          keywords: [
            { en: 'Terminal', zh: '终端' },
            { en: 'PowerShell', zh: 'PowerShell' },
            { en: 'Prompt', zh: '提示符' },
          ],
        },
        {
          id: 'ch-e-terminal-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'A terminal looks intimidating at first. Treat it as a precise chat box: you type a command, Windows replies with text, and the current folder decides which files that command can see.',
          bodyZh:
            '终端初看吓人。把它当作精确的对话框：你输入命令，Windows 用文字回复，而当前文件夹决定命令能看见哪些文件。',
          bullets: [
            {
              en: 'Open Windows Terminal, PowerShell, or Command Prompt.',
              zh: '打开 Windows Terminal、PowerShell 或命令提示符。',
            },
            {
              en: 'Read the prompt and know the current folder.',
              zh: '读懂提示符并知道当前文件夹。',
              keywords: [{ en: 'Current Directory', zh: '当前目录' }],
            },
            {
              en: 'Prefer PowerShell for this course on Windows.',
              zh: '本课程在 Windows 上优先使用 PowerShell。',
              keywords: [{ en: 'PowerShell', zh: 'PowerShell' }],
            },
          ],
        },
        {
          id: 'ch-e-terminal-definition',
          layout: 'text',

          titleEn: 'Terminal Means Text Interface',
          titleZh: '终端就是文字界面',
          bodyEn:
            'A terminal is a window where you type commands instead of clicking icons. The shell is the program that interprets those commands. On modern Windows you will meet PowerShell, Command Prompt (cmd), and often Windows Terminal as the host window.',
          bodyZh:
            '终端是一个用文字输入命令、而不是点击图标的窗口。Shell 是解释这些命令的程序。在现代 Windows 上，你会遇到 PowerShell、命令提示符（cmd），以及常作为宿主窗口的 Windows Terminal。',
          bullets: [
            {
              en: 'Terminal: the window that shows input and output.',
              zh: '终端：显示输入与输出的窗口。',
              keywords: [{ en: 'Terminal', zh: '终端' }],
            },
            {
              en: 'Shell: PowerShell or cmd, which understands the command language.',
              zh: 'Shell：PowerShell 或 cmd，理解命令语言的程序。',
              keywords: [{ en: 'Shell', zh: '命令解释器' }],
            },
            {
              en: 'Cursor also embeds a terminal panel for the same PowerShell workflow.',
              zh: 'Cursor 也内嵌终端面板，可用同一套 PowerShell 流程。',
              keywords: [{ en: 'Cursor Terminal', zh: 'Cursor 终端' }],
            },
          ],
        },
        {
          id: 'ch-e-terminal-apps',
          layout: 'text',

          titleEn: 'Windows Terminal Apps',
          titleZh: 'Windows 上的终端应用',
          bodyEn:
            'You can open PowerShell from the Start menu, or open Windows Terminal and choose a profile. For this course, PowerShell is the default. Command Prompt still works for many old commands, but PowerShell is where Activate.ps1 and modern tooling feel natural.',
          bodyZh:
            '你可以从开始菜单打开 PowerShell，或打开 Windows Terminal 再选配置。本课程默认用 PowerShell。命令提示符仍能跑许多旧命令，但 Activate.ps1 与现代工具在 PowerShell 里更自然。',
          bullets: [
            {
              en: 'Search Start for Windows PowerShell or Windows Terminal.',
              zh: '在开始菜单搜索 Windows PowerShell 或 Windows Terminal。',
            },
            {
              en: 'In Cursor: Terminal → New Terminal, then confirm the shell is PowerShell.',
              zh: '在 Cursor：Terminal → New Terminal，并确认 shell 是 PowerShell。',
            },
            {
              en: 'cmd is fine to recognize; PowerShell is what we practice next.',
              zh: '认识 cmd 即可；下一章重点练习 PowerShell。',
              keywords: [{ en: 'Command Prompt (cmd)', zh: '命令提示符' }],
            },
          ],
        },
      ],
    },
    {
      id: 'prompt-and-folder',
      titleEn: 'Prompt and Current Folder',
      titleZh: '提示符与当前文件夹',
      slides: [
        {
          id: 'ch-e-terminal-prompt',
          layout: 'text',

          titleEn: 'Read the Prompt',
          titleZh: '读懂提示符',
          bodyEn:
            'The prompt usually shows your current path before the blinking cursor. That path is your working directory. Commands such as dir, py hello.py, and .venv\\Scripts\\Activate.ps1 are interpreted relative to this location unless you type a full path.',
          bodyZh:
            '提示符通常在闪烁光标前显示当前路径，那就是工作目录。除非你输入完整路径，否则 dir、py hello.py、.venv\\Scripts\\Activate.ps1 都会相对这个位置解释。',
          bullets: [
            {
              en: 'Example prompt idea: PS C:\\Users\\alex\\projects>',
              zh: '提示符示例：PS C:\\Users\\alex\\projects>',
              keywords: [{ en: 'PS prompt', zh: 'PowerShell 提示符' }],
            },
            {
              en: 'If a file “is missing”, first ask: am I in the right folder?',
              zh: '若文件“找不到”，先问：我是否在正确的文件夹？',
            },
            {
              en: 'Clear the screen with clear or cls when output becomes noisy.',
              zh: '输出太乱时可用 clear 或 cls 清屏。',
              keywords: [{ en: 'cls / clear', zh: '清屏' }],
            },
          ],
        },
        {
          id: 'ch-e-terminal-why',
          layout: 'text',

          titleEn: 'Why Developers Still Use Terminals',
          titleZh: '为什么开发者仍使用终端',
          bodyEn:
            'File Explorer is excellent for browsing. The terminal is better for repeatable actions: create folders, run py, activate a venv, install packages, and copy exact error text. University labs and documentation almost always give terminal steps because they are precise and shareable.',
          bodyZh:
            '文件资源管理器很适合浏览。终端更适合可重复动作：建文件夹、运行 py、激活 venv、安装包，以及复制精确报错。大学实验与文档几乎总给终端步骤，因为它们精确且便于分享。',
          bullets: [
            {
              en: 'Commands can be copied exactly from lecture notes.',
              zh: '命令可以从讲义原样复制。',
            },
            {
              en: 'Scripts and tools expect a shell, not mouse clicks.',
              zh: '脚本与工具期望的是 shell，而不是鼠标点击。',
            },
            {
              en: 'Error messages appear as text you can search and fix.',
              zh: '错误以文字出现，便于搜索与修复。',
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
          id: 'ch-e-terminal-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Open a shell and confirm you can see where you are.',
          bodyZh: '打开一个 shell，并确认你能看见自己在哪里。',
          bullets: [
            {
              en: 'Open Windows Terminal or search PowerShell in Start.',
              zh: '打开 Windows Terminal，或在开始菜单搜索 PowerShell。',
            },
            {
              en: 'Look at the prompt path. Write it down once.',
              zh: '看提示符上的路径，并抄写一次。',
            },
            {
              en: 'Run pwd or Get-Location and compare with File Explorer address bar.',
              zh: '运行 pwd 或 Get-Location，并与资源管理器地址栏对比。',
              keywords: [{ en: 'Get-Location', zh: '查看当前位置' }],
            },
            {
              en: 'In Cursor, open a new terminal and confirm it says PowerShell.',
              zh: '在 Cursor 中打开新终端，确认显示为 PowerShell。',
            },
          ],
        },
        {
          id: 'ch-e-terminal-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Typing commands into the wrong window, such as a Python REPL.',
              zh: '把命令打进错误窗口，例如 Python REPL。',
            },
            {
              en: 'Ignoring the prompt path and assuming Desktop is always current.',
              zh: '忽略提示符路径，以为当前永远是桌面。',
            },
            {
              en: 'Closing the terminal and losing the working directory context.',
              zh: '关掉终端后忘记原先的工作目录上下文。',
            },
          ],
        },
        {
          id: 'ch-e-terminal-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What is the difference between a terminal window and a shell?',
              zh: '终端窗口与 shell 有什么区别？',
            },
            {
              en: 'Which shell does this course prefer on Windows?',
              zh: '本课程在 Windows 上优先使用哪个 shell？',
            },
            {
              en: 'Why does the current folder matter before running py hello.py?',
              zh: '运行 py hello.py 之前，为什么当前文件夹很重要？',
            },
          ],
          noteEn:
            'Answers: window vs command interpreter; PowerShell; Python looks for the file relative to the current folder.',
          noteZh:
            '参考答案：窗口 vs 命令解释器；PowerShell；Python 会相对当前文件夹查找文件。',
        },
      ],
    },
  ],
}
