import { cn } from '../../utils/cn'

type BrandMarkProps = {
  className?: string
  draw?: boolean
  tone?: 'light' | 'dark' | 'iron'
}

export function BrandMark({ className, draw = false, tone = 'light' }: BrandMarkProps) {
  const stroke =
    tone === 'dark' ? '#13241c' : tone === 'iron' ? '#c4b198' : '#f3eee6'

  return (
    <svg
      viewBox="0 0 200 200"
      className={cn('overflow-visible', className)}
      aria-hidden="true"
    >
      <circle
        className={draw ? 'js-brand-ring' : undefined}
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
      />
      <circle
        className={draw ? 'js-brand-inner' : undefined}
        cx="100"
        cy="100"
        r="76"
        fill="none"
        stroke={stroke}
        strokeWidth="0.6"
        opacity="0.7"
      />
      <path
        className={draw ? 'js-brand-j' : undefined}
        d="M78 58v78c0 16-10 24-26 20"
        fill="none"
        stroke={stroke}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <path
        className={draw ? 'js-brand-f' : undefined}
        d="M104 58v88M104 58h46M104 100h36"
        fill="none"
        stroke={stroke}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
