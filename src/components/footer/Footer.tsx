import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../../data/site'

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-cream md:px-12 lg:px-20">
      <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl">Fazenda Ferrier</p>
          <p className="mt-3 text-[11px] tracking-[0.28em] text-sand uppercase">Minas Gerais · Brasil</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Rodapé">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-cursor="ENTRAR"
              data-cursor-kind="link"
              className="link-line hover:link-line-hover text-[11px] tracking-[0.22em] uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-8 text-[11px] tracking-[0.22em] uppercase">
          <a
            href="https://jhenni.com.br"
            target="_blank"
            rel="noreferrer"
            data-cursor="DESCUBRA"
            data-cursor-kind="link"
            className="link-line hover:link-line-hover"
          >
            Jhenni
          </a>
          <a
            href="mailto:contato@fazendaferrier.com.br"
            data-cursor="ENTRAR"
            data-cursor-kind="link"
            className="link-line hover:link-line-hover"
          >
            Contato
          </a>
        </div>
      </div>
      <p className="mt-16 text-[10px] tracking-[0.2em] text-sand/50 uppercase">JF · Tradição · Terra · Legado</p>
    </footer>
  )
}
