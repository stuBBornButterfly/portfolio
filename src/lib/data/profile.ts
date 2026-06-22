import type { NavLink, Profile, Stat } from "@/types"

export const profile: Profile = {
  name: "Ayesha Siddika",
  initials: "AS",
  roles: [
    "Machine Learning Engineer",
    "Data Scientist",
    "NLP & LLM Engineer",
    
  ],
  tagline: "Building end-to-end ML systems over language, vision, and large models.",
  bio: "Computer Science student specializing in data science, machine learning, and deep learning. I build end-to-end ML pipelines covering data collection, preprocessing, feature engineering, model training, and evaluation across NLP, computer vision, and large language models. Proficient in Python, SQL, statistical analysis, and data visualization, with hands-on experience deploying models to production. Passionate about turning complex, real-world data into actionable and socially beneficial insights.",
  location: "Banasree, Dhaka-1219, Bangladesh",
  email: "ayeshasiddika17.sabr@gmail.com",
  github: "https://github.com/stuBBornButterfly",
  linkedin: "https://www.linkedin.com/in/ayesha-siddika-960140294/",
  portfolioUrl: "https://ayesha-siddika-portfolio.vercel.app",
  availability: "Available for opportunities",
  socials: [
    { label: "GitHub", href: "https://github.com/stuBBornButterfly", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ayesha-siddika-960140294/", icon: "linkedin" },
    { label: "Email", href: "mailto:ayeshasiddika17.sabr@gmail.com", icon: "mail" },
  ],
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export const stats: Stat[] = [
  { value: "6+", label: "ML & research projects" },
  { value: "3+", label: "Domains: NLP, CV, LLMs" },
  { value: "0.90", label: "PaperRAG retrieval MRR" },
  { value: "2026", label: "Graduated, CS @ BRAC" },
]
