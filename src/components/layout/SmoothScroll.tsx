import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { prefersReducedMotion } from '../../utils/motion'

type SmoothScrollProps = {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (prefersReducedMotion()) {
      ScrollTrigger.refresh()
      return
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const ticker = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(ticker)
      lenis.destroy()
    }
  }, [pathname])

  return <>{children}</>
}
