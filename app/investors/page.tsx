import Link from "next/link";

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-[#06070b] text-white">
      <header className="site-header">
        <div className="container nav-row">
          <div className="brand-wrap">
            <div className="brand-mark">MX</div>
            <div className="brand-name">MODEX</div>
          </div>

          <nav className="nav-links">
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="/technology">Technology</Link>
            <Link className="nav-link" href="/investors">Investors</Link>
            <Link className="nav-link" href="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h1 className="section-title">Investors</h1>
          <p className="section-copy">
            Modex is building a machine learning system for discovering patterns
            in real-world data across domains — from language to physics to
            complex systems.
          </p>
        </div>
      </section>
    </main>
  );
}
