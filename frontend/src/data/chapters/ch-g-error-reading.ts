import type { Chapter } from '../../types/course'

export const chGErrorReading: Chapter = {
  id: 'reading-errors-deep',
  titleEn: 'Reading Errors Deeply',
  titleZh: '深入阅读报错',
  summaryEn:
    'Map a Python traceback, read bottom-first, and turn error patterns into concrete Windows actions.',
  summaryZh:
    '读懂 Python traceback 结构，自下而上阅读，并把错误模式变成具体的 Windows 行动。',
  sections: [
    {
      id: 'traceback-map',
      titleEn: 'The Traceback Map',
      titleZh: 'Traceback 地图',
      slides: [
        {
          id: 'ch-g-error-reading-title',
          layout: 'title',

          titleEn: 'Part G · Reading Errors Deeply',
          titleZh: '篇章 G · 深入阅读报错',
          subtitleEn: 'The last lines usually point to the next action',
          subtitleZh: '最后几行通常指向下一步行动',
          illustration: 'title',
          keywords: [
            { en: 'Traceback', zh: '报错追踪' },
            { en: 'Stack', zh: '调用栈' },
            { en: 'Exception', zh: '异常' },
          ],
        },
        {
          id: 'ch-g-error-reading-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will learn to extract file, line, exception type, and message from a traceback, then choose a first fix that matches the pattern.',
          bodyZh:
            '你将学会从 traceback 中提取文件、行号、异常类型与信息，再按模式选择第一步修复。',
          bullets: [
            {
              en: 'Read a traceback from the bottom upward.',
              zh: '自下而上阅读 traceback。',
            },
            {
              en: 'Separate your code lines from library lines.',
              zh: '区分你的代码行与库代码行。',
            },
            {
              en: 'Match common patterns to likely causes on Windows.',
              zh: '把常见模式对应到 Windows 上的可能原因。',
            },
            {
              en: 'Turn the reading into one testable action.',
              zh: '把阅读结果变成一个可验证的行动。',
            },
          ],
        },
        {
          id: 'ch-g-error-reading-parts',
          layout: 'text',

          titleEn: 'Parts of a Traceback',
          titleZh: 'Traceback 的组成部分',
          bodyEn:
            'A traceback is a story of calls that led to failure. It lists files and lines from earlier calls down to the final exception. You do not need every middle frame on day one; you do need the ending.',
          bodyZh:
            'traceback 是通向失败的调用故事。它从上到下列出文件与行号，直到最终异常。第一天不必读懂每一帧，但必须看懂结尾。',
          bullets: [
            {
              en: 'Header: Traceback (most recent call last).',
              zh: '标题：Traceback（最近调用在最后）。',
            },
            {
              en: 'Frames: File path, line number, and code snippet.',
              zh: '帧：文件路径、行号与代码片段。',
              keywords: [{ en: 'Frame', zh: '栈帧' }],
            },
            {
              en: 'Tail: ExceptionType: message.',
              zh: '尾部：ExceptionType: 说明文字。',
              keywords: [{ en: 'Message', zh: '错误信息' }],
            },
          ],
        },
        {
          id: 'ch-g-error-reading-bottom-first',
          layout: 'text',

          titleEn: 'Read Bottom First',
          titleZh: '先看底部',
          bodyEn:
            'Beginners often start at the top and get lost in library frames. Start at the final exception line, then find the nearest frame that points to your `.py` file under a path you recognize, such as `C:\\Users\\...\\projects\\`.',
          bodyZh:
            '初学者常从顶部读起，淹没在库代码帧里。先看最终异常行，再找最近指向你认识路径下 `.py` 文件的帧，例如 `C:\\Users\\...\\projects\\`。',
          bullets: [
            {
              en: 'Exception type tells the category of failure.',
              zh: '异常类型告诉你失败类别。',
            },
            {
              en: 'Message often names the missing file, module, or key.',
              zh: '信息常指出缺失的文件、模块或键。',
            },
            {
              en: 'Your project path is more useful than site-packages paths.',
              zh: '你的项目路径比 site-packages 路径更有用。',
              keywords: [{ en: 'site-packages', zh: '第三方包目录' }],
            },
          ],
          illustration: 'code',
        },
      ],
    },
    {
      id: 'pattern-to-action',
      titleEn: 'From Pattern to Action',
      titleZh: '从模式到行动',
      slides: [
        {
          id: 'ch-g-error-reading-patterns',
          layout: 'text',

          titleEn: 'Frequent Patterns and Likely Causes',
          titleZh: '常见模式与可能原因',
          bodyEn:
            'Pattern recognition speeds repair. The same exception type can still have different causes, so treat this table as a first hypothesis, not a final verdict.',
          bodyZh:
            '模式识别能加快修复。同一异常类型仍可能有不同原因，因此把下表当作第一假设，而不是最终结论。',
          bullets: [
            {
              en: 'SyntaxError near a colon or quote: punctuation mismatch.',
              zh: '冒号或引号附近的 SyntaxError：标点不匹配。',
              keywords: [{ en: 'SyntaxError', zh: '语法错误' }],
            },
            {
              en: 'IndentationError: mix of spaces/tabs or bad nest level.',
              zh: 'IndentationError：空格/Tab 混用或缩进层级错误。',
              keywords: [{ en: 'IndentationError', zh: '缩进错误' }],
            },
            {
              en: 'ModuleNotFoundError: package not installed in this environment.',
              zh: 'ModuleNotFoundError：当前环境未安装该包。',
            },
            {
              en: 'FileNotFoundError: relative path depends on current folder.',
              zh: 'FileNotFoundError：相对路径取决于当前文件夹。',
            },
          ],
        },
        {
          id: 'ch-g-error-reading-isolate',
          layout: 'text',

          titleEn: 'Prove the Line Before Big Rewrites',
          titleZh: '大改之前先证明问题行',
          bodyEn:
            'Once you have a candidate line, prove it. Temporarily print nearby values, simplify the expression, or move the risky call into a three-line test file. Large rewrites without proof often hide the original clue.',
          bodyZh:
            '锁定候选行后先证明它。临时打印附近的值、简化表达式，或把风险调用挪到三行测试文件。没有证据的大改写常会掩盖原来的线索。',
          bullets: [
            {
              en: 'Ask: what value did I expect on this line?',
              zh: '问：这行我期望的值是什么？',
            },
            {
              en: 'Ask: what value did Python actually see?',
              zh: '问：Python 实际看到的值是什么？',
            },
            {
              en: 'Keep the failing command identical while you test.',
              zh: '测试时保持失败命令不变。',
            },
          ],
        },
        {
          id: 'ch-g-error-reading-ask',
          layout: 'text',

          titleEn: 'Share Errors So Others Can Help',
          titleZh: '分享报错以便他人帮助',
          bodyEn:
            'When you paste a traceback, keep the full final exception and the frames that mention your files. Redact passwords and personal paths if needed, but do not crop away the line number.',
          bodyZh:
            '粘贴 traceback 时，保留完整最终异常，以及提到你文件的帧。必要时可遮盖密码与个人路径，但不要裁掉行号。',
          bullets: [
            {
              en: 'Paste text rather than a blurry phone photo when possible.',
              zh: '尽量粘贴文本，而不是模糊手机照片。',
            },
            {
              en: 'State whether the error happens every run or only sometimes.',
              zh: '说明错误是每次都出现，还是偶尔出现。',
            },
            {
              en: 'Mention Python version from `py --version`.',
              zh: '注明 `py --version` 的 Python 版本。',
            },
          ],
        },
        {
          id: 'ch-g-error-reading-try',
          layout: 'steps',
          titleEn: 'Try It: Annotate One Traceback',
          titleZh: '动手：标注一份 Traceback',
          bodyEn:
            'Use any failing script from class, or intentionally break a small file.',
          bodyZh: '使用课堂任一失败脚本，或故意弄坏一个小文件。',
          bullets: [
            {
              en: 'Run the script in PowerShell with `py`.',
              zh: '在 PowerShell 里用 `py` 运行脚本。',
            },
            {
              en: 'Copy the traceback into Notepad.',
              zh: '把 traceback 复制到记事本。',
            },
            {
              en: 'Highlight exception type, message, file, and line.',
              zh: '标出异常类型、信息、文件与行号。',
            },
            {
              en: 'Write one hypothesis sentence under the paste.',
              zh: '在粘贴内容下写一句假设。',
            },
            {
              en: 'Test that hypothesis with one edit, then re-run.',
              zh: '用一次修改验证假设，再重新运行。',
            },
          ],
        },
        {
          id: 'ch-g-error-reading-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Avoid these reading habits; they create false confidence.',
          bodyZh: '避免这些阅读习惯，它们会造成虚假自信。',
          bullets: [
            {
              en: 'Reading only the first frame and ignoring the exception line.',
              zh: '只看第一帧，忽略异常行。',
            },
            {
              en: 'Editing library files under site-packages.',
              zh: '去改 site-packages 里的库文件。',
            },
            {
              en: 'Treating warnings as crashes without checking if the program finished.',
              zh: '没确认程序是否结束，就把警告当成崩溃。',
              keywords: [{ en: 'Warning', zh: '警告' }],
            },
            {
              en: 'Searching only Chinese machine translation of a unique error code.',
              zh: '只搜索某条独特错误码的机器翻译中文。',
            },
          ],
        },
        {
          id: 'ch-g-error-reading-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Confirm you can navigate a traceback without guessing.',
          bodyZh: '确认你能不靠瞎猜导航一份 traceback。',
          bullets: [
            {
              en: 'Where do you look first in a long traceback?',
              zh: '面对很长的 traceback，你先看哪里？',
            },
            {
              en: 'Which path frames are usually less useful for beginners?',
              zh: '对初学者来说，哪些路径帧通常用处较小？',
            },
            {
              en: 'Name two fields you should extract before fixing.',
              zh: '说出修复前应提取的两个字段。',
            },
          ],
          noteEn:
            'Answers: exception/bottom first; site-packages/library frames; type+message and file:line at minimum.',
          noteZh:
            '参考：先看异常/底部；库与 site-packages 帧通常次要；至少提取类型+信息以及文件:行号。',
        },
      ],
    },
  ],
}
