"use client"

import { GraduationCap, MapPin, Trophy } from "lucide-react"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { useReveal } from "@/hooks/use-reveal"
import { education } from "@/lib/data/education"
import { cn } from "@/lib/utils"

export function Education() {
  const { ref, revealed } = useReveal()

  return (
    <section id="education" className="scroll-mt-20 py-24">
      <div ref={ref} className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <SectionTitle eyebrow="Education" title="Where I studied" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <div
              key={item.school}
              className={cn(
                "flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sky-400/30",
                revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${120 + i * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-teal-400/20 to-sky-400/20 text-sky-300">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold leading-snug">
                    {item.school}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.degree}</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-0.5 font-medium text-sky-200">
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  {item.location}
                </span>
              </div>

              {item.achievements && item.achievements.length > 0 && (
                <ul className="mt-5 space-y-3 border-t border-white/5 pt-5">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Trophy className="mt-0.5 size-4 shrink-0 text-indigo-300/80" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
