import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

type AnimatedTextProps = {
  children: string
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'blockquote'
  className?: string
  accent?: string[]
}

export function AnimatedText({
  children,
  as: Tag = 'p',
  className,
  accent = [],
}: AnimatedTextProps) {
  const words = children.split(/\s+/)

  return (
    <Tag className={cn('js-split-text', className)}>
      {words.map((word, index) => {
        const clean = word.replace(/[.,]/g, '')
        const isAccent = accent.includes(clean.toUpperCase())
        return (
          <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
            <span
              className={cn(
                'js-word inline-block will-change-transform',
                isAccent && 'text-forest',
              )}
            >
              {word}
              {index < words.length - 1 ? '\u00A0' : ''}
            </span>
          </span>
        )
      })}
    </Tag>
  )
}

type MaskRevealProps = {
  children: ReactNode
  className?: string
}

export function MaskReveal({ children, className }: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.clipPath = 'inset(0 0 100% 0)'
  }, [])

  return (
    <div ref={ref} className={cn('js-mask-reveal overflow-hidden', className)}>
      {children}
    </div>
  )
}
