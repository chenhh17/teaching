import type { Chapter } from '../../types/course'

export const chFLists: Chapter = {
  id: 'lists-and-loops-practice',
  titleEn: 'Lists and Loops Practice',
  titleZh: '列表与循环练习',
  summaryEn:
    'Build lists, append items, loop with for, and practice small list tasks using py on Windows.',
  summaryZh:
    '创建列表、追加元素、用 for 循环，并在 Windows 上用 py 做小型列表练习。',
  sections: [
    {
      id: 'list-basics',
      titleEn: 'List Basics',
      titleZh: '列表基础',
      slides: [
        {
          id: 'ch-f-lists-title',
          layout: 'title',

          titleEn: 'Part F · Lists and Loops Practice',
          titleZh: '篇章 F · 列表与循环练习',
          subtitleEn: 'Hold many values, then visit each one',
          subtitleZh: '保存多个值，再逐个访问',
          illustration: 'title',
          keywords: [
            { en: 'list', zh: '列表' },
            { en: 'append', zh: '追加' },
            { en: 'for', zh: 'for 循环' },
          ],
        },
        {
          id: 'ch-f-lists-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'A list stores an ordered collection of values in one variable. Combined with for, lists let you process many items without copying the same print line again and again.',
          bodyZh:
            '列表把有序的多个值存在一个变量里。结合 for，你无需反复复制同一行 print，就能处理许多项目。',
          bullets: [
            {
              en: 'Create a list and read items by index.',
              zh: '创建列表并用索引读取元素。',
            },
            {
              en: 'Grow a list with append and measure it with len.',
              zh: '用 append 增长列表，并用 len 测量长度。',
            },
            {
              en: 'Loop through a list with for item in items.',
              zh: '用 for item in items 遍历列表。',
            },
          ],
        },
        {
          id: 'ch-f-lists-create',
          layout: 'text',

          titleEn: 'Creating and Indexing Lists',
          titleZh: '创建与索引列表',
          bodyEn:
            'Write a list with square brackets and commas: fruits = ["apple", "banana", "cherry"]. Indexes start at 0. Lists are mutable: you can replace fruits[1] = "blueberry" without creating a whole new list variable name.',
          bodyZh:
            '用方括号与逗号写列表：fruits = ["apple", "banana", "cherry"]。索引从 0 开始。列表可变：你可以执行 fruits[1] = "blueberry"，而不必换一个全新变量名。',
          bullets: [
            {
              en: 'fruits[0] is the first item.',
              zh: 'fruits[0] 是第一项。',
              keywords: [{ en: 'Index', zh: '索引' }],
            },
            {
              en: 'fruits[-1] is the last item.',
              zh: 'fruits[-1] 是最后一项。',
            },
            {
              en: 'Empty list: items = []',
              zh: '空列表：items = []',
              keywords: [{ en: 'list', zh: '列表' }],
            },
          ],
        },
        {
          id: 'ch-f-lists-change',
          layout: 'text',

          titleEn: 'Change a List Safely',
          titleZh: '安全地修改列表',
          bodyEn:
            'append adds one item at the end. len counts items. Beginners should avoid deleting while looping until they are comfortable. Print the list often while learning so state changes stay visible.',
          bodyZh:
            'append 在末尾添加一项。len 统计项数。初学者在熟悉之前，应避免在循环中删除元素。学习时经常打印列表，让状态变化保持可见。',
          bullets: [
            {
              en: 'items.append("notebook")',
              zh: 'items.append("notebook")',
              keywords: [{ en: 'append', zh: '追加' }],
            },
            {
              en: 'print(len(items))',
              zh: 'print(len(items))',
              keywords: [{ en: 'len', zh: '长度' }],
            },
            {
              en: 'Check membership with: "apple" in fruits',
              zh: '成员检查："apple" in fruits',
              keywords: [{ en: 'in', zh: '成员运算' }],
            },
          ],
        },
      ],
    },
    {
      id: 'lists-with-for',
      titleEn: 'Lists with for',
      titleZh: '列表与 for',
      slides: [
        {
          id: 'ch-f-lists-for',
          layout: 'text',

          titleEn: 'Loop Through Items',
          titleZh: '遍历元素',
          bodyEn:
            'for fruit in fruits: visits each value in order. This is clearer than manual indexes for most beginner tasks. If you need both position and value, enumerate can wait until you are comfortable with the basic for form.',
          bodyZh:
            'for fruit in fruits: 按顺序访问每个值。对多数初学任务，这比手工索引更清晰。若同时需要位置与值，等熟悉基础 for 后再学习 enumerate。',
          bullets: [
            {
              en: 'for fruit in fruits: print(fruit)',
              zh: 'for fruit in fruits: print(fruit)',
              keywords: [{ en: 'for', zh: 'for 循环' }],
            },
            {
              en: 'Build totals: total = 0 then total = total + number',
              zh: '累计总和：total = 0，然后 total = total + number',
            },
            {
              en: 'Combine with if inside the loop to filter items.',
              zh: '在循环内结合 if 过滤元素。',
            },
          ],
        },
        {
          id: 'ch-f-lists-practice-idea',
          layout: 'text',

          titleEn: 'A Tiny Course Pattern',
          titleZh: '一个小小的课程模式',
          bodyEn:
            'Many homework programs follow one pattern: start with an empty list, append values from input or fixed data, then loop to print or compute. Keep the script in your python-lab folder and run it with py after each small improvement.',
          bodyZh:
            '许多作业程序遵循同一模式：从空列表开始，从输入或固定数据 append 值，再循环打印或计算。把脚本放在 python-lab 文件夹，每做一点改进就用 py 运行一次。',
          bullets: [
            {
              en: 'Collect → process → display.',
              zh: '收集 → 处理 → 显示。',
            },
            {
              en: 'Print intermediate lists while debugging.',
              zh: '调试时打印中间列表。',
            },
            {
              en: 'Save as UTF-8 if item text includes Chinese.',
              zh: '若元素文本含中文，请保存为 UTF-8。',
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
          id: 'ch-f-lists-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Create a shopping-list style script and run it with py.',
          bodyZh: '做一个购物清单风格的脚本，并用 py 运行。',
          bullets: [
            {
              en: 'Create lists_lab.py with items = []',
              zh: '创建 lists_lab.py，写入 items = []',
            },
            {
              en: 'Append three strings, then print the whole list and len(items).',
              zh: '追加三个字符串，再打印整个列表与 len(items)。',
            },
            {
              en: 'Loop with for item in items: print("-", item)',
              zh: '用 for item in items: print("-", item) 遍历打印。',
            },
            {
              en: 'Run py lists_lab.py from PowerShell in the project folder.',
              zh: '在项目文件夹的 PowerShell 中运行 py lists_lab.py',
            },
          ],
        },
        {
          id: 'ch-f-lists-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Using parentheses (1, 2, 3) when you meant a list [1, 2, 3].',
              zh: '本意写列表 [1, 2, 3]，却写成了元组 (1, 2, 3)。',
            },
            {
              en: 'Starting indexes at 1 and missing the first item.',
              zh: '索引从 1 开始，漏掉第一项。',
            },
            {
              en: 'Calling append without parentheses: items.append',
              zh: '调用 append 时漏了括号：items.append',
            },
          ],
        },
        {
          id: 'ch-f-lists-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'How do you create an empty list?',
              zh: '如何创建空列表？',
            },
            {
              en: 'Which method adds one item at the end?',
              zh: '哪个方法在末尾添加一项？',
            },
            {
              en: 'Write a for header that visits each value in names.',
              zh: '写出遍历 names 中每个值的 for 标题行。',
            },
          ],
          noteEn: 'Answers: []; append; for name in names:',
          noteZh: '参考答案：[]；append；for name in names:',
        },
      ],
    },
  ],
}
