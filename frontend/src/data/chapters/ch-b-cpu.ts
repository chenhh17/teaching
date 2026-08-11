import type { Chapter } from '../../types/course'

export const chBCpu: Chapter = {
  id: 'cpu-and-performance',
  titleEn: 'CPU and Performance',
  titleZh: 'CPU 与性能',
  summaryEn:
    'Understand the CPU as the brain, cores as workers, and what Task Manager CPU % means on Windows.',
  summaryZh: '把 CPU 理解为大脑，把核心理解为工人，并看懂 Windows 任务管理器里的 CPU 占用。',
  sections: [
    {
      id: 'cpu-basics',
      titleEn: 'CPU Basics',
      titleZh: 'CPU 基础',
      slides: [
        {
          id: 'ch-b-cpu-title',
          layout: 'title',

          titleEn: 'Part B · CPU and Performance',
          titleZh: '篇章 B · CPU 与性能',
          subtitleEn: 'How the processor does work on a Windows PC',
          subtitleZh: '处理器如何在 Windows 电脑上完成工作',
          illustration: 'title',
          keywords: [
            { en: 'CPU', zh: '中央处理器' },
            { en: 'Performance', zh: '性能' },
            { en: 'Core', zh: '核心' },
          ],
        },
        {
          id: 'ch-b-cpu-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will connect a physical chip idea to what Task Manager shows while Windows is busy.',
          bodyZh: '你会把物理芯片概念与 Windows 忙碌时任务管理器显示的内容联系起来。',
          bullets: [
            {
              en: 'Describe the CPU as the brain that follows instructions.',
              zh: '把 CPU 描述为执行指令的“大脑”。',
            },
            {
              en: 'Explain cores in beginner language.',
              zh: '用入门语言解释什么是核心。',
            },
            {
              en: 'Read CPU % once in Task Manager.',
              zh: '在任务管理器中看一次 CPU 占用百分比。',
              keywords: [{ en: 'Task Manager', zh: '任务管理器' }],
            },
          ],
        },
        {
          id: 'ch-b-cpu-brain',
          layout: 'text',

          titleEn: 'CPU: The Brain',
          titleZh: 'CPU：大脑',
          illustration: 'hardware',
          bodyEn:
            'The CPU follows instructions and performs calculations. It works very fast, one step after another, and many steps at once across cores. Programs do not talk to the silicon directly; Windows schedules work and gives processes slices of CPU time.',
          bodyZh:
            'CPU 负责执行指令并完成计算。它速度很快，一步一步执行，也可以跨多个核心同时推进许多步骤。程序并不直接与硅片对话；Windows 负责调度，并把 CPU 时间切片分给各个进程。',
          bullets: [
            {
              en: 'The CPU follows instructions and does calculations.',
              zh: 'CPU 负责执行指令并完成计算。',
              keywords: [{ en: 'CPU', zh: '中央处理器' }],
            },
            {
              en: 'It works very fast, step after step.',
              zh: '它速度很快，一步一步执行。',
            },
            {
              en: 'Programs send it work through Windows.',
              zh: '程序通过 Windows 把工作交给它。',
              keywords: [{ en: 'Instruction', zh: '指令' }],
            },
          ],
        },
        {
          id: 'ch-b-cpu-cores',
          layout: 'text',

          titleEn: 'Cores: More Workers',
          titleZh: '核心：更多工人',
          illustration: 'hardware',
          bodyEn:
            'A core is like one worker inside the CPU. More cores can help when many tasks run together, such as browser tabs, editor, and background updates. More cores do not automatically make every single program faster, especially if that program can use only one worker well.',
          bodyZh:
            '一个核心像 CPU 里的一个工人。多任务同时进行时，例如浏览器标签、编辑器与后台更新，更多核心可能有帮助。更多核心不会自动让每个程序都更快，尤其当某个程序主要只能用好一个工人时。',
          bullets: [
            {
              en: 'A core is like one worker inside the CPU.',
              zh: '一个核心像 CPU 里的一个工人。',
              keywords: [{ en: 'Core', zh: '核心' }],
            },
            {
              en: 'More cores can help when many tasks run together.',
              zh: '多任务同时进行时，更多核心可能有帮助。',
            },
            {
              en: 'Beginners do not need the newest chip to learn coding.',
              zh: '初学者学编程不必追求最新芯片。',
            },
          ],
          noteEn: 'A normal school or office PC is usually enough.',
          noteZh: '一般学校或办公电脑通常就够用。',
        },
      ],
    },
    {
      id: 'cores-and-load',
      titleEn: 'Cores and Load',
      titleZh: '核心与负载',
      slides: [
        {
          id: 'ch-b-cpu-instructions',
          layout: 'text',

          titleEn: 'Instructions and Programs',
          titleZh: '指令与程序',
          illustration: 'code',
          bodyEn:
            'Your source code becomes many tiny instructions for the CPU. Windows decides which process gets CPU time next. Heavy apps ask for more work; idle apps ask for little. Understanding this chain helps you interpret why opening Edge and Cursor together can raise CPU % for a few seconds.',
          bodyZh:
            '你的源代码会变成很多给 CPU 的细小指令。Windows 决定下一个进程获得 CPU 时间。较重的应用占用更多工作量；空闲应用占用很少。理解这条链条，有助于解释为什么同时打开 Edge 与 Cursor 会让 CPU % 短时上升。',
          bullets: [
            {
              en: 'Code becomes many tiny instructions for the CPU.',
              zh: '代码会变成很多给 CPU 的细小指令。',
            },
            {
              en: 'Windows schedules which process gets CPU time.',
              zh: 'Windows 会安排哪个进程获得 CPU 时间。',
              keywords: [{ en: 'Process', zh: '进程' }],
            },
            {
              en: 'Heavy apps ask for more CPU work.',
              zh: '较重的应用会占用更多 CPU 工作量。',
            },
          ],
        },
        {
          id: 'ch-b-cpu-task-manager',
          layout: 'text',

          titleEn: 'Task Manager CPU %',
          titleZh: '任务管理器中的 CPU %',
          illustration: 'environment',
          bodyEn:
            'CPU % shows how busy the processor is right now. Near 100% for a short time can be normal when starting apps. Stuck near 100% with a hot, slow PC means something heavy is running. Sort the Processes tab by CPU to see which app is responsible before ending anything.',
          bodyZh:
            'CPU % 表示处理器此刻有多忙。启动应用时短时间接近 100% 可能正常。若一直接近 100% 且电脑又烫又慢，说明有重任务在跑。先在“进程”页按 CPU 排序，看清是哪个应用，再考虑结束任何东西。',
          bullets: [
            {
              en: 'CPU % shows how busy the processor is right now.',
              zh: 'CPU % 表示处理器此刻有多忙。',
              keywords: [{ en: 'CPU %', zh: 'CPU 占用率' }],
            },
            {
              en: 'Short spikes near 100% can be normal when launching apps.',
              zh: '启动应用时短时间接近 100% 可能正常。',
            },
            {
              en: 'Stuck near 100% with a hot, slow PC means heavy work is running.',
              zh: '一直接近 100% 且又烫又慢，说明有重任务在跑。',
            },
          ],
        },
        {
          id: 'ch-b-cpu-enough',
          layout: 'text',

          titleEn: 'Good Enough for Learning',
          titleZh: '学习够用就好',
          bodyEn:
            'You do not need the newest gaming CPU to learn Python. Practice habits matter more than chip brands. Upgrade later only if your real coursework stays slow after you close unused apps and free disk space.',
          bodyZh:
            '学 Python 不需要最新的游戏级 CPU。练习习惯比芯片品牌更重要。只有在关闭无用应用、腾出磁盘空间之后，真实课业仍然长期很慢时，再考虑升级。',
          bullets: [
            {
              en: 'You do not need the newest gaming CPU to learn Python.',
              zh: '学 Python 不需要最新的游戏级 CPU。',
            },
            {
              en: 'Focus on practice habits more than chip brands.',
              zh: '更要关注练习习惯，而不是芯片品牌。',
            },
            {
              en: 'Upgrade later only if real work stays slow.',
              zh: '只有真实工作长期很慢时，再考虑升级。',
            },
          ],
        },
        {
          id: 'ch-b-cpu-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'environment',
          bodyEn:
            'Observe only. Do not end unknown tasks.',
          bodyZh: '只观察。不要结束不认识的任务。',
          bullets: [
            {
              en: 'Press Ctrl + Shift + Esc to open Task Manager.',
              zh: '按 Ctrl + Shift + Esc 打开任务管理器。',
              keywords: [{ en: 'Task Manager', zh: '任务管理器' }],
            },
            {
              en: 'Open the Performance tab and watch the CPU graph.',
              zh: '打开“性能”页，观察 CPU 图表。',
            },
            {
              en: 'Open and close Microsoft Edge once; watch CPU % change.',
              zh: '打开再关闭一次 Microsoft Edge，观察 CPU % 变化。',
            },
            {
              en: 'On Processes, sort by CPU and name the top app you recognize.',
              zh: '在“进程”中按 CPU 排序，说出你认识的排名靠前应用。',
            },
          ],
          noteEn: 'Just observe. Do not end unknown tasks.',
          noteZh: '只观察，不要结束不认识的任务。',
        },
      ],
    },
    {
      id: 'practice-check',
      titleEn: 'Practice and Check',
      titleZh: '练习与自测',
      slides: [
        {
          id: 'ch-b-cpu-errors',
          layout: 'callout',
          titleEn: 'Common Mix-ups',
          titleZh: '常见误解',
          bodyEn:
            'Misreading CPU % leads students to “upgrade” when they needed to close a busy tab.',
          bodyZh: '误读 CPU % 会让学生想着“升级”，其实只需要关掉一个忙碌标签。',
          bullets: [
            {
              en: 'High CPU % for a few seconds is not always a problem.',
              zh: 'CPU % 短时间偏高不一定有问题。',
            },
            {
              en: 'More cores do not automatically make every program faster.',
              zh: '更多核心不会自动让每个程序都更快。',
            },
            {
              en: 'Buying a new CPU is not the first fix for learning struggles.',
              zh: '学不会时，先别想着换 CPU。',
            },
          ],
        },
        {
          id: 'ch-b-cpu-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Keep answers short and concrete.',
          bodyZh: '答案保持简短具体。',
          bullets: [
            {
              en: 'What does the CPU do in one sentence?',
              zh: '用一句话：CPU 做什么？',
            },
            {
              en: 'What is a core, in plain words?',
              zh: '用白话说：什么是核心？',
            },
            {
              en: 'What does a high CPU % mean in Task Manager?',
              zh: '任务管理器里 CPU % 很高通常表示什么？',
            },
          ],
          noteEn:
            'Answers: follows instructions/calculates; one worker inside the CPU; the CPU is very busy now.',
          noteZh:
            '参考答案：执行指令/做计算；CPU 里的一个工人；CPU 此刻很忙。',
        },
      ],
    },
  ],
}
