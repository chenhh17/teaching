import type { Chapter } from '../../types/course'

export const chCDesktop: Chapter = {
  id: 'windows-desktop-and-settings',
  titleEn: 'Windows Desktop and Settings',
  titleZh: 'Windows 桌面与设置',
  summaryEn: 'Desktop, Start, taskbar, Action Center, and the Settings app as your OS home base.',
  summaryZh: '桌面、开始、任务栏、操作中心，以及作为系统大本营的设置应用。',
  sections: [
    {
      id: 'desktop-home',
      titleEn: 'Desktop Home Base',
      titleZh: '桌面大本营',
      slides: [
        {
          id: 'ch-c-desktop-title',
          layout: 'title',

          titleEn: 'Part C · Windows Desktop and Settings',
          titleZh: '篇章 C · Windows 桌面与设置',
          subtitleEn: 'Find apps, files, and system controls quickly',
          subtitleZh: '快速找到应用、文件与系统控制',
          keywords: [
            { en: 'Desktop', zh: '桌面' },
            { en: 'Start', zh: '开始' },
            { en: 'Settings', zh: '设置' },
          ],
        },
        {
          id: 'ch-c-desktop-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Treat the desktop as a launch pad, not a junk drawer. You should reach Start, taskbar tools, and key Settings pages without guessing.',
          bodyZh:
            '把桌面当作启动台，而不是杂物抽屉。你应能不靠猜测就打开开始、任务栏工具与关键设置页。',
          bullets: [
            {
              en: 'Navigate Desktop, Start, taskbar, and the notification area.',
              zh: '会用桌面、开始、任务栏与通知区域。',
            },
            {
              en: 'Open key Settings pages without hunting menus.',
              zh: '不乱翻菜单也能打开关键设置页。',
            },
            {
              en: 'Personalize only what helps focus, not endless themes.',
              zh: '只个性化有助于专注的选项，不要沉迷主题。',
            },
          ],
        },
        {
          id: 'ch-c-desktop-layout',
          layout: 'text',

          titleEn: 'Desktop, Icons, and Focus',
          titleZh: '桌面、图标与专注',
          bodyEn:
            'Desktop icons are shortcuts. Keep only daily items visible. Store real project files in folders under Documents or a projects directory so homework survives desktop cleanup.',
          bodyZh:
            '桌面图标多是快捷方式。只保留每天要用的。真实项目文件应放进“文档”或 projects 目录，这样整理桌面时不会丢掉作业。',
          bullets: [
            {
              en: 'Win + D shows the desktop; Win + , peeks briefly.',
              zh: 'Win + D 显示桌面；Win + , 可短暂 Peek。',
              keywords: [{ en: 'Desktop', zh: '桌面' }],
            },
            {
              en: 'A crowded desktop makes the wrong file easy to open.',
              zh: '桌面太乱时，很容易点开错误文件。',
            },
            {
              en: 'Prefer named folders for class work instead of loose Desktop piles.',
              zh: '课程作业用有名字的文件夹，不要松散堆在桌面。',
            },
          ],
        },
        {
          id: 'ch-c-desktop-start',
          layout: 'text',

          titleEn: 'Start Menu and Search',
          titleZh: '开始菜单与搜索',
          bodyEn:
            'The Windows key opens Start. Typing immediately searches apps, settings, and files. Right-click Start (Win + X) opens useful power-user links such as Terminal and Disk Management.',
          bodyZh:
            'Windows 键打开开始菜单。直接输入即可搜索应用、设置与文件。右键开始（Win + X）可打开终端、磁盘管理等高级链接。',
          bullets: [
            {
              en: 'Search is usually faster than scrolling the all-apps list.',
              zh: '搜索通常比滚动全部应用列表更快。',
              keywords: [{ en: 'Start', zh: '开始' }],
            },
            {
              en: 'Pin Cursor, Terminal, and File Explorer for one-click open.',
              zh: '固定 Cursor、终端与文件资源管理器以便一键打开。',
            },
            {
              en: 'Use Start search for Settings pages when you forget the path.',
              zh: '忘记设置路径时，用开始搜索设置页。',
            },
          ],
        },
      ],
    },
    {
      id: 'settings-map',
      titleEn: 'Settings Map',
      titleZh: '设置地图',
      slides: [
        {
          id: 'ch-c-desktop-taskbar',
          layout: 'text',

          titleEn: 'Taskbar and Quick Actions',
          titleZh: '任务栏与快捷操作',
          bodyEn:
            'The taskbar shows running and pinned apps. The notification area holds network, volume, battery, and clock. Win + A opens quick settings for Wi-Fi, Bluetooth, and brightness.',
          bodyZh:
            '任务栏显示正在运行与已固定的应用。通知区域有网络、音量、电池与时钟。Win + A 打开快速设置，可调 Wi-Fi、蓝牙与亮度。',
          bullets: [
            {
              en: 'Pin only apps you open several times a week.',
              zh: '只固定每周会打开多次的应用。',
              keywords: [{ en: 'Taskbar', zh: '任务栏' }],
            },
            {
              en: 'Hover the network icon to confirm you joined the right Wi-Fi.',
              zh: '把鼠标悬停在网络图标上，确认连到正确的 Wi-Fi。',
            },
            {
              en: 'Win + A is faster than opening full Settings for quick toggles.',
              zh: '快速开关时，Win + A 比打开完整设置更快。',
            },
          ],
        },
        {
          id: 'ch-c-desktop-settings',
          layout: 'text',

          titleEn: 'Settings Pages You Need',
          titleZh: '你需要的设置页',
          bodyEn:
            'Memorize a short map: System for display and power, Network & internet for connectivity, Bluetooth & devices for hardware, Accounts for identity, and Privacy & security for safety.',
          bodyZh:
            '记住一张短地图：系统管显示与电源，网络和 Internet 管连接，蓝牙和设备管硬件，账户管身份，隐私和安全性管安全。',
          bullets: [
            {
              en: 'Win + I → System: Display, Sound, Power & battery, About.',
              zh: 'Win + I → 系统：显示、声音、电源和电池、关于。',
              keywords: [{ en: 'Settings', zh: '设置' }],
            },
            {
              en: 'About is useful when a lab asks for Windows version or device name.',
              zh: '机房要求填写 Windows 版本或设备名时，用“关于”。',
            },
            {
              en: 'Prefer Settings over Control Panel for most modern tasks.',
              zh: '多数现代任务优先用设置，而不是控制面板。',
            },
          ],
        },
        {
          id: 'ch-c-desktop-virtual',
          layout: 'text',

          titleEn: 'Optional: Virtual Desktops',
          titleZh: '可选：虚拟桌面',
          bodyEn:
            'Virtual desktops separate class work from entertainment when one screen feels crowded. They are optional; use them only if they reduce distraction.',
          bodyZh:
            '虚拟桌面可在一个屏幕太挤时，把上课与娱乐分开。这是可选项；只有在能减少分心时再使用。',
          bullets: [
            {
              en: 'Win + Tab opens Task view; choose New desktop.',
              zh: 'Win + Tab 打开任务视图；选择新建桌面。',
              keywords: [{ en: 'Virtual Desktop', zh: '虚拟桌面' }],
            },
            {
              en: 'Win + Ctrl + D creates a desktop; Win + Ctrl + F4 closes one.',
              zh: 'Win + Ctrl + D 新建；Win + Ctrl + F4 关闭。',
            },
            {
              en: 'Keep coding tools on one desktop and chat or video on another.',
              zh: '可把编程工具放在一个桌面，聊天或视频放在另一个。',
            },
          ],
        },
        {
          id: 'ch-c-desktop-display',
          layout: 'text',

          titleEn: 'Display Scale and Readability',
          titleZh: '显示缩放与可读性',
          bodyEn:
            'Readable text matters more than a fancy wallpaper. Adjust scale and resolution carefully so menus and code stay clear during long labs.',
          bodyZh:
            '可读文字比漂亮壁纸更重要。谨慎调整缩放与分辨率，让菜单与代码在长时间实验中仍清晰。',
          bullets: [
            {
              en: 'Settings → System → Display controls scale and resolution.',
              zh: '设置 → 系统 → 显示 控制缩放与分辨率。',
            },
            {
              en: 'If text is tiny, raise scale before buying a new monitor.',
              zh: '文字太小时，先提高缩放，再考虑换显示器。',
            },
            {
              en: 'Avoid random changes that make every window unreadable.',
              zh: '避免随意更改导致每个窗口都难读。',
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
          id: 'ch-c-desktop-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Collect device facts and pin the tools you will use every week.',
          bodyZh: '收集设备信息，并固定你每周都会用到的工具。',
          bullets: [
            {
              en: 'Win + I → System → About: copy device name and Windows version.',
              zh: 'Win + I → 系统 → 关于：抄下设备名与 Windows 版本。',
            },
            {
              en: 'Personalization → Taskbar: confirm Search and Task view options.',
              zh: '个性化 → 任务栏：确认搜索与任务视图选项。',
            },
            {
              en: 'Pin File Explorer and your editor to the taskbar.',
              zh: '把文件资源管理器与编辑器固定到任务栏。',
            },
          ],
        },
        {
          id: 'ch-c-desktop-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Leaving Control Panel as the only place you ever look.',
              zh: '永远只在“控制面板”里找设置。',
            },
            {
              en: 'Covering the desktop with dozens of unsorted shortcuts.',
              zh: '桌面堆满未整理的几十个快捷方式。',
            },
            {
              en: 'Changing scale or resolution randomly until text is unreadable.',
              zh: '随意改缩放或分辨率直到文字难读。',
            },
          ],
        },
        {
          id: 'ch-c-desktop-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'Which shortcut opens Settings?',
              zh: '哪个快捷键打开设置？',
            },
            {
              en: 'What does Win + X open?',
              zh: 'Win + X 打开什么？',
            },
            {
              en: 'Name two Settings categories useful every week.',
              zh: '说出两个每周常用的设置类别。',
            },
          ],
          noteEn:
            'Answers: Win + I; power-user / quick link menu; e.g. System and Network & internet.',
          noteZh:
            '参考答案：Win + I；高级用户/快捷链接菜单；例如系统与网络和 Internet。',
        },
      ],
    },
  ],
}
