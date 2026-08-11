import type { Chapter } from '../../types/course'

export const chHInterfaces: Chapter = {
  id: 'interfaces-ping-firewall',
  titleEn: 'Interfaces, Ping, and Firewall',
  titleZh: '网卡、Ping 与防火墙',
  summaryEn:
    'Find Windows network interfaces, interpret ping results carefully, and understand how the firewall can block tests without meaning “the Internet is dead.”',
  summaryZh:
    '找到 Windows 网络接口，谨慎解读 ping 结果，并理解防火墙如何阻断测试却不代表“互联网死了”。',
  sections: [
    {
      id: 'interfaces',
      titleEn: 'Interfaces',
      titleZh: '网络接口',
      slides: [
        {
          id: 'ch-h-interfaces-title',
          layout: 'title',

          titleEn: 'Part H · Interfaces, Ping, and Firewall',
          titleZh: '篇章 H · 网卡、Ping 与防火墙',
          subtitleEn: 'See the door before you test the path',
          subtitleZh: '先看见门口，再测试路径',
          illustration: 'title',
          keywords: [
            { en: 'Interface', zh: '网络接口' },
            { en: 'Ping', zh: '连通性探测' },
            { en: 'Firewall', zh: '防火墙' },
          ],
        },
        {
          id: 'ch-h-interfaces-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will identify active Windows interfaces, run ping as a limited reachability test, and explain why firewalls may block ICMP even when web access works.',
          bodyZh:
            '你将识别活动的 Windows 接口，把 ping 当作有限的可达性测试，并说明为何防火墙可能阻断 ICMP，即使网页仍可访问。',
          bullets: [
            {
              en: 'List Wi-Fi, Ethernet, and VPN-style adapters you may see.',
              zh: '列出你可能看到的 Wi-Fi、以太网与 VPN 类适配器。',
            },
            {
              en: 'Read `ipconfig` without picking a dead adapter.',
              zh: '阅读 `ipconfig` 时不选中已失效适配器。',
            },
            {
              en: 'Interpret ping success and failure cautiously.',
              zh: '谨慎解读 ping 成功与失败。',
            },
            {
              en: 'Describe the Windows Firewall as a policy filter.',
              zh: '把 Windows 防火墙描述为策略过滤器。',
            },
          ],
        },
        {
          id: 'ch-h-interfaces-iface',
          layout: 'text',

          titleEn: 'An Interface Is a Network Door',
          titleZh: '接口是网络的门',
          bodyEn:
            'A network interface is where your PC attaches to a network: Wi-Fi radio, Ethernet port, or virtual adapter. IP addresses bind to interfaces. Troubleshooting starts by knowing which door is active.',
          bodyZh:
            '网络接口是电脑接入网络的地方：Wi-Fi 无线、以太网口或虚拟适配器。IP 地址绑定在接口上。排障从知道哪扇门处于活动开始。',
          bullets: [
            {
              en: 'Physical: Ethernet NIC, Wi-Fi adapter.',
              zh: '物理：以太网卡、Wi-Fi 适配器。',
              keywords: [{ en: 'NIC', zh: '网卡' }],
            },
            {
              en: 'Virtual: VPN, Hyper-V, Docker-related adapters.',
              zh: '虚拟：VPN、Hyper-V、Docker 相关适配器。',
              keywords: [{ en: 'VPN', zh: '虚拟专用网络' }],
            },
            {
              en: 'Only some interfaces have useful default gateways.',
              zh: '只有部分接口拥有有用的默认网关。',
            },
          ],
        },
        {
          id: 'ch-h-interfaces-see-iface',
          layout: 'steps',
          titleEn: 'Try It: Identify the Active Interface',
          titleZh: '动手：识别活动接口',
          bodyEn:
            'Combine Settings and `ipconfig` so names match reality.',
          bodyZh: '把设置与 `ipconfig` 结合起来，让名称匹配现实。',
          bullets: [
            {
              en: 'Open Settings → Network & internet and note Wi-Fi or Ethernet.',
              zh: '打开设置 → 网络和 Internet，记下 Wi-Fi 或以太网。',
            },
            {
              en: 'In PowerShell, run `ipconfig`.',
              zh: '在 PowerShell 运行 `ipconfig`。',
            },
            {
              en: 'Match the connected media to the adapter section with an IPv4 address.',
              zh: '把已连接介质匹配到带 IPv4 地址的适配器区段。',
            },
            {
              en: 'Ignore media disconnected sections for this exercise.',
              zh: '本练习忽略介质已断开的区段。',
            },
            {
              en: 'Write the adapter name and IPv4 in your notes.',
              zh: '在笔记写下适配器名称与 IPv4。',
            },
          ],
        },
      ],
    },
    {
      id: 'ping-firewall',
      titleEn: 'Ping and Firewall',
      titleZh: 'Ping 与防火墙',
      slides: [
        {
          id: 'ch-h-interfaces-ping',
          layout: 'text',

          titleEn: 'What Ping Actually Tests',
          titleZh: 'Ping 实际测试什么',
          bodyEn:
            'Ping sends ICMP echo requests and waits for replies. Success suggests a reachable host at the IP layer for ICMP. It does not prove that HTTP, SSH, or your app port is open.',
          bodyZh:
            'Ping 发送 ICMP 回显请求并等待答复。成功只暗示在 IP 层对该 ICMP 可达。它不能证明 HTTP、SSH 或你的应用端口是开放的。',
          bullets: [
            {
              en: 'Command shape: `ping 192.168.1.1` or `ping example.com`.',
              zh: '命令形态：`ping 192.168.1.1` 或 `ping example.com`。',
              keywords: [{ en: 'ICMP', zh: '互联网控制消息协议' }],
            },
            {
              en: 'Name ping also depends on DNS working.',
              zh: '对名字做 ping 还依赖 DNS 正常。',
            },
            {
              en: 'Reply time is a hint, not a full speed test.',
              zh: '往返时间只是提示，不是完整测速。',
            },
          ],
        },
        {
          id: 'ch-h-interfaces-ping-fail',
          layout: 'text',

          titleEn: 'When Ping Fails or Lies',
          titleZh: '当 Ping 失败或“说谎”',
          bodyEn:
            'Timeouts can mean the host is down, filtered, or congested. Many servers disable ping replies. A failed ping with a working website is possible; a successful ping with a broken website is also possible.',
          bodyZh:
            '超时可能表示主机宕机、被过滤或拥塞。许多服务器禁用 ping 答复。ping 失败但网站可用是可能的；ping 成功但网站坏了也是可能的。',
          bullets: [
            {
              en: 'Do not conclude “Internet dead” from one blocked ping.',
              zh: '不要因一次被拦的 ping 就断定“互联网死了”。',
            },
            {
              en: 'Test local gateway ping before distant servers.',
              zh: '先测本地网关 ping，再测远方服务器。',
              keywords: [{ en: 'Gateway', zh: '网关' }],
            },
            {
              en: 'Pair ping with browser or `Test-NetConnection` checks.',
              zh: '把 ping 与浏览器或 `Test-NetConnection` 检查配对。',
            },
          ],
        },
        {
          id: 'ch-h-interfaces-firewall',
          layout: 'text',

          titleEn: 'Windows Firewall as Policy',
          titleZh: 'Windows 防火墙即策略',
          bodyEn:
            'A firewall allows or blocks traffic by rules. Windows Defender Firewall can protect your PC while also making some inbound tests fail. Campus and home routers add more filters beyond your laptop.',
          bodyZh:
            '防火墙按规则允许或阻止流量。Windows Defender 防火墙可以保护电脑，也会让某些入站测试失败。校园与家庭路由器还会在笔记本之外再加过滤。',
          bullets: [
            {
              en: 'Outbound web browsing may work while inbound pings fail.',
              zh: '出站网页浏览可能正常，而入站 ping 失败。',
              keywords: [{ en: 'Inbound', zh: '入站' }],
            },
            {
              en: 'Do not disable the firewall permanently to “make classwork easier.”',
              zh: '不要为了“让作业好做”而永久关闭防火墙。',
            },
            {
              en: 'Ask IT before changing managed device policies.',
              zh: '更改受管设备策略前先问 IT。',
            },
          ],
          illustration: 'security',
        },
        {
          id: 'ch-h-interfaces-try',
          layout: 'steps',
          titleEn: 'Try It: Ping Gateway, Then a Name',
          titleZh: '动手：先 Ping 网关，再 Ping 名字',
          bodyEn:
            'Build a short evidence chain instead of a single lucky test.',
          bodyZh: '建立短证据链，而不是单次碰运气测试。',
          bullets: [
            {
              en: 'From `ipconfig`, copy the Default Gateway address.',
              zh: '从 `ipconfig` 复制默认网关地址。',
            },
            {
              en: 'Run `ping <gateway>` and note success or timeout.',
              zh: '运行 `ping <gateway>`，记下成功或超时。',
            },
            {
              en: 'Run `ping example.com` and note whether the name resolved.',
              zh: '运行 `ping example.com`，记下名字是否解析。',
            },
            {
              en: 'If name ping fails, try `nslookup example.com` next.',
              zh: '若名字 ping 失败，接下来试 `nslookup example.com`。',
            },
            {
              en: 'Record results as gateway / DNS / remote ICMP observations.',
              zh: '把结果记为网关 / DNS / 远端 ICMP 观察。',
            },
          ],
        },
        {
          id: 'ch-h-interfaces-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Interface and ping mistakes create false confidence.',
          bodyZh: '接口与 ping 错误会造成虚假自信。',
          bullets: [
            {
              en: 'Reading a VPN adapter address while troubleshooting home Wi-Fi.',
              zh: '排查家庭 Wi-Fi 时却读着 VPN 适配器地址。',
            },
            {
              en: 'Treating ping as a full application health check.',
              zh: '把 ping 当成完整的应用健康检查。',
            },
            {
              en: 'Turning off firewalls on shared lab PCs without permission.',
              zh: '未经许可在共享实验电脑上关闭防火墙。',
            },
          ],
        },
        {
          id: 'ch-h-interfaces-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Separate doors, paths, and policies.',
          bodyZh: '分清门口、路径与策略。',
          bullets: [
            {
              en: 'What is a network interface on a Windows PC?',
              zh: 'Windows 电脑上的网络接口是什么？',
            },
            {
              en: 'Why can a website work when ping fails?',
              zh: '为什么 ping 失败时网站仍可能可用？',
            },
            {
              en: 'What should you ping first on a home LAN?',
              zh: '在家庭局域网上你应先 ping 什么？',
            },
          ],
          noteEn:
            'Answers: attachment point/adapter; ICMP may be blocked while TCP 443 works; default gateway.',
          noteZh:
            '参考：接入点/适配器；ICMP 可能被拦但 TCP 443 仍通；默认网关。',
        },
      ],
    },
  ],
}
