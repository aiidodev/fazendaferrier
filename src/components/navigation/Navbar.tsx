import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ARCHIVE_LINKS, NAV_LINKS } from '../../data/site'
import { cn } from '../../utils/cn'
import { BrandMark } from '../brand/BrandMark'

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
    const onScroll = () => setScrolled(window.scrollY > 48 || !home)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [home])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const panel = document.querySelector('.js-mobile-menu')
    const items = document.querySelectorAll('.js-mobile-link')
    if (!panel || !open) return
    gsap.fromTo(panel, { yPercent: -8, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.55, ease: 'power3.out' })
    gsap.fromTo(
      items,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, delay: 0.12, ease: 'power3.out' },
    )
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const overHero = home && !scrolled && !open
  const ink = !overHero

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            'grid h-[4.75rem] grid-cols-[1fr_auto] items-center px-5 transition-[background,box-shadow,height] duration-500 md:h-24 md:px-10 lg:grid-cols-[1fr_auto_1fr]',
            overHero
              ? 'bg-transparent'
              : 'bg-cream/92 shadow-[0_1px_0_rgba(19,36,28,0.08)] backdrop-blur-md',
          )}
        >
          <Link
            to="/"
            data-cursor="ENTRAR"
            data-cursor-kind="link"
            className={cn(
              'flex min-w-0 items-center gap-3 md:gap-4',
              ink ? 'text-forest' : 'text-cream drop-shadow-[0_2px_12px_rgba(19,36,28,0.45)]',
            )}
          >
            <BrandMark
              className="h-11 w-11 shrink-0 md:h-[3.25rem] md:w-[3.25rem]"
              tone={ink ? 'dark' : 'light'}
            />
            <span className="min-w-0">
              <span
                className={cn(
                  'block font-display text-[1.55rem] leading-none tracking-[0.02em] md:text-[2.05rem]',
                  ink ? 'text-forest' : 'text-cream',
                )}
              >
                Fazenda Ferrier
              </span>
              <span
                className={cn(
                  'mt-1.5 hidden text-[10px] tracking-[0.28em] uppercase sm:block',
                  ink ? 'text-olive' : 'text-sand/90',
                )}
              >
                Minas Gerais
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center justify-center gap-9 lg:flex"
            aria-label="Principal"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                data-cursor="ENTRAR"
                data-cursor-kind="link"
                className={({ isActive }) =>
                  cn(
                    'relative text-[12px] tracking-[0.22em] uppercase transition-colors',
                    ink
                      ? 'text-forest/70 hover:text-forest'
                      : 'text-cream drop-shadow-[0_2px_10px_rgba(19,36,28,0.4)] hover:text-cream',
                    isActive && (ink ? 'text-forest' : 'text-cream'),
                    isActive &&
                      'after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-gold',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-6">
            <Link
              to="/contato"
              data-cursor="ENTRAR"
              data-cursor-kind="link"
              className={cn(
                'hidden text-[12px] tracking-[0.22em] uppercase md:inline',
                ink ? 'text-forest/80 hover:text-forest' : 'text-cream/85 hover:text-cream',
              )}
            >
              Contato
            </Link>
            <button
              type="button"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              className={cn('relative h-5 w-7 lg:hidden', ink ? 'text-forest' : 'text-cream')}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={cn(
                  'absolute left-0 h-px w-full bg-current transition-transform duration-300',
                  open ? 'top-2 rotate-45' : 'top-0.5',
                )}
              />
              <span
                className={cn(
                  'absolute top-2 left-0 h-px w-full bg-current transition-opacity duration-200',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-px w-full bg-current transition-transform duration-300',
                  open ? 'top-2 -rotate-45' : 'top-[0.9rem]',
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="js-mobile-menu fixed inset-0 z-40 bg-cream text-forest">
          <div className="flex h-full flex-col justify-between px-6 pt-28 pb-10">
            <nav className="flex flex-col gap-5" aria-label="Mobile">
              <Link
                to="/"
                className="js-mobile-link font-display text-5xl leading-none"
                onClick={() => setOpen(false)}
              >
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
              <p className="mb-3 text-[10px] tracking-[0.28em] text-olive uppercase">Mais</p>
              <div className="js-mobile-link flex flex-wrap gap-x-5 gap-y-2">
                {ARCHIVE_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-[12px] tracking-[0.16em] text-earth uppercase"
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
