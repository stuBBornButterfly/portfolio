"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { brandIcons, GithubIcon } from "@/components/shared/BrandIcons"
import { profile } from "@/lib/data/profile"

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = words[index]

    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), 1600)
      return () => clearTimeout(t)
    }
    if (deleting && text === "") {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? full.slice(0, prev.length - 1) : full.slice(0, prev.length + 1)
        )
      },
      deleting ? 45 : 95
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-16"
    >
<div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>
        </div>

        <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-4 flex min-h-[2.2em] items-center justify-center font-heading text-xl font-semibold sm:text-3xl md:text-4xl">
          <span className="bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            {typed}
          </span>
          <span className="ml-1 inline-block h-[1.1em] w-[3px] animate-pulse bg-sky-400 align-middle" />
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Get in Touch
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            <GithubIcon className="size-4" />
            View GitHub
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {profile.socials.map((social) => {
            const isMail = social.icon === "mail"
            const Icon = social.icon === "mail" ? Mail : brandIcons[social.icon]
            const href = isMail ? "#contact" : social.href
            const external = !isMail && !social.href.startsWith("mailto:")
            return (
              <a
                key={social.label}
                href={href}
                aria-label={social.label}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-sky-400/50 hover:text-sky-300"
              >
                <Icon className="size-4" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
