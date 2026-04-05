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
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/technology">Technology</a>
            <a className="nav-link" href="/investors">Investors</a>
            <a className="nav-link" href="/dashboard">Dashboard</a>
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
            Modex is designed as a machine intelligence layer that transforms scenario input
            into predictions, recommendations, and eventually feedback-driven learning.
          </p>

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
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/investors">Investors</a>
            <a className="nav-link" href="/dashboard">Dashboard</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
