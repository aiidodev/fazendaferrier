import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/site'
import { cn } from '../../utils/cn'
import { MagneticButton } from '../shared/MagneticButton'

export function Navbar() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  const [scrolled, setScrolled] = useState(!home)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
    setScrolled(!home)
  }, [home, pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32 || !home)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [home])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const panel = document.querySelector('.js-mobile-menu')
    const items = document.querySelectorAll('.js-mobile-link')
    if (!panel || !open) return
    gsap.fromTo(panel, { yPercent: -100 }, { yPercent: 0, duration: 0.7, ease: 'power4.inOut' })
    gsap.fromTo(
      items,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.55, delay: 0.2, ease: 'power3.out' },
    )
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const light = home && !scrolled && !open

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled || !home
            ? 'h-14 bg-forest-deep/88 shadow-[0_1px_0_rgba(243,238,230,0.06)] backdrop-blur-[8px]'
            : 'h-20 bg-transparent',
        )}
      >
        <div className="flex h-full items-center justify-between px-5 md:px-10">
          <Link
            to="/"
            data-cursor="ENTRAR"
            data-cursor-kind="link"
            className={cn(
              'font-sans text-[11px] font-medium tracking-[0.28em] uppercase',
              light ? 'text-cream' : 'text-cream',
            )}
          >
            <span className="md:hidden">F</span>
            <span className="hidden md:inline">Fazenda Ferrier</span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                data-cursor="ENTRAR"
                data-cursor-kind="link"
                className={({ isActive }) =>
                  cn(
                    'link-line hover:link-line-hover text-[10px] font-medium tracking-[0.26em] uppercase',
                    light ? 'text-cream/85' : 'text-cream/85',
                    isActive && 'link-line-hover text-gold',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <MagneticButton
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="text-cream"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} strokeWidth={1.4} /> : <Menu size={18} strokeWidth={1.4} />}
          </MagneticButton>
        </div>
      </header>

      {open ? (
        <div className="js-mobile-menu fixed inset-0 z-40 bg-forest-deep text-cream">
          <div className="flex h-full flex-col justify-between px-7 pt-28 pb-12">
            <nav className="flex flex-col gap-5" aria-label="Mobile">
              <Link to="/" className="js-mobile-link font-display text-5xl" onClick={() => setOpen(false)}>
                Início
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="js-mobile-link font-display text-5xl leading-none"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div>
              <p className="text-[10px] tracking-[0.32em] text-sand uppercase">Gado · Granja · Plantação</p>
              <a
                href="https://jhenni.com.br"
                target="_blank"
                rel="noreferrer"
                className="js-mobile-link mt-6 inline-block text-[11px] tracking-[0.28em] text-gold uppercase"
              >
                jhenni.com.br
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
