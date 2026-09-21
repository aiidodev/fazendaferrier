import { useRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import gsap from 'gsap'
import { cn } from '../../utils/cn'
import { isFinePointer, prefersReducedMotion } from '../../utils/motion'

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function MagneticButton({ children, className, onMouseMove, onMouseLeave, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <button
      ref={ref}
      className={cn('relative inline-flex items-center justify-center', className)}
      onMouseMove={(event) => {
        onMouseMove?.(event)
        if (!isFinePointer() || prefersReducedMotion() || !ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = event.clientX - rect.left - rect.width / 2
        const y = event.clientY - rect.top - rect.height / 2
        gsap.to(ref.current, { x: x * 0.28, y: y * 0.28, duration: 0.4, ease: 'power3.out' })
      }}
      onMouseLeave={(event) => {
        onMouseLeave?.(event)
        if (!ref.current) return
        gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'power3.out' })
      }}
      {...props}
    >
      {children}
    </button>
  )
}
