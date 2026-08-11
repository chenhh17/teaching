import type { Chapter } from '../../types/course'

export const chACursor: Chapter = {
  id: 'install-cursor',
  titleEn: 'Installing Cursor',
  titleZh: '安装 Cursor',
  summaryEn:
    'Understand what Cursor is, download it from the official site, install it on Windows, finish first launch and folder trust, and see how it differs from Notepad.',
  summaryZh:
    '理解 Cursor 是什么，从官方网站下载，在 Windows 上安装，完成首次启动与文件夹信任，并看清它与记事本的区别。',
  sections: [
    {
      id: 'what-is-cursor',
      titleEn: 'What Is Cursor',
      titleZh: '什么是 Cursor',
      slides: [
        {
          id: 'ch-a-cursor-title',
          layout: 'title',

          titleEn: 'Part A · Installing Cursor',
          titleZh: '篇章 A · 安装 Cursor',
          subtitleEn: 'Your Windows editor for writing, reading, and running code',
          subtitleZh: '在 Windows 上编写、阅读与运行代码的编辑器',
          illustration: 'title',
          keywords: [
            { en: 'Cursor', zh: 'Cursor 编辑器' },
            { en: 'Windows', zh: 'Windows 系统' },
            { en: 'Installer', zh: '安装程序' },
          ],
        },
        {
          id: 'ch-a-cursor-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'After this chapter you should know what Cursor is for, install it from a trusted Windows download, complete first launch, and open one project folder with eyes open about trust prompts. You should also explain why a coding editor is not the same tool as Notepad.',
          bodyZh:
            '学完本章，你应知道 Cursor 的用途，从可信的 Windows 下载完成安装，完成首次启动，并在理解信任提示的前提下打开一个项目文件夹。你还应能说明为什么代码编辑器与记事本不是同一类工具。',
          bullets: [
            {
              en: 'Describe Cursor as a folder-based coding editor with a terminal and optional AI help.',
              zh: '把 Cursor 描述为基于文件夹的代码编辑器，带终端与可选 AI 辅助。',
              keywords: [{ en: 'Cursor', zh: 'Cursor' }],
            },
            {
              en: 'Download only from the official site and install the Windows .exe.',
              zh: '只从官方网站下载，并安装 Windows 版 .exe。',
            },
            {
              en: 'Finish first launch, sign-in if needed, and trust a local workspace folder.',
              zh: '完成首次启动，按需登录，并信任本地工作区文件夹。',
            },
            {
              en: 'Contrast Cursor with Notepad for multi-file projects.',
              zh: '对比 Cursor 与记事本在多文件项目上的差异。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-definition',
          layout: 'text',

          titleEn: 'Cursor Is a Code Editor',
          titleZh: 'Cursor 是一款代码编辑器',
          illustration: 'cursor',
          bodyEn:
            'Cursor is a modern code editor built on ideas familiar from VS Code. You open a folder as a project, edit many files with tabs and syntax coloring, and run PowerShell in a terminal panel in the same window. Optional AI features can explain errors or suggest edits, but you remain responsible for reading output and deciding what to keep. Think of Cursor as a workshop: files on the left, text in the center, commands at the bottom, and help on the side—not as a magic box that invents correct programs without you.',
          bodyZh:
            'Cursor 是一款现代代码编辑器，思路与 VS Code 相近。你把文件夹当作项目打开，用标签页与语法着色编辑多个文件，并在同一窗口的终端面板运行 PowerShell。可选的 AI 功能能解释报错或建议修改，但你仍要阅读输出并决定保留什么。把 Cursor 想成车间：左侧文件、中间文本、底部命令、侧边帮助——而不是不用你参与就能变出正确程序的魔盒。',
          bullets: [
            {
              en: 'Based on VS Code-style editing, with optional AI assistance.',
              zh: '基于 VS Code 风格编辑，并带有可选 AI 辅助。',
              keywords: [
                { en: 'VS Code', zh: 'VS Code' },
                { en: 'AI', zh: '人工智能' },
              ],
            },
            {
              en: 'One window for folders, editors, and PowerShell.',
              zh: '在同一窗口中处理文件夹、编辑器与 PowerShell。',
              keywords: [{ en: 'PowerShell', zh: 'PowerShell' }],
            },
          ],
        },
        {
          id: 'ch-a-cursor-vs-notepad',
          layout: 'text',

          titleEn: 'How Cursor Differs from Notepad',
          titleZh: 'Cursor 与记事本有何不同',
          illustration: 'code',
          bodyEn:
            'Notepad can open one plain text file at a time. It is fine for a quick note, but it does not show a project tree, highlight Python syntax, integrate a terminal, or help you jump between many related files. Cursor treats a folder as the unit of work: the sidebar lists every file under that root, unsaved tabs warn you, and the terminal starts in the project directory. Course labs will ask you to create, save, and run files that belong together. Using only Notepad would force you to manage paths and tools manually with far more friction. You may still open a tiny .txt in Notepad someday; you will not build course projects there.',
          bodyZh:
            '记事本一次主要打开一个纯文本文件。写一句快记还可以，但它不显示项目树、不给 Python 语法着色、不集成终端，也不方便在多个相关文件间跳转。Cursor 把文件夹当作工作单位：侧边栏列出该根目录下的每个文件，未保存的标签会提醒你，终端也从项目目录启动。课程实验会要求你创建、保存并运行彼此相关的文件。若只用记事本，你得手动管理路径与工具，摩擦大得多。你以后仍可能用记事本打开小小的 .txt；但你不会在那里做课程项目。',
          bullets: [
            {
              en: 'Notepad: single-file plain text with almost no project context.',
              zh: '记事本：单文件纯文本，几乎没有项目上下文。',
              keywords: [{ en: 'Notepad', zh: '记事本' }],
            },
            {
              en: 'Cursor: folder workspace, tabs, terminal, and coding aids.',
              zh: 'Cursor：文件夹工作区、标签页、终端与编程辅助。',
              keywords: [{ en: 'Workspace', zh: '工作区' }],
            },
          ],
        },
        {
          id: 'ch-a-cursor-role',
          layout: 'text',

          titleEn: 'Where Cursor Fits in This Course',
          titleZh: 'Cursor 在本课程中的位置',
          illustration: 'cursor',
          bodyEn:
            'In Part A you learn to think, use Windows, then install the editor. Later parts add PowerShell, Python, Git, and the browser. Cursor is the place those pieces meet on screen: you edit .py files, save them under C:\\Users\\…\\projects, and run commands without leaving the window. AI chat is a tutor when you are stuck, not a substitute for running the program yourself. If Cursor is missing or installed from a shady copy, every later chapter becomes harder for the wrong reason. Install carefully once, then reuse the same editor all term.',
          bodyZh:
            '在篇章 A，你先学习思维方式与 Windows，再安装编辑器。后续篇章会加入 PowerShell、Python、Git 与浏览器。Cursor 是这些部件在屏幕上汇合的地方：你编辑 .py 文件，保存到 C:\\Users\\…\\projects，并无需离开窗口即可运行命令。AI 聊天是卡住时的辅导，不能代替你亲自运行程序。如果 Cursor 缺失或从不靠谱拷贝安装，后面每一章都会因错误原因变难。认真安装一次，然后整学期复用同一编辑器。',
          keywords: [
            { en: 'Project Folder', zh: '项目文件夹' },
            { en: 'Terminal', zh: '终端' },
          ],
        },
      ],
    },
    {
      id: 'download-and-install',
      titleEn: 'Download and Install',
      titleZh: '下载与安装',
      slides: [
        {
          id: 'ch-a-cursor-download',
          layout: 'text',

          titleEn: 'Official Site Mindset',
          titleZh: '官方网站心态',
          illustration: 'security',
          bodyEn:
            'Always download Cursor from the official Cursor website or a link your instructors publish that points there. Search results and “free software” portals often wrap installers with unwanted bundles. Before you click Download, check that the browser address bar shows the real site you expect, not a look-alike domain. Prefer the Windows installer offered on that page. Treat installer downloads like medicine labels: wrong source, wrong outcome. If a classmate sends a renamed .exe over chat, do not run it—go back to the official page.',
          bodyZh:
            '务必从 Cursor 官方网站，或老师公布且指向该站的链接下载。搜索结果与“免费软件”门户常给安装包加料。点击下载前，确认浏览器地址栏是你期望的真实站点，而不是仿冒域名。优先使用该页提供的 Windows 安装包。把安装包下载当成看药品标签：来源不对，结果就不对。若同学在聊天里发来改名的 .exe，不要运行——回到官方页面重新下载。',
          bullets: [
            {
              en: 'Official website only; verify the browser address before downloading.',
              zh: '只用官方网站；下载前核对浏览器地址。',
              keywords: [{ en: 'Official Website', zh: '官方网站' }],
            },
            {
              en: 'Ignore random mirror buttons and chat-shared mystery .exe files.',
              zh: '忽略随机镜像按钮与聊天里来路不明的 .exe。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-installer-file',
          layout: 'text',

          titleEn: 'The Windows Installer File',
          titleZh: 'Windows 安装文件',
          illustration: 'files',
          bodyEn:
            'On Windows you typically receive an .exe installer. It usually lands in C:\\Users\\YourName\\Downloads. Open File Explorer, enable file name extensions if needed, and confirm you see an .exe—not a truncated download or an .html page. Note the size and name so you can find it again. You do not need to keep the installer forever after a successful install, but keep it until Cursor opens once. If the download is interrupted, delete the partial file and download again rather than running a broken package.',
          bodyZh:
            '在 Windows 上你通常会得到一个 .exe 安装程序。它一般落在 C:\\Users\\你的用户名\\Downloads。打开文件资源管理器，必要时显示扩展名，确认看到的是 .exe——而不是截断的下载或 .html 页面。记下大小与名称以便再次找到。成功安装后不必永远保留安装包，但要留到 Cursor 成功打开一次。若下载中断，删除不完整文件并重新下载，不要运行损坏的安装包。',
          keywords: [
            { en: 'Installer (.exe)', zh: '安装程序（.exe）' },
            { en: 'Downloads', zh: '下载' },
          ],
          bullets: [
            {
              en: 'Choose the Windows build for this course.',
              zh: '本课程选择 Windows 版本。',
              keywords: [{ en: 'Windows', zh: 'Windows' }],
            },
            {
              en: 'Find the .exe under your user Downloads folder before installing.',
              zh: '安装前在用户“下载”文件夹中找到该 .exe。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-install',
          layout: 'steps',
          titleEn: 'Install on Windows',
          titleZh: '在 Windows 上安装',
          illustration: 'cursor',
          bodyEn:
            'Run the installer with ordinary attention to Windows security prompts. You are allowing a real application to set up files on your PC—not clicking through blindly on every website.',
          bodyZh:
            '带着对 Windows 安全提示的正常注意力运行安装程序。你是在允许一个真实应用在电脑上部署文件——而不是对每个网站都盲目一路下一步。',
          bullets: [
            {
              en: 'Double-click the Cursor .exe in Downloads or from the browser’s download list.',
              zh: '在“下载”或浏览器下载列表中双击 Cursor 的 .exe。',
            },
            {
              en: 'If User Account Control asks, confirm the publisher looks right, then allow.',
              zh: '若出现用户账户控制，确认发布者看起来正确后允许。',
              keywords: [{ en: 'User Account Control (UAC)', zh: '用户账户控制' }],
            },
            {
              en: 'Follow the setup wizard defaults unless your teacher gives other instructions.',
              zh: '除非老师另有说明，否则按安装向导默认选项即可。',
              keywords: [{ en: 'Setup Wizard', zh: '安装向导' }],
            },
            {
              en: 'When setup finishes, locate Cursor in the Start menu by typing Cursor.',
              zh: '安装结束后，在开始菜单输入 Cursor 找到它。',
              keywords: [{ en: 'Start Menu', zh: '开始菜单' }],
            },
          ],
          noteEn: 'Pin Cursor to the taskbar after the first successful launch.',
          noteZh: '首次成功启动后，将 Cursor 固定到任务栏。',
        },
        {
          id: 'ch-a-cursor-first-launch',
          layout: 'text',

          titleEn: 'First Launch on Windows',
          titleZh: '在 Windows 上首次启动',
          illustration: 'cursor',
          bodyEn:
            'Open Cursor from Start. The first launch may show welcome screens, theme choices, or account prompts. Read each screen; you are configuring a daily tool, not skipping ads. If Windows Firewall or SmartScreen appears for a familiar official build you just downloaded, pause and match the app name to Cursor before continuing. After the window appears, resist opening a random single file from Desktop. Your first useful action will be opening a folder you control under your user profile. If the app fails to start, note the exact error text before trying a second download.',
          bodyZh:
            '从开始菜单打开 Cursor。首次启动可能出现欢迎页、主题选择或账户提示。逐屏阅读；你是在配置日常工具，不是在跳过广告。若对刚下载的官方构建出现 Windows 防火墙或 SmartScreen，先停顿，确认应用名是 Cursor 再继续。窗口出现后，不要急着打开桌面上的随机单文件。你的第一个有用动作应是打开用户配置下你能掌控的文件夹。若应用无法启动，先记下确切报错文字，再考虑第二次下载。',
          keywords: [
            { en: 'First Launch', zh: '首次启动' },
            { en: 'SmartScreen', zh: 'SmartScreen' },
          ],
        },
        {
          id: 'ch-a-cursor-account',
          layout: 'text',

          titleEn: 'Sign In When Asked',
          titleZh: '需要时完成登录',
          illustration: 'cursor',
          bodyEn:
            'Cursor may ask you to create an account or sign in so AI features and preferences can sync. Use a real email you can check on this Windows PC during the lab period. Do not stall for thirty minutes on an inbox you cannot open from the classroom network. After sign-in you can still open local folders and edit files; simple editing can work even when you are briefly offline later. If your school provides a shared lab account policy, follow that policy instead of inventing a throwaway habit that locks you out next week.',
          bodyZh:
            'Cursor 可能要求创建账户或登录，以便同步 AI 功能与偏好。使用你在本节实验期间能在这台 Windows 电脑上查收的真实邮箱。不要因为教室网络打不开的邮箱而卡住半小时。登录后仍可打开本地文件夹并编辑文件；之后短暂离线时，简单编辑往往仍可用。若学校对机房账户有规定，遵循规定，不要养成下周把自己锁在门外的一次性习惯。',
          bullets: [
            {
              en: 'Use an email you can access during class.',
              zh: '使用上课期间能访问的邮箱。',
              keywords: [{ en: 'Account', zh: '账户' }],
            },
            {
              en: 'Local folder editing remains the core skill after sign-in.',
              zh: '登录后，本地文件夹编辑仍是核心技能。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-trust',
          layout: 'text',

          titleEn: 'Trust and the Workspace Folder',
          titleZh: '信任提示与工作区文件夹',
          illustration: 'files',
          bodyEn:
            'When you use File → Open Folder and choose a path such as C:\\Users\\YourName\\projects\\demo, Cursor may ask whether you trust the authors of the files in that folder. For folders you created yourself for class, trusting the workspace is normal and unlocks full editing features. Do not casually trust a folder you unzipped from an unknown USB stick or a random internet archive. Trust is about code execution and workspace features, not about politeness. If you opened the wrong directory, close it and open the correct projects path instead of clicking Trust out of impatience.',
          bodyZh:
            '当你使用 File → Open Folder 并选择例如 C:\\Users\\你的用户名\\projects\\demo 时，Cursor 可能询问是否信任该文件夹中文件的作者。对你自己为课程创建的文件夹，信任工作区是正常的，并会解锁完整编辑功能。不要随手信任从不明 U 盘解压或随机网络压缩包里的文件夹。信任关系到代码执行与工作区功能，不是礼貌问题。若打开了错误目录，关掉它并打开正确的 projects 路径，不要因为不耐烦就点信任。',
          bullets: [
            {
              en: 'Open a folder you own under your user profile for class work.',
              zh: '为课程作业打开用户配置下你自己拥有的文件夹。',
              keywords: [
                { en: 'Open Folder', zh: '打开文件夹' },
                { en: 'Trust', zh: '信任' },
              ],
            },
            {
              en: 'Decline trust for unknown extracted archives until you know the source.',
              zh: '来源不明的解压目录先不要信任，直到你清楚来源。',
            },
          ],
        },
      ],
    },
    {
      id: 'first-use-check',
      titleEn: 'First Use and Check',
      titleZh: '初次使用与检查',
      slides: [
        {
          id: 'ch-a-cursor-first-use',
          layout: 'text',

          titleEn: 'First Useful Actions After Install',
          titleZh: '安装后的第一批有用动作',
          illustration: 'files',
          bodyEn:
            'Prefer opening a folder, not a lone file. Create C:\\Users\\YourName\\projects\\cursor-first if needed, then File → Open Folder into that path. Create a tiny file such as hello.txt, type one line, and save with Ctrl + S. Open the terminal with Ctrl + ` and choose PowerShell so you see the same project directory in command form. Optionally ask the AI one concrete question about that file. These moves prove that install, trust, editing, and the terminal all work before the next chapter’s deeper tour.',
          bodyZh:
            '尽量打开文件夹，而不是单个零散文件。必要时创建 C:\\Users\\你的用户名\\projects\\cursor-first，再用 File → Open Folder 打开该路径。新建 hello.txt 之类的小文件，写一行并用 Ctrl + S 保存。用 Ctrl + ` 打开终端并选择 PowerShell，以便用命令形式看到同一项目目录。可选：就该文件向 AI 提一个具体问题。这些动作证明安装、信任、编辑与终端都可用，再进入下一章更深的导览。',
          bullets: [
            {
              en: 'File → Open Folder on a path under C:\\Users\\…\\projects.',
              zh: '对 C:\\Users\\…\\projects 下的路径使用 File → Open Folder。',
              keywords: [{ en: 'Open Folder', zh: '打开文件夹' }],
            },
            {
              en: 'Create and save a small file; open PowerShell with Ctrl + `.',
              zh: '创建并保存小文件；用 Ctrl + ` 打开 PowerShell。',
              keywords: [{ en: 'PowerShell', zh: 'PowerShell' }],
            },
          ],
        },
        {
          id: 'ch-a-cursor-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'terminal',
          bodyEn:
            'Confirm install success with a short checklist you can repeat on any lab PC.',
          bodyZh: '用一份可在任意机房电脑上重复的短清单确认安装成功。',
          bullets: [
            {
              en: 'Open Cursor from the Start menu and pin it to the taskbar.',
              zh: '从开始菜单打开 Cursor，并固定到任务栏。',
            },
            {
              en: 'Open or create C:\\Users\\YourName\\projects\\cursor-first and trust it if prompted.',
              zh: '打开或创建 C:\\Users\\你的用户名\\projects\\cursor-first，若提示则信任。',
            },
            {
              en: 'Create hello.txt, save it, then press Ctrl + ` and confirm PowerShell.',
              zh: '创建 hello.txt 并保存，再按 Ctrl + `，确认是 PowerShell。',
              keywords: [{ en: 'Terminal', zh: '终端' }],
            },
            {
              en: 'In PowerShell run pwd and check that the path matches your folder.',
              zh: '在 PowerShell 运行 pwd，检查路径是否与文件夹一致。',
              keywords: [{ en: 'pwd', zh: '查看当前目录' }],
            },
          ],
          noteEn: 'Next chapter: learn the Cursor workspace panels in detail.',
          noteZh: '下一章：详细认识 Cursor 工作区各个面板。',
        },
        {
          id: 'ch-a-cursor-errors',
          layout: 'callout',
          titleEn: 'Common Errors',
          titleZh: '常见错误',
          bodyEn:
            'Most install problems come from untrusted downloads, dismissing needed prompts, or opening the wrong kind of target after install.',
          bodyZh: '多数安装问题来自不信任的下载、关掉必要提示，或安装后打开了错误类型的目标。',
          bullets: [
            {
              en: 'Downloading from a random third-party site or running a chat-shared .exe.',
              zh: '从不靠谱第三方下载，或运行聊天里发来的 .exe。',
            },
            {
              en: 'Blocking the official installer at UAC every time by habit.',
              zh: '习惯性地在 UAC 处一直拒绝官方安装程序。',
            },
            {
              en: 'Opening a single Desktop file instead of a project folder.',
              zh: '只打开桌面上的单个文件，而不是项目文件夹。',
            },
            {
              en: 'Trusting unknown extracted folders without checking the source.',
              zh: '未核来源就信任不明的解压文件夹。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Answer from memory, then verify on your PC if needed.',
          bodyZh: '凭记忆作答，必要时再在电脑上核实。',
          bullets: [
            {
              en: 'Why is an official-site download safer than a random mirror?',
              zh: '为什么从官方网站下载比随机镜像更安全？',
            },
            {
              en: 'What file type do you typically run to install Cursor on Windows?',
              zh: '在 Windows 上安装 Cursor 时，通常运行哪种文件？',
            },
            {
              en: 'What is the difference between opening a file and opening a folder?',
              zh: '打开文件与打开文件夹有何不同？',
            },
            {
              en: 'Name one reason Cursor is a better class tool than Notepad.',
              zh: '说出一个 Cursor 比记事本更适合用作课堂工具的原因。',
            },
          ],
          noteEn:
            'Answers: official builds are less likely to bundle malware; .exe; a folder becomes the workspace root for many files; e.g. project sidebar, terminal, or multi-file editing.',
          noteZh:
            '参考答案：官方构建更不易夹带恶意软件；.exe；文件夹成为多文件工作区根目录；例如项目侧边栏、终端或多文件编辑。',
        },
        {
          id: 'ch-a-cursor-bridge',
          layout: 'text',

          titleEn: 'Bridge to the Workspace Tour',
          titleZh: '衔接到工作区导览',
          illustration: 'cursor',
          bodyEn:
            'Installation is complete when Cursor opens, a folder under your profile can be trusted and opened, and PowerShell inside Cursor prints a path you recognize. The next chapter names the panels—sidebar, editor, terminal, command palette—and practices saving files on Windows paths. Keep your cursor-first folder; you will reuse the same layout skills all term.',
          bodyZh:
            '当 Cursor 能打开、配置目录下的文件夹能被信任并打开、且 Cursor 内的 PowerShell 能打印你认得的路径时，安装就完成了。下一章将点名各个面板——侧边栏、编辑器、终端、命令面板——并练习在 Windows 路径上保存文件。保留你的 cursor-first 文件夹；同样的布局技能整学期都会用到。',
        },
      ],
    },
  ],
}
