import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container nav-row">
          <div className="brand-wrap">
            <div className="brand-mark">MX</div>
            <div>
              <div className="brand-name">MODEX</div>
              <div className="brand-subtitle">Noaerth Ecosystem Venture</div>
            </div>
          </div>

          <nav className="nav-links">
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="/technology">Technology</Link>
            <Link className="nav-link" href="/portfolio">Portfolio</Link>
            <Link className="nav-link" href="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="section-label">
            <span className="section-label-dot" />
            Technology
          </div>

          <h1 className="section-title">The Modex Engine</h1>
          <p className="section-copy">
            Modex is an experimental machine learning platform for discovering hidden structure
            in complex systems across domains.
          </p>

          <div className="glass-card panel-lg" style={{ marginTop: 32 }}>
            <div className="grid-2">
              <div>
                <h2 className="card-title">Core Architecture</h2>
                <p className="card-copy">
                  Modex combines signal ingestion, deterministic embedding, similarity comparison,
                  pattern clustering, and hypothesis generation into a unified experimental platform.
                </p>
              </div>
              <div className="system-stats">
                <div className="metric">
                  <div className="metric-label">Signals</div>
                  <div className="metric-value">1,024+</div>
                </div>
                <div className="metric">
                  <div className="metric-label">Clusters</div>
                  <div className="metric-value">256+</div>
                </div>
                <div className="metric">
                  <div className="metric-label">Hypotheses</div>
                  <div className="metric-value">128+</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-grid-2" style={{ marginTop: 28 }}>
            <div className="glass-card panel-lg">
              <div className="eyebrow">Signal Layer</div>
              <h2 className="card-title">Input, context, and structured signals.</h2>
              <p className="card-copy">
                Accepts scenario input, operating context, and future domain-specific data sources.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Inference Layer</div>
              <h2 className="card-title">Scores, confidence, and risk framing.</h2>
              <p className="card-copy">
                Produces machine-backed outputs that help decisions become more structured and repeatable.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Decision Layer</div>
              <h2 className="card-title">Recommendations for action.</h2>
              <p className="card-copy">
                Converts model output into a usable recommendation layer for founders, operators, and teams.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Learning Loop</div>
              <h2 className="card-title">Outcome-driven improvement.</h2>
              <p className="card-copy">
                The long-term path is a system that compounds value as real outcomes are captured and compared.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>Modex — A Noaerth Ecosystem Venture</div>
          <nav className="nav-links">
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="/portfolio">Portfolio</Link>
            <Link className="nav-link" href="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
