import type { Chapter } from '../../types/course'

export const chGGit: Chapter = {
  id: 'git-basics',
  titleEn: 'Git Basics',
  titleZh: 'Git 基础',
  summaryEn:
    'Understand why version control matters, install and configure Git on Windows, and complete a first commit workflow.',
  summaryZh:
    '理解版本控制为何重要，在 Windows 上安装并配置 Git，并完成第一次提交工作流。',
  sections: [
    {
      id: 'why-git',
      titleEn: 'Why Git',
      titleZh: '为什么用 Git',
      slides: [
        {
          id: 'ch-g-git-title',
          layout: 'title',

          titleEn: 'Part G · Git Basics',
          titleZh: '篇章 G · Git 基础',
          subtitleEn: 'History you can trust on your Windows PC',
          subtitleZh: '在 Windows 电脑上拥有可信的历史记录',
          illustration: 'title',
          keywords: [
            { en: 'Git', zh: 'Git' },
            { en: 'Commit', zh: '提交' },
            { en: 'Repository', zh: '仓库' },
          ],
        },
        {
          id: 'ch-g-git-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will explain Git in plain language, configure identity on Windows, and perform init, status, add, commit, and log for a local project.',
          bodyZh:
            '你将用通俗语言解释 Git，在 Windows 上配置身份，并对本地项目完成 init、status、add、commit 与 log。',
          bullets: [
            {
              en: 'Say why undo-by-history beats undo-by-memory.',
              zh: '说明为何“靠历史撤销”胜过“靠记忆撤销”。',
            },
            {
              en: 'Install or verify Git in PowerShell with `git --version`.',
              zh: '在 PowerShell 用 `git --version` 安装或验证 Git。',
            },
            {
              en: 'Make a first meaningful commit message.',
              zh: '写出第一条有意义的提交说明。',
              keywords: [{ en: 'Commit Message', zh: '提交说明' }],
            },
            {
              en: 'Use `.gitignore` so junk and secrets stay out.',
              zh: '使用 `.gitignore` 让垃圾与机密留在外面。',
            },
          ],
        },
        {
          id: 'ch-g-git-why',
          layout: 'text',

          titleEn: 'The Problem Git Solves',
          titleZh: 'Git 解决的问题',
          bodyEn:
            'Without version control, students keep files named `v2`, `final`, and `final_really`. That system collapses under pressure. Git stores snapshots with messages so you can compare, restore, and explain what changed.',
          bodyZh:
            '没有版本控制时，学生靠 `v2`、`final`、`final_really` 命名文件。压力一大这套系统就崩。Git 用带说明的快照保存，便于比较、恢复并解释改了什么。',
          bullets: [
            {
              en: 'Snapshot history reduces fear of experiments.',
              zh: '快照历史降低试错恐惧。',
              keywords: [{ en: 'Snapshot', zh: '快照' }],
            },
            {
              en: 'Messages create a readable project diary.',
              zh: '提交说明形成可读的项目日记。',
            },
            {
              en: 'Local Git works before you ever use GitHub.',
              zh: '在使用 GitHub 之前，本地 Git 就能工作。',
            },
          ],
        },
      ],
    },
    {
      id: 'core-ideas',
      titleEn: 'Core Ideas',
      titleZh: '核心概念',
      slides: [
        {
          id: 'ch-g-git-concepts',
          layout: 'text',

          titleEn: 'Repository, Staging, Commit',
          titleZh: '仓库、暂存与提交',
          bodyEn:
            'A repository is the project folder plus the hidden `.git` database. Staging chooses what enters the next snapshot. A commit freezes that choice with a message and author metadata.',
          bodyZh:
            '仓库是项目文件夹加上隐藏的 `.git` 数据库。暂存区选择进入下一快照的内容。提交把该选择连同说明与作者信息一起冻结。',
          bullets: [
            {
              en: 'Working tree: files you edit now.',
              zh: '工作区：你正在编辑的文件。',
              keywords: [{ en: 'Working Tree', zh: '工作区' }],
            },
            {
              en: 'Staging area: the next commit candidate list.',
              zh: '暂存区：下一提交的候选清单。',
              keywords: [{ en: 'Staging', zh: '暂存' }],
            },
            {
              en: 'Commit: a saved snapshot you can return to.',
              zh: '提交：可回到的已保存快照。',
            },
          ],
        },
        {
          id: 'ch-g-git-install',
          layout: 'steps',
          titleEn: 'Try It: Verify Git on Windows',
          titleZh: '动手：在 Windows 上验证 Git',
          bodyEn:
            'Confirm Git is available in PowerShell before learning commands.',
          bodyZh: '学习命令前，先确认 PowerShell 可用 Git。',
          bullets: [
            {
              en: 'Open PowerShell.',
              zh: '打开 PowerShell。',
            },
            {
              en: 'Run `git --version`.',
              zh: '运行 `git --version`。',
            },
            {
              en: 'If missing, install Git for Windows from the official site, then reopen PowerShell.',
              zh: '若缺失，从官网安装 Git for Windows，然后重新打开 PowerShell。',
            },
            {
              en: 'Run `git --version` again and record the number in your notes.',
              zh: '再次运行 `git --version`，把版本号记入笔记。',
            },
          ],
        },
        {
          id: 'ch-g-git-config',
          layout: 'steps',
          titleEn: 'Try It: Set Your Git Identity',
          titleZh: '动手：设置 Git 身份',
          bodyEn:
            'Commits need a name and email. Use your course identity; you can change it later.',
          bodyZh: '提交需要姓名与邮箱。使用课程身份即可，以后还能改。',
          bullets: [
            {
              en: 'Run `git config --global user.name "Your Name"`.',
              zh: '运行 `git config --global user.name "Your Name"`。',
            },
            {
              en: 'Run `git config --global user.email "you@example.com"`.',
              zh: '运行 `git config --global user.email "you@example.com"`。',
            },
            {
              en: 'Check with `git config --global --list`.',
              zh: '用 `git config --global --list` 检查。',
            },
            {
              en: 'Optional: set `git config --global core.editor notepad` if you want Notepad for messages.',
              zh: '可选：若想用记事本写说明，设置 `git config --global core.editor notepad`。',
            },
          ],
        },
      ],
    },
    {
      id: 'first-workflow',
      titleEn: 'First Workflow',
      titleZh: '第一次工作流',
      slides: [
        {
          id: 'ch-g-git-commands',
          layout: 'text',

          titleEn: 'The Four Commands You Will Repeat',
          titleZh: '你会反复使用的四条命令',
          bodyEn:
            'Most beginner days use the same loop: inspect status, stage files, commit with a message, then review history. Memorize the purpose of each command before shortcuts.',
          bodyZh:
            '初学大多数日子重复同一循环：查看状态、暂存文件、带说明提交，再查看历史。先记住每条命令的目的，再学快捷方式。',
          bullets: [
            {
              en: '`git status` shows what changed.',
              zh: '`git status` 显示改了什么。',
              keywords: [{ en: 'status', zh: '状态' }],
            },
            {
              en: '`git add` stages files for the next commit.',
              zh: '`git add` 把文件放入下一提交的暂存。',
            },
            {
              en: '`git commit -m "message"` saves a snapshot.',
              zh: '`git commit -m "message"` 保存快照。',
            },
            {
              en: '`git log --oneline` reviews recent history.',
              zh: '`git log --oneline` 查看近期历史。',
            },
          ],
        },
        {
          id: 'ch-g-git-gitignore',
          layout: 'text',

          titleEn: 'Ignore What Should Not Be Tracked',
          titleZh: '忽略不该被追踪的内容',
          bodyEn:
            'A `.gitignore` file tells Git which paths to skip. Virtual environments, cache folders, editor junk, and secret files should not enter commits.',
          bodyZh:
            '`.gitignore` 告诉 Git 跳过哪些路径。虚拟环境、缓存目录、编辑器垃圾和机密文件不应进入提交。',
          bullets: [
            {
              en: 'Common entries: `.venv/`, `__pycache__/`, `.env`.',
              zh: '常见条目：`.venv/`、`__pycache__/`、`.env`。',
              keywords: [{ en: '.gitignore', zh: '忽略规则文件' }],
            },
            {
              en: 'Create `.gitignore` early, before the first big add.',
              zh: '尽早创建 `.gitignore`，赶在第一次大 add 之前。',
            },
            {
              en: 'If a secret was committed, changing `.gitignore` alone is not enough.',
              zh: '若机密已被提交，只改 `.gitignore` 不够。',
            },
          ],
        },
        {
          id: 'ch-g-git-try',
          layout: 'steps',
          titleEn: 'Try It: First Local Repository',
          titleZh: '动手：第一个本地仓库',
          bodyEn:
            'Initialize Git in a practice project and create your first commit.',
          bodyZh: '在练习项目中初始化 Git，并创建第一次提交。',
          bullets: [
            {
              en: '`cd` into your project root in PowerShell.',
              zh: '在 PowerShell 中 `cd` 进入项目根目录。',
            },
            {
              en: 'Run `git init`.',
              zh: '运行 `git init`。',
              keywords: [{ en: 'git init', zh: '初始化仓库' }],
            },
            {
              en: 'Create `.gitignore` with `.venv/` and `__pycache__/`.',
              zh: '创建含 `.venv/` 与 `__pycache__/` 的 `.gitignore`。',
            },
            {
              en: 'Run `git add .` then `git status` and read the staged list.',
              zh: '运行 `git add .`，再 `git status` 阅读暂存列表。',
            },
            {
              en: 'Run `git commit -m "Initial project structure"` then `git log --oneline`.',
              zh: '运行 `git commit -m "Initial project structure"`，再 `git log --oneline`。',
            },
          ],
        },
        {
          id: 'ch-g-git-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Catch these early so Git stays helpful.',
          bodyZh: '尽早抓住这些，Git 才会一直帮你。',
          bullets: [
            {
              en: 'Running `git init` in your user home by accident.',
              zh: '误在用户主目录运行 `git init`。',
            },
            {
              en: 'Commit messages like “asdf” that teach future-you nothing.',
              zh: '像 “asdf” 这样对未来的自己毫无信息的提交说明。',
            },
            {
              en: 'Adding `.venv` and making every status huge and slow.',
              zh: '把 `.venv` 加进去，让每次 status 又大又慢。',
            },
            {
              en: 'Editing files but never committing working milestones.',
              zh: '一直改文件却从不提交可用里程碑。',
            },
          ],
        },
        {
          id: 'ch-g-git-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Confirm the mental model before branches and GitHub.',
          bodyZh: '在进入分支与 GitHub 前确认心智模型。',
          bullets: [
            {
              en: 'What is the difference between `git add` and `git commit`?',
              zh: '`git add` 与 `git commit` 有何区别？',
            },
            {
              en: 'Why does Git need `user.name` and `user.email`?',
              zh: '为什么 Git 需要 `user.name` 与 `user.email`？',
            },
            {
              en: 'Name two paths that usually belong in `.gitignore`.',
              zh: '说出通常应写入 `.gitignore` 的两个路径。',
            },
          ],
          noteEn:
            'Answers: add stages, commit snapshots; identity labels history; e.g. `.venv/`, `.env`.',
          noteZh:
            '参考：add 暂存、commit 拍快照；身份标注历史；例如 `.venv/`、`.env`。',
        },
      ],
    },
  ],
}
