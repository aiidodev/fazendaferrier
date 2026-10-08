import { Link } from 'react-router-dom'
import { BrandMark } from '../brand/BrandMark'
import { ATLAS_LINKS } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink px-6 py-20 text-cream md:px-12 lg:px-20">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandMark className="h-14 w-14" />
          <p className="mt-6 font-display text-3xl">Fazenda Ferrier</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand/75">
            Propriedade em Minas Gerais. Gado, granja e lavoura.
          </p>
          <p className="mt-6 text-[11px] tracking-[0.22em] text-sand/70 uppercase">Minas Gerais · Brasil</p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-[13px] md:col-span-4" aria-label="Rodapé">
          {ATLAS_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-cursor="ENTRAR"
              data-cursor-kind="link"
              className="tracking-wide text-cream/80 hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3 text-[13px] md:col-span-3">
          <a href="https://jhenni.com.br" target="_blank" rel="noreferrer" className="text-cream/80 hover:text-cream">
            jhenni.com.br
          </a>
          <a href="mailto:contato@fazendaferrier.com.br" className="text-cream/80 hover:text-cream">
            contato@fazendaferrier.com.br
          </a>
        </div>
      </div>
      <p className="mt-16 text-[11px] tracking-[0.2em] text-sand/40 uppercase">JF · Tradição · Terra · Legado</p>
    </footer>
  )
}
