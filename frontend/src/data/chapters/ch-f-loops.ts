import type { Chapter } from '../../types/course'

export const chFLoops: Chapter = {
  id: 'decisions-and-loops',
  titleEn: 'Decisions and Loops',
  titleZh: '判断与循环',
  summaryEn:
    'Use if/else, for, and while with tiny examples, respect indentation, and run with py on Windows.',
  summaryZh:
    '用小例子学习 if/else、for 与 while，重视缩进，并在 Windows 上用 py 运行。',
  sections: [
    {
      id: 'goals-and-if',
      titleEn: 'Goals and Decisions',
      titleZh: '目标与判断',
      slides: [
        {
          id: 'ch-f-loops-title',
          layout: 'title',

          titleEn: 'Part F · Decisions and Loops',
          titleZh: '篇章 F · 判断与循环',
          subtitleEn: 'Choose a path, then repeat useful work',
          subtitleZh: '选择一条路径，再重复有用的工作',
          illustration: 'title',
          keywords: [
            { en: 'if', zh: '条件判断' },
            { en: 'for', zh: 'for 循环' },
            { en: 'while', zh: 'while 循环' },
          ],
        },
        {
          id: 'ch-f-loops-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Decisions choose among paths; loops repeat work. In Python, indentation is not decoration: it defines which lines belong to which block.',
          bodyZh:
            '判断用于选择路径；循环用于重复工作。在 Python 中，缩进不是装饰：它定义哪些行属于哪个代码块。',
          bullets: [
            {
              en: 'Write a simple if / else decision.',
              zh: '写出简单的 if / else 判断。',
            },
            {
              en: 'Use for and while for controlled repetition.',
              zh: '用 for 与 while 做受控重复。',
            },
            {
              en: 'Keep consistent indentation of four spaces.',
              zh: '保持一致的四空格缩进。',
              keywords: [{ en: 'Indentation', zh: '缩进' }],
            },
          ],
        },
        {
          id: 'ch-f-loops-if',
          layout: 'text',

          titleEn: 'if, elif, and else',
          titleZh: 'if、elif 与 else',
          bodyEn:
            'An if statement checks a condition. When the condition is True, Python runs the indented block beneath it. elif adds more checks; else covers the remaining case. Compare numbers with <, >, <=, >=, ==, and !=.',
          bodyZh:
            'if 语句检查条件。条件为 True 时，Python 运行其下缩进块。elif 增加更多检查；else 覆盖其余情况。用 <、>、<=、>=、==、!= 比较数值。',
          bullets: [
            {
              en: 'if score >= 60: print("pass")',
              zh: 'if score >= 60: print("pass")',
              keywords: [{ en: 'Condition', zh: '条件' }],
            },
            {
              en: 'Use == for equality tests, not a single =.',
              zh: '相等判断用 ==，不要用单个 =。',
              keywords: [{ en: '==', zh: '相等比较' }],
            },
            {
              en: 'Colon : ends the header line; the next line must indent.',
              zh: '冒号 : 结束标题行；下一行必须缩进。',
            },
          ],
        },
        {
          id: 'ch-f-loops-indent',
          layout: 'text',

          titleEn: 'Indentation Is Structure',
          titleZh: '缩进就是结构',
          bodyEn:
            'Python uses indentation to show belonging. Mixing tabs and spaces, or forgetting to indent after if/for/while/def, produces IndentationError or silent logic mistakes. In Cursor, prefer four spaces and visible whitespace while learning.',
          bodyZh:
            'Python 用缩进表示从属关系。混用 Tab 与空格，或在 if/for/while/def 后忘记缩进，会导致 IndentationError 或静默逻辑错误。在 Cursor 中学习时，优先使用四空格并显示空白。',
          bullets: [
            {
              en: 'Indent the body of if, for, while, and def.',
              zh: '缩进 if、for、while、def 的主体。',
              keywords: [{ en: 'Block', zh: '代码块' }],
            },
            {
              en: 'Keep one indentation style inside a file.',
              zh: '同一文件内保持一种缩进风格。',
            },
            {
              en: 'Read IndentationError as “structure is unclear to Python”.',
              zh: '把 IndentationError 读作“Python 看不清结构”。',
              keywords: [{ en: 'IndentationError', zh: '缩进错误' }],
            },
          ],
        },
      ],
    },
    {
      id: 'for-and-while',
      titleEn: 'for and while',
      titleZh: 'for 与 while',
      slides: [
        {
          id: 'ch-f-loops-for',
          layout: 'text',

          titleEn: 'for Loops',
          titleZh: 'for 循环',
          bodyEn:
            'A for loop visits each item in a sequence. for n in range(3): repeats with n equal to 0, 1, then 2. Later you will loop over lists the same way. Prefer for when you know what you are iterating.',
          bodyZh:
            'for 循环依次访问序列中的每一项。for n in range(3): 会让 n 依次为 0、1、2。之后你也会用同样方式遍历列表。当你清楚要遍历什么时，优先使用 for。',
          bullets: [
            {
              en: 'for n in range(5): print(n)',
              zh: 'for n in range(5): print(n)',
              keywords: [{ en: 'range', zh: '范围序列' }],
            },
            {
              en: 'range(start, stop) stops before stop.',
              zh: 'range(start, stop) 在 stop 之前结束。',
            },
            {
              en: 'The loop variable name should be meaningful when possible.',
              zh: '循环变量名尽可能有意义。',
            },
          ],
        },
        {
          id: 'ch-f-loops-while',
          layout: 'text',

          titleEn: 'while Loops',
          titleZh: 'while 循环',
          bodyEn:
            'A while loop repeats as long as a condition stays True. You must change something inside the loop, or it may never end. Start with small counters before building menu-style programs.',
          bodyZh:
            'while 循环在条件保持 True 时重复。你必须在循环内改变某些状态，否则可能永不结束。先用小计数器练习，再写菜单式程序。',
          bullets: [
            {
              en: 'count = 0; while count < 3: ...; count += 1',
              zh: 'count = 0；while count < 3: ...；count += 1',
              keywords: [{ en: 'while', zh: 'while 循环' }],
            },
            {
              en: 'Ctrl+C stops a runaway loop in PowerShell.',
              zh: '在 PowerShell 中用 Ctrl+C 停止失控循环。',
            },
            {
              en: 'Use while when you repeat until a condition changes, not when visiting a fixed list.',
              zh: '当重复直到条件变化时用 while；遍历固定列表时不必强用 while。',
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
          id: 'ch-f-loops-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Write decisions and loops in one file, then run with py.',
          bodyZh: '在一个文件里写判断与循环，再用 py 运行。',
          bullets: [
            {
              en: 'Create decisions.py and read a score with int(input(...)).',
              zh: '创建 decisions.py，并用 int(input(...)) 读取分数。',
            },
            {
              en: 'Print pass or retry with if / else.',
              zh: '用 if / else 打印 pass 或 retry。',
            },
            {
              en: 'Add a for n in range(1, 4): print(n) block.',
              zh: '添加 for n in range(1, 4): print(n) 代码块。',
            },
            {
              en: 'Run py decisions.py from PowerShell in the project folder.',
              zh: '在项目文件夹的 PowerShell 中运行 py decisions.py',
            },
          ],
        },
        {
          id: 'ch-f-loops-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Writing if score = 60 instead of score == 60.',
              zh: '把 if score == 60 写成 if score = 60。',
            },
            {
              en: 'Forgetting the colon after if/for/while.',
              zh: '在 if/for/while 后忘记冒号。',
            },
            {
              en: 'Creating an infinite while because the counter never changes.',
              zh: '计数器从未变化而导致 while 死循环。',
            },
          ],
        },
        {
          id: 'ch-f-loops-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What character ends an if header line?',
              zh: 'if 标题行以什么字符结束？',
            },
            {
              en: 'What numbers does range(3) produce?',
              zh: 'range(3) 产生哪些数？',
            },
            {
              en: 'How do you stop a runaway loop in the terminal?',
              zh: '如何在终端停止失控循环？',
            },
          ],
          noteEn: 'Answers: colon : ; 0,1,2 ; Ctrl+C',
          noteZh: '参考答案：冒号 :；0,1,2；Ctrl+C',
        },
      ],
    },
  ],
}
