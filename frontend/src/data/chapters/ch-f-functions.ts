import type { Chapter } from '../../types/course'

export const chFFunctions: Chapter = {
  id: 'functions-packages-venv',
  titleEn: 'Functions, Packages, and venv',
  titleZh: '函数、包与虚拟环境',
  summaryEn:
    'Write reusable functions, install packages with pip inside a Windows venv, and activate with Scripts\\Activate.ps1.',
  summaryZh:
    '编写可复用函数，在 Windows venv 内用 pip 安装包，并用 Scripts\\Activate.ps1 激活。',
  sections: [
    {
      id: 'functions',
      titleEn: 'Functions',
      titleZh: '函数',
      slides: [
        {
          id: 'ch-f-functions-title',
          layout: 'title',

          titleEn: 'Part F · Functions, Packages, and venv',
          titleZh: '篇章 F · 函数、包与虚拟环境',
          subtitleEn: 'Reuse your code; keep each project clean',
          subtitleZh: '复用你的代码；让每个项目保持干净',
          illustration: 'title',
          keywords: [
            { en: 'Function', zh: '函数' },
            { en: 'pip', zh: '包安装工具' },
            { en: 'venv', zh: '虚拟环境' },
          ],
        },
        {
          id: 'ch-f-functions-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Functions package reusable steps. Packages add tools written by others. Virtual environments keep those tools from polluting every project on your Windows PC.',
          bodyZh:
            '函数把可复用步骤打包。包提供他人写好的工具。虚拟环境避免这些工具污染 Windows 电脑上的每个项目。',
          bullets: [
            {
              en: 'Write a small function with def and call it.',
              zh: '用 def 写一个小函数并调用它。',
            },
            {
              en: 'Install a package with pip inside an activated venv.',
              zh: '在已激活的 venv 内用 pip 安装包。',
            },
            {
              en: 'Activate with .venv\\Scripts\\Activate.ps1 on Windows.',
              zh: '在 Windows 上用 .venv\\Scripts\\Activate.ps1 激活。',
            },
          ],
        },
        {
          id: 'ch-f-functions-def',
          layout: 'text',

          titleEn: 'Define and Call Functions',
          titleZh: '定义并调用函数',
          bodyEn:
            'Use def to name a block of code. Parameters receive input values; return sends a result back. Call the function with parentheses. Keep functions short and named for their job, such as greet or average.',
          bodyZh:
            '用 def 给一段代码命名。参数接收输入值；return 送回结果。用圆括号调用函数。保持函数简短，并按职责命名，例如 greet 或 average。',
          bullets: [
            {
              en: 'def greet(name): return f"Hello, {name}"',
              zh: 'def greet(name): return f"Hello, {name}"',
              keywords: [
                { en: 'def', zh: '定义函数' },
                { en: 'return', zh: '返回值' },
              ],
            },
            {
              en: 'Call: print(greet("Alex"))',
              zh: '调用：print(greet("Alex"))',
            },
            {
              en: 'Indent the function body consistently.',
              zh: '函数主体保持一致缩进。',
            },
          ],
        },
        {
          id: 'ch-f-functions-why',
          layout: 'text',

          titleEn: 'Why Functions Matter Early',
          titleZh: '为什么要尽早使用函数',
          bodyEn:
            'Copy-pasting the same five lines invites inconsistent bugs. A function gives you one place to fix behavior. Even in week-one labs, extracting a tiny helper makes scripts easier to read aloud in class.',
          bodyZh:
            '反复粘贴相同的五行代码容易造成不一致的缺陷。函数让你只在一个地方修复行为。即使在第一周实验里，提取一个小助手函数，也更方便课堂上朗读脚本。',
          bullets: [
            {
              en: 'Reuse logic without duplication.',
              zh: '复用逻辑，避免重复。',
            },
            {
              en: 'Name intention: calculate_total is clearer than a blob of math.',
              zh: '命名表达意图：calculate_total 比一堆算式更清晰。',
            },
            {
              en: 'Test one function at a time with print calls.',
              zh: '用 print 调用一次只测一个函数。',
            },
          ],
        },
      ],
    },
    {
      id: 'packages-and-venv',
      titleEn: 'Packages and venv',
      titleZh: '包与虚拟环境',
      slides: [
        {
          id: 'ch-f-functions-pip',
          layout: 'text',

          titleEn: 'pip Installs Packages',
          titleZh: 'pip 安装包',
          bodyEn:
            'pip installs libraries from the Python Package Index into the current environment. Always activate your project venv first on Windows so packages do not land in the global Python by accident.',
          bodyZh:
            'pip 把 Python 包索引中的库安装到当前环境。在 Windows 上请先激活项目 venv，避免包意外装进全局 Python。',
          bullets: [
            {
              en: 'After activation: python -m pip install requests',
              zh: '激活后：python -m pip install requests',
              keywords: [{ en: 'pip', zh: '包安装工具' }],
            },
            {
              en: 'python -m pip list shows installed packages.',
              zh: 'python -m pip list 显示已安装的包。',
            },
            {
              en: 'Prefer python -m pip over bare pip when versions conflict.',
              zh: '版本冲突时，优先使用 python -m pip，而不是裸 pip。',
            },
          ],
        },
        {
          id: 'ch-f-functions-venv',
          layout: 'text',

          titleEn: 'Windows venv Workflow',
          titleZh: 'Windows venv 工作流',
          bodyEn:
            'Create once per project, activate in each new shell, then install packages. The activation script lives under Scripts on Windows, not bin. If PowerShell blocks the script, fix execution policy for the current user as practiced in Part E.',
          bodyZh:
            '每个项目创建一次，每个新 shell 都要激活，然后再安装包。Windows 上激活脚本在 Scripts 下，不在 bin。若 PowerShell 阻止脚本，按篇章 E 练习为当前用户修复执行策略。',
          bullets: [
            {
              en: 'Create: py -m venv .venv',
              zh: '创建：py -m venv .venv',
              keywords: [{ en: 'venv', zh: '虚拟环境' }],
            },
            {
              en: 'Activate: .\\.venv\\Scripts\\Activate.ps1',
              zh: '激活：.\\.venv\\Scripts\\Activate.ps1',
              keywords: [{ en: 'Activate.ps1', zh: '激活脚本' }],
            },
            {
              en: 'Deactivate: deactivate',
              zh: '退出激活：deactivate',
              keywords: [{ en: 'deactivate', zh: '退出虚拟环境' }],
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
          id: 'ch-f-functions-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Combine a function with a clean venv workflow.',
          bodyZh: '把函数与干净的 venv 工作流结合起来。',
          bullets: [
            {
              en: 'In python-lab, create helpers.py with a greet(name) function and a call.',
              zh: '在 python-lab 创建 helpers.py，编写 greet(name) 并调用它。',
            },
            {
              en: 'Run py helpers.py and confirm the output.',
              zh: '运行 py helpers.py 并确认输出。',
            },
            {
              en: 'Create and activate a venv with py -m venv .venv and Activate.ps1.',
              zh: '用 py -m venv .venv 与 Activate.ps1 创建并激活 venv。',
            },
            {
              en: 'Run python -m pip install rich then python -m pip list',
              zh: '运行 python -m pip install rich，再运行 python -m pip list',
            },
          ],
        },
        {
          id: 'ch-f-functions-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Defining a function but forgetting to call it.',
              zh: '定义了函数却忘记调用。',
            },
            {
              en: 'Installing packages before activating the venv.',
              zh: '尚未激活 venv 就安装包。',
            },
            {
              en: 'Using Linux bin/activate paths on Windows PowerShell.',
              zh: '在 Windows PowerShell 上使用 Linux 的 bin/activate 路径。',
            },
          ],
        },
        {
          id: 'ch-f-functions-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'Which keyword starts a function definition?',
              zh: '哪个关键字开始函数定义？',
            },
            {
              en: 'Where is the Windows activation script for .venv?',
              zh: '.venv 的 Windows 激活脚本在哪里？',
            },
            {
              en: 'Why run python -m pip inside an activated venv?',
              zh: '为什么要在已激活的 venv 内运行 python -m pip？',
            },
          ],
          noteEn:
            'Answers: def; .venv\\Scripts\\Activate.ps1; installs into the project environment, not a random global Python.',
          noteZh:
            '参考答案：def；.venv\\Scripts\\Activate.ps1；安装进项目环境，而不是随意的全局 Python。',
        },
      ],
    },
  ],
}
