import type { Chapter } from '../../types/course'

export const chBBios: Chapter = {
  id: 'bios-boot-power',
  titleEn: 'BIOS, Boot, and Power',
  titleZh: 'BIOS、启动与电源',
  summaryEn:
    'Follow the path from power button to Windows desktop, and learn what BIOS/UEFI and boot order mean for beginners.',
  summaryZh: '跟随从电源键到 Windows 桌面的路径，了解 BIOS/UEFI 与启动顺序对初学者意味着什么。',
  sections: [
    {
      id: 'power-on',
      titleEn: 'Power On',
      titleZh: '开机',
      slides: [
        {
          id: 'ch-b-bios-title',
          layout: 'title',

          titleEn: 'Part B · BIOS, Boot, and Power',
          titleZh: '篇章 B · BIOS、启动与电源',
          subtitleEn: 'From power button to a usable Windows desktop',
          subtitleZh: '从电源键到可用的 Windows 桌面',
          illustration: 'title',
          keywords: [
            { en: 'BIOS / UEFI', zh: 'BIOS / UEFI' },
            { en: 'Boot', zh: '启动' },
            { en: 'Power', zh: '电源' },
          ],
        },
        {
          id: 'ch-b-bios-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will understand the boot story at a beginner level without changing firmware settings on school PCs.',
          bodyZh:
            '你会以入门级别理解启动故事，且不必在学校电脑上改动固件设置。',
          bullets: [
            {
              en: 'Describe what happens after you press the power button.',
              zh: '描述按下电源键之后发生什么。',
            },
            {
              en: 'Explain BIOS/UEFI as early firmware before Windows.',
              zh: '把 BIOS/UEFI 解释为 Windows 之前的早期固件。',
            },
            {
              en: 'Know why boot order matters when USB installers are used.',
              zh: '知道使用 USB 安装盘时启动顺序为何重要。',
            },
          ],
        },
        {
          id: 'ch-b-bios-power',
          layout: 'text',

          titleEn: 'Power Button Starts a Chain',
          titleZh: '电源键启动一条链条',
          illustration: 'hardware',
          bodyEn:
            'Pressing power is not the same as “Windows opens instantly.” Electricity reaches the board, fans may spin, firmware runs checks, then the system looks for a boot device and finally loads Windows. If any early step fails, you may see lights or beeps but no desktop. Knowing the chain helps you describe problems clearly.',
          bodyZh:
            '按电源并不等于“Windows 立刻出现”。电力到达主板，风扇可能转动，固件运行检查，然后系统寻找启动设备，最后加载 Windows。若早期任一步失败，你可能只见灯或蜂鸣却没有桌面。知道这条链条，有助于把问题描述清楚。',
          bullets: [
            {
              en: 'Power reaches the board and early hardware wakes.',
              zh: '电力到达主板，早期硬件醒来。',
            },
            {
              en: 'Firmware runs before the Windows desktop appears.',
              zh: '在 Windows 桌面出现之前，固件先运行。',
            },
            {
              en: 'Then Windows loads from storage if boot succeeds.',
              zh: '若启动成功，Windows 再从存储加载。',
            },
          ],
        },
        {
          id: 'ch-b-bios-bios',
          layout: 'text',

          titleEn: 'BIOS / UEFI: Early Firmware',
          titleZh: 'BIOS / UEFI：早期固件',
          illustration: 'hardware',
          bodyEn:
            'BIOS or modern UEFI is firmware stored on the motherboard. It initializes hardware and decides where to look for an operating system. Beginners rarely need to change settings there. On school machines, entering setup without guidance can make a PC fail to boot Windows until staff repair boot order.',
          bodyZh:
            'BIOS 或现代 UEFI 是存储在主板上的固件。它初始化硬件，并决定去哪里寻找操作系统。初学者很少需要改那里的设置。在学校机器上，没有指导就进设置，可能让电脑找不到 Windows，直到管理人员修好启动顺序。',
          bullets: [
            {
              en: 'Firmware runs before Windows.',
              zh: '固件在 Windows 之前运行。',
              keywords: [{ en: 'BIOS / UEFI', zh: 'BIOS / UEFI' }],
            },
            {
              en: 'It initializes hardware and chooses a boot source.',
              zh: '它初始化硬件并选择启动来源。',
            },
            {
              en: 'Do not change school PC firmware settings without staff.',
              zh: '没有管理人员许可，不要改学校电脑固件设置。',
            },
          ],
        },
      ],
    },
    {
      id: 'bios-and-boot',
      titleEn: 'Boot Order and Windows',
      titleZh: '启动顺序与 Windows',
      slides: [
        {
          id: 'ch-b-bios-boot-order',
          layout: 'text',

          titleEn: 'Boot Order',
          titleZh: '启动顺序',
          illustration: 'files',
          bodyEn:
            'Boot order is the list of places firmware tries: internal SSD, USB drive, network, and so on. If USB is first and an installer stick is plugged in, the PC may open a setup menu instead of Windows. That is useful for reinstall labs and confusing when you only wanted your desktop.',
          bodyZh:
            '启动顺序是固件尝试的位置列表：内部 SSD、U 盘、网络等。若 USB 优先且插着安装盘，电脑可能进入安装菜单而不是 Windows。这对重装实验有用；若你只想进桌面，就会很困惑。',
          bullets: [
            {
              en: 'Firmware tries devices in a listed order.',
              zh: '固件按列表顺序尝试设备。',
              keywords: [{ en: 'Boot Order', zh: '启动顺序' }],
            },
            {
              en: 'A USB installer first can hide the normal Windows boot.',
              zh: 'USB 安装盘优先时，可能挡住正常 Windows 启动。',
            },
            {
              en: 'Remove unexpected USB sticks if Windows does not start.',
              zh: '若 Windows 不启动，先拔掉意外的 U 盘。',
            },
          ],
        },
        {
          id: 'ch-b-bios-windows-loads',
          layout: 'text',

          titleEn: 'Windows Loads',
          titleZh: 'Windows 加载',
          illustration: 'environment',
          bodyEn:
            'After firmware finds a valid system disk, the Windows bootloader starts the OS. Drivers load, services start, and you reach sign-in. Slow boots can come from a nearly full C: drive, many startup apps, or a failing disk. Task Manager’s Startup apps view helps later, after you reach the desktop.',
          bodyZh:
            '固件找到有效系统盘后，Windows 引导程序启动操作系统。驱动加载、服务启动，然后进入登录。开机慢可能来自 C: 盘几乎满、启动项过多，或磁盘异常。到达桌面后，任务管理器的“启动应用”视图会有帮助。',
          bullets: [
            {
              en: 'The bootloader starts Windows from storage.',
              zh: '引导程序从存储启动 Windows。',
              keywords: [{ en: 'Bootloader', zh: '引导程序' }],
            },
            {
              en: 'Drivers and services start before a full desktop session.',
              zh: '完整桌面会话前会启动驱动与服务。',
            },
            {
              en: 'Slow boots often relate to storage fullness or startup apps.',
              zh: '开机慢常常与存储空间或启动应用有关。',
            },
          ],
        },
        {
          id: 'ch-b-bios-desktop',
          layout: 'text',

          titleEn: 'Desktop Means Boot Succeeded',
          titleZh: '桌面表示启动成功',
          illustration: 'interface',
          bodyEn:
            'Reaching the Windows desktop means the power supply, firmware, boot device, and Windows load chain worked far enough for interactive use. That is a useful diagnostic boundary: hardware and early boot succeeded, so later problems are more likely drivers, accounts, apps, or network settings. From the desktop you can open Settings, File Explorer, and Task Manager. If you never reach desktop, describe the last thing you saw—logo, spinning dots, error text, or black screen—because that clue points to a different stage than a slow-but-successful login.',
          bodyZh:
            '到达 Windows 桌面意味着电源、固件、启动设备与 Windows 加载链条已足够支持交互使用。这是一条有用的诊断分界：硬件与早期启动已成功，后面的问题更可能出在驱动、账户、应用或网络设置。从桌面你可以打开设置、文件资源管理器与任务管理器。若永远到不了桌面，请描述你看到的最后画面——徽标、转圈、错误文字或黑屏——因为这些线索指向的阶段，与“能登录但很慢”并不相同。',
          bullets: [
            {
              en: 'Desktop access means the early boot chain succeeded.',
              zh: '能进桌面表示早期启动链条已成功。',
            },
            {
              en: 'Use Settings and Task Manager for later health checks.',
              zh: '之后可用设置与任务管理器做健康检查。',
            },
            {
              en: 'When boot fails, report the last screen you saw.',
              zh: '启动失败时，报告你看到的最后画面。',
            },
            {
              en: 'Separate “no desktop” failures from “desktop works but apps fail”.',
              zh: '把“进不了桌面”与“桌面正常但应用失败”分开看。',
            },
          ],
        },
        {
          id: 'ch-b-bios-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'environment',
          bodyEn:
            'Stay inside Windows. Do not enter BIOS setup on school PCs.',
          bodyZh: '留在 Windows 内操作。不要在学校电脑进入 BIOS 设置。',
          bullets: [
            {
              en: 'Restart once and watch the path to the sign-in screen.',
              zh: '重启一次，观察到达登录界面的过程。',
            },
            {
              en: 'After login, open Task Manager → Startup apps and count enabled items.',
              zh: '登录后打开任务管理器 → 启动应用，数一数已启用项。',
              keywords: [{ en: 'Startup Apps', zh: '启动应用' }],
            },
            {
              en: 'In Settings → System → About, note Windows version.',
              zh: '在设置 → 系统 → 关于，记下 Windows 版本。',
            },
          ],
          noteEn: 'Do not change BIOS/UEFI on school machines.',
          noteZh: '不要在学校机器上改 BIOS/UEFI。',
        },
      ],
    },
    {
      id: 'practice-check',
      titleEn: 'Practice and Check',
      titleZh: '练习与自测',
      slides: [
        {
          id: 'ch-b-bios-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'Firmware curiosity without a recovery plan is how lab PCs stop booting.',
          bodyZh: '没有恢复计划的固件好奇，是实验室电脑无法启动的常见原因。',
          bullets: [
            {
              en: 'Changing BIOS options on a shared PC “to explore.”',
              zh: '在公用电脑上“探索式”改 BIOS 选项。',
            },
            {
              en: 'Leaving an installer USB plugged in and wondering why setup appears.',
              zh: '插着安装 U 盘却奇怪为何进入安装界面。',
            },
            {
              en: 'Calling every slow boot a “BIOS problem.”',
              zh: '把每次开机慢都说成“BIOS 问题”。',
            },
          ],
        },
        {
          id: 'ch-b-bios-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Keep the boot chain in order when you answer.',
          bodyZh: '作答时请按启动链条的顺序思考。',
          bullets: [
            {
              en: 'What runs before Windows: firmware or File Explorer?',
              zh: 'Windows 之前运行的是固件还是文件资源管理器？',
            },
            {
              en: 'What is boot order?',
              zh: '什么是启动顺序？',
            },
            {
              en: 'Why might a USB stick stop Windows from appearing?',
              zh: '为什么 U 盘可能让 Windows 无法出现？',
            },
          ],
          noteEn:
            'Answers: firmware; the list of devices firmware tries; USB may be first in boot order with an installer.',
          noteZh:
            '参考答案：固件；固件尝试设备的列表；USB 可能在启动顺序中靠前且带有安装程序。',
        },
      ],
    },
  ],
}
