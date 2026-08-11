import type { Chapter } from '../../types/course'

export const chIHttps: Chapter = {
  id: 'https-and-trust',
  titleEn: 'HTTPS and Trust',
  titleZh: 'HTTPS 与信任',
  summaryEn:
    'HTTP versus HTTPS, encryption and certificates, what the lock icon proves, and how to treat browser warnings.',
  summaryZh:
    'HTTP 与 HTTPS、加密与证书、锁标志能证明什么，以及如何对待浏览器警告。',
  sections: [
    {
      id: 'secure-transport',
      titleEn: 'Secure Transport',
      titleZh: '安全传输',
      slides: [
        {
          id: 'ch-i-https-title',
          layout: 'title',

          titleEn: 'Part I · HTTPS and Trust',
          titleZh: '篇章 I · HTTPS 与信任',
          subtitleEn: 'Protect the journey; still judge the destination',
          subtitleZh: '保护传输路径，仍要判断目的地',
          illustration: 'title',
          keywords: [
            { en: 'HTTPS', zh: '加密网页协议' },
            { en: 'Encryption', zh: '加密' },
            { en: 'Certificate', zh: '证书' },
          ],
        },
        {
          id: 'ch-i-https-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Separate two questions: Is the pipe encrypted? Is the website itself honest? HTTPS answers the first; you still answer the second.',
          bodyZh:
            '分开两个问题：管道加密了吗？网站本身诚实吗？HTTPS 回答第一个；第二个仍要你自己判断。',
          illustration: 'security',
          bullets: [
            {
              en: 'Contrast HTTP and HTTPS in plain words.',
              zh: '用白话对比 HTTP 与 HTTPS。',
              keywords: [
                { en: 'HTTP', zh: '超文本传输协议' },
                { en: 'HTTPS', zh: '加密网页协议' },
              ],
            },
            {
              en: 'Explain what the lock icon proves and what it does not.',
              zh: '说明锁标志能证明什么、不能证明什么。',
            },
            {
              en: 'Respond carefully to certificate warnings in Edge or Chrome.',
              zh: '在 Edge 或 Chrome 中谨慎应对证书警告。',
            },
          ],
        },
        {
          id: 'ch-i-https-vs',
          layout: 'text',

          titleEn: 'HTTP vs HTTPS',
          titleZh: 'HTTP 与 HTTPS',
          bodyEn:
            'Plain HTTP sends request and response bytes in a form that is easier for a network observer to read. HTTPS wraps that same HTTP conversation in encryption and identity checks so transit is much harder to spy on or silently alter. Prefer https:// for logins, email, and school portals.',
          bodyZh:
            '普通 HTTP 以更容易被网络旁观者读懂的形式发送请求与响应字节。HTTPS 把同样的 HTTP 对话包在加密与身份校验里，使途中窃听或悄悄篡改变难。登录、邮件与学校门户优先使用 https://。',
          illustration: 'protocol',
          bullets: [
            {
              en: 'HTTP: readable in transit on hostile networks more easily.',
              zh: 'HTTP：在不安全网络上更容易被途中读到。',
              keywords: [{ en: 'HTTP', zh: '超文本传输协议' }],
            },
            {
              en: 'HTTPS: encrypted channel plus certificate-based site name checks.',
              zh: 'HTTPS：加密通道，外加基于证书的站点名校验。',
              keywords: [
                { en: 'HTTPS', zh: '加密网页协议' },
                { en: 'Encryption', zh: '加密' },
              ],
            },
            {
              en: 'The address bar scheme is your first security cue before you type secrets.',
              zh: '输入机密前，地址栏协议是你的第一道安全提示。',
            },
          ],
        },
        {
          id: 'ch-i-https-encrypt',
          layout: 'text',

          titleEn: 'Encryption and Certificates',
          titleZh: '加密与证书',
          bodyEn:
            'Encryption scrambles data so outsiders cannot read it easily. Before that chat begins, the browser checks a certificate that claims “this server is allowed to speak for this host name.” You do not manage the math; the browser and OS trust store do.',
          bodyZh:
            '加密把数据打乱，外人不易读懂。对话开始前，浏览器会检查证书，证书声称“此服务器有权代表该主机名发言”。你不必处理数学细节；浏览器与操作系统信任库会代劳。',
          illustration: 'security',
          bullets: [
            {
              en: 'Encryption protects confidentiality of the bytes on the wire.',
              zh: '加密保护线路上字节的机密性。',
              keywords: [{ en: 'Encryption', zh: '加密' }],
            },
            {
              en: 'A certificate binds a public key to a host name for a validity period.',
              zh: '证书在有效期内把公钥与主机名绑定。',
              keywords: [{ en: 'Certificate', zh: '证书' }],
            },
            {
              en: 'Browsers warn when the name mismatches, the date expired, or the chain looks untrusted.',
              zh: '名称不匹配、日期过期或证书链不可信时，浏览器会警告。',
            },
          ],
        },
      ],
    },
    {
      id: 'trust-signals',
      titleEn: 'Trust Signals',
      titleZh: '信任信号',
      slides: [
        {
          id: 'ch-i-https-lock',
          layout: 'text',

          titleEn: 'The Lock Icon',
          titleZh: '锁标志',
          bodyEn:
            'In Edge or Chrome, the lock means the connection to that host is encrypted and the certificate checks passed for the name you see. It does not prove the business is honest, the goods are real, or the page content is safe. A convincing fake shop can still present a valid lock.',
          bodyZh:
            '在 Edge 或 Chrome 中，锁表示与该主机的连接已加密，且你所见名称的证书检查已通过。它不能证明商家诚实、商品真实或页面内容安全。逼真的假商店仍可能出示有效的锁。',
          illustration: 'security',
          bullets: [
            {
              en: 'Lock ≈ protected transport to this host name.',
              zh: '锁 ≈ 通往此主机名的受保护传输。',
              keywords: [{ en: 'Lock Icon', zh: '锁标志' }],
            },
            {
              en: 'No lock / not private ≈ pause before typing passwords.',
              zh: '无锁 / 非私密 ≈ 输入密码前先暂停。',
            },
            {
              en: 'Always re-check the host spelling even when the lock is present.',
              zh: '即使有锁，仍要再次核对主机名拼写。',
            },
          ],
        },
        {
          id: 'ch-i-https-warning',
          layout: 'text',

          titleEn: 'Certificate Warnings',
          titleZh: '证书警告',
          bodyEn:
            'Messages such as “Your connection is not private” are serious pause signs. Attackers and broken networks can trigger them. Do not click through on banking, email, or school logins. On classroom PCs, ask a teacher before bypassing anything.',
          bodyZh:
            '诸如“您的连接不是私密连接”的提示是严重的暂停信号。攻击者或故障网络都可能触发它们。网银、邮件或学校登录时不要强行继续。在教室电脑上，绕过任何警告前先问老师。',
          illustration: 'security',
          bullets: [
            {
              en: 'Stop, re-check the URL, and try a known-good bookmark or typed address.',
              zh: '停下，重核网址，改用已知可靠的书签或手输地址。',
            },
            {
              en: 'Public Wi-Fi plus a warning is a double reason to wait.',
              zh: '公共 Wi-Fi 再加上警告，更应等待。',
            },
            {
              en: 'Bypassing “just this once” for a password page is how accounts get stolen.',
              zh: '在密码页“就这一次”绕过，正是账户被盗的常见路径。',
            },
          ],
        },
        {
          id: 'ch-i-https-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Inspect the lock on a trusted site. Practice reading the host name the browser believes it reached.',
          bodyZh: '在可信站点上检查锁标志。练习阅读浏览器认为自己到达的主机名。',
          illustration: 'security',
          bullets: [
            {
              en: 'Open a trusted site in Edge or Chrome (school portal or official docs)',
              zh: '在 Edge 或 Chrome 中打开可信站点（学校门户或官方文档）',
            },
            {
              en: 'Confirm the URL starts with https:// and locate the lock icon',
              zh: '确认网址以 https:// 开头，并找到锁标志',
            },
            {
              en: 'Click the lock → view connection / certificate details',
              zh: '点击锁 → 查看连接 / 证书详情',
            },
            {
              en: 'Write down the site name shown and match it to the address bar host',
              zh: '写下显示的站点名，并与地址栏主机名对照',
            },
          ],
        },
        {
          id: 'ch-i-https-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'security',
          bullets: [
            {
              en: 'Treating any lock as “this site is fully trustworthy.”',
              zh: '把任何锁都当成“这个网站完全可信”。',
            },
            {
              en: 'Typing passwords on http:// pages because the form looks familiar.',
              zh: '因为表单看起来眼熟，就在 http:// 页面输入密码。',
            },
            {
              en: 'Bypassing certificate warnings just to finish a task faster.',
              zh: '为了快点完成任务而绕过证书警告。',
            },
          ],
        },
        {
          id: 'ch-i-https-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'security',
          bullets: [
            {
              en: 'What does HTTPS add that plain HTTP lacks?',
              zh: 'HTTPS 比普通 HTTP 多了什么？',
            },
            {
              en: 'Does a lock prove a website owner is honest?',
              zh: '有锁能证明网站所有者诚实吗？',
            },
            {
              en: 'What should you do when a login shows a certificate warning?',
              zh: '登录页出现证书警告时该怎么做？',
            },
          ],
          noteEn:
            'Answers: encrypted transport and certificate checks; no; stop, verify the URL, ask for a safe path — do not click through.',
          noteZh:
            '参考答案：加密传输与证书校验；不能；停下、核实网址、走安全路径——不要强行继续。',
        },
      ],
    },
  ],
}
