import type { Chapter } from '../../types/course'

export const chCUpdates: Chapter = {
  id: 'updates-and-uac',
  titleEn: 'Updates and UAC',
  titleZh: '更新与 UAC',
  summaryEn: 'Windows Update habits, why restarts matter, and how UAC protects admin changes.',
  summaryZh: 'Windows 更新习惯、为何要重启，以及 UAC 如何保护管理员更改。',
  sections: [
    {
      id: 'stay-updated',
      titleEn: 'Stay Updated',
      titleZh: '保持更新',
      slides: [
        {
          id: 'ch-c-updates-title',
          layout: 'title',

          titleEn: 'Part C · Updates and UAC',
          titleZh: '篇章 C · 更新与 UAC',
          subtitleEn: 'Security patches and permission prompts on Windows',
          subtitleZh: 'Windows 上的安全补丁与权限提示',
          keywords: [
            { en: 'Windows Update', zh: 'Windows 更新' },
            { en: 'UAC', zh: '用户账户控制' },
            { en: 'Administrator', zh: '管理员' },
          ],
        },
        {
          id: 'ch-c-updates-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Updates and UAC prompts are protection, not annoyance. Learn when to install, when to restart, and when to refuse a permission request.',
          bodyZh:
            '更新与 UAC 提示是保护，不是打扰。学会何时安装、何时重启，以及何时拒绝权限请求。',
          bullets: [
            {
              en: 'Open Windows Update and read update status.',
              zh: '打开 Windows 更新并看懂状态。',
              keywords: [{ en: 'Windows Update', zh: 'Windows 更新' }],
            },
            {
              en: 'Explain why some updates need a restart.',
              zh: '解释为何有些更新需要重启。',
            },
            {
              en: 'Recognize UAC prompts and when to Allow or No.',
              zh: '认识 UAC 提示，知道何时允许或否。',
              keywords: [{ en: 'UAC', zh: '用户账户控制' }],
            },
          ],
        },
        {
          id: 'ch-c-updates-why',
          layout: 'text',

          titleEn: 'Why Updates Matter',
          titleZh: '为什么更新重要',
          bodyEn:
            'Updates fix security holes and serious bugs. Driver and quality updates can improve stability. Skipping updates for months raises risk on campus Wi-Fi and home networks alike.',
          bodyZh:
            '更新修复安全漏洞与严重错误。驱动与质量更新可提升稳定性。数月不更新会在校园 Wi-Fi 与家庭网络上提高风险。',
          bullets: [
            {
              en: 'Security patches close known attack paths.',
              zh: '安全补丁堵住已知攻击路径。',
              keywords: [{ en: 'Security Patch', zh: '安全补丁' }],
            },
            {
              en: 'Stability fixes reduce random freezes after installs.',
              zh: '稳定性修复可减少安装后的随机卡顿。',
            },
            {
              en: 'Shared lab machines need updates as much as personal laptops.',
              zh: '共用机房电脑与个人笔记本一样需要更新。',
            },
          ],
        },
        {
          id: 'ch-c-updates-where',
          layout: 'text',

          titleEn: 'Where to Check Updates',
          titleZh: '在哪里检查更新',
          bodyEn:
            'Open Settings with Win + I, then choose Windows Update. Check for updates, read whether a restart is pending, and pause only for a short planned reason.',
          bodyZh:
            '用 Win + I 打开设置，再选择 Windows 更新。检查更新，看是否有待重启，并仅在有计划的短时间内暂停。',
          bullets: [
            {
              en: 'Older UI text may say Update & Security.',
              zh: '旧界面可能显示“更新和安全”。',
            },
            {
              en: 'Read the status line: up to date, downloading, or restart needed.',
              zh: '阅读状态行：已是最新、正在下载，或需要重启。',
            },
            {
              en: 'Pause updates only before a demo or exam window, then resume.',
              zh: '仅在演示或考试前短暂暂停，结束后恢复。',
              keywords: [{ en: 'Pause Updates', zh: '暂停更新' }],
            },
          ],
        },
      ],
    },
    {
      id: 'uac-and-permissions',
      titleEn: 'UAC and Permissions',
      titleZh: 'UAC 与权限',
      slides: [
        {
          id: 'ch-c-updates-restart',
          layout: 'text',

          titleEn: 'Restarts Are Part of the Job',
          titleZh: '重启是工作的一部分',
          bodyEn:
            'Some files update only when Windows is not using them. Restarts finish that work. Save documents before Restart now, and use active hours to reduce surprise restarts during class.',
          bodyZh:
            '有些文件只有 Windows 不用时才能更新。重启用来完成这些工作。在“立即重启”前先保存文档，并用活动时间减少上课时突然重启。',
          bullets: [
            {
              en: 'A pending restart means the patch is not fully applied yet.',
              zh: '待重启表示补丁尚未完全生效。',
            },
            {
              en: 'Active hours tell Windows when you usually work.',
              zh: '活动时间告诉 Windows 你通常何时工作。',
              keywords: [{ en: 'Active Hours', zh: '活动时间' }],
            },
            {
              en: 'Never force shut down during “Configuring updates.”',
              zh: '绝不要在“正在配置更新”时强制关机。',
            },
          ],
        },
        {
          id: 'ch-c-updates-uac',
          layout: 'text',

          titleEn: 'What UAC Is Protecting',
          titleZh: 'UAC 在保护什么',
          bodyEn:
            'UAC asks before apps make system-level changes. A dimmed desktop shield prompt means admin permission is needed. Standard users may need an administrator password.',
          bodyZh:
            '应用要做系统级更改时，UAC 会询问。桌面变暗的盾牌提示表示需要管理员权限。标准用户可能需要输入管理员密码。',
          bullets: [
            {
              en: 'UAC is a last confirmation, not an automatic Yes.',
              zh: 'UAC 是最后确认，不是自动的“是”。',
              keywords: [{ en: 'UAC', zh: '用户账户控制' }],
            },
            {
              en: 'Installers, driver tools, and some Settings changes trigger it.',
              zh: '安装程序、驱动工具与部分设置更改会触发它。',
            },
            {
              en: 'School PCs may require a lab admin for Allow.',
              zh: '机房电脑可能需要实验管理员才能允许。',
              keywords: [{ en: 'Administrator', zh: '管理员' }],
            },
          ],
        },
        {
          id: 'ch-c-updates-good',
          layout: 'text',

          titleEn: 'Good Permission Habits',
          titleZh: '良好的权限习惯',
          bodyEn:
            'Allow only installers you downloaded on purpose. Prefer a standard account for daily browsing and homework. On school PCs, follow lab policy and never disable UAC.',
          bodyZh:
            '只允许你有意下载的安装程序。日常浏览与作业尽量用标准账户。机房电脑遵守规定，不要关闭 UAC。',
          bullets: [
            {
              en: 'If you did not start the action, choose No.',
              zh: '若不是你发起的操作，选择“否”。',
            },
            {
              en: 'Unexpected UAC during web browsing is a warning sign.',
              zh: '浏览网页时突然出现 UAC 是危险信号。',
            },
            {
              en: 'Do not download “UAC killer” tools from the internet.',
              zh: '不要从网上下载所谓“关闭 UAC”工具。',
            },
          ],
        },
        {
          id: 'ch-c-updates-installers',
          layout: 'text',

          titleEn: 'Updates vs Random Installers',
          titleZh: '系统更新与随意安装',
          bodyEn:
            'Windows Update is Microsoft’s patch channel. Random “driver booster” or “PC cleaner” installers are different and often riskier. Keep those categories separate in your mind.',
          bodyZh:
            'Windows 更新是微软的补丁通道。随意的“驱动加速”或“电脑清理”安装程序不同，且往往风险更高。请在脑中把这两类分开。',
          bullets: [
            {
              en: 'Prefer Windows Update and vendor sites for drivers.',
              zh: '驱动优先用 Windows 更新与厂商官网。',
            },
            {
              en: 'A shiny cleaner that demands admin rights deserves suspicion.',
              zh: '华丽清理软件若强要管理员权限，应保持怀疑。',
            },
            {
              en: 'Course installs should come from teacher-approved links.',
              zh: '课程安装应来自教师认可的链接。',
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
          id: 'ch-c-updates-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Read your update status and locate active hours without changing risky options.',
          bodyZh: '查看更新状态并找到活动时间，不要改动高风险选项。',
          bullets: [
            {
              en: 'Win + I → Windows Update: read last checked time and status.',
              zh: 'Win + I → Windows 更新：查看上次检查时间与状态。',
            },
            {
              en: 'Open Advanced options and find Active hours.',
              zh: '打开高级选项，找到活动时间。',
            },
            {
              en: 'Remember: never Allow a UAC prompt you did not start yourself.',
              zh: '记住：绝不要允许你自己没有发起的 UAC 提示。',
            },
          ],
          noteEn: 'Do not Allow unknown installers during this practice.',
          noteZh: '练习时不要允许不明安装程序。',
        },
        {
          id: 'ch-c-updates-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Clicking Yes or Allow on every prompt to make it go away.',
              zh: '为了赶快关掉而点每个提示的“是/允许”。',
            },
            {
              en: 'Force shutting down during “Configuring updates.”',
              zh: '在“正在配置更新”时强制关机。',
            },
            {
              en: 'Pausing updates for months “so nothing changes.”',
              zh: '为了“什么都别变”而暂停更新数月。',
            },
          ],
        },
        {
          id: 'ch-c-updates-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'Where do you check Windows Update?',
              zh: '在哪里检查 Windows 更新？',
            },
            {
              en: 'What should you do before a restart for updates?',
              zh: '为更新重启前应做什么？',
            },
            {
              en: 'When should you choose No on a UAC prompt?',
              zh: '什么时候应对 UAC 选择“否”？',
            },
          ],
          noteEn:
            'Answers: Settings → Windows Update; save work; when you did not start the action or do not trust the app.',
          noteZh:
            '参考答案：设置 → Windows 更新；保存工作；若不是你发起或不信任该应用。',
        },
      ],
    },
  ],
}
