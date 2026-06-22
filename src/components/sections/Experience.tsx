"use client"

import { MapPin } from "lucide-react"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { useReveal } from "@/hooks/use-reveal"
import { experience } from "@/lib/data/experience"
import { cn } from "@/lib/utils"

export function Experience() {
  const { ref, revealed } = useReveal()

  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div ref={ref} className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <SectionTitle eyebrow="Experience" title="Where I've worked" />
        </div>

        <ol className="relative mt-12 border-l border-white/10 pl-8">
          {experience.map((item, i) => (
            <li
              key={`${item.org}-${item.role}`}
              className={cn(
                "relative pb-10 transition-all duration-700 ease-out last:pb-0",
                revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <span className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-background">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-teal-400 to-sky-400 ring-4 ring-sky-400/15" />
              </span>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-sky-400/30">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold">{item.role}</h3>
                  <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
                    {item.period}
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  <span className="text-foreground/80">{item.org}</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {item.location}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-teal-400 to-sky-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
