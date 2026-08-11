import type { Chapter } from '../../types/course'

export const chGDebugging: Chapter = {
  id: 'debugging-and-help',
  titleEn: 'Debugging and Getting Help',
  titleZh: '调试与求助',
  summaryEn:
    'Treat errors as evidence, isolate one cause at a time, and ask for help with clear Windows steps.',
  summaryZh:
    '把报错当证据，一次只隔离一个原因，并用清楚的 Windows 步骤去求助。',
  sections: [
    {
      id: 'errors-are-data',
      titleEn: 'Errors Are Data',
      titleZh: '报错是信息',
      slides: [
        {
          id: 'ch-g-debugging-title',
          layout: 'title',

          titleEn: 'Part G · Debugging and Getting Help',
          titleZh: '篇章 G · 调试与求助',
          subtitleEn: 'Calm method beats random clicking',
          subtitleZh: '冷静方法胜过乱点乱改',
          illustration: 'title',
          keywords: [
            { en: 'Debug', zh: '调试' },
            { en: 'Traceback', zh: '报错追踪' },
            { en: 'Reproduce', zh: '复现' },
          ],
        },
        {
          id: 'ch-g-debugging-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'By the end of this chapter you should debug small Python problems on Windows without panic, and know what details to collect before asking for help.',
          bodyZh:
            '学完本章后，你应能在 Windows 上冷静排查小型 Python 问题，并知道求助前要收集哪些信息。',
          bullets: [
            {
              en: 'Classify problems as syntax, runtime, or logic.',
              zh: '把问题归为语法、运行时或逻辑三类。',
              keywords: [
                { en: 'Syntax', zh: '语法' },
                { en: 'Runtime', zh: '运行时' },
              ],
            },
            {
              en: 'Reproduce the failure with the same command and folder.',
              zh: '用相同命令和文件夹复现失败。',
              keywords: [{ en: 'Reproduce', zh: '复现' }],
            },
            {
              en: 'Change one thing at a time, then re-test.',
              zh: '一次只改一样，再重新测试。',
            },
            {
              en: 'Write a short help request with expected vs actual result.',
              zh: '写出简短求助：期望结果与实际结果。',
            },
          ],
        },
        {
          id: 'ch-g-debugging-why',
          layout: 'text',

          titleEn: 'Why Debugging Skill Matters',
          titleZh: '为什么调试能力重要',
          bodyEn:
            'Most beginner time is not spent writing perfect code. It is spent noticing what broke, reading the message, and trying a careful next step. That habit transfers to Git errors, network failures, and real workplace tools.',
          bodyZh:
            '初学者大部分时间并不是在写完美代码，而是在发现哪里坏了、读懂提示、再试下一步。这个习惯会迁移到 Git 报错、网络故障和真实工作工具上。',
          bullets: [
            {
              en: 'Guessing randomly often creates a second bug.',
              zh: '乱猜乱改常常制造第二个 bug。',
              keywords: [{ en: 'Bug', zh: '缺陷 / Bug' }],
            },
            {
              en: 'A method lets you learn from every failure.',
              zh: '有方法时，每次失败都在积累经验。',
            },
            {
              en: 'Clear notes make teacher or classmate help faster.',
              zh: '清楚记录能让老师或同学更快帮到你。',
            },
          ],
          keywords: [
            { en: 'Method', zh: '方法' },
            { en: 'Evidence', zh: '证据' },
          ],
        },
        {
          id: 'ch-g-debugging-types',
          layout: 'text',

          titleEn: 'Three Problem Families',
          titleZh: '三类问题',
          bodyEn:
            'Naming the family first prevents wasted fixes. Syntax problems block startup. Runtime problems stop mid-run. Logic problems run cleanly but give the wrong answer.',
          bodyZh:
            '先判断问题族，能避免无效修复。语法问题阻止启动；运行时问题中途停止；逻辑问题能跑完，但答案不对。',
          bullets: [
            {
              en: 'SyntaxError: Python refuses to start the program.',
              zh: 'SyntaxError：Python 拒绝启动程序。',
              keywords: [{ en: 'SyntaxError', zh: '语法错误' }],
            },
            {
              en: 'Runtime error: it starts, then raises an exception.',
              zh: '运行时错误：能启动，然后抛出异常。',
              keywords: [{ en: 'Exception', zh: '异常' }],
            },
            {
              en: 'Logic bug: no crash, but the result is wrong.',
              zh: '逻辑错误：不崩溃，但结果错误。',
              keywords: [{ en: 'Logic Bug', zh: '逻辑错误' }],
            },
          ],
        },
        {
          id: 'ch-g-debugging-common-errors',
          layout: 'text',

          titleEn: 'Common Python Errors on Windows',
          titleZh: 'Windows 上常见的 Python 错误',
          bodyEn:
            'These names appear often in PowerShell when you run `py your_script.py`. Learn the signal each name gives before you open a search engine.',
          bodyZh:
            '在 PowerShell 里运行 `py your_script.py` 时，这些名字很常见。先理解每个名字给出的信号，再去搜索。',
          bullets: [
            {
              en: 'NameError: you used a name before defining it.',
              zh: 'NameError：使用了尚未定义的名字。',
              keywords: [{ en: 'NameError', zh: '名称错误' }],
            },
            {
              en: 'TypeError: an operation does not fit the value type.',
              zh: 'TypeError：操作与值的类型不匹配。',
              keywords: [{ en: 'TypeError', zh: '类型错误' }],
            },
            {
              en: 'ModuleNotFoundError: wrong install, venv, or import path.',
              zh: 'ModuleNotFoundError：安装、虚拟环境或导入路径不对。',
              keywords: [{ en: 'ModuleNotFoundError', zh: '模块未找到' }],
            },
            {
              en: 'FileNotFoundError: the path or working folder is wrong.',
              zh: 'FileNotFoundError：路径或当前工作目录不对。',
              keywords: [{ en: 'FileNotFoundError', zh: '文件未找到' }],
            },
          ],
          illustration: 'code',
        },
      ],
    },
    {
      id: 'simple-method',
      titleEn: 'A Simple Debug Method',
      titleZh: '简单调试方法',
      slides: [
        {
          id: 'ch-g-debugging-repro',
          layout: 'text',

          titleEn: 'Reproduce Before You Repair',
          titleZh: '先复现，再修复',
          bodyEn:
            'If you cannot make the bug happen again on purpose, you cannot verify a fix. On Windows, that usually means the same project folder, the same PowerShell session, and the same `py` command.',
          bodyZh:
            '如果不能故意再次触发 bug，就无法验证修复。在 Windows 上，这通常意味着同一项目文件夹、同一 PowerShell 会话，以及同一条 `py` 命令。',
          bullets: [
            {
              en: 'Write the exact command that fails.',
              zh: '写下失败的那条完整命令。',
            },
            {
              en: 'Note the folder shown by `pwd` or File Explorer.',
              zh: '记下 `pwd` 或资源管理器显示的文件夹。',
              keywords: [{ en: 'Working Directory', zh: '工作目录' }],
            },
            {
              en: 'Save a copy of the full error text.',
              zh: '保存完整报错文本的一份副本。',
            },
          ],
        },
        {
          id: 'ch-g-debugging-isolate',
          layout: 'text',

          titleEn: 'Isolate One Change',
          titleZh: '一次只改一处',
          bodyEn:
            'Isolation means shrinking the mystery. Comment out a new feature, print one intermediate value, or run a tiny script that only tests the suspicious part. Multiple edits at once hide which change helped.',
          bodyZh:
            '隔离就是缩小谜团。注释掉新功能、打印一个中间值，或只运行可疑部分的小脚本。一次改很多处，会掩盖到底哪处起了作用。',
          bullets: [
            {
              en: 'Prefer the smallest failing example.',
              zh: '优先构造最小失败例子。',
              keywords: [{ en: 'Minimal Example', zh: '最小示例' }],
            },
            {
              en: 'Use print or temporary asserts to see values.',
              zh: '用 print 或临时断言查看数值。',
            },
            {
              en: 'Undo a failed guess instead of stacking guesses.',
              zh: '猜错就撤销，不要叠猜。',
            },
          ],
        },
        {
          id: 'ch-g-debugging-search',
          layout: 'text',

          titleEn: 'Search With the Real Error Line',
          titleZh: '用真实报错行去搜索',
          bodyEn:
            'Search engines help after you understand your own evidence. Copy the exception name and the last useful line, not your whole program. Add “Python” and “Windows” when the issue looks platform-specific.',
          bodyZh:
            '理解自己的证据后再搜索更有效。复制异常名和最后有用的一行，而不是整段程序。若问题像平台相关，可加上 “Python” 和 “Windows”。',
          bullets: [
            {
              en: 'Search the exception type plus a short phrase.',
              zh: '搜索异常类型加上一句短语。',
            },
            {
              en: 'Compare answers with your Python version from `py --version`.',
              zh: '对照 `py --version` 得到的 Python 版本。',
            },
            {
              en: 'Ignore advice that asks you to disable security blindly.',
              zh: '忽略让你盲目关闭安全设置的建议。',
            },
          ],
          keywords: [{ en: 'Exception Name', zh: '异常名称' }],
        },
        {
          id: 'ch-g-debugging-try',
          layout: 'steps',
          titleEn: 'Try It: Debug a Tiny Script',
          titleZh: '动手：调试一个小脚本',
          bodyEn:
            'Practice the method on a one-file script in your course projects folder.',
          bodyZh: '在你的课程项目文件夹里，用单文件脚本练习这套方法。',
          bullets: [
            {
              en: 'Open PowerShell and `cd` into the project folder.',
              zh: '打开 PowerShell，用 `cd` 进入项目文件夹。',
            },
            {
              en: 'Run `py bug_demo.py` and copy the full traceback.',
              zh: '运行 `py bug_demo.py`，复制完整 traceback。',
              keywords: [{ en: 'Traceback', zh: '报错追踪' }],
            },
            {
              en: 'Underline the last file name and line number.',
              zh: '标出最后出现的文件名和行号。',
            },
            {
              en: 'Fix one cause, save, and run the same command again.',
              zh: '只修一个原因，保存，再用同一命令运行。',
            },
            {
              en: 'Write one sentence: what failed and what fixed it.',
              zh: '写一句话：哪里失败了，什么修好了。',
            },
          ],
        },
      ],
    },
    {
      id: 'asking-help',
      titleEn: 'Asking for Help',
      titleZh: '如何求助',
      slides: [
        {
          id: 'ch-g-debugging-ask',
          layout: 'text',

          titleEn: 'A Clear Help Request',
          titleZh: '清楚的求助方式',
          bodyEn:
            'Good help requests save everyone time. Include goal, command, folder, full error, and what you already tried. Screenshots help, but pasteable text is better for traceback lines.',
          bodyZh:
            '好的求助能节省所有人时间。写清目标、命令、文件夹、完整报错，以及你已尝试过什么。截图有用，但对 traceback 行来说，可粘贴文本更好。',
          bullets: [
            {
              en: 'Goal: what you wanted the program to do.',
              zh: '目标：你希望程序做什么。',
            },
            {
              en: 'Command: exact `py ...` line from PowerShell.',
              zh: '命令：PowerShell 里那条确切的 `py ...`。',
            },
            {
              en: 'Tried: two or three steps that did not work.',
              zh: '已试：两三个没起作用的步骤。',
            },
          ],
        },
        {
          id: 'ch-g-debugging-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'These habits slow debugging more than the original bug.',
          bodyZh: '这些习惯往往比原来的 bug 更耽误时间。',
          bullets: [
            {
              en: 'Changing five places before re-running once.',
              zh: '改了五处才重新运行一次。',
            },
            {
              en: 'Ignoring the line number and editing a random place.',
              zh: '忽略行号，随便改一处。',
            },
            {
              en: 'Asking “it does not work” with no command or error text.',
              zh: '只说“不行”，却不给命令或报错。',
            },
            {
              en: 'Running the script from the wrong folder.',
              zh: '在错误的文件夹里运行脚本。',
              keywords: [{ en: 'Working Directory', zh: '工作目录' }],
            },
          ],
        },
        {
          id: 'ch-g-debugging-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn:
            'Answer these before moving on. Prefer short written answers in your notes.',
          bodyZh: '继续前先回答这些问题。建议在笔记里写简短答案。',
          bullets: [
            {
              en: 'Name one difference between a runtime error and a logic bug.',
              zh: '说出运行时错误与逻辑错误的一个区别。',
            },
            {
              en: 'List three facts you should include in a help request.',
              zh: '列出求助时应包含的三项事实。',
            },
            {
              en: 'Why is changing one thing at a time useful?',
              zh: '为什么一次只改一样有用？',
            },
          ],
          noteEn:
            'Answers: runtime crashes with a message, logic can finish wrong; include goal/command/error; one change makes cause clear.',
          noteZh:
            '参考：运行时带报错中断，逻辑可能跑完但错；包含目标/命令/报错；一次改动能看清原因。',
        },
      ],
    },
  ],
}
