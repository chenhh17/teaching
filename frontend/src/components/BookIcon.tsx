type Props = {
  icon: 'computer' | 'video'
  className?: string
}

export function BookIcon({ icon, className }: Props) {
  if (icon === 'video') {
    return (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="16"
          width="36"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M44 26l12-6v24l-12-6V26z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="32" r="3" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="10"
        y="14"
        width="44"
        height="36"
        rx="4"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M18 22h28M18 30h18M18 38h22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="40" y="34" width="8" height="10" rx="1.5" fill="currentColor" />
    </svg>
  )
}
