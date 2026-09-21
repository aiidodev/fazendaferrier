import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { BrandMark } from '../brand/BrandMark'
import { prefersReducedMotion } from '../../utils/motion'

type PreloaderProps = {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return

    const reduced = prefersReducedMotion()
    const letter = el.querySelector('.js-pre-f')
    const name = el.querySelector('.js-pre-name')
    const mark = el.querySelector('.js-pre-mark')
    const line = el.querySelector('.js-pre-line')
    const motto = el.querySelector('.js-pre-motto')
    const top = el.querySelector('.js-pre-top')
    const bottom = el.querySelector('.js-pre-bottom')
    const center = el.querySelector('.js-pre-center')

    if (reduced) {
      gsap.set(el, { autoAlpha: 0, pointerEvents: 'none' })
      onComplete()
      return
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        gsap.set(el, { pointerEvents: 'none' })
        onComplete()
      },
    })

    tl.fromTo(letter, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55 })
      .to(letter, { opacity: 0, y: -10, duration: 0.35 }, '+=0.25')
      .fromTo(mark, { opacity: 0, scale: 0.96 }, { opacity: 0.85, scale: 1, duration: 0.55 }, '-=0.05')
      .fromTo(name, { opacity: 0, letterSpacing: '0.5em' }, { opacity: 1, letterSpacing: '0.28em', duration: 0.7 }, '-=0.2')
      .fromTo(motto, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25')
      .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: 'power2.inOut' }, '-=0.55')
      .to(center, { scale: 0.86, duration: 0.45 }, '+=0.15')
      .to(top, { yPercent: -101, duration: 0.85, ease: 'power4.inOut' }, '-=0.05')
      .to(bottom, { yPercent: 101, duration: 0.85, ease: 'power4.inOut' }, '<')
      .to(center, { opacity: 0, duration: 0.3 }, '<0.1')
      .set(el, { autoAlpha: 0 })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div ref={root} className="fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
      <div className="js-pre-top absolute inset-x-0 top-0 h-1/2 bg-forest-deep" />
      <div className="js-pre-bottom absolute inset-x-0 bottom-0 h-1/2 bg-forest-deep" />
      <div className="js-pre-center pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-cream">
        <p className="js-pre-f font-display text-7xl font-medium">F</p>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <BrandMark className="js-pre-mark mb-6 h-16 w-16 opacity-0" />
          <p className="js-pre-name font-sans text-[11px] font-medium tracking-[0.28em] uppercase opacity-0">
            Fazenda Ferrier
          </p>
          <span className="js-pre-line mt-6 h-px w-40 origin-center scale-x-0 bg-gold/80" />
          <p className="js-pre-motto mt-5 text-[10px] tracking-[0.34em] text-sand uppercase opacity-0">
            Tradição · Terra · Legado
          </p>
        </div>
      </div>
    </div>
  )
}
