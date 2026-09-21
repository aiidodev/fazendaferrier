import { useRef, type MouseEvent, type ReactNode } from 'react'
import gsap from 'gsap'
import { cn } from '../../utils/cn'
import { isFinePointer, prefersReducedMotion } from '../../utils/motion'

type TiltCardProps = {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (event: MouseEvent) => {
    const el = ref.current
    if (!el || !isFinePointer() || prefersReducedMotion()) return
    const rect = el.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    gsap.to(el, {
      rotateY: x * 8,
      rotateX: -y * 8,
      transformPerspective: 800,
      duration: 0.45,
      ease: 'power3.out',
    })
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.7, ease: 'power3.out' })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn('relative will-change-transform', className)}
    >
      {children}
    </div>
  )
}
