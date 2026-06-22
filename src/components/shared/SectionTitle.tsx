import { cn } from "@/lib/utils"

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-300/80">
          <span className="h-px w-6 bg-gradient-to-r from-teal-400 to-sky-400" />
          {eyebrow}
        </span>
      )}

      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
