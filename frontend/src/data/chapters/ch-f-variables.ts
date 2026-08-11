import type { Chapter } from '../../types/course'

export const chFVariables: Chapter = {
  id: 'variables-types-input',
  titleEn: 'Variables, Types, and Input',
  titleZh: '变量、类型与输入',
  summaryEn:
    'Store values in variables, meet basic types, and use print and input in a .py script on Windows.',
  summaryZh:
    '用变量保存值，认识基础类型，并在 Windows 上用 print 与 input 写 .py 脚本。',
  sections: [
    {
      id: 'goals-and-variables',
      titleEn: 'Goals and Variables',
      titleZh: '目标与变量',
      slides: [
        {
          id: 'ch-f-variables-title',
          layout: 'title',

          titleEn: 'Part F · Variables, Types, and Input',
          titleZh: '篇章 F · 变量、类型与输入',
          subtitleEn: 'Give names to values and talk with the user',
          subtitleZh: '给值起名字，并与用户对话',
          illustration: 'title',
          keywords: [
            { en: 'Variable', zh: '变量' },
            { en: 'Type', zh: '类型' },
            { en: 'input', zh: '输入' },
          ],
        },
        {
          id: 'ch-f-variables-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Programs remember information by giving names to values. This chapter teaches assignment, basic types, and reading text from the keyboard with input.',
          bodyZh:
            '程序通过给值起名字来记住信息。本章学习赋值、基础类型，以及用 input 从键盘读取文本。',
          bullets: [
            {
              en: 'Create a variable and print its value.',
              zh: '创建变量并打印它的值。',
              keywords: [{ en: 'Assignment', zh: '赋值' }],
            },
            {
              en: 'Recognize int, float, str, and bool at a glance.',
              zh: '一眼识别 int、float、str 与 bool。',
            },
            {
              en: 'Use input and convert strings when you need numbers.',
              zh: '使用 input，并在需要数字时转换字符串。',
            },
          ],
        },
        {
          id: 'ch-f-variables-assign',
          layout: 'text',

          titleEn: 'Variables Store Values',
          titleZh: '变量保存值',
          bodyEn:
            'A variable is a name that refers to a value. In Python you assign with =, which means “store”, not mathematical equality. Choose clear names such as score or user_name so future readers understand your intent.',
          bodyZh:
            '变量是指向值的名字。在 Python 中用 = 赋值，表示“存起来”，不是数学等式。选择 score 或 user_name 这类清晰名称，方便以后的读者理解意图。',
          bullets: [
            {
              en: 'Example: score = 95 then print(score)',
              zh: '示例：score = 95 然后 print(score)',
              keywords: [{ en: 'Variable', zh: '变量' }],
            },
            {
              en: 'Names may contain letters, digits, and underscore; they cannot start with a digit.',
              zh: '名称可含字母、数字与下划线；不能以数字开头。',
            },
            {
              en: 'Reassignment replaces the old value: score = score + 1',
              zh: '重新赋值会替换旧值：score = score + 1',
            },
          ],
        },
        {
          id: 'ch-f-variables-types',
          layout: 'text',

          titleEn: 'Basic Types',
          titleZh: '基础类型',
          bodyEn:
            'Values have types. Integers are whole numbers, floats have decimals, strings are text, and bool is True or False. Use type(value) while learning. Mixing types without conversion often causes errors, especially after input.',
          bodyZh:
            '值具有类型。整数是整数，浮点数有小数，字符串是文本，bool 是 True 或 False。学习时可使用 type(value)。不做转换就混合类型常会报错，尤其是在 input 之后。',
          bullets: [
            {
              en: 'int: 10 · float: 3.14 · str: "hello" · bool: True',
              zh: 'int：10 · float：3.14 · str："hello" · bool：True',
              keywords: [
                { en: 'int', zh: '整数' },
                { en: 'float', zh: '浮点数' },
                { en: 'str', zh: '字符串' },
                { en: 'bool', zh: '布尔值' },
              ],
            },
            {
              en: 'input(...) always returns a string, even if the user types 42.',
              zh: 'input(...) 总是返回字符串，即使用户输入 42。',
              keywords: [{ en: 'input', zh: '输入' }],
            },
            {
              en: 'Convert with int(...), float(...), or str(...) when needed.',
              zh: '需要时用 int(...)、float(...) 或 str(...) 转换。',
              keywords: [{ en: 'Conversion', zh: '类型转换' }],
            },
          ],
        },
      ],
    },
    {
      id: 'print-and-input',
      titleEn: 'print and input',
      titleZh: 'print 与 input',
      slides: [
        {
          id: 'ch-f-variables-io',
          layout: 'text',

          titleEn: 'Talking with the User',
          titleZh: '与用户对话',
          bodyEn:
            'print displays values in the terminal. input shows a prompt and waits for the user to press Enter. Build tiny interactive scripts only after you can save a .py file and run it with py from the correct folder.',
          bodyZh:
            'print 在终端显示值。input 显示提示并等待用户按 Enter。只有在你会保存 .py 文件，并从正确文件夹用 py 运行之后，再写小型交互脚本。',
          bullets: [
            {
              en: 'name = input("Your name: ")',
              zh: 'name = input("Your name: ")',
            },
            {
              en: 'age = int(input("Age: "))',
              zh: 'age = int(input("Age: "))',
            },
            {
              en: 'print("Hello,", name)',
              zh: 'print("Hello,", name)',
              keywords: [{ en: 'print', zh: '打印输出' }],
            },
          ],
          noteEn: 'If int(...) fails, the user typed text that is not a number.',
          noteZh: '若 int(...) 失败，说明用户输入了不是数字的文本。',
        },
        {
          id: 'ch-f-variables-windows',
          layout: 'text',

          titleEn: 'Run Interactive Scripts on Windows',
          titleZh: '在 Windows 上运行交互脚本',
          bodyEn:
            'Interactive programs need a live terminal. Run them with py from PowerShell or Cursor’s terminal, not by double-clicking in a way that closes the window immediately. Keep the shell in the project folder and save files as UTF-8 when prompts include Chinese.',
          bodyZh:
            '交互程序需要活着的终端。用 PowerShell 或 Cursor 终端中的 py 运行，而不要用会立刻关闭窗口的双击方式。让 shell 停在项目文件夹，若提示含中文，请将文件保存为 UTF-8。',
          bullets: [
            {
              en: 'Save greet.py, then: py greet.py',
              zh: '保存 greet.py，然后：py greet.py',
            },
            {
              en: 'Type answers at each input prompt and press Enter.',
              zh: '在每个 input 提示处输入答案并按 Enter。',
            },
            {
              en: 'Use Ctrl+C to stop a stuck program if needed.',
              zh: '如程序卡住，可用 Ctrl+C 停止。',
              keywords: [{ en: 'Ctrl+C', zh: '中断程序' }],
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
          id: 'ch-f-variables-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Write a short greet script and run it with py.',
          bodyZh: '写一个简短问候脚本，并用 py 运行。',
          bullets: [
            {
              en: 'In python-lab, create greet.py in Cursor.',
              zh: '在 python-lab 中用 Cursor 创建 greet.py。',
            },
            {
              en: 'Ask for a name with input, store it, then print a greeting.',
              zh: '用 input 询问姓名，保存后再 print 问候语。',
            },
            {
              en: 'Ask for a number, convert with int, and print number + 1.',
              zh: '再询问一个数字，用 int 转换，并打印 number + 1。',
            },
            {
              en: 'In PowerShell: cd to the folder, run py greet.py',
              zh: '在 PowerShell：cd 到该文件夹，运行 py greet.py',
            },
          ],
        },
        {
          id: 'ch-f-variables-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Adding input results without int(...): "3" + "4" becomes "34".',
              zh: '未用 int(...) 就对 input 结果做加法："3" + "4" 变成 "34"。',
            },
            {
              en: 'Using = when you meant comparison later with ==.',
              zh: '把以后才用的比较 == 写成了赋值 =。',
            },
            {
              en: 'Saving the file but running py from a different folder.',
              zh: '文件已保存，却从另一个文件夹运行 py。',
            },
          ],
        },
        {
          id: 'ch-f-variables-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What does name = "Alex" do?',
              zh: 'name = "Alex" 做什么？',
            },
            {
              en: 'What type does input("n: ") return?',
              zh: 'input("n: ") 返回什么类型？',
            },
            {
              en: 'How do you turn an input string into an integer?',
              zh: '如何把 input 得到的字符串变成整数？',
            },
          ],
          noteEn: 'Answers: stores text in name; str; int(...)',
          noteZh: '参考答案：把文本存进 name；str；int(...)',
        },
      ],
    },
  ],
}
