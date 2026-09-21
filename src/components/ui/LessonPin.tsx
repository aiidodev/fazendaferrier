import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Lesson } from '../../data/site'
import { prefersReducedMotion } from '../../utils/motion'

type LessonPinProps = {
  lessons: Lesson[]
  inverted?: boolean
}

export function LessonPin({ lessons, inverted }: LessonPinProps) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el || prefersReducedMotion()) return
    gsap.registerPlugin(ScrollTrigger)

    const items = gsap.utils.toArray<HTMLElement>('.js-lesson', el)
    const tweens = items.map((item) =>
      gsap.fromTo(
        item,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 82%' },
        },
      ),
    )

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill()
        tween.kill()
      })
    }
  }, [lessons])

  return (
    <div ref={root} className="space-y-20 md:space-y-28">
      {lessons.map((lesson) => (
        <article key={lesson.index} className="js-lesson grid gap-6 md:grid-cols-[120px_1fr] md:gap-16">
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">{lesson.index}</p>
          <div className="max-w-2xl">
            <h3 className="font-display text-3xl leading-tight md:text-4xl">{lesson.title}</h3>
            <p className={`mt-5 text-base leading-[1.75] md:text-[17px] ${inverted ? 'text-sand/85' : 'text-earth'}`}>
              {lesson.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
