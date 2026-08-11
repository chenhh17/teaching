import type { Chapter } from '../../types/course'

export const chJHygiene: Chapter = {
  id: 'updates-and-hygiene',
  titleEn: 'Updates and Hygiene',
  titleZh: '更新与数字卫生',
  summaryEn:
    'Windows Update, browser and app patches, Windows Security status, disk cleanup habits, and safe software sources.',
  summaryZh:
    'Windows 更新、浏览器与应用补丁、Windows 安全中心状态、磁盘清理习惯与安全软件来源。',
  sections: [
    {
      id: 'keep-current',
      titleEn: 'Keep Software Current',
      titleZh: '保持软件最新',
      slides: [
        {
          id: 'ch-j-hygiene-title',
          layout: 'title',

          titleEn: 'Part J · Updates and Hygiene',
          titleZh: '篇章 J · 更新与数字卫生',
          subtitleEn: 'Small maintenance habits that prevent big problems',
          subtitleZh: '小维护习惯避免大问题',
          illustration: 'title',
          keywords: [
            { en: 'Update', zh: '更新' },
            { en: 'Patch', zh: '补丁' },
            { en: 'Windows Security', zh: 'Windows 安全中心' },
          ],
        },
        {
          id: 'ch-j-hygiene-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Unpatched software is an open window. You will check Windows Update, keep browsers current, and confirm Windows Security is actually protecting the PC.',
          bodyZh:
            '未打补丁的软件像开着的窗。你将检查 Windows 更新、保持浏览器最新，并确认 Windows 安全中心确实在保护电脑。',
          illustration: 'security',
          bullets: [
            {
              en: 'Run and understand Windows Update on a student PC.',
              zh: '在学生电脑上运行并理解 Windows 更新。',
              keywords: [{ en: 'Windows Update', zh: 'Windows 更新' }],
            },
            {
              en: 'Keep Edge/Chrome and coding tools patched from official channels.',
              zh: '通过官方渠道保持 Edge/Chrome 与编程工具已打补丁。',
            },
            {
              en: 'Read Windows Security status icons without ignoring red warnings.',
              zh: '阅读 Windows 安全中心状态图标，不忽视红色警告。',
            },
          ],
        },
        {
          id: 'ch-j-hygiene-windows-update',
          layout: 'text',

          titleEn: 'Windows Update',
          titleZh: 'Windows 更新',
          bodyEn:
            'Patches close known vulnerabilities and fix stability bugs. On Windows, Settings → Windows Update is the supported path. Pause updates only briefly for demos; long pauses leave classroom machines exposed.',
          bodyZh:
            '补丁关闭已知漏洞并修复稳定性问题。在 Windows 上，设置 → Windows 更新是受支持路径。仅为演示短暂暂停更新；长期暂停会让教室机器暴露。',
          illustration: 'environment',
          bullets: [
            {
              en: 'Check for updates weekly when you control the PC.',
              zh: '自己管控电脑时，每周检查一次更新。',
              keywords: [
                { en: 'Update', zh: '更新' },
                { en: 'Patch', zh: '补丁' },
              ],
            },
            {
              en: 'Restart when Windows asks — pending restarts often mean patches are incomplete.',
              zh: 'Windows 要求重启时就重启——挂起的重启常表示补丁未完成。',
            },
            {
              en: 'School-managed PCs may delay updates; follow lab policy.',
              zh: '学校管控的电脑可能延迟更新；遵循实验室政策。',
            },
          ],
        },
        {
          id: 'ch-j-hygiene-apps',
          layout: 'text',

          titleEn: 'Browsers and Apps',
          titleZh: '浏览器与应用',
          bodyEn:
            'Browsers are high-value targets because they touch the network constantly. Edge and Chrome usually update in the background; still open About to confirm the version when something feels wrong. Update Python, Cursor, and Git from official installers or their own update menus — not from random “driver booster” ads.',
          bodyZh:
            '浏览器因持续接触网络而成为高价值目标。Edge 与 Chrome 通常在后台更新；感觉异常时仍打开“关于”确认版本。从官方安装程序或自带更新菜单更新 Python、Cursor 与 Git——不要用随机“驱动加速”广告。',
          illustration: 'files',
          bullets: [
            {
              en: 'Edge/Chrome: menu → Help / About to force a version check.',
              zh: 'Edge/Chrome：菜单 → 帮助 / 关于，可强制检查版本。',
            },
            {
              en: 'Uninstall tools you no longer use to shrink attack surface.',
              zh: '卸载不再使用的工具以缩小攻击面。',
            },
            {
              en: 'Avoid gray “optimizer” utilities that demand admin rights for vague benefits.',
              zh: '避开要求管理员权限却好处含糊的灰色“优化”工具。',
            },
          ],
        },
      ],
    },
    {
      id: 'protect-and-clean',
      titleEn: 'Protect and Clean',
      titleZh: '防护与清理',
      slides: [
        {
          id: 'ch-j-hygiene-security',
          layout: 'text',

          titleEn: 'Windows Security',
          titleZh: 'Windows 安全中心',
          bodyEn:
            'Windows Security (Defender) provides virus and threat protection, firewall status, and ransomware-related controls on modern Windows. Green checks mean OK; yellow or red needs attention before you ignore them for classwork.',
          bodyZh:
            'Windows 安全中心（Defender）在现代 Windows 上提供病毒与威胁防护、防火墙状态，以及与勒索软件相关的控件。绿色表示正常；黄或红应在忽略去做功课前先处理。',
          illustration: 'security',
          bullets: [
            {
              en: 'Open Start → Windows Security and scan the dashboard icons.',
              zh: '打开开始 → Windows 安全中心，扫一眼仪表盘图标。',
              keywords: [{ en: 'Windows Security', zh: 'Windows 安全中心' }],
            },
            {
              en: 'Run a quick scan if you opened a suspicious download by mistake.',
              zh: '若误开可疑下载，运行一次快速扫描。',
            },
            {
              en: 'Do not disable real-time protection “to make installs faster” permanently.',
              zh: '不要为了“安装更快”而永久关闭实时防护。',
            },
          ],
        },
        {
          id: 'ch-j-hygiene-cleanup',
          layout: 'text',

          titleEn: 'Cleanup Habits',
          titleZh: '清理习惯',
          bodyEn:
            'Digital hygiene includes disk space and clutter. Full disks break updates and builds. Clear Downloads of old installers, empty Recycle Bin thoughtfully, and keep projects in a dedicated folder instead of the Desktop.',
          bodyZh:
            '数字卫生也包括磁盘空间与杂乱。磁盘满会导致更新与构建失败。清理“下载”中的旧安装包，有意识地清空回收站，并把项目放在专用文件夹而不是桌面。',
          illustration: 'files',
          bullets: [
            {
              en: 'Storage Sense or Disk Cleanup can remove temporary files safely.',
              zh: '存储感知或磁盘清理可安全删除临时文件。',
            },
            {
              en: 'Keep one projects directory; archive finished courses to an external drive or cloud.',
              zh: '保持一个项目目录；把已结束课程归档到移动硬盘或云盘。',
            },
            {
              en: 'Backup before mass deletion — hygiene is not the same as losing work.',
              zh: '大量删除前先备份——卫生不等于丢掉作业。',
            },
          ],
        },
        {
          id: 'ch-j-hygiene-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Complete a short maintenance circuit you can repeat monthly.',
          bodyZh: '完成一套可每月重复的短维护流程。',
          illustration: 'environment',
          bullets: [
            {
              en: 'Open Settings → Windows Update → Check for updates',
              zh: '打开设置 → Windows 更新 → 检查更新',
            },
            {
              en: 'Open Windows Security and confirm Virus & threat protection is on',
              zh: '打开 Windows 安全中心，确认病毒和威胁防护已开启',
            },
            {
              en: 'In Edge or Chrome, open About and note whether an update applies',
              zh: '在 Edge 或 Chrome 打开“关于”，查看是否正在更新',
            },
            {
              en: 'In File Explorer, tidy Downloads: keep needed installers, delete obvious junk',
              zh: '在文件资源管理器中整理“下载”：保留需要的安装包，删除明显垃圾',
            },
          ],
        },
        {
          id: 'ch-j-hygiene-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'security',
          bullets: [
            {
              en: 'Ignoring update restarts for weeks until something breaks.',
              zh: '连续数周忽略更新重启直到系统出问题。',
            },
            {
              en: 'Installing “free cleaner” bundles that add unwanted toolbars.',
              zh: '安装附带无用工具栏的“免费清理”套装。',
            },
            {
              en: 'Turning off Windows Security permanently because one game asked.',
              zh: '因为某个游戏要求就永久关闭 Windows 安全中心。',
            },
          ],
        },
        {
          id: 'ch-j-hygiene-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'security',
          bullets: [
            {
              en: 'Where do you check for Windows patches?',
              zh: '你在哪里检查 Windows 补丁？',
            },
            {
              en: 'Why keep the browser updated?',
              zh: '为什么要保持浏览器更新？',
            },
            {
              en: 'What should you do if Windows Security shows a red warning?',
              zh: '若 Windows 安全中心显示红色警告该怎么办？',
            },
          ],
          noteEn:
            'Answers: Settings → Windows Update; browsers are high-value network targets; open the warning and fix/protect before continuing risky work.',
          noteZh:
            '参考答案：设置 → Windows 更新；浏览器是高价值网络目标；打开警告并先修复/防护，再继续有风险的操作。',
        },
      ],
    },
  ],
}
