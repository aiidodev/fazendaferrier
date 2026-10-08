import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import type { Chapter } from '../../data/site'
import { ChapterBody } from './ChapterBody'
import { prefersReducedMotion } from '../../utils/motion'
import { cn } from '../../utils/cn'

type ChapterFrameProps = {
  chapter: Chapter
  inverted?: boolean
  children?: ReactNode
}

export function ChapterFrame({ chapter, inverted, children }: ChapterFrameProps) {
  const title = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = title.current
    if (el) {
      gsap.fromTo(el, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.4, ease: 'power3.out' },
      )
    }
  }, [chapter.path])

  return (
    <article className={inverted ? 'bg-forest-deep text-cream' : 'bg-cream text-ink'}>
      <header className="px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:px-20">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">{chapter.kicker}</p>
        <h1
          ref={title}
          className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,7vw,6.2rem)] leading-[0.92]"
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
        <figure className="px-0 md:px-12 lg:px-20">
          <div className="overflow-hidden">
            <img
              ref={imageRef}
              src={chapter.image.src}
              alt={chapter.image.alt}
              className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
              data-cursor="EXPLORAR"
              data-cursor-kind="image"
            />
          </div>
        </figure>
      ) : null}

      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <ChapterBody chapter={chapter} inverted={inverted} />
        {children}
      </div>

      <footer
        className={cn(
          'flex flex-col gap-6 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-12 lg:px-20',
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
            className="link-line hover:link-line-hover text-[12px] tracking-[0.22em] uppercase"
          >
            Seguir · {chapter.next.label}
          </Link>
        ) : null}
      </footer>
    </article>
  )
}
