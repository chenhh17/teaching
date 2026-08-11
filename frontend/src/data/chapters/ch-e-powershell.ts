import type { Chapter } from '../../types/course'

export const chEPowershell: Chapter = {
  id: 'powershell-basics',
  titleEn: 'PowerShell Basics',
  titleZh: 'PowerShell 基础',
  summaryEn:
    'Use PowerShell Verb-Noun commands, Get-Help, Get-Command, and a gentle introduction to the pipeline on Windows.',
  summaryZh:
    '在 Windows 上使用 PowerShell 的 Verb-Noun 命令、Get-Help、Get-Command，并轻量认识管道。',
  sections: [
    {
      id: 'powershell-start',
      titleEn: 'Starting with PowerShell',
      titleZh: '从 PowerShell 起步',
      slides: [
        {
          id: 'ch-e-powershell-title',
          layout: 'title',

          titleEn: 'Part E · PowerShell Basics',
          titleZh: '篇章 E · PowerShell 基础',
          subtitleEn: 'Discover commands instead of memorizing everything',
          subtitleZh: '先学会发现命令，而不是背下一切',
          illustration: 'title',
          keywords: [
            { en: 'PowerShell', zh: 'PowerShell' },
            { en: 'Get-Help', zh: '获取帮助' },
            { en: 'Get-Command', zh: '查找命令' },
          ],
        },
        {
          id: 'ch-e-powershell-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'PowerShell is not only “another cmd”. It uses consistent Verb-Noun names and built-in discovery tools so you can look up what you forgot.',
          bodyZh:
            'PowerShell 不只是“另一个 cmd”。它使用一致的 Verb-Noun 命名，并提供内置发现工具，让你能查到忘记的命令。',
          bullets: [
            {
              en: 'Recognize Verb-Noun command names such as Get-Help.',
              zh: '认识 Get-Help 这类 Verb-Noun 命令名。',
              keywords: [{ en: 'Verb-Noun', zh: '动词-名词' }],
            },
            {
              en: 'Use Get-Help and Get-Command to discover tools.',
              zh: '用 Get-Help 与 Get-Command 发现工具。',
            },
            {
              en: 'Explain the pipeline idea at a beginner level.',
              zh: '以初学者水平说明管道思想。',
              keywords: [{ en: 'Pipeline', zh: '管道' }],
            },
          ],
        },
        {
          id: 'ch-e-powershell-verbnoun',
          layout: 'text',

          titleEn: 'Verb-Noun Naming',
          titleZh: 'Verb-Noun 命名',
          bodyEn:
            'Most PowerShell commands follow Verb-Noun: Get-Location, Set-Location, New-Item, Get-ChildItem. The verb says the action; the noun says the target. Once you see the pattern, unfamiliar commands become easier to guess and search.',
          bodyZh:
            '多数 PowerShell 命令遵循 Verb-Noun：Get-Location、Set-Location、New-Item、Get-ChildItem。动词表示动作，名词表示对象。看懂这个模式后，陌生命令也更容易猜测与搜索。',
          bullets: [
            {
              en: 'Get- means read or list information.',
              zh: 'Get- 表示读取或列出信息。',
              keywords: [{ en: 'Get-', zh: '获取' }],
            },
            {
              en: 'Set- and New- change or create something.',
              zh: 'Set- 与 New- 表示修改或创建。',
            },
            {
              en: 'Aliases exist (cd, ls, dir) but learning the real names helps reading docs.',
              zh: '存在别名（cd、ls、dir），但学真名更利于读文档。',
              keywords: [{ en: 'Alias', zh: '别名' }],
            },
          ],
        },
        {
          id: 'ch-e-powershell-help',
          layout: 'text',

          titleEn: 'Get-Help and Get-Command',
          titleZh: 'Get-Help 与 Get-Command',
          bodyEn:
            'When you forget a command, do not scroll social media first. Ask PowerShell. Get-Command finds command names; Get-Help explains syntax and examples. This habit scales better than memorizing twenty unrelated spellings.',
          bodyZh:
            '忘记命令时，先不要去刷社交媒体，先问 PowerShell。Get-Command 查找命令名；Get-Help 解释语法与示例。这个习惯比死记二十个无关拼写更可扩展。',
          bullets: [
            {
              en: 'Get-Command *location* searches for matching command names.',
              zh: 'Get-Command *location* 可搜索匹配的命令名。',
              keywords: [{ en: 'Get-Command', zh: '查找命令' }],
            },
            {
              en: 'Get-Help Get-ChildItem -Examples shows usage samples.',
              zh: 'Get-Help Get-ChildItem -Examples 显示用法示例。',
              keywords: [{ en: 'Get-Help', zh: '获取帮助' }],
            },
            {
              en: 'Update-Help can refresh help text when online (optional later).',
              zh: '联网时可选用 Update-Help 刷新帮助文本（可稍后做）。',
            },
          ],
        },
      ],
    },
    {
      id: 'pipeline-and-safety',
      titleEn: 'Pipeline and Safety',
      titleZh: '管道与安全习惯',
      slides: [
        {
          id: 'ch-e-powershell-pipeline',
          layout: 'text',

          titleEn: 'Pipeline Idea',
          titleZh: '管道思想',
          bodyEn:
            'The pipeline | sends output from one command into the next. Beginners only need the idea: list something, then filter or format it. You do not need advanced object theory yet.',
          bodyZh:
            '管道 | 把一个命令的输出送给下一个命令。初学者只需抓住思想：先列出，再筛选或格式化。现在还不需要高深的对象理论。',
          bullets: [
            {
              en: 'Example idea: Get-ChildItem | Select-Object Name',
              zh: '示例思路：Get-ChildItem | Select-Object Name',
              keywords: [{ en: '| pipeline', zh: '管道符 |' }],
            },
            {
              en: 'Read left to right: produce data, then shape it.',
              zh: '从左到右阅读：先产生数据，再整理数据。',
            },
            {
              en: 'Stop and check results before chaining delete commands.',
              zh: '在串联删除类命令前，先停下来检查结果。',
            },
          ],
        },
        {
          id: 'ch-e-powershell-safety',
          layout: 'text',

          titleEn: 'Safe Beginner Habits',
          titleZh: '初学者安全习惯',
          bodyEn:
            'PowerShell can change files quickly. For class work, prefer read commands first: Get-Location, Get-ChildItem, Get-Help. Create folders with New-Item only when you know the path. Avoid copying destructive one-liners you do not understand.',
          bodyZh:
            'PowerShell 能很快改动文件。课堂练习先用读取命令：Get-Location、Get-ChildItem、Get-Help。只有确认路径后才用 New-Item 建文件夹。不要复制你看不懂的破坏性一行命令。',
          bullets: [
            {
              en: 'Read before write; list before delete.',
              zh: '先读后写；先列出再删除。',
            },
            {
              en: 'Tab completion reduces spelling mistakes in long paths.',
              zh: 'Tab 补全可减少长路径拼写错误。',
            },
            {
              en: 'If a script is blocked, note the message; execution policy comes in the errors chapter.',
              zh: '若脚本被阻止，先记下信息；执行策略会在错误章节讲解。',
              keywords: [{ en: 'Execution Policy', zh: '执行策略' }],
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
          id: 'ch-e-powershell-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn: 'Practice discovery more than memorization.',
          bodyZh: '多练“发现命令”，少练死记硬背。',
          bullets: [
            {
              en: 'Open PowerShell and run Get-Location.',
              zh: '打开 PowerShell 并运行 Get-Location。',
              keywords: [{ en: 'Get-Location', zh: '当前位置' }],
            },
            {
              en: 'Run Get-Command *Item* and skim a few names.',
              zh: '运行 Get-Command *Item*，浏览几个命令名。',
            },
            {
              en: 'Run Get-Help Get-ChildItem -Examples and read one example.',
              zh: '运行 Get-Help Get-ChildItem -Examples，并读一个示例。',
            },
            {
              en: 'Try Get-ChildItem | Select-Object -First 5 Name',
              zh: '试运行 Get-ChildItem | Select-Object -First 5 Name',
            },
          ],
        },
        {
          id: 'ch-e-powershell-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bullets: [
            {
              en: 'Typing bash-only commands and assuming PowerShell failed forever.',
              zh: '输入仅适用于 bash 的命令，就断定 PowerShell 永久失败。',
            },
            {
              en: 'Skipping Get-Help and guessing dangerous parameters.',
              zh: '跳过 Get-Help，去猜危险参数。',
            },
            {
              en: 'Confusing aliases with the real command when reading error text.',
              zh: '阅读报错时把别名与真实命令搞混。',
            },
          ],
        },
        {
          id: 'ch-e-powershell-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bullets: [
            {
              en: 'What pattern do most PowerShell command names follow?',
              zh: '多数 PowerShell 命令名遵循什么模式？',
            },
            {
              en: 'Which command finds other command names?',
              zh: '哪个命令用来查找其他命令名？',
            },
            {
              en: 'What does the | pipeline do in one sentence?',
              zh: '用一句话说明 | 管道做什么？',
            },
          ],
          noteEn:
            'Answers: Verb-Noun; Get-Command; sends one command’s output into the next.',
          noteZh: '参考答案：Verb-Noun；Get-Command；把上一个命令的输出送给下一个。',
        },
      ],
    },
  ],
}
