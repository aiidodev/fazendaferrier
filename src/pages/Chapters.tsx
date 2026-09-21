import { ChapterFrame } from '../components/ui/ChapterFrame'
import { LessonPin } from '../components/ui/LessonPin'
import { chapters } from '../data/site'

export function HistoriaPage() {
  const chapter = chapters.historia
  return (
    <ChapterFrame chapter={chapter}>
      <LessonPin lessons={chapter.lessons} />
    </ChapterFrame>
  )
}

export function TerraPage() {
  const chapter = chapters.terra
  return (
    <ChapterFrame chapter={chapter} inverted>
      <LessonPin lessons={chapter.lessons} inverted />
    </ChapterFrame>
  )
}

export function RebanhoPage() {
  const chapter = chapters.rebanho
  return (
    <ChapterFrame chapter={chapter}>
      <LessonPin lessons={chapter.lessons} />
    </ChapterFrame>
  )
}

export function GranjaPage() {
  const chapter = chapters.granja
  return (
    <ChapterFrame chapter={chapter} inverted>
      <LessonPin lessons={chapter.lessons} inverted />
    </ChapterFrame>
  )
}

export function ProducaoPage() {
  const chapter = chapters.producao
  return (
    <ChapterFrame chapter={chapter}>
      <LessonPin lessons={chapter.lessons} />
    </ChapterFrame>
  )
}

export function OrigemPage() {
  const chapter = chapters.origem
  return (
    <ChapterFrame chapter={chapter} inverted>
      <LessonPin lessons={chapter.lessons} inverted />
      <p className="mt-20">
        <a
          href="https://jhenni.com.br"
          target="_blank"
          rel="noreferrer"
          data-cursor="DESCUBRA"
          data-cursor-kind="link"
          className="link-line hover:link-line-hover text-[11px] tracking-[0.32em] text-gold uppercase"
        >
          jhenni.com.br
        </a>
      </p>
    </ChapterFrame>
  )
}
