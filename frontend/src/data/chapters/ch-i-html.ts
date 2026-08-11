import type { Chapter } from '../../types/course'

export const chIHtml: Chapter = {
  id: 'html-page-basics',
  titleEn: 'HTML Page Basics',
  titleZh: 'HTML 页面基础',
  summaryEn:
    'Markup versus programs, tags and elements, document shape, and common tags you will see in View Source.',
  summaryZh:
    '标记与程序的区别、标签与元素、文档形状，以及在查看源代码时常见的标签。',
  sections: [
    {
      id: 'markup-idea',
      titleEn: 'Markup Idea',
      titleZh: '标记概念',
      slides: [
        {
          id: 'ch-i-html-title',
          layout: 'title',

          titleEn: 'Part I · HTML Page Basics',
          titleZh: '篇章 I · HTML 页面基础',
          subtitleEn: 'The skeleton behind every web page',
          subtitleZh: '每个网页背后的骨架',
          illustration: 'title',
          keywords: [
            { en: 'HTML', zh: '超文本标记语言' },
            { en: 'Tag', zh: '标签' },
            { en: 'Element', zh: '元素' },
          ],
        },
        {
          id: 'ch-i-html-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will read HTML as structure labels, not as a full programming language you must master today.',
          bodyZh: '你会把 HTML 当作结构标签来读，而不是今天就必须掌握的完整编程语言。',
          illustration: 'code',
          bullets: [
            {
              en: 'Explain HTML as markup that describes page structure.',
              zh: '说明 HTML 是描述页面结构的标记。',
              keywords: [{ en: 'Markup', zh: '标记' }],
            },
            {
              en: 'Recognize tags, elements, attributes, and a basic document shape.',
              zh: '认识标签、元素、属性与基本文档形状。',
            },
            {
              en: 'Name common tags: headings, paragraphs, links, and images.',
              zh: '说出常用标签：标题、段落、链接与图片。',
            },
          ],
        },
        {
          id: 'ch-i-html-what',
          layout: 'text',

          titleEn: 'What HTML Does',
          titleZh: 'HTML 做什么',
          bodyEn:
            'HTML tells the browser what each piece of content is: a title, a heading, a paragraph, a link. It does not compute like Python. Appearance belongs mainly to CSS; interactive behavior belongs mainly to JavaScript. Separating those roles keeps web pages maintainable.',
          bodyZh:
            'HTML 告诉浏览器每段内容是什么：标题、小标题、段落、链接。它不像 Python 那样做计算。外观主要属于 CSS；交互行为主要属于 JavaScript。角色分离让网页更易维护。',
          illustration: 'code',
          bullets: [
            {
              en: 'HTML marks meaning and structure for the browser.',
              zh: 'HTML 为浏览器标记含义与结构。',
              keywords: [{ en: 'HTML', zh: '超文本标记语言' }],
            },
            {
              en: 'CSS styles look; JavaScript adds behavior later in the stack.',
              zh: 'CSS 管外观；JavaScript 在栈的更后层加行为。',
              keywords: [
                { en: 'CSS', zh: '层叠样式表' },
                { en: 'JavaScript', zh: '脚本语言' },
              ],
            },
            {
              en: 'Beginners confuse “pretty page” with “HTML file”; structure and style are different layers.',
              zh: '初学者常把“好看的页面”与“HTML 文件”混为一谈；结构与样式是不同层。',
            },
          ],
        },
        {
          id: 'ch-i-html-tags',
          layout: 'text',

          titleEn: 'Tags and Elements',
          titleZh: '标签与元素',
          bodyEn:
            'A tag lives in angle brackets. An element is usually an opening tag, content, and a closing tag. Attributes add extra facts on the opening tag, such as where a link points.',
          bodyZh:
            '标签写在尖括号里。元素通常由开始标签、内容与结束标签组成。属性在开始标签上补充事实，例如链接指向何处。',
          illustration: 'code',
          bullets: [
            {
              en: 'Example shape: <p>Hello</p> is a paragraph element.',
              zh: '示例形态：<p>Hello</p> 是一个段落元素。',
              keywords: [
                { en: 'Tag', zh: '标签' },
                { en: 'Element', zh: '元素' },
              ],
            },
            {
              en: 'Attributes look like name="value", such as href on a link.',
              zh: '属性形如 name="value"，例如链接上的 href。',
              keywords: [{ en: 'Attribute', zh: '属性' }],
            },
            {
              en: 'Some elements are empty of text content, like img, but still carry attributes.',
              zh: '有些元素没有文本内容，例如 img，但仍可带属性。',
            },
          ],
        },
      ],
    },
    {
      id: 'page-structure',
      titleEn: 'Page Structure',
      titleZh: '页面结构',
      slides: [
        {
          id: 'ch-i-html-document',
          layout: 'text',

          titleEn: 'Document Shape',
          titleZh: '文档形状',
          bodyEn:
            'A typical document wraps everything in html, then splits into head and body. The head holds metadata such as the title tab text. The body holds what users see. Browsers forgive many mistakes, but a clean shape makes View Source easier to learn from.',
          bodyZh:
            '典型文档用 html 包住一切，再分成 head 与 body。head 放元数据，例如标签页标题文字。body 放用户看见的内容。浏览器对许多错误很宽容，但清晰形状更利于从源代码学习。',
          illustration: 'files',
          bullets: [
            {
              en: 'head: setup and title; body: visible content.',
              zh: 'head：设置与标题；body：可见内容。',
              keywords: [
                { en: 'head', zh: '头部' },
                { en: 'body', zh: '正文' },
              ],
            },
            {
              en: 'Nesting matters: elements live inside other elements like folders in File Explorer.',
              zh: '嵌套很重要：元素像资源管理器里的文件夹一样层层包含。',
            },
            {
              en: 'Whitespace in source rarely matches exact on-screen spacing; CSS controls much of the look.',
              zh: '源代码空白很少等于屏幕间距；外观多半由 CSS 控制。',
            },
          ],
        },
        {
          id: 'ch-i-html-common',
          layout: 'text',

          titleEn: 'Common Tags',
          titleZh: '常用标签',
          bodyEn:
            'You will meet the same tags on almost every page. Headings outline hierarchy, paragraphs carry prose, anchors create links, and images embed media. Learning their names helps you navigate View Source and the Elements panel.',
          bodyZh:
            '几乎每个页面都会见到相同标签。标题勾勒层级，段落承载正文，锚点创建链接，图片嵌入媒体。记住名称有助于浏览源代码与元素面板。',
          illustration: 'code',
          bullets: [
            {
              en: 'h1–h6 for headings; p for paragraphs.',
              zh: 'h1–h6 表示标题；p 表示段落。',
              keywords: [
                { en: 'Heading', zh: '标题' },
                { en: 'Paragraph', zh: '段落' },
              ],
            },
            {
              en: 'a with href creates a hyperlink to another URL.',
              zh: '带 href 的 a 可超链接到其他网址。',
              keywords: [{ en: 'Link', zh: '链接' }],
            },
            {
              en: 'img shows an image; alt describes it for accessibility and broken-image cases.',
              zh: 'img 显示图片；alt 在无障碍与图片失效时描述图片。',
              keywords: [{ en: 'alt', zh: '替代文本' }],
            },
          ],
        },
        {
          id: 'ch-i-html-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Read real HTML from a simple public page in Edge or Chrome. You are looking at the same language the server sent.',
          bodyZh:
            '在 Edge 或 Chrome 中阅读简单公开页面的真实 HTML。你看到的就是服务器发来的同一种语言。',
          illustration: 'code',
          bullets: [
            {
              en: 'Open https://example.com in Edge or Chrome',
              zh: '在 Edge 或 Chrome 中打开 https://example.com',
            },
            {
              en: 'Right-click → View page source',
              zh: '右键 → 查看网页源代码',
              keywords: [{ en: 'View Source', zh: '查看源代码' }],
            },
            {
              en: 'Search for <title>, <h1>, and <a href=',
              zh: '搜索 <title>、<h1> 与 <a href=',
            },
            {
              en: 'Count how many p or heading tags you can spot',
              zh: '数一数能看到多少 p 或标题标签',
            },
          ],
        },
        {
          id: 'ch-i-html-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'code',
          bullets: [
            {
              en: 'Thinking HTML is a full programming language like Python.',
              zh: '以为 HTML 是像 Python 一样的完整编程语言。',
            },
            {
              en: 'Confusing page look (CSS) with page structure (HTML).',
              zh: '把页面外观（CSS）和页面结构（HTML）搞混。',
            },
            {
              en: 'Ignoring alt text when reading image tags in source.',
              zh: '读源代码时忽略图片标签上的 alt 文本。',
            },
          ],
        },
        {
          id: 'ch-i-html-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'code',
          bullets: [
            {
              en: 'What is HTML mainly for?',
              zh: 'HTML 主要做什么？',
            },
            {
              en: 'Where does visible page content usually live?',
              zh: '可见页面内容通常放在哪里？',
            },
            {
              en: 'Which attribute sets a link destination?',
              zh: '哪个属性设置链接目标？',
            },
          ],
          noteEn: 'Answers: page structure/markup; body; href.',
          noteZh: '参考答案：页面结构/标记；body；href。',
        },
      ],
    },
  ],
}
