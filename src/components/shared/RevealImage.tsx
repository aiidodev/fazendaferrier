import { type ImgHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type RevealImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapClassName?: string
}

export function RevealImage({ wrapClassName, className, alt = '', ...props }: RevealImageProps) {
  return (
    <div className={cn('js-image-reveal overflow-hidden', wrapClassName)}>
      <img
        alt={alt}
        className={cn(
          'js-image-reveal-inner h-full w-full scale-110 object-cover will-change-transform',
          className,
        )}
        {...props}
      />
    </div>
  )
}

export function ImageReveal(props: RevealImageProps) {
  return <RevealImage {...props} />
}
