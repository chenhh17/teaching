import type { Chapter } from '../../types/course'

export const chGBranches: Chapter = {
  id: 'git-branches-workflow',
  titleEn: 'Git Branches Workflow',
  titleZh: 'Git 分支工作流',
  summaryEn:
    'Use branches on Windows to isolate experiments, keep main stable, and merge finished work with clear status checks.',
  summaryZh:
    '在 Windows 上用分支隔离试验、保持主线稳定，并用清楚的状态检查合并完成的工作。',
  sections: [
    {
      id: 'branch-idea',
      titleEn: 'The Branch Idea',
      titleZh: '分支的概念',
      slides: [
        {
          id: 'ch-g-branches-title',
          layout: 'title',

          titleEn: 'Part G · Git Branches Workflow',
          titleZh: '篇章 G · Git 分支工作流',
          subtitleEn: 'Try ideas without breaking the stable line',
          subtitleZh: '尝试想法而不破坏稳定主线',
          illustration: 'title',
          keywords: [
            { en: 'Branch', zh: '分支' },
            { en: 'main', zh: 'main 主分支' },
            { en: 'Merge', zh: '合并' },
          ],
        },
        {
          id: 'ch-g-branches-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will explain why branches exist, create and switch branches in PowerShell, and keep commits organized before merging back.',
          bodyZh:
            '你将解释分支为何存在，在 PowerShell 中创建与切换分支，并在合并回主线前保持提交有序。',
          bullets: [
            {
              en: 'Describe a branch as a movable label on commits.',
              zh: '把分支描述为指向提交的可移动标签。',
            },
            {
              en: 'Create a feature branch for one focused change.',
              zh: '为一次专注改动创建功能分支。',
              keywords: [{ en: 'Feature Branch', zh: '功能分支' }],
            },
            {
              en: 'Use `git status` and `git branch` before risky moves.',
              zh: '在冒险操作前使用 `git status` 与 `git branch`。',
            },
            {
              en: 'Merge finished work back into `main` carefully.',
              zh: '小心地把完成工作合并回 `main`。',
            },
          ],
        },
        {
          id: 'ch-g-branches-why',
          layout: 'text',

          titleEn: 'Why Branches Matter for Students',
          titleZh: '为什么分支对学生重要',
          bodyEn:
            'Branches let you keep a working demo on `main` while you experiment. If the experiment fails, you still have the last good line. That safety changes how boldly you practice.',
          bodyZh:
            '分支让你在 `main` 保留可演示版本的同时去试验。试验失败时，你仍有上一条好线。这种安全感会改变你练习的大胆程度。',
          bullets: [
            {
              en: 'Stable line: what you can present tomorrow.',
              zh: '稳定线：明天还能演示的版本。',
            },
            {
              en: 'Experiment line: risky edits for learning.',
              zh: '试验线：为学习而做的冒险修改。',
            },
            {
              en: 'Merge only after the experiment proves useful.',
              zh: '只有试验证明有用后再合并。',
            },
          ],
        },
        {
          id: 'ch-g-branches-names',
          layout: 'text',

          titleEn: 'Name Branches for Humans',
          titleZh: '用人类可读的方式命名分支',
          bodyEn:
            'Branch names are communication. Future you, classmates, and teachers should guess the purpose from the name. Prefer short kebab-case descriptions over jokes or dates alone.',
          bodyZh:
            '分支名是沟通。未来的你、同学和老师应能从名字猜出用途。优先用简短 kebab-case 描述，而不是玩笑或只有日期。',
          bullets: [
            {
              en: 'Good: `feature/add-average`, `fix/file-path`.',
              zh: '好：`feature/add-average`、`fix/file-path`。',
            },
            {
              en: 'Weak: `test`, `asdf`, `newnew`.',
              zh: '弱：`test`、`asdf`、`newnew`。',
            },
            {
              en: 'One branch, one job, when you are learning.',
              zh: '学习阶段：一个分支，一件事。',
            },
          ],
          keywords: [{ en: 'Branch Name', zh: '分支名' }],
        },
      ],
    },
    {
      id: 'windows-workflow',
      titleEn: 'Windows Workflow',
      titleZh: 'Windows 工作流',
      slides: [
        {
          id: 'ch-g-branches-commands',
          layout: 'text',

          titleEn: 'Create, Switch, List',
          titleZh: '创建、切换、列出',
          bodyEn:
            'Modern Git on Windows commonly uses `git switch` for changing branches and `git switch -c` for creating. Listing branches confirms where you are before you commit.',
          bodyZh:
            'Windows 上现代 Git 常用 `git switch` 切换分支，用 `git switch -c` 创建。列出分支能在提交前确认你在哪里。',
          bullets: [
            {
              en: '`git branch` lists local branches; star marks current.',
              zh: '`git branch` 列出本地分支；星号标记当前。',
            },
            {
              en: '`git switch -c feature/demo` creates and moves.',
              zh: '`git switch -c feature/demo` 创建并切换。',
              keywords: [{ en: 'git switch', zh: '切换分支' }],
            },
            {
              en: '`git switch main` returns to the stable line.',
              zh: '`git switch main` 回到稳定线。',
            },
          ],
        },
        {
          id: 'ch-g-branches-status',
          layout: 'text',

          titleEn: 'Status Before Every Switch',
          titleZh: '每次切换前先看状态',
          bodyEn:
            'Switching with uncommitted work can fail or carry changes unexpectedly. Make `git status` a reflex. Commit, stash only when taught later, or finish the edit before switching.',
          bodyZh:
            '带着未提交改动切换可能失败，或意外带走更改。让 `git status` 成为反射。先提交，或等以后学 stash，或在切换前完成编辑。',
          bullets: [
            {
              en: 'Clean status makes branch moves predictable.',
              zh: '干净状态让分支移动可预期。',
            },
            {
              en: 'If status is noisy, read whether files are staged or unstaged.',
              zh: '若状态很吵，先分清文件是已暂存还是未暂存。',
            },
            {
              en: 'Do not panic-delete files to get a clean status.',
              zh: '不要为了干净状态而恐慌删除文件。',
            },
          ],
        },
        {
          id: 'ch-g-branches-commits',
          layout: 'text',

          titleEn: 'Commit on the Branch, Then Merge',
          titleZh: '在分支上提交，然后再合并',
          bodyEn:
            'Do the work on the feature branch with small commits. When ready, switch to `main` and merge the feature branch. For class projects, a simple fast-forward or merge commit is enough.',
          bodyZh:
            '在功能分支上用小提交完成工作。准备好后切换到 `main` 并合并功能分支。课堂项目用简单快进或合并提交即可。',
          bullets: [
            {
              en: 'Keep commit messages tied to the branch purpose.',
              zh: '让提交说明与分支目的绑定。',
            },
            {
              en: '`git merge feature/demo` while on `main` brings work in.',
              zh: '在 `main` 上运行 `git merge feature/demo` 接入工作。',
              keywords: [{ en: 'git merge', zh: '合并' }],
            },
            {
              en: 'If Git reports conflicts, stop and read both sides carefully.',
              zh: '若 Git 报告冲突，停下并仔细阅读双方内容。',
              keywords: [{ en: 'Conflict', zh: '冲突' }],
            },
          ],
        },
        {
          id: 'ch-g-branches-try',
          layout: 'steps',
          titleEn: 'Try It: Feature Branch Round Trip',
          titleZh: '动手：功能分支往返',
          bodyEn:
            'Practice a full create-commit-merge loop on a local practice repo.',
          bodyZh: '在本地练习仓库完成创建-提交-合并全循环。',
          bullets: [
            {
              en: '`cd` into a Git project and run `git status`.',
              zh: '`cd` 进入 Git 项目并运行 `git status`。',
            },
            {
              en: 'Create a branch: `git switch -c feature/hello-note`.',
              zh: '创建分支：`git switch -c feature/hello-note`。',
            },
            {
              en: 'Edit a file, then `git add` and `git commit -m "Add hello note"`.',
              zh: '编辑文件，然后 `git add` 与 `git commit -m "Add hello note"`。',
            },
            {
              en: 'Switch back: `git switch main`.',
              zh: '切回：`git switch main`。',
            },
            {
              en: 'Merge: `git merge feature/hello-note` and check `git log --oneline --graph`.',
              zh: '合并：`git merge feature/hello-note`，再查看 `git log --oneline --graph`。',
            },
          ],
        },
        {
          id: 'ch-g-branches-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Branch mistakes are usually process mistakes.',
          bodyZh: '分支错误通常是流程错误。',
          bullets: [
            {
              en: 'Doing experimental work directly on `main`.',
              zh: '直接在 `main` 上做试验性工作。',
            },
            {
              en: 'Creating many branches and forgetting which is active.',
              zh: '创建很多分支却忘记当前是哪一个。',
            },
            {
              en: 'Merging before the feature actually runs.',
              zh: '功能还不能运行就合并。',
            },
            {
              en: 'Using `checkout` and `switch` randomly without reading status.',
              zh: '不看状态就随机混用 `checkout` 与 `switch`。',
            },
          ],
        },
        {
          id: 'ch-g-branches-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Validate branch thinking with short answers.',
          bodyZh: '用简短回答验证分支思维。',
          bullets: [
            {
              en: 'Why keep `main` more stable than feature branches?',
              zh: '为什么要让 `main` 比功能分支更稳定？',
            },
            {
              en: 'Which command shows the current branch?',
              zh: '哪条命令能显示当前分支？',
            },
            {
              en: 'What should you check before `git switch`?',
              zh: '`git switch` 之前应检查什么？',
            },
          ],
          noteEn:
            'Answers: demos/safety; `git branch` or status header; clean or understood working tree via `git status`.',
          noteZh:
            '参考：演示与安全；`git branch` 或 status 提示；通过 `git status` 确认工作区干净或你理解其状态。',
        },
      ],
    },
  ],
}
