"use client"

import { useEffect, useState } from "react"

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "")
  const key = ids.join(",")

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!elements.length) return

    const visibility = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let best = ""
        let bestRatio = 0
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }
        if (best) setActive(best)
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: "-20% 0px -35% 0px" }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
