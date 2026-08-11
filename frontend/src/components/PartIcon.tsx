import type { ReactNode } from 'react'

type Props = {
  partId: string
  className?: string
  title?: string
}

function Svg({
  className,
  title,
  children,
}: {
  className?: string
  title?: string
  children: ReactNode
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export function PartIcon({ partId, className, title }: Props) {
  switch (partId) {
    case 'foundations':
      return (
        <Svg className={className} title={title}>
          <path d="M12 3v3" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 15.2V21" />
          <path d="M6.2 7.2 8.4 9" />
          <path d="M17.8 7.2 15.6 9" />
          <path d="M4 14h3.2" />
          <path d="M16.8 14H20" />
        </Svg>
      )
    case 'computer-hardware':
      return (
        <Svg className={className} title={title}>
          <rect x="4" y="4" width="16" height="16" rx="2.5" />
          <rect x="8" y="8" width="8" height="8" rx="1.2" />
          <path d="M8 2.8v1.2M12 2.8v1.2M16 2.8v1.2" />
          <path d="M8 20v1.2M12 20v1.2M16 20v1.2" />
          <path d="M2.8 8h1.2M2.8 12h1.2M2.8 16h1.2" />
          <path d="M20 8h1.2M20 12h1.2M20 16h1.2" />
        </Svg>
      )
    case 'operating-system':
      return (
        <Svg className={className} title={title}>
          <rect x="3.5" y="4.5" width="17" height="13" rx="2" />
          <path d="M3.5 9h17" />
          <circle cx="6.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="8.4" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
          <path d="M8 20h8" />
          <path d="M12 17.5V20" />
        </Svg>
      )
    case 'files-and-data':
      return (
        <Svg className={className} title={title}>
          <path d="M3.5 7.5h6l1.8 2H20.5v9.2a1.8 1.8 0 0 1-1.8 1.8H5.3a1.8 1.8 0 0 1-1.8-1.8V7.5z" />
          <path d="M3.5 7.5V6.2A1.7 1.7 0 0 1 5.2 4.5h4.1l1.6 1.8" />
        </Svg>
      )
    case 'system-tools':
      return (
        <Svg className={className} title={title}>
          <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
          <path d="M7 10.2 9.4 12.5 7 14.8" />
          <path d="M11.5 14.8H16" />
        </Svg>
      )
    case 'programming':
      return (
        <Svg className={className} title={title}>
          <path d="M8.2 7.5 4.8 12l3.4 4.5" />
          <path d="M15.8 7.5 19.2 12l-3.4 4.5" />
          <path d="M13.2 6.5 10.8 17.5" />
        </Svg>
      )
    case 'coding-practice':
      return (
        <Svg className={className} title={title}>
          <path d="M9.2 14.5 5.5 10.8a2.4 2.4 0 0 1 3.4-3.4L12 10.5" />
          <path d="M14.8 9.5 18.5 13.2a2.4 2.4 0 0 1-3.4 3.4L12 13.5" />
          <path d="M8 16.5 6 20" />
          <path d="M16 7.5 18 4.2" />
        </Svg>
      )
    case 'network':
      return (
        <Svg className={className} title={title}>
          <circle cx="12" cy="12" r="8.2" />
          <path d="M12 3.8v16.4" />
          <path d="M3.8 12h16.4" />
          <path d="M6.2 6.8c2.2 1.8 4.5 2.5 5.8 2.5s3.6-.7 5.8-2.5" />
          <path d="M6.2 17.2c2.2-1.8 4.5-2.5 5.8-2.5s3.6.7 5.8 2.5" />
        </Svg>
      )
    case 'web-browser':
      return (
        <Svg className={className} title={title}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M11 4.5v13" />
          <path d="M4.5 11h13" />
          <path d="M15.8 15.8 20.2 20.2" />
          <path d="M18.2 20.5h2.3v-2.3" />
        </Svg>
      )
    case 'digital-habits':
      return (
        <Svg className={className} title={title}>
          <path d="M12 3.5 19 6.5v5.2c0 4.6-3 7.6-7 8.8-4-1.2-7-4.2-7-8.8V6.5L12 3.5z" />
          <path d="M9.2 12.2 11.2 14.2 15.2 9.8" />
        </Svg>
      )
    default:
      return (
        <Svg className={className} title={title}>
          <circle cx="12" cy="12" r="7.5" />
        </Svg>
      )
  }
}
