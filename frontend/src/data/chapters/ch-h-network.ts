import type { Chapter } from '../../types/course'

export const chHNetwork: Chapter = {
  id: 'what-is-network',
  titleEn: 'What Is a Network',
  titleZh: '什么是网络',
  summaryEn:
    'See how devices, links, and packets form a network, and why the Internet is a network of networks.',
  summaryZh:
    '理解设备、链路与数据包如何组成网络，以及为什么互联网是“网络的网络”。',
  sections: [
    {
      id: 'network-basics',
      titleEn: 'Network Basics',
      titleZh: '网络基础',
      slides: [
        {
          id: 'ch-h-network-title',
          layout: 'title',

          titleEn: 'Part H · What Is a Network',
          titleZh: '篇章 H · 什么是网络',
          subtitleEn: 'Connections that move information on purpose',
          subtitleZh: '有目的地传递信息的连接',
          illustration: 'title',
          keywords: [
            { en: 'Network', zh: '网络' },
            { en: 'Packet', zh: '数据包' },
            { en: 'Host', zh: '主机' },
          ],
        },
        {
          id: 'ch-h-network-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'You will define a network in plain language, name everyday devices and roles, and explain packets as the units that carry data between Windows PCs and other hosts.',
          bodyZh:
            '你将用通俗语言定义网络，说出日常设备与角色，并把数据包解释为在 Windows 电脑与其他主机之间搬运数据的单位。',
          bullets: [
            {
              en: 'List devices that commonly join a network.',
              zh: '列出常接入网络的设备。',
              keywords: [{ en: 'Device', zh: '设备' }],
            },
            {
              en: 'Explain why packets make sharing efficient.',
              zh: '说明数据包为何让共享更高效。',
            },
            {
              en: 'Distinguish a home network from the Internet.',
              zh: '区分家庭网络与互联网。',
              keywords: [{ en: 'Internet', zh: '互联网' }],
            },
            {
              en: 'Relate network ideas to apps you use on Windows.',
              zh: '把网络概念联系到你在 Windows 上用的应用。',
            },
          ],
        },
        {
          id: 'ch-h-network-why',
          layout: 'text',

          titleEn: 'Why Network Literacy Matters',
          titleZh: '为什么需要网络素养',
          bodyEn:
            'When a page fails to load, beginners often blame the browser only. Network literacy helps you ask better questions: Is the PC online? Is the name resolving? Is the path blocked? Those questions save hours.',
          bodyZh:
            '页面加载失败时，初学者常只怪浏览器。网络素养帮你问更好的问题：电脑在线吗？名字能解析吗？路径被挡住了吗？这些问题能节省数小时。',
          bullets: [
            {
              en: 'Supports debugging of installs, updates, and cloud tools.',
              zh: '支持安装、更新与云工具的排障。',
            },
            {
              en: 'Makes later IP, DNS, and firewall topics easier.',
              zh: '让后续 IP、DNS 与防火墙主题更容易。',
            },
            {
              en: 'Helps you describe problems to campus IT clearly.',
              zh: '帮你向校园 IT 清楚描述问题。',
            },
          ],
        },
        {
          id: 'ch-h-network-devices',
          layout: 'text',

          titleEn: 'Devices and Roles',
          titleZh: '设备与角色',
          bodyEn:
            'A network is not only “the Wi-Fi password.” It is hosts that send and receive, plus equipment that forwards traffic. Your Windows laptop is a host; a home router is a forwarder and often a local manager.',
          bodyZh:
            '网络不只是“Wi-Fi 密码”。它是收发数据的主机，加上转发流量的设备。你的 Windows 笔记本是主机；家庭路由器是转发者，也常是本地管理者。',
          bullets: [
            {
              en: 'Hosts: PCs, phones, printers, servers.',
              zh: '主机：电脑、手机、打印机、服务器。',
              keywords: [{ en: 'Host', zh: '主机' }],
            },
            {
              en: 'Routers: choose paths between networks.',
              zh: '路由器：在网络之间选择路径。',
              keywords: [{ en: 'Router', zh: '路由器' }],
            },
            {
              en: 'Switches/APs: connect devices inside a local area.',
              zh: '交换机/AP：在本地区域内连接设备。',
              keywords: [
                { en: 'Switch', zh: '交换机' },
                { en: 'Access Point', zh: '接入点' },
              ],
            },
          ],
          illustration: 'network',
        },
        {
          id: 'ch-h-network-packets',
          layout: 'text',

          titleEn: 'Packets: Data in Manageable Pieces',
          titleZh: '数据包：可管理的数据片',
          bodyEn:
            'Networks rarely send a whole file as one unbreakable block. They split information into packets so many conversations can share the same link. Each packet carries addressing data so receivers can reassemble meaning.',
          bodyZh:
            '网络很少把整个文件当作不可分割的一块发送。它们把信息拆成数据包，好让许多会话共享同一链路。每个数据包带有寻址信息，接收方才能重组含义。',
          bullets: [
            {
              en: 'Small pieces reduce waiting and improve sharing.',
              zh: '小片减少等待，提高共享效率。',
              keywords: [{ en: 'Packet', zh: '数据包' }],
            },
            {
              en: 'Addressing answers “where is this going?”',
              zh: '寻址回答“这要去哪里？”。',
              keywords: [{ en: 'Address', zh: '地址' }],
            },
            {
              en: 'Loss of one packet is often recoverable.',
              zh: '丢失一个数据包常常可以恢复。',
            },
          ],
        },
      ],
    },
    {
      id: 'lan-and-internet',
      titleEn: 'LAN and the Internet',
      titleZh: '局域网与互联网',
      slides: [
        {
          id: 'ch-h-network-lan',
          layout: 'text',

          titleEn: 'A Home or Lab LAN',
          titleZh: '家庭或实验室局域网',
          bodyEn:
            'A LAN is a network in a limited area: home, classroom, or office floor. Devices share a local router and can often reach each other without traveling across the public Internet.',
          bodyZh:
            '局域网是有限区域内的网络：家庭、教室或办公楼层。设备共享本地路由器，常常不必穿越公共互联网就能互相访问。',
          bullets: [
            {
              en: 'Typical home LAN: phones, PCs, TV, printer, router.',
              zh: '典型家庭局域网：手机、电脑、电视、打印机、路由器。',
              keywords: [{ en: 'LAN', zh: '局域网' }],
            },
            {
              en: 'Local file sharing and printers often stay inside the LAN.',
              zh: '本地文件共享与打印机流量常留在局域网内。',
            },
            {
              en: 'Your Windows PC gets a local address on that LAN.',
              zh: '你的 Windows 电脑在该局域网上获得本地地址。',
            },
          ],
        },
        {
          id: 'ch-h-network-internet',
          layout: 'text',

          titleEn: 'The Internet Is Many Networks',
          titleZh: '互联网是许多网络',
          bodyEn:
            'The Internet is not one company’s cable. It is a global system of cooperating networks that agree on addressing and routing so your campus PC can reach a distant server.',
          bodyZh:
            '互联网不是某一家公司的一根线。它是全球协作的网络系统，在寻址与路由上达成一致，好让你的校园电脑到达远方服务器。',
          bullets: [
            {
              en: 'Your LAN usually connects upward through an ISP.',
              zh: '你的局域网通常经 ISP 向上连接。',
              keywords: [{ en: 'ISP', zh: '互联网服务提供商' }],
            },
            {
              en: 'Public services live on networks you do not control.',
              zh: '公共服务位于你无法控制的网络上。',
            },
            {
              en: 'Protocols make different vendors interoperable.',
              zh: '协议让不同厂商能够互通。',
              keywords: [{ en: 'Protocol', zh: '协议' }],
            },
          ],
          illustration: 'network',
        },
        {
          id: 'ch-h-network-try',
          layout: 'steps',
          titleEn: 'Try It: See That Windows Is on a Network',
          titleZh: '动手：确认 Windows 在网络上',
          bodyEn:
            'Use built-in Windows views before deeper command-line tools.',
          bodyZh: '在深入命令行工具前，先用 Windows 内置视图。',
          bullets: [
            {
              en: 'Open Settings → Network & internet.',
              zh: '打开设置 → 网络和 Internet。',
            },
            {
              en: 'Note whether you are on Wi-Fi or Ethernet.',
              zh: '记下你在使用 Wi-Fi 还是以太网。',
              keywords: [
                { en: 'Wi-Fi', zh: '无线网络' },
                { en: 'Ethernet', zh: '以太网' },
              ],
            },
            {
              en: 'Open the active connection properties and find the IPv4 address if shown.',
              zh: '打开活动连接属性，若显示则找到 IPv4 地址。',
            },
            {
              en: 'Write one sentence: which network am I on right now?',
              zh: '写一句话：我现在在哪个网络上？',
            },
          ],
        },
        {
          id: 'ch-h-network-mistakes',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          bodyEn: 'Clear these misconceptions early.',
          bodyZh: '尽早澄清这些误解。',
          bullets: [
            {
              en: 'Thinking “Internet” and “Wi-Fi” are the same word.',
              zh: '以为“互联网”和“Wi-Fi”是同一个词。',
            },
            {
              en: 'Believing only servers are on networks; your PC is also a host.',
              zh: '以为只有服务器在网络上；你的电脑也是主机。',
            },
            {
              en: 'Assuming a connected icon means every website must work.',
              zh: '以为有连接图标就表示每个网站都一定能打开。',
            },
          ],
        },
        {
          id: 'ch-h-network-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自我检测',
          bodyEn: 'Answer in your own words before LAN/WAN details.',
          bodyZh: '在进入 LAN/WAN 细节前用自己的话回答。',
          bullets: [
            {
              en: 'What is a packet in one sentence?',
              zh: '用一句话解释什么是数据包？',
            },
            {
              en: 'Name two host devices and one forwarding device.',
              zh: '说出两台主机设备与一台转发设备。',
            },
            {
              en: 'How is the Internet different from a home LAN?',
              zh: '互联网与家庭局域网有何不同？',
            },
          ],
          noteEn:
            'Answers: addressed data piece; e.g. PC/phone vs router; Internet is many linked networks, LAN is local.',
          noteZh:
            '参考：带寻址的数据片；如电脑/手机 vs 路由器；互联网是互联的许多网络，局域网是本地范围。',
        },
      ],
    },
  ],
}
