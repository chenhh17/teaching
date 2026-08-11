import type { Chapter } from '../../types/course'

export const chHChecks: Chapter = {
  id: 'network-checks-windows',
  titleEn: 'Network Checks on Windows',
  titleZh: 'Windows 上的网络检查',
  summaryEn:
    'Run a calm Windows troubleshooting order with ipconfig, ping, nslookup, tracert, and Test-NetConnection.',
  summaryZh:
    '用 ipconfig、ping、nslookup、tracert 与 Test-NetConnection 执行冷静的 Windows 排障顺序。',
  sections: [
    {
      id: 'toolbox',
      titleEn: 'The Toolbox',
      titleZh: '工具箱',
      slides: [
        {
          id: 'ch-h-checks-title',
          layout: 'title',

          titleEn: 'Part H · Network Checks on Windows',
          titleZh: '篇章 H · Windows 上的网络检查',
          subtitleEn: 'A checklist beats random tool spam',
          subtitleZh: '清单胜过随机刷命令',
          bodyEn:
            'When the network fails, random tool spam wastes time. This chapter gives a calm Windows order: learn local facts with ipconfig, test reachability with ping and Test-NetConnection, then check names with nslookup before chasing distant routes.',
          bodyZh:
            '网络出问题时，随机刷命令只会浪费时间。本章给出冷静的 Windows 顺序：先用 ipconfig 弄清本机事实，再用 ping 与 Test-NetConnection 测可达性，然后用 nslookup 查名字，最后才去追更远的路由。',
          illustration: 'title',
          keywords: [
            { en: 'ipconfig', zh: '查看 IP 配置' },
            { en: 'nslookup', zh: '域名查询' },
            { en: 'Test-NetConnection', zh: '测试网络连接' },
          ],
        },
        {
          id: 'ch-h-checks-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will run core Windows network checks in a sensible order, record evidence, and know which tool answers which question. Prefer writing down what each command proved before trying the next one.',
          bodyZh:
            '你将按合理顺序运行核心 Windows 网络检查，记录证据，并知道哪个工具回答哪个问题。在尝试下一条命令前，先写下上一条证明了什么。',          bullets: [
            {
              en: 'Use `ipconfig` for local address and gateway facts.',
              zh: '用 `ipconfig` 获取本地地址与网关事实。',
            },
            {
              en: 'Use `nslookup` when names fail.',
              zh: '名字失败时使用 `nslookup`。',
            },
            {
              en: 'Use `tracert` to see path hops at a beginner level.',
              zh: '在入门层面用 `tracert` 查看路径跳点。',
            },
            {
              en: 'Use `Test-NetConnection` to test a TCP port.',
              zh: '用 `Test-NetConnection` 测试 TCP 端口。',
            },
          ],
        },
        {
          id: 'ch-h-checks-order',
          layout: 'text',

          titleEn: 'A Calm Order of Operations',
          titleZh: '冷静的操作顺序',
          bodyEn:
            'Start local, then name service, then path, then application port. Jumping straight to advanced tools creates noise. Write each result before changing settings.',
          bodyZh:
            '先本地，再名字服务，再路径，再应用端口。直接跳到高级工具只会制造噪音。改设置前先写下每条结果。',
          bullets: [
            {
              en: '1) Am I on the expected interface with an address?',
              zh: '1）我是否在预期接口上并拥有地址？',
            },
            {
              en: '2) Can I reach the gateway?',
              zh: '2）我能否到达网关？',
            },
            {
              en: '3) Do names resolve?',
              zh: '3）名字能否解析？',
            },
            {
              en: '4) Does the needed TCP port answer?',
              zh: '4）所需 TCP 端口是否应答？',
            },
          ],
          keywords: [{ en: 'Troubleshooting Order', zh: '排障顺序' }],
        },
        {
          id: 'ch-h-checks-ipconfig',
          layout: 'text',

          titleEn: 'ipconfig: Local Facts First',
          titleZh: 'ipconfig：先看本地事实',
          bodyEn:
            '`ipconfig` answers whether Windows believes it has an IPv4 address, mask, and gateway on the active adapter. `/all` adds DNS servers and more detail when the basic view is not enough.',
          bodyZh:
            '`ipconfig` 回答 Windows 是否认为活动适配器上有 IPv4 地址、掩码与网关。基本视图不够时，`/all` 会加上 DNS 服务器与更多细节。',
          bullets: [
            {
              en: 'No address or `169.254...` → fix local join/DHCP first.',
              zh: '没有地址或出现 `169.254...` → 先修本地接入/DHCP。',
            },
            {
              en: 'Gateway missing → routing outward will fail.',
              zh: '缺少网关 → 向外路由会失败。',
            },
            {
              en: 'Wrong adapter → wrong conclusions.',
              zh: '读错适配器 → 得出错误结论。',
            },
          ],
        },
      ],
    },
    {
      id: 'path-and-port',
      titleEn: 'Path and Port',
      titleZh: '路径与端口',
      slides: [
        {
          id: 'ch-h-checks-nslookup',
          layout: 'text',

          titleEn: 'nslookup: When Names Are the Bottleneck',
          titleZh: 'nslookup：当名字成为瓶颈',
          bodyEn:
            'If IP literals work but names fail, suspect DNS. `nslookup` shows which server answered and what address it returned. That separates “network dead” from “name service confused.”',
          bodyZh:
            '若直接用 IP 可用但名字失败，应怀疑 DNS。`nslookup` 显示哪台服务器应答以及返回什么地址。这能把“网络死了”与“名字服务乱了”分开。',
          bullets: [
            {
              en: '`nslookup example.com` is enough for class checks.',
              zh: '课堂检查用 `nslookup example.com` 即可。',
              keywords: [{ en: 'nslookup', zh: '域名查询' }],
            },
            {
              en: 'Compare results after switching networks.',
              zh: '切换网络后对比结果。',
            },
            {
              en: 'DNS can fail while gateway ping still succeeds.',
              zh: '网关 ping 仍成功时，DNS 也可能失败。',
            },
          ],
        },
        {
          id: 'ch-h-checks-tracert',
          layout: 'text',

          titleEn: 'tracert: A Rough Path Sketch',
          titleZh: 'tracert：粗略路径草图',
          bodyEn:
            '`tracert` lists hops toward a destination. Beginners should treat it as a sketch: some hops hide names, and stars do not always mean total failure. Still, it helps ask whether the problem is near or far.',
          bodyZh:
            '`tracert` 列出通向目标的跳点。初学者应把它当草图：有的跳点隐藏名字，星号也不总表示完全失败。但它有助于判断问题靠近还是遥远。',
          bullets: [
            {
              en: 'Command: `tracert example.com`.',
              zh: '命令：`tracert example.com`。',
              keywords: [{ en: 'tracert', zh: '路由跟踪' }],
            },
            {
              en: 'Early hop failure suggests local/ISP-side issues.',
              zh: '早期跳点失败暗示本地/ISP 侧问题。',
            },
            {
              en: 'Do not over-interpret every timeout star.',
              zh: '不要过度解读每一个超时星号。',
            },
          ],
        },
        {
          id: 'ch-h-checks-tnc',
          layout: 'text',

          titleEn: 'Test-NetConnection: Port Reality',
          titleZh: 'Test-NetConnection：端口现实',
          bodyEn:
            'Applications care about ports. PowerShell `Test-NetConnection` can check whether a TCP port appears reachable from your PC. This is closer to “can my app connect?” than ping alone.',
          bodyZh:
            '应用关心端口。PowerShell 的 `Test-NetConnection` 可检查从你的电脑看某个 TCP 端口是否可达。这比单独 ping 更接近“我的应用连得上吗？”。',
          bullets: [
            {
              en: '`Test-NetConnection example.com -Port 443`',
              zh: '`Test-NetConnection example.com -Port 443`',
              keywords: [{ en: 'TcpTestSucceeded', zh: 'TCP 测试成功' }],
            },
            {
              en: 'False can mean filter, down service, or wrong host.',
              zh: 'False 可能表示过滤、服务宕机或主机错误。',
            },
            {
              en: 'Use instructor-approved targets in shared labs.',
              zh: '在共享实验室使用教师批准的目标。',
            },
          ],
        },
        {
          id: 'ch-h-checks-try',
          layout: 'steps',
          titleEn: 'Try It: Full Beginner Checklist',
          titleZh: '动手：完整入门检查清单',
          bodyEn:
            'Run the sequence once and keep a written log.',
          bodyZh: '完整跑一遍顺序，并保留书面记录。',
          bullets: [
            {
              en: '`ipconfig` → note IPv4, gateway, and adapter name.',
              zh: '`ipconfig` → 记下 IPv4、网关与适配器名。',
            },
            {
              en: '`ping <gateway>` → local first hop check.',
              zh: '`ping <gateway>` → 本地第一跳检查。',
            },
            {
              en: '`nslookup example.com` → DNS answer check.',
              zh: '`nslookup example.com` → DNS 应答检查。',
            },
            {
              en: '`ping example.com` → optional ICMP to resolved name.',
              zh: '`ping example.com` → 可选，对已解析名字做 ICMP。',
            },
            {
              en: '`Test-NetConnection example.com -Port 443` → app-level TCP check.',
              zh: '`Test-NetConnection example.com -Port 443` → 应用级 TCP 检查。',
            },
            {
              en: 'Optional: `tracert example.com` if path location matters.',
              zh: '可选：若需要定位路径，再运行 `tracert example.com`。',
            },
          ],
        },
        {
          id: 'ch-h-checks-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Tool spam without notes wastes the class period.',
          bodyZh: '没有笔记的刷命令会浪费课时。',
          bullets: [
            {
              en: 'Changing DNS, proxy, and firewall all at once.',
              zh: '同时改 DNS、代理与防火墙。',
            },
            {
              en: 'Stopping at the first green reply without testing the needed port.',
              zh: '看到第一个绿色答复就停止，未测所需端口。',
            },
            {
              en: 'Copying commands for Linux into PowerShell without adaptation.',
              zh: '把 Linux 命令不加改造地复制进 PowerShell。',
            },
            {
              en: 'Sharing lab results that include personal tokens or full internal maps.',
              zh: '分享包含个人令牌或完整内部拓扑的实验结果。',
            },
          ],
        },
        {
          id: 'ch-h-checks-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Match each question to a tool.',
          bodyZh: '把每个问题匹配到一个工具。',
          bullets: [
            {
              en: 'Which tool shows your default gateway on Windows?',
              zh: '哪个工具显示 Windows 上的默认网关？',
            },
            {
              en: 'Which tool is best first when names fail?',
              zh: '名字失败时，最好先用哪个工具？',
            },
            {
              en: 'Which command checks TCP port 443 from PowerShell?',
              zh: '哪条命令从 PowerShell 检查 TCP 端口 443？',
            },
          ],
          noteEn:
            'Answers: `ipconfig`; `nslookup`; `Test-NetConnection ... -Port 443`.',
          noteZh:
            '参考：`ipconfig`；`nslookup`；`Test-NetConnection ... -Port 443`。',
        },
      ],
    },
  ],
}
