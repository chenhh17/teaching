import type { Chapter } from '../../types/course'

export const chHTcpUdp: Chapter = {
  id: 'tcp-udp-basics',
  titleEn: 'TCP and UDP Basics',
  titleZh: 'TCP 与 UDP 基础',
  summaryEn:
    'Compare reliable TCP streams with lightweight UDP messages, and connect each style to everyday Windows applications.',
  summaryZh:
    '比较可靠的 TCP 流与轻量的 UDP 消息，并把每种风格联系到日常 Windows 应用。',
  sections: [
    {
      id: 'two-styles',
      titleEn: 'Two Transport Styles',
      titleZh: '两种传输风格',
      slides: [
        {
          id: 'ch-h-tcp-udp-title',
          layout: 'title',

          titleEn: 'Part H · TCP and UDP Basics',
          titleZh: '篇章 H · TCP 与 UDP 基础',
          subtitleEn: 'Reliability versus simplicity trade-offs',
          subtitleZh: '可靠性与简洁性的权衡',
          illustration: 'title',
          keywords: [
            { en: 'TCP', zh: '传输控制协议' },
            { en: 'UDP', zh: '用户数据报协议' },
            { en: 'Transport', zh: '传输层' },
          ],
        },
        {
          id: 'ch-h-tcp-udp-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will describe TCP and UDP behaviors in plain language, choose which fits a scenario, and relate ports to transport services during Windows checks.',
          bodyZh:
            '你将用通俗语言描述 TCP 与 UDP 行为，为场景做选择，并在 Windows 检查中把端口与传输服务联系起来。',
          bullets: [
            {
              en: 'Explain TCP as connection-oriented and reliability-focused.',
              zh: '把 TCP 解释为面向连接且注重可靠。',
            },
            {
              en: 'Explain UDP as message-oriented and lightweight.',
              zh: '把 UDP 解释为面向消息且轻量。',
            },
            {
              en: 'Give one app example for each style.',
              zh: '为每种风格各举一个应用例子。',
            },
            {
              en: 'Test a TCP port with `Test-NetConnection`.',
              zh: '用 `Test-NetConnection` 测试一个 TCP 端口。',
            },
          ],
        },
        {
          id: 'ch-h-tcp-udp-tcp',
          layout: 'text',

          titleEn: 'TCP: A Careful Conversation',
          titleZh: 'TCP：谨慎的对话',
          bodyEn:
            'TCP sets up a connection, tracks bytes, and retransmits lost data when needed. That bookkeeping costs some overhead, but it fits file downloads, web pages, and remote shells where correctness matters.',
          bodyZh:
            'TCP 建立连接、跟踪字节，并在需要时重传丢失数据。这些记账有开销，但适合下载、网页与远程终端等正确性重要的场景。',
          bullets: [
            {
              en: 'Connection setup before useful data exchange.',
              zh: '在有效数据交换前先建立连接。',
              keywords: [{ en: 'Connection', zh: '连接' }],
            },
            {
              en: 'Ordered delivery is a design goal.',
              zh: '有序交付是设计目标。',
              keywords: [{ en: 'Ordered Delivery', zh: '有序交付' }],
            },
            {
              en: 'Lost segments can be resent.',
              zh: '丢失的段可以重发。',
              keywords: [{ en: 'Retransmit', zh: '重传' }],
            },
          ],
        },
        {
          id: 'ch-h-tcp-udp-udp',
          layout: 'text',

          titleEn: 'UDP: Send the Message and Move On',
          titleZh: 'UDP：发出消息然后继续',
          bodyEn:
            'UDP sends datagrams without building a heavy reliable stream. Apps that prefer low delay, or that implement their own recovery, often choose UDP. DNS queries are a classic classroom example.',
          bodyZh:
            'UDP 发送数据报，而不建立沉重的可靠流。偏好低延迟，或自己实现恢复的应用常选 UDP。DNS 查询是经典课堂例子。',
          bullets: [
            {
              en: 'No TCP-style connection handshake.',
              zh: '没有 TCP 式的连接握手。',
              keywords: [{ en: 'Datagram', zh: '数据报' }],
            },
            {
              en: 'Lower overhead; less built-in reliability.',
              zh: '开销更低；内建可靠性更少。',
            },
            {
              en: 'Good when a late packet is less useful than a fresh one.',
              zh: '当过时数据包不如新数据包有用时更合适。',
            },
          ],
        },
      ],
    },
    {
      id: 'choose-and-practice',
      titleEn: 'Choose and Practice',
      titleZh: '选择与练习',
      slides: [
        {
          id: 'ch-h-tcp-udp-compare',
          layout: 'text',

          titleEn: 'A Practical Comparison',
          titleZh: '实用对比',
          bodyEn:
            'Do not memorize slogans only. Ask whether the application needs a reliable byte stream or can tolerate occasional loss for speed. Many real systems mix both styles for different jobs.',
          bodyZh:
            '不要只背口号。要问应用是否需要可靠字节流，或能否为速度容忍偶尔丢失。真实系统常为不同任务混用两种风格。',
          bullets: [
            {
              en: 'TCP: web browsing, file transfer, SSH-like remotes.',
              zh: 'TCP：网页浏览、文件传输、类 SSH 远程。',
            },
            {
              en: 'UDP: DNS lookups, some real-time media, some games.',
              zh: 'UDP：DNS 查询、部分实时媒体、部分游戏。',
            },
            {
              en: '“UDP is useless” is false; “UDP never loses” is also false.',
              zh: '“UDP 没用”是错的；“UDP 从不丢”也是错的。',
            },
          ],
        },
        {
          id: 'ch-h-tcp-udp-ports',
          layout: 'text',

          titleEn: 'Ports Still Matter for Both',
          titleZh: '两者都仍然依赖端口',
          bodyEn:
            'TCP and UDP each have port spaces. Saying “port 53” is incomplete until you know whether a tool is testing TCP or UDP. Windows classroom checks often start with TCP HTTPS on 443.',
          bodyZh:
            'TCP 与 UDP 各有端口空间。只说“端口 53”并不完整，除非你知道工具在测 TCP 还是 UDP。Windows 课堂检查常从 TCP 的 443 HTTPS 开始。',
          bullets: [
            {
              en: 'Service identity is often IP + transport + port.',
              zh: '服务身份常是 IP + 传输协议 + 端口。',
            },
            {
              en: 'Firewall rules may allow TCP 443 but block other ports.',
              zh: '防火墙规则可能允许 TCP 443 却阻止其他端口。',
            },
            {
              en: 'Beginner labs should state the transport explicitly.',
              zh: '入门实验应明确写出传输协议。',
            },
          ],
          keywords: [{ en: 'Port', zh: '端口' }],
        },
        {
          id: 'ch-h-tcp-udp-examples',
          layout: 'text',

          titleEn: 'Windows-Visible Examples',
          titleZh: '在 Windows 上能感知的例子',
          bodyEn:
            'You rarely choose TCP or UDP in a browser click, but the choice still shapes failures. A stalled download suggests stream problems; a name lookup timeout may implicate DNS over UDP before anything else.',
          bodyZh:
            '你很少在浏览器点击时选择 TCP 或 UDP，但选择仍塑造故障形态。卡住的下载暗示流问题；名字查询超时可能首先牵涉基于 UDP 的 DNS。',
          bullets: [
            {
              en: 'Browser page load leans on TCP after DNS.',
              zh: '浏览器加载页面在 DNS 之后主要靠 TCP。',
            },
            {
              en: '`nslookup` exercises name resolution, often via UDP DNS.',
              zh: '`nslookup` 练习名字解析，常走 UDP DNS。',
            },
            {
              en: 'Game lag complaints are not always “slow Wi-Fi only.”',
              zh: '游戏卡顿投诉并不总是“只是 Wi-Fi 慢”。',
            },
          ],
        },
        {
          id: 'ch-h-tcp-udp-try',
          layout: 'steps',
          titleEn: 'Try It: Test a TCP Port from PowerShell',
          titleZh: '动手：从 PowerShell 测试 TCP 端口',
          bodyEn:
            'Use a safe public host approved by your instructor if needed.',
          bodyZh: '如有需要，使用教师批准的安全公共主机。',
          bullets: [
            {
              en: 'Open PowerShell.',
              zh: '打开 PowerShell。',
            },
            {
              en: 'Run `Test-NetConnection example.com -Port 443`.',
              zh: '运行 `Test-NetConnection example.com -Port 443`。',
              keywords: [{ en: 'Test-NetConnection', zh: '测试网络连接' }],
            },
            {
              en: 'Read `TcpTestSucceeded` as True or False.',
              zh: '查看 `TcpTestSucceeded` 为 True 还是 False。',
            },
            {
              en: 'Optional: compare with `-Port 80` and note any difference.',
              zh: '可选：与 `-Port 80` 对比并记录差异。',
            },
            {
              en: 'Write one sentence linking port 443 to HTTPS/TCP.',
              zh: '写一句话把端口 443 连到 HTTPS/TCP。',
            },
          ],
        },
        {
          id: 'ch-h-tcp-udp-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Avoid absolute slogans about transport protocols.',
          bodyZh: '避免对传输协议下绝对口号。',
          bullets: [
            {
              en: 'Claiming TCP never fails because it is “reliable.”',
              zh: '因为“可靠”就声称 TCP 永不失败。',
            },
            {
              en: 'Using UDP and TCP port numbers as if they were the same service automatically.',
              zh: '以为相同端口号在 UDP 与 TCP 上自动是同一服务。',
            },
            {
              en: 'Confusing application lag with proof that UDP was chosen wrongly.',
              zh: '把应用卡顿直接当成选错 UDP 的证据。',
            },
          ],
        },
        {
          id: 'ch-h-tcp-udp-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Choose with reasons, not vibes.',
          bodyZh: '用理由选择，而不是凭感觉。',
          bullets: [
            {
              en: 'Which transport emphasizes reliable ordered streams?',
              zh: '哪种传输强调可靠有序流？',
            },
            {
              en: 'Give one reason an app might prefer UDP.',
              zh: '给出应用可能偏好 UDP 的一个理由。',
            },
            {
              en: 'Which PowerShell command can test TCP port 443?',
              zh: '哪条 PowerShell 命令可测试 TCP 端口 443？',
            },
          ],
          noteEn:
            'Answers: TCP; low overhead/low delay or app-level recovery; `Test-NetConnection ... -Port 443`.',
          noteZh:
            '参考：TCP；低开销/低延迟或应用层恢复；`Test-NetConnection ... -Port 443`。',
        },
      ],
    },
  ],
}
