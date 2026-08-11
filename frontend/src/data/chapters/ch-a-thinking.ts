import type { Chapter } from '../../types/course'

export const chAThinking: Chapter = {
  id: 'computational-thinking',
  titleEn: 'Computational Thinking',
  titleZh: '计算思维',
  summaryEn:
    'Break problems into steps a computer can follow: decompose, abstract, find patterns, and write algorithms with clear inputs and outputs.',
  summaryZh:
    '把问题拆成计算机能执行的步骤：分解、抽象、找模式，并用清晰的输入与输出写出算法。',
  sections: [
    {
      id: 'thinking-like-a-computer',
      titleEn: 'Thinking Like a Computer',
      titleZh: '像计算机一样思考',
      slides: [
        {
          id: 'ch-a-thinking-title',
          layout: 'title',

          titleEn: 'Part A · Computational Thinking',
          titleZh: '篇章 A · 计算思维',
          subtitleEn: 'Clear steps before you write any code',
          subtitleZh: '写代码之前，先想清楚步骤',
          illustration: 'title',
          keywords: [
            { en: 'Computational Thinking', zh: '计算思维' },
            { en: 'Problem Solving', zh: '问题解决' },
            { en: 'Algorithm', zh: '算法' },
          ],
        },
        {
          id: 'ch-a-thinking-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'This chapter is about planning quality. You will practice habits you can use on Windows tasks even before Python. By the end you should name four core habits, turn a daily folder task into ordered steps, and identify inputs, process, and outputs in plain language. Use the final check-in as proof that the habits are usable, not merely memorized.',
          bodyZh:
            '本章重点是规划质量。你会练习一些习惯，即使还没学 Python，也能用在 Windows 任务上。学完后，你应能说出四种核心习惯，把日常文件夹任务写成有序步骤，并用白话分清输入、处理与输出。用章末自测证明这些习惯可用，而不是只被背诵。',
          bullets: [
            {
              en: 'Name four habits: decompose, abstract, pattern, algorithm.',
              zh: '说出四种习惯：分解、抽象、模式、算法。',
              keywords: [
                { en: 'Decomposition', zh: '分解' },
                { en: 'Abstraction', zh: '抽象' },
              ],
            },
            {
              en: 'Turn a daily Windows task into ordered, checkable steps.',
              zh: '把日常 Windows 任务写成有序且可检查的步骤。',
            },
            {
              en: 'Identify inputs, process, and outputs in plain language.',
              zh: '用白话分清输入、处理与输出。',
              keywords: [
                { en: 'Input', zh: '输入' },
                { en: 'Output', zh: '输出' },
              ],
            },
            {
              en: 'Spot vague steps that still depend on guessing.',
              zh: '找出仍然依赖猜测的模糊步骤。',
            },
            {
              en: 'Explain why computers need exact instructions.',
              zh: '解释为什么计算机需要精确指令。',
            },
          ],
        },
        {
          id: 'ch-a-thinking-what',
          layout: 'text',

          titleEn: 'What Is Computational Thinking?',
          titleZh: '什么是计算思维？',
          illustration: 'code',
          bodyEn:
            'Computational thinking is a way to solve problems with clear, repeatable steps that a person—and later a computer—can follow. It is not the same as memorizing language syntax. You practice it when you decide what matters, what can wait, and what must happen first. Computers need exact instructions, so vague wishes like “make it nice” or “fix my homework folder” are not enough. On Windows, the same habit shows up when you plan a File Explorer cleanup before clicking randomly through Downloads. Think of this chapter as training the planning muscle that Python will later obey.',
          bodyZh:
            '计算思维是一种用清晰、可重复步骤解决问题的方法，这些步骤人能跟随，以后计算机也能跟随。它不等于背一门语言的语法。当你决定什么重要、什么可以稍后、什么必须先做时，你就已经在练习。计算机需要精确指令，所以“弄好看一点”或“整理一下作业文件夹”这类模糊愿望不够用。在 Windows 上，同一习惯表现为：先规划文件资源管理器清理，再随机点进“下载”。把本章当作训练规划肌肉；以后 Python 才会服从这块肌肉。',
          keywords: [
            { en: 'Computational Thinking', zh: '计算思维' },
            { en: 'Exact Instructions', zh: '精确指令' },
          ],
          noteEn: 'Think first, then type.',
          noteZh: '先想清楚，再动手敲。',
        },
        {
          id: 'ch-a-thinking-not-coding',
          layout: 'text',

          titleEn: 'Thinking Is Not Yet Coding',
          titleZh: '思维还不是写代码',
          illustration: 'code',
          bodyEn:
            'Students sometimes believe that opening an editor is the start of real work. In class, the expensive mistakes usually happen earlier: wrong goal, missing input, no done check. Computational thinking pushes those decisions onto paper or Notepad first. You can practice on a Windows PC with zero Python installed. If your plan still says “sort of organize the files,” the editor cannot rescue you. If your plan names source path, destination path, and a count of moved files, almost any later tool becomes easier to learn because the job is already sharp.',
          bodyZh:
            '有些学生以为打开编辑器才算真正开始。课堂上昂贵的错误通常更早发生：目标错了、输入缺失、没有完成标准。计算思维把这些决定先推到纸面或记事本。即使尚未安装 Python，你也能在 Windows 上练习。若计划仍写着“差不多整理一下文件”，编辑器救不了你。若计划写明源路径、目标路径与移动文件数量，几乎任何后续工具都更好学，因为任务本身已经锋利。',
          bullets: [
            {
              en: 'Planning quality limits coding quality.',
              zh: '规划质量限制编码质量。',
            },
            {
              en: 'You can practice with File Explorer and Notepad only.',
              zh: '可以只用文件资源管理器与记事本练习。',
            },
            {
              en: 'A sharp job description makes later syntax lessons stick.',
              zh: '锋利的任务描述让后面的语法课更易记住。',
            },
          ],
        },
        {
          id: 'ch-a-thinking-four',
          layout: 'text',

          titleEn: 'Four Useful Habits Working Together',
          titleZh: '四种一起发挥作用的习惯',
          illustration: 'code',
          bodyEn:
            'These four habits work as a set, not as isolated slogans. Decomposition makes a big job manageable. Abstraction hides detail you do not need yet. Pattern recognition reuses what already worked. An algorithm is the ordered plan that can finish for normal cases. When a Windows task feels overwhelming, ask which habit you skipped. Often you tried to write an algorithm without decomposing, or you drowned in detail because you refused to abstract. Returning to the missing habit is faster than restarting from panic.',
          bodyZh:
            '这四种习惯是一套，而不是孤立口号。分解让大任务变得可控；抽象先藏起此刻不需要的细节；模式识别复用已经有效的做法；算法则是对正常情况能做完的有序计划。当 Windows 任务显得压人时，问问自己跳过了哪种习惯。常见情况是：还没分解就写算法，或拒绝抽象而被细节淹没。回到缺失的习惯，比从恐慌中重来更快。',
          bullets: [
            {
              en: 'Decompose: split a big job into smaller jobs.',
              zh: '分解：把大任务拆成小任务。',
              keywords: [{ en: 'Decomposition', zh: '分解' }],
            },
            {
              en: 'Abstract: hide details you do not need right now.',
              zh: '抽象：先隐藏此刻不需要的细节。',
              keywords: [{ en: 'Abstraction', zh: '抽象' }],
            },
            {
              en: 'Pattern: reuse steps that already worked.',
              zh: '模式：复用已经有效的步骤。',
              keywords: [{ en: 'Pattern', zh: '模式' }],
            },
            {
              en: 'Algorithm: write an ordered plan that finishes.',
              zh: '算法：写出能做完的有序计划。',
              keywords: [{ en: 'Algorithm', zh: '算法' }],
            },
          ],
        },
        {
          id: 'ch-a-thinking-decompose',
          layout: 'text',

          titleEn: 'Decomposition in Depth',
          titleZh: '深入：分解',
          illustration: 'environment',
          bodyEn:
            'Decomposition asks: what smaller jobs must succeed before the big goal can succeed? A goal like “prepare for tomorrow’s lab” is too large to execute. Smaller jobs might be: confirm the project folder path, open Cursor on that folder, run one command from PowerShell, copy the error text into Notepad, and stop. Each small job needs a done test you can observe. “Feel ready” is not a done test. “PowerShell printed the folder path that matches File Explorer” is a done test. If a step still contains the word somehow, split it again.',
          bodyZh:
            '分解要问：在大目标成功之前，哪些更小的任务必须先成功？“准备明天的实验课”这类目标太大，无法直接执行。更小任务可能是：确认项目文件夹路径、在该文件夹打开 Cursor、从 PowerShell 运行一条命令、把报错文本复制进记事本、然后停止。每个小任务都需要可观察的完成标准。“感觉准备好了”不是完成标准。“PowerShell 打印的路径与文件资源管理器一致”才是。若某一步仍含“想办法/差不多”，就再拆一次。',
          bullets: [
            {
              en: 'Big goals hide many unstated sub-jobs.',
              zh: '大目标里藏着许多未说出的子任务。',
              keywords: [{ en: 'Decomposition', zh: '分解' }],
            },
            {
              en: 'Each sub-job needs an observable done check.',
              zh: '每个子任务都需要可观察的完成检查。',
            },
            {
              en: 'Stop splitting when a step is small enough to do without guessing.',
              zh: '当一步已小到不用猜就能做时，停止再拆。',
            },
            {
              en: 'Write the sub-jobs as a numbered list before clicking around.',
              zh: '四处点击之前，先把子任务写成编号列表。',
            },
          ],
        },
        {
          id: 'ch-a-thinking-abstract',
          layout: 'text',

          titleEn: 'Abstraction in Depth',
          titleZh: '深入：抽象',
          illustration: 'interface',
          bodyEn:
            'Abstraction is the skill of hiding detail that does not help the current decision. When you say “save the report,” you ignore magnetic patterns on the disk. When you say “open the project folder,” you may ignore which NTFS features Windows uses underneath. Beginners often abstract too late: they drown in font colors, wallpaper, and unrelated settings while the real job is “copy three files to week01.” Good abstraction keeps the interfaces you need—path, filename, success message—and parks the rest for later chapters. Bad abstraction hides something you actually need, such as which drive letter holds your USB.',
          bodyZh:
            '抽象是把无助于当前决策的细节先藏起来的技能。当你说“保存报告”时，你忽略磁盘上的磁信号细节。当你说“打开项目文件夹”时，你可能忽略 Windows 底层用了哪些 NTFS 特性。初学者常常抽象太晚：真正任务是“把三个文件复制到 week01”，却淹没在字体颜色、壁纸与无关设置里。好的抽象保留你需要的接口——路径、文件名、成功提示——把其余留给后面章节。坏的抽象会藏起你其实需要的东西，例如 U 盘在哪个盘符。',
          bullets: [
            {
              en: 'Hide detail that does not change today’s decision.',
              zh: '隐藏不改变今天决策的细节。',
              keywords: [{ en: 'Abstraction', zh: '抽象' }],
            },
            {
              en: 'Keep the names you must act on: paths, files, counts, messages.',
              zh: '保留必须据以行动的名称：路径、文件、数量、提示。',
            },
            {
              en: 'Do not hide a fact you still need, such as the correct drive letter.',
              zh: '不要藏起你仍需要的事实，例如正确的盘符。',
            },
          ],
        },
        {
          id: 'ch-a-thinking-pattern',
          layout: 'text',

          titleEn: 'Pattern Recognition in Depth',
          titleZh: '深入：模式识别',
          illustration: 'code',
          bodyEn:
            'Pattern recognition asks whether this problem resembles one you already solved. Renaming lab1, lab2, and lab3 is the same shape repeated with different numbers. Copying photos from a camera folder into dated folders is another repeating shape. On Windows, once you notice the shape, you can write one careful procedure and reuse it, later with PowerShell or Python. Patterns also appear in errors: “file not found” after a folder change is a family of mistakes, not twenty unique disasters. Collecting patterns reduces panic and shortens future plans.',
          bodyZh:
            '模式识别要问：这个问题是否像你已经解决过的？重命名 lab1、lab2、lab3，是同一形状换不同数字。把相机文件夹中的照片复制到按日期命名的文件夹，又是一种重复形状。在 Windows 上，一旦看出形状，你就可以写一份仔细的流程并复用，以后再用 PowerShell 或 Python。错误里也有模式：改完文件夹后出现“找不到文件”，是一类失误，而不是二十场独特灾难。收集模式能降低恐慌，并缩短未来计划。',
          bullets: [
            {
              en: 'Same steps with different names or numbers often share one pattern.',
              zh: '步骤相同、名称或数字不同，常常共享一个模式。',
              keywords: [{ en: 'Pattern', zh: '模式' }],
            },
            {
              en: 'Reuse a proven checklist before inventing a new one.',
              zh: '发明新清单之前，先复用已验证的检查单。',
            },
            {
              en: 'Group similar error messages; they often share one cause.',
              zh: '归类相似报错信息；它们常常共有一个原因。',
            },
            {
              en: 'Write the pattern in words so a teammate could follow it.',
              zh: '用文字写下模式，好让队友也能跟随。',
            },
          ],
        },
        {
          id: 'ch-a-thinking-algorithm-habit',
          layout: 'text',

          titleEn: 'Algorithm as a Finishable Plan',
          titleZh: '算法：能做完的计划',
          illustration: 'python',
          bodyEn:
            'In this chapter, algorithm means an ordered plan that finishes for normal inputs. It is not yet a fancy math proof. The plan must say what to do first, what to do next, how to choose when there are branches, and how to know you are done. “Organize my Desktop someday” is not an algorithm. “For each .pdf on the Desktop, move it into C:\\Users\\YourName\\Documents\\pdfs, then count how many moved” is closer. The next chapter deepens algorithms and pseudocode. Here, demand only that your plan could be followed by a careful classmate without telepathy.',
          bodyZh:
            '在本章，算法指对正常输入能够结束的有序计划。它还不是高深的数学证明。计划必须说明先做什么、再做什么、有分支时如何选择，以及如何知道已经完成。“哪天整理一下桌面”不是算法。“对桌面上每个 .pdf，把它移到 C:\\Users\\你的用户名\\Documents\\pdfs，然后统计移动了多少”更接近。下一章会加深算法与伪代码。这里只要求：细心的同学不用读心术也能跟着做。',
          keywords: [
            { en: 'Algorithm', zh: '算法' },
            { en: 'Finish Condition', zh: '结束条件' },
          ],
        },
      ],
    },
    {
      id: 'inputs-and-steps',
      titleEn: 'Inputs, Steps, Outputs',
      titleZh: '输入、步骤、输出',
      slides: [
        {
          id: 'ch-a-thinking-io',
          layout: 'text',

          titleEn: 'Inputs, Process, and Outputs',
          titleZh: '输入、处理与输出',
          illustration: 'files',
          bodyEn:
            'Every useful process has something that goes in and something that comes out. Naming them early prevents half-finished work. On Windows, an input might be a photo path, a folder path, a typed number, or a click on a selected file. The process is the ordered change you intend to apply. The output is the smaller photo, the renamed file, a new folder, or a message you can read in PowerShell. If you cannot name the output, you do not yet know what “done” means. If you cannot name the input, you do not know what the process should read.',
          bodyZh:
            '每个有用的流程都有“进去的东西”和“出来的结果”。尽早命名它们，能避免做到一半才发现目标不清。在 Windows 上，输入可能是照片路径、文件夹路径、键入的数字，或对已选文件的一次点击。处理是你打算施加的有序变化。输出是更小的照片、重命名后的文件、新文件夹，或你能在 PowerShell 里读到的提示。若说不清输出，就还不知道“完成”是什么。若说不清输入，就不知道处理应读取什么。',
          bullets: [
            {
              en: 'Input: what you give the process (file, click, number, path).',
              zh: '输入：你交给流程的东西（文件、点击、数字、路径）。',
              keywords: [{ en: 'Input', zh: '输入' }],
            },
            {
              en: 'Process: the ordered steps that change the input.',
              zh: '处理：改变输入的有序步骤。',
              keywords: [{ en: 'Process', zh: '处理' }],
            },
            {
              en: 'Output: the result you can see, save, or count.',
              zh: '输出：你能看见、保存或计数的结果。',
              keywords: [{ en: 'Output', zh: '输出' }],
            },
            {
              en: 'Done check: how you prove the output matches the goal.',
              zh: '完成检查：如何证明输出符合目标。',
            },
          ],
          noteEn: 'Example: photo in → resize → smaller photo out.',
          noteZh: '例如：照片进 → 缩放 → 更小的照片出。',
        },
        {
          id: 'ch-a-thinking-io-windows',
          layout: 'text',

          titleEn: 'Worked Example: Copy With IPO Labels',
          titleZh: '示例：用 IPO 标注一次复制',
          illustration: 'files',
          bodyEn:
            'Task: copy report.txt from Downloads into your course folder. Input: the existing file C:\\Users\\YourName\\Downloads\\report.txt. Process: open File Explorer, select the file, copy, open C:\\Users\\YourName\\Documents\\teaching-projects\\week01, paste. Output: a new file C:\\Users\\YourName\\Documents\\teaching-projects\\week01\\report.txt, while the original still exists in Downloads. Done check: both paths show report.txt in File Explorer, and the week01 copy opens with the expected text. Notice how labeling IPO exposes missing pieces. If week01 does not exist yet, create-folder becomes its own prior step. If two report.txt files already exist, rename rules become part of the process.',
          bodyZh:
            '任务：把 report.txt 从“下载”复制到课程文件夹。输入：已有文件 C:\\Users\\你的用户名\\Downloads\\report.txt。处理：打开文件资源管理器、选中文件、复制、打开 C:\\Users\\你的用户名\\Documents\\teaching-projects\\week01、粘贴。输出：新文件 C:\\Users\\你的用户名\\Documents\\teaching-projects\\week01\\report.txt，同时原文件仍在“下载”。完成检查：两条路径下都能在文件资源管理器看到 report.txt，且 week01 中的副本打开后文字符合预期。注意：标注 IPO 会暴露缺失。若 week01 尚不存在，创建文件夹应成为更早的一步。若已有两个 report.txt，重命名规则就要写进处理。',
          keywords: [
            { en: 'IPO', zh: '输入-处理-输出' },
            { en: 'File Explorer', zh: '文件资源管理器' },
          ],
        },
        {
          id: 'ch-a-thinking-binary',
          layout: 'text',

          titleEn: 'Representation: Why Format Still Matters',
          titleZh: '表示：为什么格式仍然重要',
          illustration: 'hardware',
          bodyEn:
            'Computers store everything as bits: 0 and 1. Text, images, and apps are different representations of those bits. You rarely type bits by hand, but many Windows surprises are really representation problems: the wrong extension, the wrong encoding, or a file that is not the kind of data a program expected. Computational thinking includes asking what kind of thing you are handing the next step. A .txt path is not a folder path. A screenshot .png is not a Python program. Naming the representation early prevents plans that sound right and fail immediately.',
          bodyZh:
            '计算机用比特存储一切：0 与 1。文字、图片与应用是这些比特的不同表示。你很少亲手敲比特，但很多 Windows 意外其实是表示问题：扩展名不对、编码不对，或文件并不是程序期望的那种数据。计算思维也包括追问：你交给下一步的是哪种东西。.txt 路径不是文件夹路径。截图 .png 不是 Python 程序。尽早说出表示类型，能避免计划听起来对、一做就失败。',
          bullets: [
            {
              en: 'Everything stored digitally is built from bits.',
              zh: '所有数字化存储都由比特构成。',
              keywords: [{ en: 'Bit', zh: '比特' }],
            },
            {
              en: 'Different formats interpret the same bits differently.',
              zh: '不同格式会以不同方式解释同样的比特。',
              keywords: [{ en: 'Representation', zh: '表示' }],
            },
            {
              en: 'Wrong format often looks like a mysterious tool error.',
              zh: '格式不对常常表现为神秘的工具报错。',
            },
            {
              en: 'State the file kind in your plan: text, image, folder, or program.',
              zh: '在计划里写明文件种类：文本、图片、文件夹或程序。',
            },
          ],
        },
        {
          id: 'ch-a-thinking-decompose-example',
          layout: 'text',

          titleEn: 'Example: Decompose a Study Task',
          titleZh: '例子：分解一个学习任务',
          illustration: 'environment',
          bodyEn:
            'Return to “prepare for tomorrow’s lab.” After decomposition, a student plan might read: (1) confirm the course folder exists at C:\\Users\\YourName\\Documents\\teaching-projects\\week02, (2) open that folder in File Explorer, (3) open the same folder in Cursor, (4) open PowerShell and use cd to enter that path, (5) run one teacher-provided command, (6) paste the full output into lab-notes.txt, (7) stop even if the command failed. Each line is small enough to finish. Failure is allowed as long as it is captured. That is computational thinking under exam-week stress: shrink the job until honesty is possible.',
          bodyZh:
            '回到“准备明天的实验课”。分解后，一份学生计划可能是：(1) 确认课程文件夹存在于 C:\\Users\\你的用户名\\Documents\\teaching-projects\\week02，(2) 在文件资源管理器打开该文件夹，(3) 在 Cursor 打开同一文件夹，(4) 打开 PowerShell 并用 cd 进入该路径，(5) 运行一条教师提供的命令，(6) 把完整输出粘贴进 lab-notes.txt，(7) 即使命令失败也停止。每一行都小到能做完。允许失败，只要被记录。这就是考试周压力下的计算思维：把任务缩小到可以诚实完成。',
          bullets: [
            {
              en: 'Big goal: prepare for tomorrow’s lab.',
              zh: '大目标：准备明天的实验课。',
            },
            {
              en: 'Smaller jobs name tools, paths, and artifacts.',
              zh: '更小任务要写明工具、路径与产物。',
            },
            {
              en: 'Capturing an error can be a valid done check.',
              zh: '记录报错也可以是有效的完成标准。',
            },
            {
              en: 'Stopping on purpose beats endless random clicking.',
              zh: '有意识地停止，胜过无尽随机点击。',
            },
          ],
        },
        {
          id: 'ch-a-thinking-try',
          layout: 'steps',
          titleEn: 'Try It on Windows: Plan a Folder Task',
          titleZh: '在 Windows 上试一试：规划文件夹任务',
          illustration: 'files',
          bodyEn:
            'Practice the plan before writing code. Use File Explorer and Notepad only. Choose a real folder you are allowed to change, such as a practice folder you create yourself.',
          bodyZh:
            '先练习计划，再写代码。只用文件资源管理器与记事本。选择一个你有权修改的真实文件夹，例如你自己新建的练习文件夹。',
          bullets: [
            {
              en: 'Press Win + E and create C:\\Users\\YourName\\Documents\\ct-practice if needed.',
              zh: '按 Win + E，必要时创建 C:\\Users\\你的用户名\\Documents\\ct-practice。',
              keywords: [{ en: 'File Explorer', zh: '文件资源管理器' }],
            },
            {
              en: 'Put two sample files inside it, or note two existing safe files to copy.',
              zh: '在其中放入两个示例文件，或记下两个可安全复制的现有文件。',
            },
            {
              en: 'Open Notepad and title the note IPO Plan.',
              zh: '打开记事本，标题写 IPO Plan。',
            },
            {
              en: 'Write Input: full source paths. Write Output: full destination paths.',
              zh: '写 Input：完整源路径。写 Output：完整目标路径。',
            },
            {
              en: 'Write 5 to 8 numbered process steps: find → copy → rename → move → check.',
              zh: '写出 5 到 8 个编号处理步骤：查找 → 复制 → 重命名 → 移动 → 检查。',
            },
            {
              en: 'Mark which habit each step uses: decompose, abstract, pattern, or algorithm.',
              zh: '标出每一步主要用了哪种习惯：分解、抽象、模式或算法。',
            },
            {
              en: 'Circle any step that still depends on guessing; rewrite circled steps.',
              zh: '圈出仍然依赖猜测的步骤；重写被圈出的步骤。',
            },
            {
              en: 'Only after the note is clear, perform the steps once in File Explorer.',
              zh: '只有在笔记清楚之后，才在文件资源管理器里实际做一次。',
            },
          ],
          noteEn: 'Do not open a coding project yet.',
          noteZh: '先不要打开编程项目。',
        },
        {
          id: 'ch-a-thinking-second-example',
          layout: 'text',

          titleEn: 'Second Worked Example: Rename Homework Photos',
          titleZh: '第二示例：重命名作业照片',
          bodyEn:
            'Wish: “rename my homework photos so they are less messy.” Computational version: Input is every .jpg in C:\\Users\\YourName\\Pictures\\homework-raw. Process is: sort by date taken, rename each file to homework-01.jpg, homework-02.jpg, and so on, then move the renamed files into C:\\Users\\YourName\\Documents\\teaching-projects\\week02\\photos. Output is a numbered set of images in the week02 photos folder. Pattern: the same rename-and-move shape will reappear for PDFs next month. Abstraction: ignore camera brand settings while renaming. Algorithm: the ordered rename rules plus the final count check. If two photos share a timestamp, your plan must say what to do; silence here is a planning bug.',
          bodyZh:
            '愿望：“把作业照片重新命名，别那么乱。”计算版：输入是 C:\\Users\\你的用户名\\Pictures\\homework-raw 中每个 .jpg。处理是：按拍摄日期排序，依次重命名为 homework-01.jpg、homework-02.jpg……，再把重命名后的文件移到 C:\\Users\\你的用户名\\Documents\\teaching-projects\\week02\\photos。输出是 week02 照片文件夹中一组编号图片。模式：下个月处理 PDF 时还会出现同一套“重命名并移动”形状。抽象：重命名时忽略相机品牌设置。算法：有序重命名规则加上最终计数检查。若两张照片时间戳相同，计划必须说明怎么办；此处沉默就是规划缺陷。',
          keywords: [
            { en: 'Pattern', zh: '模式' },
            { en: 'Algorithm', zh: '算法' },
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
          id: 'ch-a-thinking-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'Most planning failures look like coding failures later. Catch them while the plan is still in Notepad. Each mistake below is cheaper to fix on paper than after you have clicked through half of File Explorer.',
          bodyZh:
            '多数规划失败，到后来会看起来像编码失败。趁计划还在记事本里时抓住它们。下面每个错误，在纸上修都比在文件资源管理器点到一半再修更便宜。',
          bullets: [
            {
              en: 'Jumping into tools before naming inputs and outputs.',
              zh: '还没说清输入输出就直接打开工具。',
            },
            {
              en: 'Writing vague steps like “fix it” with no check.',
              zh: '写“修好它”这类没有检查标准的模糊步骤。',
            },
            {
              en: 'Trying to solve everything in one giant step.',
              zh: '试图用一个巨大步骤解决所有事。',
            },
            {
              en: 'Hiding a needed detail, such as the drive letter, under false abstraction.',
              zh: '用错误的抽象藏起仍需要的细节，例如盘符。',
            },
            {
              en: 'Treating every new file task as unique when a known pattern fits.',
              zh: '明明已有模式可用，却把每个新文件任务都当成独一无二。',
            },
            {
              en: 'Calling a wish an algorithm because it uses technical words.',
              zh: '只因用了术语，就把愿望称作算法。',
            },
          ],
        },
        {
          id: 'ch-a-thinking-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn:
            'Use short answers. Precision matters more than length. Compare with the note only after you write your own version.',
          bodyZh:
            '用短答案即可。精确比篇幅更重要。先写自己的版本，再对照注释。',
          bullets: [
            {
              en: 'Name the four computational-thinking habits.',
              zh: '说出计算思维的四种习惯。',
            },
            {
              en: 'In a File Explorer copy: what is input, what is output?',
              zh: '在文件资源管理器复制文件时：什么是输入，什么是输出？',
            },
            {
              en: 'Why do computers need exact steps?',
              zh: '为什么计算机需要精确步骤？',
            },
            {
              en: 'Give one done check for “create a week02 folder under your course home.”',
              zh: '为“在课程主目录下创建 week02 文件夹”给出一个完成检查。',
            },
            {
              en: 'Which habit are you using when you ignore camera brand settings while renaming photos?',
              zh: '重命名照片时忽略相机品牌设置，你在用哪种习惯？',
            },
          ],
          noteEn:
            'Sample answers: decompose/abstract/pattern/algorithm; source file path / new copy path; they follow instructions literally without guessing intent; File Explorer shows C:\\Users\\YourName\\Documents\\teaching-projects\\week02; abstraction.',
          noteZh:
            '参考答案：分解/抽象/模式/算法；源文件路径/新副本路径；它们严格按指令执行、不猜测意图；文件资源管理器显示 C:\\Users\\你的用户名\\Documents\\teaching-projects\\week02；抽象。',
        },
        {
          id: 'ch-a-thinking-bridge',
          layout: 'callout',
          titleEn: 'Before Algorithms and Pseudocode',
          titleZh: '进入算法与伪代码之前',
          bodyEn:
            'You now have four habits and an IPO habit you can apply on Windows without writing Python. The next chapter turns finishable plans into clearer algorithm and pseudocode form, with sequence, choice, and loops. Bring one Notepad plan from today’s try-it steps; you will rewrite it with more formal structure.',
          bodyZh:
            '你现在拥有四种习惯，以及一套不必写 Python 也能在 Windows 上使用的 IPO 习惯。下一章会把能做完的计划写成更清楚的算法与伪代码形式，并引入顺序、选择与循环。请带上今天试做步骤里的一份记事本计划；你将用更正式的结构重写它。',
          keywords: [
            { en: 'Pseudocode', zh: '伪代码' },
            { en: 'Sequence', zh: '顺序' },
          ],
        },
      ],
    },
  ],
}
