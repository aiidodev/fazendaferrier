import { cn } from '../../utils/cn'

type SectionTitleProps = {
  kicker?: string
  title: string
  subtitle?: string
  light?: boolean
  className?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  kicker,
  title,
  subtitle,
  light,
  className,
  align = 'left',
}: SectionTitleProps) {
  return (
    <header
      className={cn(
        'max-w-4xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {kicker ? (
        <p
          className={cn(
            'mb-5 text-[11px] font-medium tracking-[0.32em] uppercase',
            light ? 'text-sand/70' : 'text-olive',
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-display text-[clamp(2.4rem,6vw,5.6rem)] leading-[0.92] font-medium tracking-[-0.02em]',
          light ? 'text-cream' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-6 max-w-md text-sm leading-relaxed tracking-wide',
            light ? 'text-sand/80' : 'text-earth',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  )
}
