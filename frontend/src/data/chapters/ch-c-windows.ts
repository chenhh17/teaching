import type { Chapter } from '../../types/course'

export const chCWindows: Chapter = {
  id: 'windows-and-accounts',
  titleEn: 'Windows and Accounts',
  titleZh: 'Windows 与账户',
  summaryEn: 'Desktop, Start menu, users, admin rights, and Settings.',
  summaryZh: '桌面、开始菜单、用户、管理员权限与设置。',
  sections: [
    {
      id: 'everyday-windows',
      titleEn: 'Everyday Windows',
      titleZh: '日常 Windows',
      slides: [
        {
          id: 'ch-c-windows-title',
          layout: 'title',

          titleEn: 'Part C · Windows and Accounts',
          titleZh: '篇章 C · Windows 与账户',
          subtitleEn: 'Your daily home base on the PC',
          subtitleZh: '电脑上的日常主界面',
          keywords: [
            { en: 'Windows', zh: 'Windows 系统' },
            { en: 'Account', zh: '账户' },
            { en: 'Settings', zh: '设置' },
          ],
        },
        {
          id: 'ch-c-windows-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'This chapter builds safe daily habits: find tools quickly, know your account type, and leave the desk without risking open work.',
          bodyZh:
            '本章建立安全的日常习惯：快速找到工具、知道自己的账户类型，并在离开座位时保护未完成的工作。',
          bullets: [
            {
              en: 'Use Start, taskbar, and Settings with confidence.',
              zh: '自信地使用开始菜单、任务栏和设置。',
            },
            {
              en: 'Tell administrator apart from standard user.',
              zh: '分清管理员与标准用户。',
              keywords: [{ en: 'Administrator', zh: '管理员' }],
            },
            {
              en: 'Lock and sign out safely on shared or classroom PCs.',
              zh: '在共用或机房电脑上安全地锁定与注销。',
            },
          ],
        },
        {
          id: 'ch-c-windows-desktop',
          layout: 'text',

          titleEn: 'Desktop, Taskbar, Start',
          titleZh: '桌面、任务栏、开始',
          bodyEn:
            'The desktop shows icons and open windows. The taskbar keeps pinned and running apps. Start search finds apps, settings, and files without digging through menus.',
          bodyZh:
            '桌面显示图标与打开的窗口。任务栏放着固定与正在运行的应用。开始搜索可快速找到应用、设置和文件，不必层层翻菜单。',
          bullets: [
            {
              en: 'Press the Windows key to open Start quickly.',
              zh: '按 Windows 键可快速打开开始菜单。',
              keywords: [{ en: 'Start', zh: '开始' }],
            },
            {
              en: 'Pin tools you use every class to the taskbar.',
              zh: '把每节课都用的工具固定到任务栏。',
              keywords: [{ en: 'Taskbar', zh: '任务栏' }],
            },
            {
              en: 'Keep the desktop for shortcuts, not your only project storage.',
              zh: '桌面适合放快捷方式，不要当作唯一的项目存放处。',
              keywords: [{ en: 'Desktop', zh: '桌面' }],
            },
          ],
        },
        {
          id: 'ch-c-windows-settings',
          layout: 'text',

          titleEn: 'Settings App',
          titleZh: '设置应用',
          bodyEn:
            'Settings is the modern control center for Windows. Prefer it over random “optimizer” downloads when you need display, network, account, or update changes.',
          bodyZh:
            '设置是 Windows 的现代控制中心。需要改显示、网络、账户或更新时，优先用设置，而不是随便下载的“优化工具”。',
          bullets: [
            {
              en: 'Open Settings with Win + I.',
              zh: '用 Win + I 打开设置。',
              keywords: [{ en: 'Settings', zh: '设置' }],
            },
            {
              en: 'Common areas: System, Network & internet, Accounts, Windows Update.',
              zh: '常用区域：系统、网络和 Internet、账户、Windows 更新。',
            },
            {
              en: 'Search inside Settings when you forget the exact page name.',
              zh: '记不住页面名称时，直接在设置里搜索。',
            },
          ],
        },
      ],
    },
    {
      id: 'users-permissions',
      titleEn: 'Users and Permissions',
      titleZh: '用户与权限',
      slides: [
        {
          id: 'ch-c-windows-account',
          layout: 'text',

          titleEn: 'Local vs Microsoft Account',
          titleZh: '本地账户与微软账户',
          bodyEn:
            'A local account exists only on this PC. A Microsoft account can sync Store apps and OneDrive across devices. Either can work for learning; first know which one you use.',
          bodyZh:
            '本地账户只存在于这台电脑。微软账户可在多台设备间同步商店应用与 OneDrive。两种都能用来学习；先弄清自己用的是哪一种。',
          bullets: [
            {
              en: 'Local accounts are simple for a single lab machine.',
              zh: '单机机房环境用本地账户更简单。',
              keywords: [{ en: 'Local Account', zh: '本地账户' }],
            },
            {
              en: 'Microsoft accounts help when you move between home and campus.',
              zh: '在家与校园之间切换时，微软账户更方便。',
              keywords: [{ en: 'Microsoft Account', zh: '微软账户' }],
            },
            {
              en: 'Protect the password or PIN; classmates should not share sign-in.',
              zh: '保护密码或 PIN；同学之间不要共用登录。',
            },
          ],
        },
        {
          id: 'ch-c-windows-admin',
          layout: 'text',

          titleEn: 'Standard vs Administrator',
          titleZh: '标准用户与管理员',
          bodyEn:
            'Administrators can install software and change system settings. Standard users are safer for daily browsing and homework. Windows may show a UAC prompt before risky changes.',
          bodyZh:
            '管理员可以安装软件并更改系统设置。日常上网与作业时，标准用户更安全。做危险更改前，Windows 可能弹出 UAC 询问。',
          bullets: [
            {
              en: 'Use admin rights only when an install or system change truly needs them.',
              zh: '仅在安装或系统更改确实需要时，才使用管理员权限。',
              keywords: [{ en: 'Administrator', zh: '管理员' }],
            },
            {
              en: 'A standard account limits damage from a bad download.',
              zh: '标准账户可降低不良下载造成的损害。',
              keywords: [{ en: 'Standard User', zh: '标准用户' }],
            },
            {
              en: 'Only click Yes on UAC if you trust the app and started the action.',
              zh: '只有在你信任该应用且是自己发起操作时，才点 UAC 的“是”。',
              keywords: [{ en: 'UAC', zh: '用户账户控制' }],
            },
          ],
          noteEn: 'School labs may force standard accounts by policy.',
          noteZh: '机房可能按制度强制使用标准账户。',
        },
        {
          id: 'ch-c-windows-sign',
          layout: 'text',

          titleEn: 'Sign In, Lock, Sign Out',
          titleZh: '登录、锁定、注销',
          bodyEn:
            'Lock keeps your session and open apps safe while you leave the desk. Sign out closes apps and ends the session. Prefer Restart or Shut down over holding the power button.',
          bodyZh:
            '锁定可在你离开座位时保护会话与打开的应用。注销会关闭应用并结束本次登录。优先用重启或关机，尽量不要长按电源键硬关。',
          bullets: [
            {
              en: 'Lock with Win + L whenever you leave a shared PC.',
              zh: '离开共用电脑时用 Win + L 锁定。',
              keywords: [{ en: 'Lock', zh: '锁定' }],
            },
            {
              en: 'Sign out when another person should start a clean session.',
              zh: '需要别人开始全新会话时再注销。',
              keywords: [{ en: 'Sign Out', zh: '注销' }],
            },
            {
              en: 'Force power-off risks file damage during updates or saves.',
              zh: '强制断电可能在更新或保存时损坏文件。',
              keywords: [{ en: 'Restart', zh: '重启' }],
            },
          ],
        },
        {
          id: 'ch-c-windows-updates',
          layout: 'text',

          titleEn: 'Windows Update Habit',
          titleZh: 'Windows 更新习惯',
          bodyEn:
            'Updates fix bugs and close security holes. Check Settings → Windows Update regularly, then restart when Windows asks. A later chapter covers updates and UAC in more depth.',
          bodyZh:
            '更新用来修 bug 并堵住安全漏洞。定期打开 设置 → Windows 更新，并在系统提示时重启。后续章节会更深入讲更新与 UAC。',
          bullets: [
            {
              en: 'Security patches matter on campus Wi-Fi as much as at home.',
              zh: '在校园 Wi-Fi 与在家一样需要安全补丁。',
              keywords: [{ en: 'Windows Update', zh: 'Windows 更新' }],
            },
            {
              en: 'Save work before Restart now.',
              zh: '在“立即重启”前先保存作业。',
            },
            {
              en: 'Do not pause updates for months “so nothing changes.”',
              zh: '不要为了“什么都别变”而暂停更新数月。',
            },
          ],
        },
      ],
    },
    {
      id: 'safe-habits',
      titleEn: 'Safe Daily Habits',
      titleZh: '安全日常习惯',
      slides: [
        {
          id: 'ch-c-windows-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Confirm your account type and practice a safe lock before the next break.',
          bodyZh: '确认自己的账户类型，并在下次休息前练习安全锁定。',
          bullets: [
            {
              en: 'Press Win + I and open Accounts → Your info.',
              zh: '按 Win + I，打开 账户 → 你的信息。',
            },
            {
              en: 'Open Accounts → Access work or school / Family & other users if available, or check Settings search for “Administrator” to see your role.',
              zh: '如有需要可打开相关账户页，或在设置搜索“管理员”，确认自己的角色。',
            },
            {
              en: 'Lock the PC with Win + L, unlock again, then note that your apps were still open.',
              zh: '用 Win + L 锁定电脑，再解锁，确认应用仍保持打开。',
            },
          ],
          noteEn: 'Next: desktop layout, Start search, and key Settings pages.',
          noteZh: '下一章：桌面布局、开始搜索与关键设置页。',
        },
        {
          id: 'ch-c-windows-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Running every program as administrator “just in case.”',
              zh: '“以防万一”就把每个程序都用管理员运行。',
            },
            {
              en: 'Clicking Yes on every permission popup without reading.',
              zh: '不看内容就点每个权限弹窗的“是”。',
            },
            {
              en: 'Force power-off instead of Restart or Shut down.',
              zh: '不用重启/关机，直接强制断电。',
            },
          ],
        },
        {
          id: 'ch-c-windows-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What is the difference between Lock and Sign out?',
              zh: '锁定和注销有什么区别？',
            },
            {
              en: 'When should the “allow this app?” popup appear?',
              zh: '“是否允许此应用？”弹窗通常何时出现？',
            },
            {
              en: 'Where do you check for Windows updates?',
              zh: '在哪里检查 Windows 更新？',
            },
          ],
          noteEn:
            'Answers: Lock keeps apps; Sign out closes them. Popup before risky changes. Settings → Windows Update.',
          noteZh:
            '参考答案：锁定保留应用，注销会关闭；危险更改前弹窗；设置 → Windows 更新。',
        },
      ],
    },
  ],
}
