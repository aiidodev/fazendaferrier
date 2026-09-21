import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePointerFine } from '../../hooks/usePointerFine'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)
  const fine = usePointerFine()
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!fine || reduced) return
    const el = cursor.current
    const text = label.current
    if (!el || !text) return

    document.body.classList.add('cursor-none')
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const mouse = { x: pos.x, y: pos.y }

    const move = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const enter = (target: HTMLElement) => {
      const next = target.dataset.cursor ?? 'VER'
      text.textContent = next
      el.dataset.state = target.dataset.cursorKind ?? 'link'
    }

    const leave = () => {
      el.dataset.state = 'default'
      text.textContent = ''
    }

    const onOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest?.('[data-cursor]') as
        | HTMLElement
        | null
      if (target) enter(target)
      else leave()
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onOver)

    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.22
      pos.y += (mouse.y - pos.y) * 0.22
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
    }
    gsap.ticker.add(tick)

    return () => {
      document.body.classList.remove('cursor-none')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      gsap.ticker.remove(tick)
    }
  }, [fine, reduced])

  if (!fine || reduced) return null

  return (
    <div
      ref={cursor}
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      data-state="default"
    >
      <div className="relative flex h-3 w-3 items-center justify-center mix-blend-difference transition-[width,height,background] duration-300 ease-out [[data-state=image]_&]:h-24 [[data-state=image]_&]:w-24 [[data-state=link]_&]:h-16 [[data-state=link]_&]:w-16">
        <span className="absolute inset-0 rounded-full border border-cream/80 bg-cream/10 [[data-state=default]_&]:scale-100 [[data-state=image]_&]:bg-cream/8" />
        <span
          ref={label}
          className="font-sans text-[9px] font-medium tracking-[0.28em] text-cream uppercase opacity-0 transition-opacity duration-200 [[data-state=image]_&]:opacity-100 [[data-state=link]_&]:opacity-100"
        />
      </div>
    </div>
  )
}
