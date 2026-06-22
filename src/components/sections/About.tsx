"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { useReveal } from "@/hooks/use-reveal"
import { profile, stats } from "@/lib/data/profile"
import { cn } from "@/lib/utils"

export function About() {
  const { ref, revealed } = useReveal()

  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div ref={ref} className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <SectionTitle eyebrow="About" title="Who I am" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
          <p
            className={cn(
              "text-base leading-relaxed text-muted-foreground transition-all duration-700 ease-out sm:text-lg",
              revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: "120ms" }}
          >
            {profile.bio}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.55)]",
                  revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${200 + i * 90}ms` }}
              >
                <div className="font-heading text-3xl font-bold bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
