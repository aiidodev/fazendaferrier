import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../../utils/motion'

type NumberTickerProps = {
  value: number
  suffix?: string
  label: string
}

export function NumberTicker({ value, suffix = '', label }: NumberTickerProps) {
  const num = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = num.current
    if (!el) return
    if (prefersReducedMotion()) {
      el.textContent = `${value}${suffix}`
      return
    }
    gsap.registerPlugin(ScrollTrigger)
    const proxy = { n: 0 }
    const tween = gsap.to(proxy, {
      n: value,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(proxy.n)}${suffix}`
      },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [suffix, value])

  return (
    <div>
      <p className="font-display text-5xl leading-none md:text-6xl">
        <span ref={num}>0{suffix}</span>
      </p>
      <p className="mt-3 max-w-[12rem] text-[11px] tracking-[0.18em] text-olive uppercase">{label}</p>
    </div>
  )
}
