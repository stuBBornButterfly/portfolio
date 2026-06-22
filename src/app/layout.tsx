import type { Metadata } from "next"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/layout/NavBar"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/shared/CustomCursor"
import { ClickRipple } from "@/components/shared/ClickRipple"
import { SiteBackground } from "@/components/shared/SiteBackground"
import { Toaster } from "@/components/ui/sonner"
import { profile } from "@/lib/data/profile"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const title = `${profile.name} | Machine Learning Engineer`
const description =
  "Ayesha Siddika is a machine learning and deep learning engineer building end-to-end ML pipelines across NLP, computer vision, and large language models."

export const metadata: Metadata = {
  metadataBase: new URL(profile.portfolioUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Ayesha Siddika",
    "Machine Learning Engineer",
    "Data Scientist",
    "Deep Learning",
    "NLP",
    "LLM",
    "Computer Vision",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.portfolioUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.portfolioUrl,
    siteName: `${profile.name} - Portfolio`,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@ayesha_siddika",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark scroll-smooth ${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="flex min-h-dvh flex-col font-sans">
        <SiteBackground />
        <CustomCursor />
        <ClickRipple />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  )
}
