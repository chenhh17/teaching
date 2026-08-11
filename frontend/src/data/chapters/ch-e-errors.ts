import type { Chapter } from '../../types/course'

export const chEErrors: Chapter = {
  id: 'reading-command-errors',
  titleEn: 'Reading Command Errors',
  titleZh: '读懂命令错误',
  summaryEn:
    'Read PowerShell and Python launcher errors calmly: command not found, access denied, execution policy, and wrong folder.',
  summaryZh:
    '冷静阅读 PowerShell 与 Python 启动器错误：找不到命令、拒绝访问、执行策略与进错文件夹。',
  sections: [
    {
      id: 'read-errors',
      titleEn: 'How to Read Errors',
      titleZh: '如何阅读错误',
      slides: [
        {
          id: 'ch-e-errors-title',
          layout: 'title',

          titleEn: 'Part E · Reading Command Errors',
          titleZh: '篇章 E · 读懂命令错误',
          subtitleEn: 'Errors are clues, not a final judgment',
          subtitleZh: '错误是线索，不是最终判决',
          illustration: 'title',
          keywords: [
            { en: 'Error Message', zh: '错误信息' },
            { en: 'Troubleshooting', zh: '排查' },
            { en: 'Execution Policy', zh: '执行策略' },
          ],
        },
        {
          id: 'ch-e-errors-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'An error message is a short detective report. Learn to extract the command that failed, the reason category, and the next check. Panic reading wastes time; structured reading fixes labs faster.',
          bodyZh:
            '错误信息是一份简短的侦探报告。学会提取：失败的命令、原因类别、下一步检查。慌乱阅读浪费时间；结构化阅读能更快修好实验。',
          bullets: [
            {
              en: 'Read from the most specific line to a concrete next check.',
              zh: '从最具体的一行读到具体的下一步检查。',
            },
            {
              en: 'Recognize not found, access denied, execution policy, and wrong folder.',
              zh: '识别找不到、拒绝访问、执行策略与进错文件夹。',
            },
            {
              en: 'Copy the full error text before asking for help.',
              zh: '求助前先复制完整错误文本。',
            },
          ],
        },
        {
          id: 'ch-e-errors-method',
          layout: 'text',

          titleEn: 'A Calm Reading Method',
          titleZh: '冷静阅读法',
          bodyEn:
            'Start at the top useful line, not the longest stack. Ask four questions: Which command did I run? What did Windows or Python claim failed? Is this about finding a program, finding a file, or permission? What single check can I run next?',
          bodyZh:
            '从最有用的一行开始，而不是最长的堆栈。问四个问题：我运行了哪条命令？Windows 或 Python 声称什么失败了？这是找不到程序、找不到文件，还是权限问题？下一步只能做哪一个检查？',
          bullets: [
            {
              en: 'Quote the failing command exactly as typed.',
              zh: '原样引用你输入的失败命令。',
            },
            {
              en: 'Underline nouns: py, Activate.ps1, hello.py, path folders.',
              zh: '划出名词：py、Activate.ps1、hello.py、路径文件夹。',
            },
            {
              en: 'Run one verification command: Get-Location, dir, where.exe, Get-Command.',
              zh: '只运行一条验证命令：Get-Location、dir、where.exe、Get-Command。',
            },
          ],
        },
      ],
    },
    {
      id: 'common-windows-errors',
      titleEn: 'Common Windows Errors',
      titleZh: '常见 Windows 错误',
      slides: [
        {
          id: 'ch-e-errors-notfound',
          layout: 'text',

          titleEn: 'Command Not Found',
          titleZh: '找不到命令',
          bodyEn:
            'Messages like “not recognized as the name of a cmdlet” mean PowerShell searched PATH and failed. This is often a missing install, a missing PATH entry, a typo, or an old terminal session.',
          bodyZh:
            '类似 “not recognized as the name of a cmdlet” 的信息表示 PowerShell 搜索 PATH 失败。常见原因是未安装、PATH 缺失、拼写错误，或仍在旧终端会话中。',
          bullets: [
            {
              en: 'Check spelling: py not python3.12-unless that name exists.',
              zh: '检查拼写：用 py，而不是不存在的 python3.12 名称（除非确实存在）。',
              keywords: [{ en: 'py', zh: 'Python 启动器' }],
            },
            {
              en: 'Run where.exe py and open a new terminal after installs.',
              zh: '运行 where.exe py；安装后打开新终端。',
            },
            {
              en: 'Confirm you are in PowerShell, not inside the Python >>> REPL.',
              zh: '确认你在 PowerShell 中，而不是在 Python 的 >>> REPL 里。',
              keywords: [{ en: 'REPL', zh: '交互环境' }],
            },
          ],
        },
        {
          id: 'ch-e-errors-policy',
          layout: 'text',

          titleEn: 'Execution Policy and Activate.ps1',
          titleZh: '执行策略与 Activate.ps1',
          bodyEn:
            'Activating a venv runs .venv\\Scripts\\Activate.ps1. If PowerShell blocks scripts, you may see an execution policy error. For a user-level course machine, a common fix is allowing local scripts for the current user, then retrying activation.',
          bodyZh:
            '激活 venv 会运行 .venv\\Scripts\\Activate.ps1。若 PowerShell 阻止脚本，你可能看到执行策略错误。在用户级课程电脑上，常见修复是为当前用户允许本地脚本，然后重试激活。',
          bullets: [
            {
              en: 'Error keywords: running scripts is disabled on this system.',
              zh: '错误关键词：running scripts is disabled on this system。',
              keywords: [{ en: 'Execution Policy', zh: '执行策略' }],
            },
            {
              en: 'Typical fix: Set-ExecutionPolicy -Scope CurrentUser RemoteSigned',
              zh: '常见修复：Set-ExecutionPolicy -Scope CurrentUser RemoteSigned',
            },
            {
              en: 'Then run: .\\.venv\\Scripts\\Activate.ps1',
              zh: '然后运行：.\\.venv\\Scripts\\Activate.ps1',
            },
          ],
          noteEn: 'Ask your lab policy before changing machine-wide settings.',
          noteZh: '更改整机设置前，先确认实验室策略。',
        },
        {
          id: 'ch-e-errors-folder',
          layout: 'text',

          titleEn: 'Wrong Folder and Access Denied',
          titleZh: '进错文件夹与拒绝访问',
          bodyEn:
            'Python may say it cannot open hello.py because your shell is elsewhere. Access denied can mean permission issues, a file locked by another program, or writing into a protected folder. Check location first; permissions second.',
          bodyZh:
            'Python 可能因为 shell 不在文件所在目录而无法打开 hello.py。拒绝访问可能意味着权限问题、文件被其他程序占用，或写入受保护文件夹。先查位置，再查权限。',
          bullets: [
            {
              en: 'Get-Location and dir before every “missing file” conclusion.',
              zh: '在断定“文件丢失”前，先运行 Get-Location 与 dir。',
            },
            {
              en: 'Close editors that lock an output file, then retry.',
              zh: '关闭锁定输出文件的编辑器，然后重试。',
            },
            {
              en: 'Prefer project folders under your user profile, not System32.',
              zh: '项目文件夹优先放在用户目录下，而不是 System32。',
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
          id: 'ch-e-errors-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Practice reading failures on purpose in a safe way.',
          bodyZh: '用安全方式刻意练习阅读失败信息。',
          bullets: [
            {
              en: 'In PowerShell, run a misspelled command: pyythhon --version',
              zh: '在 PowerShell 运行拼错的命令：pyythhon --version',
            },
            {
              en: 'Copy the full error text into a notes file.',
              zh: '把完整错误文本复制到笔记文件。',
            },
            {
              en: 'Run Get-Location, then dir, and explain whether a missing script would be a PATH issue or a folder issue.',
              zh: '运行 Get-Location，再运行 dir，并说明缺失脚本更像 PATH 问题还是文件夹问题。',
            },
            {
              en: 'If you already have a venv, try Activate.ps1 and note any policy message.',
              zh: '若已有 venv，尝试 Activate.ps1，并记下任何策略提示。',
            },
          ],
        },
        {
          id: 'ch-e-errors-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Re-running the same failing command without changing location or spelling.',
              zh: '不改位置也不改拼写，重复运行同一失败命令。',
            },
            {
              en: 'Sending a screenshot of half an error instead of the full text.',
              zh: '只发半截报错截图，而不是完整文本。',
            },
            {
              en: 'Changing execution policy globally without understanding scope.',
              zh: '不理解作用域就全局修改执行策略。',
            },
          ],
        },
        {
          id: 'ch-e-errors-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What does “not recognized as a cmdlet” usually mean?',
              zh: '“not recognized as a cmdlet” 通常意味着什么？',
            },
            {
              en: 'Which script often triggers execution policy errors in Python work?',
              zh: 'Python 学习中哪个脚本常触发执行策略错误？',
            },
            {
              en: 'What should you check first when hello.py is “missing”?',
              zh: '当 hello.py “找不到”时，应先检查什么？',
            },
          ],
          noteEn:
            'Answers: command not on PATH or typo; Activate.ps1; current folder with Get-Location and dir.',
          noteZh:
            '参考答案：命令不在 PATH 或拼写错误；Activate.ps1；用 Get-Location 与 dir 检查当前文件夹。',
        },
      ],
    },
  ],
}
