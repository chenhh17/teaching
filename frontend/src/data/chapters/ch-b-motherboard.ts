import type { Chapter } from '../../types/course'

export const chBMotherboard: Chapter = {
  id: 'motherboard-and-power',
  titleEn: 'Motherboard and Power',
  titleZh: '主板与电源',
  summaryEn:
    'How the motherboard, PSU, and ESD-safe habits keep a Windows PC alive, and how to inspect board info safely.',
  summaryZh: '主板、电源与防静电习惯如何让 Windows 电脑正常工作，以及如何安全查看主板信息。',
  sections: [
    {
      id: 'board-and-power',
      titleEn: 'Board and Power',
      titleZh: '主板与供电',
      slides: [
        {
          id: 'ch-b-motherboard-title',
          layout: 'title',

          titleEn: 'Part B · Motherboard and Power',
          titleZh: '篇章 B · 主板与电源',
          subtitleEn: 'The backbone and the electricity path',
          subtitleZh: '整机骨架与电力通路',
          illustration: 'title',
          keywords: [
            { en: 'Motherboard', zh: '主板' },
            { en: 'PSU', zh: '电源' },
            { en: 'ESD', zh: '静电放电' },
          ],
        },
        {
          id: 'ch-b-motherboard-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Focus on roles and safety. You are not building a PC in class; you are learning what must connect and what must stay powered correctly.',
          bodyZh:
            '重点是角色与安全。课堂上你不是在装机，而是在学习什么必须连接、电力必须如何正确供给。',
          bullets: [
            {
              en: 'Explain motherboard as the main connection board.',
              zh: '把主板解释为主要连接板。',
              keywords: [{ en: 'Motherboard', zh: '主板' }],
            },
            {
              en: 'Describe what a PSU does in one sentence.',
              zh: '用一句话说明电源（PSU）做什么。',
              keywords: [{ en: 'PSU', zh: '电源' }],
            },
            {
              en: 'List basic ESD safety before touching parts.',
              zh: '列出触碰部件前的基本防静电安全。',
              keywords: [{ en: 'ESD', zh: '静电放电' }],
            },
          ],
        },
        {
          id: 'ch-b-motherboard-role',
          layout: 'text',

          titleEn: 'Motherboard: The Backbone',
          titleZh: '主板：整机骨架',
          illustration: 'hardware',
          bodyEn:
            'CPU, RAM, storage, GPU, and ports connect through the motherboard. Think of it as the printed city map that lets every part talk to every other part. The chipset and sockets decide which CPUs and memory modules fit. Form factor names such as ATX, mATX, and ITX describe board size and which cases can hold them. Compatibility is a physical rule, not a brand slogan: a great GPU still fails if the board lacks the right slot, power routing, or case clearance.',
          bodyZh:
            'CPU、内存、存储、显卡与接口都经主板连接。可以把它想成一张印刷好的城市地图，让各部件彼此通信。芯片组与插槽决定哪些 CPU 与内存条能装。ATX、mATX、ITX 等板型名称描述尺寸以及哪些机箱能装下。兼容性是物理规则，不是品牌口号：再好的显卡，若主板没有正确插槽、供电路径或机箱空间，一样装不成。',
          bullets: [
            {
              en: 'CPU, RAM, storage, GPU, and ports connect through the board.',
              zh: 'CPU、内存、存储、显卡与接口都经主板连接。',
            },
            {
              en: 'Chipset and sockets decide which parts fit.',
              zh: '芯片组与插槽决定哪些部件能装。',
              keywords: [
                { en: 'Chipset', zh: '芯片组' },
                { en: 'Socket', zh: '插槽' },
              ],
            },
            {
              en: 'Form factor sets board size and case fit.',
              zh: '板型决定尺寸与机箱匹配。',
              keywords: [{ en: 'Form Factor', zh: '板型' }],
            },
            {
              en: 'Check board manuals before buying upgrades.',
              zh: '升级前先查主板说明书。',
            },
          ],
        },
        {
          id: 'ch-b-motherboard-psu',
          layout: 'text',

          titleEn: 'PSU: Safe Electricity',
          titleZh: '电源：安全供电',
          illustration: 'hardware',
          bodyEn:
            'The PSU converts wall AC power into the DC voltages parts need. Wattage must cover CPU, GPU, drives, and fans with headroom. Cables such as the 24-pin board connector and CPU or GPU power plugs must seat fully. A weak or failing PSU can cause random restarts that look like software bugs.',
          bodyZh:
            '电源把墙上交流电转换成部件需要的直流电压。瓦数需覆盖 CPU、显卡、硬盘与风扇并留余量。24-pin 主板供电与 CPU/显卡供电线必须插到位。偏弱或故障的电源可能导致随机重启，看起来像软件故障。',
          bullets: [
            {
              en: 'The PSU converts wall AC power to DC the parts need.',
              zh: '电源把墙上交流电转换成部件需要的直流电。',
              keywords: [{ en: 'PSU', zh: '电源' }],
            },
            {
              en: 'Wattage must cover parts with headroom.',
              zh: '瓦数需覆盖各部件并留余量。',
              keywords: [{ en: 'Wattage', zh: '瓦数' }],
            },
            {
              en: 'Power cables must seat fully.',
              zh: '供电线必须插到位。',
            },
          ],
          noteEn: 'A weak PSU can cause random restarts.',
          noteZh: '电源偏弱可能导致随机重启。',
        },
      ],
    },
    {
      id: 'safety-and-windows',
      titleEn: 'Safety and Windows Checks',
      titleZh: '安全与 Windows 检查',
      slides: [
        {
          id: 'ch-b-motherboard-esd',
          layout: 'text',

          titleEn: 'ESD Safety Basics',
          titleZh: '防静电基础',
          illustration: 'security',
          bodyEn:
            'Static electricity can damage sensitive chips without a dramatic spark you notice. Power off, unplug, and wait before opening a case. Touch grounded metal or use an anti-static wrist strap. Avoid carpet, plastic bags, and forcing connectors. On school PCs, ask staff before opening anything.',
          bodyZh:
            '静电可能在你几乎感觉不到火花的情况下损坏敏感芯片。开箱前先关机、拔电并等待。触摸接地金属，或使用防静电腕带。避免地毯、塑料袋，不要硬插接口。学校电脑开箱前先请示管理人员。',
          bullets: [
            {
              en: 'Power off, unplug, and wait before opening a case.',
              zh: '关机、拔电，等待后再开箱。',
            },
            {
              en: 'Touch grounded metal or use an anti-static wrist strap.',
              zh: '触摸接地金属，或使用防静电腕带。',
              keywords: [{ en: 'ESD', zh: '静电放电' }],
            },
            {
              en: 'Avoid carpet, plastic bags, and forcing connectors.',
              zh: '避免地毯、塑料袋，不要硬插接口。',
            },
          ],
          noteEn: 'School and office PCs: ask staff first.',
          noteZh: '学校与办公电脑：开箱前先请示。',
        },
        {
          id: 'ch-b-motherboard-connectors',
          layout: 'text',

          titleEn: 'What Plugs Into the Board',
          titleZh: '什么插在主板上',
          illustration: 'hardware',
          bodyEn:
            'RAM sticks sit in DIMM slots. Storage uses SATA cables or M.2 slots. A discrete GPU sits in a PCIe slot. Front-panel USB and audio headers need correct orientation. Knowing these names helps you read upgrade guides and Device Manager categories without panic.',
          bodyZh:
            '内存插在 DIMM；存储用 SATA 线或 M.2 插槽；独立显卡插在 PCIe。机箱前面板 USB/音频针脚要注意方向。知道这些名称，阅读升级指南与设备管理器分类时就不容易慌。',
          bullets: [
            {
              en: 'RAM in DIMM slots; storage on SATA or M.2.',
              zh: '内存插在 DIMM；存储用 SATA 或 M.2。',
              keywords: [
                { en: 'DIMM', zh: '内存插槽' },
                { en: 'M.2', zh: 'M.2' },
              ],
            },
            {
              en: 'A discrete GPU sits in a PCIe slot.',
              zh: '独立显卡插在 PCIe 插槽。',
              keywords: [{ en: 'PCIe', zh: 'PCIe' }],
            },
            {
              en: 'Front panel USB/audio headers need correct orientation.',
              zh: '机箱前面板 USB/音频针脚要注意方向。',
            },
          ],
        },
        {
          id: 'ch-b-motherboard-symptoms',
          layout: 'text',

          titleEn: 'Power-Related Symptoms',
          titleZh: '与电源相关的现象',
          illustration: 'hardware',
          bodyEn:
            'No lights or fans often means outlet, PSU switch, or cable problems. Starts-then-dies can mean overload, short, or overheating. Record what you see and stop forcing power cycles. Repeated hard powering can make a hardware fault worse.',
          bodyZh:
            '无灯无风扇常常是插座、电源开关或线缆问题。启动后立刻熄灭可能是过载、短路或过热。记录现象并停止反复强行开关机。反复硬断电可能让硬件故障更严重。',
          bullets: [
            {
              en: 'No lights/fans: check outlet, PSU switch, and cable.',
              zh: '无灯无风扇：检查插座、电源开关与线缆。',
            },
            {
              en: 'Starts then dies: possible overload, short, or overheating.',
              zh: '启动后立刻熄灭：可能过载、短路或过热。',
            },
            {
              en: 'Report symptoms; do not keep forcing power cycles.',
              zh: '记录现象；不要反复强行开关机。',
            },
          ],
        },
        {
          id: 'ch-b-motherboard-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'terminal',
          bodyEn:
            'Use read-only Windows tools. Do not uninstall devices.',
          bodyZh: '使用只读的 Windows 工具。不要卸载设备。',
          bullets: [
            {
              en: 'Win + X → Device Manager → browse System devices and Disk drives.',
              zh: 'Win + X → 设备管理器 → 浏览“系统设备”与“磁盘驱动器”。',
              keywords: [{ en: 'Device Manager', zh: '设备管理器' }],
            },
            {
              en: 'Settings → System → About: note device name and processor.',
              zh: '设置 → 系统 → 关于：记下设备名与处理器。',
            },
            {
              en: 'In PowerShell run: Get-CimInstance Win32_BaseBoard | Select Manufacturer, Product',
              zh: '在 PowerShell 运行：Get-CimInstance Win32_BaseBoard | Select Manufacturer, Product',
            },
          ],
          noteEn: 'Read-only commands only.',
          noteZh: '只使用只读命令。',
        },
      ],
    },
    {
      id: 'check-in',
      titleEn: 'Check In',
      titleZh: '检查一下',
      slides: [
        {
          id: 'ch-b-motherboard-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'Hardware mistakes are expensive. Treat power and ESD as non-optional.',
          bodyZh: '硬件错误代价高。把供电与防静电当作不可省略的步骤。',
          bullets: [
            {
              en: 'Working on a plugged-in PC and skipping ESD steps.',
              zh: '电脑仍插电就动手，并跳过防静电步骤。',
            },
            {
              en: 'Buying a cheap low-watt PSU for a strong GPU.',
              zh: '给强显卡配廉价低瓦电源。',
            },
            {
              en: 'Assuming every CPU fits every motherboard socket.',
              zh: '以为任何 CPU 都能插进任意主板插槽。',
            },
          ],
        },
        {
          id: 'ch-b-motherboard-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Answer without opening Device Manager first.',
          bodyZh: '先不打开设备管理器作答。',
          bullets: [
            {
              en: 'What is the motherboard’s main job?',
              zh: '主板的主要工作是什么？',
            },
            {
              en: 'Name two ESD-safe habits before opening a case.',
              zh: '开箱前说出两条防静电习惯。',
            },
            {
              en: 'Which Windows tool lists hardware devices?',
              zh: '哪个 Windows 工具列出硬件设备？',
            },
          ],
          noteEn:
            'Answers: connect parts and carry signals/power paths; unplug + ground yourself; Device Manager.',
          noteZh:
            '参考答案：连接部件并承载信号/供电通路；拔电+自身接地；设备管理器。',
        },
      ],
    },
  ],
}
