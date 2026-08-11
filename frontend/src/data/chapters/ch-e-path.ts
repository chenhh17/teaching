import type { Chapter } from '../../types/course'

export const chEPath: Chapter = {
  id: 'path-and-programs',
  titleEn: 'PATH and Programs',
  titleZh: 'PATH 与程序',
  summaryEn:
    'Explain how Windows finds commands through PATH, verify with where.exe and Get-Command, and restart the terminal after install changes.',
  summaryZh:
    '说明 Windows 如何通过 PATH 找到命令，用 where.exe 与 Get-Command 验证，并在安装变更后重启终端。',
  sections: [
    {
      id: 'path-idea',
      titleEn: 'The PATH Idea',
      titleZh: 'PATH 的概念',
      slides: [
        {
          id: 'ch-e-path-title',
          layout: 'title',

          titleEn: 'Part E · PATH and Programs',
          titleZh: '篇章 E · PATH 与程序',
          subtitleEn: 'Why typing py works after a good install',
          subtitleZh: '为什么安装正确后输入 py 就能用',
          illustration: 'title',
          keywords: [
            { en: 'PATH', zh: '环境变量 PATH' },
            { en: 'where.exe', zh: '查找可执行文件' },
            { en: 'py', zh: 'Python 启动器' },
          ],
        },
        {
          id: 'ch-e-path-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'PATH is a list of folders. When you type a short command, Windows searches those folders for a matching program. Understanding this removes much of the mystery behind “command not found”.',
          bodyZh:
            'PATH 是一串文件夹列表。当你输入短命令时，Windows 会在这些文件夹里搜索匹配的程序。理解这一点，能去掉“找不到命令”背后的许多神秘感。',
          bullets: [
            {
              en: 'Explain what the PATH variable does.',
              zh: '说明 PATH 变量做什么。',
              keywords: [{ en: 'PATH', zh: '环境变量 PATH' }],
            },
            {
              en: 'Verify a command with where.exe and Get-Command.',
              zh: '用 where.exe 与 Get-Command 验证命令。',
            },
            {
              en: 'Know why a new terminal is needed after PATH changes.',
              zh: '知道 PATH 变更后为何需要新终端。',
            },
          ],
        },
        {
          id: 'ch-e-path-how',
          layout: 'text',

          titleEn: 'How Windows Finds a Command',
          titleZh: 'Windows 如何找到命令',
          bodyEn:
            'When you type py, Windows does not magically know Python. It searches PATH folders in order for py.exe or a related launcher entry. If the installer never added the right folder, or your terminal started before the change, the search fails and you see a not-found error.',
          bodyZh:
            '当你输入 py，Windows 并不会魔法般认识 Python。它会按顺序在 PATH 文件夹中搜索 py.exe 或相关启动器。若安装程序从未加入正确文件夹，或终端在变更前就已启动，搜索就会失败并出现找不到命令的错误。',
          bullets: [
            {
              en: 'Short names work only if a matching executable is on PATH.',
              zh: '只有匹配的可执行文件在 PATH 上，短名称才能用。',
              keywords: [{ en: 'Executable', zh: '可执行文件' }],
            },
            {
              en: 'Order matters: the first match wins.',
              zh: '顺序很重要：先匹配到的生效。',
            },
            {
              en: 'Full paths still work even when PATH is wrong: C:\\Path\\to\\program.exe',
              zh: '即便 PATH 不对，完整路径仍可用：C:\\Path\\to\\program.exe',
            },
          ],
        },
        {
          id: 'ch-e-path-view',
          layout: 'text',

          titleEn: 'View PATH Safely',
          titleZh: '安全查看 PATH',
          bodyEn:
            'You can inspect PATH without editing it. In PowerShell, $env:Path shows the combined list as one long string separated by semicolons. In Settings, Environment Variables shows User and System Path entries separately.',
          bodyZh:
            '你可以只查看 PATH 而不修改。在 PowerShell 中，$env:Path 以分号分隔的长字符串显示合并列表。在设置的“环境变量”中，可分别看到用户与系统的 Path 条目。',
          bullets: [
            {
              en: 'Run: $env:Path -split \';\' to list folders one per line.',
              zh: '运行：$env:Path -split \';\'，逐行列出文件夹。',
              keywords: [{ en: '$env:Path', zh: '当前会话 PATH' }],
            },
            {
              en: 'User Path is usually enough for developer tools on a personal PC.',
              zh: '个人电脑上，开发工具通常放在用户 Path 即可。',
            },
            {
              en: 'Do not delete unknown entries just to “clean up”.',
              zh: '不要为了“清理”而删除不认识的条目。',
            },
          ],
        },
      ],
    },
    {
      id: 'verify-and-refresh',
      titleEn: 'Verify and Refresh',
      titleZh: '验证与刷新',
      slides: [
        {
          id: 'ch-e-path-verify',
          layout: 'text',

          titleEn: 'where.exe and Get-Command',
          titleZh: 'where.exe 与 Get-Command',
          bodyEn:
            'Verification beats guessing. where.exe py asks Windows which file would run. Get-Command py asks PowerShell for its command info. If they disagree or both fail, your install or PATH still needs work.',
          bodyZh:
            '验证胜过猜测。where.exe py 询问 Windows 将运行哪个文件。Get-Command py 询问 PowerShell 的命令信息。若两者不一致或都失败，说明安装或 PATH 仍需处理。',
          bullets: [
            {
              en: 'where.exe py',
              zh: 'where.exe py',
              keywords: [{ en: 'where.exe', zh: '查找程序路径' }],
            },
            {
              en: 'Get-Command py | Format-List *',
              zh: 'Get-Command py | Format-List *',
              keywords: [{ en: 'Get-Command', zh: '命令信息' }],
            },
            {
              en: 'If multiple lines appear, note which folder comes first.',
              zh: '若出现多行，注意哪一个文件夹排在前面。',
            },
          ],
        },
        {
          id: 'ch-e-path-restart',
          layout: 'text',

          titleEn: 'Restart the Terminal After Changes',
          titleZh: '变更后重启终端',
          bodyEn:
            'A running PowerShell window keeps the environment it loaded at start. After an installer updates PATH, close that window and open a new one. Logging out or rebooting is rarely required for ordinary Python installs, but a fresh terminal is required.',
          bodyZh:
            '正在运行的 PowerShell 窗口会保持启动时加载的环境。安装程序更新 PATH 后，关掉该窗口并开一个新的。普通 Python 安装很少需要注销或重启电脑，但必须开新终端。',
          bullets: [
            {
              en: 'Close all old terminals, including Cursor’s terminal panel.',
              zh: '关闭所有旧终端，包括 Cursor 的终端面板。',
            },
            {
              en: 'Open a new PowerShell and re-run where.exe py.',
              zh: '打开新的 PowerShell，再运行 where.exe py。',
            },
            {
              en: 'Still missing? Re-check the installer “Add python.exe to PATH” option in the next part.',
              zh: '仍找不到？在下一部分重新检查安装器的 “Add python.exe to PATH” 选项。',
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
          id: 'ch-e-path-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Inspect PATH and verify a few common commands.',
          bodyZh: '查看 PATH，并验证几个常见命令。',
          bullets: [
            {
              en: 'In PowerShell, run $env:Path -split \';\' | Select-Object -First 10',
              zh: '在 PowerShell 运行 $env:Path -split \';\' | Select-Object -First 10',
            },
            {
              en: 'Run where.exe powershell and where.exe py',
              zh: '运行 where.exe powershell 与 where.exe py',
            },
            {
              en: 'Run Get-Command powershell and note the Source path.',
              zh: '运行 Get-Command powershell，并记下 Source 路径。',
            },
            {
              en: 'If py is missing, write “not installed or not on PATH” and continue; Part F installs it.',
              zh: '若没有 py，写下“未安装或不在 PATH”，然后继续；篇章 F 会安装。',
            },
          ],
        },
        {
          id: 'ch-e-path-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Editing PATH by hand and removing important system folders.',
              zh: '手工改 PATH 时删掉重要系统文件夹。',
            },
            {
              en: 'Testing in an old terminal after install and concluding Python failed.',
              zh: '安装后仍在旧终端测试，并断定 Python 失败。',
            },
            {
              en: 'Confusing the PATH variable with a file path like C:\\Users\\alex\\file.txt',
              zh: '把 PATH 变量与 C:\\Users\\alex\\file.txt 这类文件路径混淆。',
            },
          ],
        },
        {
          id: 'ch-e-path-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What kind of information does PATH store?',
              zh: 'PATH 存储的是哪类信息？',
            },
            {
              en: 'Which tool shows which py.exe Windows would run?',
              zh: '哪个工具显示 Windows 将运行哪个 py.exe？',
            },
            {
              en: 'After changing PATH, what should you do before testing again?',
              zh: '更改 PATH 后，再次测试前应做什么？',
            },
          ],
          noteEn:
            'Answers: folders to search for programs; where.exe py; open a new terminal.',
          noteZh: '参考答案：用来搜索程序的文件夹列表；where.exe py；打开新终端。',
        },
      ],
    },
  ],
}
