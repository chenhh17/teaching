import type { Chapter } from '../../types/course'

export const chDBackup: Chapter = {
  id: 'backup-and-sync',
  titleEn: 'Backup and Sync',
  titleZh: '备份与同步',
  summaryEn: 'Zip archives, OneDrive sync, and simple backup habits for school work.',
  summaryZh: '压缩包、OneDrive 同步，以及作业与项目的简单备份习惯。',
  sections: [
    {
      id: 'why-backup',
      titleEn: 'Why Backup',
      titleZh: '为什么要备份',
      slides: [
        {
          id: 'ch-d-backup-title',
          layout: 'title',

          titleEn: 'Part D · Backup and Sync',
          titleZh: '篇章 D · 备份与同步',
          subtitleEn: 'Keep more than one copy of important work',
          subtitleZh: '重要作业不要只留一份',
          keywords: [
            { en: 'Backup', zh: '备份' },
            { en: 'Sync', zh: '同步' },
            { en: 'OneDrive', zh: '微软云盘' },
          ],
        },
        {
          id: 'ch-d-backup-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Backup is insurance for homework. Learn the difference between sync and backup, make a zip archive, and keep a second copy you can actually restore.',
          bodyZh:
            '备份是作业的保险。学会同步与备份的区别，制作 zip 压缩包，并保留一份真正能还原的第二副本。',
          bullets: [
            {
              en: 'Explain backup versus sync in one sentence each.',
              zh: '分别用一句话解释备份与同步。',
            },
            {
              en: 'Create a zip archive of a project folder on Windows.',
              zh: '在 Windows 上为项目文件夹创建 zip 压缩包。',
            },
            {
              en: 'Describe a simple 3-2-1 style habit for school work.',
              zh: '描述适合课程作业的简单 3-2-1 习惯。',
            },
          ],
        },
        {
          id: 'ch-d-backup-why',
          layout: 'text',

          titleEn: 'Why One Copy Is Not Enough',
          titleZh: '为什么一份不够',
          bodyEn:
            'Laptops fail, USB sticks get lost, and accidental deletes happen before deadlines. A second copy in a different place turns a disaster into an inconvenience.',
          bodyZh:
            '笔记本会坏，U 盘会丢，截止日期前也会误删。把第二副本放在不同位置，能把灾难变成小麻烦。',
          bullets: [
            {
              en: 'Hardware failure and theft are real student risks.',
              zh: '硬件故障与失窃是学生真实会遇到的风险。',
              keywords: [{ en: 'Backup', zh: '备份' }],
            },
            {
              en: 'Overwrite mistakes are as common as broken disks.',
              zh: '覆盖错误与磁盘损坏一样常见。',
            },
            {
              en: 'Backup matters most the week before demos and exams.',
              zh: '演示与考试前一周，备份最重要。',
            },
          ],
        },
        {
          id: 'ch-d-backup-sync',
          layout: 'text',

          titleEn: 'Sync Is Not Backup',
          titleZh: '同步不是备份',
          bodyEn:
            'Sync mirrors changes quickly, including bad changes. If you delete a file locally and sync finishes, the cloud copy may disappear too. Backup keeps an older recoverable copy on purpose.',
          bodyZh:
            '同步会快速镜像更改，也包括错误更改。若你在本地删除文件且同步完成，云端副本也可能一起消失。备份是有意保留可恢复的旧副本。',
          bullets: [
            {
              en: 'Sync is convenience across devices.',
              zh: '同步是跨设备的便利。',
              keywords: [{ en: 'Sync', zh: '同步' }],
            },
            {
              en: 'Backup is recovery after mistakes or loss.',
              zh: '备份是在出错或丢失后用于恢复。',
            },
            {
              en: 'Use both: sync daily, backup before major deadlines.',
              zh: '两者都用：日常同步，重大截止前再备份。',
            },
          ],
        },
      ],
    },
    {
      id: 'methods',
      titleEn: 'Practical Methods',
      titleZh: '实用方法',
      slides: [
        {
          id: 'ch-d-backup-zip',
          layout: 'text',

          titleEn: 'ZIP as a Snapshot',
          titleZh: '用 ZIP 做快照',
          bodyEn:
            'A zip archive freezes a folder at a moment in time. Name it with the project and date, then store the zip somewhere other than the original folder.',
          bodyZh:
            'zip 压缩包把文件夹冻结在某一时刻。用项目名与日期命名，并把 zip 存到原文件夹以外的位置。',
          bullets: [
            {
              en: 'Right-click the folder → Compress to ZIP file / Send to → Compressed folder.',
              zh: '右键文件夹 → 压缩为 ZIP 文件 / 发送到 → 压缩文件夹。',
              keywords: [{ en: 'ZIP', zh: '压缩包' }],
            },
            {
              en: 'Example name: week03_project_2026-08-11.zip',
              zh: '示例名称：week03_project_2026-08-11.zip',
            },
            {
              en: 'Keep the zip on another drive or in cloud storage.',
              zh: '把 zip 放在另一块盘或云存储中。',
            },
          ],
        },
        {
          id: 'ch-d-backup-drive',
          layout: 'text',

          titleEn: 'External Drive Copies',
          titleZh: '外接硬盘副本',
          bodyEn:
            'Copying a projects folder to an external drive creates a second physical copy. Eject the drive safely and store it apart from the laptop when possible.',
          bodyZh:
            '把 projects 文件夹复制到外接硬盘，就多了一份物理副本。尽可能安全弹出，并与笔记本分开存放。',
          bullets: [
            {
              en: 'Use Copy and Paste or drag with Ctrl to copy, not move by accident.',
              zh: '用复制粘贴或按住 Ctrl 拖动来复制，避免误移动。',
            },
            {
              en: 'Label the drive and keep a simple folder for this course.',
              zh: '给硬盘贴标签，并为这门课保留简单文件夹。',
            },
            {
              en: 'Test restore once: open a file from the backup drive.',
              zh: '至少测试还原一次：从备份盘打开一个文件。',
            },
          ],
        },
        {
          id: 'ch-d-backup-onedrive',
          layout: 'text',

          titleEn: 'OneDrive as a Second Place',
          titleZh: '把 OneDrive 当作第二位置',
          bodyEn:
            'OneDrive can host a second copy of school work when your account is trusted and private. Still make a dated zip before major submissions, because sync alone can erase mistakes everywhere.',
          bodyZh:
            '在账户可信且私密时，OneDrive 可存放作业的第二副本。重大提交前仍建议做带日期的 zip，因为仅靠同步可能把错误同步到所有地方。',
          bullets: [
            {
              en: 'Confirm sync finished before you shut down after a late-night save.',
              zh: '熬夜保存后关机前，确认同步已完成。',
              keywords: [{ en: 'OneDrive', zh: '微软云盘' }],
            },
            {
              en: 'Version history in cloud apps can help, but do not rely on it alone.',
              zh: '云应用的版本历史可能有帮助，但不要只依赖它。',
            },
            {
              en: 'Do not back up secrets into shared course folders.',
              zh: '不要把密钥备份进共享课程文件夹。',
            },
          ],
        },
        {
          id: 'ch-d-backup-321',
          layout: 'text',

          titleEn: 'A Student-Friendly 3-2-1 Habit',
          titleZh: '适合学生的 3-2-1 习惯',
          bodyEn:
            'Aim for three copies, on two different kinds of storage, with one copy off the laptop. Example: working folder on C:, zip on OneDrive, and a weekly copy on a USB or external drive.',
          bodyZh:
            '目标是三份副本、两种存储介质，其中一份离开笔记本。例如：C: 上的工作文件夹、OneDrive 上的 zip，以及每周一次的 U 盘或外接硬盘副本。',
          bullets: [
            {
              en: 'Three copies: working file, cloud or zip, external copy.',
              zh: '三份副本：工作文件、云或 zip、外部副本。',
            },
            {
              en: 'Two media: internal disk plus cloud or USB.',
              zh: '两种介质：内置磁盘，外加云或 U 盘。',
            },
            {
              en: 'One off-machine copy protects against laptop loss.',
              zh: '一份离开本机的副本可防笔记本丢失。',
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
          id: 'ch-d-backup-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Make a dated zip of a practice folder and store it outside that folder.',
          bodyZh: '为练习文件夹制作带日期的 zip，并存放在该文件夹之外。',
          bullets: [
            {
              en: 'Create or open C:\\Users\\You\\projects\\practice.',
              zh: '创建或打开 C:\\Users\\你的用户名\\projects\\practice。',
            },
            {
              en: 'Compress the folder to a zip named practice_YYYY-MM-DD.zip.',
              zh: '把文件夹压缩为名为 practice_YYYY-MM-DD.zip 的压缩包。',
            },
            {
              en: 'Move the zip to Desktop temporarily or to OneDrive, then confirm you can extract it.',
              zh: '把 zip 暂时移到桌面或 OneDrive，再确认可以解压。',
            },
          ],
        },
        {
          id: 'ch-d-backup-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Keeping the zip inside the same folder you are about to delete.',
              zh: '把 zip 放在正准备删除的同一文件夹里。',
            },
            {
              en: 'Trusting sync alone after a bad overwrite.',
              zh: '错误覆盖后还只信任同步。',
            },
            {
              en: 'Never testing whether a backup can be opened.',
              zh: '从不测试备份是否打得开。',
            },
          ],
        },
        {
          id: 'ch-d-backup-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'How is backup different from sync?',
              zh: '备份与同步有何不同？',
            },
            {
              en: 'What is one easy Windows way to snapshot a folder?',
              zh: '在 Windows 上给文件夹做快照的一个简单方法是什么？',
            },
            {
              en: 'Name one off-machine place for a second copy.',
              zh: '说出一个离开本机的第二副本位置。',
            },
          ],
          noteEn:
            'Answers: backup keeps recoverable older copies; zip compress; OneDrive, USB, or external drive.',
          noteZh:
            '参考答案：备份保留可恢复的旧副本；打 zip；OneDrive、U 盘或外接硬盘。',
        },
      ],
    },
  ],
}
