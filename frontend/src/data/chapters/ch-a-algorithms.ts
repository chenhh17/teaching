import type { Chapter } from '../../types/course'

export const chAAlgorithms: Chapter = {
  id: 'algorithms-and-pseudocode',
  titleEn: 'Algorithms and Pseudocode',
  titleZh: '算法与伪代码',
  summaryEn:
    'Plan with decomposition, patterns, and abstraction; write finite Windows-ready steps in pseudocode before Python or PowerShell.',
  summaryZh:
    '用分解、模式与抽象做计划；在 Python 或 PowerShell 之前，用伪代码写出有限、可执行的 Windows 步骤。',
  sections: [
    {
      id: 'what-is-an-algorithm',
      titleEn: 'Plans Before Code',
      titleZh: '代码之前的计划',
      slides: [
        {
          id: 'ch-a-algorithms-title',
          layout: 'title',

          titleEn: 'Part A · Algorithms and Pseudocode',
          titleZh: '篇章 A · 算法与伪代码',
          subtitleEn: 'Ordered plans a human and a computer can both follow',
          subtitleZh: '人和计算机都能跟着走的有序计划',
          illustration: 'title',
          keywords: [
            { en: 'Algorithm', zh: '算法' },
            { en: 'Pseudocode', zh: '伪代码' },
            { en: 'Sequence', zh: '顺序' },
          ],
        },
        {
          id: 'ch-a-algorithms-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'By the end of this chapter you should be able to turn a messy Windows task into a short plan that finishes, then express that plan in plain-language pseudocode. You will also connect the plan to the thinking habits from the previous chapter: break the job apart, notice patterns, hide details you do not need yet, and only then write steps.',
          bodyZh:
            '学完本章后，你应能把杂乱的 Windows 任务变成能结束的短计划，再用白话伪代码写出来。你也会把计划接到上一章的思维习惯：拆开任务、发现模式、暂时隐藏不需要的细节，最后才写步骤。',
          bullets: [
            {
              en: 'Define an algorithm as ordered, clear, and finite.',
              zh: '把算法定义为有序、清楚、有限的步骤。',
              keywords: [{ en: 'Algorithm', zh: '算法' }],
            },
            {
              en: 'Separate algorithm, pseudocode, and real code.',
              zh: '分清算法、伪代码与真实代码。',
              keywords: [{ en: 'Pseudocode', zh: '伪代码' }],
            },
            {
              en: 'Use sequence, choice, and loop on one Windows file task.',
              zh: '在一个 Windows 文件任务里用到顺序、选择与循环。',
            },
            {
              en: 'Trace a plan by hand before trusting it.',
              zh: '用手演练计划，再相信它。',
              keywords: [{ en: 'Trace', zh: '演练 / 跟踪' }],
            },
          ],
        },
        {
          id: 'ch-a-algorithms-why-plan',
          layout: 'text',

          titleEn: 'Why Plan Before You Type',
          titleZh: '为什么先计划再敲键盘',
          illustration: 'environment',
          bodyEn:
            'Beginners often open Cursor or PowerShell and start typing as soon as an idea appears. That feels productive, but it usually creates half-finished scripts that nobody can explain. An algorithm is the missing middle layer: a plan that is precise enough to follow, yet free of language syntax. On Windows this matters early, because File Explorer, Settings, and PowerShell can all solve the same job in different ways. If you do not know the steps, changing tools only changes the place where you get stuck. Writing the plan first also makes errors cheaper. Crossing out a line on paper takes seconds; renaming fifty files with the wrong rule can take an afternoon to undo.',
          bodyZh:
            '初学者常一有想法就打开 Cursor 或 PowerShell 开始敲。这感觉很勤奋，却常常留下谁也说不清的半成品脚本。算法就是中间缺失的那一层：精确到能跟着做，却还不绑死某门语言语法。在 Windows 上这很早就会重要，因为文件资源管理器、设置和 PowerShell 都能用不同方式做同一件事。如果你还不清楚步骤，换工具只是换一个卡住的地方。先写计划也让错误更便宜。在纸上划掉一行只要几秒；用错误规则重命名五十个文件，可能要一下午才能挽回。',
          noteEn: 'Think of the plan as a contract you write with your future self.',
          noteZh: '把计划想成你和未来的自己签的一份合同。',
        },
        {
          id: 'ch-a-algorithms-definition',
          layout: 'text',

          titleEn: 'Algorithm = Recipe With an End',
          titleZh: '算法 = 有终点的菜谱',
          illustration: 'python',
          bodyEn:
            'An algorithm is a finite, ordered set of clear steps that transforms inputs into outputs. Finite means the plan must stop for normal cases; ordered means the sequence matters; clear means a careful classmate could follow it without guessing your private meaning. A shopping list is not yet an algorithm if the order is random and there is no finish rule. A cooking recipe is closer: do this, then that, stop when the dish is ready. In class we care about everyday algorithms you can later automate: check free disk space, rename files, find a duplicate name, copy a project folder safely. Fancy math is not required on day one. Discipline about order, clarity, and ending is required.',
          bodyZh:
            '算法是一组有限、有序、清楚的步骤，把输入变成输出。有限指正常情况下必须停下来；有序指先后关系重要；清楚指细心的同学不用猜你的私人含义也能跟着做。购物清单如果顺序随便且没有结束规则，还不算算法。菜谱更接近：先做这个，再做那个，菜好了就停。课堂上我们关心以后能自动化的日常算法：检查磁盘剩余空间、重命名文件、找重复文件名、安全复制项目文件夹。第一天不需要高深数学。需要的是对顺序、清楚与结束的纪律。',
          bullets: [
            {
              en: 'Inputs enter; outputs leave; steps sit in the middle.',
              zh: '输入进来，输出出去，步骤在中间。',
              keywords: [
                { en: 'Input', zh: '输入' },
                { en: 'Output', zh: '输出' },
              ],
            },
            {
              en: 'If it can loop forever with no exit, revise it.',
              zh: '如果可能永远循环且没有出口，就改它。',
            },
          ],
        },
        {
          id: 'ch-a-algorithms-decompose',
          layout: 'text',

          titleEn: 'Decomposition: Split the Job',
          titleZh: '分解：把任务拆开',
          illustration: 'files',
          bodyEn:
            'Decomposition means breaking one large goal into smaller jobs you can name and finish. Suppose your goal is “clean my Downloads folder on Windows.” That sentence hides many actions: open File Explorer, go to C:\\Users\\You\\Downloads, sort by date, decide what is trash, move keepers into Documents, empty Recycle Bin, and confirm free space grew. Each of those can become its own mini-plan. When a step still feels huge, split it again until one person can do it in a few minutes without inventing new rules mid-way. Good algorithms are built from such pieces. Bad plans try to do everything in one vague paragraph.',
          bodyZh:
            '分解意味着把一个大目标拆成你能命名、能完成的小任务。假设目标是“清理 Windows 上的下载文件夹”。这句话藏了很多动作：打开文件资源管理器、进入 C:\\Users\\你\\Downloads、按日期排序、判断什么是垃圾、把要留的移到文档、清空回收站、确认剩余空间变大。每一步都可以变成自己的小计划。当某一步仍然很大时，就再拆，直到一个人几分钟内能做完，中途不必临时发明新规则。好算法由这些零件组成。坏计划试图用一段含糊文字包办一切。',
          keywords: [
            { en: 'Decomposition', zh: '分解' },
            { en: 'File Explorer', zh: '文件资源管理器' },
          ],
        },
        {
          id: 'ch-a-algorithms-pattern',
          layout: 'text',

          titleEn: 'Pattern Recognition: Reuse What Repeats',
          titleZh: '模式识别：复用重复出现的东西',
          illustration: 'code',
          bodyEn:
            'Pattern recognition means noticing that several cases share the same shape. Renaming photo001.jpg, photo002.jpg, and photo003.jpg is one pattern with a changing number. Checking whether a USB drive letter exists in File Explorer is the same kind of check you later do for a missing project folder. When you see a pattern, write one general step instead of copying the same sentence ten times. That is how loops are born in your mind before you learn for in Python. On Windows homework, ask: “Am I doing the same action for every file, every drive, or every week?” If yes, your algorithm should show one repeated block, not a long copy-paste list.',
          bodyZh:
            '模式识别意味着发现多种情况其实长得一样。重命名 photo001.jpg、photo002.jpg、photo003.jpg 是同一个模式，只是数字在变。在文件资源管理器里检查 U 盘盘符是否存在，和以后检查项目文件夹是否缺失，是同一类检查。看到模式时，写一条通用步骤，而不是把同一句话抄十遍。这就是你在学 Python 的 for 之前，心里先长出循环的方式。做 Windows 作业时问自己：“我是不是对每个文件、每个磁盘或每周都在做同样的动作？”如果是，算法里应出现一个重复块，而不是一长串复制粘贴。',
          keywords: [
            { en: 'Pattern', zh: '模式' },
            { en: 'Loop', zh: '循环' },
          ],
        },
        {
          id: 'ch-a-algorithms-abstract',
          layout: 'text',

          titleEn: 'Abstraction: Hide Details Until Needed',
          titleZh: '抽象：暂时隐藏细节',
          illustration: 'terminal',
          bodyEn:
            'Abstraction means keeping only the details that matter for the current decision. When you plan “OPEN the lab folder,” you do not yet need the icon color of File Explorer or the exact millisecond PowerShell starts. Those details can wait. What matters is which folder, what you will read inside it, and what you will do if it is missing. Later, when you implement the plan, you choose Win + E, cd in PowerShell, or a Python path string. Abstraction protects your attention. Beginners often drown early plans in syntax, version numbers, and menu screenshots. Strong planners name the operation first, then fill the tool later.',
          bodyZh:
            '抽象意味着只保留当前决策真正需要的细节。当你计划“OPEN 实验文件夹”时，还不需要文件资源管理器图标颜色，也不需要 PowerShell 启动的精确毫秒。那些可以稍后。重要的是哪个文件夹、你要读里面什么、若缺失怎么办。以后实现计划时，再选 Win + E、PowerShell 的 cd，或 Python 路径字符串。抽象保护你的注意力。初学者常把早期计划淹没在语法、版本号和菜单截图里。强的规划者先命名操作，再填工具。',
          keywords: [
            { en: 'Abstraction', zh: '抽象' },
            { en: 'PowerShell', zh: 'PowerShell' },
          ],
        },
        {
          id: 'ch-a-algorithms-three-layers',
          layout: 'text',

          titleEn: 'Algorithm, Pseudocode, Code',
          titleZh: '算法、伪代码、代码',
          illustration: 'code',
          bodyEn:
            'Keep three layers separate in your notes. The algorithm is the idea of the steps: what must happen and in what order. Pseudocode is that idea written with structured plain language, often using verbs like OPEN, READ, IF, ELSE, REPEAT, PRINT, and SAVE. Real code is a specific language such as PowerShell or Python, with exact punctuation the computer demands. Students get stuck when they jump from a vague wish straight into code syntax. Write the middle layer on purpose. It is allowed to mix English and Chinese in pseudocode for this course. It is not allowed to pretend Python indentation rules are already settled while the plan is still wrong.',
          bodyZh:
            '在笔记里把三层分开。算法是步骤的想法：必须发生什么、按什么顺序。伪代码是用结构化白话写出的想法，常用 OPEN、READ、IF、ELSE、REPEAT、PRINT、SAVE 这类动词。真实代码是 PowerShell 或 Python 这类具体语言，带有计算机要求的精确标点。学生卡住，往往是因为从模糊愿望直接跳进语法。请刻意写中间层。本课程伪代码允许中英混写。不允许在计划仍错误时，假装 Python 缩进规则已经定案。',
          bullets: [
            {
              en: 'Algorithm: the ordered idea that finishes.',
              zh: '算法：能结束的有序想法。',
              keywords: [{ en: 'Algorithm', zh: '算法' }],
            },
            {
              en: 'Pseudocode: structured words, light rules.',
              zh: '伪代码：结构化文字，轻量规则。',
              keywords: [{ en: 'Pseudocode', zh: '伪代码' }],
            },
            {
              en: 'Code: PowerShell or Python with real syntax.',
              zh: '代码：带真实语法的 PowerShell 或 Python。',
            },
            {
              en: 'Fix the plan before fighting the compiler or shell.',
              zh: '先修正计划，再和编译器或 shell 较劲。',
            },
          ],
        },
      ],
    },
    {
      id: 'control-ideas',
      titleEn: 'Control Ideas and a Worked Example',
      titleZh: '控制结构与完整例子',
      slides: [
        {
          id: 'ch-a-algorithms-control',
          layout: 'text',

          titleEn: 'Three Building Blocks',
          titleZh: '三个基本积木',
          illustration: 'terminal',
          bodyEn:
            'Almost every useful program is built from three control ideas. Sequence does steps in a fixed order. Choice picks a path with IF and ELSE when a condition is true or false. Loop repeats a block WHILE a condition remains true, or FOR each item in a collection. Windows daily life already uses all three even when you never open a code editor. You open Settings, then Storage, then read a number. That is sequence. If free space is low, you clean Downloads; else you stop. That is choice. Each week you repeat the check. That is a loop across time. Learning the names helps you write plans that map cleanly onto later PowerShell and Python.',
          bodyZh:
            '几乎每个有用的程序都由三种控制想法构成。顺序按固定次序做事。选择在条件为真或假时用 IF 与 ELSE 选一条路。循环在条件仍为真时 REPEAT 一块，或 FOR 集合中的每一项重复。Windows 日常生活已经在用这三者，即使你从没打开代码编辑器。你打开设置，再打开存储，再读一个数字，这是顺序。若剩余空间偏低就清理下载，否则停止，这是选择。每周重复检查，这是跨时间的循环。学会这些名字，有助于你写出以后能干净映射到 PowerShell 与 Python 的计划。',
          bullets: [
            {
              en: 'Sequence: do A, then B, then C.',
              zh: '顺序：先 A，再 B，再 C。',
              keywords: [{ en: 'Sequence', zh: '顺序' }],
            },
            {
              en: 'Choice: IF condition THEN one path ELSE another.',
              zh: '选择：IF 条件 THEN 一条路 ELSE 另一条。',
              keywords: [{ en: 'Condition', zh: '条件' }],
            },
            {
              en: 'Loop: REPEAT WHILE true, or FOR each item.',
              zh: '循环：当条件为真 REPEAT，或 FOR 每一项。',
              keywords: [{ en: 'Loop', zh: '循环' }],
            },
          ],
        },
        {
          id: 'ch-a-algorithms-sequence-windows',
          layout: 'text',

          titleEn: 'Sequence on Windows',
          titleZh: 'Windows 上的顺序',
          illustration: 'files',
          bodyEn:
            'Sequence looks boring, but wrong order breaks real work. Copying a project folder before creating the destination path fails. Running py script.py before installing Python fails. Opening a file in Cursor before the file exists forces you into a maze of save dialogs. When you write pseudocode, number the steps or stack them top to bottom so the order is visible. A good test is to read the plan aloud to a partner and ask whether any step secretly depends on a later step. If yes, reorder. Order is part of correctness, not decoration.',
          bodyZh:
            '顺序看起来无聊，但顺序错了会毁掉真实工作。目标路径还没建好就复制项目文件夹会失败。还没安装 Python 就运行 py script.py 会失败。文件还不存在就在 Cursor 里打开，会把你逼进一堆另存为对话框。写伪代码时给步骤编号，或从上到下排列，让顺序可见。一个好测试是把计划大声读给同伴听，问有没有某一步其实依赖后面的步骤。如果有，就重排。顺序是正确性的一部分，不是装饰。',
          bullets: [
            {
              en: 'Create the folder, then copy into it.',
              zh: '先创建文件夹，再复制进去。',
            },
            {
              en: 'Install the tool, then run the command.',
              zh: '先安装工具，再运行命令。',
            },
          ],
        },
        {
          id: 'ch-a-algorithms-choice',
          layout: 'text',

          titleEn: 'Choice: IF Paths Are Decisions',
          titleZh: '选择：IF 路径就是决策',
          illustration: 'code',
          bodyEn:
            'Choice appears whenever the next action depends on a fact you must check. IF the file exists THEN open it ELSE show an error. IF free space is under 5 GB THEN warn the user ELSE report OK. Write the condition as a yes/no question whenever you can. Vague conditions such as “IF it looks messy” are hard to automate later. Prefer measurable checks: name contains a space, extension is .txt, path exists, size is greater than zero. Also write the ELSE on purpose. Many bugs hide in the path you never named. Even if ELSE only says “do nothing and continue,” saying so prevents silent assumptions.',
          bodyZh:
            '只要下一步取决于你必须检查的事实，就会出现选择。IF 文件存在 THEN 打开 ELSE 显示错误。IF 剩余空间低于 5 GB THEN 警告用户 ELSE 报告正常。条件尽量写成是/否问题。“IF 看起来很乱”这类含糊条件以后很难自动化。优先可测量的检查：名称含空格、扩展名是 .txt、路径存在、大小大于零。也要刻意写出 ELSE。很多漏洞藏在你从未命名的那条路上。即使 ELSE 只是“什么都不做并继续”，写出来也能防止沉默假设。',
          keywords: [
            { en: 'IF', zh: '如果' },
            { en: 'ELSE', zh: '否则' },
            { en: 'Condition', zh: '条件' },
          ],
        },
        {
          id: 'ch-a-algorithms-loop',
          layout: 'text',

          titleEn: 'Loops Need a Clear Exit',
          titleZh: '循环需要清楚的出口',
          illustration: 'terminal',
          bodyEn:
            'A loop repeats work, but only useful loops know when to stop. FOR each .txt file in Documents\\lab is a loop over a finite list, so it ends when the list ends. WHILE free space is low REPEAT cleanup is riskier: if cleanup never frees space, the loop never ends. In beginner plans, prefer FOR-each over open-ended WHILE whenever the collection is known. Always name what changes each time through the loop. If nothing changes, you probably designed an infinite loop. On Windows, looping over files in a folder is the most common early pattern you will later code in PowerShell or Python.',
          bodyZh:
            '循环重复工作，但有用的循环知道何时停止。FOR Documents\\lab 里的每个 .txt 文件是对有限列表的循环，列表结束它就结束。WHILE 剩余空间偏低 REPEAT 清理更危险：如果清理从不释放空间，循环永不结束。初学者计划里，只要集合已知，优先 FOR-each，而不是开放的 WHILE。务必写明每次循环什么在变化。如果什么都不变，你很可能设计了死循环。在 Windows 上，对文件夹里的文件循环，是你以后在 PowerShell 或 Python 里最早会写的常见模式。',
          bullets: [
            {
              en: 'FOR each item: safe when the list is finite.',
              zh: 'FOR 每一项：列表有限时较安全。',
            },
            {
              en: 'WHILE condition: write how the condition can become false.',
              zh: 'WHILE 条件：写明条件如何变为假。',
            },
            {
              en: 'Name the exit, or the plan is incomplete.',
              zh: '写出出口，否则计划不完整。',
            },
          ],
          keywords: [{ en: 'Loop', zh: '循环' }],
        },
        {
          id: 'ch-a-algorithms-flowchart',
          layout: 'text',

          titleEn: 'Flowcharts, Lightly',
          titleZh: '流程图，点到为止',
          illustration: 'interface',
          bodyEn:
            'A flowchart is a picture of the same plan: boxes for actions, diamonds for decisions, arrows for order. We use flowcharts lightly in this course because drawing perfect shapes is not the learning goal. Still, a quick sketch helps when IF branches multiply. Draw one start, one end, and only the decisions that change the path. If your drawing needs a whole wall, your algorithm is probably too big and needs decomposition first. Pseudocode remains the main writing tool here. Use a flowchart as a thinking aid on paper or in a notebook, not as a second homework language you must memorize.',
          bodyZh:
            '流程图是同一计划的图画：方框表示动作，菱形表示决策，箭头表示顺序。本课程轻量使用流程图，因为画完美图形不是学习目标。不过当 IF 分支变多时，快速草图很有帮助。画一个开始、一个结束，以及会改变路径的决策即可。如果你的图需要一面墙，算法可能太大，应先分解。这里仍以伪代码为主要书写工具。把流程图当作纸上或笔记本里的思考辅助，而不是第二套必须背的作业语言。',
          keywords: [
            { en: 'Flowchart', zh: '流程图' },
            { en: 'Decision', zh: '决策' },
          ],
          noteEn: 'Picture optional; clear words required.',
          noteZh: '图可选；清楚的文字必需。',
        },
        {
          id: 'ch-a-algorithms-worked-setup',
          layout: 'text',

          titleEn: 'Worked Example: Find a Duplicate Name',
          titleZh: '完整例子：查找重复文件名',
          illustration: 'files',
          bodyEn:
            'Here is a beginner-friendly Windows problem. You downloaded several reports into C:\\Users\\You\\Downloads. Some files may share the same name with different suffixes such as report.pdf and report (1).pdf, or two folders may contain notes.txt. Your goal is not yet to write a program. Your goal is to invent a careful hand procedure that a classmate could follow to list possible duplicate base names. This trains decomposition and pattern recognition before syntax. We will ignore deep content comparison for now. We only compare names as people see them in File Explorer. That is an abstraction choice: names first, file bytes later.',
          bodyZh:
            '这是一个对初学者友好的 Windows 问题。你把几份报告下载到 C:\\Users\\你\\Downloads。有些文件可能同名但后缀不同，例如 report.pdf 与 report (1).pdf，也可能两个文件夹里都有 notes.txt。你的目标还不是写程序。目标是发明一套细心的手工流程，让同学也能照着列出可能重复的基本名。这在语法之前训练分解与模式识别。我们暂时忽略深入比较文件内容。只比较人们在文件资源管理器里看到的名字。这是一种抽象选择：先名字，后字节。',
          keywords: [
            { en: 'Duplicate', zh: '重复项' },
            { en: 'File name', zh: '文件名' },
          ],
        },
        {
          id: 'ch-a-algorithms-worked-steps',
          layout: 'text',

          titleEn: 'Hand Steps Before Pseudocode',
          titleZh: '伪代码之前的手工步骤',
          illustration: 'files',
          bodyEn:
            'One workable hand method looks like this. OPEN File Explorer and go to the target folder. SORT files by name so similar names sit together. MAKE an empty list called seenNames on paper. FOR each file, READ its name. IF the name is already in seenNames THEN WRITE it into a duplicates list ELSE ADD it to seenNames. After the last file, REPORT the duplicates list, or REPORT “none found.” Notice sequence at the start, a loop over files, and a choice inside the loop. Also notice the finish: the loop ends when files end, then you report. You could sort a folder of class photos the same way: sort by name or date, walk top to bottom, and decide keep or move for each item.',
          bodyZh:
            '一套可行的手工方法如下。OPEN 文件资源管理器并进入目标文件夹。按名称 SORT 文件，让相似名字靠在一起。在纸上 MAKE 一个空列表叫 seenNames。FOR 每个文件，READ 它的名称。IF 名称已在 seenNames 中 THEN 把它 WRITE 进 duplicates 列表 ELSE 把它 ADD 进 seenNames。最后一个文件之后，REPORT duplicates 列表，或 REPORT “未发现”。注意开头的顺序、对文件的循环，以及循环里的选择。也注意结束：文件走完循环就结束，然后报告。整理一文件夹课堂照片也可以同样做：按名称或日期排序，从上到下走，对每一项决定保留或移走。',
          bullets: [
            {
              en: 'OPEN folder → SORT by name → walk each file.',
              zh: 'OPEN 文件夹 → 按名称 SORT → 逐个文件走查。',
            },
            {
              en: 'IF name seen before THEN mark duplicate.',
              zh: 'IF 名称见过 THEN 标记为重复。',
            },
            {
              en: 'REPORT the result so the plan has an output.',
              zh: 'REPORT 结果，让计划有输出。',
            },
            {
              en: 'Same shape works for sorting keep-or-move decisions.',
              zh: '同样形状也适用于保留或移走的整理决策。',
            },
          ],
        },
        {
          id: 'ch-a-algorithms-example',
          layout: 'text',

          titleEn: 'Pseudocode for the Duplicate Check',
          titleZh: '查重的伪代码',
          illustration: 'code',
          bodyEn:
            'Now rewrite the hand method as pseudocode you could later automate. Stay tool-light. Do not invent perfect Python yet. The verbs should still sound like actions a person or a script could perform. After you write it, pick two sample files that collide and one that does not, then trace the lines. Tracing will show whether your IF compares the full name, the base name without (1), or the extension. Those details are design choices. Write them down. Silent choices become silent bugs.',
          bodyZh:
            '现在把手工方法改写成以后可自动化的伪代码。保持工具轻量。先不要发明完美的 Python。动词听起来仍应像人或脚本能执行的动作。写完后，选两个会冲突的样例文件和一个不会冲突的，然后逐行演练。演练会暴露你的 IF 比较的是全名、去掉 (1) 的基本名，还是扩展名。这些细节是设计选择。写下来。沉默的选择会变成沉默的漏洞。',
          bullets: [
            {
              en: 'OPEN folder C:\\Users\\You\\Downloads',
              zh: 'OPEN 文件夹 C:\\Users\\你\\Downloads',
            },
            {
              en: 'SET seenNames to empty; SET duplicates to empty',
              zh: 'SET seenNames 为空；SET duplicates 为空',
            },
            {
              en: 'FOR each file in folder:',
              zh: 'FOR 文件夹中的每个文件：',
            },
            {
              en: '    READ name',
              zh: '    READ 名称',
            },
            {
              en: '    IF name is in seenNames THEN ADD name to duplicates',
              zh: '    IF 名称在 seenNames 中 THEN ADD 名称到 duplicates',
            },
            {
              en: '    ELSE ADD name to seenNames',
              zh: '    ELSE ADD 名称到 seenNames',
            },
            {
              en: 'REPORT duplicates',
              zh: 'REPORT duplicates',
            },
          ],
          noteEn: 'Later tools change; this plan stays useful.',
          noteZh: '以后工具会变；这份计划仍然有用。',
        },
        {
          id: 'ch-a-algorithms-trace',
          layout: 'text',

          titleEn: 'Trace Before You Trust',
          titleZh: '先演练，再相信',
          illustration: 'environment',
          bodyEn:
            'Tracing means walking one sample input through every line by hand and writing the values of your lists after each step. Start with an empty folder: the loop should do nothing and report none. Try one file: seenNames grows, duplicates stays empty. Try two files with the same name from different subfolders if your plan includes subfolders; if it does not, say so. Ask about permission errors and read-only USB drives. Fixing the plan on paper is cheaper than debugging a half-written script in Cursor. Make tracing a habit before every lab that renames, deletes, or moves files.',
          bodyZh:
            '演练意味着用手把一个样例输入走完每一行，并在每一步后写下列表的值。从空文件夹开始：循环应什么都不做并报告无。试一个文件：seenNames 变长，duplicates 仍空。若计划包含子文件夹，再试不同子文件夹里的两个同名文件；若不包含，就写明。问问权限错误和只读 U 盘会怎样。在纸上修正计划，比在 Cursor 里调试写到一半的脚本更便宜。凡是会重命名、删除或移动文件的实验，都先养成演练习惯。',
          bullets: [
            {
              en: 'Empty folder, one file, two colliding names.',
              zh: '空文件夹、一个文件、两个冲突名。',
              keywords: [{ en: 'Trace', zh: '演练 / 跟踪' }],
            },
            {
              en: 'Write list values after each line on paper.',
              zh: '每行之后在纸上写下列表的值。',
            },
            {
              en: 'Ask: missing folder, no permission, read-only media?',
              zh: '问：文件夹缺失、无权限、只读介质？',
            },
            {
              en: 'Revise pseudocode before real code.',
              zh: '在真实代码前修订伪代码。',
            },
            {
              en: 'Never skip tracing for delete or rename plans.',
              zh: '删除或重命名计划绝不要跳过演练。',
            },
          ],
        },
        {
          id: 'ch-a-algorithms-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'terminal',
          bodyEn:
            'Write pseudocode for a disk-space warning, then optionally verify real values with Settings or PowerShell. Keep the plan finite and include an ELSE path.',
          bodyZh:
            '为磁盘空间警告写伪代码，然后可选地用设置或 PowerShell 验证真实数值。保持计划有限，并包含 ELSE 路径。',
          bullets: [
            {
              en: 'Open Notepad and title the note disk-check-plan.',
              zh: '打开记事本，把笔记标题设为 disk-check-plan。',
            },
            {
              en: 'Write: OPEN Settings Storage or OPEN PowerShell.',
              zh: '写：OPEN 设置中的存储，或 OPEN PowerShell。',
            },
            {
              en: 'Write: READ free space on C:',
              zh: '写：READ C: 的剩余空间。',
            },
            {
              en: 'Write: IF free space < 5 GB THEN WARN else REPORT OK.',
              zh: '写：IF 剩余空间 < 5 GB THEN 警告，否则 REPORT 正常。',
            },
            {
              en: 'Optional check: Win + I → System → Storage.',
              zh: '可选验证：Win + I → 系统 → 存储。',
              keywords: [{ en: 'Settings', zh: '设置' }],
            },
            {
              en: 'Optional check: Get-PSDrive C in PowerShell.',
              zh: '可选验证：在 PowerShell 运行 Get-PSDrive C。',
              keywords: [{ en: 'PowerShell', zh: 'PowerShell' }],
            },
          ],
        },
      ],
    },
    {
      id: 'check-in',
      titleEn: 'From Plan to Practice',
      titleZh: '从计划到练习',
      slides: [
        {
          id: 'ch-a-algorithms-to-tools',
          layout: 'text',

          titleEn: 'When Plans Become Tools',
          titleZh: '计划何时变成工具',
          illustration: 'terminal',
          bodyEn:
            'Later chapters will give you PowerShell commands and Python syntax. Those tools do not replace algorithms; they implement them. If your pseudocode says FOR each .txt file IF name has space THEN REPLACE with _, a future script is only a translation. If the pseudocode is vague, no tool will save you. Keep a small folder of plans under C:\\Users\\You\\projects\\notes\\algorithms if you like. Name files after the job, not after the language. When you learn a new command, return to an old plan and rewrite only the lines that become concrete.',
          bodyZh:
            '后面章节会给你 PowerShell 命令与 Python 语法。那些工具不能取代算法；它们实现算法。如果你的伪代码写着 FOR 每个 .txt 文件 IF 名称含空格 THEN 换成 _，未来的脚本只是翻译。如果伪代码含糊，没有工具能救你。若你愿意，可在 C:\\Users\\你\\projects\\notes\\algorithms 下保留一个小计划文件夹。用任务命名文件，而不是用语言命名。学会新命令时，回到旧计划，只改写成具体的那些行。',
          bullets: [
            {
              en: 'Tools implement plans; they do not invent goals.',
              zh: '工具实现计划，并不发明目标。',
            },
            {
              en: 'Store plans by task name under your notes folder.',
              zh: '按任务名把计划存在笔记文件夹里。',
            },
          ],
        },
        {
          id: 'ch-a-algorithms-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'These mistakes turn a neat plan into an unreliable one. Watch for them in your own notes and in lab partners’ drafts.',
          bodyZh:
            '这些错误会把整齐的计划变成不可靠的计划。在自己的笔记和同伴草稿里留意它们。',
          bullets: [
            {
              en: 'Skipping the finish condition so a loop never ends.',
              zh: '漏写结束条件，导致循环永不结束。',
            },
            {
              en: 'Mixing real Python syntax into early pseudocode.',
              zh: '过早把真实 Python 语法混进伪代码。',
            },
            {
              en: 'Writing steps that depend on luck (“somehow it works”).',
              zh: '写出依赖运气的步骤（“反正会好”）。',
            },
            {
              en: 'Forgetting ELSE, so the false path is undefined.',
              zh: '忘记 ELSE，使假分支未定义。',
            },
            {
              en: 'Packing five jobs into one step with no decomposition.',
              zh: '把五件事塞进一步，没有分解。',
            },
            {
              en: 'Tracing only the happy path and ignoring empty folders.',
              zh: '只演练顺利路径，忽略空文件夹。',
            },
          ],
        },
        {
          id: 'ch-a-algorithms-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn:
            'Answer in short sentences concrete enough that a classmate could follow them. Then compare with the note.',
          bodyZh: '用短句作答，具体到同学也能照着做。再对照提示。',
          bullets: [
            {
              en: 'What three qualities make steps an algorithm?',
              zh: '哪三个性质让一组步骤成为算法？',
            },
            {
              en: 'How do algorithm, pseudocode, and code differ?',
              zh: '算法、伪代码与代码有何不同？',
            },
            {
              en: 'Write one IF line: file missing → show error.',
              zh: '写一行 IF：文件不存在 → 显示错误。',
            },
            {
              en: 'In the duplicate-name plan, where are sequence, choice, and loop?',
              zh: '在查重计划里，顺序、选择与循环各在哪里？',
            },
            {
              en: 'Why trace an empty folder before coding a cleanup script?',
              zh: '为什么写清理脚本前要先演练空文件夹？',
            },
          ],
          noteEn:
            'Answers: ordered + clear + finite; idea vs structured words vs real syntax; IF file not found THEN show error; open/sort then IF inside FOR then report; empty folder proves the loop can finish with no work and no crash.',
          noteZh:
            '参考答案：有序+清楚+有限；想法 vs 结构化文字 vs 真实语法；IF 找不到文件 THEN 显示错误；打开/排序是顺序，FOR 内 IF 是选择与循环，最后报告；空文件夹证明循环可在无工作且不崩溃的情况下结束。',
        },
      ],
    },
  ],
}
