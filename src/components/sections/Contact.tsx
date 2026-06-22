"use client"

import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { useReveal } from "@/hooks/use-reveal"
import { profile } from "@/lib/data/profile"
import { cn } from "@/lib/utils"

const infoCards = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: "Location", value: profile.location },
]

export function Contact() {
  const { ref, revealed } = useReveal()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields before sending.")
      return
    }

    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error("Request failed")

      toast.success("Message sent", {
        description: "Thanks for reaching out, I'll reply soon.",
      })
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      toast.error("Could not send message", {
        description: "Please try again or email me directly.",
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div ref={ref} className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <SectionTitle
            eyebrow="Contact"
            title="Let's work together"
            subtitle="Open to internships, research, and ML roles. Drop me a message."
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div
            className={cn(
              "flex flex-col gap-4 transition-all duration-700 ease-out",
              revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: "120ms" }}
          >
            {infoCards.map((info) => {
              const Icon = info.icon
              const content = (
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-sky-400/30">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-teal-400/20 to-sky-400/20 text-sky-300">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="truncate text-sm text-foreground/90">{info.value}</div>
                  </div>
                </div>
              )
              return info.href ? (
                <a key={info.label} href={info.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              )
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className={cn(
              "flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-700 ease-out",
              revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-muted-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-muted-foreground">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the opportunity..."
                rows={5}
              />
            </div>

            <Button
              type="submit"
              disabled={sending}
              className="group mt-1 w-full bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 font-semibold text-background hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
