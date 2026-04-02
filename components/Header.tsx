export function Header() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <a href="/" className="flex items-center gap-3">
        <div className="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl">
          <span className="text-sm font-semibold tracking-[0.28em] text-white/90">
            MX
          </span>
        </div>
        <div>
          <div className="text-sm font-semibold tracking-[0.25em] text-white/90">
            MODEX
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
            Noaerth Ecosystem Venture
          </div>
        </div>
      </a>

      <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
        <a href="#platform" className="transition hover:text-white">
          Platform
        </a>
        <a href="#use-cases" className="transition hover:text-white">
          Use Cases
        </a>
        <a href="#roadmap" className="transition hover:text-white">
          Roadmap
        </a>
        <a href="/technology" className="transition hover:text-white">
          Technology
        </a>
        <a href="/investors" className="transition hover:text-white">
          Investors
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="https://noaerth.com"
          className="hidden rounded-full border border-white/12 px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:text-white md:inline-flex"
        >
          Noaerth
        </a>
        <a
          href="/investors"
          className="hidden rounded-full border border-white/12 px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:text-white md:inline-flex"
        >
          Investors
        </a>
        <a
          href="#waitlist"
          className="rounded-full border border-blue-300/20 bg-white/[0.08] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.12]"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
