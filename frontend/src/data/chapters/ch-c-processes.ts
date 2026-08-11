import type { Chapter } from '../../types/course'

export const chCProcesses: Chapter = {
  id: 'apps-processes-startup',
  titleEn: 'Apps, Processes, and Startup',
  titleZh: '应用、进程与开机启动',
  summaryEn: 'Tell apps from processes, use Task Manager carefully, and control startup apps.',
  summaryZh: '分清应用与进程，谨慎使用任务管理器，并管理开机启动应用。',
  sections: [
    {
      id: 'apps-and-processes',
      titleEn: 'Apps and Processes',
      titleZh: '应用与进程',
      slides: [
        {
          id: 'ch-c-processes-title',
          layout: 'title',

          titleEn: 'Part C · Apps, Processes, and Startup',
          titleZh: '篇章 C · 应用、进程与开机启动',
          subtitleEn: 'What is running on your Windows PC',
          subtitleZh: '你的 Windows 电脑上正在运行什么',
          keywords: [
            { en: 'App', zh: '应用' },
            { en: 'Process', zh: '进程' },
            { en: 'Startup', zh: '开机启动' },
          ],
        },
        {
          id: 'ch-c-processes-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Slow sign-in and frozen windows are often process problems, not “broken hardware.” Learn to read what is running and what starts with Windows.',
          bodyZh:
            '登录慢与窗口卡死常常是进程问题，而不是“硬件坏了”。学会看清正在运行什么，以及什么会随 Windows 启动。',
          bullets: [
            {
              en: 'Explain app versus process in plain words.',
              zh: '用简单话解释应用与进程的区别。',
            },
            {
              en: 'Open Task Manager and read the Processes list.',
              zh: '打开任务管理器并阅读进程列表。',
              keywords: [{ en: 'Task Manager', zh: '任务管理器' }],
            },
            {
              en: 'Turn off heavy startup apps safely.',
              zh: '安全地关闭较重的开机启动应用。',
            },
          ],
        },
        {
          id: 'ch-c-processes-app-vs-process',
          layout: 'text',

          titleEn: 'App vs Process',
          titleZh: '应用 vs 进程',
          bodyEn:
            'An app is the program you choose to open, such as Cursor or Edge. A process is that program while it is running. One app may start more than one process in the background.',
          bodyZh:
            '应用是你选择打开的程序，例如 Cursor 或 Edge。进程是该程序正在运行时的实例。一个应用可能在后台启动多个进程。',
          bullets: [
            {
              en: 'Installed files on disk are not yet a process.',
              zh: '磁盘上的安装文件还不是进程。',
              keywords: [{ en: 'Application', zh: '应用' }],
            },
            {
              en: 'Closing the window usually ends the related user processes.',
              zh: '关闭窗口通常会结束相关的用户进程。',
              keywords: [{ en: 'Process', zh: '进程' }],
            },
            {
              en: 'Browsers often keep helper processes for tabs and updates.',
              zh: '浏览器常为标签页与更新保留辅助进程。',
            },
          ],
        },
        {
          id: 'ch-c-processes-task-manager',
          layout: 'text',

          titleEn: 'Task Manager First Look',
          titleZh: '任务管理器初识',
          bodyEn:
            'Task Manager shows which apps and background processes use CPU, memory, disk, and network. Sort columns to find heavy consumers when the PC feels slow.',
          bodyZh:
            '任务管理器显示哪些应用与后台进程占用 CPU、内存、磁盘与网络。电脑变慢时，可按列排序找出占用大户。',
          bullets: [
            {
              en: 'Open with Ctrl + Shift + Esc.',
              zh: '用 Ctrl + Shift + Esc 打开。',
              keywords: [{ en: 'Ctrl + Shift + Esc', zh: '打开任务管理器' }],
            },
            {
              en: 'Processes tab lists CPU, Memory, Disk, and Network use.',
              zh: '“进程”选项卡显示 CPU、内存、磁盘与网络占用。',
              keywords: [
                { en: 'CPU', zh: '中央处理器' },
                { en: 'Memory', zh: '内存' },
              ],
            },
            {
              en: 'A short spike is normal; a long high load needs attention.',
              zh: '短暂冲高正常；长时间高占用才需要关注。',
            },
          ],
        },
      ],
    },
    {
      id: 'ending-and-startup',
      titleEn: 'End Task and Startup',
      titleZh: '结束任务与开机启动',
      slides: [
        {
          id: 'ch-c-processes-end-task',
          layout: 'text',

          titleEn: 'End Task Carefully',
          titleZh: '谨慎结束任务',
          bodyEn:
            'End task is a last step when an app freezes and will not close. Unsaved work in that app may be lost. Do not end unknown Windows processes “to free memory.”',
          bodyZh:
            '结束任务是应用卡死无法关闭时的最后手段。该应用中未保存的内容可能丢失。不要为了“腾内存”结束不认识的 Windows 进程。',
          bullets: [
            {
              en: 'Try the window Close button or Alt + F4 first.',
              zh: '先尝试窗口关闭按钮或 Alt + F4。',
              keywords: [{ en: 'End task', zh: '结束任务' }],
            },
            {
              en: 'End only an app you recognize and started yourself.',
              zh: '只结束你认识且自己启动的应用。',
            },
            {
              en: 'Avoid ending Explorer.exe or vague system names.',
              zh: '避免结束 Explorer.exe 或含糊的系统名称。',
            },
          ],
          noteEn: 'Prefer closing normally; End task is recovery, not cleanup.',
          noteZh: '优先正常关闭；结束任务用于恢复，不是日常清理。',
        },
        {
          id: 'ch-c-processes-startup',
          layout: 'text',

          titleEn: 'Startup Apps',
          titleZh: '开机启动应用',
          bodyEn:
            'Startup apps launch when Windows signs you in. Too many of them make the desktop feel slow after boot, even if the PC is fine later in the day.',
          bodyZh:
            '开机启动应用会在你登录 Windows 后自动运行。启动项太多时，开机后桌面感觉很慢，即使稍后电脑其实正常。',
          bullets: [
            {
              en: 'Chat, game launchers, and update helpers often auto-start.',
              zh: '聊天、游戏启动器与更新助手常会自动启动。',
              keywords: [{ en: 'Startup', zh: '开机启动' }],
            },
            {
              en: 'In Task Manager, open the Startup apps tab.',
              zh: '在任务管理器中打开“启动应用”选项卡。',
            },
            {
              en: 'Impact labels help you see which items slow sign-in.',
              zh: '影响程度标签可帮助看出哪些项拖慢登录。',
            },
          ],
        },
        {
          id: 'ch-c-processes-startup-settings',
          layout: 'text',

          titleEn: 'Control Startup on Windows',
          titleZh: '在 Windows 上管理启动项',
          bodyEn:
            'Disable apps you rarely need at login. Keep security tools and required school agents. You can manage the same list from Settings → Apps → Startup.',
          bodyZh:
            '禁用登录时很少需要的应用。保留安全工具与学校要求的代理。也可在 设置 → 应用 → 启动 管理同一列表。',
          bullets: [
            {
              en: 'Disable one non-essential app at a time, then reboot and test.',
              zh: '一次只禁用一个非必要应用，然后重启测试。',
            },
            {
              en: 'Keep antivirus or campus-required agents enabled.',
              zh: '保留杀毒或校园要求的代理为启用。',
            },
            {
              en: 'Settings → Apps → Startup is another safe control panel.',
              zh: '设置 → 应用 → 启动 是另一个安全控制入口。',
              keywords: [{ en: 'Settings', zh: '设置' }],
            },
          ],
        },
        {
          id: 'ch-c-processes-slow',
          layout: 'text',

          titleEn: 'When the PC Feels Slow',
          titleZh: '电脑感觉变慢时',
          bodyEn:
            'Before blaming the CPU, check Processes for a memory or disk hog, then check Startup for login bloat. Many “slow PC” complaints are too many apps starting at once.',
          bodyZh:
            '先别怪 CPU：先在进程里找内存或磁盘大户，再检查启动项是否过重。很多“电脑慢”其实是同时启动的应用太多。',
          bullets: [
            {
              en: 'Sort Processes by Memory, then by CPU.',
              zh: '先按内存排序进程，再按 CPU。',
            },
            {
              en: 'Close unused browser windows before ending random tasks.',
              zh: '结束随机任务前，先关掉不用的浏览器窗口。',
            },
            {
              en: 'A later chapter practices Performance graphs in more detail.',
              zh: '后续章节会更细致练习性能图表。',
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
          id: 'ch-c-processes-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Observe running work and count what starts with your sign-in.',
          bodyZh: '观察正在运行的工作，并统计登录时会启动什么。',
          bullets: [
            {
              en: 'Open Task Manager with Ctrl + Shift + Esc.',
              zh: '用 Ctrl + Shift + Esc 打开任务管理器。',
            },
            {
              en: 'Sort Processes by Memory and write down the top app name.',
              zh: '按内存排序进程，并写下占用最高的应用名称。',
            },
            {
              en: 'Open Startup apps and count how many items are Enabled.',
              zh: '打开“启动应用”，数一数有多少项是“已启用”。',
            },
          ],
        },
        {
          id: 'ch-c-processes-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Ending Explorer.exe or other system processes randomly.',
              zh: '随便结束 Explorer.exe 或其他系统进程。',
            },
            {
              en: 'Disabling every startup item, including needed tools.',
              zh: '禁用全部启动项，包括真正需要的工具。',
            },
            {
              en: 'Using End task instead of saving and closing normally.',
              zh: '本可正常保存关闭，却直接结束任务。',
            },
          ],
        },
        {
          id: 'ch-c-processes-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What is the difference between an app and a process?',
              zh: '应用和进程有什么区别？',
            },
            {
              en: 'When is End task a reasonable choice?',
              zh: '什么时候适合使用“结束任务”？',
            },
            {
              en: 'Where can you disable startup apps?',
              zh: '可以在哪里禁用开机启动应用？',
            },
          ],
          noteEn:
            'Answers: app is the program, process is it running; frozen apps; Task Manager Startup or Settings → Apps → Startup.',
          noteZh:
            '参考答案：应用是程序，进程是运行中的实例；应用卡死时；任务管理器启动项或 设置 → 应用 → 启动。',
        },
      ],
    },
  ],
}
