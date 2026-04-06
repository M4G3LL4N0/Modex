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
            Modex is building a platform for experimental discovery across complex systems,
            with initial focus on animal communication, fluid dynamics, material interactions,
            and unknown signal spaces.
          </p>

          <div className="glass-card panel-lg" style={{ marginTop: 32 }}>
            <h2 className="card-title">Thesis</h2>
            <p className="card-copy">
              Hidden structure exists in many real-world systems, but current tools are fragmented
              and domain-specific. Modex provides a general experimental discovery engine.
            </p>
          </div>

          <div className="glass-card panel-lg" style={{ marginTop: 16 }}>
            <h2 className="card-title">Why Now</h2>
            <p className="card-copy">
              Modern machine learning makes representation, comparison, and discovery more feasible,
              while demand grows for systems that can extract structure from unknown signals.
            </p>
          </div>

          <div className="glass-card panel-lg" style={{ marginTop: 16 }}>
            <h2 className="card-title">Moat</h2>
            <p className="card-copy">
              Proprietary experiment workflows, domain adaptation, signal datasets,
              discovery UX, and future multimodal pattern systems create defensibility.
            </p>
          </div>

          <div className="glass-card panel-lg" style={{ marginTop: 16 }}>
            <h2 className="card-title">Platform Vision</h2>
            <p className="card-copy">
              Modex aims to become the cross-domain discovery layer for experimental research,
              starting with focused domains and expanding into broader applications.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
