import type { Chapter } from '../../types/course'

export const chDOrganize: Chapter = {
  id: 'search-and-organize',
  titleEn: 'Search and Organize',
  titleZh: '搜索与整理',
  summaryEn: 'Find files with Windows search, sort and filter in File Explorer, and keep school projects tidy.',
  summaryZh: '用 Windows 搜索找文件，在资源管理器中排序与筛选，并保持课程项目整洁。',
  sections: [
    {
      id: 'find-files',
      titleEn: 'Find Files',
      titleZh: '查找文件',
      slides: [
        {
          id: 'ch-d-organize-title',
          layout: 'title',

          titleEn: 'Part D · Search and Organize',
          titleZh: '篇章 D · 搜索与整理',
          subtitleEn: 'Stop guessing which folder holds your homework',
          subtitleZh: '别再猜作业在哪个文件夹里',
          keywords: [
            { en: 'Search', zh: '搜索' },
            { en: 'Sort', zh: '排序' },
            { en: 'Organize', zh: '整理' },
          ],
        },
        {
          id: 'ch-d-organize-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Organization is a skill, not a personality trait. Learn search, sort, and a weekly cleanup habit so homework does not disappear before the deadline.',
          bodyZh:
            '整理是技能，不是性格。学会搜索、排序与每周清理习惯，让作业不会在截止日期前消失。',
          bullets: [
            {
              en: 'Use Start search and File Explorer search to find files.',
              zh: '用开始搜索与文件资源管理器搜索找文件。',
            },
            {
              en: 'Sort and group files by name, date, or type.',
              zh: '按名称、日期或类型排序与分组文件。',
            },
            {
              en: 'Keep a tidy projects folder for each course week.',
              zh: '为每周课程保持整洁的 projects 文件夹。',
            },
          ],
        },
        {
          id: 'ch-d-organize-search',
          layout: 'text',

          titleEn: 'Search Instead of Scrolling',
          titleZh: '用搜索代替盲目滚动',
          bodyEn:
            'Press the Windows key and type part of the file name. Inside a folder, use the File Explorer search box to limit results to that location. Search beats opening every Desktop shortcut.',
          bodyZh:
            '按 Windows 键并输入文件名的一部分。在文件夹内可用资源管理器搜索框限定范围。搜索比逐个打开桌面快捷方式更有效。',
          bullets: [
            {
              en: 'Start search finds apps, settings, and files together.',
              zh: '开始搜索可同时找应用、设置与文件。',
              keywords: [{ en: 'Search', zh: '搜索' }],
            },
            {
              en: 'Explorer search is better when you already know the parent folder.',
              zh: '已知父文件夹时，资源管理器搜索更合适。',
            },
            {
              en: 'Try distinctive words from the file name, not only “作业”.',
              zh: '尽量用文件名中有辨识度的词，不要只搜“作业”。',
            },
          ],
        },
        {
          id: 'ch-d-organize-sort',
          layout: 'text',

          titleEn: 'Sort and Filter in Explorer',
          titleZh: '在资源管理器中排序与筛选',
          bodyEn:
            'Click column headers to sort by Name, Date modified, Type, or Size. In Details view, filters help you hide everything except the type you need.',
          bodyZh:
            '点击列标题可按名称、修改日期、类型或大小排序。在详细信息视图中，筛选可只留下你需要的类型。',
          bullets: [
            {
              en: 'Date modified finds the file you saved this morning.',
              zh: '修改日期可找到今天早上保存的文件。',
              keywords: [{ en: 'Sort', zh: '排序' }],
            },
            {
              en: 'Type or extension filters help when Downloads is crowded.',
              zh: '下载文件夹很挤时，用类型或扩展名筛选。',
            },
            {
              en: 'Switch to Details view when icons hide useful columns.',
              zh: '图标视图看不清时，切换到详细信息视图。',
            },
          ],
        },
      ],
    },
    {
      id: 'tidy-habits',
      titleEn: 'Tidy Habits',
      titleZh: '整理习惯',
      slides: [
        {
          id: 'ch-d-organize-naming',
          layout: 'text',

          titleEn: 'Naming That Helps Search',
          titleZh: '有助于搜索的命名',
          bodyEn:
            'Good names are searchable. Include course, week, and topic when possible. Avoid final_final2_really_final as your only version strategy.',
          bodyZh:
            '好名字便于搜索。尽量包含课程、周次与主题。不要把 final_final2_really_final 当作唯一的版本策略。',
          bullets: [
            {
              en: 'Example: cs101_week03_report.py',
              zh: '示例：cs101_week03_report.py',
            },
            {
              en: 'Put the date in the name only when versions truly matter.',
              zh: '仅在版本确实重要时才把日期放进文件名。',
            },
            {
              en: 'Keep one clear current file; archive old drafts in an old folder.',
              zh: '保留一个清晰的当前文件；旧草稿放进 old 文件夹。',
            },
          ],
        },
        {
          id: 'ch-d-organize-folders',
          layout: 'text',

          titleEn: 'Folder Habits for Class',
          titleZh: '课堂文件夹习惯',
          bodyEn:
            'Create a parent projects folder, then weekly or assignment folders. Move finished downloads out of Downloads into the right project folder the same day.',
          bodyZh:
            '先建 projects 父文件夹，再按周或按作业建子文件夹。当天就把下好的资料从“下载”移到正确的项目文件夹。',
          bullets: [
            {
              en: 'Downloads is a mailbox, not permanent storage.',
              zh: '“下载”像收件箱，不是永久仓库。',
              keywords: [{ en: 'Organize', zh: '整理' }],
            },
            {
              en: 'Desktop shortcuts can point to project folders without storing everything there.',
              zh: '桌面快捷方式可指向项目文件夹，而不必把一切都存在桌面。',
            },
            {
              en: 'One course, one parent folder, reduces lost work.',
              zh: '一门课一个父文件夹，可减少作业丢失。',
            },
          ],
        },
        {
          id: 'ch-d-organize-cleanup',
          layout: 'text',

          titleEn: 'A Five-Minute Weekly Cleanup',
          titleZh: '五分钟每周清理',
          bodyEn:
            'Once a week, empty obvious junk from Desktop and Downloads, rename unclear files, and confirm the current assignment folder is easy to open.',
          bodyZh:
            '每周花五分钟：清理桌面与下载中的明显垃圾，重命名含糊文件，并确认当前作业文件夹容易打开。',
          bullets: [
            {
              en: 'Delete installers you already used, if you no longer need them.',
              zh: '已安装且不再需要的安装包可以删除。',
            },
            {
              en: 'Move screenshots into an images folder when they belong to a project.',
              zh: '属于项目的截图移入 images 文件夹。',
            },
            {
              en: 'Check Recycle Bin before permanent cleanup.',
              zh: '永久清理前先检查回收站。',
            },
          ],
        },
        {
          id: 'ch-d-organize-recent',
          layout: 'text',

          titleEn: 'Recent Files and Quick Access',
          titleZh: '最近使用的文件与快速访问',
          bodyEn:
            'Quick Access and Recent files help only if your naming and folders are sane. Pin the projects folder to Quick Access so you stop hunting every class.',
          bodyZh:
            '只有命名与文件夹合理时，快速访问与最近文件才真正有用。把 projects 固定到快速访问，就不必每节课都找。',
          bullets: [
            {
              en: 'Right-click a folder → Pin to Quick access.',
              zh: '右键文件夹 → 固定到快速访问。',
            },
            {
              en: 'Recent lists can expose the wrong draft if names are messy.',
              zh: '名字混乱时，最近列表可能打开错误草稿。',
            },
            {
              en: 'Clear or ignore Recent when it becomes noisy.',
              zh: '最近列表变吵时，可清理或忽略它。',
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
          id: 'ch-d-organize-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Find a file by search, then leave the folder easier to reopen next time.',
          bodyZh: '用搜索找到一个文件，并让该文件夹下次更容易再次打开。',
          bullets: [
            {
              en: 'Use Start search to find a recent homework file by part of its name.',
              zh: '用开始搜索，通过文件名一部分找到最近的作业文件。',
            },
            {
              en: 'In that folder, switch to Details view and sort by Date modified.',
              zh: '在该文件夹切换到详细信息视图，并按修改日期排序。',
            },
            {
              en: 'Pin your projects folder to Quick access.',
              zh: '把 projects 文件夹固定到快速访问。',
            },
          ],
        },
        {
          id: 'ch-d-organize-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Leaving every download in Downloads forever.',
              zh: '把每次下载永远留在“下载”文件夹。',
            },
            {
              en: 'Using only Desktop piles instead of week folders.',
              zh: '只用桌面堆放，而不按周建文件夹。',
            },
            {
              en: 'Naming every file 新建文本文档 or final.',
              zh: '每个文件都叫“新建文本文档”或 final。',
            },
          ],
        },
        {
          id: 'ch-d-organize-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'When should you use Explorer search instead of Start search?',
              zh: '什么时候更适合用资源管理器搜索而不是开始搜索？',
            },
            {
              en: 'Which sort helps find today’s saved draft?',
              zh: '哪种排序有助于找到今天保存的草稿？',
            },
            {
              en: 'Why is Downloads a poor permanent archive?',
              zh: '为什么“下载”不适合当作永久归档？',
            },
          ],
          noteEn:
            'Answers: when you already know the parent folder; Date modified; it mixes unrelated files and grows messy.',
          noteZh:
            '参考答案：已知父文件夹时；修改日期；它混杂无关文件且会越来越乱。',
        },
      ],
    },
  ],
}
