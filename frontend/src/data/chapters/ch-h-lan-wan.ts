import type { Chapter } from '../../types/course'

export const chHLanWan: Chapter = {
  id: 'lan-wan-internet',
  titleEn: 'LAN, WAN, and Internet',
  titleZh: '局域网、广域网与互联网',
  summaryEn:
    'Map network scope from room-scale LANs to WANs and the Internet, including campus and home path mental models.',
  summaryZh:
    '从房间级局域网映射到广域网与互联网，建立校园与家庭路径的心智模型。',
  sections: [
    {
      id: 'scope-map',
      titleEn: 'Scope Map',
      titleZh: '范围地图',
      slides: [
        {
          id: 'ch-h-lan-wan-title',
          layout: 'title',

          titleEn: 'Part H · LAN, WAN, and Internet',
          titleZh: '篇章 H · 局域网、广域网与互联网',
          subtitleEn: 'Scope changes the problems you meet',
          subtitleZh: '范围一变，你会遇到的问题也变',
          illustration: 'title',
          keywords: [
            { en: 'LAN', zh: '局域网' },
            { en: 'WAN', zh: '广域网' },
            { en: 'Internet', zh: '互联网' },
          ],
        },
        {
          id: 'ch-h-lan-wan-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will classify networks by geographic and administrative scope, and describe a plausible path from a Windows PC to a public website.',
          bodyZh:
            '你将按地理与管理范围给网络分类，并描述从 Windows 电脑到公共网站的一条合理路径。',
          bullets: [
            {
              en: 'Define LAN and WAN with everyday examples.',
              zh: '用日常例子定义局域网与广域网。',
            },
            {
              en: 'Place the Internet above any single organization network.',
              zh: '把互联网放在任何单一组织网络之上。',
            },
            {
              en: 'Sketch home and campus paths in plain language.',
              zh: '用通俗语言勾画家庭与校园路径。',
            },
            {
              en: 'Avoid mixing “Wi-Fi” with “Internet access.”',
              zh: '避免把“Wi-Fi”与“能上互联网”混为一谈。',
            },
          ],
        },
        {
          id: 'ch-h-lan-wan-lan',
          layout: 'text',

          titleEn: 'LAN: Local Area Network',
          titleZh: 'LAN：局域网',
          bodyEn:
            'A LAN covers a limited area under one local administration: a home, a lab, or a floor. Latency is usually low, and many services stay internal, such as shared printers.',
          bodyZh:
            '局域网覆盖有限区域，并由本地管理：家庭、实验室或一层楼。延迟通常较低，许多服务留在内部，例如共享打印机。',
          bullets: [
            {
              en: 'Ownership feels local: your router, your classroom switch.',
              zh: '所有权感是本地的：你家路由器、教室交换机。',
              keywords: [{ en: 'LAN', zh: '局域网' }],
            },
            {
              en: 'Addresses are often private inside the LAN.',
              zh: '局域网内地址常常是私有地址。',
              keywords: [{ en: 'Private IP', zh: '私有 IP' }],
            },
            {
              en: 'Wi-Fi is a common LAN access method, not the whole Internet.',
              zh: 'Wi-Fi 是常见局域网接入方式，不是整个互联网。',
            },
          ],
          illustration: 'network',
        },
        {
          id: 'ch-h-lan-wan-wan',
          layout: 'text',

          titleEn: 'WAN: Wide Area Network',
          titleZh: 'WAN：广域网',
          bodyEn:
            'A WAN spans larger distances and often crosses organizational or city boundaries. Companies link branch offices with WANs. ISPs operate wide networks that carry many customers.',
          bodyZh:
            '广域网跨越更大距离，常穿过组织或城市边界。公司用 WAN 连接分支机构。ISP 运营承载众多客户的广域网络。',
          bullets: [
            {
              en: 'Distance and multiple providers add complexity.',
              zh: '距离与多服务商增加复杂性。',
              keywords: [{ en: 'WAN', zh: '广域网' }],
            },
            {
              en: 'Failures may be outside your building.',
              zh: '故障可能在你的大楼之外。',
            },
            {
              en: 'A home link to an ISP is your path into wider networks.',
              zh: '家庭到 ISP 的链路是你进入更广网络的路径。',
            },
          ],
        },
      ],
    },
    {
      id: 'internet-picture',
      titleEn: 'Internet Picture',
      titleZh: '互联网图景',
      slides: [
        {
          id: 'ch-h-lan-wan-internet',
          layout: 'text',

          titleEn: 'Internet as a Network of Networks',
          titleZh: '互联网：网络的网络',
          bodyEn:
            'The Internet is the publicly reachable system formed when many networks interconnect with shared protocols. No single LAN is “the Internet,” even if that LAN feels powerful.',
          bodyZh:
            '当许多网络用共享协议互联时，形成可公共到达的系统，就是互联网。没有任何一个局域网等于“互联网”，即使那个局域网很强。',
          bullets: [
            {
              en: 'Interconnection plus common rules enables global reach.',
              zh: '互联加上共同规则才能全球可达。',
              keywords: [{ en: 'Interconnection', zh: '互联' }],
            },
            {
              en: 'Your experience still starts on a local access network.',
              zh: '你的体验仍从本地接入网络开始。',
            },
            {
              en: 'Outages can be local, ISP-level, or remote-site-level.',
              zh: '故障可能在本地、ISP 级或远端站点级。',
            },
          ],
        },
        {
          id: 'ch-h-lan-wan-path',
          layout: 'text',

          titleEn: 'A Simple Path From PC to Website',
          titleZh: '从电脑到网站的简单路径',
          bodyEn:
            'Think in stages, not magic. Your Windows PC reaches a local gateway, traffic is handed to an ISP or campus edge, then moves across interconnected networks to the server that hosts the site.',
          bodyZh:
            '按阶段思考，而不是魔法。你的 Windows 电脑到达本地网关，流量交给 ISP 或校园边缘，再穿越互联网络到达托管网站的服务器。',
          bullets: [
            {
              en: 'Stage 1: PC → home/campus gateway.',
              zh: '阶段 1：电脑 → 家庭/校园网关。',
              keywords: [{ en: 'Gateway', zh: '网关' }],
            },
            {
              en: 'Stage 2: provider networks forward packets.',
              zh: '阶段 2：运营商网络转发数据包。',
            },
            {
              en: 'Stage 3: destination network delivers to the server.',
              zh: '阶段 3：目标网络投递到服务器。',
            },
          ],
          illustration: 'network',
        },
        {
          id: 'ch-h-lan-wan-campus',
          layout: 'text',

          titleEn: 'Campus Networks Feel Special',
          titleZh: '校园网感觉很特别',
          bodyEn:
            'A university network is often a large managed LAN/WAN mix: dorms, labs, offices, and a controlled edge to the Internet. Policies, portals, and firewalls may shape what your Windows PC can reach.',
          bodyZh:
            '大学网络常是大型受管的局域网/广域网混合：宿舍、实验室、办公室，以及受控的互联网出口。策略、门户与防火墙会影响你的 Windows 电脑能到达哪里。',
          bullets: [
            {
              en: 'You may need login portals before full access.',
              zh: '完全访问前可能需要登录门户。',
              keywords: [{ en: 'Captive Portal', zh: '强制门户' }],
            },
            {
              en: 'Some ports or sites may be restricted by policy.',
              zh: '某些端口或站点可能被策略限制。',
            },
            {
              en: 'IT tickets work better with scope language: local vs Internet.',
              zh: '用范围语言（本地 vs 互联网）写 IT 工单更有效。',
            },
          ],
        },
        {
          id: 'ch-h-lan-wan-try',
          layout: 'steps',
          titleEn: 'Try It: Label Your Current Scope',
          titleZh: '动手：标注你当前的范围',
          bodyEn:
            'Practice describing where you are connected right now.',
          bodyZh: '练习描述你此刻连接在哪里。',
          bullets: [
            {
              en: 'Note whether you are on home Wi-Fi, campus Wi-Fi, or Ethernet.',
              zh: '记下你在家庭 Wi-Fi、校园 Wi-Fi 还是以太网。',
            },
            {
              en: 'Open a browser and load a public site and, if available, a local portal.',
              zh: '打开浏览器，访问一个公共站点，若有再访问本地门户。',
            },
            {
              en: 'Write: LAN name/location, then “path to Internet: yes/no/unknown.”',
              zh: '写下：局域网名称/位置，然后“到互联网路径：是/否/未知”。',
            },
            {
              en: 'If Internet fails but LAN works, phrase the problem that way for help.',
              zh: '若互联网失败但局域网正常，就用这种方式描述问题求助。',
            },
          ],
        },
        {
          id: 'ch-h-lan-wan-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Scope confusion leads to wrong fixes.',
          bodyZh: '范围混淆会导致修错地方。',
          bullets: [
            {
              en: 'Calling every failure “the Wi-Fi is broken.”',
              zh: '每次失败都说“Wi-Fi 坏了”。',
            },
            {
              en: 'Rebooting the PC when only the ISP path is down.',
              zh: '只是 ISP 路径断了却重启电脑。',
            },
            {
              en: 'Thinking campus LAN access guarantees every international site.',
              zh: '以为接入校园局域网就保证能开每个国际站点。',
            },
          ],
        },
        {
          id: 'ch-h-lan-wan-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Classify before you troubleshoot.',
          bodyZh: '排障前先分类。',
          bullets: [
            {
              en: 'Give one LAN example and one WAN example.',
              zh: '各举一个局域网与广域网例子。',
            },
            {
              en: 'Why is the Internet not identical to your home Wi-Fi?',
              zh: '为什么互联网不等于你家的 Wi-Fi？',
            },
            {
              en: 'Name the first hop idea from a home PC outward.',
              zh: '说出家庭电脑向外的第一跳概念。',
            },
          ],
          noteEn:
            'Answers: home LAN vs ISP/company WAN; Wi-Fi is local access; gateway/router is first hop.',
          noteZh:
            '参考：家庭局域网 vs ISP/公司广域网；Wi-Fi 是本地接入；网关/路由器是第一跳。',
        },
      ],
    },
  ],
}
