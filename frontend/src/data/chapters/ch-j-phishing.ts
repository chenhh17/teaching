import type { Chapter } from '../../types/course'

export const chJPhishing: Chapter = {
  id: 'phishing-and-scams',
  titleEn: 'Phishing and Scams',
  titleZh: '钓鱼与诈骗',
  summaryEn:
    'Phishing psychology, spoofed URLs, urgent messages, inbox habits in Edge/Chrome, and what to do after a mistake.',
  summaryZh:
    '钓鱼心理学、伪造网址、紧迫消息、Edge/Chrome 收件习惯，以及点错之后怎么办。',
  sections: [
    {
      id: 'recognize',
      titleEn: 'Recognize Tricks',
      titleZh: '识别套路',
      slides: [
        {
          id: 'ch-j-phishing-title',
          layout: 'title',

          titleEn: 'Part J · Phishing and Scams',
          titleZh: '篇章 J · 钓鱼与诈骗',
          subtitleEn: 'Pause before you click or reply',
          subtitleZh: '点击或回复前先停一下',
          illustration: 'title',
          keywords: [
            { en: 'Phishing', zh: '钓鱼' },
            { en: 'Scam', zh: '诈骗' },
            { en: 'Spoofing', zh: '伪造' },
          ],
        },
        {
          id: 'ch-j-phishing-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Phishing succeeds when emotion outruns verification. You will slow down, inspect hosts, and know the first steps if you already clicked.',
          bodyZh:
            '钓鱼在情绪跑赢核实之时得逞。你将学会放慢、检查主机名，并知道若已点击该先做什么。',
          illustration: 'security',
          bullets: [
            {
              en: 'Explain phishing as stolen trust plus a fake destination.',
              zh: '把钓鱼解释为被盗用的信任加上虚假目的地。',
              keywords: [{ en: 'Phishing', zh: '钓鱼' }],
            },
            {
              en: 'Detect spoofed URLs and urgency language in messages.',
              zh: '识别消息中的伪造网址与紧迫措辞。',
            },
            {
              en: 'List safe actions after a mistaken click or reply.',
              zh: '列出点错或回错之后的安全动作。',
            },
          ],
        },
        {
          id: 'ch-j-phishing-psych',
          layout: 'text',

          titleEn: 'Psychology of the Trap',
          titleZh: '陷阱的心理学',
          bodyEn:
            'Attackers borrow authority (school, bank, delivery, IT help) and compress time (“now or lose access”). Fear, greed, and helpfulness all work. The goal is to make you authenticate or pay before you inspect the host name.',
          bodyZh:
            '攻击者借用权威（学校、银行、快递、IT 帮助）并压缩时间（“现在不处理就失去访问”）。恐惧、贪婪与乐于助人都可能被利用。目标是让你在检查主机名之前就登录或付款。',
          illustration: 'security',
          bullets: [
            {
              en: 'Urgency is a feature of the scam, not proof the message is real.',
              zh: '紧迫是诈骗的设计，不是消息真实的证据。',
              keywords: [{ en: 'Scam', zh: '诈骗' }],
            },
            {
              en: 'Unexpected money, prizes, or “your package is held” deserve a pause.',
              zh: '意外的金钱、奖品或“包裹被扣”都值得停一下。',
            },
            {
              en: 'IT will not ask you to read MFA codes aloud to “verify you.”',
              zh: 'IT 不会让你朗读 MFA 验证码来“验证你本人”。',
            },
          ],
        },
        {
          id: 'ch-j-phishing-url',
          layout: 'text',

          titleEn: 'Spoofed URLs',
          titleZh: '伪造网址',
          bodyEn:
            'Link text can say university.edu while the real href goes elsewhere. After any navigation, read the host in the Edge or Chrome address bar. Look-alike domains use extra words, odd spellings, or different endings.',
          bodyZh:
            '链接文字可以写 university.edu，而真实 href 指向别处。任何跳转后，阅读 Edge 或 Chrome 地址栏中的主机名。仿冒域名会加多余词、奇怪拼写或不同后缀。',
          illustration: 'network',
          bullets: [
            {
              en: 'Hover a link to preview the target; still verify the bar after clicking.',
              zh: '悬停链接可预览目标；点击后仍要核地址栏。',
              keywords: [
                { en: 'Spoofing', zh: '伪造' },
                { en: 'Host', zh: '主机名' },
              ],
            },
            {
              en: 'paypa1.com is not paypal.com; rnicrosoft.com is not microsoft.com.',
              zh: 'paypa1.com 不是 paypal.com；rnicrosoft.com 不是 microsoft.com。',
            },
            {
              en: 'HTTPS lock can appear on phishing sites — the host still matters more.',
              zh: '钓鱼站也可以有 HTTPS 锁——主机名仍然更重要。',
            },
          ],
        },
      ],
    },
    {
      id: 'respond',
      titleEn: 'Respond Safely',
      titleZh: '安全应对',
      slides: [
        {
          id: 'ch-j-phishing-inbox',
          layout: 'text',

          titleEn: 'Inbox Habits',
          titleZh: '收件习惯',
          bodyEn:
            'Treat unexpected login links as hostile until proven otherwise. Open school or bank sites from bookmarks or typed addresses. Report phishing with your provider’s tools when available, then delete the message.',
          bodyZh:
            '把意外的登录链接先当成敌意，直到证明相反。用书签或手输地址打开学校或银行站点。可用时用服务商工具举报钓鱼，然后删除消息。',
          illustration: 'security',
          bullets: [
            {
              en: 'Do not enter passwords from a link you did not expect.',
              zh: '不要从未预期的链接进入密码页。',
            },
            {
              en: 'Attachments named invoice.exe or unexpected .html files are high risk.',
              zh: '名为 invoice.exe 或意外的 .html 附件风险很高。',
            },
            {
              en: 'When a classmate forwards a “urgent IT” mail, verify through another channel.',
              zh: '同学转发“紧急 IT”邮件时，用另一渠道核实。',
            },
          ],
        },
        {
          id: 'ch-j-phishing-after',
          layout: 'text',

          titleEn: 'If You Already Clicked',
          titleZh: '如果已经点了',
          bodyEn:
            'Speed matters more than shame. Disconnect if malware is suspected, change passwords from a safe device, revoke sessions, and tell your instructor or IT. Enable MFA if it was off. Monitor bank and school accounts for odd activity.',
          bodyZh:
            '速度比羞耻更重要。若怀疑恶意软件先断网，在安全设备上改密码、撤销会话，并告知老师或 IT。若未开 MFA 则开启。监控银行与学校账户是否有异常。',
          illustration: 'security',
          bullets: [
            {
              en: 'Change the password for the targeted account and for email if shared patterns exist.',
              zh: '修改目标账户密码；若有复用习惯，也改邮箱密码。',
            },
            {
              en: 'Sign out other sessions / revoke app passwords when the service allows.',
              zh: '在服务允许时退出其他会话 / 撤销应用密码。',
            },
            {
              en: 'Do not hide the incident — early report limits damage.',
              zh: '不要隐瞒事件——早报告能限制损失。',
            },
          ],
        },
        {
          id: 'ch-j-phishing-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Practice inspection without clicking real phishing bait. Use a trusted inbox and a known-good site.',
          bodyZh: '在不点击真实钓鱼诱饵的前提下练习检查。使用可信收件箱与已知可靠站点。',
          illustration: 'security',
          bullets: [
            {
              en: 'Open your school or personal webmail in Edge or Chrome',
              zh: '在 Edge 或 Chrome 中打开学校或个人网页邮箱',
            },
            {
              en: 'Pick one routine message; hover links and read the real URL preview',
              zh: '选一封日常邮件；悬停链接并阅读真实网址预览',
            },
            {
              en: 'Open your school portal from a bookmark or typed address, not from an old mail link',
              zh: '用书签或手输地址打开学校门户，不要用旧邮件链接',
            },
            {
              en: 'Confirm the address bar host matches the organization you expect',
              zh: '确认地址栏主机名与你期望的机构一致',
            },
          ],
        },
        {
          id: 'ch-j-phishing-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'security',
          bullets: [
            {
              en: 'Trusting logo and layout more than the address bar host.',
              zh: '相信标志与版式胜过相信地址栏主机名。',
            },
            {
              en: 'Assuming HTTPS means the message and site are legitimate.',
              zh: '以为有 HTTPS 就表示邮件与网站合法。',
            },
            {
              en: 'Sharing a verification code with someone who called or messaged first.',
              zh: '把验证码告诉主动来电或发消息的人。',
            },
          ],
        },
        {
          id: 'ch-j-phishing-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'security',
          bullets: [
            {
              en: 'Name one psychological pressure phishing messages use.',
              zh: '说出钓鱼消息常用的一种心理压力。',
            },
            {
              en: 'Where do you verify the real destination after clicking a link?',
              zh: '点击链接后，你在哪里核实真实目的地？',
            },
            {
              en: 'What is one first step if you typed a password on a fake page?',
              zh: '若在假页面输入了密码，第一步做什么？',
            },
          ],
          noteEn:
            'Answers: urgency/fear/authority; the browser address bar host; change the password from a safe device and report.',
          noteZh:
            '参考答案：紧迫/恐惧/权威；浏览器地址栏主机名；在安全设备上改密码并报告。',
        },
      ],
    },
  ],
}
