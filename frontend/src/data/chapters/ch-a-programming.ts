import type { Chapter } from '../../types/course'

export const chAProgramming: Chapter = {
  id: 'learning-programming',
  titleEn: 'Learning Programming',
  titleZh: '学习编程',
  summaryEn:
    'What programming is, how a Windows PC really runs your instructions, and which tools beginners meet first.',
  summaryZh:
    '什么是编程、Windows 电脑如何真正执行你的指令，以及初学者会先遇到哪些工具。',
  sections: [
    {
      id: 'what-is-programming',
      titleEn: 'What Is Programming',
      titleZh: '什么是编程',
      slides: [
        {
          id: 'ch-a-programming-title',
          layout: 'title',

          titleEn: 'Part A · Learning Programming',
          titleZh: '篇章 A · 学习编程',
          subtitleEn: 'From ideas to instructions a Windows PC can follow',
          subtitleZh: '把想法变成 Windows 电脑可以执行的指令',
          illustration: 'title',
          keywords: [
            { en: 'Programming', zh: '编程' },
            { en: 'Windows', zh: 'Windows 系统' },
            { en: 'Code', zh: '代码' },
          ],
        },
        {
          id: 'ch-a-programming-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'This chapter builds a classroom map, not a full language skill. By the end you should explain programming in plain language, describe how a program differs from an app you only click, and name the Windows tools that surround daily practice. You will also know why folder paths matter before the first Python line. Treat these goals as a checklist for the check-in slides at the end.',
          bodyZh:
            '本章建立课堂地图，而不是立刻练完一门语言。学完后，你应能用白话解释编程，说明程序与只靠点击的应用有何不同，并说出支撑日常练习的 Windows 工具。你也会明白：在写第一行 Python 之前，为什么文件夹路径已经很重要。把这些目标当作章末自测的检查清单。',
          bullets: [
            {
              en: 'Define a program as a finite, ordered list of instructions a computer can run.',
              zh: '把程序定义为计算机可运行的有限、有序指令清单。',
              keywords: [{ en: 'Program', zh: '程序' }],
            },
            {
              en: 'Separate the roles of editor, language, terminal, and File Explorer.',
              zh: '分清编辑器、语言、终端与文件资源管理器各自的角色。',
            },
            {
              en: 'Read a Windows path such as C:\\Users\\YourName\\Documents\\projects.',
              zh: '会读 C:\\Users\\你的用户名\\Documents\\projects 这类 Windows 路径。',
              keywords: [{ en: 'Path', zh: '路径' }],
            },
            {
              en: 'Describe a small practice loop: write, save, run, read the result.',
              zh: '描述一个小练习循环：编写、保存、运行、阅读结果。',
            },
            {
              en: 'See how Part A leads from thinking habits into Cursor and Python.',
              zh: '看清篇章 A 如何从思维习惯通向 Cursor 与 Python。',
            },
          ],
        },
        {
          id: 'ch-a-programming-definition',
          layout: 'text',

          titleEn: 'Programming Means Giving Instructions',
          titleZh: '编程就是给计算机下指令',
          illustration: 'code',
          imageQuery: 'computer programming writing code instructions',
          bodyEn:
            'A computer does not guess what you want. It only follows instructions written in a form it can process. Programming is the craft of turning a human goal into that form. The written instructions become a program: a finite list of steps that can run again with the same rules. On Windows, you usually write those steps in an editor, save them as files under a path like C:\\Users\\YourName\\Documents\\projects, and ask PowerShell or a language runtime to execute them. The machine will not fill in missing steps the way a classmate might. If you skip a detail, the program fails, stalls, or does something unexpected. That strictness is not cruelty; it is why programs can automate work reliably once the steps are correct.',
          bodyZh:
            '计算机不会猜测你的意图，它只会执行自己能处理的那一类指令。编程，就是把人的目标变成那种可处理形式的技艺。写下的指令组成程序：一份可以按同样规则反复运行的有限步骤清单。在 Windows 上，你通常在编辑器里写步骤，保存到类似 C:\\Users\\你的用户名\\Documents\\projects 的路径下，再通过 PowerShell 或语言运行环境去执行。机器不会像同学那样替你补全漏掉的步骤。若细节缺失，程序会失败、卡住，或做出意外动作。这种严格不是刁难；正因如此，步骤正确后，程序才能可靠地自动化工作。',
          keywords: [
            { en: 'Programming', zh: '编程' },
            { en: 'Program', zh: '程序' },
            { en: 'Instruction', zh: '指令' },
          ],
          noteEn: 'Think of a precise recipe that never improvises.',
          noteZh: '可以把它想成一份从不即兴发挥的精确菜谱。',
        },
        {
          id: 'ch-a-programming-language',
          layout: 'text',

          titleEn: 'Programs, Languages, and Source Files',
          titleZh: '程序、语言与源文件',
          illustration: 'code',
          imageQuery: 'Python programming language source code .py file',
          bodyEn:
            'People casually say “code” for everything, but classroom language needs three layers. A programming language is a shared grammar such as Python. Source code is the text you type in that grammar and save, often as a .py file. A program is what those instructions mean when a runtime or interpreter carries them out. Clicking Microsoft Word is using a finished program; opening hello.py in Cursor and running it with py is practicing programming. Later chapters install Python and walk through first runs. Today, hold the distinction: language rules, file text, and the running behavior are related but not identical.',
          bodyZh:
            '人们口语里常把一切都叫“代码”，但课堂语言需要三层区分。编程语言是共享语法，例如 Python。源代码是你按该语法敲下并保存的文本，常见为 .py 文件。程序则是运行环境或解释器真正执行这些指令时的含义。点击 Microsoft Word 是在使用成品程序；在 Cursor 打开 hello.py 并用 py 运行，才是在练习编程。后面章节会安装 Python 并走通第一次运行。今天先抓住区分：语言规则、文件文本、运行行为相关，但并不相同。',
          bullets: [
            {
              en: 'Language: shared rules and vocabulary (Python in this course).',
              zh: '语言：共享的规则与词汇（本课程用 Python）。',
              keywords: [{ en: 'Programming Language', zh: '编程语言' }],
            },
            {
              en: 'Source file: the saved text, for example C:\\Users\\YourName\\Documents\\projects\\hello.py.',
              zh: '源文件：保存下来的文本，例如 C:\\Users\\你的用户名\\Documents\\projects\\hello.py。',
              keywords: [{ en: 'Source Code', zh: '源代码' }],
            },
            {
              en: 'Runtime: the tool that actually carries out the instructions.',
              zh: '运行环境：真正执行指令的工具。',
              keywords: [{ en: 'Runtime', zh: '运行环境' }],
            },
            {
              en: 'Using an app is not the same as writing the instructions behind it.',
              zh: '使用应用，不等于编写应用背后的指令。',
            },
          ],
        },
        {
          id: 'ch-a-programming-literal',
          layout: 'text',

          titleEn: 'Computers Are Literal Partners',
          titleZh: '计算机是“字面意义”上的搭档',
          illustration: 'hardware',
          bodyEn:
            'Beginners often feel the computer is “being difficult.” More often, the computer did exactly what was written. If you tell Windows to look in Downloads while the file sits on the Desktop, the search fails even though you “meant” the Desktop. If a filename is Report.txt and you type report.txt in a case-sensitive tool, the match may fail. Programming trains you to notice these literal gaps early. That habit transfers to File Explorer, PowerShell, Python, and later web work. When something breaks, first ask: what did I literally ask for, and where did I ask the machine to look?',
          bodyZh:
            '初学者常觉得计算机“故意为难”。更多时候，计算机只是严格按写下的内容做事。如果你让 Windows 去“下载”找文件，而文件其实在“桌面”，查找就会失败——即便你“本意”是桌面。若文件名是 Report.txt，却在区分大小写的工具里输入 report.txt，也可能匹配失败。编程训练你尽早察觉这类字面落差。这一习惯会迁移到文件资源管理器、PowerShell、Python，以及后来的 Web 工作。当事情出错时，先问：我字面上要求了什么？我让机器去哪里找？',
          keywords: [
            { en: 'Literal Execution', zh: '字面执行' },
            { en: 'Bug', zh: '缺陷 / Bug' },
          ],
        },
        {
          id: 'ch-a-programming-why',
          layout: 'text',

          titleEn: 'Why Learn Programming?',
          titleZh: '为什么要学编程？',
          illustration: 'code',
          bodyEn:
            'Programming is useful because it turns vague wishes into repeatable actions. On a Windows PC you can rename hundreds of files, clean Downloads on a schedule, or build a tiny tool that your classmates can run. Just as important, writing programs trains you to name inputs, steps, and outputs clearly—skills that help in any technical course. You also gain a clearer view of how the apps on your desktop behave: menus, saves, and errors are no longer pure magic. This course does not expect you to become a professional engineer in one term. It expects you to become someone who can give a machine clear work.',
          bodyZh:
            '编程有用，是因为它把模糊愿望变成可重复的动作。在 Windows 上，你可以批量重命名上百个文件、按时清理“下载”，或做一个同学也能运行的小工具。同样重要的是，写程序会训练你把输入、步骤与输出说清楚——这对任何技术课程都有帮助。你也会更清楚桌面应用如何运转：菜单、保存与报错不再纯属魔法。本课程不要求一学期成为职业工程师，而要求你成为能给机器下达清晰工作的人。',
          bullets: [
            {
              en: 'Automate boring, repetitive Windows tasks.',
              zh: '自动化重复又无聊的 Windows 任务。',
              keywords: [{ en: 'Automation', zh: '自动化' }],
            },
            {
              en: 'Build small websites, tools, and learning demos.',
              zh: '做小型网站、工具与学习演示。',
            },
            {
              en: 'Understand how digital products really behave.',
              zh: '理解数字产品真正如何表现。',
            },
            {
              en: 'Train clear, logical problem-solving for every subject.',
              zh: '为各科训练清晰、有逻辑的解决问题能力。',
              keywords: [{ en: 'Problem Solving', zh: '问题解决' }],
            },
            {
              en: 'Communicate technical ideas with precise vocabulary.',
              zh: '用更精确的词汇交流技术想法。',
            },
          ],
        },
        {
          id: 'ch-a-programming-mindset',
          layout: 'text',

          titleEn: 'A Beginner Mindset That Survives Errors',
          titleZh: '能扛住报错的初学者心态',
          bodyEn:
            'Beginners often stall not because programming is magic, but because they try to learn everything at once. Progress comes from small loops: read a little, type a little, run it, and note what broke. Errors are feedback written by the machine about a mismatch between your instructions and reality. Watching a video without typing is like watching someone cook and expecting the same skill. Keep one notebook or Notepad file for “what I tried” and “what the message said.” That record becomes more valuable than memorizing ten unrelated tips from social media.',
          bodyZh:
            '初学者卡住，往往不是因为编程神秘，而是一次想学太多。进步来自小循环：看一点、敲一点、运行一下、记下哪里坏了。报错是机器反馈：你的指令与现实之间不匹配。只看视频不敲代码，就像只看别人做饭却指望自己会做。用一个笔记本或记事本文件记录“我试了什么”和“提示说了什么”。这份记录，比记住社交媒体上十条互不相关的技巧更有价值。',
          bullets: [
            {
              en: 'Start small. One concept at a time.',
              zh: '从小处开始，一次只学一个概念。',
            },
            {
              en: 'Errors are normal. Read them before panicking.',
              zh: '报错很正常，先读再慌。',
              keywords: [{ en: 'Error / Bug', zh: '错误 / Bug' }],
            },
            {
              en: 'Practice by typing and running, not only reading.',
              zh: '靠动手敲代码并运行练习，不要只看不练。',
            },
            {
              en: 'Build tiny projects early so ideas stick.',
              zh: '尽早做很小的项目，让想法落地。',
              keywords: [{ en: 'Project', zh: '项目' }],
            },
            {
              en: 'Keep a short log of attempts and messages.',
              zh: '简短记录尝试过程与提示信息。',
            },
            {
              en: 'Prefer one language path in this course: Python on Windows.',
              zh: '本课程优先走一条语言路径：Windows 上的 Python。',
            },
          ],
        },
        {
          id: 'ch-a-programming-worked-idea',
          layout: 'text',

          titleEn: 'Worked Idea: From Wish to Instructions',
          titleZh: '示例思路：从愿望到指令',
          illustration: 'files',
          bodyEn:
            'Suppose your wish is “clean my Downloads folder.” That sentence is not yet a program. A clearer instruction set might be: open File Explorer, go to C:\\Users\\YourName\\Downloads, list files older than thirty days, move those files into C:\\Users\\YourName\\Documents\\archive\\downloads, then report how many files moved. Notice what changed. The wish named a feeling; the plan named places, a rule, and a result you can check. Later, Python or PowerShell can automate that plan. Today, writing the plan in Notepad already counts as computational practice. If you cannot name the folder paths, you are not ready to automate yet—you are ready to explore File Explorer.',
          bodyZh:
            '假设你的愿望是“清理我的下载文件夹”。这句话还不是程序。更清楚的指令集可能是：打开文件资源管理器，进入 C:\\Users\\你的用户名\\Downloads，列出超过三十天的文件，把它们移到 C:\\Users\\你的用户名\\Documents\\archive\\downloads，再报告移动了多少个。注意变化：愿望描述感觉；计划描述位置、规则，以及可检查的结果。以后 Python 或 PowerShell 可以自动化该计划。今天，在记事本里写出计划，已经算计算实践。若你还说不清文件夹路径，说明你还没准备好自动化——但已准备好去探索文件资源管理器。',
          noteEn: 'Clear places and checks beat clever wording.',
          noteZh: '清楚的位置与检查标准，胜过花哨措辞。',
        },
      ],
    },
    {
      id: 'how-beginners-start',
      titleEn: 'Windows Tools and Practice',
      titleZh: 'Windows 工具与练习',
      slides: [
        {
          id: 'ch-a-programming-tools-preview',
          layout: 'text',

          titleEn: 'Four Tools You Will Meet Again',
          titleZh: '你将反复遇到的四类工具',
          illustration: 'cursor',
          imageQueries: [
            'code editor IDE screenshot',
            'Windows PowerShell terminal window',
            'Windows 11 File Explorer folders',
          ],
          bodyEn:
            'On Windows, four tools appear again and again in this course. The editor is where you write and edit text. The language—Python here—defines grammar and meaning. PowerShell or Windows Terminal runs commands and shows messages. File Explorer shows where project folders live on disk. Later chapters deepen each tool; today you only need the map so new names have a place to sit.',
          bodyZh:
            '在 Windows 上，本课程会反复出现四类工具。编辑器用来编写与修改文本；语言（本课程用 Python）规定语法与含义；PowerShell 或 Windows Terminal 用来运行命令并显示信息；文件资源管理器显示项目文件夹在磁盘上的位置。后面章节会加深每一样；今天你只需要地图，好让新名词有地方安放。',
          bullets: [
            {
              en: 'Editor: where you write code (Cursor in this course).',
              zh: '编辑器：写代码的地方（本课程用 Cursor）。',
              keywords: [{ en: 'Editor', zh: '编辑器' }],
            },
            {
              en: 'Language: Python for beginner practice.',
              zh: '语言：用 Python 做入门练习。',
              keywords: [{ en: 'Language', zh: '语言' }],
            },
            {
              en: 'Terminal: PowerShell or Windows Terminal for commands.',
              zh: '终端：用 PowerShell 或 Windows Terminal 运行命令。',
              keywords: [
                { en: 'PowerShell', zh: 'PowerShell' },
                { en: 'Windows Terminal', zh: 'Windows 终端' },
              ],
            },
            {
              en: 'File Explorer: where folders and projects live.',
              zh: '文件资源管理器：文件夹与项目存放的地方。',
              keywords: [{ en: 'File Explorer', zh: '文件资源管理器' }],
            },
          ],
        },
        {
          id: 'ch-a-programming-editor-role',
          layout: 'text',

          titleEn: 'What an Editor Does—and Does Not Do',
          titleZh: '编辑器做什么——以及不做什么',
          illustration: 'cursor',
          imageQuery: 'software code editor IDE window',
          bodyEn:
            'An editor is a careful text workplace. It highlights language structure, helps you save files, and may warn about simple mistakes. It does not replace thinking, and it does not automatically put your file in the correct folder. Cursor, used later in Part A, is still an editor plus helpers. If you type beautiful code into the wrong directory, PowerShell will not find it when you run a command elsewhere. Treat the editor as the pen; treat File Explorer and the terminal as the address system that tells Windows where that pen wrote.',
          bodyZh:
            '编辑器是仔细的文本工作台。它会高亮语言结构、帮助保存文件，并可能提醒简单错误。它不能代替思考，也不会自动把文件放到正确文件夹。后面篇章 A 使用的 Cursor，仍然是编辑器外加助手。若你把漂亮代码写进错误目录，当终端在别处运行命令时，PowerShell 就找不到它。把编辑器当作笔；把文件资源管理器与终端当作地址系统，告诉 Windows 那支笔写在哪里。',
          bullets: [
            {
              en: 'Editors edit text; they do not magically choose your project folder.',
              zh: '编辑器编辑文本；不会魔法般替你选定项目文件夹。',
            },
            {
              en: 'Saving is required before another tool can reliably run the file.',
              zh: '必须先保存，其他工具才能可靠地运行该文件。',
            },
            {
              en: 'Helpers in Cursor still depend on a correct workspace path.',
              zh: 'Cursor 中的助手仍然依赖正确的工作区路径。',
            },
          ],
        },
        {
          id: 'ch-a-programming-windows-path',
          layout: 'text',

          titleEn: 'Why Windows Paths Matter Early',
          titleZh: '为什么很早就要懂 Windows 路径',
          illustration: 'files',
          imageQuery: 'Windows 11 File Explorer address bar path',
          bodyEn:
            'Many beginner errors are not “bad code” but “wrong place.” If your file is in Downloads and your terminal is in Documents, commands fail in confusing ways. A path is the full address of a folder or file on disk. On Windows you often see backslashes, as in C:\\Users\\YourName\\Documents\\projects\\week01. Drive letter C: is common on school PCs, but some machines use D: for data. Learning to read the File Explorer address bar saves hours later when Python, git, and web tools all expect the correct folder. Before you memorize syntax, memorize where your work lives.',
          bodyZh:
            '很多入门报错不是“代码写坏了”，而是“当前位置不对”。文件在“下载”，终端却在“文档”，命令就会以很让人困惑的方式失败。路径是磁盘上文件夹或文件的完整地址。在 Windows 上你常看到反斜杠，例如 C:\\Users\\你的用户名\\Documents\\projects\\week01。校园电脑常见 C: 盘，也有机器用 D: 存放数据。学会阅读文件资源管理器地址栏，后面 Python、git 与 Web 工具都会省很多时间。在背语法之前，先记住你的工作放在哪里。',
          bullets: [
            {
              en: 'Projects should live in a clear folder under your user profile.',
              zh: '项目应放在用户目录下清晰的文件夹里。',
            },
            {
              en: 'Path separators on Windows often use backslash \\.',
              zh: 'Windows 路径分隔符常用反斜杠 \\。',
              keywords: [{ en: 'Path', zh: '路径' }],
            },
            {
              en: 'Always know which folder your terminal is using.',
              zh: '随时知道终端当前在哪个文件夹。',
            },
            {
              en: 'Downloads is for temporary files, not long-term course projects.',
              zh: '“下载”适合临时文件，不适合长期课程项目。',
            },
          ],
        },
        {
          id: 'ch-a-programming-project-home',
          layout: 'text',

          titleEn: 'Choose a Home for Course Work',
          titleZh: '为课程作业选定一个“家”',
          illustration: 'files',
          imageQuery: 'Windows Documents folder File Explorer',
          bodyEn:
            'Pick one parent folder early and reuse it all term. A practical pattern is C:\\Users\\YourName\\Documents\\teaching-projects or C:\\Users\\YourName\\Documents\\cs-intro. Inside it, create week folders later, such as week01 and week02. Avoid Desktop clutter if your school profile syncs slowly, and avoid mixing personal photos with code. Consistency matters more than the perfect name. When a classmate asks where your file is, you should answer with one path, not three guesses.',
          bodyZh:
            '尽早选定一个父文件夹并整学期复用。实用模式是 C:\\Users\\你的用户名\\Documents\\teaching-projects 或 C:\\Users\\你的用户名\\Documents\\cs-intro。以后在里面再建 week01、week02 这类周次文件夹。若学校配置文件同步较慢，避免桌面堆满；也不要把个人照片与代码混在一起。一致性比完美命名更重要。当同学问文件在哪时，你应能给出一条路径，而不是三个猜测。',
          bullets: [
            {
              en: 'One parent folder for the whole course.',
              zh: '整门课共用一个父文件夹。',
            },
            {
              en: 'Prefer Documents over Downloads for lasting work.',
              zh: '长期作业优先放在“文档”，而不是“下载”。',
            },
            {
              en: 'Name folders with letters and numbers that sort cleanly.',
              zh: '文件夹命名用便于排序的字母与数字。',
            },
            {
              en: 'Do not scatter copies of the same project in three places.',
              zh: '不要把同一项目的副本散落在三个地方。',
            },
          ],
        },
        {
          id: 'ch-a-programming-try',
          layout: 'steps',
          titleEn: 'Try It on Windows: See Your Folders',
          titleZh: '在 Windows 上试一试：看见自己的文件夹',
          illustration: 'files',
          bodyEn:
            'Do not create a coding project yet. First learn to see your own folders the way Windows addresses them. Complete every step once on your lab PC or home PC.',
          bodyZh:
            '现在不必创建编程项目。先学会像 Windows 一样用地址看见自己的文件夹。请在实验室电脑或自己的电脑上完整做完每一步。',
          bullets: [
            {
              en: 'Press Win + E to open File Explorer.',
              zh: '按 Win + E 打开文件资源管理器。',
              keywords: [{ en: 'File Explorer', zh: '文件资源管理器' }],
            },
            {
              en: 'In the left pane, open This PC, then Local Disk (C:).',
              zh: '在左侧打开“此电脑”，再打开本地磁盘 (C:)。',
            },
            {
              en: 'Open Users, then the folder that matches your Windows sign-in name.',
              zh: '打开 Users，再打开与你的 Windows 登录名相同的文件夹。',
            },
            {
              en: 'Open Documents. Click the address bar and read the full path aloud.',
              zh: '打开“文档”。点击地址栏，大声读出完整路径。',
            },
            {
              en: 'Optional: create a new folder named teaching-projects inside Documents.',
              zh: '可选：在“文档”里新建名为 teaching-projects 的文件夹。',
            },
            {
              en: 'Open Start, type PowerShell, open Windows PowerShell.',
              zh: '打开开始菜单，输入 PowerShell，打开 Windows PowerShell。',
              keywords: [{ en: 'PowerShell', zh: 'PowerShell' }],
            },
            {
              en: 'Run pwd and compare the printed path with File Explorer.',
              zh: '运行 pwd，把打印路径与文件资源管理器对照。',
              keywords: [{ en: 'pwd', zh: '查看当前目录' }],
            },
            {
              en: 'If they differ, say out loud which tool is in which folder.',
              zh: '若不一致，大声说出哪个工具在哪个文件夹。',
            },
          ],
          noteEn: 'Looking around is enough for this chapter; no Python yet.',
          noteZh: '本章先熟悉界面即可，还不用 Python。',
        },
        {
          id: 'ch-a-programming-practice-loop',
          layout: 'text',

          titleEn: 'The Daily Practice Loop',
          titleZh: '每日练习循环',
          illustration: 'terminal',
          imageQuery: 'coding write save run terminal practice',
          bodyEn:
            'Successful beginners share a short loop even before they know much syntax. Open the correct folder. Open the editor on the correct file. Change one small thing. Save. Run from the terminal in that same folder. Read the output or error without scrolling past it. Write one sentence about what happened. Then stop or take the next tiny step. This loop beats long passive watching. When you later install Python, the loop stays the same; only the run command changes.',
          bodyZh:
            '成功的初学者即使语法不多，也共用一个短循环。打开正确文件夹；在编辑器打开正确文件；只改一小处；保存；在同一文件夹的终端里运行；认真读输出或报错，不要滑过去；用一句话写下发生了什么；然后停下或进入下一微小步骤。这个循环胜过长时间被动观看。以后安装 Python 时，循环不变，变的只是运行命令。',
          bullets: [
            {
              en: 'Open folder → edit → save → run → read → note.',
              zh: '打开文件夹 → 编辑 → 保存 → 运行 → 阅读 → 记录。',
            },
            {
              en: 'Change one thing at a time so causes stay visible.',
              zh: '一次只改一件事，原因才看得见。',
            },
            {
              en: 'Match terminal location to file location before blaming the language.',
              zh: '先把终端位置与文件位置对齐，再怀疑语言本身。',
            },
          ],
        },
        {
          id: 'ch-a-programming-roadmap',
          layout: 'text',

          titleEn: 'Course Roadmap Ahead',
          titleZh: '后面的课程路线',
          bodyEn:
            'Part A builds thinking, Windows habits, and Cursor. Later parts move through hardware, the operating system, files, the terminal, Python, git, networks, the web, and digital safety. You do not need to master every part on day one. You need a mental map so each new tool has a place. If today’s slide names feel heavy, return to the four tools: editor, language, terminal, File Explorer. Almost every later chapter still sits on that map.',
          bodyZh:
            '篇章 A 建立思维、Windows 习惯与 Cursor。后面会依次经过硬件、操作系统、文件、终端、Python、git、网络、Web 与数字安全。你不必第一天就掌握所有部分；你需要一张心智地图，让每个新工具都有位置。若今天的名词显得沉重，回到四类工具：编辑器、语言、终端、文件资源管理器。几乎后面每一章仍坐落在这张地图上。',
          bullets: [
            {
              en: 'Next in Part A: computational thinking, algorithms, daily practice.',
              zh: '篇章 A 接下来：计算思维、算法、每日练习。',
            },
            {
              en: 'Then: Windows skills, Cursor install, workspace tour.',
              zh: '然后：Windows 技能、安装 Cursor、工作区导览。',
            },
            {
              en: 'Later: hardware → OS → files → terminal → Python → web.',
              zh: '再后：硬件 → 操作系统 → 文件 → 终端 → Python → Web。',
            },
            {
              en: 'Keep one project home folder so later tools can find your work.',
              zh: '保持一个项目主文件夹，方便后续工具找到你的作业。',
            },
          ],
          noteEn: 'Next chapter: how successful beginners think before typing.',
          noteZh: '下一章：成功的初学者在敲代码前如何思考。',
        },
      ],
    },
    {
      id: 'check-in',
      titleEn: 'Check In',
      titleZh: '检查一下',
      slides: [
        {
          id: 'ch-a-programming-errors',
          layout: 'callout',
          titleEn: 'Common Mix-ups',
          titleZh: '常见误解',
          bodyEn:
            'These misunderstandings slow beginners more than missing a single syntax detail. Read each one and notice whether it matches a habit you already have.',
          bodyZh:
            '这些误解比漏掉某个语法细节更能拖慢初学者。逐条阅读，并留意它是否已经像你的习惯。',
          bullets: [
            {
              en: 'Programming is not only for math geniuses; it is for clear instructors of machines.',
              zh: '编程不只是数学天才的事；它属于能把机器交代清楚的人。',
            },
            {
              en: 'Watching videos is not the same as typing, saving, and running.',
              zh: '看视频不等于自己敲代码、保存并运行。',
            },
            {
              en: 'Learning five languages at once usually means finishing none.',
              zh: '同时学五门语言，通常一门也学不成。',
            },
            {
              en: 'Saving everything in Downloads makes later work harder to find and run.',
              zh: '所有东西都丢进“下载”，后面更难找到并运行。',
            },
            {
              en: 'An editor error highlight is a hint, not proof that Windows “hates” you.',
              zh: '编辑器高亮是提示，不是证明 Windows“针对”你。',
            },
            {
              en: 'Copying a finished app’s behavior is not the same as writing its instructions.',
              zh: '会模仿成品应用的行为，不等于会写它的指令。',
            },
          ],
        },
        {
          id: 'ch-a-programming-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn:
            'Answer out loud or in Notepad before moving on. Short precise answers beat long vague ones. Then compare with the note.',
          bodyZh:
            '继续之前，请大声回答或写在记事本里。简短精确胜过冗长模糊。然后对照注释中的参考答案。',
          bullets: [
            {
              en: 'What is a program, in one sentence?',
              zh: '用一句话：什么是程序？',
            },
            {
              en: 'Which Windows tool shows folders: File Explorer or Task Manager?',
              zh: '哪个 Windows 工具用来看文件夹：文件资源管理器还是任务管理器？',
            },
            {
              en: 'Name two tools you will meet in this course besides Python itself.',
              zh: '除 Python 本身外，说出本课程中你会遇到的两个工具。',
            },
            {
              en: 'Why might a correct-looking command fail if the terminal is in the wrong folder?',
              zh: '若终端在错误文件夹，为什么看起来正确的命令仍可能失败？',
            },
            {
              en: 'Rewrite “clean my Downloads” into one sentence that names a path and a checkable result.',
              zh: '把“清理我的下载”改写成一句：包含路径与可检查结果。',
            },
          ],
          noteEn:
            'Sample answers: a finite ordered list of computer instructions; File Explorer; e.g. Cursor and PowerShell; the command looks in the current directory, not where you imagined; e.g. move files older than 30 days from C:\\Users\\YourName\\Downloads to an archive folder and count them.',
          noteZh:
            '参考答案：给计算机的有限有序指令清单；文件资源管理器；例如 Cursor 与 PowerShell；命令在当前目录查找，而不是在你想象的位置；例如把 C:\\Users\\你的用户名\\Downloads 中超过 30 天的文件移到归档文件夹并计数。',
        },
        {
          id: 'ch-a-programming-bridge',
          layout: 'callout',
          titleEn: 'Before the Next Chapter',
          titleZh: '进入下一章之前',
          bodyEn:
            'You now have a working definition of programming and a Windows tool map. The next chapter does not install Python yet. It trains computational thinking: how to break a messy wish into inputs, steps, and outputs a computer could eventually follow. Bring your project home folder path with you; you will reuse it when planning File Explorer tasks on paper.',
          bodyZh:
            '你现在已有可用的编程定义与 Windows 工具地图。下一章还不会安装 Python。它训练计算思维：如何把混乱愿望拆成计算机最终能跟随的输入、步骤与输出。请带上你的项目主文件夹路径；在纸上规划文件资源管理器任务时会再次用到。',
          keywords: [
            { en: 'Computational Thinking', zh: '计算思维' },
            { en: 'Input', zh: '输入' },
            { en: 'Output', zh: '输出' },
          ],
        },
      ],
    },
  ],
}
