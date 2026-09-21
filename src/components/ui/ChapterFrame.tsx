import { lazy, Suspense, useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import type { Chapter } from '../../data/site'
import { ChapterBody } from './ChapterBody'
import type { FieldMode } from '../three/LivingField'
import { prefersReducedMotion } from '../../utils/motion'
import { cn } from '../../utils/cn'

const LivingField = lazy(() =>
  import('../three/LivingField').then((module) => ({ default: module.LivingField })),
)

type ChapterFrameProps = {
  chapter: Chapter
  inverted?: boolean
  children?: ReactNode
  experience?: FieldMode
}

export function ChapterFrame({ chapter, inverted, children, experience }: ChapterFrameProps) {
  const title = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = title.current
    if (el) {
      gsap.fromTo(el, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 1.05, ease: 'power3.out', delay: 0.1 })
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0.65 },
        { scale: 1, opacity: 1, duration: 1.35, ease: 'power3.out' },
      )
    }
  }, [chapter.path])

  return (
    <article className={inverted ? 'relative bg-forest-deep text-cream' : 'relative bg-cream text-ink'}>
      {inverted ? <div className="scan pointer-events-none absolute inset-0 z-[1] opacity-40" /> : null}

      <header className="relative z-[2] px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:px-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.36em] text-gold uppercase">{chapter.kicker}</p>
          <p className="font-mono text-[10px] tracking-[0.28em] text-gold/70 uppercase">JF · Ferrier</p>
        </div>
        <h1
          ref={title}
          className="max-w-5xl font-display text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.92]"
        >
          {chapter.title}
        </h1>
        <p
          className={cn(
            'mt-8 max-w-2xl text-base leading-relaxed md:text-lg',
            inverted ? 'text-sand/85' : 'text-earth',
          )}
        >
          {chapter.lead}
        </p>
      </header>

      {chapter.image ? (
        <figure className="relative z-[2] px-6 md:px-12 lg:px-20">
          <div className="overflow-hidden">
            <img
              ref={imageRef}
              src={chapter.image.src}
              alt={chapter.image.alt}
              className="aspect-[16/8] w-full object-cover md:aspect-[21/8]"
              data-cursor="EXPLORAR"
              data-cursor-kind="image"
            />
          </div>
        </figure>
      ) : null}

      {experience ? (
        <div className="relative z-[2] mt-6 h-[70vh] min-h-[420px] bg-forest-deep md:mt-8">
          <Suspense fallback={<div className="h-full w-full bg-forest-deep" />}>
            <LivingField mode={experience} className="h-full w-full" />
          </Suspense>
        </div>
      ) : null}

      <div className="relative z-[2] px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <ChapterBody chapter={chapter} inverted={inverted} />
        {children}
      </div>

      <footer
        className={cn(
          'relative z-[2] flex flex-col gap-6 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-12 lg:px-20',
          inverted ? 'border-t border-cream/10' : 'border-t border-forest/10',
        )}
      >
        <p className={cn('max-w-md text-sm leading-relaxed', inverted ? 'text-sand/70' : 'text-earth')}>
          {chapter.aside}
        </p>
        {chapter.next ? (
          <Link
            to={chapter.next.to}
            data-cursor="ENTRAR"
            data-cursor-kind="link"
            className="group font-mono text-[11px] tracking-[0.32em] uppercase"
          >
            <span className="link-line hover:link-line-hover">Próximo sistema · {chapter.next.label}</span>
          </Link>
        ) : null}
      </footer>
    </article>
  )
}
