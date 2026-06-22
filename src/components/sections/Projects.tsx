"use client"

import { ArrowUpRight, ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/shared/BrandIcons"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { useReveal } from "@/hooks/use-reveal"
import { projects } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

const MAX_TECH = 6

export function Projects() {
  const { ref, revealed } = useReveal()

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div ref={ref} className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <SectionTitle
            eyebrow="Projects"
            title="Things I've built"
            subtitle="A selection of ML, NLP, and full-stack work spanning research and production."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const primaryHref = project.demo ?? project.github
            const extra = project.tech.length - MAX_TECH
            return (
              <article
                key={project.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-400/40 hover:shadow-[0_12px_45px_-15px_rgba(56,189,248,0.5)]",
                  revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${100 + i * 90}ms` }}
              >
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 transition-transform duration-500 ease-out group-hover:scale-x-100",
                    project.featured ? "scale-x-100" : "scale-x-0"
                  )}
                />

                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-medium text-muted-foreground">
                    {project.period}
                  </span>
                  {primaryHref && (
                    <a
                      href={primaryHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-muted-foreground transition-colors group-hover:text-sky-300"
                    >
                      <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>

                <h3 className="mt-3 font-heading text-lg font-semibold leading-snug">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, MAX_TECH).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                  {extra > 0 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-muted-foreground">
                      +{extra}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-sky-300"
                    >
                      <GithubIcon className="size-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-sky-300"
                    >
                      <ExternalLink className="size-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
