import type { Chapter } from '../../types/course'

export const chFInstallPython: Chapter = {
  id: 'install-python-windows',
  titleEn: 'Installing Python on Windows',
  titleZh: '在 Windows 上安装 Python',
  summaryEn:
    'Install Python from python.org on Windows, enable Add to PATH and the py launcher, then verify in a new PowerShell window.',
  summaryZh:
    '在 Windows 上从 python.org 安装 Python，启用 Add to PATH 与 py 启动器，并在新的 PowerShell 窗口中验证。',
  sections: [
    {
      id: 'getting-ready',
      titleEn: 'Getting Ready',
      titleZh: '准备开始',
      slides: [
        {
          id: 'ch-f-install-python-title',
          layout: 'title',

          titleEn: 'Part F · Installing Python on Windows',
          titleZh: '篇章 F · 在 Windows 上安装 Python',
          subtitleEn: 'Get a working Python so PowerShell can run your code',
          subtitleZh: '装好可用的 Python，以便在 PowerShell 中运行代码',
          illustration: 'title',
          keywords: [
            { en: 'Installer', zh: '安装程序' },
            { en: 'PATH', zh: '环境变量 PATH' },
            { en: 'py Launcher', zh: 'py 启动器' },
          ],
        },
        {
          id: 'ch-f-install-python-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'A clean install is mostly about two checkboxes and one verification. After this chapter, py --version should work in a brand-new PowerShell window.',
          bodyZh:
            '干净安装主要取决于两个复选框和一次验证。完成本章后，在全新的 PowerShell 窗口中应能运行 py --version。',
          bullets: [
            {
              en: 'Download the official Windows installer from python.org.',
              zh: '从 python.org 下载官方 Windows 安装包。',
            },
            {
              en: 'Enable Add python.exe to PATH and install the py launcher.',
              zh: '启用 Add python.exe to PATH，并安装 py 启动器。',
            },
            {
              en: 'Verify with py --version in a new terminal.',
              zh: '在新终端用 py --version 验证。',
            },
          ],
        },
        {
          id: 'ch-f-install-python-source',
          layout: 'text',

          titleEn: 'Choose a Trusted Source',
          titleZh: '选择可信来源',
          bodyEn:
            'For this course, install from https://www.python.org/downloads/windows/ . Avoid random “free download” sites. University lab images may already include Python; still verify with py before reinstalling.',
          bodyZh:
            '本课程从 https://www.python.org/downloads/windows/ 安装。避免随机“免费下载”网站。大学机房镜像可能已含 Python；重装前仍先用 py 验证。',
          bullets: [
            {
              en: 'Prefer the latest stable Python 3 release for Windows.',
              zh: '优先选择适用于 Windows 的最新稳定 Python 3。',
              keywords: [{ en: 'Python 3', zh: 'Python 3' }],
            },
            {
              en: 'Use the 64-bit installer on nearly all modern PCs.',
              zh: '几乎所有现代电脑都使用 64 位安装包。',
            },
            {
              en: 'If py --version already shows Python 3.x, you may skip reinstall.',
              zh: '若 py --version 已显示 Python 3.x，可跳过重装。',
            },
          ],
        },
      ],
    },
    {
      id: 'installer-steps',
      titleEn: 'Installer Steps',
      titleZh: '安装步骤',
      slides: [
        {
          id: 'ch-f-install-python-checkboxes',
          layout: 'text',

          titleEn: 'Critical Installer Options',
          titleZh: '关键安装选项',
          bodyEn:
            'On the first installer screen, enable Add python.exe to PATH. Choose Install Now for a standard user install unless your instructor requires a custom location. Keep the py launcher enabled so short commands work consistently on Windows.',
          bodyZh:
            '在安装程序第一屏启用 Add python.exe to PATH。除非教师要求自定义位置，否则选择 Install Now 进行标准用户安装。保持启用 py 启动器，以便 Windows 上短命令一致可用。',
          bullets: [
            {
              en: 'Check: Add python.exe to PATH.',
              zh: '勾选：Add python.exe to PATH。',
              keywords: [{ en: 'Add to PATH', zh: '添加到 PATH' }],
            },
            {
              en: 'Keep py launcher installation enabled.',
              zh: '保持安装 py 启动器。',
              keywords: [{ en: 'py Launcher', zh: 'py 启动器' }],
            },
            {
              en: 'Finish the wizard, then close every old terminal.',
              zh: '完成向导后，关闭每一个旧终端。',
            },
          ],
          noteEn: 'Missing PATH is the most common classroom install failure.',
          noteZh: '漏勾 PATH 是课堂安装失败最常见原因。',
        },
        {
          id: 'ch-f-install-python-verify',
          layout: 'text',

          titleEn: 'Verify in a New PowerShell',
          titleZh: '在新的 PowerShell 中验证',
          bodyEn:
            'Open a new Windows Terminal or PowerShell after the installer exits. Old sessions still hold the previous PATH. Verification is successful only when commands work in that fresh window.',
          bodyZh:
            '安装程序退出后，打开新的 Windows Terminal 或 PowerShell。旧会话仍保留旧 PATH。只有在新窗口中命令可用，才算验证成功。',
          bullets: [
            {
              en: 'py --version should print Python 3.x.x',
              zh: 'py --version 应打印 Python 3.x.x',
              keywords: [{ en: 'py --version', zh: '查看版本' }],
            },
            {
              en: 'where.exe py should show a real path under Windows.',
              zh: 'where.exe py 应显示 Windows 下的真实路径。',
              keywords: [{ en: 'where.exe', zh: '查找程序' }],
            },
            {
              en: 'Optional: py -3 --version to force Python 3.',
              zh: '可选：py -3 --version 强制使用 Python 3。',
            },
          ],
        },
        {
          id: 'ch-f-install-python-repair',
          layout: 'text',

          titleEn: 'If Verification Fails',
          titleZh: '若验证失败',
          bodyEn:
            'Do not keep clicking random download buttons. Re-open the installer, choose Modify or Repair if available, ensure PATH and py launcher options are on, then test again in a new terminal. Still stuck? Check Part E PATH and error-reading chapters.',
          bodyZh:
            '不要不停点击随机下载按钮。重新打开安装程序，如有 Modify 或 Repair 就选用，确保 PATH 与 py 启动器选项开启，再在新终端测试。仍卡住？回顾篇章 E 的 PATH 与读错章节。',
          bullets: [
            {
              en: 'Confirm you are not typing inside the Python >>> prompt.',
              zh: '确认你不是在 Python 的 >>> 提示符里输入。',
            },
            {
              en: 'Restart Cursor’s terminal panel as well as external PowerShell.',
              zh: '同时重启 Cursor 终端面板与外部 PowerShell。',
            },
            {
              en: 'Ask for help with the exact where.exe and py --version output.',
              zh: '求助时附上 where.exe 与 py --version 的精确输出。',
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
          id: 'ch-f-install-python-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Complete the install lab carefully, then prove it with commands.',
          bodyZh: '仔细完成安装实验，再用命令证明成功。',
          bullets: [
            {
              en: 'Run py --version. If it already works, record the version and stop.',
              zh: '运行 py --version。若已可用，记录版本并停止。',
            },
            {
              en: 'Otherwise download the Windows installer from python.org.',
              zh: '否则从 python.org 下载 Windows 安装包。',
            },
            {
              en: 'Enable Add python.exe to PATH, finish install, close all terminals.',
              zh: '启用 Add python.exe to PATH，完成安装，关闭所有终端。',
            },
            {
              en: 'Open new PowerShell: py --version and where.exe py',
              zh: '打开新的 PowerShell：py --version 与 where.exe py',
            },
          ],
        },
        {
          id: 'ch-f-install-python-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Leaving Add to PATH unchecked on the first screen.',
              zh: '第一屏未勾选 Add to PATH。',
            },
            {
              en: 'Testing in the same terminal that was open during install.',
              zh: '仍在安装期间已打开的终端中测试。',
            },
            {
              en: 'Installing a second broken copy instead of repairing the first.',
              zh: '不去修复第一个，又安装第二个坏掉的副本。',
            },
          ],
        },
        {
          id: 'ch-f-install-python-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'Which website should this course use for the Windows installer?',
              zh: '本课程应从哪个网站获取 Windows 安装包？',
            },
            {
              en: 'Which checkbox prevents many “py not found” errors?',
              zh: '哪个复选框能避免许多 “py not found” 错误？',
            },
            {
              en: 'After install, what must you open before verifying?',
              zh: '安装后，验证前必须打开什么？',
            },
          ],
          noteEn:
            'Answers: python.org; Add python.exe to PATH; a new PowerShell or Windows Terminal.',
          noteZh: '参考答案：python.org；Add python.exe to PATH；新的 PowerShell 或 Windows Terminal。',
        },
      ],
    },
  ],
}
