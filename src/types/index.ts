import type { LucideIcon } from "lucide-react"

export type BrandIconName = "github" | "linkedin"

export interface SocialLink {
  label: string
  href: string
  icon: BrandIconName | "mail"
}

export interface NavLink {
  label: string
  href: `#${string}`
}

export interface Profile {
  name: string
  initials: string
  roles: string[]
  tagline: string
  bio: string
  location: string
  email: string
  github: string
  linkedin: string
  portfolioUrl: string
  availability: string
  socials: SocialLink[]
}

export interface Stat {
  value: string
  label: string
}

export interface ExperienceItem {
  role: string
  org: string
  location: string
  period: string
  bullets: string[]
}

export interface Project {
  title: string
  blurb: string
  period: string
  tech: string[]
  highlights: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

export interface EducationItem {
  school: string
  degree: string
  location: string
  period: string
  achievements?: string[]
}
