import type { Chapter } from '../../types/course'

export const chACursorWorkspace: Chapter = {
  id: 'cursor-workspace-tour',
  titleEn: 'Cursor Workspace Tour',
  titleZh: 'Cursor 工作区导览',
  summaryEn:
    'Tour Cursor on Windows: explorer sidebar, editor, terminal, command palette, opening folders, saving files, and a light look at extensions—with real Windows paths.',
  summaryZh:
    '在 Windows 上导览 Cursor：资源管理器侧边栏、编辑器、终端、命令面板、打开文件夹、保存文件，以及扩展的轻度介绍——并使用真实 Windows 路径。',
  sections: [
    {
      id: 'workspace-map',
      titleEn: 'Workspace Map',
      titleZh: '工作区地图',
      slides: [
        {
          id: 'ch-a-cursor-workspace-title',
          layout: 'title',

          titleEn: 'Part A · Cursor Workspace Tour',
          titleZh: '篇章 A · Cursor 工作区导览',
          subtitleEn: 'Find your way around the editor on Windows',
          subtitleZh: '在 Windows 上熟悉编辑器各个区域',
          illustration: 'title',
          keywords: [
            { en: 'Workspace', zh: '工作区' },
            { en: 'Editor', zh: '编辑器' },
            { en: 'Panel', zh: '面板' },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'By the end you should point to each main area of Cursor, open a project folder on a Windows path, save a file to disk, and use the command palette once. You should also know that the terminal and the chat panel solve different jobs.',
          bodyZh:
            '结束时，你应能指出 Cursor 的每个主要区域，在 Windows 路径上打开项目文件夹，把文件保存到磁盘，并使用一次命令面板。你还应知道终端与聊天面板负责不同工作。',
          bullets: [
            {
              en: 'Open a project folder under C:\\Users\\…\\projects.',
              zh: '打开 C:\\Users\\…\\projects 下的项目文件夹。',
            },
            {
              en: 'Point to sidebar, editor, terminal, and command palette.',
              zh: '指出侧边栏、编辑器、终端与命令面板。',
            },
            {
              en: 'Save a file and confirm it in File Explorer.',
              zh: '保存文件，并在文件资源管理器中确认。',
            },
            {
              en: 'Recognize extensions as optional helpers, not required day-one setup.',
              zh: '把扩展看作可选助手，而不是第一天必装清单。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-layout',
          layout: 'text',

          titleEn: 'One Window, Several Regions',
          titleZh: '一个窗口，多个区域',
          illustration: 'cursor',
          bodyEn:
            'A Cursor window is easier when you name the regions out loud. The left side is usually the explorer sidebar listing files in the opened folder. The large center is the editor where tabs hold open files. The bottom can show the terminal and other panels. The right or a side panel may hold chat or AI help. Across the top sit menus and a command palette entry point. You do not need every icon on day one. If you can find files, type, save, and open the terminal, you can complete early labs. Everything else is speed and comfort layered on that core.',
          bodyZh:
            '当你能大声说出各个区域时，Cursor 窗口会容易得多。左侧通常是资源管理器侧边栏，列出已打开文件夹中的文件。中间大片是编辑器，标签页承载已打开文件。底部可显示终端与其他面板。右侧或侧边可能是聊天或 AI 帮助。顶部是菜单与命令面板入口。第一天不需要认识每个图标。只要能找到文件、输入、保存并打开终端，就能完成早期实验。其余都是叠在这个核心之上的速度与舒适。',
          keywords: [
            { en: 'Sidebar', zh: '侧边栏' },
            { en: 'Editor', zh: '编辑器' },
            { en: 'Terminal', zh: '终端' },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-open-folder',
          layout: 'text',

          titleEn: 'Open a Project Folder',
          titleZh: '打开项目文件夹',
          illustration: 'files',
          bodyEn:
            'A workspace starts with one root folder. Use File → Open Folder and choose a path such as C:\\Users\\YourName\\projects\\workspace-tour. After you confirm trust for your own folder, the left sidebar lists that folder’s files and subfolders. Prefer one project folder over scattering files across the Desktop. If you open the parent Users folder by mistake, the sidebar becomes noisy and you may edit the wrong place. When in doubt, read the folder name in the window title or the explorer root and match it to File Explorer’s address bar.',
          bodyZh:
            '工作区从单一根文件夹开始。使用 File → Open Folder，选择例如 C:\\Users\\你的用户名\\projects\\workspace-tour。对你自己的文件夹确认信任后，左侧边栏会列出其中的文件与子文件夹。尽量用一个项目文件夹，不要把文件散落在桌面。若误打开上级的 Users 文件夹，侧边栏会很嘈杂，你也可能改错位置。有疑问时，阅读窗口标题或资源管理器根名称，并与文件资源管理器地址栏对照。',
          bullets: [
            {
              en: 'File → Open Folder, then pick a narrow project directory.',
              zh: 'File → Open Folder，然后选择范围明确的项目目录。',
              keywords: [{ en: 'Open Folder', zh: '打开文件夹' }],
            },
            {
              en: 'Example path: C:\\Users\\YourName\\projects\\workspace-tour.',
              zh: '示例路径：C:\\Users\\你的用户名\\projects\\workspace-tour。',
            },
          ],
          noteEn: 'One project folder beats random Desktop files.',
          noteZh: '一个项目文件夹胜过散落桌面的文件。',
        },
        {
          id: 'ch-a-cursor-workspace-sidebar',
          layout: 'text',

          titleEn: 'Explorer Sidebar',
          titleZh: '资源管理器侧边栏',
          illustration: 'files',
          bodyEn:
            'The explorer sidebar is your project map inside Cursor. Click a file to open it in the editor. Right‑click empty space or a folder to create new files and folders without leaving the app. Nested folders expand and collapse so large projects stay readable. If a file you just saved does not appear, click the sidebar and look again, or confirm you saved inside the opened root. The sidebar shows the workspace; File Explorer on Windows shows the same files on disk. Learning to trust both views prevents the classic “I wrote it but it vanished” moment.',
          bodyZh:
            '资源管理器侧边栏是 Cursor 内的项目地图。单击文件即可在编辑器中打开。在空白处或文件夹上右键，可在不离开应用的情况下新建文件与文件夹。嵌套文件夹可展开与折叠，让大项目保持可读。若刚保存的文件没有出现，单击侧边栏再看一次，或确认你保存在已打开的根目录内。侧边栏显示工作区；Windows 的文件资源管理器显示磁盘上的同一批文件。学会同时信任这两种视图，可避免经典的“我写过但消失了”瞬间。',
          keywords: [
            { en: 'Explorer', zh: '资源管理器' },
            { en: 'Sidebar', zh: '侧边栏' },
          ],
          bullets: [
            {
              en: 'Create files from the sidebar so they land inside the project root.',
              zh: '从侧边栏创建文件，使它们落在项目根目录内。',
            },
            {
              en: 'If a file is missing, verify the open folder path first.',
              zh: '若文件不见了，先核实打开的文件夹路径。',
            },
          ],
        },
      ],
    },
    {
      id: 'main-panels',
      titleEn: 'Main Panels',
      titleZh: '主要面板',
      slides: [
        {
          id: 'ch-a-cursor-workspace-editor',
          layout: 'text',

          titleEn: 'Editor Area and Tabs',
          titleZh: '编辑器区域与标签页',
          illustration: 'code',
          bodyEn:
            'The large center area is where you type. Tabs at the top switch between open files. A white or filled dot on a tab usually means unsaved changes. Click a tab to focus that file; middle‑click or use the tab’s close control when you are done. Syntax coloring appears for many languages once the file extension is correct—hello.py is not the same as hello.txt. Saving often with Ctrl + S writes your work to the Windows path under the project so a closed window does not erase the morning’s effort.',
          bodyZh:
            '中间大片区域就是你敲代码的地方。顶部标签页用来切换已打开的文件。标签上的白点或实心点通常表示还有未保存的修改。单击标签聚焦该文件；完成后用中键或标签上的关闭控件关掉。只要扩展名正确，许多语言会显示语法着色——hello.py 与 hello.txt 不是一回事。经常用 Ctrl + S 保存，会把工作写到项目下的 Windows 路径，这样关掉窗口也不会丢掉上午的努力。',
          bullets: [
            {
              en: 'Center editor for typing; tabs switch open files.',
              zh: '中间编辑器用于输入；标签页切换已打开文件。',
              keywords: [
                { en: 'Editor', zh: '编辑器' },
                { en: 'Tab', zh: '标签页' },
              ],
            },
            {
              en: 'A dot on a tab often means unsaved changes—press Ctrl + S.',
              zh: '标签上的点通常表示未保存——按 Ctrl + S。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-terminal',
          layout: 'text',

          titleEn: 'Terminal Panel',
          titleZh: '终端面板',
          illustration: 'terminal',
          bodyEn:
            'The terminal runs commands in a folder context. Open it with Ctrl + ` and choose PowerShell on Windows. New terminals usually start in the project folder you opened, which is why Open Folder mattered in the previous chapter. Run dir to list files, or pwd to print the current path, and compare with Explorer. If a command cannot find a file, check the terminal directory before blaming the code. Chat can explain an error, but only the terminal proves what the machine actually ran.',
          bodyZh:
            '终端在某个文件夹上下文中运行命令。用 Ctrl + ` 打开，并在 Windows 上选择 PowerShell。新终端通常从你打开的项目文件夹开始，这正是上一章强调 Open Folder 的原因。运行 dir 列出文件，或运行 pwd 打印当前路径，并与资源管理器对照。如果命令找不到文件，先检查终端目录，再怀疑代码。聊天可以解释报错，但只有终端能证明机器实际运行了什么。',
          bullets: [
            {
              en: 'Open with Ctrl + ` and select PowerShell.',
              zh: '用 Ctrl + ` 打开并选择 PowerShell。',
              keywords: [{ en: 'PowerShell', zh: 'PowerShell' }],
            },
            {
              en: 'Use pwd or dir when you need to confirm location or contents.',
              zh: '需要确认位置或内容时使用 pwd 或 dir。',
              keywords: [
                { en: 'pwd', zh: '查看当前目录' },
                { en: 'dir', zh: '列出文件' },
              ],
            },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-palette',
          layout: 'text',

          titleEn: 'Command Palette',
          titleZh: '命令面板',
          illustration: 'interface',
          bodyEn:
            'The command palette is a searchable list of editor actions. Press Ctrl + Shift + P to open it, then type words such as theme, terminal, or open folder. You do not need to memorize every menu path. The palette is especially helpful when a toolbar icon is unfamiliar or when menus differ slightly after an update. Run one harmless command now—such as changing a color theme or toggling the terminal—so your hands learn the gesture. Later chapters will assume you can reach features by searching rather than by hunting icons.',
          bodyZh:
            '命令面板是可搜索的编辑器动作列表。按 Ctrl + Shift + P 打开，然后输入 theme、terminal 或 open folder 等词。你不必背下每条菜单路径。当工具栏图标不熟，或更新后菜单略有不同时，面板特别有用。现在就运行一个无害命令——例如改配色主题或切换终端——让双手学会这个手势。后续章节会假定你能通过搜索找到功能，而不是靠找图标。',
          keywords: [
            { en: 'Command Palette', zh: '命令面板' },
          ],
          bullets: [
            {
              en: 'Ctrl + Shift + P opens the command palette.',
              zh: 'Ctrl + Shift + P 打开命令面板。',
            },
            {
              en: 'Type an action name instead of walking the full menu tree.',
              zh: '输入动作名称，而不是走完整菜单树。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-chat',
          layout: 'text',

          titleEn: 'Chat Panel Versus Terminal',
          titleZh: '聊天面板与终端的区别',
          illustration: 'cursor',
          bodyEn:
            'Use chat to ask about the open file or an error message in plain language. Paste the error and what you already tried so the answer is grounded. Still read the reply and run commands yourself in the terminal. Confusing chat with the terminal is a common beginner mix-up: chat suggests; the terminal executes. If you only read chat and never run pwd or your program, you cannot tell whether the fix worked on your Windows machine.',
          bodyZh:
            '用聊天以白话询问当前文件或报错。贴上报错和你已尝试的操作，答案才有根据。仍然要自己阅读回复，并在终端亲手运行命令。把聊天与终端搞混是常见初学者误解：聊天给建议；终端才执行。如果只读聊天、从不运行 pwd 或你的程序，你就无法判断修复是否在你的 Windows 机器上生效。',
          bullets: [
            {
              en: 'Chat explains and suggests; terminal runs commands on your PC.',
              zh: '聊天负责解释与建议；终端在你的电脑上运行命令。',
              keywords: [
                { en: 'Chat', zh: '聊天' },
                { en: 'Terminal', zh: '终端' },
              ],
            },
            {
              en: 'Paste errors; then verify by running something yourself.',
              zh: '粘贴报错；再亲手运行某些命令来验证。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-save',
          layout: 'text',

          titleEn: 'Saving Files on Windows Paths',
          titleZh: '在 Windows 路径上保存文件',
          illustration: 'files',
          bodyEn:
            'Unsaved text lives only in the editor memory. Ctrl + S writes it to a path under your project, for example C:\\Users\\YourName\\projects\\workspace-tour\\hello.txt. Confirm the path with the tab tooltip, the sidebar location, or File Explorer. A common confusion is typing in a temporary buffer that was never saved into the project folder—then the terminal’s dir cannot see the file. Save early, save often, and after the first save of a new file, glance at Explorer once to lock the habit.',
          bodyZh:
            '未保存的文字只存在于编辑器内存里。Ctrl + S 会把它写到项目下的路径，例如 C:\\Users\\你的用户名\\projects\\workspace-tour\\hello.txt。可通过标签提示、侧边栏位置或文件资源管理器确认路径。常见混淆是在一个从未保存进项目文件夹的临时缓冲里打字——然后终端的 dir 就看不到文件。尽早保存、经常保存；新文件第一次保存后，看一眼资源管理器，把习惯钉牢。',
          bullets: [
            {
              en: 'Ctrl + S saves; saved files live on disk under the project path.',
              zh: 'Ctrl + S 保存；保存后的文件位于项目路径的磁盘上。',
              keywords: [{ en: 'Save', zh: '保存' }],
            },
            {
              en: 'Example: C:\\Users\\YourName\\projects\\workspace-tour\\hello.txt',
              zh: '例如：C:\\Users\\你的用户名\\projects\\workspace-tour\\hello.txt',
            },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-extensions',
          layout: 'text',

          titleEn: 'Extensions, Lightly',
          titleZh: '扩展：轻度了解',
          illustration: 'environment',
          bodyEn:
            'Extensions add language support, themes, or helpers. Cursor provides an extensions view similar to other VS Code-style editors. For this course, you do not need a long install list on day one. A Python-related extension may help later chapters, but only install extensions you understand and from sources you trust—just as with Windows downloads. Too many extensions can slow a lab PC or change settings you did not mean to change. Learn the core panels first; add extensions when a chapter explicitly needs them.',
          bodyZh:
            '扩展可增加语言支持、主题或辅助功能。Cursor 提供与其他 VS Code 风格编辑器类似的扩展视图。对本课程而言，第一天不需要一长串安装清单。与 Python 相关的扩展可能对后续章节有帮助，但只安装你理解且来源可信的扩展——就像 Windows 下载一样。扩展太多可能拖慢机房电脑，或改掉你无意改动的设置。先学会核心面板；等某章明确需要时再加扩展。',
          keywords: [
            { en: 'Extension', zh: '扩展' },
          ],
          bullets: [
            {
              en: 'Optional helpers—not required before you can open, edit, and save.',
              zh: '可选助手——在你会打开、编辑与保存之前并非必需。',
            },
            {
              en: 'Install sparingly; prefer teacher-recommended extensions when listed.',
              zh: '少而精地安装；若有清单，优先老师推荐的扩展。',
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
          id: 'ch-a-cursor-workspace-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'cursor',
          bodyEn:
            'Build a tiny workspace and prove the file exists in Cursor, in the terminal, and in File Explorer.',
          bodyZh: '搭建一个小工作区，并证明文件在 Cursor、终端与文件资源管理器中都存在。',
          bullets: [
            {
              en: 'In File Explorer create C:\\Users\\YourName\\projects\\workspace-tour.',
              zh: '在文件资源管理器中创建 C:\\Users\\你的用户名\\projects\\workspace-tour。',
            },
            {
              en: 'In Cursor use File → Open Folder on that path; trust it if it is yours.',
              zh: '在 Cursor 中对该路径使用 File → Open Folder；若是你的文件夹则信任。',
            },
            {
              en: 'Create hello.txt from the sidebar, type one line, save with Ctrl + S.',
              zh: '从侧边栏创建 hello.txt，写一行，用 Ctrl + S 保存。',
            },
            {
              en: 'Press Ctrl + Shift + P, type Terminal, and open a terminal; run dir.',
              zh: '按 Ctrl + Shift + P，输入 Terminal 并打开终端；运行 dir。',
              keywords: [{ en: 'Command Palette', zh: '命令面板' }],
            },
            {
              en: 'Confirm hello.txt in File Explorer at the same Windows path.',
              zh: '在文件资源管理器的同一 Windows 路径下确认 hello.txt。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-errors',
          layout: 'callout',
          titleEn: 'Common Mix-ups',
          titleZh: '常见误解',
          bodyEn:
            'Most “Cursor is broken” moments are actually the wrong folder, an unsaved buffer, or the wrong panel.',
          bodyZh: '多数“Cursor 坏了”的瞬间，其实是文件夹不对、缓冲未保存，或面板搞混。',
          bullets: [
            {
              en: 'Editing text that was never saved into the project folder.',
              zh: '编辑了却从未保存到项目文件夹的文字。',
            },
            {
              en: 'Terminal open in a different directory than the sidebar root.',
              zh: '终端当前目录与侧边栏根目录不一致。',
            },
            {
              en: 'Asking chat to “run” something without using the terminal.',
              zh: '只让聊天“运行”某事，却从不使用终端。',
            },
            {
              en: 'Opening C:\\Users or Desktop as the project root by accident.',
              zh: '不小心把 C:\\Users 或桌面当作项目根目录打开。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Point at your screen while answering if you can.',
          bodyZh: '若方便，作答时请指向屏幕上的区域。',
          bullets: [
            {
              en: 'Where do you usually see the file list in Cursor?',
              zh: '在 Cursor 里文件列表通常在哪里？',
            },
            {
              en: 'What shortcut opens the terminal? What shortcut opens the command palette?',
              zh: '打开终端的快捷键是什么？打开命令面板的快捷键是什么？',
            },
            {
              en: 'Give one good project path under C:\\Users for this course.',
              zh: '为本课程举一个 C:\\Users 下合适的项目路径。',
            },
            {
              en: 'How can you prove a saved file exists outside Cursor?',
              zh: '如何证明已保存的文件在 Cursor 之外也存在？',
            },
          ],
          noteEn:
            'Answers: left explorer sidebar; Ctrl + ` and Ctrl + Shift + P; e.g. C:\\Users\\You\\projects\\demo; open the same path in File Explorer or run dir in the terminal.',
          noteZh:
            '参考答案：左侧资源管理器侧边栏；Ctrl + ` 与 Ctrl + Shift + P；例如 C:\\Users\\你\\projects\\demo；在文件资源管理器打开同一路径，或在终端运行 dir。',
        },
        {
          id: 'ch-a-cursor-workspace-bridge',
          layout: 'text',

          titleEn: 'What You Can Do Next',
          titleZh: '接下来你可以做什么',
          illustration: 'title',
          bodyEn:
            'You can now install a trusted editor, open a Windows project folder, find files in the sidebar, edit and save, call the command palette, and use PowerShell in the terminal panel. Later chapters will fill that workspace with Python programs, errors to read, and tools to install. Keep one clean projects directory under your user profile. When a lab feels confusing, name the panel you are looking at before changing code—orientation first, then edits.',
          bodyZh:
            '你现在能安装可信编辑器、打开 Windows 项目文件夹、在侧边栏找文件、编辑并保存、调用命令面板，并在终端面板使用 PowerShell。后续章节会在这片工作区里填入 Python 程序、需要阅读的报错，以及待安装的工具。在用户配置下保持一个干净的 projects 目录。当实验让人困惑时，先说出你正在看的面板再改代码——先定向，后编辑。',
          keywords: [
            { en: 'Project Folder', zh: '项目文件夹' },
            { en: 'PowerShell', zh: 'PowerShell' },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-paths',
          layout: 'text',

          titleEn: 'Keep Windows Paths Readable',
          titleZh: '让 Windows 路径保持可读',
          illustration: 'files',
          bodyEn:
            'Say paths out loud when you work: drive letter, Users, your name, projects, then the lesson folder. Avoid spaces and special characters in new folder names when you can; they are legal on Windows but create quoting headaches in terminals. Prefer workspace-tour over My Stuff!!! when naming class folders. When a teacher pastes a path into chat, copy it into Explorer’s address bar or into Open Folder instead of rebuilding it from memory. Path literacy is half of early debugging.',
          bodyZh:
            '工作时大声读出路径：盘符、Users、你的用户名、projects，然后是课时文件夹。新建文件夹名尽可能避免空格与特殊字符；在 Windows 上它们合法，却会在终端里造成引号麻烦。给课堂文件夹命名时，优先用 workspace-tour，而不是 My Stuff!!!。老师把路径贴进聊天时，复制到资源管理器地址栏或 Open Folder，不要凭记忆重造。路径素养是早期排错的一半。',
          bullets: [
            {
              en: 'Pattern: C:\\Users\\YourName\\projects\\lesson-name',
              zh: '模式：C:\\Users\\你的用户名\\projects\\课时名',
            },
            {
              en: 'Copy and paste paths; do not retype long paths under time pressure.',
              zh: '复制粘贴路径；时间紧时不要手打长路径。',
            },
          ],
        },
        {
          id: 'ch-a-cursor-workspace-habits',
          layout: 'callout',
          titleEn: 'Daily Workspace Habits',
          titleZh: '每日工作区习惯',
          bodyEn:
            'A short routine beats heroic recovery later. Open the same projects root, confirm the sidebar root name, save before you run, and glance at the terminal path when a command fails. These habits travel with you into Python and Git chapters.',
          bodyZh:
            '简短例行胜过事后英雄式抢救。打开同一 projects 根目录，确认侧边栏根名称，运行前先保存，命令失败时看一眼终端路径。这些习惯会跟着你进入 Python 与 Git 章节。',
          bullets: [
            {
              en: 'Same project folder each lab session when possible.',
              zh: '尽可能在每次实验使用同一项目文件夹。',
            },
            {
              en: 'Save before running; check terminal directory when lost.',
              zh: '运行前保存；迷路时检查终端目录。',
            },
            {
              en: 'Use the command palette when you forget a menu path.',
              zh: '忘记菜单路径时使用命令面板。',
            },
          ],
        },
      ],
    },
  ],
}
