import type { Chapter } from '../../types/course'

export const chIBrowser: Chapter = {
  id: 'browser-cookies-api',
  titleEn: 'Browser, Cookies, and APIs',
  titleZh: '浏览器、Cookie 与 API',
  summaryEn:
    'Tabs and downloads, how cookies and cache work, APIs as programmatic doorways, and JSON as a common data format.',
  summaryZh:
    '标签页与下载、Cookie 与缓存机制、作为程序入口的 API，以及常见的 JSON 数据格式。',
  sections: [
    {
      id: 'browser-habits',
      titleEn: 'Browser Habits',
      titleZh: '浏览器习惯',
      slides: [
        {
          id: 'ch-i-browser-title',
          layout: 'title',

          titleEn: 'Part I · Browser, Cookies, and APIs',
          titleZh: '篇章 I · 浏览器、Cookie 与 API',
          subtitleEn: 'Everyday browser tools and how apps talk online',
          subtitleZh: '日常浏览器工具，以及应用如何联网交谈',
          illustration: 'title',
          keywords: [
            { en: 'Cookie', zh: 'Cookie / 小甜饼' },
            { en: 'API', zh: '应用程序接口' },
            { en: 'JSON', zh: '一种数据格式' },
          ],
        },
        {
          id: 'ch-i-browser-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Treat the browser as both a reading tool and a small data store. Know what it remembers for you, and how apps fetch structured data behind the page.',
          bodyZh:
            '把浏览器既当作阅读工具，也当作小型数据仓库。知道它为你记住什么，以及应用如何在页面背后获取结构化数据。',
          illustration: 'network',
          bullets: [
            {
              en: 'Use tabs, bookmarks, and downloads with care on Windows.',
              zh: '在 Windows 上谨慎使用标签页、书签与下载。',
            },
            {
              en: 'Explain cookies and cache as browser-side memory with different jobs.',
              zh: '把 Cookie 与缓存解释为职责不同的浏览器端记忆。',
            },
            {
              en: 'Describe an API and recognize JSON text at a glance.',
              zh: '描述什么是 API，并一眼认出 JSON 文本。',
              keywords: [
                { en: 'API', zh: '应用程序接口' },
                { en: 'JSON', zh: '一种数据格式' },
              ],
            },
          ],
        },
        {
          id: 'ch-i-browser-tabs',
          layout: 'text',

          titleEn: 'Tabs, Bookmarks, Downloads',
          titleZh: '标签页、书签、下载',
          bodyEn:
            'Tabs keep many pages open in one window; too many slow Edge or Chrome. Bookmarks should point to official docs you trust. Downloads on Windows usually land in your user Downloads folder — verify the file before you run installers.',
          bodyZh:
            '标签页可在一个窗口打开许多页面；开太多会拖慢 Edge 或 Chrome。书签应指向你信任的官方文档。Windows 上下载通常进入用户“下载”文件夹——运行安装程序前先确认文件。',
          illustration: 'files',
          bullets: [
            {
              en: 'Close tabs you finished; pin only the ones you revisit daily.',
              zh: '用完的标签页及时关闭；只固定每天都会打开的页面。',
              keywords: [{ en: 'Tab', zh: '标签页' }],
            },
            {
              en: 'Bookmark official Python, MDN, or school portal pages, not random blogs.',
              zh: '收藏官方 Python、MDN 或学校门户，而不是随机博客。',
              keywords: [{ en: 'Bookmark', zh: '书签' }],
            },
            {
              en: 'Open Downloads with Ctrl + J in Edge or Chrome when you need the list.',
              zh: '需要列表时，在 Edge 或 Chrome 用 Ctrl + J 打开下载内容。',
              keywords: [{ en: 'Downloads', zh: '下载' }],
            },
          ],
        },
        {
          id: 'ch-i-browser-cookies',
          layout: 'text',

          titleEn: 'Cookies and Cache',
          titleZh: 'Cookie 与缓存',
          bodyEn:
            'A cookie is a small piece of data a site asks your browser to store, often so the next visit can remember a session or preference. Cache keeps copies of files such as images and scripts so repeat visits load faster. Clearing them can fix odd page bugs, but you may need to sign in again.',
          bodyZh:
            'Cookie 是网站请求浏览器保存的一小段数据，常用于下次访问记住会话或偏好。缓存保存图片、脚本等文件副本，使再次访问更快。清除它们可修复奇怪页面问题，但可能需要重新登录。',
          illustration: 'files',
          bullets: [
            {
              en: 'Cookies are per-site notes; they are not your project source files.',
              zh: 'Cookie 是按站点保存的小纸条；它们不是你的项目源文件。',
              keywords: [{ en: 'Cookie', zh: 'Cookie / 小甜饼' }],
            },
            {
              en: 'Cache speeds loading; stale cache can show an outdated page until refresh or clear.',
              zh: '缓存加快加载；过期缓存可能显示旧页面，直到刷新或清除。',
              keywords: [{ en: 'Cache', zh: '缓存' }],
            },
            {
              en: 'On shared classroom PCs, avoid “remember me” for personal accounts.',
              zh: '在共用教室电脑上，个人账户避免勾选“记住我”。',
            },
          ],
          noteEn:
            'Settings → Privacy in Edge/Chrome is where site data and cookies are managed.',
          noteZh: 'Edge/Chrome 的设置 → 隐私中可管理网站数据与 Cookie。',
        },
      ],
    },
    {
      id: 'api-json',
      titleEn: 'APIs and JSON',
      titleZh: 'API 与 JSON',
      slides: [
        {
          id: 'ch-i-browser-api',
          layout: 'text',

          titleEn: 'API: Apps Talking to Servers',
          titleZh: 'API：应用与服务器交谈',
          bodyEn:
            'An API is a documented doorway: a program sends a request for data or an action, and the server returns a structured answer. Weather widgets, maps, and many modern pages update through APIs even when you never see a full page reload.',
          bodyZh:
            'API 是有文档的入口：程序发送获取数据或执行动作的请求，服务器返回结构化答案。天气组件、地图，以及许多现代页面，即便你看不到整页刷新，也在通过 API 更新。',
          illustration: 'protocol',
          bullets: [
            {
              en: 'APIs let programs request data without pretending to be a human clicking links.',
              zh: 'API 让程序请求数据，而不必假装成人类去点链接。',
              keywords: [{ en: 'API', zh: '应用程序接口' }],
            },
            {
              en: 'The browser can call APIs in the background while you view a page.',
              zh: '你浏览页面时，浏览器可在后台调用 API。',
            },
            {
              en: 'You will later see API calls as rows in the Network panel.',
              zh: '稍后可在网络面板的行里看到 API 调用。',
            },
          ],
        },
        {
          id: 'ch-i-browser-json',
          layout: 'text',

          titleEn: 'JSON in One Glance',
          titleZh: '一眼认识 JSON',
          bodyEn:
            'JSON is a text format widely used in API responses. It nests keys and values with braces and brackets. Humans can skim it; programs parse it reliably. You do not need to write JSON yet — recognize the shape.',
          bodyZh:
            'JSON 是 API 响应中广泛使用的文本格式。它用花括号与方括号嵌套键和值。人可以扫读；程序能可靠解析。你现在不必会写 JSON——先认出形状。',
          illustration: 'code',
          bullets: [
            {
              en: 'Typical look: { "name": "Alex", "ok": true }',
              zh: '典型外观：{ "name": "Alex", "ok": true }',
              keywords: [{ en: 'JSON', zh: '一种数据格式' }],
            },
            {
              en: 'Keys are usually strings; values can be strings, numbers, booleans, arrays, or objects.',
              zh: '键通常是字符串；值可以是字符串、数字、布尔值、数组或对象。',
            },
            {
              en: 'JSON is data exchange text, not a replacement for HTML page structure.',
              zh: 'JSON 是数据交换文本，不能替代 HTML 页面结构。',
            },
          ],
        },
        {
          id: 'ch-i-browser-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Practice browser hygiene and find where Edge or Chrome stores site data controls.',
          bodyZh: '练习浏览器卫生习惯，并找到 Edge 或 Chrome 管理网站数据的位置。',
          illustration: 'environment',
          bullets: [
            {
              en: 'Open Downloads with Ctrl + J and confirm the folder path in File Explorer if needed',
              zh: '用 Ctrl + J 打开下载内容，必要时在资源管理器中确认文件夹路径',
            },
            {
              en: 'Bookmark one official documentation page you trust',
              zh: '收藏一个你信任的官方文档页',
            },
            {
              en: 'Open Settings → Privacy and glance at cookies / site data options',
              zh: '打开设置 → 隐私，大致查看 Cookie / 网站数据选项',
            },
            {
              en: 'On a shared PC, sign out of personal accounts when you finish',
              zh: '在共用电脑上，用完后退出个人账户',
            },
          ],
        },
        {
          id: 'ch-i-browser-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'files',
          bullets: [
            {
              en: 'Leaving hundreds of tabs open until the browser crawls.',
              zh: '开几百个标签页直到浏览器卡顿。',
            },
            {
              en: 'Thinking clearing cache deletes your project folders on disk.',
              zh: '以为清除缓存会删掉磁盘上的项目文件夹。',
            },
            {
              en: 'Saving passwords on shared classroom machines.',
              zh: '在共用教室电脑上保存密码。',
            },
          ],
        },
        {
          id: 'ch-i-browser-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'network',
          bullets: [
            {
              en: 'Name one reason a site uses cookies.',
              zh: '说出网站使用 Cookie 的一个原因。',
            },
            {
              en: 'What is an API in one sentence?',
              zh: '用一句话解释什么是 API？',
            },
            {
              en: 'Is JSON only for humans to read, or also for programs?',
              zh: 'JSON 只给人读，还是程序也能用？',
            },
          ],
          noteEn:
            'Answers: remember login or settings; a doorway for programs to request data or actions; both humans and programs use it.',
          noteZh:
            '参考答案：记住登录或设置；程序请求数据或动作的入口；人与程序都能用。',
        },
      ],
    },
  ],
}
