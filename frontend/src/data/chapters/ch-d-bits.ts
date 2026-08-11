import type { Chapter } from '../../types/course'

export const chDBits: Chapter = {
  id: 'bits-bytes-encoding',
  titleEn: 'Bits, Bytes, and Encoding',
  titleZh: '比特、字节与编码',
  summaryEn: 'Bit and byte, size units, text encoding, UTF-8, and garbled text.',
  summaryZh: '比特与字节、大小单位、文本编码、UTF-8 与乱码。',
  sections: [
    {
      id: 'bits-and-sizes',
      titleEn: 'Bits and Sizes',
      titleZh: '比特与大小',
      slides: [
        {
          id: 'ch-d-bits-title',
          layout: 'title',

          titleEn: 'Part D · Bits, Bytes, and Encoding',
          titleZh: '篇章 D · 比特、字节与编码',
          subtitleEn: 'How computers measure and store text',
          subtitleZh: '电脑如何度量并保存文本',
          keywords: [
            { en: 'Bit', zh: '比特' },
            { en: 'Byte', zh: '字节' },
            { en: 'Encoding', zh: '编码' },
          ],
        },
        {
          id: 'ch-d-bits-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Files are not magic. They are bits arranged by rules. Learn size units and why Chinese text can look correct in one program and broken in another.',
          bodyZh:
            '文件不是魔法，而是按规则排列的比特。学会大小单位，并理解中文为何在一个程序里正常、在另一个里变成乱码。',
          bullets: [
            {
              en: 'Define bit and byte in beginner language.',
              zh: '用入门语言定义比特与字节。',
            },
            {
              en: 'Read common size units from KB to GB.',
              zh: '读懂从 KB 到 GB 的常见大小单位。',
            },
            {
              en: 'Explain why UTF-8 matters for school work with Chinese text.',
              zh: '解释为何含中文的作业需要 UTF-8。',
            },
          ],
        },
        {
          id: 'ch-d-bits-binary',
          layout: 'text',

          titleEn: 'Bits: On or Off',
          titleZh: '比特：开或关',
          bodyEn:
            'A bit is the smallest unit of digital information. It is either 0 or 1. Computers build numbers, text, images, and programs from huge numbers of bits.',
          bodyZh:
            '比特是数字信息的最小单位，只能是 0 或 1。电脑用海量比特构成数字、文本、图像与程序。',
          bullets: [
            {
              en: 'Bit means binary digit.',
              zh: 'Bit 的意思是二进制位。',
              keywords: [{ en: 'Bit', zh: '比特' }],
            },
            {
              en: 'You do not count bits by hand; tools report file sizes for you.',
              zh: '你不必手算比特；工具会替你报告文件大小。',
            },
            {
              en: 'Everything on disk is ultimately bits, including your homework.',
              zh: '磁盘上的一切最终都是比特，包括你的作业。',
            },
          ],
        },
        {
          id: 'ch-d-bits-byte',
          layout: 'text',

          titleEn: 'Bytes and File Size',
          titleZh: '字节与文件大小',
          bodyEn:
            'A byte is a group of 8 bits. File Explorer shows size in bytes and larger units. A short text file may be a few hundred bytes; a video may be many gigabytes.',
          bodyZh:
            '一个字节是 8 个比特。文件资源管理器以字节及更大单位显示大小。短文本可能只有几百字节；视频可能有许多 GB。',
          bullets: [
            {
              en: '1 byte = 8 bits.',
              zh: '1 字节 = 8 比特。',
              keywords: [{ en: 'Byte', zh: '字节' }],
            },
            {
              en: 'Right-click a file → Properties to see exact size.',
              zh: '右键文件 → 属性 可查看精确大小。',
            },
            {
              en: 'Size on disk can differ slightly from logical size.',
              zh: '占用空间可能与逻辑大小略有不同。',
            },
          ],
        },
      ],
    },
    {
      id: 'units-and-encoding',
      titleEn: 'Units and Encoding',
      titleZh: '单位与编码',
      slides: [
        {
          id: 'ch-d-bits-units',
          layout: 'text',

          titleEn: 'KB, MB, GB',
          titleZh: 'KB、MB、GB',
          bodyEn:
            'Common units grow by roughly one thousand each step in everyday Windows labels: KB, MB, GB, TB. Exact binary powers matter later; for class, focus on order of magnitude.',
          bodyZh:
            '日常 Windows 标签中，常见单位大约每级大一千倍：KB、MB、GB、TB。精确的二进制幂以后再学；课堂上先抓住数量级。',
          bullets: [
            {
              en: 'KB is small documents; MB is photos or short audio; GB is apps or video.',
              zh: 'KB 级是小文档；MB 级是照片或短音频；GB 级是应用或视频。',
            },
            {
              en: 'USB sticks and disks advertise capacity in GB or TB.',
              zh: 'U 盘与硬盘容量常以 GB 或 TB 标示。',
            },
            {
              en: 'If a download is 1.2 GB, check free space before saving.',
              zh: '若下载大小是 1.2 GB，保存前先检查剩余空间。',
            },
          ],
        },
        {
          id: 'ch-d-bits-encoding',
          layout: 'text',

          titleEn: 'Text Needs an Encoding',
          titleZh: '文本需要编码',
          bodyEn:
            'Bytes are numbers. Encoding rules map those numbers to characters. If the writer and the reader use different encodings, Chinese text can become garbled.',
          bodyZh:
            '字节是数字。编码规则把数字映射成字符。若写入与读取使用不同编码，中文就可能变成乱码。',
          bullets: [
            {
              en: 'Encoding is the agreement about what bytes mean.',
              zh: '编码是关于字节含义的约定。',
              keywords: [{ en: 'Encoding', zh: '编码' }],
            },
            {
              en: 'ASCII covers basic English letters and digits.',
              zh: 'ASCII 覆盖基本英文字母与数字。',
              keywords: [{ en: 'ASCII', zh: 'ASCII 编码' }],
            },
            {
              en: 'Chinese and many world languages need a broader encoding.',
              zh: '中文与多种世界语言需要更宽的编码。',
            },
          ],
        },
        {
          id: 'ch-d-bits-utf8',
          layout: 'text',

          titleEn: 'UTF-8 for Modern Work',
          titleZh: '现代工作用 UTF-8',
          bodyEn:
            'UTF-8 is the default encoding for most modern editors, web pages, and Python tools. Prefer UTF-8 for class notes, source code, and CSV files that contain Chinese.',
          bodyZh:
            'UTF-8 是多数现代编辑器、网页与 Python 工具的默认编码。含中文的课堂笔记、源代码与 CSV，请优先使用 UTF-8。',
          bullets: [
            {
              en: 'In Cursor or Notepad, check the encoding shown for the file.',
              zh: '在 Cursor 或记事本中，查看文件显示的编码。',
              keywords: [{ en: 'UTF-8', zh: 'UTF-8 编码' }],
            },
            {
              en: 'Save as UTF-8 when a tool offers a choice.',
              zh: '工具提供选择时，保存为 UTF-8。',
            },
            {
              en: 'Legacy GBK or ANSI labels can still appear on older Windows tools.',
              zh: '旧版 Windows 工具仍可能出现 GBK 或 ANSI 标签。',
            },
          ],
        },
        {
          id: 'ch-d-bits-mojibake',
          layout: 'text',

          titleEn: 'When Text Looks Broken',
          titleZh: '文字看起来坏了时',
          bodyEn:
            'Garbled text usually means the wrong encoding was used to open a correct file. Re-open with UTF-8 or the encoding your teacher specifies before you rewrite the content.',
          bodyZh:
            '乱码通常表示用错误编码打开了本来正确的文件。先用 UTF-8 或教师指定的编码重新打开，再决定是否重写内容。',
          bullets: [
            {
              en: 'Do not keep saving over a file while it is displayed wrongly.',
              zh: '显示错误时不要反复覆盖保存。',
            },
            {
              en: 'Ask which encoding the assignment expects if Chinese breaks.',
              zh: '中文异常时，先问作业要求哪种编码。',
            },
            {
              en: 'CSV exports from Excel sometimes need an explicit UTF-8 choice.',
              zh: '从 Excel 导出 CSV 时，有时需要明确选择 UTF-8。',
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
          id: 'ch-d-bits-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Compare file sizes and confirm a text file can save Chinese as UTF-8.',
          bodyZh: '比较文件大小，并确认文本文件能以 UTF-8 保存中文。',
          bullets: [
            {
              en: 'Create a Notepad file with one English line and check Properties size.',
              zh: '用记事本创建只有一行英文的文件，并查看属性中的大小。',
            },
            {
              en: 'Add a Chinese sentence, save as UTF-8, and compare the new size.',
              zh: '加入一句中文，保存为 UTF-8，再比较新的大小。',
            },
            {
              en: 'In File Explorer, sort a folder by Size and notice which files are largest.',
              zh: '在文件资源管理器中按大小排序，观察哪些文件最大。',
            },
          ],
        },
        {
          id: 'ch-d-bits-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Thinking a file is “empty” because Explorer rounds a tiny size to 0 KB.',
              zh: '因为资源管理器把很小的大小显示成 0 KB，就以为文件是空的。',
            },
            {
              en: 'Saving Chinese text with the wrong encoding, then overwriting the good copy.',
              zh: '用错误编码保存中文，并覆盖了正确副本。',
            },
            {
              en: 'Confusing bits with bytes when reading internet speed or disk ads.',
              zh: '看网速或硬盘广告时，把比特与字节搞混。',
            },
          ],
        },
        {
          id: 'ch-d-bits-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'How many bits are in one byte?',
              zh: '一个字节有多少比特？',
            },
            {
              en: 'Which encoding should most modern class files use?',
              zh: '多数现代课程文件应使用哪种编码？',
            },
            {
              en: 'What usually causes Chinese garbled text?',
              zh: '中文乱码通常由什么引起？',
            },
          ],
          noteEn: 'Answers: 8; UTF-8; opening or saving with the wrong encoding.',
          noteZh: '参考答案：8；UTF-8；用错误编码打开或保存。',
        },
      ],
    },
  ],
}
