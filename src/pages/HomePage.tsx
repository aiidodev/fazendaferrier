import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrandMark } from '../components/brand/BrandMark'
import { NumberTicker } from '../components/ui/NumberTicker'
import { Marquee } from '../components/ui/Marquee'
import { SpotlightCard } from '../components/ui/SpotlightCard'
import { media, NAV_LINKS } from '../data/site'
import { prefersReducedMotion } from '../utils/motion'

const portals = [
  {
    to: '/terra',
    index: '01',
    title: 'Terra',
    copy: 'Como o chão decide o que uma fazenda pode ser.',
  },
  {
    to: '/rebanho',
    index: '02',
    title: 'Rebanho',
    copy: 'Pecuária: tempo, pasto e manejo.',
  },
  {
    to: '/granja',
    index: '03',
    title: 'Granja',
    copy: 'Avicultura: ambiente, rotina e precisão.',
  },
  {
    to: '/producao',
    index: '04',
    title: 'Produção',
    copy: 'Agricultura: solo, safra e integração.',
  },
]

export function HomePage() {
  const visual = useRef<HTMLDivElement>(null)
  const copy = useRef<HTMLDivElement>(null)
  const hero = useRef<HTMLElement>(null)

  useEffect(() => {
    const image = visual.current
    const text = copy.current
    const section = hero.current
    if (!image || !text || !section) return
    gsap.registerPlugin(ScrollTrigger)
    if (prefersReducedMotion()) return

    gsap.fromTo(
      text.children,
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' },
    )

    const st = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
    })
    st.to(image, { scale: 1.08, ease: 'none' }, 0)
    st.to(text, { y: -48, opacity: 0, ease: 'none' }, 0)

    const onMove = (event: MouseEvent) => {
      if (window.matchMedia('(pointer: coarse)').matches) return
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      gsap.to(image, { x: x * 14, y: y * 10, duration: 1.1, ease: 'power3.out' })
      gsap.to(text, { x: x * -8, y: y * -6, duration: 1.1, ease: 'power3.out' })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      st.scrollTrigger?.kill()
      st.kill()
    }
  }, [])

  return (
    <>
      <section ref={hero} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-forest-deep">
        <div ref={visual} className="absolute inset-[-5%] will-change-transform">
          <img src={media.home.src} alt={media.home.alt} fetchPriority="high" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-forest-deep/40" />
        </div>
        <div ref={copy} className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-12 lg:px-20">
          <p className="mb-6 text-[11px] tracking-[0.36em] text-sand uppercase">Fazenda Ferrier</p>
          <h1 className="max-w-5xl font-display text-[clamp(3rem,9vw,7.6rem)] leading-[0.88] text-cream">
            O campo
            <br />
            como ofício.
          </h1>
          <p className="mt-7 max-w-md text-sm leading-relaxed text-cream/78">
            Um atlas didático da terra, da pecuária, da granja e da lavoura — e a assinatura de uma
            propriedade em Minas Gerais.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/75">
          <span className="text-[9px] tracking-[0.32em] uppercase">Explorar</span>
          <span className="h-10 w-px origin-top animate-pulse bg-cream/70" />
        </div>
      </section>

      <Marquee
        className="bg-cream text-forest"
        items={['Tradição', 'Terra', 'Pecuária', 'Granja', 'Lavoura', 'Legado', 'JF', 'Minas Gerais']}
      />

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="text-[11px] tracking-[0.32em] text-olive uppercase">Como ler este site</p>
        <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05]">
          Não é um catálogo. É uma escola breve do ramo — e o começo da Fazenda Ferrier.
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-earth">
          Cada página explica um ofício do campo. A propriedade aparece como assinatura, não como
          excesso de fotos. Quando o arquivo real existir, ele entra no lugar certo.
        </p>
        <div className="mt-16 grid gap-10 border-t border-forest/10 pt-12 md:grid-cols-3">
          <NumberTicker value={3} label="Ofícios sob a mesma terra" />
          <NumberTicker value={6} label="Capítulos para atravessar" />
          <NumberTicker value={1} label="Marca · JF" />
        </div>
      </section>

      <section className="bg-forest-deep px-6 py-24 text-cream md:px-12 md:py-32 lg:px-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl md:text-6xl">Índice</h2>
          <Link
            to="/historia"
            data-cursor="ENTRAR"
            data-cursor-kind="link"
            className="link-line hover:link-line-hover hidden text-[11px] tracking-[0.28em] uppercase md:inline"
          >
            Começar pela história
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {portals.map((item) => (
            <Link key={item.to} to={item.to} data-cursor="ENTRAR" data-cursor-kind="link">
              <SpotlightCard className="h-full min-h-[220px] p-8 transition-transform duration-500 hover:-translate-y-0.5 md:p-10">
                <p className="text-[10px] tracking-[0.32em] text-gold uppercase">{item.index}</p>
                <h3 className="mt-8 font-display text-4xl md:text-5xl">{item.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/80">{item.copy}</p>
              </SpotlightCard>
            </Link>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link to="/historia" data-cursor="ENTRAR" data-cursor-kind="link">
            <SpotlightCard className="p-8 md:p-10">
              <p className="text-[10px] tracking-[0.32em] text-gold uppercase">00</p>
              <h3 className="mt-6 font-display text-3xl">História</h3>
              <p className="mt-3 text-sm text-sand/75">Como uma terra vira nome.</p>
            </SpotlightCard>
          </Link>
          <Link to="/origem" data-cursor="DESCUBRA" data-cursor-kind="link">
            <SpotlightCard className="p-8 md:p-10">
              <p className="text-[10px] tracking-[0.32em] text-gold uppercase">VI</p>
              <h3 className="mt-6 font-display text-3xl">Origem</h3>
              <p className="mt-3 text-sm text-sand/75">Jhenni Nascimento · jhenni.com.br</p>
            </SpotlightCard>
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center bg-coffee px-6 py-28 text-center text-cream">
        <BrandMark className="h-28 w-28" />
        <p className="mt-10 text-[11px] tracking-[0.4em] uppercase">JF</p>
        <p className="mt-4 max-w-sm text-sm text-sand/80">Uma marca. Uma identidade. Cada geração deixa a sua.</p>
        <ul className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] tracking-[0.22em] uppercase">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="link-line hover:link-line-hover" data-cursor="ENTRAR" data-cursor-kind="link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
