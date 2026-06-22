"use client"

import { useRipple } from "@/hooks/use-ripple"

export function ClickRipple() {
  const ripples = useRipple(600)

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9997] overflow-hidden"
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-burst absolute h-4 w-4 rounded-full"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </div>
  )
}
