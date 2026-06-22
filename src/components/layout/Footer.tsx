import { Mail } from "lucide-react"
import { brandIcons } from "@/components/shared/BrandIcons"
import { navLinks, profile } from "@/lib/data/profile"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#hero"
              className="font-heading text-lg font-bold bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent"
            >
              {profile.name}
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {profile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
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
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-sky-400/50 hover:text-sky-300"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
