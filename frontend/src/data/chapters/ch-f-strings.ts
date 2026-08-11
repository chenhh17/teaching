import type { Chapter } from '../../types/course'

export const chFStrings: Chapter = {
  id: 'strings-in-python',
  titleEn: 'Strings in Python',
  titleZh: 'Python 中的字符串',
  summaryEn:
    'Create and slice strings, use helpful methods, format text lightly, and practice with py on Windows using UTF-8 files.',
  summaryZh:
    '创建与切片字符串，使用常用方法，轻量格式化文本，并在 Windows 上用 UTF-8 文件与 py 练习。',
  sections: [
    {
      id: 'string-basics',
      titleEn: 'String Basics',
      titleZh: '字符串基础',
      slides: [
        {
          id: 'ch-f-strings-title',
          layout: 'title',

          titleEn: 'Part F · Strings in Python',
          titleZh: '篇章 F · Python 中的字符串',
          subtitleEn: 'Text is data you can cut, join, and clean',
          subtitleZh: '文本也是数据：可切割、拼接与清理',
          illustration: 'title',
          keywords: [
            { en: 'str', zh: '字符串' },
            { en: 'Slice', zh: '切片' },
            { en: 'UTF-8', zh: 'UTF-8 编码' },
          ],
        },
        {
          id: 'ch-f-strings-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Almost every program touches text: names, paths, messages, and file contents. Learn to create strings, index them carefully, and clean them with a few reliable methods.',
          bodyZh:
            '几乎每个程序都会处理文本：姓名、路径、消息与文件内容。学会创建字符串、谨慎索引，并用少数可靠方法清理它们。',
          bullets: [
            {
              en: 'Create strings with quotes and print them.',
              zh: '用引号创建字符串并打印。',
            },
            {
              en: 'Index and slice without guessing off-by-one results.',
              zh: '进行索引与切片，避免凭感觉造成差一错误。',
            },
            {
              en: 'Use methods such as strip, lower, and replace.',
              zh: '使用 strip、lower、replace 等方法。',
            },
          ],
        },
        {
          id: 'ch-f-strings-create',
          layout: 'text',

          titleEn: 'Creating Strings',
          titleZh: '创建字符串',
          bodyEn:
            'Strings are text inside quotes. Single quotes and double quotes both work as long as they match. For Chinese course text on Windows, save the .py file as UTF-8 so characters survive editing and running under py.',
          bodyZh:
            '字符串是引号中的文本。单引号与双引号都可以，只要配对。在 Windows 上处理中文课程文本时，请将 .py 保存为 UTF-8，以便在编辑与 py 运行时字符不丢失。',
          bullets: [
            {
              en: 'message = "Hello" or message = \'Hello\'',
              zh: 'message = "Hello" 或 message = \'Hello\'',
              keywords: [{ en: 'Quotes', zh: '引号' }],
            },
            {
              en: 'Concatenation: "Hi, " + name',
              zh: '拼接："Hi, " + name',
              keywords: [{ en: 'Concatenation', zh: '拼接' }],
            },
            {
              en: 'f-strings: f"Hi, {name}" for readable formatting.',
              zh: 'f-string：f"Hi, {name}"，格式化更易读。',
              keywords: [{ en: 'f-string', zh: 'f-string 格式化' }],
            },
          ],
        },
        {
          id: 'ch-f-strings-slice',
          layout: 'text',

          titleEn: 'Index and Slice',
          titleZh: '索引与切片',
          bodyEn:
            'Python counts from zero. text[0] is the first character. A slice text[1:4] starts at index 1 and stops before index 4. Negative indexes count from the end: text[-1] is the last character.',
          bodyZh:
            'Python 从零开始计数。text[0] 是第一个字符。切片 text[1:4] 从索引 1 开始，到索引 4 之前结束。负索引从末尾计数：text[-1] 是最后一个字符。',
          bullets: [
            {
              en: 'len(text) returns the number of characters.',
              zh: 'len(text) 返回字符个数。',
              keywords: [{ en: 'len', zh: '长度' }],
            },
            {
              en: 'Slice form: text[start:stop]',
              zh: '切片形式：text[start:stop]',
              keywords: [{ en: 'Slice', zh: '切片' }],
            },
            {
              en: 'IndexError means you asked for a position that does not exist.',
              zh: 'IndexError 表示你访问了不存在的位置。',
              keywords: [{ en: 'IndexError', zh: '索引错误' }],
            },
          ],
        },
      ],
    },
    {
      id: 'methods-and-clean',
      titleEn: 'Methods and Cleaning',
      titleZh: '方法与清理',
      slides: [
        {
          id: 'ch-f-strings-methods',
          layout: 'text',

          titleEn: 'Useful String Methods',
          titleZh: '常用字符串方法',
          bodyEn:
            'Methods are actions attached to a value. They return a new string; they do not silently rewrite the old variable unless you assign the result back. Cleaning user input before comparisons prevents many logic bugs.',
          bodyZh:
            '方法是附着在值上的动作。它们返回新字符串；除非你把结果重新赋值，否则不会悄悄改写旧变量。比较前先清理用户输入，可避免许多逻辑错误。',
          bullets: [
            {
              en: 'strip() removes surrounding spaces and newlines.',
              zh: 'strip() 去掉两端空格与换行。',
              keywords: [{ en: 'strip', zh: '去掉两端空白' }],
            },
            {
              en: 'lower() / upper() normalize case for comparisons.',
              zh: 'lower() / upper() 统一大小写以便比较。',
            },
            {
              en: 'replace("a", "b") substitutes text.',
              zh: 'replace("a", "b") 替换文本。',
              keywords: [{ en: 'replace', zh: '替换' }],
            },
          ],
        },
        {
          id: 'ch-f-strings-windows',
          layout: 'text',

          titleEn: 'Paths and Encoding on Windows',
          titleZh: 'Windows 上的路径与编码',
          bodyEn:
            'Strings often hold Windows paths. Prefer raw ideas like folder = r"C:\\Users\\alex\\projects" or careful escaping. When printing Chinese output looks broken, check file encoding UTF-8 and the terminal font before blaming Python logic.',
          bodyZh:
            '字符串常保存 Windows 路径。可使用 folder = r"C:\\Users\\alex\\projects" 这类原始字符串思路，或仔细转义。若中文输出异常，先检查文件 UTF-8 编码与终端字体，再怀疑 Python 逻辑。',
          bullets: [
            {
              en: 'Backslashes in ordinary strings need care: "C:\\\\Users\\\\alex"',
              zh: '普通字符串中的反斜杠需小心："C:\\\\Users\\\\alex"',
            },
            {
              en: 'Raw strings: r"C:\\Users\\alex\\projects"',
              zh: '原始字符串：r"C:\\Users\\alex\\projects"',
              keywords: [{ en: 'Raw String', zh: '原始字符串' }],
            },
            {
              en: 'Save course files as UTF-8 in Cursor.',
              zh: '在 Cursor 中将课程文件保存为 UTF-8。',
              keywords: [{ en: 'UTF-8', zh: 'UTF-8 编码' }],
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
          id: 'ch-f-strings-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Build a tiny cleaner script and run it with py.',
          bodyZh: '做一个小清理脚本，并用 py 运行。',
          bullets: [
            {
              en: 'Create strings.py with a sample sentence in a variable.',
              zh: '创建 strings.py，用变量保存一句示例句子。',
            },
            {
              en: 'Print len(text), text[0], and text[:5].',
              zh: '打印 len(text)、text[0] 与 text[:5]。',
            },
            {
              en: 'Read input, strip it, lower it, then print an f-string message.',
              zh: '读取 input，strip 与 lower 后，用 f-string 打印消息。',
            },
            {
              en: 'Run: py strings.py from the project folder.',
              zh: '在项目文件夹运行：py strings.py',
            },
          ],
        },
        {
          id: 'ch-f-strings-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Forgetting that slices stop before the end index.',
              zh: '忘记切片在结束索引之前停下。',
            },
            {
              en: 'Calling strip() but not storing the returned string.',
              zh: '调用了 strip() 却没有保存返回的字符串。',
            },
            {
              en: 'Broken Chinese text caused by non-UTF-8 file encoding.',
              zh: '因非 UTF-8 文件编码导致中文乱码。',
            },
          ],
        },
        {
          id: 'ch-f-strings-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What is the first index in a Python string?',
              zh: 'Python 字符串的第一个索引是多少？',
            },
            {
              en: 'What does strip() remove?',
              zh: 'strip() 去掉什么？',
            },
            {
              en: 'Which encoding should course .py files use for Chinese text?',
              zh: '含中文的课程 .py 文件应使用哪种编码？',
            },
          ],
          noteEn: 'Answers: 0; surrounding whitespace; UTF-8',
          noteZh: '参考答案：0；两端空白；UTF-8',
        },
      ],
    },
  ],
}
