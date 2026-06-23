'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (fine && motion) setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const el = ref.current
    if (!el) return

    let raf: number

    const move = (e: MouseEvent) => {
      raf = requestAnimationFrame(() => {
        el.style.left = `${e.clientX}px`
        el.style.top  = `${e.clientY}px`
      })
    }

    const addHover = () => el.classList.add('h')
    const rmHover  = () => el.classList.remove('h')

    document.addEventListener('mousemove', move)

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [role="button"], label')) addHover()
    }
    const onOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [role="button"], label')) rmHover()
    }

    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
    }
  }, [enabled])

  if (!enabled) return null

  return <div ref={ref} className="cur" aria-hidden="true" />
}
