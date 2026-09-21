import { useRef, type MouseEvent, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (event: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        'beam-card group relative overflow-hidden border border-cream/10 bg-forest/40',
        'before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500',
        'before:bg-[radial-gradient(420px_circle_at_var(--spot-x)_var(--spot-y),rgba(156,132,84,0.16),transparent_42%)]',
        'hover:before:opacity-100',
        className,
      )}
    >
      {children}
    </div>
  )
}
