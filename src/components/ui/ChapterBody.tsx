import type { Chapter } from '../../data/site'
import { LessonPin } from './LessonPin'
import { cn } from '../../utils/cn'

type ChapterBodyProps = {
  chapter: Chapter
  inverted?: boolean
}

export function ChapterBody({ chapter, inverted }: ChapterBodyProps) {
  return (
    <div className="space-y-24 md:space-y-32">
      <LessonPin lessons={chapter.lessons} inverted={inverted} />

      {chapter.essays.map((essay) => (
        <section key={essay.title} className="grid gap-8 border-t border-current/10 pt-16 md:grid-cols-12">
          <h3 className="font-display text-3xl leading-tight md:col-span-4 md:text-4xl">{essay.title}</h3>
          <p
            className={cn(
              'max-w-2xl text-base leading-[1.8] md:col-span-7 md:col-start-6 md:text-[17px]',
              inverted ? 'text-sand/85' : 'text-earth',
            )}
          >
            {essay.body}
          </p>
        </section>
      ))}

      <section>
        <p className="mb-10 text-[11px] tracking-[0.28em] text-gold uppercase">No campo</p>
        <dl className="grid border border-current/12 md:grid-cols-3">
          {chapter.glossary.map((item) => (
            <div key={item.term} className="border-current/12 p-6 md:border-r md:p-8 md:last:border-r-0">
              <dt className="text-[11px] tracking-[0.22em] text-gold uppercase">{item.term}</dt>
              <dd className={cn('mt-4 text-sm leading-relaxed', inverted ? 'text-sand/80' : 'text-earth')}>
                {item.def}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
