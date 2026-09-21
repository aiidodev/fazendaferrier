import { useEffect, useRef, type ImgHTMLAttributes } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../../utils/cn'
import { prefersReducedMotion } from '../../utils/motion'

type ParallaxImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  speed?: number
  wrapClassName?: string
}

export function ParallaxImage({
  speed = 0.18,
  wrapClassName,
  className,
  alt = '',
  ...props
}: ParallaxImageProps) {
  const wrap = useRef<HTMLDivElement>(null)
  const img = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const wrapEl = wrap.current
    const imgEl = img.current
    if (!wrapEl || !imgEl || prefersReducedMotion()) return

    gsap.registerPlugin(ScrollTrigger)
    const tween = gsap.fromTo(
      imgEl,
      { yPercent: -speed * 100 },
      {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [speed])

  return (
    <div ref={wrap} className={cn('overflow-hidden', wrapClassName)}>
      <img
        ref={img}
        alt={alt}
        className={cn('h-[120%] w-full object-cover will-change-transform', className)}
        {...props}
      />
    </div>
  )
}
