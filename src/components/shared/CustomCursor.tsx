"use client"

import { useCursor } from "@/hooks/use-cursor"

export function CustomCursor() {
  const { dotRef, ringRef, enabled, hovered } = useCursor(0.18)

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-sky-400 opacity-0 will-change-transform"
        style={{ transition: "opacity 200ms ease" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border opacity-0 will-change-transform"
        style={{
          scale: hovered ? "1.55" : "1",
          borderColor: hovered ? "rgba(129,140,248,0.9)" : "rgba(56,189,248,0.55)",
          backgroundColor: hovered ? "rgba(129,140,248,0.12)" : "transparent",
          boxShadow: hovered
            ? "0 0 24px rgba(129,140,248,0.45)"
            : "0 0 12px rgba(56,189,248,0.25)",
          transition:
            "scale 220ms cubic-bezier(0.22,1,0.36,1), border-color 220ms ease, background-color 220ms ease, box-shadow 220ms ease, opacity 200ms ease",
        }}
      />
    </>
  )
}
