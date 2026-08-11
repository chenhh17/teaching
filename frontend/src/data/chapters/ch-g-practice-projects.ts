import type { Chapter } from '../../types/course'

export const chGPracticeProjects: Chapter = {
  id: 'small-programs-practice',
  titleEn: 'Small Programs Practice',
  titleZh: '小程序练习',
  summaryEn:
    'Build tiny Windows Python projects on purpose: clear goals, short loops, and honest tests.',
  summaryZh:
    '有目的地做 Windows 上的微型 Python 项目：目标清楚、循环短、测试诚实。',
  sections: [
    {
      id: 'practice-mindset',
      titleEn: 'Practice Mindset',
      titleZh: '练习心态',
      slides: [
        {
          id: 'ch-g-practice-projects-title',
          layout: 'title',

          titleEn: 'Part G · Small Programs Practice',
          titleZh: '篇章 G · 小程序练习',
          subtitleEn: 'Finish small, learn deep',
          subtitleZh: '做小做完，学得更深',
          illustration: 'title',
          keywords: [
            { en: 'Practice', zh: '练习' },
            { en: 'Project', zh: '项目' },
            { en: 'Feedback Loop', zh: '反馈循环' },
          ],
        },
        {
          id: 'ch-g-practice-projects-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will choose a tiny project size that you can finish, structure a short build loop, and know when a practice program is “done enough” for learning.',
          bodyZh:
            '你将选择能做完的小项目规模，组织短构建循环，并知道练习程序何时对学习来说“足够完成”。',
          bullets: [
            {
              en: 'Explain why small finished programs beat huge unfinished ones.',
              zh: '说明为何做完的小程序胜过做不完的大程序。',
            },
            {
              en: 'Pick a practice idea with a clear input and output.',
              zh: '选择输入输出清晰的练习想法。',
              keywords: [
                { en: 'Input', zh: '输入' },
                { en: 'Output', zh: '输出' },
              ],
            },
            {
              en: 'Use a write-run-fix loop on Windows with `py`.',
              zh: '在 Windows 上用 `py` 做写-运行-修复循环。',
            },
            {
              en: 'Keep notes of what broke and what you learned.',
              zh: '记录哪里坏了以及你学到什么。',
            },
          ],
        },
        {
          id: 'ch-g-practice-projects-why-small',
          layout: 'text',

          titleEn: 'Why Small Projects Teach Faster',
          titleZh: '为什么小项目学得更快',
          bodyEn:
            'A small program forces you to finish the full path: idea, file, run, error, fix, and demo. Large ambition without delivery leaves gaps in that path. Employers and teachers both care that you can complete something.',
          bodyZh:
            '小程序逼你走完整路径：想法、文件、运行、报错、修复与演示。只有雄心却交不出东西，会在这条路径上留下空洞。雇主和老师都看重你能把事情做完。',
          bullets: [
            {
              en: 'Completion builds confidence you can trust.',
              zh: '完成感建立可信的信心。',
            },
            {
              en: 'Short scope makes debugging teachable.',
              zh: '范围短，调试才教得动。',
            },
            {
              en: 'You can repeat many small wins in one week.',
              zh: '一周内可以重复许多小胜利。',
            },
          ],
        },
        {
          id: 'ch-g-practice-projects-ideas',
          layout: 'text',

          titleEn: 'Good Practice Ideas for Beginners',
          titleZh: '适合初学者的练习想法',
          bodyEn:
            'Choose problems with visible success. Text in, text out is enough. Avoid game engines, full websites, or multi-week apps until your loop is reliable.',
          bodyZh:
            '选择能看见成功的问题。文本进、文本出就够了。在循环稳定前，先别碰游戏引擎、完整网站或数周规模的应用。',
          bullets: [
            {
              en: 'Unit converter: meters to centimeters, Celsius to Fahrenheit.',
              zh: '单位换算：米到厘米、摄氏到华氏。',
            },
            {
              en: 'Grade helper: input scores, print average and pass/fail.',
              zh: '成绩助手：输入分数，打印平均与是否及格。',
            },
            {
              en: 'File reader: open a `.txt` and count lines or words.',
              zh: '文件阅读器：打开 `.txt` 并统计行或词。',
              keywords: [{ en: 'Text File', zh: '文本文件' }],
            },
            {
              en: 'Checklist tool: store tasks in a list and print them.',
              zh: '清单工具：用列表存任务并打印。',
              keywords: [{ en: 'List', zh: '列表' }],
            },
          ],
        },
      ],
    },
    {
      id: 'build-loop',
      titleEn: 'The Build Loop',
      titleZh: '构建循环',
      slides: [
        {
          id: 'ch-g-practice-projects-rubber-duck',
          layout: 'text',

          titleEn: 'Explain the Goal Before Coding',
          titleZh: '写代码前先说清目标',
          bodyEn:
            'If you cannot explain the program in two sentences, the code will wander. Write the goal, one example input, and one expected output in a comment block or notebook before the first function.',
          bodyZh:
            '如果不能用两句话说明程序，代码就会飘。在写第一个函数前，先在注释块或笔记本里写目标、一个示例输入和一个期望输出。',
          bullets: [
            {
              en: 'Sentence 1: what the user provides.',
              zh: '句 1：用户提供什么。',
            },
            {
              en: 'Sentence 2: what the program prints or saves.',
              zh: '句 2：程序打印或保存什么。',
            },
            {
              en: 'Example: input `25`, output `77.0 F`.',
              zh: '示例：输入 `25`，输出 `77.0 F`。',
            },
          ],
          keywords: [{ en: 'Specification', zh: '规格说明' }],
        },
        {
          id: 'ch-g-practice-projects-loop',
          layout: 'text',

          titleEn: 'Write, Run, Observe, Fix',
          titleZh: '编写、运行、观察、修复',
          bodyEn:
            'Practice is a loop, not a ceremony. Run early with incomplete code. Observe the real message. Fix the smallest broken piece. Repeat until your example input matches the expected output.',
          bodyZh:
            '练习是循环，不是仪式。用不完整代码尽早运行。观察真实信息。修最小坏点。重复直到示例输入匹配期望输出。',
          bullets: [
            {
              en: 'Run after every few lines, not after 100 lines.',
              zh: '写几行就运行，不要写一百行再运行。',
            },
            {
              en: 'Keep one known-good example for regression checks.',
              zh: '保留一个已知正确示例做回归检查。',
              keywords: [{ en: 'Regression', zh: '回归' }],
            },
            {
              en: 'Stop when the learning goal is met, not when every feature exists.',
              zh: '学习目标达成就停，不必等所有功能齐备。',
            },
          ],
        },
        {
          id: 'ch-g-practice-projects-structure',
          layout: 'text',

          titleEn: 'A Simple File Structure',
          titleZh: '简单文件结构',
          bodyEn:
            'Even tiny projects benefit from a predictable layout. One folder, one main script, maybe a `data` folder for sample text, and a short `README.txt` that states how to run it in PowerShell.',
          bodyZh:
            '即使是微型项目，可预期的布局也有帮助。一个文件夹、一个主脚本，也许再加 `data` 放示例文本，以及简短 `README.txt` 说明如何在 PowerShell 运行。',
          bullets: [
            {
              en: '`main.py` or a clear name like `converter.py`.',
              zh: '`main.py` 或清晰名字如 `converter.py`。',
            },
            {
              en: 'Avoid spaces in folder names when possible.',
              zh: '文件夹名尽量避免空格。',
            },
            {
              en: 'Store practice under something like `C:\\Users\\You\\projects\\practice\\`.',
              zh: '练习放在类似 `C:\\Users\\You\\projects\\practice\\` 的路径下。',
              keywords: [{ en: 'Path', zh: '路径' }],
            },
          ],
        },
        {
          id: 'ch-g-practice-projects-try',
          layout: 'steps',
          titleEn: 'Try It: One-Hour Mini Project',
          titleZh: '动手：一小时迷你项目',
          bodyEn:
            'Pick one idea and finish a demoable version in about one focused hour.',
          bodyZh: '选一个想法，在大约一小时专注时间里完成可演示版本。',
          bullets: [
            {
              en: 'Create a folder in File Explorer under your projects path.',
              zh: '在资源管理器里、你的项目路径下新建文件夹。',
            },
            {
              en: 'Write the two-sentence goal at the top of the `.py` file.',
              zh: '在 `.py` 文件顶部写下两句话目标。',
            },
            {
              en: 'Implement the happy path only: correct input works.',
              zh: '只实现顺畅路径：正确输入能工作。',
              keywords: [{ en: 'Happy Path', zh: '顺畅路径' }],
            },
            {
              en: 'Run with `py your_file.py` and fix until the example passes.',
              zh: '用 `py your_file.py` 运行，修到示例通过。',
            },
            {
              en: 'Add one intentional bad input and decide how to respond.',
              zh: '故意加一个坏输入，并决定如何响应。',
            },
          ],
        },
        {
          id: 'ch-g-practice-projects-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'These patterns turn practice into frustration.',
          bodyZh: '这些模式会把练习变成挫败。',
          bullets: [
            {
              en: 'Starting a “social network” as the first solo project.',
              zh: '把“社交网络”当作第一个独立项目。',
            },
            {
              en: 'Copying code you cannot explain line by line.',
              zh: '复制自己逐行都讲不清的代码。',
            },
            {
              en: 'Never saving working versions before risky edits.',
              zh: '冒险修改前从不保存可工作版本。',
            },
            {
              en: 'Measuring progress only by lines of code, not by demos.',
              zh: '只用代码行数衡量进度，而不是演示。',
            },
          ],
        },
        {
          id: 'ch-g-practice-projects-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Use these prompts to judge your practice quality.',
          bodyZh: '用这些问题判断练习质量。',
          bullets: [
            {
              en: 'Can you state your program goal in two sentences?',
              zh: '你能用两句话说明程序目标吗？',
            },
            {
              en: 'Do you have one example input with an expected output?',
              zh: '你是否有一个带期望输出的示例输入？',
            },
            {
              en: 'What is your next smallest unfinished piece?',
              zh: '你下一个最小的未完成部分是什么？',
            },
          ],
          noteEn:
            'If you cannot answer quickly, shrink the project before adding features.',
          noteZh: '若不能很快回答，就先缩小项目，再加功能。',
        },
      ],
    },
  ],
}
