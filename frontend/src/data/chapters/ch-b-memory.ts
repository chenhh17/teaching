import type { Chapter } from '../../types/course'

export const chBMemory: Chapter = {
  id: 'memory-and-storage',
  titleEn: 'Memory and Storage',
  titleZh: '内存与存储',
  summaryEn:
    'Tell RAM from SSD/HDD, watch C: drive space in Windows, and know what shutdown clears.',
  summaryZh: '分清内存与 SSD/HDD，在 Windows 上关注 C: 盘空间，并知道关机清空什么。',
  sections: [
    {
      id: 'two-kinds',
      titleEn: 'Two Kinds of Space',
      titleZh: '两种“空间”',
      slides: [
        {
          id: 'ch-b-memory-title',
          layout: 'title',

          titleEn: 'Part B · Memory and Storage',
          titleZh: '篇章 B · 内存与存储',
          subtitleEn: 'Working desk vs filing cabinet on a Windows PC',
          subtitleZh: 'Windows 电脑上的“书桌”与“文件柜”',
          illustration: 'title',
          keywords: [
            { en: 'RAM', zh: '内存' },
            { en: 'Storage', zh: '存储' },
            { en: 'C: Drive', zh: 'C: 盘' },
          ],
        },
        {
          id: 'ch-b-memory-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Students often say “memory is full” for two different problems. This chapter separates them.',
          bodyZh: '学生常把两种不同问题都说成“内存满了”。本章把它们分开。',
          bullets: [
            {
              en: 'Distinguish RAM (working memory) from storage (kept files).',
              zh: '分清 RAM（工作内存）与存储（保存的文件）。',
            },
            {
              en: 'Check Memory in Task Manager and space on C:.',
              zh: '在任务管理器查看内存，并检查 C: 盘空间。',
            },
            {
              en: 'Explain what shutdown typically clears versus keeps.',
              zh: '说明关机通常清空什么、保留什么。',
            },
          ],
        },
        {
          id: 'ch-b-memory-ram',
          layout: 'text',

          titleEn: 'RAM: The Working Desk',
          titleZh: '内存：工作书桌',
          illustration: 'hardware',
          bodyEn:
            'RAM is fast working memory for open apps and the OS. Think of a desk: the more clear space, the easier it is to keep several projects open. When RAM is tight, Windows may feel slow as it shuffles data. Closing unused apps frees RAM faster than deleting photos.',
          bodyZh:
            'RAM 是给打开的应用与操作系统用的快速工作内存。可以想成书桌：空位越多，越容易同时摊开几个项目。内存紧张时，Windows 会因来回搬移数据而变慢。关闭不用的应用，比删除照片更能立刻释放 RAM。',
          bullets: [
            {
              en: 'RAM holds data for apps that are open right now.',
              zh: 'RAM 保存此刻打开的应用所用的数据。',
              keywords: [{ en: 'RAM', zh: '内存' }],
            },
            {
              en: 'It is fast, but usually cleared by a full shutdown.',
              zh: '它很快，但完全关机后通常会被清空。',
            },
            {
              en: 'Low RAM can make Windows feel laggy with many apps open.',
              zh: '内存偏低时，多开应用会让 Windows 感觉卡顿。',
            },
          ],
        },
        {
          id: 'ch-b-memory-storage',
          layout: 'text',

          titleEn: 'Storage: The Filing Cabinet',
          titleZh: '存储：文件柜',
          illustration: 'files',
          bodyEn:
            'Storage keeps files after you close apps and after shutdown. Documents, photos, installers, and Windows itself live here. When C: is almost full, installs fail and updates struggle. Freeing storage means deleting or moving files, not only closing browser tabs.',
          bodyZh:
            '存储在关闭应用甚至关机之后仍保存文件。文档、照片、安装包与 Windows 本身都在这里。C: 盘快满时，安装会失败，更新也会吃力。释放存储意味着删除或移动文件，而不是只关掉浏览器标签。',
          bullets: [
            {
              en: 'Storage keeps files after shutdown.',
              zh: '存储在关机后仍保存文件。',
              keywords: [{ en: 'Storage', zh: '存储' }],
            },
            {
              en: 'Windows, apps, and your documents live on storage drives.',
              zh: 'Windows、应用与你的文档都在存储驱动器上。',
            },
            {
              en: 'A nearly full C: drive causes install and update pain.',
              zh: 'C: 盘几乎满时，安装与更新会很痛苦。',
            },
          ],
        },
      ],
    },
    {
      id: 'storage-on-windows',
      titleEn: 'Storage on Windows',
      titleZh: 'Windows 上的存储',
      slides: [
        {
          id: 'ch-b-memory-ssd-hdd',
          layout: 'text',

          titleEn: 'SSD vs HDD',
          titleZh: 'SSD 与 HDD',
          illustration: 'hardware',
          bodyEn:
            'An SSD is usually much faster for booting Windows and opening projects. An HDD is often larger and cheaper per gigabyte, but slower and more mechanical. Many modern student PCs use an SSD for C:. Knowing the difference helps you interpret why one PC feels snappy and another feels “always waiting.”',
          bodyZh:
            'SSD 在启动 Windows 与打开项目时通常快很多。HDD 往往容量更大、单位价格更便宜，但更慢且有机械结构。许多现代学生电脑用 SSD 作为 C:。知道区别，有助于理解为什么有的电脑很利落，有的总像在等待。',
          bullets: [
            {
              en: 'SSD: faster for boot and opening files.',
              zh: 'SSD：启动与打开文件更快。',
              keywords: [{ en: 'SSD', zh: '固态硬盘' }],
            },
            {
              en: 'HDD: often larger capacity, slower access.',
              zh: 'HDD：容量常更大，访问更慢。',
              keywords: [{ en: 'HDD', zh: '机械硬盘' }],
            },
            {
              en: 'Student coding feels better on an SSD system drive.',
              zh: '系统盘是 SSD 时，学生写代码体验更好。',
            },
          ],
        },
        {
          id: 'ch-b-memory-c-drive',
          layout: 'text',

          titleEn: 'Watch the C: Drive',
          titleZh: '关注 C: 盘',
          illustration: 'files',
          bodyEn:
            'On most Windows PCs, C: holds the operating system and many apps. File Explorer’s This PC view shows free space. Settings → System → Storage gives a breakdown. Keep free space for updates, virtual memory, and installers. Filling C: with downloads is a common lab failure.',
          bodyZh:
            '多数 Windows 电脑上，C: 装着操作系统与许多应用。文件资源管理器的“此电脑”可看剩余空间。“设置 → 系统 → 存储”会给出分类。请为更新、虚拟内存与安装包留出空间。把下载塞满 C: 是常见实验失败原因。',
          bullets: [
            {
              en: 'C: usually holds Windows and many installed apps.',
              zh: 'C: 通常装着 Windows 与许多已安装应用。',
              keywords: [{ en: 'C: Drive', zh: 'C: 盘' }],
            },
            {
              en: 'Check free space in This PC or Settings → Storage.',
              zh: '在“此电脑”或“设置 → 存储”检查剩余空间。',
            },
            {
              en: 'Leave free space for updates and installers.',
              zh: '为更新与安装包留出剩余空间。',
            },
          ],
        },
        {
          id: 'ch-b-memory-shutdown',
          layout: 'text',

          titleEn: 'What Shutdown Clears',
          titleZh: '关机清空什么',
          bodyEn:
            'A full shutdown clears most RAM contents. Your files on SSD or HDD remain. Sleep and hibernate behave differently: sleep keeps more state in RAM, hibernate can write state to disk. For beginners, remember the simple rule: unsaved editor work can vanish; saved files should still be there after reboot.',
          bodyZh:
            '完全关机通常清空大部分 RAM 内容。SSD 或 HDD 上的文件仍在。睡眠与休眠不同：睡眠更多把状态留在 RAM，休眠可能把状态写入磁盘。对初学者，记住简单规则：未保存的编辑器内容可能消失；已保存文件重启后应仍在。',
          bullets: [
            {
              en: 'Full shutdown clears most RAM contents.',
              zh: '完全关机通常清空大部分 RAM 内容。',
            },
            {
              en: 'Saved files on storage remain after reboot.',
              zh: '存储上已保存的文件重启后仍在。',
            },
            {
              en: 'Unsaved editor work can be lost.',
              zh: '未保存的编辑器内容可能丢失。',
            },
          ],
        },
        {
          id: 'ch-b-memory-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'environment',
          bodyEn:
            'Compare Memory pressure and C: free space on the same PC.',
          bodyZh: '在同一台电脑上对比内存压力与 C: 剩余空间。',
          bullets: [
            {
              en: 'Open Task Manager → Performance → Memory and note In use.',
              zh: '打开任务管理器 → 性能 → 内存，记下“正在使用”。',
              keywords: [{ en: 'Task Manager', zh: '任务管理器' }],
            },
            {
              en: 'Open File Explorer → This PC and read free space on C:.',
              zh: '打开文件资源管理器 → 此电脑，查看 C: 剩余空间。',
            },
            {
              en: 'Optional: Win + I → System → Storage for a category breakdown.',
              zh: '可选：Win + I → 系统 → 存储，查看分类占用。',
            },
          ],
        },
      ],
    },
    {
      id: 'practice-check',
      titleEn: 'Practice and Check',
      titleZh: '练习与自测',
      slides: [
        {
          id: 'ch-b-memory-errors',
          layout: 'callout',
          titleEn: 'Common Mix-ups',
          titleZh: '常见误解',
          bodyEn:
            'Using the word “memory” for every slowdown hides the real fix.',
          bodyZh: '把每次变慢都叫“内存”，会掩盖真正的修复方法。',
          bullets: [
            {
              en: 'Calling a full C: drive a “RAM problem.”',
              zh: '把 C: 盘满了说成“内存问题”。',
            },
            {
              en: 'Deleting photos to fix short-term RAM pressure from too many apps.',
              zh: '因为开太多应用导致短期内存紧张，却去删照片。',
            },
            {
              en: 'Assuming sleep and shutdown clear the same things.',
              zh: '以为睡眠与关机清空的东西一样。',
            },
          ],
        },
        {
          id: 'ch-b-memory-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Use the desk vs cabinet metaphor if it helps.',
          bodyZh: '需要时可用书桌与文件柜的比喻。',
          bullets: [
            {
              en: 'Is RAM the desk or the filing cabinet?',
              zh: 'RAM 是书桌还是文件柜？',
            },
            {
              en: 'Where do you check free space on C: quickly?',
              zh: '在哪里可以快速查看 C: 剩余空间？',
            },
            {
              en: 'What usually happens to RAM after a full shutdown?',
              zh: '完全关机后，RAM 通常会怎样？',
            },
          ],
          noteEn:
            'Answers: desk; This PC or Settings → Storage; most contents are cleared.',
          noteZh: '参考答案：书桌；此电脑或设置 → 存储；大部分内容被清空。',
        },
      ],
    },
  ],
}
