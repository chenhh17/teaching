import type { Chapter } from '../../types/course'

export const chIHttp: Chapter = {
  id: 'urls-and-http',
  titleEn: 'URLs and HTTP',
  titleZh: '网址与 HTTP',
  summaryEn:
    'URL parts, the HTTP request-response conversation, status codes, headers lightly, and address-bar habits.',
  summaryZh:
    '网址结构、HTTP 请求-响应对话、状态码、请求头浅讲，以及地址栏习惯。',
  sections: [
    {
      id: 'url-parts',
      titleEn: 'URL Parts',
      titleZh: '网址结构',
      slides: [
        {
          id: 'ch-i-http-title',
          layout: 'title',

          titleEn: 'Part I · URLs and HTTP',
          titleZh: '篇章 I · 网址与 HTTP',
          subtitleEn: 'Addresses and the language of web requests',
          subtitleZh: '地址，以及网页请求使用的语言',
          illustration: 'title',
          keywords: [
            { en: 'URL', zh: '网址' },
            { en: 'HTTP', zh: '超文本传输协议' },
            { en: 'Status Code', zh: '状态码' },
          ],
        },
        {
          id: 'ch-i-http-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Read the address bar like a map: know which part names the site, which part names the page, and how HTTP carries the conversation.',
          bodyZh:
            '像读地图一样读地址栏：知道哪一段是站点、哪一段是页面，以及 HTTP 如何承载这场对话。',
          illustration: 'protocol',
          bullets: [
            {
              en: 'Split a URL into scheme, host, path, and query.',
              zh: '把网址拆成协议、主机、路径与查询。',
              keywords: [{ en: 'URL', zh: '网址' }],
            },
            {
              en: 'Describe HTTP as the request and response conversation for pages.',
              zh: '把 HTTP 描述为网页的请求与响应对话。',
              keywords: [{ en: 'HTTP', zh: '超文本传输协议' }],
            },
            {
              en: 'Interpret common status codes such as 200, 404, and 500.',
              zh: '解读 200、404、500 等常见状态码。',
            },
          ],
        },
        {
          id: 'ch-i-http-url',
          layout: 'text',

          titleEn: 'Reading a URL',
          titleZh: '阅读网址',
          bodyEn:
            'A URL is a precise address. The scheme chooses the protocol, the host names the site, the path points to a resource, and the query can add parameters. Misreading the host is how many phishing links succeed.',
          bodyZh:
            '网址是精确地址。协议部分选择通信方式，主机名指出站点，路径指向资源，查询可附加参数。读错主机名，正是许多钓鱼链接得逞的原因。',
          illustration: 'protocol',
          bullets: [
            {
              en: 'Scheme: https:// means use HTTPS for this connection.',
              zh: '协议：https:// 表示本次连接使用 HTTPS。',
              keywords: [{ en: 'Scheme', zh: '协议方案' }],
            },
            {
              en: 'Host: example.com is the site name; DNS later finds its IP.',
              zh: '主机：example.com 是站点名；随后由 DNS 查 IP。',
              keywords: [{ en: 'Host', zh: '主机名' }],
            },
            {
              en: 'Path and query select the resource, such as /docs?lang=en',
              zh: '路径与查询选定资源，例如 /docs?lang=en',
              keywords: [
                { en: 'Path', zh: '路径' },
                { en: 'Query', zh: '查询参数' },
              ],
            },
          ],
        },
        {
          id: 'ch-i-http-address-bar',
          layout: 'text',

          titleEn: 'Address Bar Habits',
          titleZh: '地址栏习惯',
          bodyEn:
            'Before you type a password, glance at the host. Pretty link text in email can lie; the address bar after navigation shows where you actually landed. On Windows, Edge and Chrome both let you select and copy the full URL from the bar.',
          bodyZh:
            '输入密码前，先看主机名。邮件里漂亮的链接文字可能骗人；跳转后的地址栏才显示你真正到达的地方。在 Windows 上，Edge 与 Chrome 都能从地址栏选中并复制完整网址。',
          illustration: 'network',
          bullets: [
            {
              en: 'Trust the host you see in the bar more than the words of a hyperlink.',
              zh: '相信地址栏里的主机名，胜过相信超链接上的文字。',
            },
            {
              en: 'Click once in the address bar to select the full URL, then copy if needed.',
              zh: '单击地址栏可选中完整网址，需要时再复制。',
            },
            {
              en: 'Prefer typing known hosts yourself for bank or school portals.',
              zh: '网银或学校门户，优先自己输入已知主机名。',
            },
          ],
        },
      ],
    },
    {
      id: 'http-conversation',
      titleEn: 'HTTP Conversation',
      titleZh: 'HTTP 对话',
      slides: [
        {
          id: 'ch-i-http-request',
          layout: 'text',

          titleEn: 'HTTP Request and Response',
          titleZh: 'HTTP 请求与响应',
          bodyEn:
            'HTTP is the common application protocol for fetching web pages. Your browser sends a request that includes a method and a target. The server replies with a status line, headers, and often a body. GET is the usual method when you simply open a page to read.',
          bodyZh:
            'HTTP 是获取网页的通用应用层协议。浏览器发送包含方法与目标的请求。服务器以状态行、头部，以及常常还有正文作为回复。当你只是打开页面阅读时，常用方法是 GET。',
          illustration: 'protocol',
          bullets: [
            {
              en: 'HTTP defines how clients and servers exchange messages for the Web.',
              zh: 'HTTP 规定客户端与服务器如何为网页交换消息。',
              keywords: [{ en: 'HTTP', zh: '超文本传输协议' }],
            },
            {
              en: 'GET asks to retrieve a resource; the response may include HTML.',
              zh: 'GET 请求获取资源；响应中可能包含 HTML。',
              keywords: [{ en: 'GET', zh: '获取方法' }],
            },
            {
              en: 'HTTPS is HTTP carried over an encrypted connection; the conversation shape is similar.',
              zh: 'HTTPS 是在加密连接上承载的 HTTP；对话形态相似。',
            },
          ],
        },
        {
          id: 'ch-i-http-status',
          layout: 'text',

          titleEn: 'Status Codes',
          titleZh: '状态码',
          bodyEn:
            'The first digits of a status code group the outcome. 2xx means success, 4xx means the client asked for something the server will not or cannot give as requested, and 5xx means the server hit an internal problem. Learn a few by heart; you will see them in DevTools.',
          bodyZh:
            '状态码的首位数字对结果分组。2xx 表示成功，4xx 表示客户端所求服务器未能按请求给出，5xx 表示服务器内部出了问题。记住几个常见码；你会在开发者工具里看到它们。',
          illustration: 'protocol',
          bullets: [
            {
              en: '200 OK: the request succeeded and a body often follows.',
              zh: '200 OK：请求成功，通常随后有正文。',
              keywords: [{ en: 'Status Code', zh: '状态码' }],
            },
            {
              en: '404 Not Found: that path does not exist on this server.',
              zh: '404 Not Found：此服务器上不存在该路径。',
            },
            {
              en: '500 Internal Server Error: something failed on the server side.',
              zh: '500 Internal Server Error：服务器端出了故障。',
            },
          ],
          noteEn: 'Status codes debug the Web; they are not a diagnosis that your PC OS is broken.',
          noteZh: '状态码用于排查网页问题；它们不是“操作系统坏了”的诊断。',
        },
        {
          id: 'ch-i-http-headers',
          layout: 'text',

          titleEn: 'Headers (Lightly)',
          titleZh: '请求头（浅讲）',
          bodyEn:
            'Headers are name-value notes attached to requests and responses. They can describe content type, caching, cookies, and language. You do not invent them by hand yet; you will read them in the Network panel.',
          bodyZh:
            '请求头与响应头是附在消息上的名值对说明。它们可描述内容类型、缓存、Cookie 与语言。你现在不必手写它们；之后会在网络面板里阅读。',
          illustration: 'protocol',
          bullets: [
            {
              en: 'Headers carry metadata; the body carries the main content when present.',
              zh: '头部携带元数据；若有正文，正文才是主要内容。',
              keywords: [{ en: 'Header', zh: '请求头 / 响应头' }],
            },
            {
              en: 'Content-Type tells whether you received HTML, JSON, an image, and so on.',
              zh: 'Content-Type 说明收到的是 HTML、JSON 还是图片等。',
            },
            {
              en: 'Later labs: open DevTools → Network → select a row → Headers.',
              zh: '后续实验：打开开发者工具 → 网络 → 选中一行 → Headers。',
              keywords: [{ en: 'DevTools', zh: '开发者工具' }],
            },
          ],
        },
        {
          id: 'ch-i-http-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Practice reading a URL that intentionally fails, then confirm the status in DevTools.',
          bodyZh: '练习阅读一个故意失败的网址，再在开发者工具里确认状态码。',
          illustration: 'network',
          bullets: [
            {
              en: 'Open Edge or Chrome and visit https://example.com/missing-page',
              zh: '打开 Edge 或 Chrome，访问 https://example.com/missing-page',
            },
            {
              en: 'In the address bar, identify scheme, host, and path',
              zh: '在地址栏中标出协议、主机与路径',
            },
            {
              en: 'Press F12 → Network, reload the page, and find the document status',
              zh: '按 F12 → 网络，重新加载页面，找到主文档状态码',
            },
            {
              en: 'Confirm you see a client error such as 404, not a Windows crash',
              zh: '确认看到的是类似 404 的客户端错误，而不是 Windows 崩溃',
            },
          ],
        },
        {
          id: 'ch-i-http-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'files',
          bullets: [
            {
              en: 'Trusting pretty link text instead of checking the real host.',
              zh: '只信漂亮的链接文字，不核对真实主机名。',
            },
            {
              en: 'Thinking 404 means your Windows install is damaged.',
              zh: '以为 404 表示 Windows 安装已损坏。',
            },
            {
              en: 'Ignoring http versus https in the scheme when logging in.',
              zh: '登录时忽略协议里的 http 与 https 区别。',
            },
          ],
        },
        {
          id: 'ch-i-http-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'protocol',
          bullets: [
            {
              en: 'Name three parts of a URL and what each one does.',
              zh: '说出网址的三个部分及各自作用。',
            },
            {
              en: 'In one sentence, what does HTTP carry between browser and server?',
              zh: '用一句话说明 HTTP 在浏览器与服务器之间传递什么？',
            },
            {
              en: 'What does status 200 mean?',
              zh: '状态码 200 表示什么？',
            },
          ],
          noteEn:
            'Answers: e.g. scheme/host/path; request and response messages for web resources; success/OK.',
          noteZh:
            '参考答案：如协议/主机/路径；网页资源的请求与响应消息；成功/OK。',
        },
      ],
    },
  ],
}
