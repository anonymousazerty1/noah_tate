'use client'

import { useRef, useEffect } from 'react'

interface ParallaxPhotoProps {
  src: string
  alt?: string
  speed?: number   // 0 = no parallax, 1 = full speed. Default 0.4
  height?: string  // CSS height of the container, default '70vh'
}

export default function ParallaxPhoto({
  src,
  alt = '',
  speed = 0.4,
  height = '70vh',
}: ParallaxPhotoProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const imgRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const img  = imgRef.current
    if (!wrap || !img) return

    const update = () => {
      const rect     = wrap.getBoundingClientRect()
      const vh       = window.innerHeight
      const progress = (vh - rect.top) / (vh + rect.height)
      const offset   = (progress - 0.5) * rect.height * speed
      img.style.transform = `translateY(${offset.toFixed(2)}px) scale(1.18)`
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [speed])

  return (
    <div
      ref={wrapRef}
      className="parallax-wrap"
      style={{ height }}
      aria-label={alt}
      role="img"
    >
      <div
        ref={imgRef}
        className="parallax-img"
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  )
}
