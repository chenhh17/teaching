import type { Chapter } from '../../types/course'

export const chIWeb: Chapter = {
  id: 'how-web-pages-load',
  titleEn: 'How Web Pages Load',
  titleZh: '网页如何加载',
  summaryEn:
    'Client-server roles, request and response, DNS lookup, and how the browser turns HTML into a page.',
  summaryZh:
    '客户端与服务器角色、请求与响应、DNS 查询，以及浏览器如何把 HTML 变成页面。',
  sections: [
    {
      id: 'client-server',
      titleEn: 'Client and Server',
      titleZh: '客户端与服务器',
      slides: [
        {
          id: 'ch-i-web-title',
          layout: 'title',

          titleEn: 'Part I · How Web Pages Load',
          titleZh: '篇章 I · 网页如何加载',
          subtitleEn: 'From address bar click to pixels on screen',
          subtitleZh: '从地址栏点击到屏幕上的像素',
          illustration: 'title',
          keywords: [
            { en: 'Client', zh: '客户端' },
            { en: 'Server', zh: '服务器' },
            { en: 'HTML', zh: '超文本标记语言' },
          ],
        },
        {
          id: 'ch-i-web-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'By the end of this chapter you should explain the load path in plain language, not as magic.',
          bodyZh: '学完本章后，你应能用白话解释网页加载路径，而不是把它当成魔法。',
          illustration: 'network',
          bullets: [
            {
              en: 'Name the client and the server when you open a site in Edge or Chrome.',
              zh: '在 Edge 或 Chrome 打开网站时，说出谁是客户端、谁是服务器。',
              keywords: [
                { en: 'Client', zh: '客户端' },
                { en: 'Server', zh: '服务器' },
              ],
            },
            {
              en: 'Describe request, response, and common status ideas such as 200 and 404.',
              zh: '描述请求、响应，以及 200、404 等常见状态概念。',
              keywords: [
                { en: 'Request', zh: '请求' },
                { en: 'Response', zh: '响应' },
              ],
            },
            {
              en: 'See HTML as page structure the browser interprets.',
              zh: '把 HTML 看作浏览器解释的页面结构。',
              keywords: [{ en: 'HTML', zh: '超文本标记语言' }],
            },
          ],
        },
        {
          id: 'ch-i-web-roles',
          layout: 'text',

          titleEn: 'Client Asks, Server Answers',
          titleZh: '客户端提问，服务器回答',
          bodyEn:
            'Every web visit is a conversation. Your browser on Windows is the client: it asks for a page. A remote computer that stores the site is the server: it answers. Many clients can ask the same server at once; the server is built for that workload.',
          bodyZh:
            '每次访问网页都是一场对话。Windows 上的浏览器是客户端：它请求页面。存放网站的远程电脑是服务器：它作出回答。许多客户端可以同时向同一服务器提问；服务器就是为这种负载设计的。',
          illustration: 'network',
          bullets: [
            {
              en: 'Edge and Chrome are clients you control on your PC.',
              zh: 'Edge 与 Chrome 是你在本机控制的客户端。',
              keywords: [{ en: 'Browser', zh: '浏览器' }],
            },
            {
              en: 'The server holds files and programs that build the reply.',
              zh: '服务器保存文件与程序，并据此生成回复。',
            },
            {
              en: '“The website is down” usually means the server side failed, not that Windows itself is broken.',
              zh: '“网站挂了”通常指服务器端出问题，而不是 Windows 本身坏了。',
            },
          ],
        },
        {
          id: 'ch-i-web-request',
          layout: 'text',

          titleEn: 'Request and Response',
          titleZh: '请求与响应',
          bodyEn:
            'Typing a URL or clicking a link starts a request: the client asks for a specific resource. The server returns a response: page data when things go well, or an error when they do not. Status codes summarize the outcome so tools and people can debug.',
          bodyZh:
            '输入网址或点击链接会发起请求：客户端索要某个资源。服务器返回响应：顺利时是页面数据，失败时是错误信息。状态码概括结果，方便工具与人排查。',
          illustration: 'protocol',
          bullets: [
            {
              en: 'A request names what you want; a response carries the answer.',
              zh: '请求说明你要什么；响应携带答案。',
              keywords: [
                { en: 'Request', zh: '请求' },
                { en: 'Response', zh: '响应' },
              ],
            },
            {
              en: '200 means OK; 404 means that path was not found on the server.',
              zh: '200 表示成功；404 表示服务器上找不到该路径。',
              keywords: [{ en: 'Status Code', zh: '状态码' }],
            },
            {
              en: 'A 404 on a site does not mean your PC hardware failed.',
              zh: '网站上的 404 并不表示你的电脑硬件坏了。',
            },
          ],
        },
      ],
    },
    {
      id: 'html-and-browser',
      titleEn: 'HTML and the Browser',
      titleZh: 'HTML 与浏览器',
      slides: [
        {
          id: 'ch-i-web-flow',
          layout: 'text',

          titleEn: 'Simple Load Path',
          titleZh: '简单加载路径',
          bodyEn:
            'Behind a single click there are several steps. The browser resolves the site name to an IP address with DNS, opens a connection to that server, receives HTML and related files, then builds the visual page you see.',
          bodyZh:
            '一次点击背后有多步。浏览器用 DNS 把站点名解析成 IP，再连上服务器，接收 HTML 及相关文件，最后构建你看到的页面。',
          illustration: 'network',
          bullets: [
            {
              en: 'DNS turns example.com into a numeric IP the network can route.',
              zh: 'DNS 把 example.com 变成网络可路由的数字 IP。',
              keywords: [{ en: 'DNS', zh: '域名系统' }],
            },
            {
              en: 'The first reply is often HTML; CSS, scripts, and images follow.',
              zh: '首份回复常常是 HTML；随后还有 CSS、脚本与图片。',
            },
            {
              en: 'Rendering is the browser’s job: structure becomes layout and paint.',
              zh: '渲染是浏览器的工作：结构变成布局与绘制。',
              keywords: [{ en: 'Render', zh: '渲染' }],
            },
          ],
        },
        {
          id: 'ch-i-web-html',
          layout: 'text',

          titleEn: 'HTML Is Page Structure',
          titleZh: 'HTML 是页面结构',
          bodyEn:
            'HTML is markup, not a full programming language. It labels headings, paragraphs, links, and images so the browser knows what each piece is. CSS later styles appearance; JavaScript later adds behavior.',
          bodyZh:
            'HTML 是标记，不是完整的编程语言。它给标题、段落、链接和图片贴标签，让浏览器知道每段内容是什么。CSS 之后负责外观；JavaScript 之后再加行为。',
          illustration: 'code',
          bullets: [
            {
              en: 'Think of HTML as the skeleton of the page.',
              zh: '把 HTML 想成页面的骨架。',
              keywords: [{ en: 'HTML', zh: '超文本标记语言' }],
            },
            {
              en: 'You do not need to write HTML yet — recognize that it exists and travels in the response.',
              zh: '现在不必会写 HTML——先认出它存在，并随响应传来。',
            },
            {
              en: 'Viewing source later shows the same language the server sent.',
              zh: '稍后查看源代码，就是服务器发来的同一种语言。',
            },
          ],
        },
        {
          id: 'ch-i-web-view-source',
          layout: 'steps',
          titleEn: 'Peek at a Real Page',
          titleZh: '偷看真实页面',
          bodyEn:
            'On Windows, Edge and Chrome let you inspect what arrived. Start with a simple public page so the HTML is easier to skim.',
          bodyZh:
            '在 Windows 上，Edge 与 Chrome 都能查看实际收到的内容。先用简单的公开页面，HTML 更容易扫读。',
          illustration: 'code',
          bullets: [
            {
              en: 'Open Edge or Chrome and visit https://example.com',
              zh: '打开 Edge 或 Chrome，访问 https://example.com',
            },
            {
              en: 'Right-click the page → View page source',
              zh: '在页面上右键 → 查看网页源代码',
              keywords: [{ en: 'View Source', zh: '查看源代码' }],
            },
            {
              en: 'Find tags such as html, head, body, and title',
              zh: '找到 html、head、body、title 等标签',
              keywords: [{ en: 'Tag', zh: '标签' }],
            },
            {
              en: 'Optional: press F12 once and glance at the Network tab',
              zh: '可选：按一次 F12，大致看一眼网络（Network）面板',
              keywords: [{ en: 'DevTools', zh: '开发者工具' }],
            },
          ],
        },
        {
          id: 'ch-i-web-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'network',
          bullets: [
            {
              en: 'Blaming the website when Wi-Fi or the cable is simply off.',
              zh: 'Wi-Fi 或网线关了，却怪网站坏了。',
            },
            {
              en: 'Thinking the browser stores the whole Internet on your disk.',
              zh: '以为浏览器把整个互联网都存在本机磁盘上。',
            },
            {
              en: 'Treating a 404 as proof that Windows itself is broken.',
              zh: '把 404 当成 Windows 系统损坏的证据。',
            },
          ],
        },
        {
          id: 'ch-i-web-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'network',
          bullets: [
            {
              en: 'Who is the client when you open a website on your PC?',
              zh: '在电脑上打开网站时，谁是客户端？',
            },
            {
              en: 'After a request, what does the server send back?',
              zh: '请求之后，服务器发回什么？',
            },
            {
              en: 'What is HTML mainly for in the load path?',
              zh: '在加载路径里，HTML 主要做什么？',
            },
          ],
          noteEn:
            'Answers: your browser; a response (page data or an error); describing page structure for the browser to render.',
          noteZh:
            '参考答案：你的浏览器；响应（页面数据或错误）；描述页面结构，供浏览器渲染。',
        },
      ],
    },
  ],
}
