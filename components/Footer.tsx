export function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-8 lg:px-10">
      <div className="glass-panel flex flex-col items-center gap-6 rounded-[24px] border border-white/10 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <div className="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl">
            <span className="text-sm font-semibold tracking-[0.28em] text-white/90">
              MX
            </span>
          </div>
          <div className="text-sm text-white/60">
            A Noaerth Ecosystem Venture
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60 sm:gap-6">
          <a href="/" className="transition hover:text-white">
            Home
          </a>
          <a href="/technology" className="transition hover:text-white">
            Technology
          </a>
          <a href="/investors" className="transition hover:text-white">
            Investors
          </a>
          <a
            href="https://noaerth.com"
            className="transition hover:text-white"
          >
            Noaerth
          </a>
        </nav>
      </div>
    </footer>
  );
}
