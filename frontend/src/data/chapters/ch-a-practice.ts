import type { Chapter } from '../../types/course'

export const chAPractice: Chapter = {
  id: 'how-learners-practice',
  titleEn: 'How Learners Practice',
  titleZh: '学习者如何练习',
  summaryEn:
    'Build lasting Windows learning habits: spaced practice, typing over watching, error journals, tiny daily loops, and smart use of this courseware.',
  summaryZh:
    '建立能坚持的 Windows 学习习惯：间隔练习、多敲少看、错误日志、每日小循环，以及善用本课件。',
  sections: [
    {
      id: 'why-habits',
      titleEn: 'Why Habits Matter',
      titleZh: '为什么习惯重要',
      slides: [
        {
          id: 'ch-a-practice-title',
          layout: 'title',

          titleEn: 'Part A · How Learners Practice',
          titleZh: '篇章 A · 学习者如何练习',
          subtitleEn: 'Small daily steps beat rare long sessions',
          subtitleZh: '每天一点进步，胜过偶尔猛学很久',
          illustration: 'title',
          keywords: [
            { en: 'Practice', zh: '练习' },
            { en: 'Habit', zh: '习惯' },
            { en: 'Learning', zh: '学习' },
          ],
        },
        {
          id: 'ch-a-practice-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'This chapter turns motivation into a routine you can keep on a Windows laptop between classes. You will leave with a daily loop, a note-taking rule, and a way to turn mistakes into reusable memory instead of shame.',
          bodyZh:
            '本章把动机变成你在课间也能在 Windows 笔记本上坚持的节奏。你将带走一个每日循环、一条笔记规则，以及把错误变成可复用记忆而不是羞耻的方法。',
          bullets: [
            {
              en: 'Run a 15–30 minute daily practice loop most weekdays.',
              zh: '多数工作日运行 15–30 分钟的每日练习循环。',
              keywords: [{ en: 'Daily Practice', zh: '每日练习' }],
            },
            {
              en: 'Prefer typing and running over only watching demos.',
              zh: '优先自己敲和运行，而不是只看演示。',
            },
            {
              en: 'Keep a short error journal and bilingual keyword list.',
              zh: '维护简短错误日志与中英关键词表。',
              keywords: [{ en: 'Error Journal', zh: '错误日志' }],
            },
            {
              en: 'Know when to take notes and how to use this courseware.',
              zh: '知道何时记笔记，以及如何使用本课件。',
            },
          ],
        },
        {
          id: 'ch-a-practice-skill-not-content',
          layout: 'text',

          titleEn: 'Learning Is a Skill, Not a Playlist',
          titleZh: '学习是技能，不是播放列表',
          illustration: 'environment',
          bodyEn:
            'Collecting bookmarks, screenshots, and unread tabs feels like progress, but skill grows when you perform the action yourself under mild difficulty. Programming and Windows administration are closer to sports or music than to binge-watching a documentary. You can understand a slide about cd and still freeze the first time PowerShell opens in the wrong folder. The cure is repeated attempts with feedback: type, run, read the result, adjust. This course gives explanations so you are not guessing in the dark. Explanations do not replace reps. Treat every chapter as something you must do on your machine, not only something you must recognize on a quiz.',
          bodyZh:
            '收藏书签、截图和未读标签感觉像在进步，但技能是在你略感吃力时自己完成动作才增长的。编程与 Windows 管理更接近运动或乐器，而不是刷纪录片。你可能听懂关于 cd 的一页幻灯片，却在 PowerShell 打开到错误文件夹时仍然卡住。解药是带反馈的重复尝试：敲、运行、读结果、调整。本课程提供解释，是为了让你别在黑暗里瞎猜。解释不能代替次数。把每一章都当成必须在自己机器上做的事，而不只是测验里要认出来的事。',
          keywords: [
            { en: 'Deliberate Practice', zh: '刻意练习' },
            { en: 'Feedback', zh: '反馈' },
          ],
        },
        {
          id: 'ch-a-practice-tiny-daily',
          layout: 'text',

          titleEn: 'Tiny Daily Loops',
          titleZh: '每日小循环',
          bodyEn:
            'Consistency beats intensity for beginners. Fifteen to thirty minutes on most days usually teaches more than one exhausted weekend marathon. A tiny loop has a clear start and a clear stop. Open your practice folder, pick one small goal, type something, run something, write two lines of notes, then close the laptop while you still understand what you did. Ending clean makes tomorrow easier, because yesterday left a trail instead of a mess. If you only have ten minutes, shrink the goal, do not skip the loop. Skipping teaches your brain that practice is optional drama. Showing up teaches that practice is ordinary.',
          bodyZh:
            '对初学者来说，坚持胜过强度。多数日子练 15–30 分钟，通常比疲惫的周末马拉松更有效。小循环有清楚的开始与结束。打开练习文件夹，选一个小目标，敲一点、运行一点、写两行笔记，然后在你还清楚自己做了什么时合上电脑。干净地结束会让明天更容易，因为昨天留下的是痕迹而不是烂摊子。如果只有十分钟，就缩小目标，不要跳过循环。跳过会让大脑觉得练习是可选的戏剧。到场会让练习变成平常事。',
          bullets: [
            {
              en: 'Most days: 15–30 minutes with one finishable goal.',
              zh: '多数日子：15–30 分钟，一个能完成的目标。',
              keywords: [{ en: 'Consistency', zh: '坚持' }],
            },
            {
              en: 'Loop: open → do → run → note → stop.',
              zh: '循环：打开 → 做 → 运行 → 记录 → 停止。',
            },
          ],
          noteEn: 'Short practice sticks better than heroic cramming.',
          noteZh: '短练习比英雄式硬撑更容易记住。',
        },
        {
          id: 'ch-a-practice-spaced',
          layout: 'text',

          titleEn: 'Spaced Practice Beats One Sitting',
          titleZh: '间隔练习胜过一次学完',
          illustration: 'code',
          bodyEn:
            'Spaced practice means returning to an idea after time has passed, not only reviewing it while it is still warm. After you learn File Explorer paths today, reopen the same path tomorrow without looking at your notes first. After you write pseudocode this week, rebuild it from memory next week before checking the answer. Spacing feels harder than rereading, and that difficulty is useful. Your brain stores what it had to retrieve. Cramming can help you recognize slides for a day. Spacing helps you perform commands next month when the lab is graded. Plan revisits on your calendar: same evening, next day, next week. Keep revisits short. Five focused minutes of recall beat thirty sleepy minutes of rereading.',
          bodyZh:
            '间隔练习意味着在时间过去之后再回到一个想法，而不是只在它还热乎时复习。今天学会文件资源管理器路径后，明天先不看笔记再打开同一路径。这周写了伪代码后，下周先凭记忆重建，再对答案。间隔感觉比重读更难，而这种难度有用。大脑会保存它不得不提取的东西。临时抱佛脚能帮你认一天幻灯片。间隔能帮你下个月实验评分时还能执行命令。在日历上安排回顾：当晚、次日、下周。回顾保持简短。五分钟专注回忆，胜过三十分钟昏昏欲睡的重读。',
          keywords: [
            { en: 'Spaced Practice', zh: '间隔练习' },
            { en: 'Retrieval', zh: '提取练习' },
          ],
          bullets: [
            {
              en: 'Same day: quick rewrite from memory.',
              zh: '当天：凭记忆快速重写。',
            },
            {
              en: 'Next day: rerun the command without the slide open.',
              zh: '次日：不打开幻灯片再运行命令。',
            },
            {
              en: 'Next week: rebuild the tiny project checklist.',
              zh: '下周：重建那份小项目清单。',
            },
            {
              en: 'If recall fails, peek briefly, then close notes and retry.',
              zh: '若回忆失败，短暂偷看，合上笔记再试。',
            },
          ],
        },
        {
          id: 'ch-a-practice-when-notes',
          layout: 'text',

          titleEn: 'When to Take Notes',
          titleZh: '何时记笔记',
          illustration: 'files',
          bodyEn:
            'Not every sentence on a slide deserves a notebook line. Take notes when an idea is new to you, when you failed once and then succeeded, or when a Windows path, shortcut, or command is easy to mistype. Skip notes when you are only highlighting comfort words you already know. The best moment is often right after a successful run: write what you typed, what you saw, and why it mattered in three short lines. Another good moment is after an error you fixed: capture the message and the fix while both are fresh. During a first watch of a dense slide, you may jot keywords only, then rewrite in your own words later the same day. Rewriting beats decorative highlighting.',
          bodyZh:
            '不是幻灯片上每一句都值得记一行。当想法对你是新的、当你失败一次后又成功、或当 Windows 路径、快捷键或命令很容易敲错时，才记笔记。如果你只是在标自己已经会的安慰词，就跳过。最好的时机常常是成功运行之后：用三行短句写下你敲了什么、看到了什么、为什么重要。另一个好时机是修好错误之后：趁记忆新鲜记下报错与修法。第一次看密集幻灯片时，可以只记关键词，当天稍后再用自己的话重写。重写胜过装饰性标黄。',
          bullets: [
            {
              en: 'Note new ideas, fixed errors, and easy-to-mistype commands.',
              zh: '记录新想法、已修好的错误，以及易敲错的命令。',
              keywords: [{ en: 'Notes', zh: '笔记' }],
            },
            {
              en: 'Prefer three lines: what, why, how on Windows.',
              zh: '优先三行：是什么、为什么、在 Windows 上怎么做。',
            },
            {
              en: 'Rewrite the same day; do not only highlight.',
              zh: '当天重写；不要只标黄。',
            },
          ],
        },
        {
          id: 'ch-a-practice-write-notes',
          layout: 'text',

          titleEn: 'Where Notes Live on Windows',
          titleZh: '笔记在 Windows 上放哪里',
          illustration: 'files',
          bodyEn:
            'A simple folder is enough. Many students use C:\\Users\\You\\projects\\notes with dated text files such as 2026-08-11-practice.txt. Others keep one keywords.md and one errors.txt. Fancy apps are optional. What matters is that you can find yesterday’s note in under thirty seconds. Put the folder somewhere boring and stable under your user profile, not on a desktop covered with temporary downloads. If you use OneDrive, know whether the file is available offline before you rely on it in a lab with weak Wi-Fi. The habit of rewriting matters more than the brand of the notebook tool.',
          bodyZh:
            '一个简单文件夹就够。很多学生使用 C:\\Users\\你\\projects\\notes，并按日期命名文本文件，例如 2026-08-11-practice.txt。也有人只保留一个 keywords.md 和一个 errors.txt。花哨应用可选。重要的是你能在三十秒内找到昨天的笔记。把文件夹放在用户目录下无聊且稳定的位置，而不是堆满临时下载的桌面。若使用 OneDrive，在依赖它之前先确认弱网络实验室里是否可脱机使用。重写的习惯比笔记本工具的品牌更重要。',
          keywords: [
            { en: 'Notes', zh: '笔记' },
            { en: 'Path', zh: '路径' },
          ],
        },
      ],
    },
    {
      id: 'practice-methods',
      titleEn: 'Practice Methods',
      titleZh: '练习方法',
      slides: [
        {
          id: 'ch-a-practice-run-yourself',
          layout: 'text',

          titleEn: 'Typing Beats Watching',
          titleZh: '自己敲胜过只看',
          illustration: 'terminal',
          bodyEn:
            'Watching a demo builds familiarity. Typing the same commands in your own PowerShell window builds skill. The difference shows up the first time an error appears: watchers wait for the video to explain, while typists already have a habit of reading the red text. Change one small thing on purpose and predict the result before you press Enter. If you predicted wrong, you just found a lesson worth a note. Screenshots are useful memory aids after you have typed the command once. They are poor substitutes for the first attempt. In this course, treat every Try It slide as a keyboard appointment, not a spectator sport.',
          bodyZh:
            '看演示建立熟悉感。在自己的 PowerShell 窗口敲同样的命令才建立技能。差别会在第一次出现错误时显露：旁观者等视频解释，而自己敲的人已有读红字的习惯。刻意改一点点，并在按 Enter 前预测结果。若预测错了，你就找到一条值得记笔记的教训。截图在你亲自敲过一次之后是有用的记忆辅助。它们很差地替代第一次尝试。在本课程里，把每一页“试一试”当成键盘约会，而不是观赏运动。',
          bullets: [
            {
              en: 'Type in PowerShell or Cursor; do not only stare.',
              zh: '在 PowerShell 或 Cursor 里自己敲，不要只盯着看。',
              keywords: [{ en: 'PowerShell', zh: 'PowerShell' }],
            },
            {
              en: 'Predict, then run, then compare.',
              zh: '先预测，再运行，再对比。',
            },
            {
              en: 'Read the error once before asking for help.',
              zh: '求助前先自己读一遍报错。',
              keywords: [{ en: 'Error Message', zh: '报错信息' }],
            },
            {
              en: 'Use screenshots after the first successful typed run.',
              zh: '在第一次自己敲成功后再用截图。',
            },
          ],
        },
        {
          id: 'ch-a-practice-error-journal',
          layout: 'text',

          titleEn: 'Keep an Error Journal',
          titleZh: '维护错误日志',
          illustration: 'terminal',
          bodyEn:
            'An error journal is a short running list of mistakes that taught you something. For each entry write the command or action, the exact message or symptom, the cause in your own words, and the fix. One entry can be four lines. Over a month you will notice repeats: wrong directory, missing quote, Python not on PATH, File Explorer showing a different folder than PowerShell. Those repeats are gold. They tell you what to drill during spaced practice. Do not write essays. Do not hide the journal because errors feel embarrassing. Professionals keep logs. Beginners who keep logs become professionals faster. Store it as errors.txt next to your notes.',
          bodyZh:
            '错误日志是一份简短的流水账，记录教会你东西的失误。每条写：命令或动作、确切信息或现象、用自己的话写的原因、以及修法。一条可以只有四行。一个月后你会发现重复：目录错了、缺引号、Python 不在 PATH、文件资源管理器与 PowerShell 不在同一文件夹。这些重复是黄金。它们告诉你间隔练习该钻什么。不要写长文。不要因为错误尴尬就藏起日志。专业人士记日志。记日志的初学者成为专业人士更快。把它存成笔记旁边的 errors.txt。',
          bullets: [
            {
              en: 'Action → message → cause → fix.',
              zh: '动作 → 信息 → 原因 → 修法。',
              keywords: [{ en: 'Error Journal', zh: '错误日志' }],
            },
            {
              en: 'Review the journal once a week for repeated patterns.',
              zh: '每周回顾一次日志，寻找重复模式。',
            },
          ],
          noteEn: 'A fixed error is a future flashcard.',
          noteZh: '修好的错误就是未来的闪卡。',
        },
        {
          id: 'ch-a-practice-break-small',
          layout: 'text',

          titleEn: 'Break Problems Small',
          titleZh: '把问题拆小',
          illustration: 'code',
          bodyEn:
            'A big goal becomes workable when it turns into a checklist you can finish in one sitting. Create the folder, open it in Cursor, make a file, run one command, then stop. Finish one step before starting the next. If a step still feels huge, split it again until the next action is obvious. This is the same decomposition habit you use when writing algorithms, applied to learning itself. “Learn PowerShell” is too big. “Open PowerShell, cd to projects\\practice, run dir” is finishable tonight. Celebrate finished checkboxes. They are how confidence accumulates on Windows.',
          bodyZh:
            '大目标变成一坐就能完成的可勾选清单后就变得可做：创建文件夹、用 Cursor 打开、新建文件、运行一条命令，然后停止。完成一步再开始下一步。如果某一步仍然很大，就再拆，直到下一步动作显而易见。这与写算法时的分解习惯相同，只是用在学习本身。“学会 PowerShell”太大。“打开 PowerShell，cd 到 projects\\practice，运行 dir”今晚就能完成。庆祝勾掉的方框。它们是 Windows 上信心积累的方式。',
          bullets: [
            {
              en: 'Big goal → checklist of tiny steps.',
              zh: '大目标 → 拆成可勾选的小步骤清单。',
              keywords: [{ en: 'Checklist', zh: '清单' }],
            },
            {
              en: 'Example: create folder → open in Cursor → new file → run.',
              zh: '例如：建文件夹 → 用 Cursor 打开 → 新建文件 → 运行。',
            },
            {
              en: 'If stuck for ten minutes, split the current step again.',
              zh: '若卡住十分钟，就把当前步骤再拆一次。',
            },
          ],
        },
        {
          id: 'ch-a-practice-keywords',
          layout: 'text',

          titleEn: 'Bilingual Keyword Habit',
          titleZh: '中英关键词习惯',
          bodyEn:
            'This course shows keywords as English and Chinese pairs on purpose. Keep your own list and say both out loud when you meet a term that still feels slippery. Reusing the same words in notes, error journals, and questions reduces confusion later when Task Manager, PowerShell, and Python all introduce new vocabulary. Write the English form you will see in menus and docs, plus a Chinese gloss you actually understand. If your gloss is still fuzzy, rewrite it after the next successful practice. Keywords are not decoration on slides. They are the shared language of the classroom.',
          bodyZh:
            '本课程故意用中英成对展示关键词。维护你自己的列表，遇到仍然打滑的词时中英各说一遍。在笔记、错误日志和提问里反复用同一套词，后面任务管理器、PowerShell 与 Python 引入新词汇时就不容易乱。写下你会在菜单和文档里看到的英文形式，外加你真正理解的中文释义。若释义仍模糊，就在下一次成功练习后重写。关键词不是幻灯片上的装饰。它们是课堂的共同语言。',
          bullets: [
            {
              en: 'List: English term + Chinese meaning you can explain.',
              zh: '列表：英文术语 + 你能解释的中文含义。',
              keywords: [{ en: 'Keyword', zh: '关键词' }],
            },
            {
              en: 'Say both out loud once for each new slippery word.',
              zh: '每个打滑的新词中英各说一遍。',
            },
            {
              en: 'Reuse the same wording in notes and questions.',
              zh: '在笔记和提问里反复用同一套说法。',
            },
            {
              en: 'Update the gloss after you use the term successfully.',
              zh: '成功使用该术语后更新释义。',
            },
          ],
        },
        {
          id: 'ch-a-practice-courseware',
          layout: 'text',

          titleEn: 'How to Use This Courseware',
          titleZh: '如何使用本课件',
          illustration: 'interface',
          bodyEn:
            'Use the sidebar to stay inside one Part while you study, and open the active chapter’s sections when you need a subtopic. Read the title and learning goals first so you know what “done” means. On concept slides, read the full body paragraphs before skimming bullets; the paragraphs carry the lecture. On steps slides, perform the actions on Windows before you advance. On callout slides, attempt the check questions from memory, then reveal the note. Images are optional teaching aids: click to enlarge when a photo clarifies a real object, but do not treat images as the lesson. If you return after a break, jump to the last chapter you practiced and rerun one tiny command before reading new material. That restart ritual reconnects your hands to the course.',
          bodyZh:
            '学习时用侧栏停留在一个篇章内，需要子主题时再展开当前章的小节。先读标题与学习目标，好知道怎样算“完成”。概念页先读完整正文再扫要点；正文承载讲授。步骤页先在 Windows 上做完再往后翻。提示页先凭记忆回答自测，再看参考提示。图片是可选教具：当照片能澄清真实对象时再点开放大，但不要把图片当成课文。若休息后回来，先跳到你上次练习的章节，在读新材料前再运行一条小命令。这个重启仪式让双手重新接上课程。',
          bullets: [
            {
              en: 'Goals → body text → bullets → try-it → check.',
              zh: '目标 → 正文 → 要点 → 试一试 → 自测。',
            },
            {
              en: 'Do steps on the machine before flipping ahead.',
              zh: '先在机器上做步骤，再往前翻。',
            },
            {
              en: 'Restart sessions with one tiny rerun from last time.',
              zh: '用上次的一条小重跑来重启学习时段。',
            },
          ],
          keywords: [{ en: 'Courseware', zh: '课件' }],
        },
        {
          id: 'ch-a-practice-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'files',
          bodyEn:
            'Create a practice home base, a notes file, and an error journal stub. Prove you can reach the folder with PowerShell.',
          bodyZh:
            '创建练习大本营、笔记文件与错误日志草稿。证明你能用 PowerShell 进入该文件夹。',
          bullets: [
            {
              en: 'In File Explorer, create C:\\Users\\You\\projects\\practice.',
              zh: '在文件资源管理器中创建 C:\\Users\\你\\projects\\practice。',
            },
            {
              en: 'Create notes.txt and write today’s 15–30 minute goal.',
              zh: '新建 notes.txt，写下今天 15–30 分钟的目标。',
            },
            {
              en: 'Create errors.txt with headings Action / Message / Cause / Fix.',
              zh: '新建 errors.txt，写上标题 Action / Message / Cause / Fix。',
            },
            {
              en: 'Open PowerShell and run: cd C:\\Users\\You\\projects\\practice',
              zh: '打开 PowerShell 并运行：cd C:\\Users\\你\\projects\\practice',
              keywords: [{ en: 'cd', zh: '切换目录' }],
            },
            {
              en: 'Run dir and confirm both files appear.',
              zh: '运行 dir，确认两个文件都出现。',
            },
            {
              en: 'Close with one sentence in notes.txt: what you will rerun tomorrow.',
              zh: '在 notes.txt 用一句话结束：明天要重跑什么。',
            },
          ],
        },
      ],
    },
    {
      id: 'apply-and-check',
      titleEn: 'Apply and Check',
      titleZh: '应用与自测',
      slides: [
        {
          id: 'ch-a-practice-weekly',
          layout: 'text',

          titleEn: 'A Simple Weekly Rhythm',
          titleZh: '简单的每周节奏',
          illustration: 'environment',
          bodyEn:
            'Daily loops build skill; a light weekly review keeps the loops honest. Once a week, read your error journal and mark any error that appeared twice. Those become next week’s drill targets. Skim your keyword list and star five terms you still cannot explain out loud. Reopen one older Try It slide and complete it from memory. Keep the review under thirty minutes. If weekly review becomes a second homework mountain, you will avoid it. Short and regular beats perfect and rare. Put the review on the same weekday after class so you do not renegotiate with yourself every time.',
          bodyZh:
            '每日循环建立技能；轻度的每周回顾让循环保持诚实。每周一次，阅读错误日志，标出出现两次的错误。那些成为下周的钻练目标。浏览关键词表，给五个仍不能口头解释的词打星。打开一页更早的“试一试”，凭记忆做完。回顾控制在三十分钟内。如果每周回顾变成第二座作业山，你会逃避它。短而规律胜过完美却罕见。把回顾固定在同一星期几的课后，这样就不必每次重新和自己谈判。',
          bullets: [
            {
              en: 'Weekly: error patterns, five weak keywords, one old try-it.',
              zh: '每周：错误模式、五个薄弱关键词、一页旧试一试。',
            },
            {
              en: 'Keep the review short enough that you will actually do it.',
              zh: '让回顾短到你真的会做。',
            },
          ],
          keywords: [{ en: 'Weekly Review', zh: '每周回顾' }],
        },
        {
          id: 'ch-a-practice-errors',
          layout: 'callout',
          titleEn: 'Common Mix-ups',
          titleZh: '常见误解',
          bodyEn:
            'Busy activity is not the same as practice that builds skill. Name these traps when you catch yourself inside them.',
          bodyZh:
            '忙碌活动不等于能形成技能的练习。当你发现自己掉进去时，叫出这些陷阱的名字。',
          bullets: [
            {
              en: 'Collecting tutorials is not the same as practicing.',
              zh: '收藏教程不等于在练习。',
            },
            {
              en: 'Copy-paste without reading teaches little.',
              zh: '不读就复制粘贴，学到的很少。',
            },
            {
              en: 'Skipping notes makes the next lesson feel brand new.',
              zh: '不记笔记会让下一课像全新内容一样陌生。',
            },
            {
              en: 'Only watching demos leaves you helpless when errors appear.',
              zh: '只看演示会让你在出错时无助。',
            },
            {
              en: 'Cramming once feels strong and fades fast.',
              zh: '临时抱佛脚感觉很强，消退也快。',
            },
          ],
        },
        {
          id: 'ch-a-practice-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Answer briefly from memory, then compare with the note.',
          bodyZh: '凭记忆简短作答，再对照提示。',
          bullets: [
            {
              en: 'How long is a good tiny daily session?',
              zh: '合适的每日小练习大概多久？',
            },
            {
              en: 'What is spaced practice in one sentence?',
              zh: '用一句话说明什么是间隔练习？',
            },
            {
              en: 'What four fields belong in an error journal entry?',
              zh: '错误日志一条应包含哪四个字段？',
            },
            {
              en: 'When should you take notes during a lesson?',
              zh: '上课过程中何时应该记笔记？',
            },
            {
              en: 'How should you use a Try It slide in this courseware?',
              zh: '本课件中应如何使用“试一试”页？',
            },
          ],
          noteEn:
            'Answers: about 15–30 min; return later and retrieve from memory; action, message, cause, fix; when ideas are new, after fixes, for mistype-prone commands; type and run on Windows before advancing.',
          noteZh:
            '参考答案：大约 15–30 分钟；过后再回来并从记忆中提取；动作、信息、原因、修法；新想法、修好之后、易敲错命令时；先在 Windows 上敲并运行，再往后翻。',
        },
      ],
    },
  ],
}
