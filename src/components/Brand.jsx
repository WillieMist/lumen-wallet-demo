import { useId } from 'react'

// The Lumen "pass" gem. useId keeps the SVG gradient ids unique across the
// several instances rendered on the page.
export function Gem({ className = 'h-7 w-7' }) {
  const id = 'gem-' + useId().replace(/[^a-zA-Z0-9_-]/g, '')
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9d85ff" />
          <stop offset="1" stopColor="#4dd8ff" />
        </linearGradient>
      </defs>
      <path d="M32 5 59 32 32 59 5 32Z" fill={`url(#${id})`} />
      <path d="M32 5 59 32 32 59Z" fill="#ffffff" opacity="0.16" />
    </svg>
  )
}
