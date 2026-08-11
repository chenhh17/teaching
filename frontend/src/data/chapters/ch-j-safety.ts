import type { Chapter } from '../../types/course'

export const chJSafety: Chapter = {
  id: 'internet-safety',
  titleEn: 'Internet Safety',
  titleZh: '网络安全入门',
  summaryEn:
    'Map beginner risks: passwords, MFA, phishing, public Wi-Fi, HTTPS limits, and safe downloads on Windows.',
  summaryZh:
    '梳理初学者风险：密码、多重验证、钓鱼、公共 Wi-Fi、HTTPS 边界，以及 Windows 上的安全下载。',
  sections: [
    {
      id: 'threats',
      titleEn: 'Threats Beginners Meet',
      titleZh: '初学者常见风险',
      slides: [
        {
          id: 'ch-j-safety-title',
          layout: 'title',

          titleEn: 'Part J · Internet Safety',
          titleZh: '篇章 J · 网络安全入门',
          subtitleEn: 'Stay safe while you learn',
          subtitleZh: '边学边保护自己',
          illustration: 'title',
          keywords: [
            { en: 'Security', zh: '安全' },
            { en: 'Password', zh: '密码' },
            { en: 'Phishing', zh: '钓鱼' },
          ],
        },
        {
          id: 'ch-j-safety-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'This chapter is a map. Later chapters deepen passwords, phishing, privacy, and hygiene. Here you learn which risks matter first and which habits block most beginner disasters.',
          bodyZh:
            '本章是一张地图。后续章节会深入密码、钓鱼、隐私与系统卫生。这里先弄清哪些风险最要紧，哪些习惯能挡住大多数初学者灾难。',
          illustration: 'security',
          bullets: [
            {
              en: 'Build a strong password habit and turn on 2FA when offered.',
              zh: '养成强密码习惯，并在提供时开启双重验证。',
              keywords: [{ en: '2FA', zh: '双重验证' }],
            },
            {
              en: 'Spot common phishing urgency tricks before you click.',
              zh: '在点击前识别常见钓鱼紧迫套路。',
              keywords: [{ en: 'Phishing', zh: '钓鱼' }],
            },
            {
              en: 'Stay careful on public Wi-Fi and with installer downloads.',
              zh: '在公共 Wi-Fi 与安装包下载时保持谨慎。',
            },
          ],
        },
        {
          id: 'ch-j-safety-password',
          layout: 'text',
          titleEn: 'Passwords That Work',
          titleZh: '有效的密码',
          bodyEn:
            'Attackers rarely “guess genius complexity”; they reuse leaks and try common patterns. Longer unique secrets beat short clever ones. A passphrase you can remember, or a password manager that stores unique values, is the practical Windows student approach.',
          bodyZh:
            '攻击者很少“猜出天才复杂度”；他们复用泄露库并尝试常见模式。又长又独特的秘密胜过短而花哨的密码。记得住的口令短语，或能保存独特密码的管理器，才是 Windows 学生的实用做法。',
          illustration: 'security',
          bullets: [
            {
              en: 'Prefer length: a short memorable sentence often beats Ab1!',
              zh: '优先长度：一句好记的短句往往胜过 Ab1!',
              keywords: [
                { en: 'Password', zh: '密码' },
                { en: 'Passphrase', zh: '口令短语' },
              ],
            },
            {
              en: 'Never reuse email, school, or bank passwords elsewhere.',
              zh: '邮件、学校或银行密码绝不在别处复用。',
            },
            {
              en: 'A password manager can generate and store unique secrets for you.',
              zh: '密码管理器可帮你生成并保存独特密码。',
              keywords: [{ en: 'Password Manager', zh: '密码管理器' }],
            },
          ],
          noteEn: 'Never share SMS or email verification codes with anyone who asks.',
          noteZh: '不要把短信或邮件验证码告诉任何索要的人。',
        },
        {
          id: 'ch-j-safety-2fa',
          layout: 'text',

          titleEn: 'Two-Factor Authentication',
          titleZh: '双重验证',
          bodyEn:
            '2FA (a common form of MFA) asks for a second proof after the password: an authenticator code, SMS, or hardware key. A stolen password alone becomes much less useful. Turn it on for email first — email resets unlock many other accounts.',
          bodyZh:
            '2FA（多重验证的常见形式）在密码之后再要求第二种证明：验证器代码、短信或硬件密钥。单靠被偷的密码就难得多。先给邮箱开启——邮件重置往往能解开许多其他账户。',
          illustration: 'security',
          bullets: [
            {
              en: 'Something you know + something you have (or are) is the core idea.',
              zh: '你知道的 + 你拥有的（或你自身的）是核心思路。',
              keywords: [
                { en: '2FA', zh: '双重验证' },
                { en: 'MFA', zh: '多重验证' },
              ],
            },
            {
              en: 'Authenticator apps are usually stronger than SMS when both are offered.',
              zh: '两者都提供时，验证器应用通常比短信更稳妥。',
            },
            {
              en: 'Enable 2FA for school portals and Git hosting when available.',
              zh: '学校门户与 Git 托管能开就开 2FA。',
            },
          ],
        },
      ],
    },
    {
      id: 'browser-downloads',
      titleEn: 'Browser, Wi-Fi, and Downloads',
      titleZh: '浏览器、Wi-Fi 与下载',
      slides: [
        {
          id: 'ch-j-safety-phishing',
          layout: 'text',

          titleEn: 'Phishing in One Slide',
          titleZh: '一页看懂钓鱼',
          bodyEn:
            'Phishing is social engineering: fake email, SMS, or chat that steals logins or money by exploiting urgency and trust. The technical trick is often a look-alike URL; the psychological trick is “act now.” Later chapters go deeper — here, learn to pause.',
          bodyZh:
            '钓鱼是社会工程：假邮件、短信或聊天利用紧迫感与信任骗取登录或金钱。技术套路常是仿冒网址；心理套路是“立刻处理”。后续章节会深入——这里先学会停一下。',
          illustration: 'network',
          bullets: [
            {
              en: 'Check the sender and the real host in the address bar after any click.',
              zh: '任何点击后，核对发件人与地址栏中的真实主机名。',
              keywords: [
                { en: 'Phishing', zh: '钓鱼' },
                { en: 'URL', zh: '网址' },
              ],
            },
            {
              en: '“Your account closes today” without a prior context is often a trap.',
              zh: '没有先前上下文却说“账户今天关闭”，常常是陷阱。',
            },
            {
              en: 'Type known portal addresses yourself instead of trusting email links.',
              zh: '自己输入已知门户地址，不要盲目信任邮件链接。',
            },
          ],
        },
        {
          id: 'ch-j-safety-public-wifi',
          layout: 'text',
          titleEn: 'Public Wi-Fi Caution',
          titleZh: '公共 Wi-Fi 注意',
          bodyEn:
            'Cafe and airport networks can be monitored or spoofed. Avoid banking and password changes on open Wi-Fi. Prefer mobile data or a trusted VPN when you must authenticate.',
          bodyZh:
            '咖啡馆与机场网络可能被监听或伪造。避免在开放 Wi-Fi 上做网银或改密码。必须登录时，优先手机流量或可信 VPN。',
          illustration: 'security',
          bullets: [
            {
              en: 'Open Wi-Fi is convenient; treat it as a shared hallway, not a private room.',
              zh: '开放 Wi-Fi 很方便；把它当成共享走廊，而不是私人房间。',
              keywords: [{ en: 'Public Wi-Fi', zh: '公共 Wi-Fi' }],
            },
            {
              en: 'HTTPS helps on hostile networks, but phishing pages can still use HTTPS.',
              zh: 'HTTPS 在敌意网络上有帮助，但钓鱼页仍可能使用 HTTPS。',
            },
            {
              en: 'When unsure, wait until you are on a trusted network.',
              zh: '不确定时，等到可信网络再操作。',
              keywords: [{ en: 'VPN', zh: '虚拟专用网络' }],
            },
          ],
        },
        {
          id: 'ch-j-safety-download',
          layout: 'text',
          titleEn: 'Safe Downloads',
          titleZh: '安全下载',
          bodyEn:
            'Malware often arrives as “helpful” installers. Prefer official sites and Microsoft Store. Get Python and Cursor only from their official pages. Unknown .exe files from chat ads are not classroom shortcuts.',
          bodyZh:
            '恶意软件常伪装成“好用”的安装程序。优先官网与微软商店。只从官方页面获取 Python 与 Cursor。聊天广告里来路不明的 .exe 不是课堂捷径。',
          illustration: 'files',
          bullets: [
            {
              en: 'Official site or Microsoft Store first; random mirror last.',
              zh: '官网或微软商店优先；随机镜像最后。',
              keywords: [
                { en: 'Download', zh: '下载' },
                { en: 'Microsoft Store', zh: '微软商店' },
              ],
            },
            {
              en: 'Avoid “free crack” tools — they often are the malware.',
              zh: '避开“破解免费版”——它们常常就是恶意软件。',
              keywords: [{ en: 'Malware', zh: '恶意软件' }],
            },
            {
              en: 'Scan odd files with Windows Security before you open them.',
              zh: '打开可疑文件前先用 Windows 安全中心扫描。',
            },
          ],
        },
        {
          id: 'ch-j-safety-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Confirm your PC’s basic defenses and rehearse reading trust signals in the browser.',
          bodyZh: '确认电脑的基础防护，并练习阅读浏览器中的信任信号。',
          illustration: 'environment',
          bullets: [
            {
              en: 'Open Start → Windows Security and check that protection areas show OK',
              zh: '打开开始 → Windows 安全中心，确认各防护区域显示正常',
              keywords: [{ en: 'Windows Security', zh: 'Windows 安全中心' }],
            },
            {
              en: 'In Edge or Chrome, open a trusted site and find the lock icon',
              zh: '在 Edge 或 Chrome 中打开可信站点，找到锁标志',
            },
            {
              en: 'Open one important account’s security page and see if 2FA is offered',
              zh: '打开一个重要账户的安全页，查看是否提供 2FA',
            },
            {
              en: 'Note one download source you will use only from official pages',
              zh: '记下一种你只从官网获取的下载来源',
            },
          ],
        },
        {
          id: 'ch-j-safety-errors',
          layout: 'callout',
          titleEn: 'Red Flags',
          titleZh: '危险信号',
          illustration: 'security',
          bullets: [
            {
              en: 'Urgent messages that push you to click or pay now.',
              zh: '催你立刻点击或付款的紧迫消息。',
            },
            {
              en: 'Unknown .exe from email, chat, or random ads.',
              zh: '来自邮件、聊天或随机广告的不明 .exe。',
            },
            {
              en: 'Login pages opened from suspicious links without checking the host.',
              zh: '未核主机名就从可疑链接打开登录页。',
            },
            {
              en: 'Someone asking for your 2FA code “to help you.”',
              zh: '有人“为了帮你”索要 2FA 验证码。',
            },
          ],
        },
        {
          id: 'ch-j-safety-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'security',
          bullets: [
            {
              en: 'Why use unique passwords on important accounts?',
              zh: '重要账户为什么要用不同密码？',
            },
            {
              en: 'What is phishing in one sentence?',
              zh: '用一句话解释什么是钓鱼？',
            },
            {
              en: 'Name one safer habit on public Wi-Fi.',
              zh: '说出公共 Wi-Fi 上的一个更安全习惯。',
            },
          ],
          noteEn:
            'Answers: one leak should not open all accounts; fake messages steal logins or money; avoid banking or use VPN/mobile data.',
          noteZh:
            '参考答案：一处泄露不牵连全部；假消息骗登录或钱；避免网银或改用 VPN/手机流量。',
        },
      ],
    },
  ],
}
