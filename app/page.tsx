export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06070b] text-white">
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <div className="font-bold tracking-widest">MODEX</div>
            <div className="text-xs text-white/50">
              Noaerth Ecosystem Venture
            </div>
          </div>

          <nav className="flex gap-4 text-sm text-white/70">
            <a href="/">Home</a>
            <a href="/technology">Technology</a>
            <a href="/investors">Investors</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold leading-tight">
          Machine intelligence for decisions.
        </h1>

        <p className="mt-6 text-white/70 max-w-xl">
          Modex is building an intelligence engine for prediction,
          inference, and decision systems.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/dashboard"
            className="bg-white text-black px-6 py-3 rounded-xl"
          >
            Open Dashboard
          </a>

          <a
            href="/technology"
            className="border border-white/20 px-6 py-3 rounded-xl"
          >
            View Technology
          </a>
        </div>
      </section>
    </main>
  );
}
