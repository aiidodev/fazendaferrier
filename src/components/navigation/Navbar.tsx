import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { ARCHIVE_LINKS, NAV_LINKS } from '../../data/site'
import { cn } from '../../utils/cn'
import { MagneticButton } from '../shared/MagneticButton'
import { BrandMark } from '../brand/BrandMark'

export function Navbar() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  const [scrolled, setScrolled] = useState(!home)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setOpen(false)
    setScrolled(!home)
  }, [home, pathname])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24 || !home)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [home])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const panel = document.querySelector('.js-mobile-menu')
    const items = document.querySelectorAll('.js-mobile-link')
    if (!panel || !open) return
    gsap.fromTo(panel, { yPercent: -100 }, { yPercent: 0, duration: 0.75, ease: 'power4.inOut' })
    gsap.fromTo(
      items,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, delay: 0.22, ease: 'power3.out' },
    )
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            'flex h-[4.5rem] items-center justify-between border-b px-4 transition-all duration-500 md:h-20 md:px-8',
            scrolled || !home || open
              ? 'border-cream/10 bg-forest-deep/92 backdrop-blur-md'
              : 'border-transparent bg-transparent',
          )}
        >
          <Link
            to="/"
            data-cursor="ENTRAR"
            data-cursor-kind="link"
            className="flex min-w-0 items-center gap-3 text-cream md:gap-4"
          >
            <BrandMark className="h-10 w-10 shrink-0 md:h-12 md:w-12" />
            <span className="flex min-w-0 flex-col leading-none">
              <span className="font-mono text-[8px] tracking-[0.38em] text-gold uppercase md:text-[9px]">
                JF · Minas Gerais
              </span>
              <span className="mt-1.5 font-display text-[1.35rem] font-medium tracking-[0.04em] text-cream md:text-[1.85rem] md:tracking-[0.06em]">
                Fazenda Ferrier
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                data-cursor="ENTRAR"
                data-cursor-kind="link"
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 font-mono text-[11px] tracking-[0.22em] text-cream/75 uppercase transition-colors hover:text-cream',
                    isActive && 'text-gold',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[9px] tracking-[0.28em] text-sand/80 uppercase xl:inline">
              MG · BR
            </span>
            <a
              href="mailto:contato@fazendaferrier.com.br"
              data-cursor="ENTRAR"
              data-cursor-kind="link"
              className="hidden border border-cream/20 px-3 py-1.5 font-mono text-[9px] tracking-[0.28em] text-cream uppercase transition-colors hover:border-gold hover:text-gold md:inline"
            >
              Contato
            </a>
            <MagneticButton
              type="button"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              className="text-cream lg:hidden"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} strokeWidth={1.4} /> : <Menu size={18} strokeWidth={1.4} />}
            </MagneticButton>
          </div>
        </div>
        <div className="h-px w-full bg-cream/10">
          <div className="h-px bg-gold origin-left" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </header>

      {open ? (
        <div className="js-mobile-menu fixed inset-0 z-40 bg-forest-deep text-cream">
          <div className="scan pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative flex h-full flex-col justify-between px-7 pt-28 pb-12">
            <nav className="flex flex-col gap-4" aria-label="Mobile">
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
              <p className="mb-4 font-mono text-[10px] tracking-[0.32em] text-gold uppercase">Arquivo</p>
              <div className="js-mobile-link flex flex-wrap gap-x-6 gap-y-2">
                {ARCHIVE_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="font-mono text-[11px] tracking-[0.18em] text-sand uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
