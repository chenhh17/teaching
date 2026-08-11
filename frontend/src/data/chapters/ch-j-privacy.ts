import type { Chapter } from '../../types/course'

export const chJPrivacy: Chapter = {
  id: 'privacy-settings',
  titleEn: 'Privacy Settings',
  titleZh: '隐私设置',
  summaryEn:
    'Browser permissions, cookies and tracking choices, Windows privacy controls, and practical habits for shared PCs.',
  summaryZh:
    '浏览器权限、Cookie 与追踪选择、Windows 隐私控件，以及共用电脑上的实用习惯。',
  sections: [
    {
      id: 'browser-privacy',
      titleEn: 'Browser Privacy',
      titleZh: '浏览器隐私',
      slides: [
        {
          id: 'ch-j-privacy-title',
          layout: 'title',

          titleEn: 'Part J · Privacy Settings',
          titleZh: '篇章 J · 隐私设置',
          subtitleEn: 'Choose what apps and sites can learn about you',
          subtitleZh: '选择应用与网站能了解你什么',
          illustration: 'title',
          keywords: [
            { en: 'Privacy', zh: '隐私' },
            { en: 'Permission', zh: '权限' },
            { en: 'Cookie', zh: 'Cookie / 小甜饼' },
          ],
        },
        {
          id: 'ch-j-privacy-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Privacy is not paranoia; it is intentional sharing. You will find the controls in Edge, Chrome, and Windows Settings and decide what a classroom PC should remember.',
          bodyZh:
            '隐私不是偏执，而是有意识地分享。你将找到 Edge、Chrome 与 Windows 设置中的控件，并决定教室电脑应该记住什么。',
          illustration: 'security',
          bullets: [
            {
              en: 'Manage site permissions for camera, microphone, and location.',
              zh: '管理摄像头、麦克风与位置等网站权限。',
              keywords: [{ en: 'Permission', zh: '权限' }],
            },
            {
              en: 'Explain cookies and tracking choices in plain words.',
              zh: '用白话解释 Cookie 与追踪选择。',
            },
            {
              en: 'Adjust core Windows privacy toggles for a student PC.',
              zh: '为学生电脑调整核心 Windows 隐私开关。',
            },
          ],
        },
        {
          id: 'ch-j-privacy-permissions',
          layout: 'text',
          titleEn: 'Site Permissions',
          titleZh: '网站权限',
          bodyEn:
            'Browsers ask before a site uses camera, microphone, location, or notifications. Grant only what the task needs, and revoke leftovers afterward — especially on shared Windows lab machines.',
          bodyZh:
            '网站使用摄像头、麦克风、位置或通知前，浏览器会询问。只授予任务所需权限，用完后撤销多余项——尤其在共用 Windows 实验机上。',
          illustration: 'security',
          bullets: [
            {
              en: 'A coding class rarely needs continuous microphone access in the browser.',
              zh: '编程课很少需要浏览器持续使用麦克风。',
              keywords: [{ en: 'Permission', zh: '权限' }],
            },
            {
              en: 'Notifications spam is often optional; deny by default, allow per trusted site.',
              zh: '通知骚扰常可拒绝；默认拒绝，仅对可信站点允许。',
            },
            {
              en: 'In Edge/Chrome: site information icon near the address bar → permissions.',
              zh: '在 Edge/Chrome：地址栏附近的网站信息图标 → 权限。',
            },
          ],
        },
        {
          id: 'ch-j-privacy-cookies',
          layout: 'text',
          titleEn: 'Cookies and Tracking',
          titleZh: 'Cookie 与追踪',
          bodyEn:
            'First-party cookies help a site remember your session. Third-party cookies and similar trackers can follow you across sites for advertising. Edge and Chrome expose privacy levels and site-data clearing tools; stronger blocking may log you out more often.',
          bodyZh:
            '第一方 Cookie 帮助网站记住会话。第三方 Cookie 与类似追踪器可跨站跟随你做广告。Edge 与 Chrome 提供隐私级别与网站数据清除工具；更强拦截可能让你更常需要重新登录。',
          illustration: 'security',
          bullets: [
            {
              en: 'Clearing site data can fix stuck logins; you will sign in again.',
              zh: '清除网站数据可修复卡住的登录；你需要重新登录。',
              keywords: [{ en: 'Cookie', zh: 'Cookie / 小甜饼' }],
            },
            {
              en: 'Tracking prevention reduces cross-site ads; it is not full anonymity.',
              zh: '跟踪防护减少跨站广告；它不等于完全匿名。',
            },
            {
              en: 'On lab PCs, prefer not to keep personal browsing signed in overnight.',
              zh: '在实验电脑上，尽量不要让个人浏览整夜保持登录。',
            },
          ],
        },
      ],
    },
    {
      id: 'windows-privacy',
      titleEn: 'Windows Privacy',
      titleZh: 'Windows 隐私',
      slides: [
        {
          id: 'ch-j-privacy-windows',
          layout: 'text',
          titleEn: 'Windows Settings Tour',
          titleZh: 'Windows 设置导览',
          bodyEn:
            'Windows Settings → Privacy & security groups microphone, camera, diagnostics, and app permissions. Turn off sensors your coursework does not need. Review which desktop apps can use the camera even when the browser is closed.',
          bodyZh:
            'Windows 设置 → 隐私和安全性 汇总麦克风、摄像头、诊断与应用权限。关闭课程不需要的传感器。检查哪些桌面应用在浏览器关闭时仍可使用摄像头。',
          illustration: 'environment',
          bullets: [
            {
              en: 'Search “Privacy” from the Start menu to jump to the hub.',
              zh: '从开始菜单搜索“隐私”可跳到总览。',
              keywords: [{ en: 'Privacy', zh: '隐私' }],
            },
            {
              en: 'Microphone and camera lists show per-app access — audit them once a term.',
              zh: '麦克风与摄像头列表显示按应用访问——每学期审计一次。',
            },
            {
              en: 'Activity history and advertising ID options exist; choose what fits your comfort.',
              zh: '存在活动历史与广告 ID 选项；按你的舒适度选择。',
            },
          ],
        },
        {
          id: 'ch-j-privacy-shared',
          layout: 'text',
          titleEn: 'Shared PC Habits',
          titleZh: '共用电脑习惯',
          bodyEn:
            'Classroom machines are not personal vaults. Use InPrivate / Incognito when borrowing briefly, avoid saving passwords, sign out of webmail, and close the browser. Your projects belong in your own folder or cloud account, not in someone else’s profile Documents.',
          bodyZh:
            '教室机器不是私人保险库。短暂借用时用 InPrivate / 无痕，避免保存密码，退出网页邮箱并关闭浏览器。项目放在你自己的文件夹或云账户，而不是别人配置的“文档”里。',
          illustration: 'files',
          bullets: [
            {
              en: 'Ctrl + Shift + N (Chrome) or Ctrl + Shift + P (Edge) opens a private window.',
              zh: 'Ctrl + Shift + N（Chrome）或 Ctrl + Shift + P（Edge）打开专用窗口。',
            },
            {
              en: 'Do not sync your personal browser profile onto a public lab account.',
              zh: '不要把个人浏览器配置同步到公共实验账户。',
            },
            {
              en: 'Remove USB copies of secrets after class; encrypted cloud is safer than sticky notes.',
              zh: '课后拿走含机密的 U 盘副本；加密云盘比便利贴更安全。',
            },
          ],
        },
        {
          id: 'ch-j-privacy-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Walk the real menus once so privacy stops being an abstract word.',
          bodyZh: '把真实菜单走一遍，让隐私不再是抽象词。',
          illustration: 'environment',
          bullets: [
            {
              en: 'Open Start → Settings → Privacy & security',
              zh: '打开开始 → 设置 → 隐私和安全性',
            },
            {
              en: 'Review Camera and Microphone app lists; note anything unexpected',
              zh: '查看摄像头与麦克风应用列表；记下任何异常项',
            },
            {
              en: 'In Edge or Chrome, open Settings → Privacy and find cookies / tracking controls',
              zh: '在 Edge 或 Chrome 打开设置 → 隐私，找到 Cookie / 跟踪控件',
            },
            {
              en: 'Click the site info icon on a page and review granted permissions',
              zh: '在某个页面点击网站信息图标，查看已授予权限',
            },
          ],
        },
        {
          id: 'ch-j-privacy-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'security',
          bullets: [
            {
              en: 'Allowing every permission prompt “just to make the page work.”',
              zh: '为了“让页面能用”而允许每一个权限提示。',
            },
            {
              en: 'Leaving personal accounts signed in on a shared lab browser.',
              zh: '在共用实验浏览器上保持个人账户登录。',
            },
            {
              en: 'Thinking private windows make you invisible to the website itself.',
              zh: '以为专用窗口能对网站本身隐身。',
            },
          ],
        },
        {
          id: 'ch-j-privacy-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'security',
          bullets: [
            {
              en: 'Name two browser permissions a site might request.',
              zh: '说出网站可能请求的两种浏览器权限。',
            },
            {
              en: 'What is one difference between cookies helping login and cross-site tracking?',
              zh: '帮助登录的 Cookie 与跨站追踪有何不同？',
            },
            {
              en: 'Where in Windows do you review camera access for apps?',
              zh: '在 Windows 哪里查看应用的摄像头访问？',
            },
          ],
          noteEn:
            'Answers: e.g. camera/mic; first-party session vs following you across sites; Settings → Privacy & security → Camera.',
          noteZh:
            '参考答案：如摄像头/麦克风；第一方会话 vs 跨站跟随；设置 → 隐私和安全性 → 摄像头。',
        },
      ],
    },
  ],
}
