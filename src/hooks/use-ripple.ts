"use client"

import { useCallback, useEffect, useState } from "react"

export interface Ripple {
  id: number
  x: number
  y: number
}

export function useRipple(duration = 600) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const remove = useCallback((id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id))
  }, [])

  useEffect(() => {
    let counter = 0

    const onPointerDown = (e: PointerEvent) => {
      const id = counter++
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }])
      window.setTimeout(() => remove(id), duration)
    }

    window.addEventListener("pointerdown", onPointerDown)
    return () => window.removeEventListener("pointerdown", onPointerDown)
  }, [duration, remove])

  return ripples
}
