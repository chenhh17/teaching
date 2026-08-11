import type { Chapter } from '../../types/course'

export const chFFilesExceptions: Chapter = {
  id: 'files-and-exceptions',
  titleEn: 'Files and Exceptions',
  titleZh: '文件与异常',
  summaryEn:
    'Read and write UTF-8 text files with Python on Windows, and handle common errors calmly with try/except.',
  summaryZh:
    '在 Windows 上用 Python 读写 UTF-8 文本文件，并用 try/except 冷静处理常见错误。',
  sections: [
    {
      id: 'file-basics',
      titleEn: 'Working with Files',
      titleZh: '处理文件',
      slides: [
        {
          id: 'ch-f-files-exceptions-title',
          layout: 'title',

          titleEn: 'Part F · Files and Exceptions',
          titleZh: '篇章 F · 文件与异常',
          subtitleEn: 'Programs that remember data between runs',
          subtitleZh: '让程序在多次运行之间记住数据',
          illustration: 'title',
          keywords: [
            { en: 'File', zh: '文件' },
            { en: 'Exception', zh: '异常' },
            { en: 'UTF-8', zh: 'UTF-8 编码' },
          ],
        },
        {
          id: 'ch-f-files-exceptions-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Variables forget everything when the program ends. Files let data survive. Exceptions tell you when opening or reading fails so your script can respond instead of crashing silently in a closed window.',
          bodyZh:
            '程序结束时变量会忘记一切。文件让数据得以保留。异常告诉你打开或读取何时失败，从而让脚本能够应对，而不是在已关闭的窗口里静默崩溃。',
          bullets: [
            {
              en: 'Read and write text files with clear Windows paths.',
              zh: '用清晰的 Windows 路径读写文本文件。',
            },
            {
              en: 'Use UTF-8 encoding for course text that includes Chinese.',
              zh: '对含中文的课程文本使用 UTF-8 编码。',
            },
            {
              en: 'Catch common errors with try / except.',
              zh: '用 try / except 捕获常见错误。',
            },
          ],
        },
        {
          id: 'ch-f-files-exceptions-readwrite',
          layout: 'text',

          titleEn: 'Read and Write Text',
          titleZh: '读写文本',
          bodyEn:
            'Prefer a with open(...) as file: block so Python closes the file automatically. Use encoding="utf-8" on Windows for course work. Read with read() or by looping lines; write with write() after opening in "w" or "a" mode.',
          bodyZh:
            '优先使用 with open(...) as file: 代码块，让 Python 自动关闭文件。课程练习在 Windows 上使用 encoding="utf-8"。用 read() 或逐行循环读取；以 "w" 或 "a" 模式打开后用 write() 写入。',
          bullets: [
            {
              en: 'with open("notes.txt", "r", encoding="utf-8") as f:',
              zh: 'with open("notes.txt", "r", encoding="utf-8") as f:',
              keywords: [
                { en: 'with open', zh: '安全打开文件' },
                { en: 'encoding="utf-8"', zh: 'UTF-8 编码' },
              ],
            },
            {
              en: '"w" overwrites; "a" appends; "r" reads.',
              zh: '"w" 覆盖；"a" 追加；"r" 读取。',
              keywords: [{ en: 'File Mode', zh: '文件模式' }],
            },
            {
              en: 'Relative names look in the current PowerShell folder.',
              zh: '相对文件名在当前 PowerShell 文件夹中查找。',
            },
          ],
        },
        {
          id: 'ch-f-files-exceptions-paths',
          layout: 'text',

          titleEn: 'Paths on Windows',
          titleZh: 'Windows 上的路径',
          bodyEn:
            'File not found usually means the shell and the path disagree. Confirm with Get-Location and dir before blaming open(). Absolute paths work, but relative paths inside the project folder are easier for class demos.',
          bodyZh:
            '找不到文件通常意味着 shell 与路径不一致。先用 Get-Location 与 dir 确认，再怀疑 open()。绝对路径可用，但项目文件夹内的相对路径更适合课堂演示。',
          bullets: [
            {
              en: 'Run py from the folder that contains notes.txt',
              zh: '在包含 notes.txt 的文件夹运行 py',
            },
            {
              en: 'Or pass a full path: C:\\\\Users\\\\alex\\\\projects\\\\python-lab\\\\notes.txt',
              zh: '或传入完整路径：C:\\\\Users\\\\alex\\\\projects\\\\python-lab\\\\notes.txt',
              keywords: [{ en: 'Absolute Path', zh: '绝对路径' }],
            },
            {
              en: 'Create the file first in Cursor or with a short write script.',
              zh: '先在 Cursor 中创建文件，或用短写入脚本创建。',
            },
          ],
        },
      ],
    },
    {
      id: 'exceptions',
      titleEn: 'Exceptions',
      titleZh: '异常',
      slides: [
        {
          id: 'ch-f-files-exceptions-try',
          layout: 'text',

          titleEn: 'try and except',
          titleZh: 'try 与 except',
          bodyEn:
            'Put risky operations in try. If an exception occurs, except can print a clear message and continue or exit cleanly. Catch specific errors when you can, such as FileNotFoundError, instead of hiding every failure.',
          bodyZh:
            '把可能出错的操作放进 try。若发生异常，except 可以打印清晰消息，然后继续或干净退出。尽量捕获具体错误，例如 FileNotFoundError，而不是隐藏所有失败。',
          bullets: [
            {
              en: 'try: ... except FileNotFoundError: print("missing file")',
              zh: 'try: ... except FileNotFoundError: print("missing file")',
              keywords: [{ en: 'FileNotFoundError', zh: '文件未找到' }],
            },
            {
              en: 'ValueError often appears when int(...) receives bad text.',
              zh: '当 int(...) 收到不良文本时，常出现 ValueError。',
              keywords: [{ en: 'ValueError', zh: '值错误' }],
            },
            {
              en: 'Read the exception type name; it is part of the clue.',
              zh: '阅读异常类型名；它本身就是线索。',
              keywords: [{ en: 'Exception', zh: '异常' }],
            },
          ],
        },
        {
          id: 'ch-f-files-exceptions-calm',
          layout: 'text',

          titleEn: 'Calm Handling Habits',
          titleZh: '冷静处理的习惯',
          bodyEn:
            'Good beginner handling is honest: tell the user what failed and what to check next. Do not use except to silence errors you do not understand. Log the path, confirm the folder, then retry.',
          bodyZh:
            '良好的初学处理方式是诚实：告诉用户什么失败了，以及下一步检查什么。不要用 except 去静默你还不理解的错误。记录路径，确认文件夹，然后再重试。',
          bullets: [
            {
              en: 'Print the filename you tried to open.',
              zh: '打印你试图打开的文件名。',
            },
            {
              en: 'Avoid bare except: that can hide real bugs.',
              zh: '避免裸 except：那会隐藏真正的缺陷。',
            },
            {
              en: 'Keep user-facing messages short and actionable.',
              zh: '面向用户的消息保持简短且可执行。',
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
          id: 'ch-f-files-exceptions-lab',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Write a note, read it back, and handle a missing file.',
          bodyZh: '写入一条笔记，再读回来，并处理缺失文件。',
          bullets: [
            {
              en: 'In python-lab, create file_lab.py that writes "hello from Windows\\n" to notes.txt with encoding="utf-8".',
              zh: '在 python-lab 创建 file_lab.py，用 encoding="utf-8" 把 "hello from Windows\\n" 写入 notes.txt。',
            },
            {
              en: 'In the same script, open notes.txt for reading and print the content.',
              zh: '在同一脚本中打开 notes.txt 读取并打印内容。',
            },
            {
              en: 'Add try/except FileNotFoundError around a read of missing.txt.',
              zh: '对 missing.txt 的读取加上 try/except FileNotFoundError。',
            },
            {
              en: 'Run py file_lab.py, then confirm notes.txt appears in File Explorer.',
              zh: '运行 py file_lab.py，再在资源管理器中确认出现 notes.txt。',
            },
          ],
        },
        {
          id: 'ch-f-files-exceptions-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Opening a relative file from the wrong PowerShell folder.',
              zh: '从错误的 PowerShell 文件夹打开相对路径文件。',
            },
            {
              en: 'Omitting encoding="utf-8" and corrupting Chinese text.',
              zh: '省略 encoding="utf-8"，导致中文损坏。',
            },
            {
              en: 'Using except to pass silently when a file is missing.',
              zh: '文件缺失时用 except 静默 pass。',
            },
          ],
        },
        {
          id: 'ch-f-files-exceptions-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'Why prefer with open(...) as f: for files?',
              zh: '为什么处理文件时优先使用 with open(...) as f:？',
            },
            {
              en: 'Which encoding should course text files use here?',
              zh: '本课程文本文件应使用哪种编码？',
            },
            {
              en: 'Which exception often means the path or folder is wrong?',
              zh: '哪个异常常常表示路径或文件夹不对？',
            },
          ],
          noteEn:
            'Answers: auto-closes the file; UTF-8; FileNotFoundError',
          noteZh: '参考答案：自动关闭文件；UTF-8；FileNotFoundError',
        },
      ],
    },
  ],
}
