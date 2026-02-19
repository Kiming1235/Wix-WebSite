import { forwardRef, type ImgHTMLAttributes, useEffect, useState } from 'react'
import './image.css'

const FALLBACK_IMAGE_URL = 'https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fittingType?: 'fill' | 'fit'
  originWidth?: number
  originHeight?: number
  focalPointX?: number
  focalPointY?: number
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, ...props }, ref) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  if (!src) {
    return <div data-empty-image ref={ref as any} {...props} />
  }

  return (
    <img
      ref={ref}
      src={imgSrc}
      {...props}
      onError={() => {
        setImgSrc(FALLBACK_IMAGE_URL)
      }}
    />
  )
})

Image.displayName = 'Image'
