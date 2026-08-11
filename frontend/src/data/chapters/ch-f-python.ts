import type { Chapter } from '../../types/course'

export const chFPython: Chapter = {
  id: 'what-is-python',
  titleEn: 'What Is Python',
  titleZh: '什么是 Python',
  summaryEn:
    'Meet Python on Windows: what it is, where it is used, why Python 3, and the meaning of Hello World before install practice.',
  summaryZh:
    '在 Windows 上认识 Python：它是什么、用在哪里、为何用 Python 3，以及安装练习前 Hello World 的含义。',
  sections: [
    {
      id: 'python-intro',
      titleEn: 'Python Introduction',
      titleZh: 'Python 入门',
      slides: [
        {
          id: 'ch-f-python-title',
          layout: 'title',

          titleEn: 'Part F · What Is Python',
          titleZh: '篇章 F · 什么是 Python',
          subtitleEn: 'A clear language for beginners and real Windows projects',
          subtitleZh: '语法清晰：适合初学者，也用于真实 Windows 项目',
          illustration: 'title',
          keywords: [
            { en: 'Python', zh: 'Python 语言' },
            { en: 'Interpreter', zh: '解释器' },
            { en: 'py Launcher', zh: 'py 启动器' },
          ],
        },
        {
          id: 'ch-f-python-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'This chapter builds vocabulary before the install lab. You should leave able to explain Python in plain language and check whether Windows already has the py launcher.',
          bodyZh:
            '本章在安装实验前先建立词汇。学完后，你应能用通俗语言解释 Python，并检查 Windows 是否已有 py 启动器。',
          bullets: [
            {
              en: 'Explain what Python is and how an interpreter runs .py files.',
              zh: '说明什么是 Python，以及解释器如何运行 .py 文件。',
            },
            {
              en: 'Name common places Python is used.',
              zh: '说出 Python 的常见应用场景。',
            },
            {
              en: 'Prefer Python 3 and check with py --version on Windows.',
              zh: '优先使用 Python 3，并在 Windows 上用 py --version 检查。',
              keywords: [{ en: 'py --version', zh: '查看 Python 版本' }],
            },
          ],
        },
        {
          id: 'ch-f-python-definition',
          layout: 'text',

          titleEn: 'Python Is a Programming Language',
          titleZh: 'Python 是一种编程语言',
          bodyEn:
            'Python lets you write instructions in readable text files that end with .py. An interpreter reads those instructions and carries them out. On Windows, you usually start that interpreter through the py launcher from PowerShell or from Cursor’s terminal.',
          bodyZh:
            'Python 让你把指令写在以 .py 结尾、可读的文本文件里。解释器读取这些指令并执行。在 Windows 上，通常通过 PowerShell 或 Cursor 终端里的 py 启动器来启动解释器。',
          bullets: [
            {
              en: 'Source files store your program text, such as hello.py.',
              zh: '源文件保存程序文本，例如 hello.py。',
              keywords: [
                { en: 'Source File', zh: '源文件' },
                { en: '.py', zh: '.py 文件' },
              ],
            },
            {
              en: 'The interpreter executes code; you do not compile a .exe first in this course.',
              zh: '解释器执行代码；本课程不先编译成 .exe。',
              keywords: [{ en: 'Interpreter', zh: '解释器' }],
            },
            {
              en: 'Syntax is intentionally readable and close to English structure.',
              zh: '语法刻意易读，结构接近英语。',
              keywords: [{ en: 'Syntax', zh: '语法' }],
            },
          ],
        },
        {
          id: 'ch-f-python-uses',
          layout: 'text',

          titleEn: 'Where Python Is Used',
          titleZh: 'Python 用在哪里',
          bodyEn:
            'Python appears in classrooms and in industry. You may meet it in data work, web backends, automation on a Windows PC, and teaching labs. The same core language supports tiny scripts and large systems.',
          bodyZh:
            'Python 出现在课堂与工业界。你会在数据分析、网站后端、Windows 自动化，以及教学实验中遇到它。同一门核心语言既支持小脚本，也支持大型系统。',
          bullets: [
            {
              en: 'Data analysis and machine learning.',
              zh: '数据分析与机器学习。',
              keywords: [
                { en: 'Data Analysis', zh: '数据分析' },
                { en: 'Machine Learning', zh: '机器学习' },
              ],
            },
            {
              en: 'Web backends and APIs.',
              zh: '网站后端与 API。',
              keywords: [
                { en: 'Backend', zh: '后端' },
                { en: 'API', zh: '接口' },
              ],
            },
            {
              en: 'Automation scripts: rename files, call APIs, clean folders.',
              zh: '自动化脚本：重命名文件、调用 API、清理文件夹。',
              keywords: [{ en: 'Script', zh: '脚本' }],
            },
          ],
        },
      ],
    },
    {
      id: 'python-on-windows',
      titleEn: 'Python on Windows',
      titleZh: 'Windows 上的 Python',
      slides: [
        {
          id: 'ch-f-python-versions',
          layout: 'text',

          titleEn: 'Python 3 and the py Launcher',
          titleZh: 'Python 3 与 py 启动器',
          bodyEn:
            'This course uses Python 3. Python 2 is obsolete for new learning. One Windows PC may contain several Python installs; the py launcher helps choose a version. Later chapters isolate project packages with venv so those installs do not fight each other.',
          bodyZh:
            '本课程使用 Python 3。Python 2 已不适合新学习。一台 Windows 电脑可能装有多个 Python；py 启动器帮助选择版本。后续章节会用 venv 隔离项目包，避免这些安装互相冲突。',
          bullets: [
            {
              en: 'Learn Python 3 only for new work in this course.',
              zh: '本课程的新工作只学 Python 3。',
              keywords: [{ en: 'Python 3', zh: 'Python 3' }],
            },
            {
              en: 'On Windows, prefer py over guessing a python command.',
              zh: '在 Windows 上优先用 py，而不是猜测 python 命令。',
              keywords: [{ en: 'py Launcher', zh: 'py 启动器' }],
            },
            {
              en: 'py -3 asks specifically for a Python 3 runtime when multiple exist.',
              zh: '存在多个版本时，py -3 可明确请求 Python 3 运行时。',
            },
          ],
        },
        {
          id: 'ch-f-python-hello',
          layout: 'text',

          titleEn: 'Hello World Meaning',
          titleZh: 'Hello World 的含义',
          bodyEn:
            'print("Hello, World") asks Python to display text. Quotes mark a string; parentheses call the print function. A working Hello World is less about poetry and more about proof: your file, folder, and Python install can cooperate.',
          bodyZh:
            'print("Hello, World") 让 Python 显示文字。引号标记字符串；圆括号调用 print 函数。成功的 Hello World 重点不在文采，而在证明：文件、文件夹与 Python 安装可以协作。',
          bullets: [
            {
              en: 'print sends output to the terminal.',
              zh: 'print 把输出送到终端。',
              keywords: [{ en: 'print', zh: '打印输出' }],
            },
            {
              en: 'A string is text data inside quotes.',
              zh: '字符串是引号里的文本数据。',
              keywords: [{ en: 'String', zh: '字符串' }],
            },
            {
              en: 'You will create hello.py now and run it after the install chapter if needed.',
              zh: '现在先创建 hello.py；若需要，安装章节后再运行。',
              keywords: [{ en: 'Hello World', zh: '你好，世界' }],
            },
          ],
        },
      ],
    },
    {
      id: 'practice',
      titleEn: 'Practice',
      titleZh: '练习',
      slides: [
        {
          id: 'ch-f-python-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Check first, then prepare a tiny file. Installing comes next if py is missing.',
          bodyZh: '先检查，再准备一个小文件。若没有 py，下一章再安装。',
          bullets: [
            {
              en: 'Open PowerShell and run py --version',
              zh: '打开 PowerShell 并运行 py --version',
              keywords: [{ en: 'py --version', zh: '查看版本' }],
            },
            {
              en: 'Create C:\\Users\\YourName\\projects\\python-lab in File Explorer if needed.',
              zh: '如需要，在资源管理器创建 C:\\Users\\YourName\\projects\\python-lab',
              keywords: [{ en: 'File Explorer', zh: '文件资源管理器' }],
            },
            {
              en: 'Create hello.py with one line: print("Hello, World")',
              zh: '创建 hello.py，写入一行：print("Hello, World")',
            },
            {
              en: 'Save as UTF-8. Run later with: py hello.py from that folder.',
              zh: '以 UTF-8 保存。稍后在该文件夹运行：py hello.py',
              keywords: [{ en: 'UTF-8', zh: 'UTF-8 编码' }],
            },
          ],
        },
        {
          id: 'ch-f-python-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Typing python when only the py launcher is installed.',
              zh: '只安装了 py 启动器却输入 python。',
            },
            {
              en: 'Saving hello.txt because extensions are hidden in Explorer.',
              zh: '因资源管理器隐藏扩展名而保存成 hello.txt。',
            },
            {
              en: 'Missing quotes: print(Hello, World)',
              zh: '漏掉引号：print(Hello, World)',
            },
          ],
        },
        {
          id: 'ch-f-python-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What command checks Python on Windows in this course?',
              zh: '本课程在 Windows 上用什么命令检查 Python？',
            },
            {
              en: 'Which major version should beginners learn today?',
              zh: '今天初学者应学习哪个主版本？',
            },
            {
              en: 'What does print("Hello, World") do?',
              zh: 'print("Hello, World") 会做什么？',
            },
          ],
          noteEn: 'Answers: py --version; Python 3; shows the text in the terminal.',
          noteZh: '参考答案：py --version；Python 3；在终端显示这段文字。',
        },
      ],
    },
  ],
}
