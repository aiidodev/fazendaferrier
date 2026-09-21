import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomCursor } from '../cursor/CustomCursor'
import { Footer } from '../footer/Footer'
import { SmoothScroll } from './SmoothScroll'
import { Navbar } from '../navigation/Navbar'
import { prefersReducedMotion } from '../../utils/motion'

export function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    gsap.registerPlugin(ScrollTrigger)
    const page = document.querySelector('.js-page')
    if (page && !prefersReducedMotion()) {
      gsap.fromTo(
        page,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      )
    }
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 120)
    return () => window.clearTimeout(refresh)
  }, [pathname])

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[120] focus:bg-cream focus:px-4 focus:py-2"
      >
        Ir ao conteúdo
      </a>
      <CustomCursor />
      <div className="grain" aria-hidden="true" />
      <SmoothScroll>
        <Navbar />
        <main id="conteudo" className="js-page">
          <Outlet />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  )
}
