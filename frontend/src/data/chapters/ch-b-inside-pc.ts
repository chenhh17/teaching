import type { Chapter } from '../../types/course'

export const chBInsidePc: Chapter = {
  id: 'inside-a-pc',
  titleEn: 'Inside a PC',
  titleZh: '电脑内部',
  summaryEn:
    'Meet the main hardware parts inside a Windows PC case and learn what you can check without opening school machines.',
  summaryZh: '认识 Windows 电脑机箱内部的主要硬件，并学会在不拆开学校机器的情况下做检查。',
  sections: [
    {
      id: 'open-the-box',
      titleEn: 'Open the Box',
      titleZh: '打开机箱',
      slides: [
        {
          id: 'ch-b-inside-pc-title',
          layout: 'title',

          titleEn: 'Part B · Inside a PC',
          titleZh: '篇章 B · 电脑内部',
          subtitleEn: 'The physical parts that make your Windows PC run',
          subtitleZh: '让 Windows 电脑运转起来的物理部件',
          illustration: 'title',
          keywords: [
            { en: 'Hardware', zh: '硬件' },
            { en: 'PC Case', zh: '机箱' },
            { en: 'Component', zh: '部件' },
          ],
        },
        {
          id: 'ch-b-inside-pc-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will learn a map of the major parts and how Windows Settings can reveal some of them without opening the case.',
          bodyZh:
            '你会学到主要部件地图，并知道如何用 Windows 设置在不开箱的情况下看到其中一些信息。',
          bullets: [
            {
              en: 'Name case, motherboard, CPU socket, RAM slots, storage, PSU, GPU.',
              zh: '说出机箱、主板、CPU 插槽、内存插槽、存储、电源、显卡。',
            },
            {
              en: 'Explain each part in one plain sentence.',
              zh: '用一句白话解释每个部件做什么。',
            },
            {
              en: 'Know you usually do not open a school or office PC.',
              zh: '知道学校或办公电脑通常不要自行拆开。',
            },
          ],
        },
        {
          id: 'ch-b-inside-pc-case',
          layout: 'text',

          titleEn: 'Case: The Outer Shell',
          titleZh: '机箱：外壳',
          illustration: 'hardware',
          bodyEn:
            'The case holds and protects the parts. It also shapes airflow so fans can move heat away from the CPU and other components. Laptops have a smaller closed shell you rarely open. For class work, treat opening any shared PC as off-limits unless staff approve.',
          bodyZh:
            '机箱用来固定并保护内部部件，也塑造风道，让风扇把热量从 CPU 和其他部件带走。笔记本是更小的封闭外壳，通常很少打开。课堂环境里，除非管理人员批准，否则不要拆开任何公用电脑。',
          bullets: [
            {
              en: 'The case holds and protects the parts.',
              zh: '机箱用来固定并保护内部部件。',
              keywords: [{ en: 'Case', zh: '机箱' }],
            },
            {
              en: 'It helps air flow for cooling.',
              zh: '它帮助空气流动以便散热。',
              keywords: [{ en: 'Cooling', zh: '散热' }],
            },
            {
              en: 'Laptops have a smaller closed case you rarely open.',
              zh: '笔记本是更小的封闭外壳，通常很少打开。',
            },
          ],
        },
        {
          id: 'ch-b-inside-pc-motherboard',
          layout: 'text',

          titleEn: 'Motherboard: The Base Board',
          titleZh: '主板：底板',
          illustration: 'hardware',
          bodyEn:
            'The motherboard is the main connection board. CPU, memory, storage, graphics, and many ports link through it. Think of it as the road network inside the PC: if the roads are wrong or damaged, parts cannot talk even if each part is fine alone.',
          bodyZh:
            '主板是主要连接板。CPU、内存、存储、显卡与许多接口都经它相连。可以把它想成机箱内部的道路网：路不对或损坏时，即使每个零件本身完好，也无法互相通信。',
          bullets: [
            {
              en: 'The motherboard connects almost every part.',
              zh: '主板把几乎所有部件连接在一起。',
              keywords: [{ en: 'Motherboard', zh: '主板' }],
            },
            {
              en: 'Other parts plug into sockets and slots on it.',
              zh: '其他部件插在它上面的插槽里。',
              keywords: [{ en: 'Slot / Socket', zh: '插槽' }],
            },
            {
              en: 'It is the main road network inside the PC.',
              zh: '它是机箱内部的主干道路网。',
            },
          ],
        },
      ],
    },
    {
      id: 'main-parts',
      titleEn: 'Main Parts',
      titleZh: '主要部件',
      slides: [
        {
          id: 'ch-b-inside-pc-cpu-socket',
          layout: 'text',

          titleEn: 'CPU Socket',
          titleZh: 'CPU 插槽',
          illustration: 'hardware',
          bodyEn:
            'The CPU sits in a special socket on the motherboard. Only matching shapes and pin layouts fit. Beginners usually never remove the CPU because bent pins or wrong seating can permanently damage the system. Later chapters explain what the CPU does while Windows runs.',
          bodyZh:
            'CPU 安装在主板上的专用插槽里。只有匹配的形状与针脚布局才能装入。初学者通常不要拆卸 CPU，因为弯针或装反可能永久损坏系统。后面章节会解释 Windows 运行时 CPU 做什么。',
          bullets: [
            {
              en: 'The CPU sits in a special motherboard socket.',
              zh: 'CPU 安装在主板上的专用插槽里。',
              keywords: [
                { en: 'CPU', zh: '中央处理器' },
                { en: 'Socket', zh: '插槽' },
              ],
            },
            {
              en: 'Only matching CPU shapes fit that socket.',
              zh: '只有匹配的 CPU 才能装进该插槽。',
            },
            {
              en: 'Beginners usually never remove the CPU.',
              zh: '初学者通常不要拆卸 CPU。',
            },
          ],
        },
        {
          id: 'ch-b-inside-pc-ram-slots',
          layout: 'text',

          titleEn: 'RAM Slots',
          titleZh: '内存插槽',
          illustration: 'hardware',
          bodyEn:
            'RAM sticks plug into long slots near the CPU. They hold the working data Windows and apps use right now. More working RAM can help many apps feel smoother. Some PCs leave empty slots for upgrades; others solder memory and cannot be expanded easily.',
          bodyZh:
            '内存条插在 CPU 附近的长插槽里。它们保存 Windows 与应用此刻正在使用的工作数据。工作内存更多，多开应用时往往更顺畅。有些电脑留有空插槽方便升级；另一些把内存焊死，不容易扩展。',
          bullets: [
            {
              en: 'RAM sticks plug into long slots near the CPU.',
              zh: '内存条插在 CPU 附近的长插槽里。',
              keywords: [
                { en: 'RAM', zh: '内存' },
                { en: 'DIMM Slot', zh: '内存插槽' },
              ],
            },
            {
              en: 'More working RAM can help many apps feel smoother.',
              zh: '工作内存更多，多开应用时往往更顺畅。',
            },
            {
              en: 'Empty slots may allow future upgrades on some PCs.',
              zh: '有些电脑留有空插槽，方便以后升级。',
            },
          ],
        },
        {
          id: 'ch-b-inside-pc-storage-psu-gpu',
          layout: 'text',

          titleEn: 'Storage, Power, and GPU',
          titleZh: '存储、电源与显卡',
          illustration: 'hardware',
          bodyEn:
            'Storage keeps files after shutdown: SSD or HDD in bays or M.2 slots. The power supply (PSU) converts wall electricity into the voltages parts need. A GPU helps with graphics; many office PCs rely on graphics built into the CPU instead of a separate card.',
          bodyZh:
            '存储在关机后仍保存文件：硬盘位或 M.2 插槽中的 SSD 或 HDD。电源（PSU）把墙上电力转换成部件需要的电压。显卡帮助处理图像；很多办公电脑使用 CPU 内建显卡，而不是独立显卡。',
          bullets: [
            {
              en: 'Storage bays or M.2 slots hold SSD/HDD for files.',
              zh: '硬盘位或 M.2 插槽安装 SSD/HDD 来存文件。',
              keywords: [
                { en: 'SSD', zh: '固态硬盘' },
                { en: 'HDD', zh: '机械硬盘' },
              ],
            },
            {
              en: 'The PSU feeds electricity to parts.',
              zh: '电源（PSU）给各部件供电。',
              keywords: [{ en: 'Power Supply (PSU)', zh: '电源' }],
            },
            {
              en: 'A GPU helps with graphics; many office PCs use built-in graphics.',
              zh: '显卡帮助处理图像；很多办公电脑用核芯显卡。',
              keywords: [{ en: 'GPU', zh: '图形处理器 / 显卡' }],
            },
          ],
        },
        {
          id: 'ch-b-inside-pc-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'environment',
          bodyEn:
            'Learn the outside and the software view first. Do not open school or shared PCs.',
          bodyZh: '先认识外壳与软件视图。不要拆开学校或公用电脑。',
          bullets: [
            {
              en: 'Without opening the case, find the power button and exterior ports.',
              zh: '不必开箱，先找到外壳上的电源键和接口。',
            },
            {
              en: 'Open Settings → System → About and read Device name / Processor.',
              zh: '打开“设置 → 系统 → 关于”，查看设备名称与处理器。',
              keywords: [{ en: 'Settings', zh: '设置' }],
            },
            {
              en: 'Optional: search System Information (msinfo32) and browse once.',
              zh: '可选：搜索“系统信息”（msinfo32）浏览一次。',
            },
          ],
          noteEn: 'Do not open school or shared PCs.',
          noteZh: '不要拆开学校或公用电脑。',
        },
      ],
    },
    {
      id: 'practice-check',
      titleEn: 'Practice and Check',
      titleZh: '练习与自测',
      slides: [
        {
          id: 'ch-b-inside-pc-errors',
          layout: 'callout',
          titleEn: 'Common Mix-ups',
          titleZh: '常见误解',
          bodyEn:
            'Clear names prevent buying the wrong part or blaming the wrong part.',
          bodyZh: '名称清楚，才能避免买错零件或怪错零件。',
          bullets: [
            {
              en: 'Motherboard is not the same thing as the case.',
              zh: '主板不等于机箱。',
            },
            {
              en: 'A discrete GPU is helpful for graphics, not required for every beginner task.',
              zh: '独立显卡对图像有帮助，但不是每个入门任务都需要。',
            },
            {
              en: 'Touching parts without guidance can damage the PC.',
              zh: '没有指导时随意触碰部件可能损坏电脑。',
            },
          ],
        },
        {
          id: 'ch-b-inside-pc-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Answer in one short sentence each.',
          bodyZh: '每题用一句短话回答。',
          bullets: [
            {
              en: 'Which board connects most components?',
              zh: '哪个板子连接大部分部件？',
            },
            {
              en: 'Where does the CPU sit?',
              zh: 'CPU 安装在哪里？',
            },
            {
              en: 'What does the PSU do?',
              zh: '电源（PSU）做什么？',
            },
          ],
          noteEn: 'Answers: motherboard; CPU socket; supplies power to parts.',
          noteZh: '参考答案：主板；CPU 插槽；给各部件供电。',
        },
      ],
    },
  ],
}
