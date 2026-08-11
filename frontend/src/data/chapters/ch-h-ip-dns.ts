import type { Chapter } from '../../types/course'

export const chHIpDns: Chapter = {
  id: 'ip-and-dns',
  titleEn: 'IP Address and DNS',
  titleZh: 'IP 地址与 DNS',
  summaryEn:
    'Read IPv4 addresses on Windows, separate private from public space, and use DNS as the Internet phone book.',
  summaryZh:
    '在 Windows 上阅读 IPv4 地址，区分私有与公网空间，并把 DNS 当作互联网电话簿。',
  sections: [
    {
      id: 'ip-address',
      titleEn: 'IP Address',
      titleZh: 'IP 地址',
      slides: [
        {
          id: 'ch-h-ip-dns-title',
          layout: 'title',

          titleEn: 'Part H · IP Address and DNS',
          titleZh: '篇章 H · IP 地址与 DNS',
          subtitleEn: 'Numbers for machines, names for people',
          subtitleZh: '机器用数字，人用名字',
          illustration: 'title',
          keywords: [
            { en: 'IP Address', zh: 'IP 地址' },
            { en: 'DNS', zh: '域名系统' },
            { en: 'IPv4', zh: 'IPv4' },
          ],
        },
        {
          id: 'ch-h-ip-dns-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will explain what an IP address identifies, recognize private ranges on home and campus LANs, and describe DNS lookup as name-to-number translation.',
          bodyZh:
            '你将说明 IP 地址标识什么，识别家庭与校园局域网上的私有地址范围，并把 DNS 查询描述为名字到数字的翻译。',
          bullets: [
            {
              en: 'Read an IPv4 address from `ipconfig`.',
              zh: '从 `ipconfig` 读取 IPv4 地址。',
            },
            {
              en: 'Tell private addresses from public ones at a beginner level.',
              zh: '在入门层面区分私有地址与公网地址。',
            },
            {
              en: 'Explain why browsers use names like `www.example.com`.',
              zh: '说明浏览器为何使用 `www.example.com` 这类名字。',
            },
            {
              en: 'Use `nslookup` once to see a DNS answer.',
              zh: '使用一次 `nslookup` 查看 DNS 应答。',
            },
          ],
        },
        {
          id: 'ch-h-ip-dns-what-ip',
          layout: 'text',

          titleEn: 'What an IP Address Is For',
          titleZh: 'IP 地址是做什么的',
          bodyEn:
            'An IP address is a network identifier used to deliver packets to a host interface. On beginner Windows networks you mostly see IPv4, written as four numbers separated by dots.',
          bodyZh:
            'IP 地址是用于把数据包投递到主机接口的网络标识。在入门级 Windows 网络上，你主要看到 IPv4，写成四个点分数字。',
          bullets: [
            {
              en: 'Example shape: `192.168.1.23`.',
              zh: '示例形态：`192.168.1.23`。',
              keywords: [{ en: 'IPv4', zh: 'IPv4' }],
            },
            {
              en: 'Your PC may have different addresses on Wi-Fi and Ethernet.',
              zh: '电脑在 Wi-Fi 与以太网上可能有不同地址。',
            },
            {
              en: 'Address alone is not enough; routing and DNS also matter.',
              zh: '仅有地址不够；路由与 DNS 也很重要。',
            },
          ],
        },
        {
          id: 'ch-h-ip-dns-private-public',
          layout: 'text',

          titleEn: 'Private vs Public Addresses',
          titleZh: '私有地址与公网地址',
          bodyEn:
            'Home and campus LANs usually give private addresses that are not globally unique on the public Internet. Your router performs translation so many private devices can share fewer public addresses.',
          bodyZh:
            '家庭与校园局域网通常分配在公共互联网上不全局唯一的私有地址。路由器做地址转换，让许多私有设备共享较少的公网地址。',
          bullets: [
            {
              en: 'Common private starts: `10.`, `192.168.`, `172.16.`–`172.31.`.',
              zh: '常见私有开头：`10.`、`192.168.`、`172.16.`–`172.31.`。',
              keywords: [{ en: 'Private IP', zh: '私有 IP' }],
            },
            {
              en: 'Public addresses are routable on the wider Internet.',
              zh: '公网地址可在更广的互联网上路由。',
              keywords: [{ en: 'Public IP', zh: '公网 IP' }],
            },
            {
              en: 'Seeing `192.168.x.x` on your PC does not mean the website uses that same number.',
              zh: '在电脑上看到 `192.168.x.x` 并不表示网站也用同一个号码。',
            },
          ],
        },
      ],
    },
    {
      id: 'dns-and-ipconfig',
      titleEn: 'DNS and ipconfig',
      titleZh: 'DNS 与 ipconfig',
      slides: [
        {
          id: 'ch-h-ip-dns-dns',
          layout: 'text',

          titleEn: 'DNS Is the Phone Book',
          titleZh: 'DNS 是电话簿',
          bodyEn:
            'People remember names; networks forward with numbers. DNS translates a domain name into one or more IP addresses so your browser can open a TCP connection to the right place.',
          bodyZh:
            '人记名字；网络用数字转发。DNS 把域名翻译成一个或多个 IP 地址，好让浏览器向正确位置打开 TCP 连接。',
          bullets: [
            {
              en: 'Query: what is the address for this name?',
              zh: '查询：这个名字的地址是什么？',
              keywords: [{ en: 'DNS Query', zh: 'DNS 查询' }],
            },
            {
              en: 'Answer can change if providers shift servers.',
              zh: '若服务商迁移服务器，答案可能改变。',
            },
            {
              en: 'DNS failure can look like “the Internet is down.”',
              zh: 'DNS 失败可能看起来像“互联网断了”。',
            },
          ],
        },
        {
          id: 'ch-h-ip-dns-flow',
          layout: 'text',

          titleEn: 'Name Lookup Before Page Load',
          titleZh: '加载页面前先查名',
          bodyEn:
            'A simplified flow is: type a URL, resolve the host name through DNS, connect to the resulting IP, then request the page. If DNS breaks, later steps never start.',
          bodyZh:
            '简化流程是：输入 URL，经 DNS 解析主机名，连接到得到的 IP，再请求页面。若 DNS 坏了，后续步骤根本不会开始。',
          bullets: [
            {
              en: 'Browser address bar uses names for humans.',
              zh: '浏览器地址栏为人使用名字。',
            },
            {
              en: 'Windows asks a configured DNS server for answers.',
              zh: 'Windows 向已配置的 DNS 服务器询问答案。',
              keywords: [{ en: 'DNS Server', zh: 'DNS 服务器' }],
            },
            {
              en: 'Wrong DNS settings can break name sites while raw IPs still ping.',
              zh: '错误 DNS 设置可能让域名站点失败，而原始 IP 仍能 ping。',
            },
          ],
        },
        {
          id: 'ch-h-ip-dns-ipconfig',
          layout: 'steps',
          titleEn: 'Try It: Read Address Details with ipconfig',
          titleZh: '动手：用 ipconfig 阅读地址细节',
          bodyEn:
            'PowerShell or Command Prompt can show the active IPv4 configuration.',
          bodyZh: 'PowerShell 或命令提示符可显示活动 IPv4 配置。',
          bullets: [
            {
              en: 'Open PowerShell.',
              zh: '打开 PowerShell。',
            },
            {
              en: 'Run `ipconfig`.',
              zh: '运行 `ipconfig`。',
              keywords: [{ en: 'ipconfig', zh: '查看 IP 配置' }],
            },
            {
              en: 'Find the active Wi-Fi or Ethernet adapter section.',
              zh: '找到活动的 Wi-Fi 或以太网适配器区段。',
            },
            {
              en: 'Record IPv4 Address, Subnet Mask, and Default Gateway.',
              zh: '记录 IPv4 地址、子网掩码与默认网关。',
              keywords: [{ en: 'Default Gateway', zh: '默认网关' }],
            },
            {
              en: 'Optional: run `ipconfig /all` to see DNS servers.',
              zh: '可选：运行 `ipconfig /all` 查看 DNS 服务器。',
            },
          ],
        },
        {
          id: 'ch-h-ip-dns-try',
          layout: 'steps',
          titleEn: 'Try It: Ask DNS with nslookup',
          titleZh: '动手：用 nslookup 询问 DNS',
          bodyEn:
            'Resolve a well-known name and read the answer section.',
          bodyZh: '解析一个知名名字并阅读应答部分。',
          bullets: [
            {
              en: 'In PowerShell, run `nslookup example.com`.',
              zh: '在 PowerShell 运行 `nslookup example.com`。',
              keywords: [{ en: 'nslookup', zh: '域名查询' }],
            },
            {
              en: 'Note which DNS server answered.',
              zh: '记下是哪台 DNS 服务器应答。',
            },
            {
              en: 'Note the address (or addresses) returned for the name.',
              zh: '记下该名字返回的地址（可能多个）。',
            },
            {
              en: 'Compare with a second name used in class.',
              zh: '再与课堂使用的第二个名字对比。',
            },
          ],
        },
        {
          id: 'ch-h-ip-dns-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Address confusion creates false diagnoses.',
          bodyZh: '地址混淆会造成错误诊断。',
          bullets: [
            {
              en: 'Calling every dotted number “the public IP.”',
              zh: '把每个点分数字都叫作“公网 IP”。',
            },
            {
              en: 'Ignoring DNS when websites fail but chat apps still work.',
              zh: '网站失败但聊天应用仍可用时，忽略 DNS。',
            },
            {
              en: 'Reading the wrong adapter in `ipconfig` (old VPN or disconnected NIC).',
              zh: '在 `ipconfig` 里读错适配器（旧 VPN 或未连接网卡）。',
            },
          ],
        },
        {
          id: 'ch-h-ip-dns-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Connect numbers and names deliberately.',
          bodyZh: '有意识地把数字与名字连起来。',
          bullets: [
            {
              en: 'What problem does DNS solve for humans?',
              zh: 'DNS 为人类解决了什么问题？',
            },
            {
              en: 'Is `192.168.0.12` usually private or public?',
              zh: '`192.168.0.12` 通常是私有还是公网？',
            },
            {
              en: 'Which command shows your PC IPv4 address on Windows?',
              zh: '在 Windows 上哪条命令显示电脑的 IPv4 地址？',
            },
          ],
          noteEn:
            'Answers: remember names instead of raw numbers; private; `ipconfig`.',
          noteZh: '参考：用名字代替记裸数字；私有；`ipconfig`。',
        },
      ],
    },
  ],
}
