import type { Chapter } from '../../types/course'

export const chEEnvironment: Chapter = {
  id: 'what-is-environment',
  titleEn: 'What Is an Environment',
  titleZh: '什么是环境',
  summaryEn:
    'Define a Windows coding environment as tools plus settings, and contrast system Python with project virtual environments.',
  summaryZh:
    '把 Windows 编程环境定义为工具加设置，并对比系统 Python 与项目虚拟环境。',
  sections: [
    {
      id: 'environment-idea',
      titleEn: 'The Idea of Environment',
      titleZh: '环境的概念',
      slides: [
        {
          id: 'ch-e-environment-title',
          layout: 'title',

          titleEn: 'Part E · What Is an Environment',
          titleZh: '篇章 E · 什么是环境',
          subtitleEn: 'The tools and settings your Windows code depends on',
          subtitleZh: 'Windows 上代码运行所依赖的工具与设置',
          illustration: 'title',
          keywords: [
            { en: 'Environment', zh: '环境' },
            { en: 'PATH', zh: '环境变量 PATH' },
            { en: 'venv', zh: '虚拟环境' },
          ],
        },
        {
          id: 'ch-e-environment-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'By the end of this chapter you should be able to describe your own Windows coding setup in plain language, and explain why projects often need isolation.',
          bodyZh:
            '学完本章后，你应能用通俗语言描述自己的 Windows 编程环境，并说明项目为何常常需要隔离。',
          bullets: [
            {
              en: 'Define environment as tools plus settings.',
              zh: '把环境定义为工具加设置。',
              keywords: [{ en: 'Environment', zh: '环境' }],
            },
            {
              en: 'Contrast system environment and virtual environment.',
              zh: '对比系统环境与虚拟环境。',
              keywords: [{ en: 'Virtual Environment', zh: '虚拟环境' }],
            },
            {
              en: 'Explain why PATH and packages matter on Windows.',
              zh: '说明 PATH 与程序包在 Windows 上为何重要。',
              keywords: [{ en: 'PATH', zh: '环境变量 PATH' }],
            },
          ],
        },
        {
          id: 'ch-e-environment-definition',
          layout: 'text',

          titleEn: 'Environment = Tools + Settings',
          titleZh: '环境 = 工具 + 设置',
          bodyEn:
            'An environment is not a mysterious cloud. It is the concrete combination of programs Windows can find and the settings that control how they run. When you type a command or open a .py file, Windows and Python look at this combination first.',
          bodyZh:
            '环境并不是神秘的“云端概念”，而是 Windows 能找到的程序，以及控制它们如何运行的设置。当你输入命令或打开 .py 文件时，Windows 与 Python 会先看这套组合。',
          bullets: [
            {
              en: 'Tools: Cursor, PowerShell, Python, browsers, Git.',
              zh: '工具：Cursor、PowerShell、Python、浏览器、Git。',
              keywords: [{ en: 'Tool', zh: '工具' }],
            },
            {
              en: 'Settings: PATH, Environment Variables, default folders, encodings.',
              zh: '设置：PATH、环境变量、默认文件夹、编码。',
              keywords: [{ en: 'Environment Variables', zh: '环境变量' }],
            },
            {
              en: 'Packages: libraries installed for the Python you are using.',
              zh: '程序包：安装在你正在使用的那个 Python 上的库。',
              keywords: [{ en: 'Package / Library', zh: '包 / 库' }],
            },
          ],
          noteEn: 'Same code can behave differently when tools or settings change.',
          noteZh: '工具或设置一变，同一段代码的表现也可能不同。',
        },
        {
          id: 'ch-e-environment-windows-view',
          layout: 'text',

          titleEn: 'How Windows Sees Your Setup',
          titleZh: 'Windows 如何看待你的环境',
          bodyEn:
            'On Windows, installers often write folders into PATH so commands like py become available. A new PowerShell window reads the current environment when it starts. That is why “restart the terminal” is a real fix after install changes.',
          bodyZh:
            '在 Windows 上，安装程序常常会把文件夹写入 PATH，于是 py 这类命令才能直接输入。新的 PowerShell 窗口启动时才会读取当前环境，所以安装变更后“重启终端”是有效修复。',
          bullets: [
            {
              en: 'User variables affect your account; system variables affect the whole PC.',
              zh: '用户变量影响当前账户；系统变量影响整台电脑。',
            },
            {
              en: 'Open Settings and search Environment Variables to view them safely.',
              zh: '打开设置并搜索“环境变量”即可安全查看。',
              keywords: [{ en: 'Settings', zh: '设置' }],
            },
            {
              en: 'Do not edit PATH randomly in this chapter; first learn what it is for.',
              zh: '本章先理解用途，不要随便改 PATH。',
            },
          ],
        },
      ],
    },
    {
      id: 'kinds-of-environments',
      titleEn: 'Kinds of Environments',
      titleZh: '环境的种类',
      slides: [
        {
          id: 'ch-e-environment-system',
          layout: 'text',

          titleEn: 'System Environment',
          titleZh: '系统环境',
          bodyEn:
            'The system environment is the shared default on your PC: the Python that installers put on PATH, plus packages that many apps might touch. It is convenient for a quick check, but it is a poor place to dump every course library forever.',
          bodyZh:
            '系统环境是电脑上的共享默认状态：安装程序放进 PATH 的 Python，以及许多应用都可能碰到的包。它适合快速检查，但不适合把每门课的库永久塞进去。',
          bullets: [
            {
              en: 'Shared by many projects and sometimes by other software.',
              zh: '被多个项目共用，有时也被其他软件共用。',
              keywords: [{ en: 'System Python', zh: '系统 Python' }],
            },
            {
              en: 'Changing package versions can break an unrelated project.',
              zh: '改动包版本可能弄坏无关项目。',
              keywords: [{ en: 'Version Conflict', zh: '版本冲突' }],
            },
            {
              en: 'Useful for py --version; risky as your only long-term workspace.',
              zh: '适合跑 py --version；不适合当作唯一长期工作区。',
            },
          ],
        },
        {
          id: 'ch-e-environment-virtual',
          layout: 'text',

          titleEn: 'Virtual Environment',
          titleZh: '虚拟环境',
          bodyEn:
            'A virtual environment is a private Python box for one project. On Windows it usually looks like a .venv folder with Scripts\\python.exe and Scripts\\Activate.ps1. When activated, pip installs go into that box instead of the global Python.',
          bodyZh:
            '虚拟环境是为单个项目准备的私有 Python 盒子。在 Windows 上通常是一个 .venv 文件夹，里面有 Scripts\\python.exe 与 Scripts\\Activate.ps1。激活后，pip 安装会进入这个盒子，而不是全局 Python。',
          bullets: [
            {
              en: 'Keeps project packages isolated from each other.',
              zh: '让项目依赖彼此隔离。',
              keywords: [{ en: 'Isolation', zh: '隔离' }],
            },
            {
              en: 'Activate with .venv\\Scripts\\Activate.ps1 in PowerShell.',
              zh: '在 PowerShell 中用 .venv\\Scripts\\Activate.ps1 激活。',
              keywords: [{ en: 'Activate.ps1', zh: '激活脚本' }],
            },
            {
              en: 'Common tools: venv (built-in), conda, poetry.',
              zh: '常见工具：venv（内置）、conda、poetry。',
              keywords: [{ en: 'venv', zh: '虚拟环境' }],
            },
          ],
          noteEn: 'Part F will practice creating and activating a venv on Windows.',
          noteZh: '篇章 F 会实际练习在 Windows 上创建并激活 venv。',
        },
        {
          id: 'ch-e-environment-why',
          layout: 'text',

          titleEn: 'Why Environments Matter',
          titleZh: '为什么环境很重要',
          bodyEn:
            'Beginners often blame “Python is broken” when two projects need different package versions. Environments turn that chaos into a clear rule: each project carries its own tools and packages, so classmates and future you can reproduce the same setup.',
          bodyZh:
            '初学者常在两个项目需要不同包版本时抱怨“Python 坏了”。环境把混乱变成清晰规则：每个项目带上自己的工具与包，同学和未来的你才能复现同一套配置。',
          bullets: [
            {
              en: 'Avoid version conflicts between course homework and side projects.',
              zh: '避免课程作业与课外项目互相冲突。',
            },
            {
              en: 'Make installs reproducible with requirements files later.',
              zh: '之后可用 requirements 文件让安装可复现。',
              keywords: [{ en: 'Reproducible', zh: '可复现' }],
            },
            {
              en: 'Keep the system Python cleaner and safer.',
              zh: '让系统 Python 更干净、更安全。',
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
          id: 'ch-e-environment-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Do not change PATH yet. Your goal is only to notice what already belongs to your coding environment.',
          bodyZh: '先不要改 PATH。目标只是观察：你的编程环境里已经有哪些东西。',
          bullets: [
            {
              en: 'List tools you already use: Cursor, browser, PowerShell, Python if installed.',
              zh: '列出已在用的工具：Cursor、浏览器、PowerShell、若已安装的 Python。',
            },
            {
              en: 'Open Settings and search Environment Variables; open the dialog and only look.',
              zh: '打开设置并搜索“环境变量”；打开对话框后只看不改。',
              keywords: [{ en: 'Environment Variables', zh: '环境变量' }],
            },
            {
              en: 'Find Path under User variables and notice it is a list of folders.',
              zh: '在用户变量中找到 Path，并注意它是一串文件夹列表。',
              keywords: [{ en: 'Path', zh: 'Path 列表' }],
            },
            {
              en: 'Write one sentence: My coding environment includes …',
              zh: '写一句话：我的编程环境包括……',
            },
          ],
          noteEn: 'Next chapters: talk to Windows with the terminal, then PATH in detail.',
          noteZh: '下一章：用终端与 Windows 对话，再深入 PATH。',
        },
        {
          id: 'ch-e-environment-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'Most early environment pain comes from treating the whole PC as one messy project folder.',
          bodyZh: '早期环境问题，大多来自把整台电脑当成一个混乱的项目文件夹。',
          bullets: [
            {
              en: 'Installing every package into the system Python.',
              zh: '把每个包都装进系统 Python。',
            },
            {
              en: 'Editing PATH randomly without knowing which folder you added.',
              zh: '不知道加了哪个文件夹就随便改 PATH。',
            },
            {
              en: 'Expecting two projects to share one forever-growing package pile.',
              zh: '指望两个项目永远共用一堆不断膨胀的依赖。',
            },
          ],
        },
        {
          id: 'ch-e-environment-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Answer in your own words before moving on.',
          bodyZh: '先用自己的话回答，再继续下一章。',
          bullets: [
            {
              en: 'What two parts make up an environment?',
              zh: '环境由哪两部分组成？',
            },
            {
              en: 'Why use a virtual environment for a project?',
              zh: '为什么项目要用虚拟环境？',
            },
            {
              en: 'What does PATH help Windows find?',
              zh: 'PATH 帮助 Windows 找到什么？',
            },
          ],
          noteEn:
            'Answers: tools + settings; isolation / fewer conflicts; programs and commands by folder search.',
          noteZh: '参考答案：工具 + 设置；隔离/减少冲突；按文件夹搜索程序与命令。',
        },
      ],
    },
  ],
}
