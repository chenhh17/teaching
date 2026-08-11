import type { Chapter } from '../../types/course'

export const chBGpu: Chapter = {
  id: 'gpu-and-display',
  titleEn: 'GPU and Display',
  titleZh: '显卡与显示',
  summaryEn:
    'Understand integrated vs discrete graphics, display cables, and how Windows shows GPU activity.',
  summaryZh: '理解核显与独显、显示线缆，以及 Windows 如何显示 GPU 活动。',
  sections: [
    {
      id: 'graphics-basics',
      titleEn: 'Graphics Basics',
      titleZh: '图形基础',
      slides: [
        {
          id: 'ch-b-gpu-title',
          layout: 'title',

          titleEn: 'Part B · GPU and Display',
          titleZh: '篇章 B · 显卡与显示',
          subtitleEn: 'How images reach your screen on a Windows PC',
          subtitleZh: '图像如何到达 Windows 电脑的屏幕',
          illustration: 'title',
          keywords: [
            { en: 'GPU', zh: '图形处理器 / 显卡' },
            { en: 'Display', zh: '显示器' },
            { en: 'Integrated Graphics', zh: '核芯显卡' },
          ],
        },
        {
          id: 'ch-b-gpu-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will learn when a separate graphics card matters and how to check display settings without buying hardware first.',
          bodyZh:
            '你会了解何时需要独立显卡，以及如何在不先买硬件的情况下检查显示设置。',
          bullets: [
            {
              en: 'Explain what a GPU does for the screen.',
              zh: '说明 GPU 对屏幕做什么。',
            },
            {
              en: 'Contrast integrated and discrete graphics.',
              zh: '对比核芯显卡与独立显卡。',
            },
            {
              en: 'Find display and GPU clues in Windows Settings and Task Manager.',
              zh: '在 Windows 设置与任务管理器中找到显示与 GPU 线索。',
            },
          ],
        },
        {
          id: 'ch-b-gpu-what',
          layout: 'text',

          titleEn: 'What the GPU Does',
          titleZh: 'GPU 做什么',
          illustration: 'hardware',
          bodyEn:
            'The GPU helps turn data into pixels on the monitor. Everyday coding, browsing, and documents usually need only modest graphics power. Games, 3D work, and some video tools ask for much more. Understanding this prevents buying a powerful GPU when a better monitor cable or resolution setting was the real issue.',
          bodyZh:
            'GPU 帮助把数据变成显示器上的像素。日常写代码、浏览与文档通常只需温和的图形能力。游戏、三维与部分视频工具需求高得多。理解这一点，可避免在真正问题只是线缆或分辨率设置时去买强力显卡。',
          bullets: [
            {
              en: 'The GPU helps create the image you see.',
              zh: 'GPU 帮助生成你看见的图像。',
              keywords: [{ en: 'GPU', zh: '图形处理器 / 显卡' }],
            },
            {
              en: 'Office and coding tasks often need only modest GPU power.',
              zh: '办公与编程任务通常只需温和的 GPU 能力。',
            },
            {
              en: 'Heavy 3D and gaming ask for more GPU work.',
              zh: '重三维与游戏需要更多 GPU 工作量。',
            },
          ],
        },
        {
          id: 'ch-b-gpu-types',
          layout: 'text',

          titleEn: 'Integrated vs Discrete',
          titleZh: '核显与独显',
          illustration: 'hardware',
          bodyEn:
            'Integrated graphics share resources with the CPU package and are common in office laptops. A discrete GPU is a separate card or module with its own memory path. Discrete cards can unlock smoother high-resolution gaming, but they cost more power and money. Many classroom PCs use integrated graphics successfully for programming courses.',
          bodyZh:
            '核芯显卡与 CPU 封装共享资源，常见于办公笔记本。独立显卡是单独的卡或模块，有自己的显存通路。独显能让高分辨率游戏更顺，但更耗电也更贵。许多教室电脑用核显就能顺利完成编程课。',
          bullets: [
            {
              en: 'Integrated graphics: built with the CPU, fine for many class tasks.',
              zh: '核显：与 CPU 一体，很多课堂任务够用。',
              keywords: [{ en: 'Integrated Graphics', zh: '核芯显卡' }],
            },
            {
              en: 'Discrete GPU: separate card/module for heavier graphics.',
              zh: '独显：独立卡/模块，面向更重的图形。',
              keywords: [{ en: 'Discrete GPU', zh: '独立显卡' }],
            },
            {
              en: 'Programming courses rarely require a high-end discrete GPU.',
              zh: '编程课很少要求高端独显。',
            },
          ],
        },
      ],
    },
    {
      id: 'display-and-windows',
      titleEn: 'Display and Windows',
      titleZh: '显示与 Windows',
      slides: [
        {
          id: 'ch-b-gpu-cables',
          layout: 'text',

          titleEn: 'Cables and Ports Matter',
          titleZh: '线缆与接口很重要',
          illustration: 'hardware',
          bodyEn:
            'HDMI, DisplayPort, and USB-C can all carry video depending on the device. A loose cable can look like a “GPU failure.” On laptops, the wrong output mode can blank an external monitor. Always check the physical link and Windows display detection before blaming the GPU.',
          bodyZh:
            'HDMI、DisplayPort 与 USB-C 都可能传输视频，取决于设备。松动的线缆看起来像“显卡坏了”。在笔记本上，错误的输出模式可能让外接显示器黑屏。先检查物理连接与 Windows 显示检测，再责怪 GPU。',
          bullets: [
            {
              en: 'Common video links: HDMI, DisplayPort, some USB-C.',
              zh: '常见视频连接：HDMI、DisplayPort、部分 USB-C。',
            },
            {
              en: 'A loose cable can look like a graphics failure.',
              zh: '松动的线缆看起来像图形故障。',
            },
            {
              en: 'Check Windows detect display before replacing hardware.',
              zh: '更换硬件前先用 Windows 检测显示器。',
            },
          ],
        },
        {
          id: 'ch-b-gpu-metrics',
          layout: 'text',

          titleEn: 'Reading GPU Clues in Windows',
          titleZh: '在 Windows 里读 GPU 线索',
          illustration: 'environment',
          bodyEn:
            'Task Manager’s Performance tab may show a GPU graph when drivers expose it. Settings → System → Display controls resolution and scale. High scale with a low-resolution panel can make UI elements huge; wrong resolution can make text blurry. These are configuration issues, not always GPU defects.',
          bodyZh:
            '当驱动提供信息时，任务管理器的“性能”页可能显示 GPU 图。“设置 → 系统 → 显示”控制分辨率与缩放。低分辨率面板配高缩放会让界面元素很大；错误分辨率可能让文字发糊。这些常常是配置问题，不一定是 GPU 损坏。',
          bullets: [
            {
              en: 'Task Manager → Performance may show GPU usage.',
              zh: '任务管理器 → 性能 可能显示 GPU 占用。',
              keywords: [{ en: 'Task Manager', zh: '任务管理器' }],
            },
            {
              en: 'Settings → System → Display controls resolution and scale.',
              zh: '设置 → 系统 → 显示 控制分辨率与缩放。',
            },
            {
              en: 'Blurry text is often a resolution/scale mismatch.',
              zh: '模糊文字常常是分辨率/缩放不匹配。',
            },
          ],
        },
        {
          id: 'ch-b-gpu-multi',
          layout: 'text',

          titleEn: 'Multiple Monitors',
          titleZh: '多显示器',
          bodyEn:
            'Windows can extend or duplicate the desktop across monitors. Extend gives more workspace for editor and browser; duplicate mirrors the same image for teaching. If a second monitor is missing, check cable, power, and Display settings before assuming the GPU cannot support it.',
          bodyZh:
            'Windows 可以跨显示器扩展或复制桌面。扩展给编辑器与浏览器更多空间；复制则镜像同一画面，方便教学。若第二显示器找不到，先检查线缆、电源与显示设置，再假设 GPU 不支持。',
          bullets: [
            {
              en: 'Extend: more workspace across screens.',
              zh: '扩展：跨屏幕获得更多工作区。',
            },
            {
              en: 'Duplicate: same image on both screens.',
              zh: '复制：两块屏幕显示同一画面。',
            },
            {
              en: 'Missing monitor: check cable, power, then Display settings.',
              zh: '找不到显示器：先查线缆与电源，再查显示设置。',
            },
          ],
        },
        {
          id: 'ch-b-gpu-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'environment',
          bodyEn:
            'Read display settings and look for a GPU entry without changing advanced driver options.',
          bodyZh: '阅读显示设置并查找 GPU 条目，不要改动高级驱动选项。',
          bullets: [
            {
              en: 'Win + I → System → Display and note resolution and scale.',
              zh: 'Win + I → 系统 → 显示，记下分辨率与缩放。',
            },
            {
              en: 'Open Task Manager → Performance and look for GPU if listed.',
              zh: '打开任务管理器 → 性能，如有 GPU 则查看。',
            },
            {
              en: 'Optional: Win + P to see PC screen only / Duplicate / Extend.',
              zh: '可选：按 Win + P 查看仅电脑屏幕 / 复制 / 扩展。',
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
          id: 'ch-b-gpu-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'Graphics problems are often cables, settings, or expectations—not missing silicon.',
          bodyZh: '图形问题常常是线缆、设置或期望，而不是缺少芯片。',
          bullets: [
            {
              en: 'Buying a discrete GPU for basic coding when integrated is enough.',
              zh: '基本编程其实核显够用，却去买独显。',
            },
            {
              en: 'Ignoring a loose HDMI cable.',
              zh: '忽略松动的 HDMI 线。',
            },
            {
              en: 'Confusing blurry scaling with a broken GPU.',
              zh: '把模糊的缩放设置当成 GPU 坏了。',
            },
          ],
        },
        {
          id: 'ch-b-gpu-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Answer in plain language.',
          bodyZh: '用白话作答。',
          bullets: [
            {
              en: 'What is the difference between integrated and discrete graphics?',
              zh: '核显与独显有什么区别？',
            },
            {
              en: 'Where do you change resolution in Windows?',
              zh: '在 Windows 哪里更改分辨率？',
            },
            {
              en: 'Name one reason a second monitor might not appear.',
              zh: '说出第二显示器不出现的一个原因。',
            },
          ],
          noteEn:
            'Answers: built-in vs separate card; Settings → System → Display; cable/power/Win + P mode.',
          noteZh:
            '参考答案：内建相对独立卡；设置 → 系统 → 显示；线缆/电源/Win + P 模式。',
        },
      ],
    },
  ],
}
