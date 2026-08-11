import type { Chapter } from '../../types/course'

export const chJPasswords: Chapter = {
  id: 'passwords-and-mfa',
  titleEn: 'Passwords and MFA',
  titleZh: '密码与多重验证',
  summaryEn:
    'Strong passphrases, password managers, MFA factor choices, recovery codes, and account recovery planning.',
  summaryZh:
    '强口令短语、密码管理器、多重验证因素选择、恢复码与账户找回规划。',
  sections: [
    {
      id: 'password-habits',
      titleEn: 'Password Habits',
      titleZh: '密码习惯',
      slides: [
        {
          id: 'ch-j-passwords-title',
          layout: 'title',

          titleEn: 'Part J · Passwords and MFA',
          titleZh: '篇章 J · 密码与多重验证',
          subtitleEn: 'Protect accounts before you need the protection',
          subtitleZh: '在用得着防护之前先把账户保护好',
          illustration: 'title',
          keywords: [
            { en: 'Password', zh: '密码' },
            { en: 'MFA', zh: '多重验证' },
            { en: 'Recovery', zh: '账户找回' },
          ],
        },
        {
          id: 'ch-j-passwords-goals',
          layout: 'callout',
          titleEn: 'Learning Goals',
          titleZh: '学习目标',
          bodyEn:
            'Design an account defense that survives a single leak: unique secrets, a second factor, and a recovery path you control.',
          bodyZh:
            '设计一套能扛住单点泄露的账户防线：独特秘密、第二因素，以及你掌控的找回路径。',
          illustration: 'security',
          bullets: [
            {
              en: 'Build long, unique passwords or passphrases.',
              zh: '建立又长又独特的密码或口令短语。',
              keywords: [{ en: 'Passphrase', zh: '口令短语' }],
            },
            {
              en: 'Turn on MFA and store recovery codes safely.',
              zh: '开启多重验证，并安全保存恢复码。',
              keywords: [{ en: 'MFA', zh: '多重验证' }],
            },
            {
              en: 'Plan account recovery before you lose access.',
              zh: '在失去访问前先规划账户找回。',
            },
          ],
        },
        {
          id: 'ch-j-passwords-strong',
          layout: 'text',

          titleEn: 'Strong Passwords',
          titleZh: '强密码',
          bodyEn:
            'Length usually beats short “complexity theater.” A four-word passphrase with spaces can be both memorable and strong. Reuse is the silent killer: one breached site should not open your email, school portal, and bank together.',
          bodyZh:
            '长度通常胜过短的“复杂度表演”。带空格的四词口令短语可以既好记又强。复用才是隐形杀手：一个被攻破的网站不该同时打开你的邮件、学校门户和银行。',
          illustration: 'security',
          bullets: [
            {
              en: 'Aim for long secrets you will actually type correctly under stress.',
              zh: '追求在压力下仍能正确输入的长秘密。',
              keywords: [{ en: 'Password', zh: '密码' }],
            },
            {
              en: 'Passphrases: unrelated words or a private sentence beat Ab1! patterns.',
              zh: '口令短语：不相干的词或私人句子胜过 Ab1! 模式。',
              keywords: [{ en: 'Passphrase', zh: '口令短语' }],
            },
            {
              en: 'Unique password per important account — especially email.',
              zh: '重要账户各用独特密码——尤其是邮箱。',
            },
          ],
        },
        {
          id: 'ch-j-passwords-manager',
          layout: 'text',

          titleEn: 'Password Managers',
          titleZh: '密码管理器',
          bodyEn:
            'A manager creates random unique passwords and fills them in Edge or Chrome when you unlock it with one strong master password. On your personal Windows PC this is excellent practice. On shared classroom machines, avoid saving personal vaults or browser passwords.',
          bodyZh:
            '管理器用一个强主密码解锁后，可生成随机独特密码，并在 Edge 或 Chrome 中填充。在你自己的 Windows 电脑上，这是优秀习惯。在共用教室机器上，避免保存个人保险库或浏览器密码。',
          illustration: 'files',
          bullets: [
            {
              en: 'One strong master password protects many unique site passwords.',
              zh: '一个强主密码保护许多独特站点密码。',
              keywords: [{ en: 'Password Manager', zh: '密码管理器' }],
            },
            {
              en: 'Prefer a reputable manager over a notes.txt on the Desktop.',
              zh: '宁用可靠管理器，也不要把密码写在桌面 notes.txt。',
            },
            {
              en: 'Never leave a vault unlocked on a lab PC and walk away.',
              zh: '切勿在实验室电脑上解锁保险库后离开。',
            },
          ],
        },
      ],
    },
    {
      id: 'mfa-recovery',
      titleEn: 'MFA and Recovery',
      titleZh: '多重验证与找回',
      slides: [
        {
          id: 'ch-j-passwords-mfa',
          layout: 'text',

          titleEn: 'What MFA Adds',
          titleZh: '多重验证增加什么',
          bodyEn:
            'Multi-factor authentication (MFA), often called 2FA when two factors are used, requires a second proof after the password. Mechanisms differ, but the goal is the same: possession of your password alone should not finish login.',
          bodyZh:
            '多重验证（MFA），在使用两个因素时常称 2FA，要求在密码后再提供第二种证明。机制各异，目标相同：仅掌握密码不应完成登录。',
          illustration: 'security',
          bullets: [
            {
              en: 'Factors: knowledge (password), possession (phone/key), inherence (biometrics).',
              zh: '因素：所知（密码）、所有（手机/密钥）、所是（生物特征）。',
              keywords: [
                { en: 'MFA', zh: '多重验证' },
                { en: '2FA', zh: '双重验证' },
              ],
            },
            {
              en: 'Stolen passwords from phishing are far less useful with MFA on.',
              zh: '开启 MFA 后，钓鱼偷到的密码难有用得多。',
            },
            {
              en: 'Secure email with MFA first; it is the reset key for many other accounts.',
              zh: '先给邮箱开 MFA；它常是其他账户重置的钥匙。',
            },
          ],
        },
        {
          id: 'ch-j-passwords-factors',
          layout: 'text',

          titleEn: 'Common Second Factors',
          titleZh: '常见第二因素',
          bodyEn:
            'Authenticator apps generate time-based codes on your phone. SMS codes are convenient but weaker against SIM-swap style attacks. Hardware security keys are excellent when your school or workplace supports them.',
          bodyZh:
            '验证器应用在手机上生成基于时间的代码。短信验证码方便，但对 SIM 卡互换类攻击更弱。学校或单位支持时，硬件安全密钥非常出色。',
          illustration: 'security',
          bullets: [
            {
              en: 'Prefer authenticator apps over SMS when both are offered.',
              zh: '两者都提供时，优先验证器应用而非短信。',
              keywords: [{ en: 'Authenticator', zh: '验证器应用' }],
            },
            {
              en: 'SMS is better than nothing; still pair it with unique passwords.',
              zh: '短信总比没有好；仍需搭配独特密码。',
            },
            {
              en: 'Hardware keys resist many remote phishing flows when used correctly.',
              zh: '正确使用时，硬件密钥能抵御许多远程钓鱼流程。',
              keywords: [{ en: 'Hardware Key', zh: '硬件密钥' }],
            },
          ],
        },
        {
          id: 'ch-j-passwords-recovery',
          layout: 'text',

          titleEn: 'Recovery Codes and Paths',
          titleZh: '恢复码与找回路径',
          bodyEn:
            'When you enable MFA, services often give one-time recovery codes. Store them offline where classmates cannot see them. Keep backup email and phone numbers current. Anyone who asks you to read a code aloud is attacking you, not helping.',
          bodyZh:
            '开启 MFA 时，服务常给出一次性恢复码。离线保存在同学看不到的地方。保持备用邮箱与手机号为最新。任何让你朗读验证码的人是在攻击你，不是在帮你。',
          illustration: 'files',
          bullets: [
            {
              en: 'Print or write recovery codes; do not leave them in public Downloads.',
              zh: '打印或手写恢复码；不要留在公共“下载”文件夹。',
              keywords: [{ en: 'Recovery Code', zh: '恢复码' }],
            },
            {
              en: 'Update the phone and backup email listed on important accounts.',
              zh: '更新重要账户上登记的手机与备用邮箱。',
            },
            {
              en: 'Practice the recovery path once so panic does not erase access.',
              zh: '演练一次找回路径，避免惊慌中锁死自己。',
            },
          ],
        },
        {
          id: 'ch-j-passwords-try',
          layout: 'steps',
          titleEn: 'Try It on Windows',
          titleZh: '在 Windows 上试一试',
          bodyEn:
            'Use Edge or Chrome on your own account. Do not enable personal MFA vaults on shared lab profiles unless your instructor says so.',
          bodyZh:
            '在你自己的账户上用 Edge 或 Chrome 操作。除非老师允许，否则不要在共用实验配置里启用个人 MFA 保险库。',
          illustration: 'security',
          bullets: [
            {
              en: 'Open one important account (email or school) in Edge or Chrome',
              zh: '在 Edge 或 Chrome 中打开一个重要账户（邮件或学校）',
            },
            {
              en: 'Find Security / Sign-in settings and check whether MFA or 2FA is available',
              zh: '找到安全 / 登录设置，检查是否提供 MFA 或 2FA',
            },
            {
              en: 'If you enable it, download or write recovery codes immediately',
              zh: '若开启，立即下载或抄写恢复码',
            },
            {
              en: 'Store codes offline; confirm your backup email or phone is current',
              zh: '离线保存恢复码；确认备用邮箱或手机为最新',
            },
          ],
        },
        {
          id: 'ch-j-passwords-errors',
          layout: 'callout',
          titleEn: 'Common Mistakes',
          titleZh: '常见错误',
          illustration: 'security',
          bullets: [
            {
              en: 'Reusing one favorite password everywhere.',
              zh: '到处复用同一个喜欢的密码。',
            },
            {
              en: 'Saving MFA backup codes in a shared Downloads folder.',
              zh: '把 MFA 备份码放在共用的“下载”文件夹。',
            },
            {
              en: 'Turning off MFA because it felt slow once.',
              zh: '因为偶尔觉得慢就关掉多重验证。',
            },
          ],
        },
        {
          id: 'ch-j-passwords-check',
          layout: 'callout',
          titleEn: 'Check Yourself',
          titleZh: '自测',
          illustration: 'security',
          bullets: [
            {
              en: 'Why use unique passwords for important accounts?',
              zh: '重要账户为什么要用不同密码？',
            },
            {
              en: 'What does MFA require after the password?',
              zh: '密码之后，MFA 还要求什么？',
            },
            {
              en: 'Where should recovery codes live?',
              zh: '恢复码应该放在哪里？',
            },
          ],
          noteEn:
            'Answers: one leak should not open all accounts; a second factor; a private offline place.',
          noteZh: '参考答案：一处泄露不牵连全部；第二因素；私密离线处。',
        },
      ],
    },
  ],
}
