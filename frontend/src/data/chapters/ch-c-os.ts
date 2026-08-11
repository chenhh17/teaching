import type { Chapter } from '../../types/course'

export const chCOs: Chapter = {
  id: 'what-os-does',
  titleEn: 'What the OS Does',
  titleZh: '操作系统做什么',
  summaryEn: 'How Windows manages hardware, software, files, processes, and drivers.',
  summaryZh: 'Windows 如何管理硬件、软件、文件、进程与驱动程序。',
  sections: [
    {
      id: 'os-overview',
      titleEn: 'OS Overview',
      titleZh: '操作系统概览',
      slides: [
        {
          id: 'ch-c-os-title',
          layout: 'title',

          titleEn: 'Part C · What the OS Does',
          titleZh: '篇章 C · 操作系统做什么',
          subtitleEn: 'The manager between you, apps, and hardware',
          subtitleZh: '你、应用与硬件之间的管理者',
          keywords: [
            { en: 'Operating System (OS)', zh: '操作系统' },
            { en: 'Windows', zh: 'Windows 系统' },
            { en: 'Hardware', zh: '硬件' },
          ],
        },
        {
          id: 'ch-c-os-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'By the end of this chapter you should be able to explain the operating system as a manager, not as “the screen” or “the browser.”',
          bodyZh:
            '学完本章后，你应能把操作系统说成“管理者”，而不是“屏幕”或“浏览器”。',
          bullets: [
            {
              en: 'Name the main resources an OS manages on a PC.',
              zh: '说出操作系统在电脑上管理的主要资源。',
              keywords: [{ en: 'Operating System', zh: '操作系统' }],
            },
            {
              en: 'Connect files, processes, and drivers to daily Windows use.',
              zh: '把文件、进程、驱动与日常 Windows 使用联系起来。',
            },
            {
              en: 'Explain why hardware knowledge matters before you install tools.',
              zh: '说明为何在安装工具前需要了解硬件。',
            },
          ],
        },
        {
          id: 'ch-c-os-bridge',
          layout: 'text',

          titleEn: 'Hardware Needs a Manager',
          titleZh: '硬件需要管理者',
          bodyEn:
            'CPU, memory, disks, displays, and USB ports are raw resources. Apps should not fight over them alone. The operating system shares those resources fairly and protects them from careless programs.',
          bodyZh:
            'CPU、内存、磁盘、显示器与 USB 接口都是原始资源。应用不应各自抢夺。操作系统负责公平共享，并保护这些资源不被程序随意破坏。',
          bullets: [
            {
              en: 'Hardware chapters described the parts; the OS runs them.',
              zh: '硬件章节讲零件；操作系统负责运转它们。',
              keywords: [
                { en: 'CPU', zh: '中央处理器' },
                { en: 'Memory', zh: '内存' },
              ],
            },
            {
              en: 'Windows is the OS we use throughout this course.',
              zh: '本课程全程以 Windows 作为操作系统。',
              keywords: [{ en: 'Windows', zh: 'Windows 系统' }],
            },
            {
              en: 'When something “does not work,” ask whether software, driver, or hardware failed.',
              zh: '出问题时，先判断是软件、驱动还是硬件出了问题。',
              keywords: [{ en: 'Resource', zh: '资源' }],
            },
          ],
          noteEn: 'Think of Windows as the traffic controller for the whole machine.',
          noteZh: '可以把 Windows 想成整台机器的交通指挥。',
        },
        {
          id: 'ch-c-os-layer',
          layout: 'text',

          titleEn: 'You → Apps → OS → Hardware',
          titleZh: '你 → 应用 → 操作系统 → 硬件',
          bodyEn:
            'You click, type, or open a file. An app asks Windows for help. Windows talks to drivers and hardware. This layered path is why the same browser can run on many different PCs.',
          bodyZh:
            '你点击、输入或打开文件。应用向 Windows 请求帮助。Windows 再与驱动和硬件沟通。正因为这层分工，同一浏览器才能运行在不同电脑上。',
          bullets: [
            {
              en: 'Users rarely talk to hardware directly.',
              zh: '用户很少直接与硬件对话。',
            },
            {
              en: 'Apps request windows, files, network, and memory through the OS.',
              zh: '应用通过操作系统申请窗口、文件、网络与内存。',
              keywords: [{ en: 'Application', zh: '应用' }],
            },
            {
              en: 'Drivers translate OS requests into device-specific actions.',
              zh: '驱动把系统请求翻译成具体设备动作。',
              keywords: [{ en: 'Driver', zh: '驱动程序' }],
            },
          ],
        },
      ],
    },
    {
      id: 'os-jobs',
      titleEn: 'Core Jobs of the OS',
      titleZh: '操作系统的核心工作',
      slides: [
        {
          id: 'ch-c-os-software',
          layout: 'text',

          titleEn: 'Software and Apps',
          titleZh: '软件与应用',
          bodyEn:
            'Windows starts apps, gives them windows and menus, and decides how much CPU time and memory each one may use. Cursor, browsers, games, and classroom tools all depend on those services.',
          bodyZh:
            'Windows 负责启动应用，提供窗口与菜单，并决定每个应用能用多少 CPU 时间与内存。Cursor、浏览器、游戏与课堂工具都依赖这些服务。',
          bullets: [
            {
              en: 'Installers place program files; Windows launches them as apps.',
              zh: '安装程序放入文件；Windows 把它们作为应用启动。',
              keywords: [{ en: 'Application', zh: '应用' }],
            },
            {
              en: 'The OS isolates apps so one crash should not take down everything.',
              zh: '操作系统隔离应用，避免一个崩溃拖垮全部。',
            },
            {
              en: 'Settings and Start are also OS features, not separate “internet tools.”',
              zh: '设置与开始也是系统功能，不是单独的“上网工具”。',
            },
          ],
        },
        {
          id: 'ch-c-os-files',
          layout: 'text',

          titleEn: 'Files and Folders',
          titleZh: '文件与文件夹',
          bodyEn:
            'The OS stores data on disks as files and folders, and it enforces who may open or change them. File Explorer is the Windows face of that file system; later chapters practice it in detail.',
          bodyZh:
            '操作系统把数据以文件和文件夹形式存放在磁盘上，并控制谁可以打开或修改。文件资源管理器是这套文件系统在 Windows 上的界面；后续章节会详细练习。',
          bullets: [
            {
              en: 'A file is a named unit of data; a folder groups related files.',
              zh: '文件是有名字的数据单元；文件夹把相关文件归类。',
              keywords: [
                { en: 'File', zh: '文件' },
                { en: 'Folder', zh: '文件夹' },
              ],
            },
            {
              en: 'Permissions decide read, write, and delete rights.',
              zh: '权限决定读取、写入与删除权利。',
              keywords: [{ en: 'Permission', zh: '权限' }],
            },
            {
              en: 'Win + E opens File Explorer, the daily file tool on Windows.',
              zh: 'Win + E 打开文件资源管理器，这是 Windows 上的日常文件工具。',
              keywords: [{ en: 'File Explorer', zh: '文件资源管理器' }],
            },
          ],
        },
        {
          id: 'ch-c-os-processes',
          layout: 'text',

          titleEn: 'Processes',
          titleZh: '进程',
          bodyEn:
            'A running program is a process. Windows tracks many processes at once and assigns them CPU and memory. Task Manager lets you see which processes are busy when the PC feels slow.',
          bodyZh:
            '正在运行的程序就是一个进程。Windows 同时跟踪许多进程，并为它们分配 CPU 与内存。电脑变慢时，可用任务管理器查看哪些进程很忙。',
          bullets: [
            {
              en: 'An app on disk becomes a process when it is running.',
              zh: '磁盘上的应用在运行时就成为进程。',
              keywords: [{ en: 'Process', zh: '进程' }],
            },
            {
              en: 'One app may start several processes behind the scenes.',
              zh: '一个应用可能在后台启动多个进程。',
            },
            {
              en: 'Ctrl + Shift + Esc opens Task Manager to inspect processes.',
              zh: 'Ctrl + Shift + Esc 打开任务管理器查看进程。',
              keywords: [{ en: 'Task Manager', zh: '任务管理器' }],
            },
          ],
        },
        {
          id: 'ch-c-os-drivers',
          layout: 'text',

          titleEn: 'Drivers Link to Hardware',
          titleZh: '驱动连接硬件',
          bodyEn:
            'A driver is software that teaches Windows how to use a specific device. Printers, GPUs, Wi-Fi adapters, and USB gadgets all need matching drivers. A wrong or missing driver often looks like “the device is broken.”',
          bodyZh:
            '驱动程序是教 Windows 如何使用某台设备的软件。打印机、显卡、Wi-Fi 与 USB 设备都需要匹配的驱动。驱动错误或缺失，常表现为“设备坏了”。',
          bullets: [
            {
              en: 'Drivers sit between Windows and the physical device.',
              zh: '驱动位于 Windows 与物理设备之间。',
              keywords: [{ en: 'Driver', zh: '驱动程序' }],
            },
            {
              en: 'Windows Update often delivers important driver fixes.',
              zh: 'Windows 更新经常会带来重要的驱动修复。',
            },
            {
              en: 'Prefer official or Windows Update drivers over random download sites.',
              zh: '优先用官方或 Windows 更新的驱动，不要随便下载。',
            },
          ],
          noteEn: 'This connects to the ports and devices topics from the hardware part.',
          noteZh: '这与硬件篇中的接口与设备内容相衔接。',
        },
      ],
    },
    {
      id: 'windows-example',
      titleEn: 'Windows as the Example',
      titleZh: '以 Windows 为例',
      slides: [
        {
          id: 'ch-c-os-windows',
          layout: 'text',

          titleEn: 'Windows Is Our Course OS',
          titleZh: 'Windows 是本课程的操作系统',
          bodyEn:
            'Desktop, Start, Settings, File Explorer, accounts, and updates are all OS features. We stay Windows-first so lab steps match what you see on school and personal PCs.',
          bodyZh:
            '桌面、开始、设置、文件资源管理器、账户与更新都是系统功能。本课程以 Windows 为主，使实验步骤与机房和个人电脑一致。',
          bullets: [
            {
              en: 'Learn the built-in tools before installing “optimizer” utilities.',
              zh: '先学会内置工具，再考虑所谓“优化软件”。',
            },
            {
              en: 'Accounts control who can install software and change the system.',
              zh: '账户决定谁可以安装软件并更改系统。',
              keywords: [
                { en: 'Account', zh: '账户' },
                { en: 'Update', zh: '更新' },
              ],
            },
            {
              en: 'Later chapters dig into desktop, processes, and updates on Windows.',
              zh: '后续章节会深入 Windows 桌面、进程与更新。',
            },
          ],
        },
        {
          id: 'ch-c-os-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Open three OS surfaces and notice that each one is still Windows managing the PC.',
          bodyZh: '打开三个系统界面，注意它们都是 Windows 在管理这台电脑。',
          bullets: [
            {
              en: 'Press Win + I and browse System → About for device name and Windows edition.',
              zh: '按 Win + I，打开 系统 → 关于，查看设备名与 Windows 版本。',
            },
            {
              en: 'Press Win + E to open File Explorer and read the address bar path.',
              zh: '按 Win + E 打开文件资源管理器，并阅读地址栏路径。',
            },
            {
              en: 'Press Ctrl + Shift + Esc and look at the Processes tab for a few running apps.',
              zh: '按 Ctrl + Shift + Esc，在“进程”选项卡中查看几个正在运行的应用。',
              keywords: [{ en: 'Task Manager', zh: '任务管理器' }],
            },
          ],
        },
        {
          id: 'ch-c-os-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Thinking the browser is the operating system.',
              zh: '把浏览器当成操作系统。',
            },
            {
              en: 'Blaming “the PC” when a missing driver is the real issue.',
              zh: '真正是驱动缺失，却笼统怪“电脑坏了”。',
            },
            {
              en: 'Ignoring OS basics until install day, then getting stuck.',
              zh: '平时忽视系统知识，安装软件那天才卡住。',
            },
          ],
        },
        {
          id: 'ch-c-os-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'Name three things an OS manages.',
              zh: '说出操作系统管理的三件事。',
            },
            {
              en: 'What does a driver connect?',
              zh: '驱动程序连接的是什么？',
            },
            {
              en: 'Which Windows tool shows running processes?',
              zh: '哪个 Windows 工具显示正在运行的进程？',
            },
          ],
          noteEn: 'Answers: apps/files/processes (or hardware); OS and devices; Task Manager.',
          noteZh: '参考答案：应用/文件/进程（或硬件）；系统与设备；任务管理器。',
        },
      ],
    },
  ],
}
