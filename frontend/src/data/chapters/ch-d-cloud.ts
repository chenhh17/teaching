import type { Chapter } from '../../types/course'

export const chDCloud: Chapter = {
  id: 'cloud-vs-local',
  titleEn: 'Cloud vs Local',
  titleZh: '云端与本地',
  summaryEn: 'Compare local disks and cloud sync, spot risks like overwrite and offline gaps, and choose where school work should live.',
  summaryZh: '比较本地磁盘与云同步，识别覆盖与离线缺口等风险，并选择课程作业应放的位置。',
  sections: [
    {
      id: 'two-places',
      titleEn: 'Two Places for Files',
      titleZh: '文件的两种位置',
      slides: [
        {
          id: 'ch-d-cloud-title',
          layout: 'title',

          titleEn: 'Part D · Cloud vs Local',
          titleZh: '篇章 D · 云端与本地',
          subtitleEn: 'Know where your real copy lives',
          subtitleZh: '弄清真正那份文件在哪里',
          keywords: [
            { en: 'Local Storage', zh: '本地存储' },
            { en: 'Cloud Sync', zh: '云同步' },
            { en: 'OneDrive', zh: '微软云盘' },
          ],
        },
        {
          id: 'ch-d-cloud-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Cloud sync is convenient, not magic. Learn what local and cloud each do well, and where beginners lose work through overwrite or offline gaps.',
          bodyZh:
            '云同步方便，但不是魔法。学会本地与云端各自擅长什么，以及初学者如何因覆盖或离线缺口丢失作业。',
          bullets: [
            {
              en: 'Define local storage versus cloud sync in plain words.',
              zh: '用白话区分本地存储与云同步。',
            },
            {
              en: 'Spot risks: overwrite, unfinished sync, and offline edits.',
              zh: '识别风险：覆盖、未完成同步与离线编辑。',
            },
            {
              en: 'Choose a primary place for school project files.',
              zh: '为课程项目文件选择一个主要存放位置。',
            },
          ],
        },
        {
          id: 'ch-d-cloud-local',
          layout: 'text',

          titleEn: 'Local Storage',
          titleZh: '本地存储',
          bodyEn:
            'Local storage is the disk inside your PC or a USB drive you can hold. Files are available without the internet, but a broken disk or lost laptop can take the only copy with it.',
          bodyZh:
            '本地存储是电脑内的磁盘，或你能拿在手里的 U 盘。文件无需网络即可使用，但磁盘损坏或笔记本丢失可能带走唯一副本。',
          bullets: [
            {
              en: 'C: and other drive letters are local volumes on Windows.',
              zh: 'C: 与其他盘符是 Windows 上的本地卷。',
              keywords: [{ en: 'Local Storage', zh: '本地存储' }],
            },
            {
              en: 'USB sticks are local and portable, but easy to lose.',
              zh: 'U 盘本地且便携，但容易丢失。',
            },
            {
              en: 'Local-only work needs a separate backup plan.',
              zh: '只存在本地的作业需要单独的备份计划。',
            },
          ],
        },
        {
          id: 'ch-d-cloud-sync',
          layout: 'text',

          titleEn: 'Cloud Sync',
          titleZh: '云同步',
          bodyEn:
            'Cloud sync services such as OneDrive keep a copy on remote servers and often a mirrored folder on your PC. Changes can travel between devices when the network is available.',
          bodyZh:
            'OneDrive 等云同步服务会在远程服务器保留副本，并常在电脑上镜像一个文件夹。有网络时，更改可在设备间传递。',
          bullets: [
            {
              en: 'OneDrive is common on Windows school and personal accounts.',
              zh: 'Windows 校园与个人账户上常见 OneDrive。',
              keywords: [
                { en: 'Cloud Sync', zh: '云同步' },
                { en: 'OneDrive', zh: '微软云盘' },
              ],
            },
            {
              en: 'A cloud icon in Explorer does not always mean the file is fully downloaded.',
              zh: '资源管理器中的云图标并不总表示文件已完整下载。',
            },
            {
              en: 'Sync is not the same as a deliberate versioned backup.',
              zh: '同步并不等于有意做的版本化备份。',
            },
          ],
        },
      ],
    },
    {
      id: 'risks-and-choices',
      titleEn: 'Risks and Choices',
      titleZh: '风险与选择',
      slides: [
        {
          id: 'ch-d-cloud-overwrite',
          layout: 'text',

          titleEn: 'Overwrite and Conflict Risk',
          titleZh: '覆盖与冲突风险',
          bodyEn:
            'If the same file is edited on two devices before sync finishes, one version can overwrite the other or create conflict copies. Wait for sync to finish before switching machines.',
          bodyZh:
            '若同步完成前在两台设备编辑同一文件，一个版本可能覆盖另一个，或产生冲突副本。换设备前先等待同步完成。',
          bullets: [
            {
              en: 'Look for sync status in the OneDrive icon near the clock.',
              zh: '在时钟旁的 OneDrive 图标查看同步状态。',
            },
            {
              en: 'Conflict copies mean you must compare and choose carefully.',
              zh: '出现冲突副本时，必须仔细比较再选择。',
            },
            {
              en: 'Do not assume the newest timestamp is always the best work.',
              zh: '不要假设最新时间戳一定是最好的那份作业。',
            },
          ],
        },
        {
          id: 'ch-d-cloud-offline',
          layout: 'text',

          titleEn: 'Offline Gaps',
          titleZh: '离线缺口',
          bodyEn:
            'Files set to online-only may not open without internet. Before a trip or lab with weak Wi-Fi, keep important homework always available on this device.',
          bodyZh:
            '仅联机文件在没有网络时可能打不开。出行或 Wi-Fi 不稳的实验前，把重要作业设为在此设备始终可用。',
          bullets: [
            {
              en: 'Right-click a OneDrive file → Always keep on this device when needed.',
              zh: '需要时右键 OneDrive 文件 → 始终在此设备上保留。',
            },
            {
              en: 'Free up space only for files you can re-download safely.',
              zh: '仅为可以安全重新下载的文件释放空间。',
            },
            {
              en: 'Exam week is a bad time to discover a file was online-only.',
              zh: '考试周才发现文件是仅联机，就太晚了。',
            },
          ],
        },
        {
          id: 'ch-d-cloud-choose',
          layout: 'text',

          titleEn: 'Choose a Primary Home',
          titleZh: '选择一个主要存放处',
          bodyEn:
            'Pick one primary home for class projects, usually a local projects folder that also syncs, or a clearly named OneDrive course folder. Avoid scattering copies across Desktop, USB, and chat apps.',
          bodyZh:
            '为课程项目选一个主要存放处，通常是也会同步的本地 projects，或命名清晰的 OneDrive 课程文件夹。避免在桌面、U 盘与聊天软件之间散落多份副本。',
          bullets: [
            {
              en: 'One primary home plus one backup is clearer than five random copies.',
              zh: '一个主存放处加一份备份，比五份随意副本更清晰。',
            },
            {
              en: 'Chat app attachments are delivery, not storage.',
              zh: '聊天软件附件是传递方式，不是存储方案。',
            },
            {
              en: 'Tell yourself which path is the source of truth.',
              zh: '明确告诉自己哪条路径才是权威版本。',
            },
          ],
        },
        {
          id: 'ch-d-cloud-privacy',
          layout: 'text',

          titleEn: 'Accounts and Privacy',
          titleZh: '账户与隐私',
          bodyEn:
            'Cloud files follow the account that owns them. Shared lab sign-in and personal OneDrive should not be mixed carelessly. Do not sync secrets or passwords into a shared folder.',
          bodyZh:
            '云文件跟随拥有它的账户。共用机房登录与个人 OneDrive 不要随意混用。不要把密钥或密码同步进共享文件夹。',
          bullets: [
            {
              en: 'Sign out of personal cloud accounts on shared PCs when finished.',
              zh: '在共用电脑用完后注销个人云账户。',
            },
            {
              en: 'Check sharing links before you paste course folders publicly.',
              zh: '把课程文件夹公开粘贴前，先检查共享链接。',
            },
            {
              en: 'School policies may restrict which cloud tools are allowed.',
              zh: '学校政策可能限制可用的云工具。',
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
          id: 'ch-d-cloud-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Locate your OneDrive or local projects folder and confirm sync or free-space status.',
          bodyZh: '找到你的 OneDrive 或本地 projects 文件夹，并确认同步或剩余空间状态。',
          bullets: [
            {
              en: 'Open File Explorer and find OneDrive or your projects folder under This PC.',
              zh: '打开文件资源管理器，在“此电脑”下找到 OneDrive 或 projects 文件夹。',
            },
            {
              en: 'Check the OneDrive icon near the clock for sync status, or note free space on C:.',
              zh: '查看时钟旁 OneDrive 图标的同步状态，或记录 C: 的剩余空间。',
            },
            {
              en: 'Write down which path will be the primary home for this course.',
              zh: '写下本课程的主要存放路径。',
            },
          ],
        },
        {
          id: 'ch-d-cloud-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Editing the same synced file on two PCs before sync finishes.',
              zh: '同步完成前在两台电脑编辑同一同步文件。',
            },
            {
              en: 'Assuming a cloud icon means the file is fully on this device.',
              zh: '以为有云图标就表示文件已完整在本机。',
            },
            {
              en: 'Keeping the only copy inside a chat thread or email attachment.',
              zh: '把唯一副本只留在聊天记录或邮件附件里。',
            },
          ],
        },
        {
          id: 'ch-d-cloud-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What is one advantage of local storage?',
              zh: '本地存储的一个优点是什么？',
            },
            {
              en: 'What is one risk of cloud sync?',
              zh: '云同步的一个风险是什么？',
            },
            {
              en: 'Why are chat attachments a weak primary home?',
              zh: '为什么聊天附件不适合当主要存放处？',
            },
          ],
          noteEn:
            'Answers: works offline; overwrite/conflict or online-only gaps; hard to organize and easy to lose.',
          noteZh:
            '参考答案：可离线使用；覆盖/冲突或仅联机缺口；难整理且易丢失。',
        },
      ],
    },
  ],
}
