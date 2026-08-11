import type { Chapter } from '../../types/course'

export const chJLab: Chapter = {
  id: 'learning-lab-setup',
  titleEn: 'Learning Lab Setup',
  titleZh: '学习实验室搭建',
  summaryEn:
    'Capstone checklist: projects folder, Cursor, Python, terminal, Git, backup, and safe download habits on Windows.',
  summaryZh:
    '综合清单：在 Windows 上落实项目文件夹、Cursor、Python、终端、Git、备份与安全下载习惯。',
  sections: [
    {
      id: 'workspace',
      titleEn: 'Your Workspace',
      titleZh: '你的工作区',
      slides: [
        {
          id: 'ch-j-lab-title',
          layout: 'title',

          titleEn: 'Part J · Learning Lab Setup',
          titleZh: '篇章 J · 学习实验室搭建',
          subtitleEn: 'Put your Windows coding setup together',
          subtitleZh: '把 Windows 编程环境整合起来',
          illustration: 'title',
          keywords: [
            { en: 'Workspace', zh: '工作区' },
            { en: 'Checklist', zh: '清单' },
            { en: 'Backup', zh: '备份' },
          ],
        },
        {
          id: 'ch-j-lab-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'This capstone turns earlier chapters into a reliable lab. When the checklist is green, you can practice without fighting the environment.',
          bodyZh:
            '本综合章把先前章节变成可靠实验室。清单变绿后，你就能专心练习，而不与环境搏斗。',
          illustration: 'environment',
          bullets: [
            {
              en: 'Create one clear projects folder on Windows.',
              zh: '在 Windows 上建一个清晰的项目文件夹。',
            },
            {
              en: 'Confirm Cursor, Python, terminal, and Git are ready.',
              zh: '确认 Cursor、Python、终端与 Git 已就绪。',
            },
            {
              en: 'Keep a simple backup and safe-download habit.',
              zh: '保持简单备份与安全下载习惯。',
            },
          ],
        },
        {
          id: 'ch-j-lab-folder',
          layout: 'text',

          titleEn: 'Projects Folder',
          titleZh: '项目文件夹',
          bodyEn:
            'Pick one home for code, for example C:\\Users\\You\\projects. One folder per project keeps File Explorer and Cursor sane. Avoid dumping every script on the Desktop where it mixes with downloads and screenshots.',
          bodyZh:
            '给代码一个固定家，例如 C:\\Users\\你\\projects。一个项目一个文件夹，资源管理器与 Cursor 才清晰。避免把每个脚本都丢在桌面，与下载和截图混在一起。',
          illustration: 'files',
          bullets: [
            {
              en: 'Create the folder in File Explorer before you open the editor.',
              zh: '打开编辑器之前先在文件资源管理器中创建文件夹。',
              keywords: [{ en: 'File Explorer', zh: '文件资源管理器' }],
            },
            {
              en: 'Name projects with letters, numbers, and hyphens — skip spaces when possible.',
              zh: '项目名尽量用字母、数字与连字符——尽量少用空格。',
            },
            {
              en: 'Open that folder in Cursor when you practice, not a single stray file.',
              zh: '练习时在 Cursor 中打开该文件夹，而不是零散单文件。',
              keywords: [{ en: 'Cursor', zh: 'Cursor 编辑器' }],
            },
          ],
        },
        {
          id: 'ch-j-lab-cursor',
          layout: 'text',

          titleEn: 'Cursor Ready',
          titleZh: 'Cursor 就绪',
          bodyEn:
            'Install Cursor only from the official site. Real work means opening a folder so the terminal, search, and AI context see the whole project. Use the built-in terminal for PowerShell commands instead of switching windows constantly.',
          bodyZh:
            '只从官网安装 Cursor。真正练习意味着打开整个文件夹，让终端、搜索与 AI 上下文看到整个项目。用内置终端运行 PowerShell 命令，而不是不停切换窗口。',
          illustration: 'cursor',
          bullets: [
            {
              en: 'Official installer only — apply the download habits from earlier chapters.',
              zh: '只用官方安装包——沿用先前章节的下载习惯。',
            },
            {
              en: 'File → Open Folder to your projects path.',
              zh: '文件 → 打开文件夹，指向你的项目路径。',
            },
            {
              en: 'Terminal panel: run py, git, and dir without leaving the editor.',
              zh: '终端面板：无需离开编辑器即可运行 py、git 与 dir。',
              keywords: [{ en: 'Terminal', zh: '终端' }],
            },
          ],
        },
      ],
    },
    {
      id: 'tools-checklist',
      titleEn: 'Tools Checklist',
      titleZh: '工具清单',
      slides: [
        {
          id: 'ch-j-lab-python',
          layout: 'text',

          titleEn: 'Python and py',
          titleZh: 'Python 与 py',
          bodyEn:
            'On Windows, the py launcher is the reliable way to ask for a Python version. Confirm it from PowerShell inside your projects folder so path habits stay honest.',
          bodyZh:
            '在 Windows 上，用 py 启动器请求 Python 版本最稳妥。在项目文件夹内的 PowerShell 中确认，路径习惯才老实。',
          illustration: 'python',
          bullets: [
            {
              en: 'Run: py --version',
              zh: '运行：py --version',
              keywords: [{ en: 'py', zh: 'Python 启动器' }],
            },
            {
              en: 'If needed: py -3 --version',
              zh: '需要时：py -3 --version',
            },
            {
              en: 'Run small scripts from the project folder, not from random Downloads paths.',
              zh: '在项目文件夹运行小脚本，不要从杂乱的“下载”路径运行。',
            },
          ],
        },
        {
          id: 'ch-j-lab-terminal',
          layout: 'text',

          titleEn: 'Terminal Habits',
          titleZh: '终端习惯',
          bodyEn:
            'Know enough PowerShell or cmd to move around without panic: cd, dir, and cls. When the network is the suspect, ipconfig and ping give evidence before you reinstall everything.',
          bodyZh:
            '掌握足够的 PowerShell 或 cmd 以免惊慌：cd、dir、cls。当怀疑是网络问题时，用 ipconfig 与 ping 找证据，再考虑重装一切。',
          illustration: 'terminal',
          bullets: [
            {
              en: 'cd changes folder; dir lists; cls clears the screen.',
              zh: 'cd 切换目录；dir 列出；cls 清屏。',
              keywords: [
                { en: 'cd', zh: '切换目录' },
                { en: 'dir', zh: '列出文件' },
              ],
            },
            {
              en: 'ipconfig shows IPv4; ping tests reachability.',
              zh: 'ipconfig 显示 IPv4；ping 测试可达性。',
              keywords: [{ en: 'ipconfig', zh: '查看网络配置' }],
            },
            {
              en: 'Read the error text carefully before changing five settings at once.',
              zh: '在同时改五个设置之前，先仔细读错误文字。',
            },
          ],
        },
        {
          id: 'ch-j-lab-git',
          layout: 'text',

          titleEn: 'Git Snapshot Habit',
          titleZh: 'Git 快照习惯',
          bodyEn:
            'Git records snapshots so you can roll back safely. Commit small wins. Never commit secrets, API keys, or .env password files. Verify git --version as part of the lab checklist.',
          bodyZh:
            'Git 记录快照，便于安全回退。小步提交。切勿提交密钥、API key 或 .env 密码文件。把 git --version 列入实验清单。',
          illustration: 'git',
          bullets: [
            {
              en: 'git status shows what changed in the working tree.',
              zh: 'git status 显示工作区改了什么。',
              keywords: [{ en: 'Git', zh: '版本控制' }],
            },
            {
              en: 'Commit messages should say why, in short English or Chinese.',
              zh: '提交说明应简短说明原因，中英文均可。',
              keywords: [{ en: 'Commit', zh: '提交' }],
            },
            {
              en: 'If a secret slipped into a commit, rotate the secret — deleting the file later is not enough.',
              zh: '若密钥已进入提交，先轮换密钥——事后删文件不够。',
            },
          ],
        },
        {
          id: 'ch-j-lab-backup-safe',
          layout: 'text',

          titleEn: 'Backup and Safe Downloads',
          titleZh: '备份与安全下载',
          bodyEn:
            'Combine hygiene with the lab: weekly zip or cloud copy of projects, installers only from official pages, and a Windows Security scan when a file looks odd. The lab is only reliable if the machine stays trustworthy.',
          bodyZh:
            '把卫生习惯与实验室结合：每周给项目做 zip 或云盘副本，安装包只来自官网，文件可疑时用 Windows 安全中心扫描。机器可信，实验室才可靠。',
          illustration: 'files',
          bullets: [
            {
              en: 'Schedule a weekly backup reminder on your phone or calendar.',
              zh: '在手机或日历上设每周备份提醒。',
              keywords: [{ en: 'Backup', zh: '备份' }],
            },
            {
              en: 'Python, Cursor, and Git: official pages only.',
              zh: 'Python、Cursor 与 Git：只走官网。',
            },
            {
              en: 'Scan odd downloads before opening; delete crack tools on sight.',
              zh: '打开前扫描可疑下载；见到破解工具直接删除。',
              keywords: [{ en: 'Windows Security', zh: 'Windows 安全中心' }],
            },
          ],
        },
        {
          id: 'ch-j-lab-try',
          layout: 'steps',
          titleEn: 'Capstone Try-It',
          titleZh: '综合试一试',
          bodyEn:
            'Run this sequence on your Windows PC. Tick each step. If one fails, fix that tool before moving on.',
          bodyZh:
            '在你的 Windows 电脑上按序执行。每步打勾。若某步失败，先修好该工具再继续。',
          illustration: 'environment',
          bullets: [
            {
              en: 'Create C:\\Users\\You\\projects\\lab-check in File Explorer',
              zh: '在文件资源管理器中创建 C:\\Users\\你\\projects\\lab-check',
            },
            {
              en: 'Open the folder in Cursor; in the terminal run: py --version',
              zh: '用 Cursor 打开该文件夹；在终端运行：py --version',
            },
            {
              en: 'Run: git --version',
              zh: '运行：git --version',
            },
            {
              en: 'Run: ipconfig and note your IPv4 address',
              zh: '运行：ipconfig 并记下 IPv4 地址',
            },
            {
              en: 'Confirm Windows Security shows OK and your browser is up to date',
              zh: '确认 Windows 安全中心显示正常，且浏览器已是最新',
            },
          ],
        },
        {
          id: 'ch-j-lab-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'environment',
          bullets: [
            {
              en: 'Where will you keep all practice projects?',
              zh: '你的练习项目将放在哪里？',
            },
            {
              en: 'Which three tools did you verify today?',
              zh: '你今天核实了哪三样工具？',
            },
            {
              en: 'What is one backup step you will repeat weekly?',
              zh: '你每周会重复的一个备份步骤是什么？',
            },
          ],
          noteEn:
            'Answers: one projects folder path; e.g. Cursor/Python/Git; zip or cloud copy of projects.',
          noteZh:
            '参考答案：一个项目文件夹路径；如 Cursor/Python/Git；项目的 zip 或云盘副本。',
        },
      ],
    },
  ],
}
