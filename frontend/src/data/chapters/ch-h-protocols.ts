import type { Chapter } from '../../types/course'

export const chHProtocols: Chapter = {
  id: 'protocols-and-ports',
  titleEn: 'Protocols and Ports',
  titleZh: '协议与端口',
  summaryEn:
    'Treat protocols as shared rules, read URLs as structured addresses, and recognize why ports matter for Windows network apps.',
  summaryZh:
    '把协议当作共享规则，把 URL 当作结构化地址，并认识端口为何对 Windows 网络应用重要。',
  sections: [
    {
      id: 'protocol-idea',
      titleEn: 'Protocol Idea',
      titleZh: '协议概念',
      slides: [
        {
          id: 'ch-h-protocols-title',
          layout: 'title',

          titleEn: 'Part H · Protocols and Ports',
          titleZh: '篇章 H · 协议与端口',
          subtitleEn: 'Agreed rules make strangers interoperable',
          subtitleZh: '约定规则让陌生系统能够互通',
          illustration: 'title',
          keywords: [
            { en: 'Protocol', zh: '协议' },
            { en: 'Port', zh: '端口' },
            { en: 'URL', zh: '网址' },
          ],
        },
        {
          id: 'ch-h-protocols-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will explain protocols as contracts, recognize common web protocols, parse a simple URL, and relate ports to services on a host.',
          bodyZh:
            '你将把协议解释为契约，认识常见 Web 协议，解析简单 URL，并把端口与主机上的服务对应起来。',
          bullets: [
            {
              en: 'Define protocol without vendor jargon.',
              zh: '不用厂商黑话定义协议。',
            },
            {
              en: 'Contrast HTTP and HTTPS at a beginner security level.',
              zh: '在入门安全层面对比 HTTP 与 HTTPS。',
            },
            {
              en: 'Identify scheme, host, and path in a URL.',
              zh: '识别 URL 中的协议方案、主机与路径。',
            },
            {
              en: 'Name default ports 80 and 443.',
              zh: '说出默认端口 80 与 443。',
            },
          ],
        },
        {
          id: 'ch-h-protocols-what',
          layout: 'text',

          titleEn: 'Protocols Are Shared Rules',
          titleZh: '协议是共享规则',
          bodyEn:
            'A protocol answers how two systems format questions and answers. Without shared rules, a browser and a server would exchange noise. Standards let equipment from many vendors work together.',
          bodyZh:
            '协议回答两套系统如何组织提问与回答。没有共享规则，浏览器与服务器只会交换噪声。标准让许多厂商的设备能一起工作。',
          bullets: [
            {
              en: 'Rules cover message shape, timing, and error handling.',
              zh: '规则覆盖消息形态、时序与错误处理。',
              keywords: [{ en: 'Standard', zh: '标准' }],
            },
            {
              en: 'You already use protocols when browsing and mailing.',
              zh: '浏览与收发邮件时你已经在用协议。',
            },
            {
              en: 'Learning names helps you read error dialogs and docs.',
              zh: '记住名称有助于阅读错误对话框与文档。',
            },
          ],
        },
        {
          id: 'ch-h-protocols-common',
          layout: 'text',

          titleEn: 'Common Protocols You Will Meet',
          titleZh: '你会遇到的常见协议',
          bodyEn:
            'Beginners do not need every protocol, but a short map prevents panic when logs mention them. Focus on web, name service, and secure transport ideas.',
          bodyZh:
            '初学者不必掌握所有协议，但有一张短地图可在日志提到它们时避免恐慌。先关注 Web、名字服务与安全传输概念。',
          bullets: [
            {
              en: 'HTTP/HTTPS: web page and API transfer.',
              zh: 'HTTP/HTTPS：网页与 API 传输。',
              keywords: [
                { en: 'HTTP', zh: '超文本传输协议' },
                { en: 'HTTPS', zh: '安全超文本传输' },
              ],
            },
            {
              en: 'DNS: name to address lookup.',
              zh: 'DNS：名字到地址的查询。',
            },
            {
              en: 'TCP/UDP: transport styles beneath many apps.',
              zh: 'TCP/UDP：许多应用之下的传输风格。',
            },
          ],
        },
      ],
    },
    {
      id: 'url-and-ports',
      titleEn: 'URL and Ports',
      titleZh: 'URL 与端口',
      slides: [
        {
          id: 'ch-h-protocols-http-https',
          layout: 'text',

          titleEn: 'HTTP and HTTPS in Daily Browsing',
          titleZh: '日常浏览中的 HTTP 与 HTTPS',
          bodyEn:
            'HTTP moves web content. HTTPS is HTTP protected with encryption and server authentication. Modern sites prefer HTTPS so passwords and cookies are not sent as clear text on the path.',
          bodyZh:
            'HTTP 传输 Web 内容。HTTPS 是带加密与服务器认证保护的 HTTP。现代网站更倾向 HTTPS，以免密码与 Cookie 在路径上以明文发送。',
          bullets: [
            {
              en: 'Lock icons signal HTTPS in many browsers.',
              zh: '许多浏览器用锁图标表示 HTTPS。',
            },
            {
              en: 'HTTPS does not mean the website content is trustworthy.',
              zh: 'HTTPS 并不表示网站内容一定可信。',
            },
            {
              en: 'Certificate warnings deserve a pause, not a blind click.',
              zh: '证书警告值得停一下，而不是盲目点击。',
              keywords: [{ en: 'Certificate', zh: '证书' }],
            },
          ],
          illustration: 'protocol',
        },
        {
          id: 'ch-h-protocols-url',
          layout: 'text',

          titleEn: 'Read a URL as Structured Text',
          titleZh: '把 URL 当结构化文本来读',
          bodyEn:
            'A URL is not decoration. `https://www.example.com/help` tells the scheme (`https`), the host name (`www.example.com`), and a path (`/help`). Query strings and ports can appear too.',
          bodyZh:
            'URL 不是装饰。`https://www.example.com/help` 告诉你方案（`https`）、主机名（`www.example.com`）与路径（`/help`）。还可能出现查询串与端口。',
          bullets: [
            {
              en: 'Scheme selects the protocol family.',
              zh: '方案选择协议族。',
              keywords: [{ en: 'Scheme', zh: '协议方案' }],
            },
            {
              en: 'Host is what DNS must resolve.',
              zh: '主机名是 DNS 必须解析的对象。',
              keywords: [{ en: 'Host', zh: '主机名' }],
            },
            {
              en: 'Path selects a resource on that host.',
              zh: '路径选择该主机上的资源。',
              keywords: [{ en: 'Path', zh: '路径' }],
            },
          ],
        },
        {
          id: 'ch-h-protocols-ports',
          layout: 'text',

          titleEn: 'Ports Select a Service on a Host',
          titleZh: '端口选择主机上的服务',
          bodyEn:
            'An IP address finds a machine (more precisely, an interface). A port number finds an application listening on that machine. Defaults hide ports in normal URLs: HTTPS uses 443, HTTP uses 80.',
          bodyZh:
            'IP 地址找到一台机器（更准确说是一个接口）。端口号找到该机器上监听的应用。普通 URL 常隐藏端口：HTTPS 用 443，HTTP 用 80。',
          bullets: [
            {
              en: 'Many services can share one IP via different ports.',
              zh: '许多服务可通过不同端口共享同一 IP。',
              keywords: [{ en: 'Port', zh: '端口' }],
            },
            {
              en: 'Explicit form: `https://example.com:8443/`.',
              zh: '显式形式：`https://example.com:8443/`。',
            },
            {
              en: 'Firewalls often allow or block by port.',
              zh: '防火墙常按端口允许或阻止。',
              keywords: [{ en: 'Firewall', zh: '防火墙' }],
            },
          ],
        },
        {
          id: 'ch-h-protocols-try',
          layout: 'steps',
          titleEn: 'Try It: Dissect Three URLs',
          titleZh: '动手：拆解三个 URL',
          bodyEn:
            'Practice reading structure before you memorize more protocol names.',
          bodyZh: '在背更多协议名之前，先练习阅读结构。',
          bullets: [
            {
              en: 'Open Notepad and paste three course-safe URLs.',
              zh: '打开记事本，粘贴三个课堂安全的 URL。',
            },
            {
              en: 'For each, underline scheme, host, and path.',
              zh: '对每一个，标出方案、主机与路径。',
            },
            {
              en: 'Write the default port you expect for http vs https.',
              zh: '写出你对 http 与 https 期望的默认端口。',
            },
            {
              en: 'Optional: in PowerShell, `Test-NetConnection example.com -Port 443`.',
              zh: '可选：在 PowerShell 运行 `Test-NetConnection example.com -Port 443`。',
              keywords: [{ en: 'Test-NetConnection', zh: '测试网络连接' }],
            },
          ],
        },
        {
          id: 'ch-h-protocols-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Protocol words get misused in casual speech.',
          bodyZh: '日常口语里协议词汇常被误用。',
          bullets: [
            {
              en: 'Saying “the IP protocol failed” for every browser error.',
              zh: '每个浏览器错误都说“IP 协议失败了”。',
            },
            {
              en: 'Assuming HTTPS means a site cannot be phishing.',
              zh: '以为 HTTPS 就表示网站不可能是钓鱼。',
            },
            {
              en: 'Forgetting that port blocks can look like application bugs.',
              zh: '忘记端口阻断可能看起来像应用缺陷。',
            },
          ],
        },
        {
          id: 'ch-h-protocols-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Keep rules, names, and ports connected.',
          bodyZh: '把规则、名字与端口连在一起。',
          bullets: [
            {
              en: 'What is a protocol in one sentence?',
              zh: '用一句话解释什么是协议？',
            },
            {
              en: 'Which default port is used by HTTPS?',
              zh: 'HTTPS 使用哪个默认端口？',
            },
            {
              en: 'In `https://campus.example/login`, what is the host?',
              zh: '在 `https://campus.example/login` 中，主机是什么？',
            },
          ],
          noteEn:
            'Answers: shared communication rules; 443; `campus.example`.',
          noteZh: '参考：共享通信规则；443；`campus.example`。',
        },
      ],
    },
  ],
}
