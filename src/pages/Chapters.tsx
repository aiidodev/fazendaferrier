import { ChapterFrame } from '../components/ui/ChapterFrame'
import { chapters } from '../data/site'

export function HistoriaPage() {
  return <ChapterFrame chapter={chapters.historia} />
}

export function TerraPage() {
  return <ChapterFrame chapter={chapters.terra} inverted experience="crop" />
}

export function RebanhoPage() {
  return <ChapterFrame chapter={chapters.rebanho} experience="cattle" />
}

export function GranjaPage() {
  return <ChapterFrame chapter={chapters.granja} inverted experience="poultry" />
}

export function ProducaoPage() {
  return <ChapterFrame chapter={chapters.producao} experience="crop" />
}

export function MetodoPage() {
  return <ChapterFrame chapter={chapters.metodo} inverted />
}

export function AguaPage() {
  return <ChapterFrame chapter={chapters.agua} />
}

export function MarcaPage() {
  return <ChapterFrame chapter={chapters.marca} inverted />
}

export function OrigemPage() {
  return (
    <ChapterFrame chapter={chapters.origem}>
      <p className="mt-16">
        <a
          href="https://jhenni.com.br"
          target="_blank"
          rel="noreferrer"
          data-cursor="DESCUBRA"
          data-cursor-kind="link"
          className="font-mono text-[11px] tracking-[0.32em] text-gold uppercase"
        >
          → jhenni.com.br
        </a>
      </p>
    </ChapterFrame>
  )
}

export function ContatoPage() {
  return (
    <ChapterFrame chapter={chapters.contato} inverted>
      <p className="mt-16 flex flex-wrap gap-8">
        <a
          href="mailto:contato@fazendaferrier.com.br"
          className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase"
          data-cursor="ENTRAR"
          data-cursor-kind="link"
        >
          contato@fazendaferrier.com.br
        </a>
        <a
          href="https://jhenni.com.br"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase"
        >
          jhenni.com.br
        </a>
      </p>
    </ChapterFrame>
  )
}
