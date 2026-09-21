import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import type { Chapter } from '../../data/site'
import { prefersReducedMotion } from '../../utils/motion'

type ChapterFrameProps = {
  chapter: Chapter
  children?: ReactNode
  inverted?: boolean
}

export function ChapterFrame({ chapter, children, inverted }: ChapterFrameProps) {
  const title = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = title.current
    if (prefersReducedMotion()) return
    if (el) {
      gsap.fromTo(el, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.12 })
    }
    const image = document.querySelector('.js-chapter-image')
    if (image) {
      gsap.fromTo(
        image,
        { scale: 1.08, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
      )
    }
  }, [chapter.path])

  return (
    <article className={inverted ? 'bg-forest-deep text-cream' : 'bg-cream text-ink'}>
      <header className="px-6 pt-28 pb-12 md:px-12 md:pt-36 lg:px-20">
        <p className="text-[11px] tracking-[0.36em] text-gold uppercase">{chapter.kicker}</p>
        <h1
          ref={title}
          className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.92]"
        >
          {chapter.title}
        </h1>
        <p
          className={`mt-8 max-w-2xl text-base leading-relaxed md:text-lg ${inverted ? 'text-sand/85' : 'text-earth'}`}
        >
          {chapter.lead}
        </p>
      </header>

      {chapter.image ? (
        <figure className="px-6 md:px-12 lg:px-20">
          <div className="overflow-hidden">
            <img
              src={chapter.image.src}
              alt={chapter.image.alt}
              className="js-chapter-image aspect-[16/8] w-full object-cover md:aspect-[21/8]"
              data-cursor="EXPLORAR"
              data-cursor-kind="image"
            />
          </div>
        </figure>
      ) : null}

      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20">{children}</div>

      <footer
        className={`flex flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-12 lg:px-20 ${inverted ? 'border-t border-cream/10' : 'border-t border-forest/10'}`}
      >
        <p className={`max-w-md text-sm leading-relaxed ${inverted ? 'text-sand/70' : 'text-earth'}`}>
          {chapter.aside}
        </p>
        {chapter.next ? (
          <Link
            to={chapter.next.to}
            data-cursor="ENTRAR"
            data-cursor-kind="link"
            className="link-line hover:link-line-hover text-[11px] tracking-[0.32em] uppercase"
          >
            Próximo · {chapter.next.label}
          </Link>
        ) : null}
      </footer>
    </article>
  )
}
