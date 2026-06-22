"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks, profile } from "@/lib/data/profile"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

const sectionIds = navLinks.map((link) => link.href.slice(1))

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#hero" aria-label="Back to top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-teal-400 via-sky-400 to-indigo-400 font-heading text-sm font-bold text-background">
            {profile.initials}
          </span>
          <span className="hidden font-heading text-sm font-semibold sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-teal-400 to-sky-400" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 transition-colors hover:bg-sky-400/20 md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-md text-foreground/80 transition-colors hover:bg-white/5 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-white/10 bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 ease-out md:hidden",
          open ? "max-h-96 border-b" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-white/5 text-foreground"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-md bg-gradient-to-r from-teal-400/15 to-sky-400/15 px-3 py-2.5 text-sm font-medium text-sky-200"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
