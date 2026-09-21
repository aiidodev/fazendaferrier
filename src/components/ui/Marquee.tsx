import { cn } from '../../utils/cn'

type MarqueeProps = {
  items: string[]
  className?: string
}

export function Marquee({ items, className }: MarqueeProps) {
  const row = [...items, ...items]

  return (
    <div className={cn('overflow-hidden border-y border-current/15', className)}>
      <div className="animate-marquee flex w-max gap-12 py-4 pr-12 motion-reduce:animate-none">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-[11px] tracking-[0.32em] uppercase opacity-70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
