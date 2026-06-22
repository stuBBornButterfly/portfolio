export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -left-32 top-[-8%] h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        style={{ animation: "float 18s ease-in-out infinite" }}
      />
      <div
        className="absolute right-[-6%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl"
        style={{ animation: "float 22s ease-in-out infinite", animationDelay: "-5s" }}
      />
      <div
        className="absolute left-[8%] top-[42%] h-80 w-80 rounded-full bg-purple-500/8 blur-3xl"
        style={{ animation: "float 20s ease-in-out infinite", animationDelay: "-9s" }}
      />
      <div
        className="absolute right-[10%] top-[58%] h-[26rem] w-[26rem] rounded-full bg-violet-500/8 blur-3xl"
        style={{ animation: "float 24s ease-in-out infinite", animationDelay: "-3s" }}
      />
      <div
        className="absolute bottom-[-6%] left-1/3 h-96 w-96 rounded-full bg-fuchsia-500/8 blur-3xl"
        style={{ animation: "float 19s ease-in-out infinite", animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_100%)]" />
    </div>
  )
}
