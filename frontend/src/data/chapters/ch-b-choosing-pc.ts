import type { Chapter } from '../../types/course'

export const chBChoosingPc: Chapter = {
  id: 'choosing-a-pc',
  titleEn: 'Choosing a PC',
  titleZh: '如何选电脑',
  summaryEn:
    'Choose a Windows PC for learning by matching tasks to CPU, RAM, storage, and display needs—not marketing hype.',
  summaryZh: '按任务匹配 CPU、内存、存储与显示需求来选择 Windows 电脑，而不是跟着营销口号。',
  sections: [
    {
      id: 'needs-first',
      titleEn: 'Needs First',
      titleZh: '需求优先',
      slides: [
        {
          id: 'ch-b-choosing-pc-title',
          layout: 'title',

          titleEn: 'Part B · Choosing a PC',
          titleZh: '篇章 B · 如何选电脑',
          subtitleEn: 'Match the machine to your real Windows learning tasks',
          subtitleZh: '让机器匹配你真实的 Windows 学习任务',
          illustration: 'title',
          keywords: [
            { en: 'Requirements', zh: '需求' },
            { en: 'RAM', zh: '内存' },
            { en: 'SSD', zh: '固态硬盘' },
          ],
        },
        {
          id: 'ch-b-choosing-pc-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will build a practical checklist for student coding, browsing, and documents on Windows.',
          bodyZh: '你会为 Windows 上的学生编程、浏览与文档建立一份实用清单。',
          bullets: [
            {
              en: 'List your real tasks before reading marketing specs.',
              zh: '在阅读营销参数前先列出真实任务。',
            },
            {
              en: 'Name a sensible baseline for CPU, RAM, and SSD.',
              zh: '说出一套合理的 CPU、内存与 SSD 基线。',
            },
            {
              en: 'Verify a PC with Windows Settings and Task Manager.',
              zh: '用 Windows 设置与任务管理器核实一台电脑。',
            },
          ],
        },
        {
          id: 'ch-b-choosing-pc-tasks',
          layout: 'text',

          titleEn: 'Start From Tasks',
          titleZh: '从任务出发',
          bodyEn:
            'Buying starts with work, not with brand stickers. Typical course tasks include browser research, Cursor, PowerShell, Python practice, documents, and video calls. Gaming, 4K editing, and machine learning ask for different machines. Write your top five weekly tasks before comparing models.',
          bodyZh:
            '购买从工作出发，而不是从品牌贴纸出发。典型课程任务包括浏览器查阅、Cursor、PowerShell、Python 练习、文档与视频会议。游戏、4K 剪辑与机器学习需要不同机器。比较型号前，先写下每周最重要的五项任务。',
          bullets: [
            {
              en: 'List weekly tasks: coding, docs, calls, media.',
              zh: '列出每周任务：编程、文档、会议、媒体。',
            },
            {
              en: 'Separate must-have needs from nice-to-have extras.',
              zh: '把必须需求与可有可无的额外项分开。',
            },
            {
              en: 'Do not buy for a hobby you will not start this term.',
              zh: '不要为这学期不会开始的爱好买单。',
            },
          ],
        },
        {
          id: 'ch-b-choosing-pc-baseline',
          layout: 'text',

          titleEn: 'A Sensible Student Baseline',
          titleZh: '合理的学生基线',
          illustration: 'hardware',
          bodyEn:
            'For Windows learning in this course, prioritize a reliable CPU generation, enough RAM for browser plus editor, and an SSD system drive. Exact numbers change over years, but the priorities stay: responsive storage, enough working memory, and a screen you can read for hours. A discrete GPU is optional for most programming labs.',
          bodyZh:
            '对本课程的 Windows 学习，优先可靠的 CPU 世代、够浏览器加编辑器使用的内存，以及 SSD 系统盘。具体数字会随年份变化，但优先级不变：响应快的存储、足够的工作内存，以及能长时间阅读的屏幕。对多数编程实验，独显是可选项。',
          bullets: [
            {
              en: 'SSD for the system drive improves everyday feel.',
              zh: '系统盘用 SSD 能明显改善日常手感。',
              keywords: [{ en: 'SSD', zh: '固态硬盘' }],
            },
            {
              en: 'Enough RAM for browser tabs plus Cursor/editor.',
              zh: '内存要够浏览器标签加 Cursor/编辑器。',
              keywords: [{ en: 'RAM', zh: '内存' }],
            },
            {
              en: 'Discrete GPU is optional for most coding courses.',
              zh: '对多数编程课，独显是可选项。',
            },
          ],
        },
      ],
    },
    {
      id: 'compare-and-verify',
      titleEn: 'Compare and Verify',
      titleZh: '比较与核实',
      slides: [
        {
          id: 'ch-b-choosing-pc-laptop',
          layout: 'text',

          titleEn: 'Laptop vs Desktop Trade-offs',
          titleZh: '笔记本与台式机取舍',
          illustration: 'hardware',
          bodyEn:
            'Laptops win on portability for campus life. Desktops often win on upgrade paths, cooling, and screen size for the same budget. If you already have an external monitor, keyboard, and quiet desk, a small desktop can be excellent. If you move between rooms daily, a laptop with a good SSD is usually the better fit.',
          bodyZh:
            '笔记本在校园生活的便携性上胜出。同样预算下，台式机常在可升级性、散热与屏幕尺寸上更强。若你已有外接显示器、键盘与安静桌面，小主机可以很出色。若你每天在教室之间移动，带良好 SSD 的笔记本通常更合适。',
          bullets: [
            {
              en: 'Laptop: portability for campus movement.',
              zh: '笔记本：方便在校园移动。',
            },
            {
              en: 'Desktop: often easier upgrades and cooling.',
              zh: '台式机：通常更易升级、散热更好。',
            },
            {
              en: 'Choose based on where you actually work.',
              zh: '根据你真实的工作地点选择。',
            },
          ],
        },
        {
          id: 'ch-b-choosing-pc-checklist',
          layout: 'text',

          titleEn: 'Buyer Checklist',
          titleZh: '购买清单',
          bodyEn:
            'Before paying, confirm Windows version support, RAM capacity, storage type (SSD vs HDD), screen resolution, and ports you need for HDMI or USB-C docks. Read warranty terms. Avoid sellers who cannot state whether storage is SSD. Marketing phrases like “gaming beast” are not a checklist.',
          bodyZh:
            '付款前确认 Windows 版本支持、内存容量、存储类型（SSD 还是 HDD）、屏幕分辨率，以及你需要的 HDMI 或 USB-C 扩展接口。阅读保修条款。避免说不清存储是否为 SSD 的卖家。“游戏神器”这类营销语不是清单。',
          bullets: [
            {
              en: 'Confirm RAM amount and SSD system drive.',
              zh: '确认内存容量与 SSD 系统盘。',
            },
            {
              en: 'Check ports: USB, video out, and charging style.',
              zh: '检查接口：USB、视频输出与充电方式。',
            },
            {
              en: 'Read warranty and return policy.',
              zh: '阅读保修与退货政策。',
            },
          ],
        },
        {
          id: 'ch-b-choosing-pc-buy',
          layout: 'text',

          titleEn: 'After You Own It',
          titleZh: '到手之后',
          bodyEn:
            'A new PC still needs setup: Windows updates, File Explorer extensions visible, browser choices, and a projects folder under your user profile. Install Cursor from the official site. Recheck free space after the first update wave. Hardware choice is only half of a workable learning machine.',
          bodyZh:
            '新电脑仍需设置：Windows 更新、显示文件扩展名、浏览器选择，以及用户目录下的 projects 文件夹。从官网安装 Cursor。第一波更新后重新检查剩余空间。硬件选择只是可用学习机器的一半。',
          bullets: [
            {
              en: 'Run Windows Update and reboot when asked.',
              zh: '运行 Windows 更新，并在要求时重启。',
            },
            {
              en: 'Create a clear projects folder path.',
              zh: '创建清晰的 projects 文件夹路径。',
            },
            {
              en: 'Install Cursor from the official website.',
              zh: '从官方网站安装 Cursor。',
            },
          ],
        },
        {
          id: 'ch-b-choosing-pc-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'environment',
          bodyEn:
            'Audit the PC you already use as if you were verifying a purchase.',
          bodyZh: '像核实购买一样，审计你已经在用的电脑。',
          bullets: [
            {
              en: 'Settings → System → About: note device name, processor, RAM.',
              zh: '设置 → 系统 → 关于：记下设备名、处理器、内存。',
            },
            {
              en: 'This PC or Settings → Storage: note free space on C:.',
              zh: '此电脑或设置 → 存储：记下 C: 剩余空间。',
            },
            {
              en: 'Task Manager → Performance: glance at CPU and Memory.',
              zh: '任务管理器 → 性能：看一眼 CPU 与内存。',
            },
            {
              en: 'Write three upgrades that would help your real tasks—or write “none needed.”',
              zh: '写下三项对真实任务有帮助的升级——或写“暂不需要”。',
            },
          ],
        },
      ],
    },
    {
      id: 'check-in',
      titleEn: 'Check In',
      titleZh: '检查一下',
      slides: [
        {
          id: 'ch-b-choosing-pc-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'Buying for someone else’s workload is the most expensive beginner error.',
          bodyZh: '为别人的工作负载买单，是最昂贵的入门错误。',
          bullets: [
            {
              en: 'Paying for a high-end GPU when coding labs do not need it.',
              zh: '编程实验并不需要，却为高端显卡付费。',
            },
            {
              en: 'Accepting an HDD-only system drive for everyday student work.',
              zh: '日常学生工作却接受只有 HDD 的系统盘。',
            },
            {
              en: 'Ignoring RAM and filling the budget with RGB lights.',
              zh: '忽略内存，却把预算花在 RGB 灯光上。',
            },
          ],
        },
        {
          id: 'ch-b-choosing-pc-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Answer as if advising a classmate.',
          bodyZh: '像给同学建议一样作答。',
          bullets: [
            {
              en: 'What should you list before comparing PC models?',
              zh: '比较电脑型号前应先列出什么？',
            },
            {
              en: 'Why is an SSD system drive important for students?',
              zh: '为什么 SSD 系统盘对学生重要？',
            },
            {
              en: 'Which Windows screens help verify CPU, RAM, and free space?',
              zh: '哪些 Windows 界面有助于核实 CPU、内存与剩余空间？',
            },
          ],
          noteEn:
            'Answers: real weekly tasks; faster boot/open feel; About, Storage/This PC, Task Manager Performance.',
          noteZh:
            '参考答案：真实每周任务；更快的启动/打开手感；关于、存储/此电脑、任务管理器性能页。',
        },
      ],
    },
  ],
}
