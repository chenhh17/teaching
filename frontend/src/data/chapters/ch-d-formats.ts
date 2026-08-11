import type { Chapter } from '../../types/course'

export const chDFormats: Chapter = {
  id: 'file-formats-coders',
  titleEn: 'File Formats for Coders',
  titleZh: '编程常见文件格式',
  summaryEn: 'Meet .txt .py .csv .json .zip .exe .jpg and show extensions in Explorer.',
  summaryZh: '认识 .txt .py .csv .json .zip .exe .jpg，并在资源管理器中显示扩展名。',
  sections: [
    {
      id: 'why-formats',
      titleEn: 'Why Formats Matter',
      titleZh: '为什么格式重要',
      slides: [
        {
          id: 'ch-d-formats-title',
          layout: 'title',

          titleEn: 'Part D · File Formats for Coders',
          titleZh: '篇章 D · 编程常见文件格式',
          subtitleEn: 'Know the files beginners meet every week',
          subtitleZh: '认识初学者每周都会遇到的文件',
          keywords: [
            { en: 'Format', zh: '格式' },
            { en: 'Extension', zh: '扩展名' },
            { en: 'File Explorer', zh: '文件资源管理器' },
          ],
        },
        {
          id: 'ch-d-formats-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Extensions are short labels for format. Learn the formats you will open, edit, zip, and avoid double-clicking carelessly.',
          bodyZh:
            '扩展名是格式的短标签。学会你将打开、编辑、压缩，以及不该随意双击的常见格式。',
          bullets: [
            {
              en: 'Recognize common coder file extensions on sight.',
              zh: '一眼认出常见编程相关扩展名。',
            },
            {
              en: 'Keep file name extensions visible in File Explorer.',
              zh: '在文件资源管理器中保持显示扩展名。',
            },
            {
              en: 'Choose the right tool for text, data, images, and installers.',
              zh: '为文本、数据、图片与安装程序选择合适工具。',
            },
          ],
        },
        {
          id: 'ch-d-formats-extension',
          layout: 'text',

          titleEn: 'Extension Means Format Hint',
          titleZh: '扩展名提示格式',
          bodyEn:
            'The characters after the final dot hint at the format: report.txt is text, script.py is Python, photo.jpg is an image. Windows uses the extension to choose a default app.',
          bodyZh:
            '最后一个点后面的字符提示格式：report.txt 是文本，script.py 是 Python，photo.jpg 是图片。Windows 用扩展名选择默认应用。',
          bullets: [
            {
              en: 'Always show extensions so you see the real ending.',
              zh: '始终显示扩展名，才能看见真实结尾。',
              keywords: [{ en: 'Extension', zh: '扩展名' }],
            },
            {
              en: 'Changing only the extension does not convert the real format.',
              zh: '只改扩展名并不会真正转换格式。',
              keywords: [{ en: 'Format', zh: '格式' }],
            },
            {
              en: 'Fake double extensions are a common social-engineering trick.',
              zh: '双重假扩展名是常见的社工骗术。',
            },
          ],
        },
        {
          id: 'ch-d-formats-text',
          layout: 'text',

          titleEn: 'Text and Code Files',
          titleZh: '文本与代码文件',
          bodyEn:
            'Beginners live in text formats. .txt is plain notes. .py is Python source. Later you will also see .md for Markdown notes and .html for web pages.',
          bodyZh:
            '初学者大量接触文本格式。.txt 是纯文本笔记。.py 是 Python 源码。之后还会见到 Markdown 的 .md 与网页的 .html。',
          bullets: [
            {
              en: 'Open .txt and .py in an editor such as Cursor or Notepad.',
              zh: '用 Cursor 或记事本等编辑器打开 .txt 与 .py。',
            },
            {
              en: 'Do not trust a random .py from the internet without reading it.',
              zh: '不要不经阅读就信任网上下来的随机 .py。',
            },
            {
              en: 'Save class code with a clear name ending in .py.',
              zh: '课堂代码用清晰名称保存，并以 .py 结尾。',
            },
          ],
        },
      ],
    },
    {
      id: 'data-and-packages',
      titleEn: 'Data and Packages',
      titleZh: '数据与打包文件',
      slides: [
        {
          id: 'ch-d-formats-data',
          layout: 'text',

          titleEn: 'CSV and JSON',
          titleZh: 'CSV 与 JSON',
          bodyEn:
            'CSV stores tables as plain text with commas. JSON stores structured data with braces and quotes. Both are common in homework and APIs.',
          bodyZh:
            'CSV 用逗号把表格存成纯文本。JSON 用花括号与引号存储结构化数据。两者在作业与接口中都很常见。',
          bullets: [
            {
              en: '.csv opens in Excel and in text editors.',
              zh: '.csv 可用 Excel 与文本编辑器打开。',
              keywords: [{ en: 'CSV', zh: '逗号分隔值' }],
            },
            {
              en: '.json should stay UTF-8 and carefully quoted.',
              zh: '.json 应保持 UTF-8，并仔细使用引号。',
              keywords: [{ en: 'JSON', zh: 'JSON 数据' }],
            },
            {
              en: 'Do not rename .csv to .xlsx and expect a real Excel workbook.',
              zh: '不要把 .csv 改名为 .xlsx 就以为变成了真正的 Excel 工作簿。',
            },
          ],
        },
        {
          id: 'ch-d-formats-zip',
          layout: 'text',

          titleEn: 'ZIP Archives',
          titleZh: 'ZIP 压缩包',
          bodyEn:
            'A .zip file packages many files into one archive for upload or backup. Extract it before you try to edit the contents. Windows can open zip folders natively.',
          bodyZh:
            '.zip 把多个文件打成一个压缩包，便于上传或备份。编辑内容前先解压。Windows 可直接打开 zip 文件夹。',
          bullets: [
            {
              en: 'Right-click → Extract All for a clear unpacked folder.',
              zh: '右键 → 全部提取，得到清晰的解压文件夹。',
            },
            {
              en: 'Submit a zip only when the assignment asks for one.',
              zh: '仅在作业要求时再提交 zip。',
              keywords: [{ en: 'ZIP', zh: '压缩包' }],
            },
            {
              en: 'Scan unexpected zip attachments before opening.',
              zh: '打开意外的 zip 附件前先提高警惕。',
            },
          ],
        },
        {
          id: 'ch-d-formats-exe',
          layout: 'text',

          titleEn: 'EXE and Installers',
          titleZh: 'EXE 与安装程序',
          bodyEn:
            'An .exe file is a Windows program or installer. Double-clicking runs code with real power. Only run exe files from trusted course or vendor sources.',
          bodyZh:
            '.exe 是 Windows 程序或安装程序。双击即运行具有实际权限的代码。只运行来自可信课程或厂商来源的 exe。',
          bullets: [
            {
              en: 'Homework is rarely a random exe emailed by a stranger.',
              zh: '作业很少是陌生人邮件里的随机 exe。',
              keywords: [{ en: 'EXE', zh: '可执行文件' }],
            },
            {
              en: 'UAC may ask before an installer changes the system.',
              zh: '安装程序更改系统前，UAC 可能会询问。',
            },
            {
              en: 'Prefer Microsoft Store or teacher links when available.',
              zh: '有微软商店或教师链接时优先使用。',
            },
          ],
        },
        {
          id: 'ch-d-formats-images',
          layout: 'text',

          titleEn: 'Images You Will Meet',
          titleZh: '你会遇到的图片',
          bodyEn:
            'JPG and PNG are common image formats for screenshots and photos. They are not source code. Keep screenshots in an images folder inside the project when needed.',
          bodyZh:
            'JPG 与 PNG 是截图和照片的常见格式。它们不是源代码。需要时把截图放在项目内的 images 文件夹。',
          bullets: [
            {
              en: '.jpg or .jpeg is common for photos.',
              zh: '.jpg 或 .jpeg 常用于照片。',
            },
            {
              en: '.png is common for screenshots with sharp text.',
              zh: '.png 常用于文字清晰的截图。',
            },
            {
              en: 'Do not rename .jpg to .py and expect Python to run it.',
              zh: '不要把 .jpg 改名为 .py 就指望 Python 能运行。',
            },
          ],
        },
      ],
    },
    {
      id: 'practice',
      titleEn: 'Practice',
      titleZh: '练习',
      slides: [
        {
          id: 'ch-d-formats-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Make extensions visible and create three tiny sample files with correct endings.',
          bodyZh: '打开扩展名显示，并创建三个扩展名正确的小样例文件。',
          bullets: [
            {
              en: 'In File Explorer enable View → Show → File name extensions.',
              zh: '在文件资源管理器启用 查看 → 显示 → 文件扩展名。',
            },
            {
              en: 'Create notes.txt, sample.py, and data.csv in your projects folder.',
              zh: '在 projects 文件夹中创建 notes.txt、sample.py 与 data.csv。',
            },
            {
              en: 'Confirm each file opens with an appropriate app or editor.',
              zh: '确认每个文件都能用合适的应用或编辑器打开。',
            },
          ],
        },
        {
          id: 'ch-d-formats-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Hiding extensions and creating notes.txt.txt by accident.',
              zh: '隐藏扩展名后，不小心建成 notes.txt.txt。',
            },
            {
              en: 'Double-clicking unknown .exe files from Downloads.',
              zh: '双击“下载”里不明来源的 .exe。',
            },
            {
              en: 'Editing files inside a zip without extracting them first.',
              zh: '不解压就直接在 zip 里编辑文件。',
            },
          ],
        },
        {
          id: 'ch-d-formats-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'Which extension usually marks Python source?',
              zh: '哪个扩展名通常表示 Python 源码？',
            },
            {
              en: 'What should you do before editing files from a .zip?',
              zh: '编辑 .zip 中的文件前应做什么？',
            },
            {
              en: 'Why is a random .exe dangerous to open?',
              zh: '为什么随意打开不明 .exe 很危险？',
            },
          ],
          noteEn: 'Answers: .py; extract first; it runs a program with system power.',
          noteZh: '参考答案：.py；先解压；它会以系统权限运行程序。',
        },
      ],
    },
  ],
}
