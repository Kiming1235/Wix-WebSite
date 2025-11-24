import useResizeObserver from "@react-hook/resize-observer"
import { useLayoutEffect, useState } from "react"
import '@/components/ui/image.css'

type Size = {
  width: number
  height: number
}

export const useSize = (ref: React.RefObject<HTMLElement>, threshold: number = 50): Size | null => {

  const [size, setSize] = useState<Size | null>(null)
  const [isClient, setIsClient] = useState(false)

  const updateSize = (newSize: Size): void => {
    if (!size) {
      setSize(newSize)
      return
    }

    const widthDiff = Math.abs(newSize.width - size.width)
    const heightDiff = Math.abs(newSize.height - size.height)

    if (widthDiff > threshold || heightDiff > threshold) {
      setSize(newSize)
    }
  }

  // Ensure we only run browser APIs on the client
  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  useLayoutEffect(() => {
      if (isClient && ref.current) {
          const { width, height } = ref.current.getBoundingClientRect()
          updateSize({ width, height })
      }
  }, [ref.current, size, isClient])

  useResizeObserver(ref, (entry) => {
      if (isClient) {
        const { width, height } = entry.contentRect
        if (size && size.width !== width || size.height !== height) {
          updateSize({ width, height })
        }
      }
  })

  return size
}
