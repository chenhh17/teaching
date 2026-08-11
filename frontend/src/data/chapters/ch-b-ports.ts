import type { Chapter } from '../../types/course'

export const chBPorts: Chapter = {
  id: 'ports-drivers-devices',
  titleEn: 'Ports, Drivers, and Devices',
  titleZh: '接口、驱动与设备',
  summaryEn:
    'Recognize common ports, understand drivers as translators, and use Device Manager safely on Windows.',
  summaryZh: '认识常见接口，把驱动理解为翻译，并在 Windows 上安全使用设备管理器。',
  sections: [
    {
      id: 'ports-and-devices',
      titleEn: 'Ports and Devices',
      titleZh: '接口与设备',
      slides: [
        {
          id: 'ch-b-ports-title',
          layout: 'title',

          titleEn: 'Part B · Ports, Drivers, and Devices',
          titleZh: '篇章 B · 接口、驱动与设备',
          subtitleEn: 'How outside devices join your Windows PC',
          subtitleZh: '外部设备如何接入你的 Windows 电脑',
          illustration: 'title',
          keywords: [
            { en: 'Port', zh: '接口' },
            { en: 'Driver', zh: '驱动程序' },
            { en: 'Device Manager', zh: '设备管理器' },
          ],
        },
        {
          id: 'ch-b-ports-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will connect physical plugs to Windows software ideas: ports, drivers, and Device Manager.',
          bodyZh:
            '你会把物理插头与 Windows 软件概念连起来：接口、驱动与设备管理器。',
          bullets: [
            {
              en: 'Name common ports: USB, HDMI/DisplayPort, Ethernet, audio.',
              zh: '说出常见接口：USB、HDMI/DisplayPort、以太网、音频。',
            },
            {
              en: 'Explain a driver as software that helps Windows talk to a device.',
              zh: '把驱动解释为帮助 Windows 与设备对话的软件。',
            },
            {
              en: 'Open Device Manager and recognize warning icons without uninstalling blindly.',
              zh: '打开设备管理器，识别警告图标，不盲目卸载。',
            },
          ],
        },
        {
          id: 'ch-b-ports-ports',
          layout: 'text',

          titleEn: 'Common Ports Outside the Case',
          titleZh: '机箱外常见接口',
          illustration: 'hardware',
          bodyEn:
            'Ports are the doors between inside electronics and outside devices. USB carries many kinds of peripherals. HDMI or DisplayPort carry video to monitors. Ethernet provides a wired network path. Audio jacks connect headsets. Matching shape is not enough; the device and Windows still need a working driver path.',
          bodyZh:
            '接口是内部电子与外部设备之间的门。USB 连接许多外设；HDMI 或 DisplayPort 把视频送到显示器；以太网提供有线网络；音频孔连接耳机。形状匹配还不够；设备与 Windows 仍需要可用的驱动通路。',
          bullets: [
            {
              en: 'USB: keyboards, mice, drives, many accessories.',
              zh: 'USB：键盘、鼠标、U 盘与许多配件。',
              keywords: [{ en: 'USB', zh: 'USB' }],
            },
            {
              en: 'HDMI / DisplayPort: video to a monitor or projector.',
              zh: 'HDMI / DisplayPort：视频到显示器或投影。',
            },
            {
              en: 'Ethernet and audio: wired network and sound.',
              zh: '以太网与音频：有线网络与声音。',
              keywords: [{ en: 'Ethernet', zh: '以太网' }],
            },
          ],
        },
        {
          id: 'ch-b-ports-input',
          layout: 'text',

          titleEn: 'Input Devices You Use Daily',
          titleZh: '每天使用的输入设备',
          illustration: 'interface',
          bodyEn:
            'Keyboard and mouse seem simple, but Windows still loads drivers for them. Wireless devices add batteries and receivers. When input stops working, check the physical connection or Bluetooth pairing before reinstalling software. Many “broken keyboard” reports are unplugged cables or low wireless power.',
          bodyZh:
            '键盘与鼠标看起来简单，但 Windows 仍会为它们加载驱动。无线设备还涉及电池与接收器。输入失效时，先查物理连接或蓝牙配对，再重装软件。很多“键盘坏了”其实是线没插好或无线电量低。',
          bullets: [
            {
              en: 'Keyboard and mouse need a working connection and driver path.',
              zh: '键盘与鼠标需要可用的连接与驱动通路。',
            },
            {
              en: 'Wireless devices depend on battery and pairing.',
              zh: '无线设备依赖电量与配对。',
            },
            {
              en: 'Check plugs and power before reinstalling software.',
              zh: '重装软件前先检查插头与电量。',
            },
          ],
        },
      ],
    },
    {
      id: 'drivers-windows',
      titleEn: 'Drivers on Windows',
      titleZh: 'Windows 上的驱动',
      slides: [
        {
          id: 'ch-b-ports-driver',
          layout: 'text',

          titleEn: 'Drivers Are Translators',
          titleZh: '驱动是翻译',
          illustration: 'environment',
          bodyEn:
            'A driver is software that helps Windows understand a specific device. Without the right driver, a webcam may show as unknown, or a printer may refuse to print. Windows Update installs many drivers automatically. Random “driver pack” websites are a common security risk for beginners.',
          bodyZh:
            '驱动是帮助 Windows 理解特定设备的软件。没有正确驱动时，摄像头可能显示为未知，打印机可能拒绝打印。Windows 更新会自动安装许多驱动。对初学者来说，随机“驱动打包站”是常见安全风险。',
          bullets: [
            {
              en: 'A driver helps Windows talk to a device.',
              zh: '驱动帮助 Windows 与设备对话。',
              keywords: [{ en: 'Driver', zh: '驱动程序' }],
            },
            {
              en: 'Wrong or missing drivers cause unknown or failing devices.',
              zh: '错误或缺失的驱动会导致未知或失效设备。',
            },
            {
              en: 'Prefer Windows Update or vendor sites over random packs.',
              zh: '优先 Windows 更新或厂商网站，而不是随机打包站。',
            },
          ],
        },
        {
          id: 'ch-b-ports-device-manager',
          layout: 'text',

          titleEn: 'Device Manager Habits',
          titleZh: '设备管理器习惯',
          illustration: 'environment',
          bodyEn:
            'Device Manager lists hardware categories Windows knows about. A yellow warning often means a driver or connection problem. Expand categories to explore, but do not uninstall devices you do not recognize on a school PC. Your goal is to observe and report, not to “clean” the list.',
          bodyZh:
            '设备管理器列出 Windows 认识的硬件类别。黄色警告常表示驱动或连接问题。可以展开类别去观察，但不要在学校电脑上卸载你不认识的设备。你的目标是观察与报告，而不是“清理”列表。',
          bullets: [
            {
              en: 'Open with Win + X → Device Manager.',
              zh: '用 Win + X → 设备管理器打开。',
              keywords: [{ en: 'Device Manager', zh: '设备管理器' }],
            },
            {
              en: 'Warning icons often mean driver or connection issues.',
              zh: '警告图标常表示驱动或连接问题。',
            },
            {
              en: 'Do not uninstall unknown devices on shared PCs.',
              zh: '不要在公用电脑上卸载不认识的设备。',
            },
          ],
        },
        {
          id: 'ch-b-ports-safe-habits',
          layout: 'text',

          titleEn: 'Safe Plug and Unplug Habits',
          titleZh: '安全插拔习惯',
          bodyEn:
            'For USB storage, use Safely Remove Hardware when Windows offers it, especially before yanking a drive during file copies. Do not force plugs upside down. Keep liquids away from ports. These habits prevent data loss and bent connectors that look like mysterious hardware failure later.',
          bodyZh:
            '对 USB 存储，在 Windows 提供“安全删除硬件”时使用它，尤其不要在复制文件时硬拔。不要强行反插。让液体远离接口。这些习惯能避免数据丢失与弯折接口，后者以后看起来会像神秘硬件故障。',
          bullets: [
            {
              en: 'Use Safely Remove for USB drives when possible.',
              zh: '可能时对 U 盘使用安全删除。',
            },
            {
              en: 'Never force a connector into the wrong orientation.',
              zh: '永远不要把接口硬塞进错误方向。',
            },
            {
              en: 'Keep liquids away from ports and laptops.',
              zh: '让液体远离接口与笔记本。',
            },
          ],
        },
        {
          id: 'ch-b-ports-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          illustration: 'terminal',
          bodyEn:
            'Observe Device Manager. Do not uninstall anything.',
          bodyZh: '观察设备管理器。不要卸载任何东西。',
          bullets: [
            {
              en: 'Press Win + X and open Device Manager.',
              zh: '按 Win + X，打开设备管理器。',
            },
            {
              en: 'Expand Keyboards, Mice and other pointing devices, and Disk drives.',
              zh: '展开“键盘”“鼠标和其他指针设备”与“磁盘驱动器”。',
            },
            {
              en: 'Optional: plug a USB drive, refresh the view, then safely eject it.',
              zh: '可选：插入 U 盘，刷新视图，再安全弹出。',
            },
          ],
          noteEn: 'Observation only on school PCs.',
          noteZh: '在学校电脑上只观察。',
        },
      ],
    },
    {
      id: 'practice-check',
      titleEn: 'Practice and Check',
      titleZh: '练习与自测',
      slides: [
        {
          id: 'ch-b-ports-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn:
            'Most device pain comes from haste: wrong downloads, forced plugs, or blind uninstalls.',
          bodyZh: '多数设备痛苦来自匆忙：错误下载、硬插，或盲目卸载。',
          bullets: [
            {
              en: 'Downloading random driver packs from untrusted sites.',
              zh: '从不信任网站下载随机驱动包。',
            },
            {
              en: 'Uninstalling unknown devices to “speed up” the PC.',
              zh: '为了“加速”而卸载不认识的设备。',
            },
            {
              en: 'Pulling a USB drive during a file copy.',
              zh: '正在复制文件时拔出 U 盘。',
            },
          ],
        },
        {
          id: 'ch-b-ports-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          bodyEn: 'Answer with the Windows tool names when relevant.',
          bodyZh: '相关时请答出 Windows 工具名称。',
          bullets: [
            {
              en: 'What does a driver do?',
              zh: '驱动做什么？',
            },
            {
              en: 'Which tool lists hardware with warning icons?',
              zh: '哪个工具用警告图标列出硬件？',
            },
            {
              en: 'Name two common external ports.',
              zh: '说出两种常见外部接口。',
            },
          ],
          noteEn:
            'Answers: helps Windows talk to a device; Device Manager; e.g. USB and HDMI.',
          noteZh:
            '参考答案：帮助 Windows 与设备对话；设备管理器；例如 USB 与 HDMI。',
        },
      ],
    },
  ],
}
