import type { Chapter } from '../../types/course'

export const chCTaskManager: Chapter = {
  id: 'task-manager-skills',
  titleEn: 'Task Manager Skills',
  titleZh: '任务管理器技能',
  summaryEn: 'Use Processes, Performance, Startup apps, and safe End task habits on Windows.',
  summaryZh: '在 Windows 上使用进程、性能、启动应用与安全的结束任务习惯。',
  sections: [
    {
      id: 'open-and-read',
      titleEn: 'Open and Read',
      titleZh: '打开并读懂',
      slides: [
        {
          id: 'ch-c-task-manager-title',
          layout: 'title',

          titleEn: 'Part C · Task Manager Skills',
          titleZh: '篇章 C · 任务管理器技能',
          subtitleEn: 'See what is using CPU, memory, disk, and network',
          subtitleZh: '看清谁在占用 CPU、内存、磁盘与网络',
          keywords: [
            { en: 'Task Manager', zh: '任务管理器' },
            { en: 'Process', zh: '进程' },
            { en: 'Startup', zh: '启动项' },
          ],
        },
        {
          id: 'ch-c-task-manager-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Task Manager is a diagnostic window, not a game of ending every high number. Learn to open it quickly, read the right tab, and act carefully.',
          bodyZh:
            '任务管理器是诊断窗口，不是把每个高数字都结束掉的游戏。学会快速打开、读对选项卡，并谨慎操作。',
          bullets: [
            {
              en: 'Open Task Manager with Ctrl + Shift + Esc.',
              zh: '用 Ctrl + Shift + Esc 打开任务管理器。',
              keywords: [{ en: 'Task Manager', zh: '任务管理器' }],
            },
            {
              en: 'Read Processes and Performance tabs for bottlenecks.',
              zh: '用进程与性能页找出瓶颈。',
            },
            {
              en: 'Disable heavy Startup apps carefully.',
              zh: '谨慎禁用占用高的启动应用。',
              keywords: [{ en: 'Startup', zh: '启动项' }],
            },
          ],
        },
        {
          id: 'ch-c-task-manager-open',
          layout: 'text',

          titleEn: 'Ways to Open Task Manager',
          titleZh: '打开任务管理器的方式',
          bodyEn:
            'Memorize one fast shortcut for class. Other entry points help when a window is frozen or a keyboard layout differs.',
          bodyZh:
            '课堂先记住一个最快的快捷键。当窗口卡住或键盘布局不同时，其他入口也能帮忙。',
          bullets: [
            {
              en: 'Fastest: Ctrl + Shift + Esc.',
              zh: '最快：Ctrl + Shift + Esc。',
            },
            {
              en: 'Ctrl + Alt + Delete → Task Manager.',
              zh: 'Ctrl + Alt + Delete → 任务管理器。',
            },
            {
              en: 'Right-click the taskbar → Task Manager on many Windows versions.',
              zh: '在许多 Windows 版本上可右键任务栏 → 任务管理器。',
            },
          ],
        },
        {
          id: 'ch-c-task-manager-processes',
          layout: 'text',

          titleEn: 'Processes: Who Is Running',
          titleZh: '进程：谁在运行',
          bodyEn:
            'Each row is an app or background process. Sort by CPU, Memory, Disk, or Network to find hogs. Expand a group when Windows shows child processes.',
          bodyZh:
            '每一行是一个应用或后台进程。按 CPU、内存、磁盘或网络排序找占用大户。Windows 显示分组时，可展开查看子进程。',
          bullets: [
            {
              en: 'Name the process before you judge it.',
              zh: '先看清进程名称，再做判断。',
              keywords: [{ en: 'Process', zh: '进程' }],
            },
            {
              en: 'Memory pressure often feels like freezes even when CPU looks fine.',
              zh: '即使 CPU 看起来正常，内存压力也常让人感觉卡住。',
            },
            {
              en: 'Disk at 100% can make every click wait.',
              zh: '磁盘 100% 时，每次点击都可能在等待。',
            },
          ],
        },
      ],
    },
    {
      id: 'performance-and-startup',
      titleEn: 'Performance and Startup',
      titleZh: '性能与启动',
      slides: [
        {
          id: 'ch-c-task-manager-performance',
          layout: 'text',

          titleEn: 'Performance Graphs',
          titleZh: '性能图表',
          bodyEn:
            'The Performance tab shows live graphs for CPU, Memory, Disk, GPU, and Ethernet or Wi-Fi. Watch for sustained highs, not one-second spikes.',
          bodyZh:
            '性能页显示 CPU、内存、磁盘、GPU 与以太网或 Wi-Fi 的实时曲线。关注持续偏高，而不是一秒钟的尖峰。',
          bullets: [
            {
              en: 'High Memory plus busy Disk often feels like “everything freezes.”',
              zh: '内存高加上磁盘忙，常感觉“全部卡住”。',
              keywords: [{ en: 'Performance', zh: '性能' }],
            },
            {
              en: 'Open Resource Monitor from Performance for deeper detail.',
              zh: '可从性能页打开资源监视器看更多细节。',
              keywords: [{ en: 'Resource Monitor', zh: '资源监视器' }],
            },
            {
              en: 'Idle graphs should usually stay calm after apps settle.',
              zh: '应用稳定后，空闲时的曲线通常应较平稳。',
            },
          ],
        },
        {
          id: 'ch-c-task-manager-startup',
          layout: 'text',

          titleEn: 'Startup Apps',
          titleZh: '启动应用',
          bodyEn:
            'Startup lists apps that launch at sign-in. Disable chat or game launchers you do not need every boot. Keep security tools and school-required agents enabled.',
          bodyZh:
            '启动项列出登录时自动启动的应用。禁用不需要每次开机的聊天或游戏启动器。保留安全工具与学校要求的代理。',
          bullets: [
            {
              en: 'Disable one recognizable non-essential app at a time.',
              zh: '一次只禁用一个你认识且非必要的应用。',
              keywords: [{ en: 'Startup', zh: '启动项' }],
            },
            {
              en: 'Reboot once to confirm sign-in still feels correct.',
              zh: '重启一次，确认登录体验仍然正常。',
            },
            {
              en: 'Do not disable every item hoping for magic speed.',
              zh: '不要指望禁用全部项目就能神奇变快。',
            },
          ],
        },
        {
          id: 'ch-c-task-manager-end',
          layout: 'text',

          titleEn: 'Safe End Task Habits',
          titleZh: '安全的结束任务习惯',
          bodyEn:
            'End task for a frozen app you opened and recognize. Save work in other apps first when possible. Avoid ending System, csrss, or unknown services.',
          bodyZh:
            '结束你打开且认识的卡住应用。可能时先在其他应用里保存工作。避免结束 System、csrss 或不明白的服务。',
          bullets: [
            {
              en: 'End task recovers a freeze; it is not daily housekeeping.',
              zh: '结束任务用于解除卡死，不是日常打扫。',
              keywords: [{ en: 'End Task', zh: '结束任务' }],
            },
            {
              en: 'If many apps freeze, check Memory and Disk on Performance.',
              zh: '若多个应用都卡，先看性能页的内存与磁盘。',
            },
            {
              en: 'Unknown names deserve research, not instant End task.',
              zh: '不认识的名称应先查证，不要立刻结束。',
            },
          ],
        },
        {
          id: 'ch-c-task-manager-powershell',
          layout: 'text',

          titleEn: 'Optional: PowerShell Snapshot',
          titleZh: '可选：PowerShell 快照',
          bodyEn:
            'Advanced users can list top processes from PowerShell. In class, Task Manager remains the first tool; PowerShell is an optional second view.',
          bodyZh:
            '进阶同学可用 PowerShell 列出占用靠前的进程。课堂上仍以任务管理器为第一工具；PowerShell 只是可选的第二视角。',
          bullets: [
            {
              en: 'Get-Process | Sort-Object CPU -Descending | Select-Object -First 5',
              zh: 'Get-Process | Sort-Object CPU -Descending | Select-Object -First 5',
            },
            {
              en: 'Use Sort-Object WorkingSet for a memory-oriented list.',
              zh: '可用 Sort-Object WorkingSet 按内存排序。',
            },
            {
              en: 'Do not Stop-Process unless you know the process name.',
              zh: '除非知道进程名，否则不要 Stop-Process。',
            },
          ],
        },
      ],
    },
    {
      id: 'check-in',
      titleEn: 'Check In',
      titleZh: '检查一下',
      slides: [
        {
          id: 'ch-c-task-manager-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Collect a tiny performance note for your own PC.',
          bodyZh: '为自己的电脑做一份简短的性能记录。',
          bullets: [
            {
              en: 'Ctrl + Shift + Esc → Processes: sort by Memory and note the top three names.',
              zh: 'Ctrl + Shift + Esc → 进程：按内存排序，记下前三个名称。',
            },
            {
              en: 'Performance: click CPU and Memory, watch 30 seconds while idle.',
              zh: '性能：点 CPU 与内存，空闲观察 30 秒。',
            },
            {
              en: 'Startup apps: disable one non-essential app you recognize.',
              zh: '启动应用：禁用一个你认识且非必要的应用。',
            },
          ],
        },
        {
          id: 'ch-c-task-manager-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Ending random high-CPU processes without reading the name.',
              zh: '不看名字就结束随机的高 CPU 进程。',
            },
            {
              en: 'Disabling every Startup item including security software.',
              zh: '禁用所有启动项，包括安全软件。',
            },
            {
              en: 'Assuming high CPU for two seconds means malware.',
              zh: '以为 CPU 高占用两秒就等于有恶意软件。',
            },
          ],
        },
        {
          id: 'ch-c-task-manager-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What is the fastest shortcut for Task Manager?',
              zh: '打开任务管理器最快的快捷键是什么？',
            },
            {
              en: 'Which tab shows live Memory graphs?',
              zh: '哪个选项卡显示实时内存曲线？',
            },
            {
              en: 'Name one safe reason to use End task.',
              zh: '说出一个可以安全使用“结束任务”的理由。',
            },
          ],
          noteEn:
            'Answers: Ctrl + Shift + Esc; Performance; a frozen app you started (e.g. Notepad or browser).',
          noteZh:
            '参考答案：Ctrl + Shift + Esc；性能；你启动后卡住的应用（如记事本或浏览器）。',
        },
      ],
    },
  ],
}
