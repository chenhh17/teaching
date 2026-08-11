import type { Chapter } from '../../types/course'

export const chHDhcpWifi: Chapter = {
  id: 'dhcp-and-wifi',
  titleEn: 'DHCP and Home Wi-Fi',
  titleZh: 'DHCP 与家庭 Wi-Fi',
  summaryEn:
    'See how home Wi-Fi parts fit together and how DHCP leases addresses so Windows can join without manual typing.',
  summaryZh:
    '看清家庭 Wi-Fi 各部分如何配合，以及 DHCP 如何租约地址，让 Windows 无需手写配置即可接入。',
  sections: [
    {
      id: 'home-wifi',
      titleEn: 'Home Wi-Fi',
      titleZh: '家庭 Wi-Fi',
      slides: [
        {
          id: 'ch-h-dhcp-wifi-title',
          layout: 'title',

          titleEn: 'Part H · DHCP and Home Wi-Fi',
          titleZh: '篇章 H · DHCP 与家庭 Wi-Fi',
          subtitleEn: 'Automatic addresses behind a familiar SSID',
          subtitleZh: '熟悉的 SSID 背后是自动地址分配',
          illustration: 'title',
          keywords: [
            { en: 'DHCP', zh: '动态主机配置' },
            { en: 'Wi-Fi', zh: '无线网络' },
            { en: 'SSID', zh: '无线网络名' },
          ],
        },
        {
          id: 'ch-h-dhcp-wifi-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will name the parts of a typical home wireless setup, explain DHCP leases, and renew an address on Windows when the network misbehaves.',
          bodyZh:
            '你将说出典型家庭无线环境的组成部分，解释 DHCP 租约，并在网络异常时在 Windows 上续租地址。',
          bullets: [
            {
              en: 'Identify router, modem/ONT, SSID, and client roles.',
              zh: '识别路由器、调制解调器/ONT、SSID 与客户端角色。',
            },
            {
              en: 'Explain what DHCP hands out besides an IP address.',
              zh: '说明 DHCP 除 IP 外还下发什么。',
            },
            {
              en: 'Renew a lease with `ipconfig /release` and `/renew`.',
              zh: '用 `ipconfig /release` 与 `/renew` 续租。',
            },
            {
              en: 'Separate “wrong Wi-Fi” from “DHCP failed.”',
              zh: '区分“连错 Wi-Fi”与“DHCP 失败”。',
            },
          ],
        },
        {
          id: 'ch-h-dhcp-wifi-parts',
          layout: 'text',

          titleEn: 'Parts of a Home Wireless Setup',
          titleZh: '家庭无线环境的组成部分',
          bodyEn:
            'Home networks often combine several boxes into one story. Some homes use a single gateway device; others separate modem and router. Your Windows PC is a client that joins a wireless name.',
          bodyZh:
            '家庭网络常把多个盒子合成一个故事。有的家庭用一体网关；有的把调制解调器与路由器分开。你的 Windows 电脑是加入无线名称的客户端。',
          bullets: [
            {
              en: 'Modem/ONT: link toward the ISP.',
              zh: '调制解调器/ONT：通向 ISP 的链路。',
              keywords: [{ en: 'Modem', zh: '调制解调器' }],
            },
            {
              en: 'Router: LAN addresses, Wi-Fi, and usually DHCP.',
              zh: '路由器：局域网地址、Wi-Fi，通常还有 DHCP。',
              keywords: [{ en: 'Router', zh: '路由器' }],
            },
            {
              en: 'Client: phone or Windows PC that requests a lease.',
              zh: '客户端：申请租约的手机或 Windows 电脑。',
              keywords: [{ en: 'Client', zh: '客户端' }],
            },
          ],
          illustration: 'network',
        },
        {
          id: 'ch-h-dhcp-wifi-ssid',
          layout: 'text',

          titleEn: 'SSID Is a Network Name, Not a Password',
          titleZh: 'SSID 是网络名，不是密码',
          bodyEn:
            'The SSID is the broadcast name you tap in Windows. The password/passphrase authenticates you. Connecting to a similarly named guest or neighbor network is a common beginner mistake.',
          bodyZh:
            'SSID 是你在 Windows 里点选的广播名称。密码/口令用于认证。连到名字相似的访客或邻居网络，是初学者常见错误。',
          bullets: [
            {
              en: 'Check the exact SSID spelling, including `_5G` suffixes.',
              zh: '核对 SSID 精确拼写，包括 `_5G` 后缀。',
              keywords: [{ en: 'SSID', zh: '无线网络名' }],
            },
            {
              en: 'Guest networks may isolate you from printers.',
              zh: '访客网络可能把你与打印机隔离。',
              keywords: [{ en: 'Guest Network', zh: '访客网络' }],
            },
            {
              en: 'Saved wrong Wi-Fi profiles can auto-reconnect badly.',
              zh: '保存的错误 Wi-Fi 配置可能自动重连到坏网络。',
            },
          ],
        },
      ],
    },
    {
      id: 'dhcp-idea',
      titleEn: 'DHCP Idea',
      titleZh: 'DHCP 概念',
      slides: [
        {
          id: 'ch-h-dhcp-wifi-what',
          layout: 'text',

          titleEn: 'DHCP Hands Out a Starter Kit',
          titleZh: 'DHCP 发放入网工具包',
          bodyEn:
            'Without DHCP, every PC would need manual IP, mask, gateway, and DNS typing. DHCP automates that kit so joining Wi-Fi feels like one password, not a form.',
          bodyZh:
            '没有 DHCP，每台电脑都要手写 IP、掩码、网关与 DNS。DHCP 自动化这套工具，让加入 Wi-Fi 感觉像输一次密码，而不是填表。',
          bullets: [
            {
              en: 'Typical lease data: IP, subnet mask, default gateway, DNS.',
              zh: '典型租约数据：IP、子网掩码、默认网关、DNS。',
              keywords: [{ en: 'Lease', zh: '租约' }],
            },
            {
              en: 'The DHCP server on home networks is often the router.',
              zh: '家庭网络上的 DHCP 服务器常常是路由器。',
            },
            {
              en: 'Automatic configuration reduces beginner setup errors.',
              zh: '自动配置减少初学者设置错误。',
            },
          ],
        },
        {
          id: 'ch-h-dhcp-wifi-lease',
          layout: 'text',

          titleEn: 'A Lease Is Temporary on Purpose',
          titleZh: '租约故意是暂时的',
          bodyEn:
            'Addresses are leased for a time so the network can reclaim unused numbers. Your PC renews before expiry when the link stays healthy. After long sleep or router reboot, renewal may be needed.',
          bodyZh:
            '地址按时租出，好让网络回收未使用号码。链路健康时，电脑会在到期前续租。长时间休眠或路由器重启后，可能需要重新获取。',
          bullets: [
            {
              en: 'New join: discover → offer → request → acknowledge.',
              zh: '新加入：发现 → 提供 → 请求 → 确认。',
            },
            {
              en: 'APIPA like `169.254.x.x` often means DHCP failed.',
              zh: '像 `169.254.x.x` 的 APIPA 常表示 DHCP 失败。',
              keywords: [{ en: 'APIPA', zh: '自动私有地址' }],
            },
            {
              en: 'Two devices should not keep the same IP intentionally.',
              zh: '两台设备不应故意长期占用同一 IP。',
            },
          ],
        },
        {
          id: 'ch-h-dhcp-wifi-renew',
          layout: 'text',

          titleEn: 'When Renewing Helps',
          titleZh: '何时续租有帮助',
          bodyEn:
            'If Windows shows connected Wi-Fi but has a weird address or no gateway, renewing the DHCP lease is a standard first repair. It is safer than random Advanced sharing toggles.',
          bodyZh:
            '若 Windows 显示已连 Wi-Fi，但地址怪异或没有网关，续租 DHCP 是标准的第一修复。这比乱点高级共享开关更安全。',
          bullets: [
            {
              en: 'Useful after router reboot or moving between networks.',
              zh: '路由器重启或在网络间移动后有用。',
            },
            {
              en: 'Not a fix for wrong password or radio interference.',
              zh: '不能修复密码错误或无线干扰。',
            },
            {
              en: 'Always re-check `ipconfig` after renewing.',
              zh: '续租后务必再查 `ipconfig`。',
            },
          ],
        },
        {
          id: 'ch-h-dhcp-wifi-try',
          layout: 'steps',
          titleEn: 'Try It: Renew a DHCP Lease on Windows',
          titleZh: '动手：在 Windows 上续租 DHCP',
          bodyEn:
            'Use this only on a network you are allowed to manage, such as your own lab or home PC.',
          bodyZh: '仅在你有权管理的网络上操作，例如自己的实验或家庭电脑。',
          bullets: [
            {
              en: 'Run `ipconfig` and note the current IPv4 and gateway.',
              zh: '运行 `ipconfig`，记下当前 IPv4 与网关。',
            },
            {
              en: 'Run `ipconfig /release`.',
              zh: '运行 `ipconfig /release`。',
              keywords: [{ en: 'release', zh: '释放租约' }],
            },
            {
              en: 'Run `ipconfig /renew`.',
              zh: '运行 `ipconfig /renew`。',
              keywords: [{ en: 'renew', zh: '续租' }],
            },
            {
              en: 'Run `ipconfig` again and compare the address fields.',
              zh: '再次运行 `ipconfig` 并比较地址字段。',
            },
            {
              en: 'If you see `169.254...`, check router power and SSID first.',
              zh: '若看到 `169.254...`，先检查路由器电源与 SSID。',
            },
          ],
        },
        {
          id: 'ch-h-dhcp-wifi-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Wireless symptoms have many causes; name them carefully.',
          bodyZh: '无线症状原因很多；命名要小心。',
          bullets: [
            {
              en: 'Typing a static IP “to make it faster” without understanding masks.',
              zh: '不懂掩码却手写静态 IP“为了更快”。',
            },
            {
              en: 'Forgetting that guest Wi-Fi can block local devices.',
              zh: '忘记访客 Wi-Fi 可能拦截本地设备。',
            },
            {
              en: 'Blaming DHCP when the PC is simply on airplane mode.',
              zh: '电脑只是开了飞行模式却怪 DHCP。',
            },
          ],
        },
        {
          id: 'ch-h-dhcp-wifi-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Confirm the automatic-address story.',
          bodyZh: '确认自动地址这条故事线。',
          bullets: [
            {
              en: 'What four settings does DHCP commonly provide?',
              zh: 'DHCP 通常提供哪四类设置？',
            },
            {
              en: 'What does an address starting with `169.254` often mean?',
              zh: '以 `169.254` 开头的地址通常意味着什么？',
            },
            {
              en: 'Which Windows commands renew a lease?',
              zh: '哪些 Windows 命令用于续租？',
            },
          ],
          noteEn:
            'Answers: IP/mask/gateway/DNS; DHCP failed/APIPA; `ipconfig /release` then `/renew`.',
          noteZh:
            '参考：IP/掩码/网关/DNS；DHCP 失败/APIPA；先 `/release` 再 `/renew`。',
        },
      ],
    },
  ],
}
