export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white/10 bg-black/70 backdrop-blur-md z-50">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-white md:flex-row md:items-center md:justify-between">
        <a href="#hero" className="text-lg font-semibold tracking-wide">
          AYESHA SIDDIKA
        </a>

        <div className="flex flex-wrap gap-4 text-sm md:gap-6">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}