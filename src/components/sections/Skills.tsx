"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { useReveal } from "@/hooks/use-reveal"
import { skills } from "@/lib/data/skills"
import { cn } from "@/lib/utils"

export function Skills() {
  const { ref, revealed } = useReveal()

  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div ref={ref} className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <SectionTitle
            eyebrow="Skills"
            title="What I work with"
            subtitle="Tools and techniques across the ML lifecycle, from data to deployment."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((category, i) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className={cn(
                  "rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sky-400/30",
                  revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${120 + i * 90}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-teal-400/20 to-sky-400/20 text-sky-300">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-foreground/75 transition-all duration-200 hover:-translate-y-[3px] hover:border-sky-400/50 hover:text-sky-200 hover:shadow-[0_0_18px_-4px_rgba(56,189,248,0.65)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
