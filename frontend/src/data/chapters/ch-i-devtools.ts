import type { Chapter } from '../../types/course'

export const chIDevtools: Chapter = {
  id: 'browser-devtools',
  titleEn: 'Browser DevTools',
  titleZh: '浏览器开发者工具',
  summaryEn:
    'Open DevTools in Edge or Chrome, inspect Elements, read Console messages lightly, and capture Network requests on Windows.',
  summaryZh:
    '在 Edge 或 Chrome 中打开开发者工具，检查元素，浅读控制台消息，并在 Windows 上捕获网络请求。',
  sections: [
    {
      id: 'open-tools',
      titleEn: 'Open the Tools',
      titleZh: '打开工具',
      slides: [
        {
          id: 'ch-i-devtools-title',
          layout: 'title',

          titleEn: 'Part I · Browser DevTools',
          titleZh: '篇章 I · 浏览器开发者工具',
          subtitleEn: 'Look under the hood of any page',
          subtitleZh: '查看任意页面的内部细节',
          illustration: 'title',
          keywords: [
            { en: 'DevTools', zh: '开发者工具' },
            { en: 'Elements', zh: '元素面板' },
            { en: 'Network', zh: '网络面板' },
          ],
        },
        {
          id: 'ch-i-devtools-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'DevTools turn the invisible load path into something you can click. You will open the panels confidently and know which tab answers which question.',
          bodyZh:
            '开发者工具把看不见的加载路径变成可点击的内容。你将自信地打开各面板，并知道哪个标签页回答哪类问题。',
          illustration: 'code',
          bullets: [
            {
              en: 'Open DevTools quickly in Edge or Chrome on Windows.',
              zh: '在 Windows 的 Edge 或 Chrome 中快速打开开发者工具。',
              keywords: [{ en: 'DevTools', zh: '开发者工具' }],
            },
            {
              en: 'Inspect live HTML in the Elements panel.',
              zh: '在元素面板中查看实时 HTML。',
              keywords: [{ en: 'Elements', zh: '元素面板' }],
            },
            {
              en: 'Use Network to see requests, types, and status codes.',
              zh: '用网络面板查看请求、类型与状态码。',
            },
          ],
        },
        {
          id: 'ch-i-devtools-open',
          layout: 'steps',
          titleEn: 'How to Open DevTools',
          titleZh: '如何打开开发者工具',
          bodyEn:
            'Use the same shortcuts in Microsoft Edge and Google Chrome on Windows. Dock the panel to the side or bottom so the page stays readable while you learn.',
          bodyZh:
            '在 Windows 上，Microsoft Edge 与 Google Chrome 使用相同快捷键。把面板停靠在侧边或底部，学习时页面仍可读。',
          illustration: 'terminal',
          bullets: [
            {
              en: 'Press F12, or press Ctrl + Shift + I',
              zh: '按 F12，或按 Ctrl + Shift + I',
            },
            {
              en: 'Or right-click the page → Inspect',
              zh: '或在页面上右键 → 检查',
              keywords: [{ en: 'Inspect', zh: '检查' }],
            },
            {
              en: 'Use the docking menu to place the panel on the right or bottom',
              zh: '用停靠菜单把面板放到右侧或底部',
            },
            {
              en: 'Press F12 again to close when you finish',
              zh: '结束后再按 F12 关闭',
            },
          ],
        },
        {
          id: 'ch-i-devtools-elements',
          layout: 'text',

          titleEn: 'Elements Panel',
          titleZh: '元素面板',
          bodyEn:
            'Elements shows the live DOM tree — the HTML structure as the browser currently understands it. Hover a node to highlight that region on the page. Edits here are temporary teaching tools; a refresh restores the real site.',
          bodyZh:
            '元素面板显示实时 DOM 树——浏览器当前理解的 HTML 结构。悬停节点可高亮页面对应区域。这里的编辑只是临时教学工具；刷新会恢复真实站点。',
          illustration: 'code',
          bullets: [
            {
              en: 'Expand tags to see nesting, the same hierarchy you learned in HTML basics.',
              zh: '展开标签查看嵌套，与 HTML 基础中的层级一致。',
              keywords: [{ en: 'Elements', zh: '元素面板' }],
            },
            {
              en: 'The Styles side pane shows CSS rules that affect the selected node.',
              zh: '样式侧栏显示影响所选节点的 CSS 规则。',
            },
            {
              en: 'Never assume an Elements edit permanently changed the server’s files.',
              zh: '切勿以为在元素面板的编辑永久改掉了服务器上的文件。',
            },
          ],
          noteEn: 'Refresh (F5) reloads from the network and discards local Elements tweaks.',
          noteZh: '刷新（F5）从网络重新加载，并丢弃本地元素面板改动。',
        },
      ],
    },
    {
      id: 'console-network',
      titleEn: 'Console and Network',
      titleZh: '控制台与网络',
      slides: [
        {
          id: 'ch-i-devtools-console',
          layout: 'text',

          titleEn: 'Console (Lightly)',
          titleZh: '控制台（浅讲）',
          bodyEn:
            'The Console prints messages and errors from page scripts. Red errors often mean a script failed to run or a resource failed to load. As a beginner, learn to notice them; you do not need to fix every warning on third-party sites.',
          bodyZh:
            '控制台打印页面脚本的消息与错误。红色错误常表示脚本未能运行或资源加载失败。作为初学者，先学会留意它们；不必修好第三方网站上的每一条警告。',
          illustration: 'terminal',
          bullets: [
            {
              en: 'Open the Console tab beside Elements in DevTools.',
              zh: '在开发者工具中打开元素旁的控制台标签。',
              keywords: [{ en: 'Console', zh: '控制台' }],
            },
            {
              en: 'Filter noise later; first practice spotting red error lines.',
              zh: '稍后可过滤噪音；先练习认出红色错误行。',
            },
            {
              en: 'Classroom tip: copy the first error line when you ask for help.',
              zh: '课堂提示：求助时复制第一条错误行。',
            },
          ],
        },
        {
          id: 'ch-i-devtools-network',
          layout: 'text',

          titleEn: 'Network Panel',
          titleZh: '网络面板',
          bodyEn:
            'Network lists every request the browser makes: the main document, CSS, scripts, images, and API calls. Open the panel first, then reload, or the list may stay empty because the traffic already finished.',
          bodyZh:
            '网络列表面浏览器发出的每个请求：主文档、CSS、脚本、图片与 API 调用。先打开面板再重新加载，否则列表可能一直为空，因为流量已经结束。',
          illustration: 'network',
          bullets: [
            {
              en: 'Each row has a name, type, status code, and size.',
              zh: '每一行有名称、类型、状态码与大小。',
              keywords: [{ en: 'Network', zh: '网络面板' }],
            },
            {
              en: 'Click a row to inspect Headers and Response details.',
              zh: '点击一行可查看 Headers 与 Response 细节。',
            },
            {
              en: 'Connect this view to earlier ideas: URL, HTTP method, and status codes.',
              zh: '把此视图与先前概念联系起来：网址、HTTP 方法与状态码。',
            },
          ],
        },
        {
          id: 'ch-i-devtools-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Walk Elements and Network on a simple page so the panels stay calm and readable.',
          bodyZh: '在简单页面上走一遍元素与网络面板，界面更安静、更易读。',
          illustration: 'terminal',
          bullets: [
            {
              en: 'Open https://example.com in Edge or Chrome',
              zh: '在 Edge 或 Chrome 中打开 https://example.com',
            },
            {
              en: 'Press F12 → Elements and find title or a heading node',
              zh: '按 F12 → 元素，找到 title 或某个标题节点',
            },
            {
              en: 'Open Network, press F5 to reload, and find the main document status',
              zh: '打开网络，按 F5 重新加载，找到主文档状态码',
            },
            {
              en: 'Optional: open Console and note whether any red errors appear',
              zh: '可选：打开控制台，留意是否出现红色错误',
            },
          ],
        },
        {
          id: 'ch-i-devtools-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'network',
          bullets: [
            {
              en: 'Opening Network after the page finished loading and seeing an empty list.',
              zh: '页面加载完才打开网络面板，结果列表是空的。',
            },
            {
              en: 'Panicking at every Console warning on large third-party sites.',
              zh: '在大型第三方网站上看到每条控制台警告都慌张。',
            },
            {
              en: 'Believing Elements edits permanently change the real website.',
              zh: '以为在元素面板的编辑会永久改掉真实网站。',
            },
          ],
        },
        {
          id: 'ch-i-devtools-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'code',
          bullets: [
            {
              en: 'Name one Windows shortcut to open DevTools.',
              zh: '说出一个打开开发者工具的 Windows 快捷键。',
            },
            {
              en: 'Which panel shows the live HTML tree?',
              zh: '哪个面板显示实时 HTML 树？',
            },
            {
              en: 'Why reload after opening the Network panel?',
              zh: '打开网络面板后为什么要重新加载？',
            },
          ],
          noteEn:
            'Answers: F12 or Ctrl+Shift+I; Elements; to capture the requests while the panel is recording.',
          noteZh:
            '参考答案：F12 或 Ctrl+Shift+I；元素；以便在面板记录时捕获请求。',
        },
      ],
    },
  ],
}
