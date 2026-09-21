import { lazy, Suspense, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrandMark } from '../components/brand/BrandMark'
import { NumberTicker } from '../components/ui/NumberTicker'
import { Marquee } from '../components/ui/Marquee'
import { SpotlightCard } from '../components/ui/SpotlightCard'
import { TiltCard } from '../components/ui/TiltCard'
import { ATLAS_LINKS, homeSystems, media } from '../data/site'
import { prefersReducedMotion } from '../utils/motion'

const LivingField = lazy(() =>
  import('../components/three/LivingField').then((module) => ({ default: module.LivingField })),
)

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
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.09, duration: 1.05, ease: 'power3.out' },
    )

    const st = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
    })
    st.to(image, { scale: 1.1, ease: 'none' }, 0)
    st.to(text, { y: -56, opacity: 0, ease: 'none' }, 0)

    const onMove = (event: MouseEvent) => {
      if (window.matchMedia('(pointer: coarse)').matches) return
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      gsap.to(image, { x: x * 16, y: y * 10, duration: 1.15, ease: 'power3.out' })
      gsap.to(text, { x: x * -8, y: y * -6, duration: 1.15, ease: 'power3.out' })
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
          <div className="absolute inset-0 bg-forest-deep/45" />
          <div className="scan absolute inset-0 opacity-25" />
        </div>
        <div className="absolute top-28 right-6 z-10 hidden font-mono text-[10px] tracking-[0.28em] text-cream/50 uppercase md:block md:right-12">
          16°S · Minas Gerais
        </div>
        <div ref={copy} className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-12 lg:px-20">
          <p className="mb-5 font-mono text-[10px] tracking-[0.4em] text-gold uppercase">Fazenda Ferrier · Sistema rural</p>
          <h1 className="max-w-5xl font-display text-[clamp(3rem,9vw,7.8rem)] leading-[0.86] text-cream">
            Terra, dado
            <br />
            e continuidade.
          </h1>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-cream/78 md:text-base">
            Uma propriedade em Minas Gerais. Três ofícios — pecuária, granja e lavoura — lidos com o
            rigor de quem trata o campo como sistema, não como vitrine.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/70">
          <span className="font-mono text-[9px] tracking-[0.36em] uppercase">Scroll</span>
          <span className="h-10 w-px origin-top animate-pulse bg-gold/80" />
        </div>
      </section>

      <Marquee
        className="bg-ink font-mono text-cream"
        items={['Pecuária', 'Avicultura', 'Lavoura', 'Água', 'Solo', 'Rastreio', 'Protocolo', 'JF', 'Minas Gerais']}
      />

      <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-forest-deep">
        <Suspense fallback={<div className="h-full w-full bg-forest-deep" />}>
          <LivingField mode="field" className="h-full w-full" />
        </Suspense>
        <div className="pointer-events-none absolute top-24 left-6 z-10 max-w-md md:left-12 md:top-32">
          <p className="font-mono text-[10px] tracking-[0.36em] text-gold uppercase">Campo vivo · 3D</p>
          <h2 className="mt-4 font-display text-4xl text-cream md:text-6xl">Gado, ave e planta.</h2>
          <p className="mt-4 text-sm leading-relaxed text-sand/80">
            Interaja: o volume segue o mouse. Clique para identificar cada ofício.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-36 lg:px-20">
        <p className="font-mono text-[10px] tracking-[0.36em] text-olive uppercase">Manifesto</p>
        <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,5.4vw,4.8rem)] leading-[1.02]">
          O agro contemporâneo é engenharia viva. A Fazenda Ferrier assume isso sem teatralizar a terra.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <p className="text-base leading-[1.85] text-earth">
            Não vendemos romance de fazenda nem dashboard de startup. Explicamos o ramo — gado, ave,
            plantação — e assinamos uma propriedade que começa agora, com método e sem ficção histórica.
          </p>
          <p className="text-base leading-[1.85] text-earth">
            Tecnologia, aqui, é protocolo: ler o solo, rastrear o animal, proteger o lote, respeitar a
            janela da safra. Quando o arquivo real da Ferrier existir, ele entra no lugar certo. Até lá,
            o ofício é o conteúdo.
          </p>
        </div>
        <div className="mt-20 grid gap-10 border-t border-forest/10 pt-12 md:grid-cols-3">
          <NumberTicker value={3} label="Sistemas produtivos" />
          <NumberTicker value={10} label="Capítulos do atlas" />
          <NumberTicker value={1} label="Assinatura · JF" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep px-6 py-24 text-cream md:px-12 md:py-32 lg:px-20">
        <div className="scan pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative">
          <p className="font-mono text-[10px] tracking-[0.36em] text-gold uppercase">Arquitetura produtiva</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-6xl">Três sistemas. Uma terra.</h2>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {homeSystems.map((item) => (
              <TiltCard key={item.code}>
                <SpotlightCard className="min-h-[280px] p-8">
                  <p className="font-mono text-[10px] tracking-[0.32em] text-gold">{item.code}</p>
                  <h3 className="mt-10 font-display text-4xl">{item.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-sand/80">{item.text}</p>
                </SpotlightCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="font-mono text-[10px] tracking-[0.36em] text-olive uppercase">Agro tech sem teatro</p>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.08]">
          Dado só vale se o chão foi lido primeiro.
        </h2>
        <ul className="mt-16 grid gap-0 border-y border-forest/10 md:grid-cols-2">
          {[
            ['Rastreio', 'Identidade do animal e memória do lote — a camada digital mais honesta da pecuária.'],
            ['Protocolo', 'Rotina da granja: ambiente, higiene, alarme. Precisão que funciona de madrugada.'],
            ['Calendário', 'Janela de plantio e colheita. A decisão certa acontece antes da máquina.'],
            ['Integração', 'Lavoura e criação no mesmo hectare, quando o solo aguenta o ciclo duplo.'],
          ].map(([title, body]) => (
            <li key={title} className="border-forest/10 px-0 py-8 md:border-r md:px-8 md:odd:pl-0 md:even:border-r-0">
              <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{title}</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-earth">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="font-mono text-[10px] tracking-[0.36em] text-olive uppercase">Arquivo expandido</p>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.08]">
          Método, água e marca — o que sustenta os três ofícios.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {[
            {
              to: '/metodo',
              kicker: '06',
              title: 'Método',
              copy: 'Ler, registrar, decidir. Agro tech sem teatro.',
            },
            {
              to: '/agua',
              kicker: '07',
              title: 'Água',
              copy: 'O fio que costura gado, granja e lavoura.',
            },
            {
              to: '/marca',
              kicker: '08',
              title: 'Marca JF',
              copy: 'Identidade de ferro. Assinatura, não enfeite.',
            },
          ].map((item) => (
            <Link key={item.to} to={item.to} data-cursor="ENTRAR" data-cursor-kind="link" className="group block">
              <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{item.kicker}</p>
              <h3 className="mt-4 font-display text-3xl group-hover:text-olive">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-earth">{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-cream md:px-12 md:py-32 lg:px-20">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-4xl md:text-6xl">Índice do atlas</h2>
          <Link
            to="/historia"
            className="hidden font-mono text-[10px] tracking-[0.28em] text-gold uppercase md:inline"
            data-cursor="ENTRAR"
            data-cursor-kind="link"
          >
            Começar →
          </Link>
        </div>
        <div className="divide-y divide-cream/10 border-y border-cream/10">
          {ATLAS_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-cursor="ENTRAR"
              data-cursor-kind="link"
              className="group flex items-center justify-between py-6 transition-colors hover:text-gold"
            >
              <span className="flex items-baseline gap-6">
                <span className="font-mono text-[10px] text-gold">{link.index}</span>
                <span className="font-display text-3xl md:text-5xl">{link.label}</span>
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase group-hover:opacity-100">
                Abrir
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative flex min-h-[80svh] flex-col items-center justify-center overflow-hidden bg-coffee px-6 py-28 text-center text-cream">
        <div className="scan pointer-events-none absolute inset-0 opacity-20" />
        <BrandMark className="relative h-28 w-28" />
        <p className="relative mt-10 font-mono text-[11px] tracking-[0.48em] uppercase">JF</p>
        <h2 className="relative mt-8 font-display text-4xl md:text-6xl">Tradição que continua.</h2>
        <p className="relative mt-6 max-w-md text-sm leading-relaxed text-sand/80">
          Gado, granja e plantação. Uma assinatura. O próximo capítulo é o trabalho.
        </p>
      </section>
    </>
  )
}
