"use client"

import { useEffect, useRef, useState } from "react"

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, label, [data-cursor="hover"]'

export function useCursor(lerpFactor = 0.18) {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches
    if (isTouch) return
    setEnabled(true)

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: mouse.x, y: mouse.y }
    let raf = 0
    let visible = false

    const setOpacity = (value: string) => {
      if (dotRef.current) dotRef.current.style.opacity = value
      if (ringRef.current) ringRef.current.style.opacity = value
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (!visible) {
        visible = true
        setOpacity("1")
      }
      const target = e.target as Element | null
      setHovered(Boolean(target?.closest(HOVER_SELECTOR)))
    }

    const onLeave = () => {
      visible = false
      setOpacity("0")
    }

    const render = () => {
      ring.x += (mouse.x - ring.x) * lerpFactor
      ring.y += (mouse.y - ring.y) * lerpFactor
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)
    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [lerpFactor])

  return { dotRef, ringRef, enabled, hovered }
}
