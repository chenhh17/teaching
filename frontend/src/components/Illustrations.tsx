import type { SlideContent } from '../types/course'

type Props = {
  kind?: SlideContent['illustration']
}

export function Illustration({ kind }: Props) {
  if (!kind || kind === 'title') return null

  return (
    <div className="illustration" aria-hidden="true">
      {kind === 'code' && <CodeArt />}
      {kind === 'cursor' && <CursorArt />}
      {kind === 'python' && <PythonArt />}
      {kind === 'environment' && <EnvironmentArt />}
      {kind === 'files' && <FilesArt />}
      {kind === 'terminal' && <TerminalArt />}
      {kind === 'network' && <NetworkArt />}
      {kind === 'protocol' && <ProtocolArt />}
      {kind === 'interface' && <InterfaceArt />}
      {kind === 'hardware' && <HardwareArt />}
      {kind === 'security' && <SecurityArt />}
      {kind === 'git' && <GitArt />}
    </div>
  )
}

function CodeArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <rect x="10" y="10" width="200" height="120" rx="6" fill="#1e3a5f" />
      <rect x="10" y="10" width="200" height="22" rx="6" fill="#2b4f7a" />
      <circle cx="28" cy="21" r="4" fill="#ff5f56" />
      <circle cx="42" cy="21" r="4" fill="#ffbd2e" />
      <circle cx="56" cy="21" r="4" fill="#27c93f" />
      <text x="28" y="55" fill="#7dd3fc" fontSize="12" fontFamily="ui-monospace, monospace">
        print("Hello")
      </text>
      <text x="28" y="78" fill="#86efac" fontSize="12" fontFamily="ui-monospace, monospace">
        # your first program
      </text>
      <text x="28" y="101" fill="#fde68a" fontSize="12" fontFamily="ui-monospace, monospace">
        name = "Student"
      </text>
    </svg>
  )
}

function CursorArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <rect x="16" y="18" width="188" height="104" rx="8" fill="#f8fafc" stroke="#2563eb" strokeWidth="3" />
      <rect x="16" y="18" width="48" height="104" fill="#dbeafe" />
      <rect x="74" y="36" width="110" height="10" rx="2" fill="#93c5fd" />
      <rect x="74" y="56" width="90" height="8" rx="2" fill="#bfdbfe" />
      <rect x="74" y="72" width="100" height="8" rx="2" fill="#bfdbfe" />
      <polygon points="150,95 165,120 155,122 148,110 138,118" fill="#1d4ed8" />
    </svg>
  )
}

function PythonArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <rect x="40" y="28" width="60" height="84" rx="28" fill="#3776ab" />
      <rect x="120" y="28" width="60" height="84" rx="28" fill="#ffd343" />
      <circle cx="70" cy="48" r="6" fill="#fff" />
      <circle cx="150" cy="92" r="6" fill="#1e293b" />
      <text x="55" y="80" fill="#fff" fontSize="14" fontWeight="700" fontFamily="Georgia, serif">
        Py
      </text>
    </svg>
  )
}

function EnvironmentArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <rect x="20" y="30" width="80" height="80" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
      <rect x="120" y="20" width="80" height="100" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="34" y="75" fill="#0369a1" fontSize="12" fontFamily="Georgia, serif">
        System
      </text>
      <text x="132" y="70" fill="#92400e" fontSize="12" fontFamily="Georgia, serif">
        Project
      </text>
      <text x="138" y="88" fill="#92400e" fontSize="11" fontFamily="Georgia, serif">
        venv
      </text>
    </svg>
  )
}

function FilesArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <path d="M30 40h50l12 12h70v70H30z" fill="#fde68a" stroke="#b45309" strokeWidth="2" />
      <rect x="100" y="55" width="70" height="55" rx="4" fill="#fff" stroke="#64748b" strokeWidth="2" />
      <line x1="112" y1="70" x2="158" y2="70" stroke="#94a3b8" strokeWidth="3" />
      <line x1="112" y1="82" x2="150" y2="82" stroke="#cbd5e1" strokeWidth="3" />
      <line x1="112" y1="94" x2="154" y2="94" stroke="#cbd5e1" strokeWidth="3" />
    </svg>
  )
}

function TerminalArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <rect x="15" y="20" width="190" height="100" rx="8" fill="#0f172a" />
      <text x="30" y="55" fill="#4ade80" fontSize="13" fontFamily="ui-monospace, monospace">
        {'PS C:\\Users\\student>'}
      </text>
      <text x="30" y="78" fill="#e2e8f0" fontSize="13" fontFamily="ui-monospace, monospace">
        dir
      </text>
      <text x="30" y="101" fill="#4ade80" fontSize="13" fontFamily="ui-monospace, monospace">
        {'PS C:\\Users\\student> _'}
      </text>
    </svg>
  )
}

function NetworkArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <circle cx="110" cy="70" r="16" fill="#2563eb" />
      <circle cx="40" cy="40" r="12" fill="#38bdf8" />
      <circle cx="180" cy="40" r="12" fill="#38bdf8" />
      <circle cx="45" cy="110" r="12" fill="#38bdf8" />
      <circle cx="175" cy="110" r="12" fill="#38bdf8" />
      <line x1="52" y1="45" x2="96" y2="62" stroke="#93c5fd" strokeWidth="3" />
      <line x1="164" y1="45" x2="124" y2="62" stroke="#93c5fd" strokeWidth="3" />
      <line x1="56" y1="102" x2="98" y2="80" stroke="#93c5fd" strokeWidth="3" />
      <line x1="164" y1="102" x2="122" y2="80" stroke="#93c5fd" strokeWidth="3" />
    </svg>
  )
}

function ProtocolArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <rect x="25" y="35" width="70" height="70" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
      <rect x="125" y="35" width="70" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
      <path d="M100 60h20M100 80h20" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrow)" />
      <text x="40" y="75" fill="#1e40af" fontSize="12" fontFamily="Georgia, serif">
        Client
      </text>
      <text x="138" y="75" fill="#166534" fontSize="12" fontFamily="Georgia, serif">
        Server
      </text>
      <text x="78" y="28" fill="#475569" fontSize="11" fontFamily="Georgia, serif">
        HTTP / TCP
      </text>
    </svg>
  )
}

function InterfaceArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <rect x="30" y="40" width="90" height="60" rx="6" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
      <rect x="40" y="50" width="70" height="40" rx="3" fill="#1e293b" />
      <rect x="140" y="55" width="50" height="30" rx="6" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
      <line x1="120" y1="70" x2="140" y2="70" stroke="#64748b" strokeWidth="3" />
      <text x="148" y="74" fill="#1e3a8a" fontSize="10" fontFamily="Georgia, serif">
        Wi-Fi
      </text>
    </svg>
  )
}

function HardwareArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <rect x="40" y="28" width="140" height="84" rx="6" fill="#334155" />
      <rect x="52" y="40" width="50" height="36" rx="4" fill="#64748b" />
      <rect x="112" y="40" width="56" height="16" rx="3" fill="#94a3b8" />
      <rect x="112" y="62" width="56" height="14" rx="3" fill="#78879a" />
      <rect x="52" y="86" width="116" height="14" rx="3" fill="#0ea5e9" />
      <text x="60" y="62" fill="#f8fafc" fontSize="11" fontFamily="Georgia, serif">
        CPU
      </text>
      <text x="120" y="52" fill="#1e293b" fontSize="10" fontFamily="Georgia, serif">
        RAM
      </text>
      <text x="88" y="97" fill="#fff" fontSize="10" fontFamily="Georgia, serif">
        SSD
      </text>
    </svg>
  )
}

function SecurityArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <path
        d="M110 22l48 18v34c0 28-20 48-48 56-28-8-48-28-48-56V40z"
        fill="#ffe4e6"
        stroke="#be123c"
        strokeWidth="3"
      />
      <rect x="96" y="58" width="28" height="34" rx="4" fill="#be123c" />
      <circle cx="110" cy="52" r="10" fill="none" stroke="#be123c" strokeWidth="3" />
    </svg>
  )
}

function GitArt() {
  return (
    <svg viewBox="0 0 220 140" className="illu-svg">
      <circle cx="50" cy="70" r="12" fill="#4338ca" />
      <circle cx="110" cy="40" r="12" fill="#6366f1" />
      <circle cx="110" cy="100" r="12" fill="#6366f1" />
      <circle cx="170" cy="70" r="12" fill="#818cf8" />
      <line x1="62" y1="70" x2="98" y2="46" stroke="#a5b4fc" strokeWidth="4" />
      <line x1="62" y1="70" x2="98" y2="94" stroke="#a5b4fc" strokeWidth="4" />
      <line x1="122" y1="46" x2="158" y2="66" stroke="#a5b4fc" strokeWidth="4" />
      <line x1="122" y1="94" x2="158" y2="74" stroke="#a5b4fc" strokeWidth="4" />
    </svg>
  )
}
