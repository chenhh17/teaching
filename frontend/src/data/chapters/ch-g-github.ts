import type { Chapter } from '../../types/course'

export const chGGithub: Chapter = {
  id: 'github-sharing',
  titleEn: 'GitHub and Sharing Code',
  titleZh: 'GitHub 与代码分享',
  summaryEn:
    'Connect local Git on Windows to GitHub, push safely, clone projects, and keep secrets out of remote repositories.',
  summaryZh:
    '把 Windows 上的本地 Git 连接到 GitHub，安全推送、克隆项目，并避免把机密放进远程仓库。',
  sections: [
    {
      id: 'why-github',
      titleEn: 'Why GitHub',
      titleZh: '为什么用 GitHub',
      slides: [
        {
          id: 'ch-g-github-title',
          layout: 'title',

          titleEn: 'Part G · GitHub and Sharing Code',
          titleZh: '篇章 G · GitHub 与代码分享',
          subtitleEn: 'Remote backup and collaboration start here',
          subtitleZh: '远程备份与协作从这里开始',
          illustration: 'title',
          keywords: [
            { en: 'GitHub', zh: 'GitHub' },
            { en: 'Remote', zh: '远程仓库' },
            { en: 'Push', zh: '推送' },
          ],
        },
        {
          id: 'ch-g-github-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will distinguish Git from GitHub, create a remote repository, push a local project from Windows, and clone a repo into a known folder.',
          bodyZh:
            '你将区分 Git 与 GitHub，创建远程仓库，从 Windows 推送本地项目，并把仓库克隆到已知文件夹。',
          bullets: [
            {
              en: 'Explain remote as a hosted copy of history.',
              zh: '把远程解释为托管的历史副本。',
              keywords: [{ en: 'Remote', zh: '远程仓库' }],
            },
            {
              en: 'Create an empty GitHub repo for class practice.',
              zh: '为课堂练习创建一个空的 GitHub 仓库。',
            },
            {
              en: 'Use `git remote`, `git push`, and `git clone` in PowerShell.',
              zh: '在 PowerShell 使用 `git remote`、`git push` 与 `git clone`。',
            },
            {
              en: 'Keep passwords, tokens, and `.env` files off GitHub.',
              zh: '不要把密码、令牌和 `.env` 文件放到 GitHub。',
            },
          ],
        },
        {
          id: 'ch-g-github-account',
          layout: 'text',

          titleEn: 'Git Is Local; GitHub Is Hosting',
          titleZh: 'Git 在本地；GitHub 是托管',
          bodyEn:
            'Git records history on your PC. GitHub stores a remote copy you can browse in a browser, share with a teacher, and recover if the laptop fails. You need both ideas, not only the website.',
          bodyZh:
            'Git 在电脑上记录历史。GitHub 保存一份可在浏览器浏览、可与老师分享、笔记本坏了也能找回的远程副本。你需要两个概念，而不只是网站。',
          bullets: [
            {
              en: 'Local commits work offline.',
              zh: '本地提交可离线完成。',
            },
            {
              en: 'Push publishes commits you already made.',
              zh: '推送发布你已经做过的提交。',
              keywords: [{ en: 'Push', zh: '推送' }],
            },
            {
              en: 'Clone copies a remote project onto your machine.',
              zh: '克隆把远程项目复制到你的机器。',
              keywords: [{ en: 'Clone', zh: '克隆' }],
            },
          ],
          illustration: 'git',
        },
      ],
    },
    {
      id: 'remote-push',
      titleEn: 'Remote and Push',
      titleZh: '远程与推送',
      slides: [
        {
          id: 'ch-g-github-remote',
          layout: 'text',

          titleEn: 'What a Remote Name Means',
          titleZh: '远程名是什么意思',
          bodyEn:
            'Git stores remote URLs under short names. The common name is `origin`. Commands like `git push -u origin main` send your `main` branch to that URL and remember the upstream link.',
          bodyZh:
            'Git 用短名保存远程 URL。常见名字是 `origin`。像 `git push -u origin main` 这样的命令会把 `main` 送到该 URL，并记住上游链接。',
          bullets: [
            {
              en: '`git remote -v` shows fetch and push URLs.',
              zh: '`git remote -v` 显示 fetch 与 push 地址。',
            },
            {
              en: 'HTTPS and SSH are two ways to authenticate.',
              zh: 'HTTPS 与 SSH 是两种认证方式。',
              keywords: [
                { en: 'HTTPS', zh: 'HTTPS' },
                { en: 'SSH', zh: 'SSH' },
              ],
            },
            {
              en: 'Follow your course auth method; do not share tokens in chat.',
              zh: '遵循课程认证方式；不要在聊天里分享令牌。',
              keywords: [{ en: 'Token', zh: '令牌' }],
            },
          ],
        },
        {
          id: 'ch-g-github-create-repo',
          layout: 'text',

          titleEn: 'Create an Empty Repo on GitHub',
          titleZh: '在 GitHub 创建空仓库',
          bodyEn:
            'For an existing local project, create an empty GitHub repository without adding a README if your local folder already has commits. Two README starts cause merge noise for beginners.',
          bodyZh:
            '若本地项目已有提交，在 GitHub 创建空仓库时不要再加 README。两边都有 README 会给初学者带来合并噪音。',
          bullets: [
            {
              en: 'Choose a clear repo name matching the local folder idea.',
              zh: '选择与本地文件夹主旨匹配的清晰仓库名。',
            },
            {
              en: 'Public vs private: follow class policy.',
              zh: '公开或私有：遵循课堂政策。',
              keywords: [
                { en: 'Public', zh: '公开' },
                { en: 'Private', zh: '私有' },
              ],
            },
            {
              en: 'Copy the HTTPS URL GitHub shows after creation.',
              zh: '创建后复制 GitHub 显示的 HTTPS URL。',
            },
          ],
        },
        {
          id: 'ch-g-github-push-steps',
          layout: 'steps',
          titleEn: 'Try It: Push a Local Project',
          titleZh: '动手：推送本地项目',
          bodyEn:
            'Connect `origin` and publish `main` from PowerShell.',
          bodyZh: '在 PowerShell 连接 `origin` 并发布 `main`。',
          bullets: [
            {
              en: 'Confirm clean commits locally with `git status` and `git log --oneline`.',
              zh: '用 `git status` 与 `git log --oneline` 确认本地提交干净。',
            },
            {
              en: 'Run `git remote add origin https://github.com/USER/REPO.git`.',
              zh: '运行 `git remote add origin https://github.com/USER/REPO.git`。',
            },
            {
              en: 'Check with `git remote -v`.',
              zh: '用 `git remote -v` 检查。',
            },
            {
              en: 'Push with `git push -u origin main` (or `master` if that is your branch).',
              zh: '用 `git push -u origin main` 推送（若分支是 `master` 则用它）。',
            },
            {
              en: 'Refresh the GitHub page and confirm files appear.',
              zh: '刷新 GitHub 页面，确认文件出现。',
            },
          ],
        },
        {
          id: 'ch-g-github-clone',
          layout: 'steps',
          titleEn: 'Try It: Clone into Your Projects Folder',
          titleZh: '动手：克隆到项目文件夹',
          bodyEn:
            'Cloning is how you start from an existing remote project.',
          bodyZh: '克隆是从已有远程项目开始的方式。',
          bullets: [
            {
              en: '`cd` into `C:\\Users\\YourName\\projects`.',
              zh: '`cd` 进入 `C:\\Users\\YourName\\projects`。',
            },
            {
              en: 'Run `git clone https://github.com/USER/REPO.git`.',
              zh: '运行 `git clone https://github.com/USER/REPO.git`。',
            },
            {
              en: '`cd` into the new folder and run `git status`.',
              zh: '`cd` 进入新文件夹并运行 `git status`。',
            },
            {
              en: 'Open that folder in your editor with Open Folder.',
              zh: '在编辑器里用“打开文件夹”打开它。',
            },
          ],
        },
      ],
    },
    {
      id: 'practice-safety',
      titleEn: 'Practice Safety',
      titleZh: '练习安全',
      slides: [
        {
          id: 'ch-g-github-secrets',
          layout: 'text',

          titleEn: 'Never Push Secrets',
          titleZh: '永远不要推送机密',
          bodyEn:
            'GitHub repos are easy to browse and easy to fork. API keys, passwords, private homework answers when forbidden, and personal data do not belong in commits. Use `.gitignore` and environment variables instead.',
          bodyZh:
            'GitHub 仓库易于浏览与 fork。API 密钥、密码、禁止公开的作业答案和个人数据不应进入提交。改用 `.gitignore` 与环境变量。',
          bullets: [
            {
              en: 'Ignore `.env` and credential files from day one.',
              zh: '从第一天起忽略 `.env` 与凭证文件。',
            },
            {
              en: 'If a secret was pushed, rotate the secret; do not only delete the file.',
              zh: '若机密已推送，轮换该机密；不要只删除文件。',
              keywords: [{ en: 'Rotate', zh: '轮换凭证' }],
            },
            {
              en: 'Review `git status` before every push.',
              zh: '每次推送前检查 `git status`。',
            },
          ],
        },
        {
          id: 'ch-g-github-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Remote mistakes are costly because copies spread.',
          bodyZh: '远程错误代价高，因为副本会扩散。',
          bullets: [
            {
              en: 'Creating a GitHub README and a local README, then getting stuck on first push.',
              zh: 'GitHub 与本地都建 README，首次推送就卡住。',
            },
            {
              en: 'Pushing from the wrong folder or wrong branch.',
              zh: '从错误文件夹或错误分支推送。',
            },
            {
              en: 'Pasting personal access tokens into screenshots for help.',
              zh: '为了求助把个人访问令牌贴进截图。',
            },
            {
              en: 'Assuming GitHub backup replaces local commits you never made.',
              zh: '以为 GitHub 备份能代替你从未做过的本地提交。',
            },
          ],
        },
        {
          id: 'ch-g-github-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Confirm you can talk about remotes accurately.',
          bodyZh: '确认你能准确谈论远程。',
          bullets: [
            {
              en: 'What is the difference between Git and GitHub?',
              zh: 'Git 与 GitHub 有何区别？',
            },
            {
              en: 'What does `origin` usually mean?',
              zh: '`origin` 通常表示什么？',
            },
            {
              en: 'Name two secret types that must never be pushed.',
              zh: '说出两类绝不能推送的机密。',
            },
          ],
          noteEn:
            'Answers: tool vs hosting; default remote name; passwords/tokens/API keys/.env values.',
          noteZh:
            '参考：工具 vs 托管；默认远程名；密码/令牌/API 密钥/.env 值。',
        },
      ],
    },
  ],
}
