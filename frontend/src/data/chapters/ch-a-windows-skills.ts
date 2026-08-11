import type { Chapter } from '../../types/course'

export const chAWindowsSkills: Chapter = {
  id: 'windows-daily-skills',
  titleEn: 'Windows Daily Skills',
  titleZh: 'Windows 日常技能',
  summaryEn:
    'Master Start, Settings search, File Explorer, the taskbar, shortcuts, clipboard, light virtual desktops, safe downloads, and your user profile path on Windows.',
  summaryZh:
    '掌握 Windows 上的开始菜单、设置搜索、文件资源管理器、任务栏、快捷键、剪贴板、轻度虚拟桌面、安全下载，以及用户配置文件夹路径。',
  sections: [
    {
      id: 'daily-windows-map',
      titleEn: 'Daily Windows Map',
      titleZh: '日常 Windows 地图',
      slides: [
        {
          id: 'ch-a-windows-skills-title',
          layout: 'title',

          titleEn: 'Part A · Windows Daily Skills',
          titleZh: '篇章 A · Windows 日常技能',
          subtitleEn: 'The desktop habits that support every later coding lab',
          subtitleZh: '支撑后续每一节编程实验的桌面习惯',
          illustration: 'title',
          keywords: [
            { en: 'Windows', zh: 'Windows 系统' },
            { en: 'File Explorer', zh: '文件资源管理器' },
            { en: 'User Profile', zh: '用户配置文件夹' },
          ],
        },
        {
          id: 'ch-a-windows-skills-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'These skills are the floor under editors, terminals, and Python. If you cannot find Settings, read an Explorer address bar, or name your user folder, later labs will feel mysterious for the wrong reason. This chapter trains the Windows habits you will reuse every week of the course.',
          bodyZh:
            '这些技能是编辑器、终端与 Python 的地基。如果你找不到设置、读不懂资源管理器地址栏，或说不出自己的用户文件夹，后面的实验会因为错误原因而显得神秘。本章训练你在整门课里每周都会复用的 Windows 习惯。',
          bullets: [
            {
              en: 'Launch apps from Start and find pages with Settings search.',
              zh: '用开始菜单启动应用，并用设置搜索找到页面。',
              keywords: [
                { en: 'Start', zh: '开始' },
                { en: 'Settings', zh: '设置' },
              ],
            },
            {
              en: 'Read and type paths in File Explorer’s address bar.',
              zh: '在文件资源管理器地址栏中阅读并输入路径。',
              keywords: [{ en: 'Address Bar', zh: '地址栏' }],
            },
            {
              en: 'Use taskbar pins, Win shortcuts, and the clipboard confidently.',
              zh: '自信地使用任务栏固定、Win 快捷键与剪贴板。',
            },
            {
              en: 'Name your user profile path and download only from trusted places.',
              zh: '说出用户配置路径，并只从可信来源下载。',
              keywords: [{ en: 'User Profile', zh: '用户配置文件夹' }],
            },
          ],
        },
        {
          id: 'ch-a-windows-skills-why',
          layout: 'text',

          titleEn: 'Why Desktop Fluency Comes First',
          titleZh: '为什么先练桌面熟练度',
          illustration: 'environment',
          bodyEn:
            'Coding tools live on top of the operating system. Cursor, PowerShell, and Python installers all assume you can open folders, copy paths, and recover when a window is buried. Beginners often blame the language when the real problem is a missing file, a wrong folder, or an installer that never finished. Building a calm Windows routine reduces that noise. Think of this chapter as learning the room before you learn the instruments inside it. Every later “Open Folder” or “run this command” step becomes shorter once these moves are automatic.',
          bodyZh:
            '编程工具都建立在操作系统之上。Cursor、PowerShell 与 Python 安装程序都假定你能打开文件夹、复制路径，并在窗口被挡住时找回它。初学者常把问题怪到语言上，真正原因却是文件找不到、文件夹开错，或安装从未完成。建立冷静的 Windows 例行操作能减少这种噪音。把本章想成先熟悉房间，再学习房间里的乐器。一旦这些动作变成肌肉记忆，后面每一次“打开文件夹”或“运行这条命令”都会更短。',
          keywords: [
            { en: 'Operating System', zh: '操作系统' },
            { en: 'Folder', zh: '文件夹' },
          ],
        },
        {
          id: 'ch-a-windows-skills-start',
          layout: 'text',

          titleEn: 'Start Menu as Your Launcher',
          titleZh: '开始菜单就是启动器',
          illustration: 'interface',
          bodyEn:
            'Press the Windows key to open Start. You do not need to scroll through tiles looking for an icon. Type the first letters of the app name—Cursor, File Explorer, Terminal, Settings—and press Enter when the match is highlighted. Start search also finds settings pages and recently opened documents, which is useful when you remember the topic but not the menu path. If an app is installed but “missing,” Start search is the first place to check before reinstalling. Treat Start as a command line for launching, not as a wall of pictures.',
          bodyZh:
            '按 Windows 键打开开始菜单。你不必在磁贴墙里滚动找图标。输入应用名的前几个字母——Cursor、文件资源管理器、终端、设置——高亮匹配后按 Enter。开始搜索也能找到设置页面和最近打开的文档，适合你记得主题却不记得菜单路径的时候。如果应用已安装却“不见了”，在重新安装之前，先用开始搜索检查。把开始菜单当成启动用的命令行，而不是一堵图标墙。',
          bullets: [
            {
              en: 'Windows key opens Start; typing filters apps and settings.',
              zh: 'Windows 键打开开始；输入文字即可筛选应用与设置。',
              keywords: [{ en: 'Start', zh: '开始' }],
            },
            {
              en: 'Prefer typing over hunting icons when Start feels crowded.',
              zh: '开始菜单很挤时，优先输入名称，而不是找图标。',
            },
          ],
        },
        {
          id: 'ch-a-windows-skills-settings',
          layout: 'text',

          titleEn: 'Settings Search Beats Menu Hunting',
          titleZh: '设置搜索胜过菜单翻找',
          illustration: 'environment',
          bodyEn:
            'Win + I opens Settings. At the top of Settings is a search box that understands ordinary words: display, storage, Wi‑Fi, about, clipboard. For class troubleshooting, search About to open System → About and read the device name and Windows edition. Search Storage when the disk feels full, or Network when the lab Wi‑Fi fails. You rarely need to memorize the full left-hand tree. Search first, then bookmark the two or three pages you visit every term. When a classmate says “go to Privacy,” you can still find it by typing the word even if the menu layout changed after an update.',
          bodyZh:
            'Win + I 打开设置。设置顶部的搜索框能理解日常词语：显示、存储、Wi‑Fi、关于、剪贴板。课堂排查时，搜索“关于”可打开“系统 → 关于”，查看设备名与 Windows 版本。磁盘快满时搜索“存储”，实验 Wi‑Fi 出问题时搜索“网络”。你很少需要背完整左侧目录树。先搜索，再把每学期常去的两三个页面记牢。同学说“去隐私设置”时，即便更新后菜单布局变了，你仍可输入关键词找到它。',
          bullets: [
            {
              en: 'Win + I opens Settings; use the search box at the top.',
              zh: 'Win + I 打开设置；使用顶部搜索框。',
              keywords: [{ en: 'Settings', zh: '设置' }],
            },
            {
              en: 'Search About for device name and Windows edition.',
              zh: '搜索“关于”可查看设备名与 Windows 版本。',
            },
            {
              en: 'Storage and Network are common first stops in labs.',
              zh: '实验课里“存储”与“网络”是常见第一站。',
            },
          ],
        },
        {
          id: 'ch-a-windows-skills-taskbar',
          layout: 'text',

          titleEn: 'Taskbar Pins for Daily Tools',
          titleZh: '把日常工具固定到任务栏',
          illustration: 'interface',
          bodyEn:
            'The taskbar at the bottom of the screen is your short list of apps that should stay one click away. Right‑click an open app’s icon and choose Pin to taskbar, or pin from Start. For this course, pin File Explorer, Cursor, and your browser at minimum. A pinned icon that is not running still opens the app; a running app shows a underline or highlight. Hover to preview open windows when you have several Explorer windows. Do not treat the Desktop as storage for every installer and project shortcut—the taskbar is for launching, and your user folders are for files.',
          bodyZh:
            '屏幕底部的任务栏是应保持一键可达的短应用列表。在已打开应用的图标上右键选择“固定到任务栏”，或从开始菜单固定。本课程至少固定文件资源管理器、Cursor 与浏览器。未运行的固定图标仍可打开应用；正在运行的应用会有下划线或高亮。有多个资源管理器窗口时，悬停可预览。不要把桌面当成所有安装包与项目快捷方式的仓库——任务栏负责启动，用户文件夹负责存放文件。',
          keywords: [
            { en: 'Taskbar', zh: '任务栏' },
            { en: 'Pin', zh: '固定' },
          ],
          bullets: [
            {
              en: 'Pin File Explorer, Cursor, and a browser for class days.',
              zh: '上课日把文件资源管理器、Cursor 与浏览器固定起来。',
            },
            {
              en: 'Use the taskbar to launch; keep project files in folders, not as Desktop clutter.',
              zh: '用任务栏启动；项目文件放在文件夹里，不要堆满桌面。',
            },
          ],
        },
      ],
    },
    {
      id: 'files-paths-habits',
      titleEn: 'Files, Paths, and Safe Habits',
      titleZh: '文件、路径与安全习惯',
      slides: [
        {
          id: 'ch-a-windows-skills-explorer',
          layout: 'text',

          titleEn: 'File Explorer and the Address Bar',
          titleZh: '文件资源管理器与地址栏',
          illustration: 'files',
          bodyEn:
            'Win + E opens File Explorer. The address bar near the top shows where you are on disk. Click it once and the friendly crumbs often turn into a typed path such as C:\\Users\\You\\Documents. You can paste a full path and press Enter to jump there—vital when a teacher shares a project location. The left navigation pane offers quick access to Desktop, Downloads, and Documents, but the address bar is the precise truth. When a lab says “open this folder,” read the bar aloud to yourself before editing anything.',
          bodyZh:
            'Win + E 打开文件资源管理器。顶部附近的地址栏显示你在磁盘上的位置。单击一次后，友好的面包屑常会变成可输入路径，例如 C:\\Users\\你\\Documents。你可以粘贴完整路径并按 Enter 跳转——老师分享项目位置时这很关键。左侧导航提供桌面、下载与文档等快捷入口，但地址栏才是精确真相。实验要求“打开这个文件夹”时，先对着地址栏读一遍，再开始编辑。',
          bullets: [
            {
              en: 'Win + E opens File Explorer; click the address bar to type or paste a path.',
              zh: 'Win + E 打开资源管理器；单击地址栏可输入或粘贴路径。',
              keywords: [
                { en: 'File Explorer', zh: '文件资源管理器' },
                { en: 'Address Bar', zh: '地址栏' },
              ],
            },
            {
              en: 'Turn on View → Show → File name extensions so types are visible.',
              zh: '打开“查看 → 显示 → 文件扩展名”，让类型可见。',
              keywords: [{ en: 'File Extension', zh: '文件扩展名' }],
            },
          ],
        },
        {
          id: 'ch-a-windows-skills-profile',
          layout: 'text',

          titleEn: 'Know Your User Profile Path',
          titleZh: '认清你的用户配置路径',
          illustration: 'files',
          bodyEn:
            'On Windows, your personal files usually live under C:\\Users\\YourName. That folder is your user profile. Inside it you will see Desktop, Documents, Downloads, and often more. Course projects should live in a predictable place such as C:\\Users\\YourName\\Documents\\projects or C:\\Users\\YourName\\projects—not forever inside Downloads. When Cursor asks you to open a folder, or PowerShell prints a path, matching that string to Explorer’s address bar is how you stay oriented. Memorize the shape C:\\Users\\… even if the exact name differs on lab PCs.',
          bodyZh:
            '在 Windows 上，个人文件通常位于 C:\\Users\\你的用户名。这个文件夹就是你的用户配置目录。里面常见桌面、文档、下载等。课程项目应放在可预期位置，例如 C:\\Users\\你的用户名\\Documents\\projects 或 C:\\Users\\你的用户名\\projects——不要永远留在“下载”里。当 Cursor 要求打开文件夹，或 PowerShell 打印路径时，把字符串与资源管理器地址栏对照，你就不会迷路。即使机房电脑用户名不同，也要记住 C:\\Users\\… 这种形状。',
          bullets: [
            {
              en: 'Profile root looks like C:\\Users\\YourName.',
              zh: '配置根目录形如 C:\\Users\\你的用户名。',
              keywords: [{ en: 'User Profile', zh: '用户配置文件夹' }],
            },
            {
              en: 'Prefer Documents\\projects or a projects folder under your profile.',
              zh: '优先使用文档\\projects 或配置目录下的 projects。',
            },
            {
              en: 'Downloads is temporary staging, not a permanent project home.',
              zh: '“下载”是临时中转，不是项目的永久家。',
              keywords: [{ en: 'Downloads', zh: '下载' }],
            },
          ],
        },
        {
          id: 'ch-a-windows-skills-shortcuts',
          layout: 'text',

          titleEn: 'Win Shortcuts Worth Muscle Memory',
          titleZh: '值得练成肌肉记忆的 Win 快捷键',
          illustration: 'files',
          bodyEn:
            'A short set of shortcuts saves more time than memorizing rare menu paths. Win + E opens Explorer, Win + I opens Settings, and Win + S opens search when Start feels crowded. Win + L locks the PC when you leave a lab seat. Alt + Tab cycles open apps; Win + D shows the desktop. Practice until your hands find these without looking at a cheat sheet. Fluency matters when a lab asks you to switch between Explorer, Settings, and the editor in under a minute.',
          bodyZh:
            '少量快捷键比背冷门菜单路径更省时间。Win + E 打开资源管理器，Win + I 打开设置，开始菜单很挤时用 Win + S 搜索。离开机位时用 Win + L 锁定。Alt + Tab 切换已打开应用；Win + D 显示桌面。练到不用看小抄双手就能找到。当实验要求在一分钟内切换资源管理器、设置与编辑器时，这种熟练很重要。',
          bullets: [
            {
              en: 'Win + E Explorer · Win + I Settings · Win + S Search',
              zh: 'Win + E 资源管理器 · Win + I 设置 · Win + S 搜索',
            },
            {
              en: 'Win + L Lock · Alt + Tab switch apps · Win + D show desktop',
              zh: 'Win + L 锁定 · Alt + Tab 切换应用 · Win + D 显示桌面',
            },
          ],
          noteEn: 'Add more shortcuts later; these six cover most class days.',
          noteZh: '以后再加快捷键；这六个已覆盖多数上课日。',
        },
        {
          id: 'ch-a-windows-skills-clipboard',
          layout: 'text',

          titleEn: 'Clipboard: Copy Paths and Errors Cleanly',
          titleZh: '剪贴板：干净地复制路径与报错',
          illustration: 'interface',
          bodyEn:
            'Ctrl + C copies and Ctrl + V pastes. In File Explorer you can click the address bar, copy the path, and paste it into Cursor’s Open Folder dialog or into a chat question. When an error appears in a terminal, select the text and copy it instead of retyping—one wrong character creates a fake bug. Windows also offers clipboard history (Win + V) if you enable it in Settings; that helps when you copy a path, then an error, then need the path again. Never paste passwords into shared lab chats. Treat the clipboard as a temporary workbench, not long-term storage.',
          bodyZh:
            'Ctrl + C 复制，Ctrl + V 粘贴。在文件资源管理器中可单击地址栏、复制路径，再粘贴到 Cursor 的“打开文件夹”对话框或聊天提问里。终端出现报错时，选中文字复制，不要手打——错一个字符就会制造假 bug。若在设置中启用剪贴板历史，可用 Win + V；当你先复制路径再复制报错、又需要路径时很有用。不要把密码粘贴到共享的实验群聊。把剪贴板当作临时工作台，而不是长期仓库。',
          keywords: [
            { en: 'Clipboard', zh: '剪贴板' },
            { en: 'Copy', zh: '复制' },
            { en: 'Paste', zh: '粘贴' },
          ],
          bullets: [
            {
              en: 'Copy Explorer paths into Open Folder and into questions you ask.',
              zh: '把资源管理器路径复制到“打开文件夹”和你提出的问题里。',
            },
            {
              en: 'Optional: enable Clipboard history, then use Win + V.',
              zh: '可选：启用剪贴板历史，然后使用 Win + V。',
            },
          ],
        },
        {
          id: 'ch-a-windows-skills-desktops',
          layout: 'text',

          titleEn: 'Multiple Desktops, Lightly',
          titleZh: '虚拟桌面：轻度了解即可',
          illustration: 'environment',
          bodyEn:
            'Windows lets you create virtual desktops with Win + Ctrl + D and switch with Win + Ctrl + Left or Right. Task View (Win + Tab) shows open windows and desktops. For beginners, one desktop is enough. A second desktop can separate “class tools” from “browser research” if your screen feels chaotic, but do not hide work on a forgotten desktop and then claim files are missing. If something “disappeared,” check Task View before reinstalling software. Treat multiple desktops as optional organization, not as required course skill.',
          bodyZh:
            'Windows 可用 Win + Ctrl + D 创建虚拟桌面，并用 Win + Ctrl + 左/右 切换。任务视图（Win + Tab）显示打开的窗口与桌面。对初学者来说，一个桌面就够。若屏幕很乱，第二个桌面可以把“课堂工具”和“浏览器查阅”分开，但不要把工作藏在忘记的桌面上，再声称文件丢了。如果有东西“消失了”，先查任务视图再重装软件。把多桌面当作可选整理方式，而不是本课程的必备技能。',
          keywords: [
            { en: 'Virtual Desktop', zh: '虚拟桌面' },
            { en: 'Task View', zh: '任务视图' },
          ],
        },
        {
          id: 'ch-a-windows-skills-downloads',
          layout: 'text',

          titleEn: 'Safe Downloads and Where Files Land',
          titleZh: '安全下载与文件落地位置',
          illustration: 'security',
          bodyEn:
            'Browsers usually save installers into your Downloads folder under the user profile. Prefer official product sites and links your instructors publish. Avoid random “free download” mirrors that bundle extra toolbars. After a download finishes, open Explorer, go to Downloads, and confirm the file name and extension—CursorSetup.exe is not the same as a random .html page that only looks like a button. Move keepers into Documents or projects; delete or archive installers you no longer need so Downloads stays searchable. If SmartScreen warns about an unfamiliar publisher, pause and verify the source before clicking Run anyway.',
          bodyZh:
            '浏览器通常把安装包保存到用户配置下的“下载”文件夹。优先使用官方产品站点与老师公布的链接。避免随机“免费下载”镜像，它们常夹带多余工具条。下载完成后，打开资源管理器进入“下载”，确认文件名与扩展名——CursorSetup.exe 与只是看起来像按钮的 .html 页面不是一回事。需要保留的文件移到文档或 projects；不再需要的安装包删除或归档，让“下载”保持可搜索。若 SmartScreen 警告陌生发布者，先核实来源，再决定是否仍要点运行。',
          bullets: [
            {
              en: 'Use official sites and teacher-published links only.',
              zh: '只使用官方站点与老师公布的链接。',
              keywords: [{ en: 'Official Website', zh: '官方网站' }],
            },
            {
              en: 'Check name and extension in Downloads before running.',
              zh: '运行前在“下载”中检查名称与扩展名。',
              keywords: [{ en: 'Downloads', zh: '下载' }],
            },
            {
              en: 'Move project files out of Downloads into a stable folder.',
              zh: '把项目文件从“下载”移到稳定文件夹。',
            },
          ],
        },
        {
          id: 'ch-a-windows-skills-extensions',
          layout: 'callout',
          titleEn: 'See File Extensions on Purpose',
          titleZh: '有意显示文件扩展名',
          bodyEn:
            'Hidden extensions make dangerous tricks easier: a file named notes.txt.exe can look like a harmless text file. In File Explorer use View → Show → File name extensions so you always see the real type. You will also distinguish hello.py from hello.txt when labs mix notes and code. This is a one-time habit with lasting payoff.',
          bodyZh:
            '隐藏扩展名会让危险把戏更容易得逞：名为 notes.txt.exe 的文件可能看起来像无害文本。在文件资源管理器中使用“查看 → 显示 → 文件扩展名”，始终看到真实类型。实验同时有笔记与代码时，你也能分清 hello.py 与 hello.txt。这是一次性习惯，收益却很长久。',
          bullets: [
            {
              en: 'Enable file name extensions in Explorer’s View menu.',
              zh: '在资源管理器的“查看”菜单中启用文件扩展名。',
              keywords: [{ en: 'File Extension', zh: '文件扩展名' }],
            },
            {
              en: 'Distrust unexpected .exe, .bat, or .scr files from chat or email.',
              zh: '警惕聊天或邮件里意外出现的 .exe、.bat 或 .scr 文件。',
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
          id: 'ch-a-windows-skills-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'terminal',
          bodyEn:
            'Complete this circuit once on your lab PC or personal Windows machine. It ties Start, Settings, Explorer paths, lock, and a safe identity check together.',
          bodyZh:
            '在机房或个人 Windows 电脑上完整做一遍。它把开始、设置、资源管理器路径、锁定与一次安全的身份检查串起来。',
          bullets: [
            {
              en: 'Press Win, type Settings, open it; search About and read your device name.',
              zh: '按 Win，输入 Settings 打开设置；搜索 About，读出设备名。',
            },
            {
              en: 'Press Win + E, enable file name extensions, click the address bar, copy your path.',
              zh: '按 Win + E，启用文件扩展名，单击地址栏并复制当前路径。',
            },
            {
              en: 'Navigate to C:\\Users\\YourName and note Desktop, Documents, Downloads.',
              zh: '进入 C:\\Users\\你的用户名，观察桌面、文档、下载。',
            },
            {
              en: 'Create C:\\Users\\YourName\\projects if missing; pin File Explorer to the taskbar.',
              zh: '若无 projects 则创建 C:\\Users\\你的用户名\\projects；将资源管理器固定到任务栏。',
            },
            {
              en: 'Press Win + L to lock, sign back in, then open Start and launch File Explorer by typing.',
              zh: '按 Win + L 锁定并重新登录，再用开始菜单输入名称打开资源管理器。',
            },
          ],
          noteEn: 'Optional: in PowerShell run whoami and compare it with your Users folder name.',
          noteZh: '可选：在 PowerShell 运行 whoami，并与 Users 下的文件夹名对照。',
        },
        {
          id: 'ch-a-windows-skills-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'These habits create hidden costs later when paths, installs, and terminals enter the story.',
          bodyZh: '当路径、安装与终端进入主线后，这些习惯会造成隐性成本。',
          bullets: [
            {
              en: 'Leaving every project and installer inside Downloads forever.',
              zh: '把所有项目与安装包永远留在“下载”里。',
            },
            {
              en: 'Ignoring the Explorer address bar and guessing which folder is open.',
              zh: '忽略资源管理器地址栏，靠猜判断打开了哪个文件夹。',
            },
            {
              en: 'Hiding file extensions and opening the wrong file type.',
              zh: '隐藏扩展名，结果打开了错误类型的文件。',
            },
            {
              en: 'Downloading coding tools from unofficial mirror sites.',
              zh: '从不官方镜像站下载编程工具。',
            },
            {
              en: 'Using the Desktop as the only “project folder” for an entire term.',
              zh: '整个学期只用桌面当“项目文件夹”。',
            },
          ],
        },
        {
          id: 'ch-a-windows-skills-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Answer without looking at the shortcut list first, then verify on your PC.',
          bodyZh: '先不看快捷键列表作答，再到电脑上核实。',
          bullets: [
            {
              en: 'Which shortcut opens Settings? Which opens File Explorer?',
              zh: '哪个快捷键打开设置？哪个打开文件资源管理器？',
            },
            {
              en: 'What does the File Explorer address bar show you?',
              zh: '文件资源管理器地址栏向你显示什么？',
            },
            {
              en: 'Write the shape of a typical user profile path on Windows.',
              zh: '写出 Windows 上典型用户配置路径的形状。',
            },
            {
              en: 'Why should course projects not live forever in Downloads?',
              zh: '为什么课程项目不应永远放在“下载”里？',
            },
          ],
          noteEn:
            'Answers: Win + I and Win + E; the current folder path; C:\\Users\\YourName; Downloads is temporary and gets cluttered, so projects become hard to find and easy to delete by mistake.',
          noteZh:
            '参考答案：Win + I 与 Win + E；当前文件夹路径；C:\\Users\\你的用户名；“下载”是临时区且易堆积，项目难找也易误删。',
        },
        {
          id: 'ch-a-windows-skills-bridge',
          layout: 'text',

          titleEn: 'Bridge to the Editor',
          titleZh: '衔接到编辑器',
          illustration: 'cursor',
          bodyEn:
            'You now have a map of Start, Settings, Explorer, and your user profile. The next chapters install Cursor and then tour its workspace. Those steps will ask you to open a folder under your profile, paste paths, and keep files out of Downloads. If today’s circuit felt slow, repeat the Explorer address-bar and Start-search moves until they feel boring—boring means ready.',
          bodyZh:
            '你已经有了开始、设置、资源管理器与用户配置的地图。接下来的章节将安装 Cursor，并导览其工作区。那些步骤会要求你打开配置目录下的文件夹、粘贴路径，并让文件离开“下载”。如果今天的回路仍觉得慢，就重复地址栏与开始搜索，直到觉得无聊——无聊就意味着准备好了。',
          keywords: [
            { en: 'Cursor', zh: 'Cursor 编辑器' },
            { en: 'Workspace', zh: '工作区' },
          ],
        },
      ],
    },
  ],
}
