import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black px-6 py-6 text-center text-sm text-zinc-500">
        © 2026 AYESHA SIDDIKA. Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </>
  );
}