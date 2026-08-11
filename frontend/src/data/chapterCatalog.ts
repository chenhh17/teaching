export type ChapterSectionMeta = {
  id: string
  titleEn: string
  titleZh: string
  firstSlideId: string
  slideIds: string[]
}

export type ChapterMeta = {
  id: string
  titleEn: string
  titleZh: string
  summaryEn: string
  summaryZh: string
  slideCount: number
  firstSlideId: string
  sections: ChapterSectionMeta[]
}

export const chapterCatalog: ChapterMeta[] = [
  {
    "id": "algorithms-and-pseudocode",
    "titleEn": "Algorithms and Pseudocode",
    "titleZh": "算法与伪代码",
    "summaryEn": "Plan with decomposition, patterns, and abstraction; write finite Windows-ready steps in pseudocode before Python or PowerShell.",
    "summaryZh": "用分解、模式与抽象做计划；在 Python 或 PowerShell 之前，用伪代码写出有限、可执行的 Windows 步骤。",
    "slideCount": 21,
    "firstSlideId": "ch-a-algorithms-title",
    "sections": [
      {
        "id": "what-is-an-algorithm",
        "titleEn": "Plans Before Code",
        "titleZh": "代码之前的计划",
        "firstSlideId": "ch-a-algorithms-title",
        "slideIds": [
          "ch-a-algorithms-title",
          "ch-a-algorithms-goals",
          "ch-a-algorithms-why-plan",
          "ch-a-algorithms-definition",
          "ch-a-algorithms-decompose",
          "ch-a-algorithms-pattern",
          "ch-a-algorithms-abstract",
          "ch-a-algorithms-three-layers"
        ]
      },
      {
        "id": "control-ideas",
        "titleEn": "Control Ideas and a Worked Example",
        "titleZh": "控制结构与完整例子",
        "firstSlideId": "ch-a-algorithms-control",
        "slideIds": [
          "ch-a-algorithms-control",
          "ch-a-algorithms-sequence-windows",
          "ch-a-algorithms-choice",
          "ch-a-algorithms-loop",
          "ch-a-algorithms-flowchart",
          "ch-a-algorithms-worked-setup",
          "ch-a-algorithms-worked-steps",
          "ch-a-algorithms-example",
          "ch-a-algorithms-trace",
          "ch-a-algorithms-try"
        ]
      },
      {
        "id": "check-in",
        "titleEn": "From Plan to Practice",
        "titleZh": "从计划到练习",
        "firstSlideId": "ch-a-algorithms-to-tools",
        "slideIds": [
          "ch-a-algorithms-to-tools",
          "ch-a-algorithms-mistakes",
          "ch-a-algorithms-check"
        ]
      }
    ]
  },
  {
    "id": "cursor-workspace-tour",
    "titleEn": "Cursor Workspace Tour",
    "titleZh": "Cursor 工作区导览",
    "summaryEn": "Tour Cursor on Windows: explorer sidebar, editor, terminal, command palette, opening folders, saving files, and a light look at extensions—with real Windows paths.",
    "summaryZh": "在 Windows 上导览 Cursor：资源管理器侧边栏、编辑器、终端、命令面板、打开文件夹、保存文件，以及扩展的轻度介绍——并使用真实 Windows 路径。",
    "slideCount": 17,
    "firstSlideId": "ch-a-cursor-workspace-title",
    "sections": [
      {
        "id": "workspace-map",
        "titleEn": "Workspace Map",
        "titleZh": "工作区地图",
        "firstSlideId": "ch-a-cursor-workspace-title",
        "slideIds": [
          "ch-a-cursor-workspace-title",
          "ch-a-cursor-workspace-goals",
          "ch-a-cursor-workspace-layout",
          "ch-a-cursor-workspace-open-folder",
          "ch-a-cursor-workspace-sidebar"
        ]
      },
      {
        "id": "main-panels",
        "titleEn": "Main Panels",
        "titleZh": "主要面板",
        "firstSlideId": "ch-a-cursor-workspace-editor",
        "slideIds": [
          "ch-a-cursor-workspace-editor",
          "ch-a-cursor-workspace-terminal",
          "ch-a-cursor-workspace-palette",
          "ch-a-cursor-workspace-chat",
          "ch-a-cursor-workspace-save",
          "ch-a-cursor-workspace-extensions"
        ]
      },
      {
        "id": "practice-check",
        "titleEn": "Practice and Check",
        "titleZh": "练习与自测",
        "firstSlideId": "ch-a-cursor-workspace-try",
        "slideIds": [
          "ch-a-cursor-workspace-try",
          "ch-a-cursor-workspace-errors",
          "ch-a-cursor-workspace-check",
          "ch-a-cursor-workspace-bridge",
          "ch-a-cursor-workspace-paths",
          "ch-a-cursor-workspace-habits"
        ]
      }
    ]
  },
  {
    "id": "install-cursor",
    "titleEn": "Installing Cursor",
    "titleZh": "安装 Cursor",
    "summaryEn": "Understand what Cursor is, download it from the official site, install it on Windows, finish first launch and folder trust, and see how it differs from Notepad.",
    "summaryZh": "理解 Cursor 是什么，从官方网站下载，在 Windows 上安装，完成首次启动与文件夹信任，并看清它与记事本的区别。",
    "slideCount": 16,
    "firstSlideId": "ch-a-cursor-title",
    "sections": [
      {
        "id": "what-is-cursor",
        "titleEn": "What Is Cursor",
        "titleZh": "什么是 Cursor",
        "firstSlideId": "ch-a-cursor-title",
        "slideIds": [
          "ch-a-cursor-title",
          "ch-a-cursor-goals",
          "ch-a-cursor-definition",
          "ch-a-cursor-vs-notepad",
          "ch-a-cursor-role"
        ]
      },
      {
        "id": "download-and-install",
        "titleEn": "Download and Install",
        "titleZh": "下载与安装",
        "firstSlideId": "ch-a-cursor-download",
        "slideIds": [
          "ch-a-cursor-download",
          "ch-a-cursor-installer-file",
          "ch-a-cursor-install",
          "ch-a-cursor-first-launch",
          "ch-a-cursor-account",
          "ch-a-cursor-trust"
        ]
      },
      {
        "id": "first-use-check",
        "titleEn": "First Use and Check",
        "titleZh": "初次使用与检查",
        "firstSlideId": "ch-a-cursor-first-use",
        "slideIds": [
          "ch-a-cursor-first-use",
          "ch-a-cursor-try",
          "ch-a-cursor-errors",
          "ch-a-cursor-check",
          "ch-a-cursor-bridge"
        ]
      }
    ]
  },
  {
    "id": "how-learners-practice",
    "titleEn": "How Learners Practice",
    "titleZh": "学习者如何练习",
    "summaryEn": "Build lasting Windows learning habits: spaced practice, typing over watching, error journals, tiny daily loops, and smart use of this courseware.",
    "summaryZh": "建立能坚持的 Windows 学习习惯：间隔练习、多敲少看、错误日志、每日小循环，以及善用本课件。",
    "slideCount": 16,
    "firstSlideId": "ch-a-practice-title",
    "sections": [
      {
        "id": "why-habits",
        "titleEn": "Why Habits Matter",
        "titleZh": "为什么习惯重要",
        "firstSlideId": "ch-a-practice-title",
        "slideIds": [
          "ch-a-practice-title",
          "ch-a-practice-goals",
          "ch-a-practice-skill-not-content",
          "ch-a-practice-tiny-daily",
          "ch-a-practice-spaced",
          "ch-a-practice-when-notes",
          "ch-a-practice-write-notes"
        ]
      },
      {
        "id": "practice-methods",
        "titleEn": "Practice Methods",
        "titleZh": "练习方法",
        "firstSlideId": "ch-a-practice-run-yourself",
        "slideIds": [
          "ch-a-practice-run-yourself",
          "ch-a-practice-error-journal",
          "ch-a-practice-break-small",
          "ch-a-practice-keywords",
          "ch-a-practice-courseware",
          "ch-a-practice-try"
        ]
      },
      {
        "id": "apply-and-check",
        "titleEn": "Apply and Check",
        "titleZh": "应用与自测",
        "firstSlideId": "ch-a-practice-weekly",
        "slideIds": [
          "ch-a-practice-weekly",
          "ch-a-practice-errors",
          "ch-a-practice-check"
        ]
      }
    ]
  },
  {
    "id": "learning-programming",
    "titleEn": "Learning Programming",
    "titleZh": "学习编程",
    "summaryEn": "What programming is, how a Windows PC really runs your instructions, and which tools beginners meet first.",
    "summaryZh": "什么是编程、Windows 电脑如何真正执行你的指令，以及初学者会先遇到哪些工具。",
    "slideCount": 18,
    "firstSlideId": "ch-a-programming-title",
    "sections": [
      {
        "id": "what-is-programming",
        "titleEn": "What Is Programming",
        "titleZh": "什么是编程",
        "firstSlideId": "ch-a-programming-title",
        "slideIds": [
          "ch-a-programming-title",
          "ch-a-programming-goals",
          "ch-a-programming-definition",
          "ch-a-programming-language",
          "ch-a-programming-literal",
          "ch-a-programming-why",
          "ch-a-programming-mindset",
          "ch-a-programming-worked-idea"
        ]
      },
      {
        "id": "how-beginners-start",
        "titleEn": "Windows Tools and Practice",
        "titleZh": "Windows 工具与练习",
        "firstSlideId": "ch-a-programming-tools-preview",
        "slideIds": [
          "ch-a-programming-tools-preview",
          "ch-a-programming-editor-role",
          "ch-a-programming-windows-path",
          "ch-a-programming-project-home",
          "ch-a-programming-try",
          "ch-a-programming-practice-loop",
          "ch-a-programming-roadmap"
        ]
      },
      {
        "id": "check-in",
        "titleEn": "Check In",
        "titleZh": "检查一下",
        "firstSlideId": "ch-a-programming-errors",
        "slideIds": [
          "ch-a-programming-errors",
          "ch-a-programming-check",
          "ch-a-programming-bridge"
        ]
      }
    ]
  },
  {
    "id": "computational-thinking",
    "titleEn": "Computational Thinking",
    "titleZh": "计算思维",
    "summaryEn": "Break problems into steps a computer can follow: decompose, abstract, find patterns, and write algorithms with clear inputs and outputs.",
    "summaryZh": "把问题拆成计算机能执行的步骤：分解、抽象、找模式，并用清晰的输入与输出写出算法。",
    "slideCount": 18,
    "firstSlideId": "ch-a-thinking-title",
    "sections": [
      {
        "id": "thinking-like-a-computer",
        "titleEn": "Thinking Like a Computer",
        "titleZh": "像计算机一样思考",
        "firstSlideId": "ch-a-thinking-title",
        "slideIds": [
          "ch-a-thinking-title",
          "ch-a-thinking-goals",
          "ch-a-thinking-what",
          "ch-a-thinking-not-coding",
          "ch-a-thinking-four",
          "ch-a-thinking-decompose",
          "ch-a-thinking-abstract",
          "ch-a-thinking-pattern",
          "ch-a-thinking-algorithm-habit"
        ]
      },
      {
        "id": "inputs-and-steps",
        "titleEn": "Inputs, Steps, Outputs",
        "titleZh": "输入、步骤、输出",
        "firstSlideId": "ch-a-thinking-io",
        "slideIds": [
          "ch-a-thinking-io",
          "ch-a-thinking-io-windows",
          "ch-a-thinking-binary",
          "ch-a-thinking-decompose-example",
          "ch-a-thinking-try",
          "ch-a-thinking-second-example"
        ]
      },
      {
        "id": "check-in",
        "titleEn": "Check In",
        "titleZh": "检查一下",
        "firstSlideId": "ch-a-thinking-mistakes",
        "slideIds": [
          "ch-a-thinking-mistakes",
          "ch-a-thinking-check",
          "ch-a-thinking-bridge"
        ]
      }
    ]
  },
  {
    "id": "windows-daily-skills",
    "titleEn": "Windows Daily Skills",
    "titleZh": "Windows 日常技能",
    "summaryEn": "Master Start, Settings search, File Explorer, the taskbar, shortcuts, clipboard, light virtual desktops, safe downloads, and your user profile path on Windows.",
    "summaryZh": "掌握 Windows 上的开始菜单、设置搜索、文件资源管理器、任务栏、快捷键、剪贴板、轻度虚拟桌面、安全下载，以及用户配置文件夹路径。",
    "slideCount": 17,
    "firstSlideId": "ch-a-windows-skills-title",
    "sections": [
      {
        "id": "daily-windows-map",
        "titleEn": "Daily Windows Map",
        "titleZh": "日常 Windows 地图",
        "firstSlideId": "ch-a-windows-skills-title",
        "slideIds": [
          "ch-a-windows-skills-title",
          "ch-a-windows-skills-goals",
          "ch-a-windows-skills-why",
          "ch-a-windows-skills-start",
          "ch-a-windows-skills-settings",
          "ch-a-windows-skills-taskbar"
        ]
      },
      {
        "id": "files-paths-habits",
        "titleEn": "Files, Paths, and Safe Habits",
        "titleZh": "文件、路径与安全习惯",
        "firstSlideId": "ch-a-windows-skills-explorer",
        "slideIds": [
          "ch-a-windows-skills-explorer",
          "ch-a-windows-skills-profile",
          "ch-a-windows-skills-shortcuts",
          "ch-a-windows-skills-clipboard",
          "ch-a-windows-skills-desktops",
          "ch-a-windows-skills-downloads",
          "ch-a-windows-skills-extensions"
        ]
      },
      {
        "id": "practice-check",
        "titleEn": "Practice and Check",
        "titleZh": "练习与自测",
        "firstSlideId": "ch-a-windows-skills-try",
        "slideIds": [
          "ch-a-windows-skills-try",
          "ch-a-windows-skills-mistakes",
          "ch-a-windows-skills-check",
          "ch-a-windows-skills-bridge"
        ]
      }
    ]
  },
  {
    "id": "bios-boot-power",
    "titleEn": "BIOS, Boot, and Power",
    "titleZh": "BIOS、启动与电源",
    "summaryEn": "Follow the path from power button to Windows desktop, and learn what BIOS/UEFI and boot order mean for beginners.",
    "summaryZh": "跟随从电源键到 Windows 桌面的路径，了解 BIOS/UEFI 与启动顺序对初学者意味着什么。",
    "slideCount": 10,
    "firstSlideId": "ch-b-bios-title",
    "sections": [
      {
        "id": "power-on",
        "titleEn": "Power On",
        "titleZh": "开机",
        "firstSlideId": "ch-b-bios-title",
        "slideIds": [
          "ch-b-bios-title",
          "ch-b-bios-goals",
          "ch-b-bios-power",
          "ch-b-bios-bios"
        ]
      },
      {
        "id": "bios-and-boot",
        "titleEn": "Boot Order and Windows",
        "titleZh": "启动顺序与 Windows",
        "firstSlideId": "ch-b-bios-boot-order",
        "slideIds": [
          "ch-b-bios-boot-order",
          "ch-b-bios-windows-loads",
          "ch-b-bios-desktop",
          "ch-b-bios-try"
        ]
      },
      {
        "id": "practice-check",
        "titleEn": "Practice and Check",
        "titleZh": "练习与自测",
        "firstSlideId": "ch-b-bios-errors",
        "slideIds": [
          "ch-b-bios-errors",
          "ch-b-bios-check"
        ]
      }
    ]
  },
  {
    "id": "choosing-a-pc",
    "titleEn": "Choosing a PC",
    "titleZh": "如何选电脑",
    "summaryEn": "Choose a Windows PC for learning by matching tasks to CPU, RAM, storage, and display needs—not marketing hype.",
    "summaryZh": "按任务匹配 CPU、内存、存储与显示需求来选择 Windows 电脑，而不是跟着营销口号。",
    "slideCount": 10,
    "firstSlideId": "ch-b-choosing-pc-title",
    "sections": [
      {
        "id": "needs-first",
        "titleEn": "Needs First",
        "titleZh": "需求优先",
        "firstSlideId": "ch-b-choosing-pc-title",
        "slideIds": [
          "ch-b-choosing-pc-title",
          "ch-b-choosing-pc-goals",
          "ch-b-choosing-pc-tasks",
          "ch-b-choosing-pc-baseline"
        ]
      },
      {
        "id": "compare-and-verify",
        "titleEn": "Compare and Verify",
        "titleZh": "比较与核实",
        "firstSlideId": "ch-b-choosing-pc-laptop",
        "slideIds": [
          "ch-b-choosing-pc-laptop",
          "ch-b-choosing-pc-checklist",
          "ch-b-choosing-pc-buy",
          "ch-b-choosing-pc-try"
        ]
      },
      {
        "id": "check-in",
        "titleEn": "Check In",
        "titleZh": "检查一下",
        "firstSlideId": "ch-b-choosing-pc-mistakes",
        "slideIds": [
          "ch-b-choosing-pc-mistakes",
          "ch-b-choosing-pc-check"
        ]
      }
    ]
  },
  {
    "id": "cpu-and-performance",
    "titleEn": "CPU and Performance",
    "titleZh": "CPU 与性能",
    "summaryEn": "Understand the CPU as the brain, cores as workers, and what Task Manager CPU % means on Windows.",
    "summaryZh": "把 CPU 理解为大脑，把核心理解为工人，并看懂 Windows 任务管理器里的 CPU 占用。",
    "slideCount": 10,
    "firstSlideId": "ch-b-cpu-title",
    "sections": [
      {
        "id": "cpu-basics",
        "titleEn": "CPU Basics",
        "titleZh": "CPU 基础",
        "firstSlideId": "ch-b-cpu-title",
        "slideIds": [
          "ch-b-cpu-title",
          "ch-b-cpu-goals",
          "ch-b-cpu-brain",
          "ch-b-cpu-cores"
        ]
      },
      {
        "id": "cores-and-load",
        "titleEn": "Cores and Load",
        "titleZh": "核心与负载",
        "firstSlideId": "ch-b-cpu-instructions",
        "slideIds": [
          "ch-b-cpu-instructions",
          "ch-b-cpu-task-manager",
          "ch-b-cpu-enough",
          "ch-b-cpu-try"
        ]
      },
      {
        "id": "practice-check",
        "titleEn": "Practice and Check",
        "titleZh": "练习与自测",
        "firstSlideId": "ch-b-cpu-errors",
        "slideIds": [
          "ch-b-cpu-errors",
          "ch-b-cpu-check"
        ]
      }
    ]
  },
  {
    "id": "gpu-and-display",
    "titleEn": "GPU and Display",
    "titleZh": "显卡与显示",
    "summaryEn": "Understand integrated vs discrete graphics, display cables, and how Windows shows GPU activity.",
    "summaryZh": "理解核显与独显、显示线缆，以及 Windows 如何显示 GPU 活动。",
    "slideCount": 10,
    "firstSlideId": "ch-b-gpu-title",
    "sections": [
      {
        "id": "graphics-basics",
        "titleEn": "Graphics Basics",
        "titleZh": "图形基础",
        "firstSlideId": "ch-b-gpu-title",
        "slideIds": [
          "ch-b-gpu-title",
          "ch-b-gpu-goals",
          "ch-b-gpu-what",
          "ch-b-gpu-types"
        ]
      },
      {
        "id": "display-and-windows",
        "titleEn": "Display and Windows",
        "titleZh": "显示与 Windows",
        "firstSlideId": "ch-b-gpu-cables",
        "slideIds": [
          "ch-b-gpu-cables",
          "ch-b-gpu-metrics",
          "ch-b-gpu-multi",
          "ch-b-gpu-try"
        ]
      },
      {
        "id": "check-in",
        "titleEn": "Check In",
        "titleZh": "检查一下",
        "firstSlideId": "ch-b-gpu-mistakes",
        "slideIds": [
          "ch-b-gpu-mistakes",
          "ch-b-gpu-check"
        ]
      }
    ]
  },
  {
    "id": "inside-a-pc",
    "titleEn": "Inside a PC",
    "titleZh": "电脑内部",
    "summaryEn": "Meet the main hardware parts inside a Windows PC case and learn what you can check without opening school machines.",
    "summaryZh": "认识 Windows 电脑机箱内部的主要硬件，并学会在不拆开学校机器的情况下做检查。",
    "slideCount": 10,
    "firstSlideId": "ch-b-inside-pc-title",
    "sections": [
      {
        "id": "open-the-box",
        "titleEn": "Open the Box",
        "titleZh": "打开机箱",
        "firstSlideId": "ch-b-inside-pc-title",
        "slideIds": [
          "ch-b-inside-pc-title",
          "ch-b-inside-pc-goals",
          "ch-b-inside-pc-case",
          "ch-b-inside-pc-motherboard"
        ]
      },
      {
        "id": "main-parts",
        "titleEn": "Main Parts",
        "titleZh": "主要部件",
        "firstSlideId": "ch-b-inside-pc-cpu-socket",
        "slideIds": [
          "ch-b-inside-pc-cpu-socket",
          "ch-b-inside-pc-ram-slots",
          "ch-b-inside-pc-storage-psu-gpu",
          "ch-b-inside-pc-try"
        ]
      },
      {
        "id": "practice-check",
        "titleEn": "Practice and Check",
        "titleZh": "练习与自测",
        "firstSlideId": "ch-b-inside-pc-errors",
        "slideIds": [
          "ch-b-inside-pc-errors",
          "ch-b-inside-pc-check"
        ]
      }
    ]
  },
  {
    "id": "memory-and-storage",
    "titleEn": "Memory and Storage",
    "titleZh": "内存与存储",
    "summaryEn": "Tell RAM from SSD/HDD, watch C: drive space in Windows, and know what shutdown clears.",
    "summaryZh": "分清内存与 SSD/HDD，在 Windows 上关注 C: 盘空间，并知道关机清空什么。",
    "slideCount": 10,
    "firstSlideId": "ch-b-memory-title",
    "sections": [
      {
        "id": "two-kinds",
        "titleEn": "Two Kinds of Space",
        "titleZh": "两种“空间”",
        "firstSlideId": "ch-b-memory-title",
        "slideIds": [
          "ch-b-memory-title",
          "ch-b-memory-goals",
          "ch-b-memory-ram",
          "ch-b-memory-storage"
        ]
      },
      {
        "id": "storage-on-windows",
        "titleEn": "Storage on Windows",
        "titleZh": "Windows 上的存储",
        "firstSlideId": "ch-b-memory-ssd-hdd",
        "slideIds": [
          "ch-b-memory-ssd-hdd",
          "ch-b-memory-c-drive",
          "ch-b-memory-shutdown",
          "ch-b-memory-try"
        ]
      },
      {
        "id": "practice-check",
        "titleEn": "Practice and Check",
        "titleZh": "练习与自测",
        "firstSlideId": "ch-b-memory-errors",
        "slideIds": [
          "ch-b-memory-errors",
          "ch-b-memory-check"
        ]
      }
    ]
  },
  {
    "id": "motherboard-and-power",
    "titleEn": "Motherboard and Power",
    "titleZh": "主板与电源",
    "summaryEn": "How the motherboard, PSU, and ESD-safe habits keep a Windows PC alive, and how to inspect board info safely.",
    "summaryZh": "主板、电源与防静电习惯如何让 Windows 电脑正常工作，以及如何安全查看主板信息。",
    "slideCount": 10,
    "firstSlideId": "ch-b-motherboard-title",
    "sections": [
      {
        "id": "board-and-power",
        "titleEn": "Board and Power",
        "titleZh": "主板与供电",
        "firstSlideId": "ch-b-motherboard-title",
        "slideIds": [
          "ch-b-motherboard-title",
          "ch-b-motherboard-goals",
          "ch-b-motherboard-role",
          "ch-b-motherboard-psu"
        ]
      },
      {
        "id": "safety-and-windows",
        "titleEn": "Safety and Windows Checks",
        "titleZh": "安全与 Windows 检查",
        "firstSlideId": "ch-b-motherboard-esd",
        "slideIds": [
          "ch-b-motherboard-esd",
          "ch-b-motherboard-connectors",
          "ch-b-motherboard-symptoms",
          "ch-b-motherboard-try"
        ]
      },
      {
        "id": "check-in",
        "titleEn": "Check In",
        "titleZh": "检查一下",
        "firstSlideId": "ch-b-motherboard-mistakes",
        "slideIds": [
          "ch-b-motherboard-mistakes",
          "ch-b-motherboard-check"
        ]
      }
    ]
  },
  {
    "id": "ports-drivers-devices",
    "titleEn": "Ports, Drivers, and Devices",
    "titleZh": "接口、驱动与设备",
    "summaryEn": "Recognize common ports, understand drivers as translators, and use Device Manager safely on Windows.",
    "summaryZh": "认识常见接口，把驱动理解为翻译，并在 Windows 上安全使用设备管理器。",
    "slideCount": 10,
    "firstSlideId": "ch-b-ports-title",
    "sections": [
      {
        "id": "ports-and-devices",
        "titleEn": "Ports and Devices",
        "titleZh": "接口与设备",
        "firstSlideId": "ch-b-ports-title",
        "slideIds": [
          "ch-b-ports-title",
          "ch-b-ports-goals",
          "ch-b-ports-ports",
          "ch-b-ports-input"
        ]
      },
      {
        "id": "drivers-windows",
        "titleEn": "Drivers on Windows",
        "titleZh": "Windows 上的驱动",
        "firstSlideId": "ch-b-ports-driver",
        "slideIds": [
          "ch-b-ports-driver",
          "ch-b-ports-device-manager",
          "ch-b-ports-safe-habits",
          "ch-b-ports-try"
        ]
      },
      {
        "id": "practice-check",
        "titleEn": "Practice and Check",
        "titleZh": "练习与自测",
        "firstSlideId": "ch-b-ports-errors",
        "slideIds": [
          "ch-b-ports-errors",
          "ch-b-ports-check"
        ]
      }
    ]
  },
  {
    "id": "windows-desktop-and-settings",
    "titleEn": "Windows Desktop and Settings",
    "titleZh": "Windows 桌面与设置",
    "summaryEn": "Desktop, Start, taskbar, Action Center, and the Settings app as your OS home base.",
    "summaryZh": "桌面、开始、任务栏、操作中心，以及作为系统大本营的设置应用。",
    "slideCount": 11,
    "firstSlideId": "ch-c-desktop-title",
    "sections": [
      {
        "id": "desktop-home",
        "titleEn": "Desktop Home Base",
        "titleZh": "桌面大本营",
        "firstSlideId": "ch-c-desktop-title",
        "slideIds": [
          "ch-c-desktop-title",
          "ch-c-desktop-goals",
          "ch-c-desktop-layout",
          "ch-c-desktop-start"
        ]
      },
      {
        "id": "settings-map",
        "titleEn": "Settings Map",
        "titleZh": "设置地图",
        "firstSlideId": "ch-c-desktop-taskbar",
        "slideIds": [
          "ch-c-desktop-taskbar",
          "ch-c-desktop-settings",
          "ch-c-desktop-virtual",
          "ch-c-desktop-display"
        ]
      },
      {
        "id": "check-in",
        "titleEn": "Check In",
        "titleZh": "检查一下",
        "firstSlideId": "ch-c-desktop-try",
        "slideIds": [
          "ch-c-desktop-try",
          "ch-c-desktop-mistakes",
          "ch-c-desktop-check"
        ]
      }
    ]
  },
  {
    "id": "what-os-does",
    "titleEn": "What the OS Does",
    "titleZh": "操作系统做什么",
    "summaryEn": "How Windows manages hardware, software, files, processes, and drivers.",
    "summaryZh": "Windows 如何管理硬件、软件、文件、进程与驱动程序。",
    "slideCount": 12,
    "firstSlideId": "ch-c-os-title",
    "sections": [
      {
        "id": "os-overview",
        "titleEn": "OS Overview",
        "titleZh": "操作系统概览",
        "firstSlideId": "ch-c-os-title",
        "slideIds": [
          "ch-c-os-title",
          "ch-c-os-goals",
          "ch-c-os-bridge",
          "ch-c-os-layer"
        ]
      },
      {
        "id": "os-jobs",
        "titleEn": "Core Jobs of the OS",
        "titleZh": "操作系统的核心工作",
        "firstSlideId": "ch-c-os-software",
        "slideIds": [
          "ch-c-os-software",
          "ch-c-os-files",
          "ch-c-os-processes",
          "ch-c-os-drivers"
        ]
      },
      {
        "id": "windows-example",
        "titleEn": "Windows as the Example",
        "titleZh": "以 Windows 为例",
        "firstSlideId": "ch-c-os-windows",
        "slideIds": [
          "ch-c-os-windows",
          "ch-c-os-try",
          "ch-c-os-errors",
          "ch-c-os-check"
        ]
      }
    ]
  },
  {
    "id": "apps-processes-startup",
    "titleEn": "Apps, Processes, and Startup",
    "titleZh": "应用、进程与开机启动",
    "summaryEn": "Tell apps from processes, use Task Manager carefully, and control startup apps.",
    "summaryZh": "分清应用与进程，谨慎使用任务管理器，并管理开机启动应用。",
    "slideCount": 11,
    "firstSlideId": "ch-c-processes-title",
    "sections": [
      {
        "id": "apps-and-processes",
        "titleEn": "Apps and Processes",
        "titleZh": "应用与进程",
        "firstSlideId": "ch-c-processes-title",
        "slideIds": [
          "ch-c-processes-title",
          "ch-c-processes-goals",
          "ch-c-processes-app-vs-process",
          "ch-c-processes-task-manager"
        ]
      },
      {
        "id": "ending-and-startup",
        "titleEn": "End Task and Startup",
        "titleZh": "结束任务与开机启动",
        "firstSlideId": "ch-c-processes-end-task",
        "slideIds": [
          "ch-c-processes-end-task",
          "ch-c-processes-startup",
          "ch-c-processes-startup-settings",
          "ch-c-processes-slow"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-c-processes-try",
        "slideIds": [
          "ch-c-processes-try",
          "ch-c-processes-errors",
          "ch-c-processes-check"
        ]
      }
    ]
  },
  {
    "id": "task-manager-skills",
    "titleEn": "Task Manager Skills",
    "titleZh": "任务管理器技能",
    "summaryEn": "Use Processes, Performance, Startup apps, and safe End task habits on Windows.",
    "summaryZh": "在 Windows 上使用进程、性能、启动应用与安全的结束任务习惯。",
    "slideCount": 11,
    "firstSlideId": "ch-c-task-manager-title",
    "sections": [
      {
        "id": "open-and-read",
        "titleEn": "Open and Read",
        "titleZh": "打开并读懂",
        "firstSlideId": "ch-c-task-manager-title",
        "slideIds": [
          "ch-c-task-manager-title",
          "ch-c-task-manager-goals",
          "ch-c-task-manager-open",
          "ch-c-task-manager-processes"
        ]
      },
      {
        "id": "performance-and-startup",
        "titleEn": "Performance and Startup",
        "titleZh": "性能与启动",
        "firstSlideId": "ch-c-task-manager-performance",
        "slideIds": [
          "ch-c-task-manager-performance",
          "ch-c-task-manager-startup",
          "ch-c-task-manager-end",
          "ch-c-task-manager-powershell"
        ]
      },
      {
        "id": "check-in",
        "titleEn": "Check In",
        "titleZh": "检查一下",
        "firstSlideId": "ch-c-task-manager-try",
        "slideIds": [
          "ch-c-task-manager-try",
          "ch-c-task-manager-mistakes",
          "ch-c-task-manager-check"
        ]
      }
    ]
  },
  {
    "id": "updates-and-uac",
    "titleEn": "Updates and UAC",
    "titleZh": "更新与 UAC",
    "summaryEn": "Windows Update habits, why restarts matter, and how UAC protects admin changes.",
    "summaryZh": "Windows 更新习惯、为何要重启，以及 UAC 如何保护管理员更改。",
    "slideCount": 11,
    "firstSlideId": "ch-c-updates-title",
    "sections": [
      {
        "id": "stay-updated",
        "titleEn": "Stay Updated",
        "titleZh": "保持更新",
        "firstSlideId": "ch-c-updates-title",
        "slideIds": [
          "ch-c-updates-title",
          "ch-c-updates-goals",
          "ch-c-updates-why",
          "ch-c-updates-where"
        ]
      },
      {
        "id": "uac-and-permissions",
        "titleEn": "UAC and Permissions",
        "titleZh": "UAC 与权限",
        "firstSlideId": "ch-c-updates-restart",
        "slideIds": [
          "ch-c-updates-restart",
          "ch-c-updates-uac",
          "ch-c-updates-good",
          "ch-c-updates-installers"
        ]
      },
      {
        "id": "check-in",
        "titleEn": "Check In",
        "titleZh": "检查一下",
        "firstSlideId": "ch-c-updates-try",
        "slideIds": [
          "ch-c-updates-try",
          "ch-c-updates-mistakes",
          "ch-c-updates-check"
        ]
      }
    ]
  },
  {
    "id": "windows-and-accounts",
    "titleEn": "Windows and Accounts",
    "titleZh": "Windows 与账户",
    "summaryEn": "Desktop, Start menu, users, admin rights, and Settings.",
    "summaryZh": "桌面、开始菜单、用户、管理员权限与设置。",
    "slideCount": 11,
    "firstSlideId": "ch-c-windows-title",
    "sections": [
      {
        "id": "everyday-windows",
        "titleEn": "Everyday Windows",
        "titleZh": "日常 Windows",
        "firstSlideId": "ch-c-windows-title",
        "slideIds": [
          "ch-c-windows-title",
          "ch-c-windows-goals",
          "ch-c-windows-desktop",
          "ch-c-windows-settings"
        ]
      },
      {
        "id": "users-permissions",
        "titleEn": "Users and Permissions",
        "titleZh": "用户与权限",
        "firstSlideId": "ch-c-windows-account",
        "slideIds": [
          "ch-c-windows-account",
          "ch-c-windows-admin",
          "ch-c-windows-sign",
          "ch-c-windows-updates"
        ]
      },
      {
        "id": "safe-habits",
        "titleEn": "Safe Daily Habits",
        "titleZh": "安全日常习惯",
        "firstSlideId": "ch-c-windows-try",
        "slideIds": [
          "ch-c-windows-try",
          "ch-c-windows-errors",
          "ch-c-windows-check"
        ]
      }
    ]
  },
  {
    "id": "backup-and-sync",
    "titleEn": "Backup and Sync",
    "titleZh": "备份与同步",
    "summaryEn": "Zip archives, OneDrive sync, and simple backup habits for school work.",
    "summaryZh": "压缩包、OneDrive 同步，以及作业与项目的简单备份习惯。",
    "slideCount": 11,
    "firstSlideId": "ch-d-backup-title",
    "sections": [
      {
        "id": "why-backup",
        "titleEn": "Why Backup",
        "titleZh": "为什么要备份",
        "firstSlideId": "ch-d-backup-title",
        "slideIds": [
          "ch-d-backup-title",
          "ch-d-backup-goals",
          "ch-d-backup-why",
          "ch-d-backup-sync"
        ]
      },
      {
        "id": "methods",
        "titleEn": "Practical Methods",
        "titleZh": "实用方法",
        "firstSlideId": "ch-d-backup-zip",
        "slideIds": [
          "ch-d-backup-zip",
          "ch-d-backup-drive",
          "ch-d-backup-onedrive",
          "ch-d-backup-321"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-d-backup-try",
        "slideIds": [
          "ch-d-backup-try",
          "ch-d-backup-errors",
          "ch-d-backup-check"
        ]
      }
    ]
  },
  {
    "id": "bits-bytes-encoding",
    "titleEn": "Bits, Bytes, and Encoding",
    "titleZh": "比特、字节与编码",
    "summaryEn": "Bit and byte, size units, text encoding, UTF-8, and garbled text.",
    "summaryZh": "比特与字节、大小单位、文本编码、UTF-8 与乱码。",
    "slideCount": 11,
    "firstSlideId": "ch-d-bits-title",
    "sections": [
      {
        "id": "bits-and-sizes",
        "titleEn": "Bits and Sizes",
        "titleZh": "比特与大小",
        "firstSlideId": "ch-d-bits-title",
        "slideIds": [
          "ch-d-bits-title",
          "ch-d-bits-goals",
          "ch-d-bits-binary",
          "ch-d-bits-byte"
        ]
      },
      {
        "id": "units-and-encoding",
        "titleEn": "Units and Encoding",
        "titleZh": "单位与编码",
        "firstSlideId": "ch-d-bits-units",
        "slideIds": [
          "ch-d-bits-units",
          "ch-d-bits-encoding",
          "ch-d-bits-utf8",
          "ch-d-bits-mojibake"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-d-bits-try",
        "slideIds": [
          "ch-d-bits-try",
          "ch-d-bits-errors",
          "ch-d-bits-check"
        ]
      }
    ]
  },
  {
    "id": "cloud-vs-local",
    "titleEn": "Cloud vs Local",
    "titleZh": "云端与本地",
    "summaryEn": "Compare local disks and cloud sync, spot risks like overwrite and offline gaps, and choose where school work should live.",
    "summaryZh": "比较本地磁盘与云同步，识别覆盖与离线缺口等风险，并选择课程作业应放的位置。",
    "slideCount": 11,
    "firstSlideId": "ch-d-cloud-title",
    "sections": [
      {
        "id": "two-places",
        "titleEn": "Two Places for Files",
        "titleZh": "文件的两种位置",
        "firstSlideId": "ch-d-cloud-title",
        "slideIds": [
          "ch-d-cloud-title",
          "ch-d-cloud-goals",
          "ch-d-cloud-local",
          "ch-d-cloud-sync"
        ]
      },
      {
        "id": "risks-and-choices",
        "titleEn": "Risks and Choices",
        "titleZh": "风险与选择",
        "firstSlideId": "ch-d-cloud-overwrite",
        "slideIds": [
          "ch-d-cloud-overwrite",
          "ch-d-cloud-offline",
          "ch-d-cloud-choose",
          "ch-d-cloud-privacy"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-d-cloud-try",
        "slideIds": [
          "ch-d-cloud-try",
          "ch-d-cloud-errors",
          "ch-d-cloud-check"
        ]
      }
    ]
  },
  {
    "id": "file-manager",
    "titleEn": "File Manager",
    "titleZh": "文件管理器",
    "summaryEn": "Use Windows File Explorer for folders, paths, extensions, hidden files, and Recycle Bin.",
    "summaryZh": "用 Windows 文件资源管理器处理文件夹、路径、扩展名、隐藏文件与回收站。",
    "slideCount": 12,
    "firstSlideId": "ch-d-files-title",
    "sections": [
      {
        "id": "files-and-folders",
        "titleEn": "Files and Folders",
        "titleZh": "文件与文件夹",
        "firstSlideId": "ch-d-files-title",
        "slideIds": [
          "ch-d-files-title",
          "ch-d-files-goals",
          "ch-d-files-basics",
          "ch-d-files-path"
        ]
      },
      {
        "id": "using-file-manager",
        "titleEn": "Using File Explorer",
        "titleZh": "使用文件资源管理器",
        "firstSlideId": "ch-d-files-apps",
        "slideIds": [
          "ch-d-files-apps",
          "ch-d-files-extensions",
          "ch-d-files-hidden",
          "ch-d-files-recycle"
        ]
      },
      {
        "id": "practice-habits",
        "titleEn": "Practice Habits",
        "titleZh": "练习习惯",
        "firstSlideId": "ch-d-files-practice",
        "slideIds": [
          "ch-d-files-practice",
          "ch-d-files-try",
          "ch-d-files-errors",
          "ch-d-files-check"
        ]
      }
    ]
  },
  {
    "id": "file-formats-coders",
    "titleEn": "File Formats for Coders",
    "titleZh": "编程常见文件格式",
    "summaryEn": "Meet .txt .py .csv .json .zip .exe .jpg and show extensions in Explorer.",
    "summaryZh": "认识 .txt .py .csv .json .zip .exe .jpg，并在资源管理器中显示扩展名。",
    "slideCount": 11,
    "firstSlideId": "ch-d-formats-title",
    "sections": [
      {
        "id": "why-formats",
        "titleEn": "Why Formats Matter",
        "titleZh": "为什么格式重要",
        "firstSlideId": "ch-d-formats-title",
        "slideIds": [
          "ch-d-formats-title",
          "ch-d-formats-goals",
          "ch-d-formats-extension",
          "ch-d-formats-text"
        ]
      },
      {
        "id": "data-and-packages",
        "titleEn": "Data and Packages",
        "titleZh": "数据与打包文件",
        "firstSlideId": "ch-d-formats-data",
        "slideIds": [
          "ch-d-formats-data",
          "ch-d-formats-zip",
          "ch-d-formats-exe",
          "ch-d-formats-images"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-d-formats-try",
        "slideIds": [
          "ch-d-formats-try",
          "ch-d-formats-errors",
          "ch-d-formats-check"
        ]
      }
    ]
  },
  {
    "id": "search-and-organize",
    "titleEn": "Search and Organize",
    "titleZh": "搜索与整理",
    "summaryEn": "Find files with Windows search, sort and filter in File Explorer, and keep school projects tidy.",
    "summaryZh": "用 Windows 搜索找文件，在资源管理器中排序与筛选，并保持课程项目整洁。",
    "slideCount": 11,
    "firstSlideId": "ch-d-organize-title",
    "sections": [
      {
        "id": "find-files",
        "titleEn": "Find Files",
        "titleZh": "查找文件",
        "firstSlideId": "ch-d-organize-title",
        "slideIds": [
          "ch-d-organize-title",
          "ch-d-organize-goals",
          "ch-d-organize-search",
          "ch-d-organize-sort"
        ]
      },
      {
        "id": "tidy-habits",
        "titleEn": "Tidy Habits",
        "titleZh": "整理习惯",
        "firstSlideId": "ch-d-organize-naming",
        "slideIds": [
          "ch-d-organize-naming",
          "ch-d-organize-folders",
          "ch-d-organize-cleanup",
          "ch-d-organize-recent"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-d-organize-try",
        "slideIds": [
          "ch-d-organize-try",
          "ch-d-organize-errors",
          "ch-d-organize-check"
        ]
      }
    ]
  },
  {
    "id": "paths-and-folders",
    "titleEn": "Paths and Folders",
    "titleZh": "路径与文件夹",
    "summaryEn": "Read Windows paths, absolute vs relative locations, and keep a clean project folder layout.",
    "summaryZh": "读懂 Windows 路径、绝对与相对位置，并保持清晰的项目文件夹结构。",
    "slideCount": 11,
    "firstSlideId": "ch-d-paths-title",
    "sections": [
      {
        "id": "path-basics",
        "titleEn": "Path Basics",
        "titleZh": "路径基础",
        "firstSlideId": "ch-d-paths-title",
        "slideIds": [
          "ch-d-paths-title",
          "ch-d-paths-goals",
          "ch-d-paths-anatomy",
          "ch-d-paths-absolute"
        ]
      },
      {
        "id": "relative-and-layout",
        "titleEn": "Relative Paths and Layout",
        "titleZh": "相对路径与目录结构",
        "firstSlideId": "ch-d-paths-relative",
        "slideIds": [
          "ch-d-paths-relative",
          "ch-d-paths-folders",
          "ch-d-paths-spaces",
          "ch-d-paths-explorer"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-d-paths-try",
        "slideIds": [
          "ch-d-paths-try",
          "ch-d-paths-errors",
          "ch-d-paths-check"
        ]
      }
    ]
  },
  {
    "id": "what-is-environment",
    "titleEn": "What Is an Environment",
    "titleZh": "什么是环境",
    "summaryEn": "Define a Windows coding environment as tools plus settings, and contrast system Python with project virtual environments.",
    "summaryZh": "把 Windows 编程环境定义为工具加设置，并对比系统 Python 与项目虚拟环境。",
    "slideCount": 10,
    "firstSlideId": "ch-e-environment-title",
    "sections": [
      {
        "id": "environment-idea",
        "titleEn": "The Idea of Environment",
        "titleZh": "环境的概念",
        "firstSlideId": "ch-e-environment-title",
        "slideIds": [
          "ch-e-environment-title",
          "ch-e-environment-goals",
          "ch-e-environment-definition",
          "ch-e-environment-windows-view"
        ]
      },
      {
        "id": "kinds-of-environments",
        "titleEn": "Kinds of Environments",
        "titleZh": "环境的种类",
        "firstSlideId": "ch-e-environment-system",
        "slideIds": [
          "ch-e-environment-system",
          "ch-e-environment-virtual",
          "ch-e-environment-why"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-e-environment-try",
        "slideIds": [
          "ch-e-environment-try",
          "ch-e-environment-mistakes",
          "ch-e-environment-check"
        ]
      }
    ]
  },
  {
    "id": "reading-command-errors",
    "titleEn": "Reading Command Errors",
    "titleZh": "读懂命令错误",
    "summaryEn": "Read PowerShell and Python launcher errors calmly: command not found, access denied, execution policy, and wrong folder.",
    "summaryZh": "冷静阅读 PowerShell 与 Python 启动器错误：找不到命令、拒绝访问、执行策略与进错文件夹。",
    "slideCount": 9,
    "firstSlideId": "ch-e-errors-title",
    "sections": [
      {
        "id": "read-errors",
        "titleEn": "How to Read Errors",
        "titleZh": "如何阅读错误",
        "firstSlideId": "ch-e-errors-title",
        "slideIds": [
          "ch-e-errors-title",
          "ch-e-errors-goals",
          "ch-e-errors-method"
        ]
      },
      {
        "id": "common-windows-errors",
        "titleEn": "Common Windows Errors",
        "titleZh": "常见 Windows 错误",
        "firstSlideId": "ch-e-errors-notfound",
        "slideIds": [
          "ch-e-errors-notfound",
          "ch-e-errors-policy",
          "ch-e-errors-folder"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-e-errors-try",
        "slideIds": [
          "ch-e-errors-try",
          "ch-e-errors-mistakes",
          "ch-e-errors-check"
        ]
      }
    ]
  },
  {
    "id": "navigate-and-files-cli",
    "titleEn": "Navigate and Files in CLI",
    "titleZh": "命令行导航与文件",
    "summaryEn": "Move with cd, list with dir and ls, create folders, and confirm the working directory before running tools on Windows.",
    "summaryZh": "在 Windows 上用 cd 移动，用 dir 与 ls 列出内容，创建文件夹，并在运行工具前确认工作目录。",
    "slideCount": 9,
    "firstSlideId": "ch-e-navigate-title",
    "sections": [
      {
        "id": "move-and-list",
        "titleEn": "Move and List",
        "titleZh": "移动与列出",
        "firstSlideId": "ch-e-navigate-title",
        "slideIds": [
          "ch-e-navigate-title",
          "ch-e-navigate-goals",
          "ch-e-navigate-location",
          "ch-e-navigate-commands"
        ]
      },
      {
        "id": "create-and-confirm",
        "titleEn": "Create and Confirm",
        "titleZh": "创建与确认",
        "firstSlideId": "ch-e-navigate-create",
        "slideIds": [
          "ch-e-navigate-create",
          "ch-e-navigate-paths"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-e-navigate-try",
        "slideIds": [
          "ch-e-navigate-try",
          "ch-e-navigate-mistakes",
          "ch-e-navigate-check"
        ]
      }
    ]
  },
  {
    "id": "path-and-programs",
    "titleEn": "PATH and Programs",
    "titleZh": "PATH 与程序",
    "summaryEn": "Explain how Windows finds commands through PATH, verify with where.exe and Get-Command, and restart the terminal after install changes.",
    "summaryZh": "说明 Windows 如何通过 PATH 找到命令，用 where.exe 与 Get-Command 验证，并在安装变更后重启终端。",
    "slideCount": 9,
    "firstSlideId": "ch-e-path-title",
    "sections": [
      {
        "id": "path-idea",
        "titleEn": "The PATH Idea",
        "titleZh": "PATH 的概念",
        "firstSlideId": "ch-e-path-title",
        "slideIds": [
          "ch-e-path-title",
          "ch-e-path-goals",
          "ch-e-path-how",
          "ch-e-path-view"
        ]
      },
      {
        "id": "verify-and-refresh",
        "titleEn": "Verify and Refresh",
        "titleZh": "验证与刷新",
        "firstSlideId": "ch-e-path-verify",
        "slideIds": [
          "ch-e-path-verify",
          "ch-e-path-restart"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-e-path-try",
        "slideIds": [
          "ch-e-path-try",
          "ch-e-path-mistakes",
          "ch-e-path-check"
        ]
      }
    ]
  },
  {
    "id": "powershell-basics",
    "titleEn": "PowerShell Basics",
    "titleZh": "PowerShell 基础",
    "summaryEn": "Use PowerShell Verb-Noun commands, Get-Help, Get-Command, and a gentle introduction to the pipeline on Windows.",
    "summaryZh": "在 Windows 上使用 PowerShell 的 Verb-Noun 命令、Get-Help、Get-Command，并轻量认识管道。",
    "slideCount": 9,
    "firstSlideId": "ch-e-powershell-title",
    "sections": [
      {
        "id": "powershell-start",
        "titleEn": "Starting with PowerShell",
        "titleZh": "从 PowerShell 起步",
        "firstSlideId": "ch-e-powershell-title",
        "slideIds": [
          "ch-e-powershell-title",
          "ch-e-powershell-goals",
          "ch-e-powershell-verbnoun",
          "ch-e-powershell-help"
        ]
      },
      {
        "id": "pipeline-and-safety",
        "titleEn": "Pipeline and Safety",
        "titleZh": "管道与安全习惯",
        "firstSlideId": "ch-e-powershell-pipeline",
        "slideIds": [
          "ch-e-powershell-pipeline",
          "ch-e-powershell-safety"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-e-powershell-try",
        "slideIds": [
          "ch-e-powershell-try",
          "ch-e-powershell-mistakes",
          "ch-e-powershell-check"
        ]
      }
    ]
  },
  {
    "id": "the-terminal",
    "titleEn": "The Terminal",
    "titleZh": "终端",
    "summaryEn": "Open Windows terminals, understand prompt and current folder, and choose PowerShell as the course default shell.",
    "summaryZh": "打开 Windows 终端，理解提示符与当前文件夹，并选择 PowerShell 作为本课程默认 shell。",
    "slideCount": 9,
    "firstSlideId": "ch-e-terminal-title",
    "sections": [
      {
        "id": "what-is-terminal",
        "titleEn": "What Is a Terminal",
        "titleZh": "什么是终端",
        "firstSlideId": "ch-e-terminal-title",
        "slideIds": [
          "ch-e-terminal-title",
          "ch-e-terminal-goals",
          "ch-e-terminal-definition",
          "ch-e-terminal-apps"
        ]
      },
      {
        "id": "prompt-and-folder",
        "titleEn": "Prompt and Current Folder",
        "titleZh": "提示符与当前文件夹",
        "firstSlideId": "ch-e-terminal-prompt",
        "slideIds": [
          "ch-e-terminal-prompt",
          "ch-e-terminal-why"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-e-terminal-try",
        "slideIds": [
          "ch-e-terminal-try",
          "ch-e-terminal-mistakes",
          "ch-e-terminal-check"
        ]
      }
    ]
  },
  {
    "id": "files-and-exceptions",
    "titleEn": "Files and Exceptions",
    "titleZh": "文件与异常",
    "summaryEn": "Read and write UTF-8 text files with Python on Windows, and handle common errors calmly with try/except.",
    "summaryZh": "在 Windows 上用 Python 读写 UTF-8 文本文件，并用 try/except 冷静处理常见错误。",
    "slideCount": 9,
    "firstSlideId": "ch-f-files-exceptions-title",
    "sections": [
      {
        "id": "file-basics",
        "titleEn": "Working with Files",
        "titleZh": "处理文件",
        "firstSlideId": "ch-f-files-exceptions-title",
        "slideIds": [
          "ch-f-files-exceptions-title",
          "ch-f-files-exceptions-goals",
          "ch-f-files-exceptions-readwrite",
          "ch-f-files-exceptions-paths"
        ]
      },
      {
        "id": "exceptions",
        "titleEn": "Exceptions",
        "titleZh": "异常",
        "firstSlideId": "ch-f-files-exceptions-try",
        "slideIds": [
          "ch-f-files-exceptions-try",
          "ch-f-files-exceptions-calm"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-f-files-exceptions-lab",
        "slideIds": [
          "ch-f-files-exceptions-lab",
          "ch-f-files-exceptions-mistakes",
          "ch-f-files-exceptions-check"
        ]
      }
    ]
  },
  {
    "id": "functions-packages-venv",
    "titleEn": "Functions, Packages, and venv",
    "titleZh": "函数、包与虚拟环境",
    "summaryEn": "Write reusable functions, install packages with pip inside a Windows venv, and activate with Scripts\\\\Activate.ps1.",
    "summaryZh": "编写可复用函数，在 Windows venv 内用 pip 安装包，并用 Scripts\\\\Activate.ps1 激活。",
    "slideCount": 9,
    "firstSlideId": "ch-f-functions-title",
    "sections": [
      {
        "id": "functions",
        "titleEn": "Functions",
        "titleZh": "函数",
        "firstSlideId": "ch-f-functions-title",
        "slideIds": [
          "ch-f-functions-title",
          "ch-f-functions-goals",
          "ch-f-functions-def",
          "ch-f-functions-why"
        ]
      },
      {
        "id": "packages-and-venv",
        "titleEn": "Packages and venv",
        "titleZh": "包与虚拟环境",
        "firstSlideId": "ch-f-functions-pip",
        "slideIds": [
          "ch-f-functions-pip",
          "ch-f-functions-venv"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-f-functions-try",
        "slideIds": [
          "ch-f-functions-try",
          "ch-f-functions-mistakes",
          "ch-f-functions-check"
        ]
      }
    ]
  },
  {
    "id": "install-python-windows",
    "titleEn": "Installing Python on Windows",
    "titleZh": "在 Windows 上安装 Python",
    "summaryEn": "Install Python from python.org on Windows, enable Add to PATH and the py launcher, then verify in a new PowerShell window.",
    "summaryZh": "在 Windows 上从 python.org 安装 Python，启用 Add to PATH 与 py 启动器，并在新的 PowerShell 窗口中验证。",
    "slideCount": 9,
    "firstSlideId": "ch-f-install-python-title",
    "sections": [
      {
        "id": "getting-ready",
        "titleEn": "Getting Ready",
        "titleZh": "准备开始",
        "firstSlideId": "ch-f-install-python-title",
        "slideIds": [
          "ch-f-install-python-title",
          "ch-f-install-python-goals",
          "ch-f-install-python-source"
        ]
      },
      {
        "id": "installer-steps",
        "titleEn": "Installer Steps",
        "titleZh": "安装步骤",
        "firstSlideId": "ch-f-install-python-checkboxes",
        "slideIds": [
          "ch-f-install-python-checkboxes",
          "ch-f-install-python-verify",
          "ch-f-install-python-repair"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-f-install-python-try",
        "slideIds": [
          "ch-f-install-python-try",
          "ch-f-install-python-mistakes",
          "ch-f-install-python-check"
        ]
      }
    ]
  },
  {
    "id": "lists-and-loops-practice",
    "titleEn": "Lists and Loops Practice",
    "titleZh": "列表与循环练习",
    "summaryEn": "Build lists, append items, loop with for, and practice small list tasks using py on Windows.",
    "summaryZh": "创建列表、追加元素、用 for 循环，并在 Windows 上用 py 做小型列表练习。",
    "slideCount": 9,
    "firstSlideId": "ch-f-lists-title",
    "sections": [
      {
        "id": "list-basics",
        "titleEn": "List Basics",
        "titleZh": "列表基础",
        "firstSlideId": "ch-f-lists-title",
        "slideIds": [
          "ch-f-lists-title",
          "ch-f-lists-goals",
          "ch-f-lists-create",
          "ch-f-lists-change"
        ]
      },
      {
        "id": "lists-with-for",
        "titleEn": "Lists with for",
        "titleZh": "列表与 for",
        "firstSlideId": "ch-f-lists-for",
        "slideIds": [
          "ch-f-lists-for",
          "ch-f-lists-practice-idea"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-f-lists-try",
        "slideIds": [
          "ch-f-lists-try",
          "ch-f-lists-mistakes",
          "ch-f-lists-check"
        ]
      }
    ]
  },
  {
    "id": "decisions-and-loops",
    "titleEn": "Decisions and Loops",
    "titleZh": "判断与循环",
    "summaryEn": "Use if/else, for, and while with tiny examples, respect indentation, and run with py on Windows.",
    "summaryZh": "用小例子学习 if/else、for 与 while，重视缩进，并在 Windows 上用 py 运行。",
    "slideCount": 9,
    "firstSlideId": "ch-f-loops-title",
    "sections": [
      {
        "id": "goals-and-if",
        "titleEn": "Goals and Decisions",
        "titleZh": "目标与判断",
        "firstSlideId": "ch-f-loops-title",
        "slideIds": [
          "ch-f-loops-title",
          "ch-f-loops-goals",
          "ch-f-loops-if",
          "ch-f-loops-indent"
        ]
      },
      {
        "id": "for-and-while",
        "titleEn": "for and while",
        "titleZh": "for 与 while",
        "firstSlideId": "ch-f-loops-for",
        "slideIds": [
          "ch-f-loops-for",
          "ch-f-loops-while"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-f-loops-try",
        "slideIds": [
          "ch-f-loops-try",
          "ch-f-loops-mistakes",
          "ch-f-loops-check"
        ]
      }
    ]
  },
  {
    "id": "python-and-terminal",
    "titleEn": "Python and the Terminal",
    "titleZh": "Python 与终端",
    "summaryEn": "Run Python on Windows with PowerShell and the py launcher, distinguish REPL from scripts, and preview venv activation.",
    "summaryZh": "在 Windows 上用 PowerShell 与 py 启动器运行 Python，区分 REPL 与脚本，并预览 venv 激活。",
    "slideCount": 9,
    "firstSlideId": "ch-f-python-terminal-title",
    "sections": [
      {
        "id": "relationship",
        "titleEn": "Python and Terminal Relationship",
        "titleZh": "Python 与终端的关系",
        "firstSlideId": "ch-f-python-terminal-title",
        "slideIds": [
          "ch-f-python-terminal-title",
          "ch-f-python-terminal-goals",
          "ch-f-python-terminal-roles",
          "ch-f-python-terminal-repl"
        ]
      },
      {
        "id": "venv-preview",
        "titleEn": "venv Preview",
        "titleZh": "venv 预览",
        "firstSlideId": "ch-f-python-terminal-venv",
        "slideIds": [
          "ch-f-python-terminal-venv",
          "ch-f-python-terminal-run"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-f-python-terminal-try",
        "slideIds": [
          "ch-f-python-terminal-try",
          "ch-f-python-terminal-mistakes",
          "ch-f-python-terminal-check"
        ]
      }
    ]
  },
  {
    "id": "what-is-python",
    "titleEn": "What Is Python",
    "titleZh": "什么是 Python",
    "summaryEn": "Meet Python on Windows: what it is, where it is used, why Python 3, and the meaning of Hello World before install practice.",
    "summaryZh": "在 Windows 上认识 Python：它是什么、用在哪里、为何用 Python 3，以及安装练习前 Hello World 的含义。",
    "slideCount": 9,
    "firstSlideId": "ch-f-python-title",
    "sections": [
      {
        "id": "python-intro",
        "titleEn": "Python Introduction",
        "titleZh": "Python 入门",
        "firstSlideId": "ch-f-python-title",
        "slideIds": [
          "ch-f-python-title",
          "ch-f-python-goals",
          "ch-f-python-definition",
          "ch-f-python-uses"
        ]
      },
      {
        "id": "python-on-windows",
        "titleEn": "Python on Windows",
        "titleZh": "Windows 上的 Python",
        "firstSlideId": "ch-f-python-versions",
        "slideIds": [
          "ch-f-python-versions",
          "ch-f-python-hello"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-f-python-try",
        "slideIds": [
          "ch-f-python-try",
          "ch-f-python-mistakes",
          "ch-f-python-check"
        ]
      }
    ]
  },
  {
    "id": "strings-in-python",
    "titleEn": "Strings in Python",
    "titleZh": "Python 中的字符串",
    "summaryEn": "Create and slice strings, use helpful methods, format text lightly, and practice with py on Windows using UTF-8 files.",
    "summaryZh": "创建与切片字符串，使用常用方法，轻量格式化文本，并在 Windows 上用 UTF-8 文件与 py 练习。",
    "slideCount": 9,
    "firstSlideId": "ch-f-strings-title",
    "sections": [
      {
        "id": "string-basics",
        "titleEn": "String Basics",
        "titleZh": "字符串基础",
        "firstSlideId": "ch-f-strings-title",
        "slideIds": [
          "ch-f-strings-title",
          "ch-f-strings-goals",
          "ch-f-strings-create",
          "ch-f-strings-slice"
        ]
      },
      {
        "id": "methods-and-clean",
        "titleEn": "Methods and Cleaning",
        "titleZh": "方法与清理",
        "firstSlideId": "ch-f-strings-methods",
        "slideIds": [
          "ch-f-strings-methods",
          "ch-f-strings-windows"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-f-strings-try",
        "slideIds": [
          "ch-f-strings-try",
          "ch-f-strings-mistakes",
          "ch-f-strings-check"
        ]
      }
    ]
  },
  {
    "id": "variables-types-input",
    "titleEn": "Variables, Types, and Input",
    "titleZh": "变量、类型与输入",
    "summaryEn": "Store values in variables, meet basic types, and use print and input in a .py script on Windows.",
    "summaryZh": "用变量保存值，认识基础类型，并在 Windows 上用 print 与 input 写 .py 脚本。",
    "slideCount": 9,
    "firstSlideId": "ch-f-variables-title",
    "sections": [
      {
        "id": "goals-and-variables",
        "titleEn": "Goals and Variables",
        "titleZh": "目标与变量",
        "firstSlideId": "ch-f-variables-title",
        "slideIds": [
          "ch-f-variables-title",
          "ch-f-variables-goals",
          "ch-f-variables-assign",
          "ch-f-variables-types"
        ]
      },
      {
        "id": "print-and-input",
        "titleEn": "print and input",
        "titleZh": "print 与 input",
        "firstSlideId": "ch-f-variables-io",
        "slideIds": [
          "ch-f-variables-io",
          "ch-f-variables-windows"
        ]
      },
      {
        "id": "practice",
        "titleEn": "Practice",
        "titleZh": "练习",
        "firstSlideId": "ch-f-variables-try",
        "slideIds": [
          "ch-f-variables-try",
          "ch-f-variables-mistakes",
          "ch-f-variables-check"
        ]
      }
    ]
  },
  {
    "id": "git-branches-workflow",
    "titleEn": "Git Branches Workflow",
    "titleZh": "Git 分支工作流",
    "summaryEn": "Use branches on Windows to isolate experiments, keep main stable, and merge finished work with clear status checks.",
    "summaryZh": "在 Windows 上用分支隔离试验、保持主线稳定，并用清楚的状态检查合并完成的工作。",
    "slideCount": 10,
    "firstSlideId": "ch-g-branches-title",
    "sections": [
      {
        "id": "branch-idea",
        "titleEn": "The Branch Idea",
        "titleZh": "分支的概念",
        "firstSlideId": "ch-g-branches-title",
        "slideIds": [
          "ch-g-branches-title",
          "ch-g-branches-goals",
          "ch-g-branches-why",
          "ch-g-branches-names"
        ]
      },
      {
        "id": "windows-workflow",
        "titleEn": "Windows Workflow",
        "titleZh": "Windows 工作流",
        "firstSlideId": "ch-g-branches-commands",
        "slideIds": [
          "ch-g-branches-commands",
          "ch-g-branches-status",
          "ch-g-branches-commits",
          "ch-g-branches-try",
          "ch-g-branches-mistakes",
          "ch-g-branches-check"
        ]
      }
    ]
  },
  {
    "id": "debugging-and-help",
    "titleEn": "Debugging and Getting Help",
    "titleZh": "调试与求助",
    "summaryEn": "Treat errors as evidence, isolate one cause at a time, and ask for help with clear Windows steps.",
    "summaryZh": "把报错当证据，一次只隔离一个原因，并用清楚的 Windows 步骤去求助。",
    "slideCount": 12,
    "firstSlideId": "ch-g-debugging-title",
    "sections": [
      {
        "id": "errors-are-data",
        "titleEn": "Errors Are Data",
        "titleZh": "报错是信息",
        "firstSlideId": "ch-g-debugging-title",
        "slideIds": [
          "ch-g-debugging-title",
          "ch-g-debugging-goals",
          "ch-g-debugging-why",
          "ch-g-debugging-types",
          "ch-g-debugging-common-errors"
        ]
      },
      {
        "id": "simple-method",
        "titleEn": "A Simple Debug Method",
        "titleZh": "简单调试方法",
        "firstSlideId": "ch-g-debugging-repro",
        "slideIds": [
          "ch-g-debugging-repro",
          "ch-g-debugging-isolate",
          "ch-g-debugging-search",
          "ch-g-debugging-try"
        ]
      },
      {
        "id": "asking-help",
        "titleEn": "Asking for Help",
        "titleZh": "如何求助",
        "firstSlideId": "ch-g-debugging-ask",
        "slideIds": [
          "ch-g-debugging-ask",
          "ch-g-debugging-mistakes",
          "ch-g-debugging-check"
        ]
      }
    ]
  },
  {
    "id": "reading-errors-deep",
    "titleEn": "Reading Errors Deeply",
    "titleZh": "深入阅读报错",
    "summaryEn": "Map a Python traceback, read bottom-first, and turn error patterns into concrete Windows actions.",
    "summaryZh": "读懂 Python traceback 结构，自下而上阅读，并把错误模式变成具体的 Windows 行动。",
    "slideCount": 10,
    "firstSlideId": "ch-g-error-reading-title",
    "sections": [
      {
        "id": "traceback-map",
        "titleEn": "The Traceback Map",
        "titleZh": "Traceback 地图",
        "firstSlideId": "ch-g-error-reading-title",
        "slideIds": [
          "ch-g-error-reading-title",
          "ch-g-error-reading-goals",
          "ch-g-error-reading-parts",
          "ch-g-error-reading-bottom-first"
        ]
      },
      {
        "id": "pattern-to-action",
        "titleEn": "From Pattern to Action",
        "titleZh": "从模式到行动",
        "firstSlideId": "ch-g-error-reading-patterns",
        "slideIds": [
          "ch-g-error-reading-patterns",
          "ch-g-error-reading-isolate",
          "ch-g-error-reading-ask",
          "ch-g-error-reading-try",
          "ch-g-error-reading-mistakes",
          "ch-g-error-reading-check"
        ]
      }
    ]
  },
  {
    "id": "git-basics",
    "titleEn": "Git Basics",
    "titleZh": "Git 基础",
    "summaryEn": "Understand why version control matters, install and configure Git on Windows, and complete a first commit workflow.",
    "summaryZh": "理解版本控制为何重要，在 Windows 上安装并配置 Git，并完成第一次提交工作流。",
    "slideCount": 11,
    "firstSlideId": "ch-g-git-title",
    "sections": [
      {
        "id": "why-git",
        "titleEn": "Why Git",
        "titleZh": "为什么用 Git",
        "firstSlideId": "ch-g-git-title",
        "slideIds": [
          "ch-g-git-title",
          "ch-g-git-goals",
          "ch-g-git-why"
        ]
      },
      {
        "id": "core-ideas",
        "titleEn": "Core Ideas",
        "titleZh": "核心概念",
        "firstSlideId": "ch-g-git-concepts",
        "slideIds": [
          "ch-g-git-concepts",
          "ch-g-git-install",
          "ch-g-git-config"
        ]
      },
      {
        "id": "first-workflow",
        "titleEn": "First Workflow",
        "titleZh": "第一次工作流",
        "firstSlideId": "ch-g-git-commands",
        "slideIds": [
          "ch-g-git-commands",
          "ch-g-git-gitignore",
          "ch-g-git-try",
          "ch-g-git-mistakes",
          "ch-g-git-check"
        ]
      }
    ]
  },
  {
    "id": "github-sharing",
    "titleEn": "GitHub and Sharing Code",
    "titleZh": "GitHub 与代码分享",
    "summaryEn": "Connect local Git on Windows to GitHub, push safely, clone projects, and keep secrets out of remote repositories.",
    "summaryZh": "把 Windows 上的本地 Git 连接到 GitHub，安全推送、克隆项目，并避免把机密放进远程仓库。",
    "slideCount": 10,
    "firstSlideId": "ch-g-github-title",
    "sections": [
      {
        "id": "why-github",
        "titleEn": "Why GitHub",
        "titleZh": "为什么用 GitHub",
        "firstSlideId": "ch-g-github-title",
        "slideIds": [
          "ch-g-github-title",
          "ch-g-github-goals",
          "ch-g-github-account"
        ]
      },
      {
        "id": "remote-push",
        "titleEn": "Remote and Push",
        "titleZh": "远程与推送",
        "firstSlideId": "ch-g-github-remote",
        "slideIds": [
          "ch-g-github-remote",
          "ch-g-github-create-repo",
          "ch-g-github-push-steps",
          "ch-g-github-clone"
        ]
      },
      {
        "id": "practice-safety",
        "titleEn": "Practice Safety",
        "titleZh": "练习安全",
        "firstSlideId": "ch-g-github-secrets",
        "slideIds": [
          "ch-g-github-secrets",
          "ch-g-github-mistakes",
          "ch-g-github-check"
        ]
      }
    ]
  },
  {
    "id": "small-programs-practice",
    "titleEn": "Small Programs Practice",
    "titleZh": "小程序练习",
    "summaryEn": "Build tiny Windows Python projects on purpose: clear goals, short loops, and honest tests.",
    "summaryZh": "有目的地做 Windows 上的微型 Python 项目：目标清楚、循环短、测试诚实。",
    "slideCount": 10,
    "firstSlideId": "ch-g-practice-projects-title",
    "sections": [
      {
        "id": "practice-mindset",
        "titleEn": "Practice Mindset",
        "titleZh": "练习心态",
        "firstSlideId": "ch-g-practice-projects-title",
        "slideIds": [
          "ch-g-practice-projects-title",
          "ch-g-practice-projects-goals",
          "ch-g-practice-projects-why-small",
          "ch-g-practice-projects-ideas"
        ]
      },
      {
        "id": "build-loop",
        "titleEn": "The Build Loop",
        "titleZh": "构建循环",
        "firstSlideId": "ch-g-practice-projects-rubber-duck",
        "slideIds": [
          "ch-g-practice-projects-rubber-duck",
          "ch-g-practice-projects-loop",
          "ch-g-practice-projects-structure",
          "ch-g-practice-projects-try",
          "ch-g-practice-projects-mistakes",
          "ch-g-practice-projects-check"
        ]
      }
    ]
  },
  {
    "id": "project-folders",
    "titleEn": "Project Folders",
    "titleZh": "项目文件夹",
    "summaryEn": "Organize Windows project folders so scripts, data, and virtual environments stay findable and safe.",
    "summaryZh": "组织 Windows 项目文件夹，让脚本、数据与虚拟环境易于查找且更安全。",
    "slideCount": 10,
    "firstSlideId": "ch-g-project-folders-title",
    "sections": [
      {
        "id": "folder-basics",
        "titleEn": "Folder Basics",
        "titleZh": "文件夹基础",
        "firstSlideId": "ch-g-project-folders-title",
        "slideIds": [
          "ch-g-project-folders-title",
          "ch-g-project-folders-goals",
          "ch-g-project-folders-home",
          "ch-g-project-folders-naming"
        ]
      },
      {
        "id": "inside-the-root",
        "titleEn": "Inside the Project Root",
        "titleZh": "项目根目录内部",
        "firstSlideId": "ch-g-project-folders-contents",
        "slideIds": [
          "ch-g-project-folders-contents",
          "ch-g-project-folders-keep-out",
          "ch-g-project-folders-open",
          "ch-g-project-folders-try",
          "ch-g-project-folders-mistakes",
          "ch-g-project-folders-check"
        ]
      }
    ]
  },
  {
    "id": "network-checks-windows",
    "titleEn": "Network Checks on Windows",
    "titleZh": "Windows 上的网络检查",
    "summaryEn": "Run a calm Windows troubleshooting order with ipconfig, ping, nslookup, tracert, and Test-NetConnection.",
    "summaryZh": "用 ipconfig、ping、nslookup、tracert 与 Test-NetConnection 执行冷静的 Windows 排障顺序。",
    "slideCount": 10,
    "firstSlideId": "ch-h-checks-title",
    "sections": [
      {
        "id": "toolbox",
        "titleEn": "The Toolbox",
        "titleZh": "工具箱",
        "firstSlideId": "ch-h-checks-title",
        "slideIds": [
          "ch-h-checks-title",
          "ch-h-checks-goals",
          "ch-h-checks-order",
          "ch-h-checks-ipconfig"
        ]
      },
      {
        "id": "path-and-port",
        "titleEn": "Path and Port",
        "titleZh": "路径与端口",
        "firstSlideId": "ch-h-checks-nslookup",
        "slideIds": [
          "ch-h-checks-nslookup",
          "ch-h-checks-tracert",
          "ch-h-checks-tnc",
          "ch-h-checks-try",
          "ch-h-checks-mistakes",
          "ch-h-checks-check"
        ]
      }
    ]
  },
  {
    "id": "dhcp-and-wifi",
    "titleEn": "DHCP and Home Wi-Fi",
    "titleZh": "DHCP 与家庭 Wi-Fi",
    "summaryEn": "See how home Wi-Fi parts fit together and how DHCP leases addresses so Windows can join without manual typing.",
    "summaryZh": "看清家庭 Wi-Fi 各部分如何配合，以及 DHCP 如何租约地址，让 Windows 无需手写配置即可接入。",
    "slideCount": 10,
    "firstSlideId": "ch-h-dhcp-wifi-title",
    "sections": [
      {
        "id": "home-wifi",
        "titleEn": "Home Wi-Fi",
        "titleZh": "家庭 Wi-Fi",
        "firstSlideId": "ch-h-dhcp-wifi-title",
        "slideIds": [
          "ch-h-dhcp-wifi-title",
          "ch-h-dhcp-wifi-goals",
          "ch-h-dhcp-wifi-parts",
          "ch-h-dhcp-wifi-ssid"
        ]
      },
      {
        "id": "dhcp-idea",
        "titleEn": "DHCP Idea",
        "titleZh": "DHCP 概念",
        "firstSlideId": "ch-h-dhcp-wifi-what",
        "slideIds": [
          "ch-h-dhcp-wifi-what",
          "ch-h-dhcp-wifi-lease",
          "ch-h-dhcp-wifi-renew",
          "ch-h-dhcp-wifi-try",
          "ch-h-dhcp-wifi-mistakes",
          "ch-h-dhcp-wifi-check"
        ]
      }
    ]
  },
  {
    "id": "interfaces-ping-firewall",
    "titleEn": "Interfaces, Ping, and Firewall",
    "titleZh": "网卡、Ping 与防火墙",
    "summaryEn": "Find Windows network interfaces, interpret ping results carefully, and understand how the firewall can block tests without meaning “the Internet is dead.”",
    "summaryZh": "找到 Windows 网络接口，谨慎解读 ping 结果，并理解防火墙如何阻断测试却不代表“互联网死了”。",
    "slideCount": 10,
    "firstSlideId": "ch-h-interfaces-title",
    "sections": [
      {
        "id": "interfaces",
        "titleEn": "Interfaces",
        "titleZh": "网络接口",
        "firstSlideId": "ch-h-interfaces-title",
        "slideIds": [
          "ch-h-interfaces-title",
          "ch-h-interfaces-goals",
          "ch-h-interfaces-iface",
          "ch-h-interfaces-see-iface"
        ]
      },
      {
        "id": "ping-firewall",
        "titleEn": "Ping and Firewall",
        "titleZh": "Ping 与防火墙",
        "firstSlideId": "ch-h-interfaces-ping",
        "slideIds": [
          "ch-h-interfaces-ping",
          "ch-h-interfaces-ping-fail",
          "ch-h-interfaces-firewall",
          "ch-h-interfaces-try",
          "ch-h-interfaces-mistakes",
          "ch-h-interfaces-check"
        ]
      }
    ]
  },
  {
    "id": "ip-and-dns",
    "titleEn": "IP Address and DNS",
    "titleZh": "IP 地址与 DNS",
    "summaryEn": "Read IPv4 addresses on Windows, separate private from public space, and use DNS as the Internet phone book.",
    "summaryZh": "在 Windows 上阅读 IPv4 地址，区分私有与公网空间，并把 DNS 当作互联网电话簿。",
    "slideCount": 10,
    "firstSlideId": "ch-h-ip-dns-title",
    "sections": [
      {
        "id": "ip-address",
        "titleEn": "IP Address",
        "titleZh": "IP 地址",
        "firstSlideId": "ch-h-ip-dns-title",
        "slideIds": [
          "ch-h-ip-dns-title",
          "ch-h-ip-dns-goals",
          "ch-h-ip-dns-what-ip",
          "ch-h-ip-dns-private-public"
        ]
      },
      {
        "id": "dns-and-ipconfig",
        "titleEn": "DNS and ipconfig",
        "titleZh": "DNS 与 ipconfig",
        "firstSlideId": "ch-h-ip-dns-dns",
        "slideIds": [
          "ch-h-ip-dns-dns",
          "ch-h-ip-dns-flow",
          "ch-h-ip-dns-ipconfig",
          "ch-h-ip-dns-try",
          "ch-h-ip-dns-mistakes",
          "ch-h-ip-dns-check"
        ]
      }
    ]
  },
  {
    "id": "lan-wan-internet",
    "titleEn": "LAN, WAN, and Internet",
    "titleZh": "局域网、广域网与互联网",
    "summaryEn": "Map network scope from room-scale LANs to WANs and the Internet, including campus and home path mental models.",
    "summaryZh": "从房间级局域网映射到广域网与互联网，建立校园与家庭路径的心智模型。",
    "slideCount": 10,
    "firstSlideId": "ch-h-lan-wan-title",
    "sections": [
      {
        "id": "scope-map",
        "titleEn": "Scope Map",
        "titleZh": "范围地图",
        "firstSlideId": "ch-h-lan-wan-title",
        "slideIds": [
          "ch-h-lan-wan-title",
          "ch-h-lan-wan-goals",
          "ch-h-lan-wan-lan",
          "ch-h-lan-wan-wan"
        ]
      },
      {
        "id": "internet-picture",
        "titleEn": "Internet Picture",
        "titleZh": "互联网图景",
        "firstSlideId": "ch-h-lan-wan-internet",
        "slideIds": [
          "ch-h-lan-wan-internet",
          "ch-h-lan-wan-path",
          "ch-h-lan-wan-campus",
          "ch-h-lan-wan-try",
          "ch-h-lan-wan-mistakes",
          "ch-h-lan-wan-check"
        ]
      }
    ]
  },
  {
    "id": "what-is-network",
    "titleEn": "What Is a Network",
    "titleZh": "什么是网络",
    "summaryEn": "See how devices, links, and packets form a network, and why the Internet is a network of networks.",
    "summaryZh": "理解设备、链路与数据包如何组成网络，以及为什么互联网是“网络的网络”。",
    "slideCount": 10,
    "firstSlideId": "ch-h-network-title",
    "sections": [
      {
        "id": "network-basics",
        "titleEn": "Network Basics",
        "titleZh": "网络基础",
        "firstSlideId": "ch-h-network-title",
        "slideIds": [
          "ch-h-network-title",
          "ch-h-network-goals",
          "ch-h-network-why",
          "ch-h-network-devices",
          "ch-h-network-packets"
        ]
      },
      {
        "id": "lan-and-internet",
        "titleEn": "LAN and the Internet",
        "titleZh": "局域网与互联网",
        "firstSlideId": "ch-h-network-lan",
        "slideIds": [
          "ch-h-network-lan",
          "ch-h-network-internet",
          "ch-h-network-try",
          "ch-h-network-mistakes",
          "ch-h-network-check"
        ]
      }
    ]
  },
  {
    "id": "protocols-and-ports",
    "titleEn": "Protocols and Ports",
    "titleZh": "协议与端口",
    "summaryEn": "Treat protocols as shared rules, read URLs as structured addresses, and recognize why ports matter for Windows network apps.",
    "summaryZh": "把协议当作共享规则，把 URL 当作结构化地址，并认识端口为何对 Windows 网络应用重要。",
    "slideCount": 10,
    "firstSlideId": "ch-h-protocols-title",
    "sections": [
      {
        "id": "protocol-idea",
        "titleEn": "Protocol Idea",
        "titleZh": "协议概念",
        "firstSlideId": "ch-h-protocols-title",
        "slideIds": [
          "ch-h-protocols-title",
          "ch-h-protocols-goals",
          "ch-h-protocols-what",
          "ch-h-protocols-common"
        ]
      },
      {
        "id": "url-and-ports",
        "titleEn": "URL and Ports",
        "titleZh": "URL 与端口",
        "firstSlideId": "ch-h-protocols-http-https",
        "slideIds": [
          "ch-h-protocols-http-https",
          "ch-h-protocols-url",
          "ch-h-protocols-ports",
          "ch-h-protocols-try",
          "ch-h-protocols-mistakes",
          "ch-h-protocols-check"
        ]
      }
    ]
  },
  {
    "id": "tcp-udp-basics",
    "titleEn": "TCP and UDP Basics",
    "titleZh": "TCP 与 UDP 基础",
    "summaryEn": "Compare reliable TCP streams with lightweight UDP messages, and connect each style to everyday Windows applications.",
    "summaryZh": "比较可靠的 TCP 流与轻量的 UDP 消息，并把每种风格联系到日常 Windows 应用。",
    "slideCount": 10,
    "firstSlideId": "ch-h-tcp-udp-title",
    "sections": [
      {
        "id": "two-styles",
        "titleEn": "Two Transport Styles",
        "titleZh": "两种传输风格",
        "firstSlideId": "ch-h-tcp-udp-title",
        "slideIds": [
          "ch-h-tcp-udp-title",
          "ch-h-tcp-udp-goals",
          "ch-h-tcp-udp-tcp",
          "ch-h-tcp-udp-udp"
        ]
      },
      {
        "id": "choose-and-practice",
        "titleEn": "Choose and Practice",
        "titleZh": "选择与练习",
        "firstSlideId": "ch-h-tcp-udp-compare",
        "slideIds": [
          "ch-h-tcp-udp-compare",
          "ch-h-tcp-udp-ports",
          "ch-h-tcp-udp-examples",
          "ch-h-tcp-udp-try",
          "ch-h-tcp-udp-mistakes",
          "ch-h-tcp-udp-check"
        ]
      }
    ]
  },
  {
    "id": "browser-cookies-api",
    "titleEn": "Browser, Cookies, and APIs",
    "titleZh": "浏览器、Cookie 与 API",
    "summaryEn": "Tabs and downloads, how cookies and cache work, APIs as programmatic doorways, and JSON as a common data format.",
    "summaryZh": "标签页与下载、Cookie 与缓存机制、作为程序入口的 API，以及常见的 JSON 数据格式。",
    "slideCount": 9,
    "firstSlideId": "ch-i-browser-title",
    "sections": [
      {
        "id": "browser-habits",
        "titleEn": "Browser Habits",
        "titleZh": "浏览器习惯",
        "firstSlideId": "ch-i-browser-title",
        "slideIds": [
          "ch-i-browser-title",
          "ch-i-browser-goals",
          "ch-i-browser-tabs",
          "ch-i-browser-cookies"
        ]
      },
      {
        "id": "api-json",
        "titleEn": "APIs and JSON",
        "titleZh": "API 与 JSON",
        "firstSlideId": "ch-i-browser-api",
        "slideIds": [
          "ch-i-browser-api",
          "ch-i-browser-json",
          "ch-i-browser-try",
          "ch-i-browser-errors",
          "ch-i-browser-check"
        ]
      }
    ]
  },
  {
    "id": "browser-devtools",
    "titleEn": "Browser DevTools",
    "titleZh": "浏览器开发者工具",
    "summaryEn": "Open DevTools in Edge or Chrome, inspect Elements, read Console messages lightly, and capture Network requests on Windows.",
    "summaryZh": "在 Edge 或 Chrome 中打开开发者工具，检查元素，浅读控制台消息，并在 Windows 上捕获网络请求。",
    "slideCount": 9,
    "firstSlideId": "ch-i-devtools-title",
    "sections": [
      {
        "id": "open-tools",
        "titleEn": "Open the Tools",
        "titleZh": "打开工具",
        "firstSlideId": "ch-i-devtools-title",
        "slideIds": [
          "ch-i-devtools-title",
          "ch-i-devtools-goals",
          "ch-i-devtools-open",
          "ch-i-devtools-elements"
        ]
      },
      {
        "id": "console-network",
        "titleEn": "Console and Network",
        "titleZh": "控制台与网络",
        "firstSlideId": "ch-i-devtools-console",
        "slideIds": [
          "ch-i-devtools-console",
          "ch-i-devtools-network",
          "ch-i-devtools-try",
          "ch-i-devtools-errors",
          "ch-i-devtools-check"
        ]
      }
    ]
  },
  {
    "id": "html-page-basics",
    "titleEn": "HTML Page Basics",
    "titleZh": "HTML 页面基础",
    "summaryEn": "Markup versus programs, tags and elements, document shape, and common tags you will see in View Source.",
    "summaryZh": "标记与程序的区别、标签与元素、文档形状，以及在查看源代码时常见的标签。",
    "slideCount": 9,
    "firstSlideId": "ch-i-html-title",
    "sections": [
      {
        "id": "markup-idea",
        "titleEn": "Markup Idea",
        "titleZh": "标记概念",
        "firstSlideId": "ch-i-html-title",
        "slideIds": [
          "ch-i-html-title",
          "ch-i-html-goals",
          "ch-i-html-what",
          "ch-i-html-tags"
        ]
      },
      {
        "id": "page-structure",
        "titleEn": "Page Structure",
        "titleZh": "页面结构",
        "firstSlideId": "ch-i-html-document",
        "slideIds": [
          "ch-i-html-document",
          "ch-i-html-common",
          "ch-i-html-try",
          "ch-i-html-errors",
          "ch-i-html-check"
        ]
      }
    ]
  },
  {
    "id": "urls-and-http",
    "titleEn": "URLs and HTTP",
    "titleZh": "网址与 HTTP",
    "summaryEn": "URL parts, the HTTP request-response conversation, status codes, headers lightly, and address-bar habits.",
    "summaryZh": "网址结构、HTTP 请求-响应对话、状态码、请求头浅讲，以及地址栏习惯。",
    "slideCount": 10,
    "firstSlideId": "ch-i-http-title",
    "sections": [
      {
        "id": "url-parts",
        "titleEn": "URL Parts",
        "titleZh": "网址结构",
        "firstSlideId": "ch-i-http-title",
        "slideIds": [
          "ch-i-http-title",
          "ch-i-http-goals",
          "ch-i-http-url",
          "ch-i-http-address-bar"
        ]
      },
      {
        "id": "http-conversation",
        "titleEn": "HTTP Conversation",
        "titleZh": "HTTP 对话",
        "firstSlideId": "ch-i-http-request",
        "slideIds": [
          "ch-i-http-request",
          "ch-i-http-status",
          "ch-i-http-headers",
          "ch-i-http-try",
          "ch-i-http-errors",
          "ch-i-http-check"
        ]
      }
    ]
  },
  {
    "id": "https-and-trust",
    "titleEn": "HTTPS and Trust",
    "titleZh": "HTTPS 与信任",
    "summaryEn": "HTTP versus HTTPS, encryption and certificates, what the lock icon proves, and how to treat browser warnings.",
    "summaryZh": "HTTP 与 HTTPS、加密与证书、锁标志能证明什么，以及如何对待浏览器警告。",
    "slideCount": 9,
    "firstSlideId": "ch-i-https-title",
    "sections": [
      {
        "id": "secure-transport",
        "titleEn": "Secure Transport",
        "titleZh": "安全传输",
        "firstSlideId": "ch-i-https-title",
        "slideIds": [
          "ch-i-https-title",
          "ch-i-https-goals",
          "ch-i-https-vs",
          "ch-i-https-encrypt"
        ]
      },
      {
        "id": "trust-signals",
        "titleEn": "Trust Signals",
        "titleZh": "信任信号",
        "firstSlideId": "ch-i-https-lock",
        "slideIds": [
          "ch-i-https-lock",
          "ch-i-https-warning",
          "ch-i-https-try",
          "ch-i-https-errors",
          "ch-i-https-check"
        ]
      }
    ]
  },
  {
    "id": "how-web-pages-load",
    "titleEn": "How Web Pages Load",
    "titleZh": "网页如何加载",
    "summaryEn": "Client-server roles, request and response, DNS lookup, and how the browser turns HTML into a page.",
    "summaryZh": "客户端与服务器角色、请求与响应、DNS 查询，以及浏览器如何把 HTML 变成页面。",
    "slideCount": 9,
    "firstSlideId": "ch-i-web-title",
    "sections": [
      {
        "id": "client-server",
        "titleEn": "Client and Server",
        "titleZh": "客户端与服务器",
        "firstSlideId": "ch-i-web-title",
        "slideIds": [
          "ch-i-web-title",
          "ch-i-web-goals",
          "ch-i-web-roles",
          "ch-i-web-request"
        ]
      },
      {
        "id": "html-and-browser",
        "titleEn": "HTML and the Browser",
        "titleZh": "HTML 与浏览器",
        "firstSlideId": "ch-i-web-flow",
        "slideIds": [
          "ch-i-web-flow",
          "ch-i-web-html",
          "ch-i-web-view-source",
          "ch-i-web-errors",
          "ch-i-web-check"
        ]
      }
    ]
  },
  {
    "id": "updates-and-hygiene",
    "titleEn": "Updates and Hygiene",
    "titleZh": "更新与数字卫生",
    "summaryEn": "Windows Update, browser and app patches, Windows Security status, disk cleanup habits, and safe software sources.",
    "summaryZh": "Windows 更新、浏览器与应用补丁、Windows 安全中心状态、磁盘清理习惯与安全软件来源。",
    "slideCount": 9,
    "firstSlideId": "ch-j-hygiene-title",
    "sections": [
      {
        "id": "keep-current",
        "titleEn": "Keep Software Current",
        "titleZh": "保持软件最新",
        "firstSlideId": "ch-j-hygiene-title",
        "slideIds": [
          "ch-j-hygiene-title",
          "ch-j-hygiene-goals",
          "ch-j-hygiene-windows-update",
          "ch-j-hygiene-apps"
        ]
      },
      {
        "id": "protect-and-clean",
        "titleEn": "Protect and Clean",
        "titleZh": "防护与清理",
        "firstSlideId": "ch-j-hygiene-security",
        "slideIds": [
          "ch-j-hygiene-security",
          "ch-j-hygiene-cleanup",
          "ch-j-hygiene-try",
          "ch-j-hygiene-errors",
          "ch-j-hygiene-check"
        ]
      }
    ]
  },
  {
    "id": "learning-lab-setup",
    "titleEn": "Learning Lab Setup",
    "titleZh": "学习实验室搭建",
    "summaryEn": "Capstone checklist: projects folder, Cursor, Python, terminal, Git, backup, and safe download habits on Windows.",
    "summaryZh": "综合清单：在 Windows 上落实项目文件夹、Cursor、Python、终端、Git、备份与安全下载习惯。",
    "slideCount": 10,
    "firstSlideId": "ch-j-lab-title",
    "sections": [
      {
        "id": "workspace",
        "titleEn": "Your Workspace",
        "titleZh": "你的工作区",
        "firstSlideId": "ch-j-lab-title",
        "slideIds": [
          "ch-j-lab-title",
          "ch-j-lab-goals",
          "ch-j-lab-folder",
          "ch-j-lab-cursor"
        ]
      },
      {
        "id": "tools-checklist",
        "titleEn": "Tools Checklist",
        "titleZh": "工具清单",
        "firstSlideId": "ch-j-lab-python",
        "slideIds": [
          "ch-j-lab-python",
          "ch-j-lab-terminal",
          "ch-j-lab-git",
          "ch-j-lab-backup-safe",
          "ch-j-lab-try",
          "ch-j-lab-check"
        ]
      }
    ]
  },
  {
    "id": "passwords-and-mfa",
    "titleEn": "Passwords and MFA",
    "titleZh": "密码与多重验证",
    "summaryEn": "Strong passphrases, password managers, MFA factor choices, recovery codes, and account recovery planning.",
    "summaryZh": "强口令短语、密码管理器、多重验证因素选择、恢复码与账户找回规划。",
    "slideCount": 10,
    "firstSlideId": "ch-j-passwords-title",
    "sections": [
      {
        "id": "password-habits",
        "titleEn": "Password Habits",
        "titleZh": "密码习惯",
        "firstSlideId": "ch-j-passwords-title",
        "slideIds": [
          "ch-j-passwords-title",
          "ch-j-passwords-goals",
          "ch-j-passwords-strong",
          "ch-j-passwords-manager"
        ]
      },
      {
        "id": "mfa-recovery",
        "titleEn": "MFA and Recovery",
        "titleZh": "多重验证与找回",
        "firstSlideId": "ch-j-passwords-mfa",
        "slideIds": [
          "ch-j-passwords-mfa",
          "ch-j-passwords-factors",
          "ch-j-passwords-recovery",
          "ch-j-passwords-try",
          "ch-j-passwords-errors",
          "ch-j-passwords-check"
        ]
      }
    ]
  },
  {
    "id": "phishing-and-scams",
    "titleEn": "Phishing and Scams",
    "titleZh": "钓鱼与诈骗",
    "summaryEn": "Phishing psychology, spoofed URLs, urgent messages, inbox habits in Edge/Chrome, and what to do after a mistake.",
    "summaryZh": "钓鱼心理学、伪造网址、紧迫消息、Edge/Chrome 收件习惯，以及点错之后怎么办。",
    "slideCount": 9,
    "firstSlideId": "ch-j-phishing-title",
    "sections": [
      {
        "id": "recognize",
        "titleEn": "Recognize Tricks",
        "titleZh": "识别套路",
        "firstSlideId": "ch-j-phishing-title",
        "slideIds": [
          "ch-j-phishing-title",
          "ch-j-phishing-goals",
          "ch-j-phishing-psych",
          "ch-j-phishing-url"
        ]
      },
      {
        "id": "respond",
        "titleEn": "Respond Safely",
        "titleZh": "安全应对",
        "firstSlideId": "ch-j-phishing-inbox",
        "slideIds": [
          "ch-j-phishing-inbox",
          "ch-j-phishing-after",
          "ch-j-phishing-try",
          "ch-j-phishing-errors",
          "ch-j-phishing-check"
        ]
      }
    ]
  },
  {
    "id": "privacy-settings",
    "titleEn": "Privacy Settings",
    "titleZh": "隐私设置",
    "summaryEn": "Browser permissions, cookies and tracking choices, Windows privacy controls, and practical habits for shared PCs.",
    "summaryZh": "浏览器权限、Cookie 与追踪选择、Windows 隐私控件，以及共用电脑上的实用习惯。",
    "slideCount": 9,
    "firstSlideId": "ch-j-privacy-title",
    "sections": [
      {
        "id": "browser-privacy",
        "titleEn": "Browser Privacy",
        "titleZh": "浏览器隐私",
        "firstSlideId": "ch-j-privacy-title",
        "slideIds": [
          "ch-j-privacy-title",
          "ch-j-privacy-goals",
          "ch-j-privacy-permissions",
          "ch-j-privacy-cookies"
        ]
      },
      {
        "id": "windows-privacy",
        "titleEn": "Windows Privacy",
        "titleZh": "Windows 隐私",
        "firstSlideId": "ch-j-privacy-windows",
        "slideIds": [
          "ch-j-privacy-windows",
          "ch-j-privacy-shared",
          "ch-j-privacy-try",
          "ch-j-privacy-errors",
          "ch-j-privacy-check"
        ]
      }
    ]
  },
  {
    "id": "internet-safety",
    "titleEn": "Internet Safety",
    "titleZh": "网络安全入门",
    "summaryEn": "Map beginner risks: passwords, MFA, phishing, public Wi-Fi, HTTPS limits, and safe downloads on Windows.",
    "summaryZh": "梳理初学者风险：密码、多重验证、钓鱼、公共 Wi-Fi、HTTPS 边界，以及 Windows 上的安全下载。",
    "slideCount": 10,
    "firstSlideId": "ch-j-safety-title",
    "sections": [
      {
        "id": "threats",
        "titleEn": "Threats Beginners Meet",
        "titleZh": "初学者常见风险",
        "firstSlideId": "ch-j-safety-title",
        "slideIds": [
          "ch-j-safety-title",
          "ch-j-safety-goals",
          "ch-j-safety-password",
          "ch-j-safety-2fa"
        ]
      },
      {
        "id": "browser-downloads",
        "titleEn": "Browser, Wi-Fi, and Downloads",
        "titleZh": "浏览器、Wi-Fi 与下载",
        "firstSlideId": "ch-j-safety-phishing",
        "slideIds": [
          "ch-j-safety-phishing",
          "ch-j-safety-public-wifi",
          "ch-j-safety-download",
          "ch-j-safety-try",
          "ch-j-safety-errors",
          "ch-j-safety-check"
        ]
      }
    ]
  }
]

export const chapterMetaById: Record<string, ChapterMeta> = Object.fromEntries(
  chapterCatalog.map((chapter) => [chapter.id, chapter]),
)
