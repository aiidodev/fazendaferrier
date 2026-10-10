import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrandMark } from '../components/brand/BrandMark'
import { Marquee } from '../components/ui/Marquee'
import { ATLAS_LINKS, homeSystems, media } from '../data/site'
import { prefersReducedMotion } from '../utils/motion'

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
      { y: 0, opacity: 1, stagger: 0.1, duration: 1.1, ease: 'power3.out' },
    )

    const st = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
    })
    st.to(image, { scale: 1.08, ease: 'none' }, 0)

    const onMove = (event: MouseEvent) => {
      if (window.matchMedia('(pointer: coarse)').matches) return
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      gsap.to(image, { x: x * 10, y: y * 6, duration: 1.2, ease: 'power3.out' })
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
        <div ref={visual} className="absolute inset-[-4%] will-change-transform">
          <img
            src={media.home.src}
            alt={media.home.alt}
            fetchPriority="high"
            className="h-full w-full object-cover object-[center_45%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/45 to-forest-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/55 via-transparent to-forest-deep/50" />
        </div>
        <div
          ref={copy}
          className="relative z-10 flex h-full flex-col justify-center px-6 pt-16 md:px-12 lg:px-20"
        >
          <p className="mb-6 text-[12px] tracking-[0.36em] text-gold uppercase drop-shadow-[0_2px_16px_rgba(19,36,28,0.55)]">
            Minas Gerais · Brasil
          </p>
          <h1 className="max-w-5xl font-display text-[clamp(3.4rem,9.5vw,8.4rem)] leading-[0.88] text-cream drop-shadow-[0_8px_32px_rgba(19,36,28,0.55)]">
            Onde a terra
            <br />
            vira legado.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-cream drop-shadow-[0_4px_18px_rgba(19,36,28,0.5)] md:text-xl">
            Fazenda Ferrier. Gado, granja e lavoura, uma propriedade conduzida com o ritmo do campo.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/70">
          <span className="text-[9px] tracking-[0.3em] uppercase">Descer</span>
          <span className="h-9 w-px bg-cream/55" />
        </div>
      </section>

      <Marquee
        className="bg-cream text-forest"
        items={['Gado', 'Granja', 'Lavoura', 'Água', 'Pasto', 'Minas Gerais', 'JF']}
      />

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="text-[11px] tracking-[0.28em] text-olive uppercase">A fazenda</p>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05]">
          Três ofícios. Um chão. O nome Ferrier.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <p className="text-base leading-[1.85] text-earth">
            A Fazenda Ferrier fica em Minas Gerais. Aqui o rebanho vive no pasto, a granja pede rotina
            e a lavoura espera a janela do ano. Não é espetáculo. É o trabalho de quem trata animal,
            ave e terra com o mesmo respeito.
          </p>
          <p className="text-base leading-[1.85] text-earth">
            O critério é simples: ver o chão, cuidar do ciclo, deixar continuidade. A marca JF assina o
            que se faz, sem gritar sobre o horizonte.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3">
        {homeSystems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            data-cursor="ENTRAR"
            data-cursor-kind="image"
            className="group relative min-h-[70vh] overflow-hidden"
          >
            <img
              src={item.image.src}
              alt={item.image.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/15 to-transparent" />
            <div className="absolute right-8 bottom-10 left-8 text-cream">
              <h3 className="font-display text-4xl md:text-5xl">{item.title}</h3>
              <p className="mt-3 max-w-xs text-sm text-cream/80">{item.text}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <p className="text-[11px] tracking-[0.28em] text-olive uppercase">Como se trabalha</p>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.08]">
          Presença no pasto. Ordem na granja. Paciência na lavoura.
        </h2>
        <ul className="mt-16 grid gap-12 md:grid-cols-2">
          {[
            ['Pasto', 'Lotação, descanso, água e sombra. O gado come o manejo do chão.'],
            ['Granja', 'Ambiente, higiene e manhã repetida. O lote sente o descuido na hora.'],
            ['Lavoura', 'Solo primeiro. A janela de plantio manda mais do que a vontade.'],
            ['Água', 'Nascente, bebedouro, linha da ave, chuva. Sem ela, a fazenda para.'],
          ].map(([title, body]) => (
            <li key={title} className="border-t border-forest/10 pt-8">
              <h3 className="font-display text-3xl">{title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-earth">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-forest-deep px-6 py-24 text-cream md:px-12 md:py-32 lg:px-20">
        <h2 className="font-display text-4xl md:text-6xl">A propriedade</h2>
        <p className="mt-6 max-w-xl text-sand/80">
          História, método, água, marca e origem, o restante da casa, além do menu.
        </p>
        <div className="mt-14 divide-y divide-cream/15 border-y border-cream/15">
          {ATLAS_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-cursor="ENTRAR"
              data-cursor-kind="link"
              className="flex items-center justify-between py-5 text-cream/90 transition-colors hover:text-gold"
            >
              <span className="font-display text-2xl md:text-4xl">{link.label}</span>
              <span className="text-[11px] tracking-[0.2em] uppercase opacity-50">Ver</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative min-h-[85svh] overflow-hidden bg-forest-deep text-cream">
        <img
          src={media.closing.src}
          alt={media.closing.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/50" />
        <div className="relative z-10 flex min-h-[85svh] flex-col items-center justify-center px-6 py-28 text-center">
          <BrandMark className="h-24 w-24" />
          <p className="mt-8 text-[11px] tracking-[0.4em] uppercase">JF</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl">Tradição que continua.</h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/80">
            Gado, granja e plantação. A terra na frente. A marca no lugar certo.
          </p>
        </div>
      </section>
    </>
  )
}
