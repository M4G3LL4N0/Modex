export default function HomePage() {
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

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pill-row">
              <span className="pill">Prediction Infrastructure</span>
              <span className="pill">Machine Intelligence</span>
              <span className="pill">Decision Systems</span>
              <span className="pill">Feedback Loops</span>
            </div>

            <h1 className="hero-title">
              Machine intelligence
              <br />
              <span className="gradient-text">for decisions that matter.</span>
            </h1>

            <p className="hero-copy">
              Modex is building an intelligence engine for prediction, inference,
              optimization, and adaptive decision systems. The product direction
              is simple: turn raw scenarios into scored judgment and better action.
            </p>

            <div className="button-row" style={{ marginTop: 28 }}>
              <a className="button-primary" href="/dashboard">Open Dashboard</a>
              <a className="button-secondary" href="/technology">View Technology</a>
            </div>

            <div className="stat-row card-grid-3">
              <div className="glass-card panel">
                <div className="eyebrow">Category</div>
                <div className="card-copy" style={{ marginTop: 10, color: "rgba(255,255,255,0.9)" }}>
                  Machine intelligence infrastructure
                </div>
              </div>

              <div className="glass-card panel">
                <div className="eyebrow">Thesis</div>
                <div className="card-copy" style={{ marginTop: 10, color: "rgba(255,255,255,0.9)" }}>
                  Signals → inference → action
                </div>
              </div>

              <div className="glass-card panel">
                <div className="eyebrow">Motion</div>
                <div className="card-copy" style={{ marginTop: 10, color: "rgba(255,255,255,0.9)" }}>
                  Launch fast, learn faster
                </div>
              </div>
            </div>
          </div>

          <div className="engine-frame">
            <div className="engine-inner">
              <div className="eyebrow">Live system frame</div>
              <h2 className="card-title" style={{ marginTop: 10 }}>Modex Engine</h2>
              <p className="card-copy">
                A machine-backed decision layer that scores inputs, generates recommendations,
                and gets more useful as outcomes accumulate.
              </p>

              <div className="metric-list">
                <div className="metric-item">
                  <span className="metric-label">Confidence</span>
                  <span className="metric-value">91%</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Risk signal</span>
                  <span className="metric-value">Moderate</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Action priority</span>
                  <span className="metric-value">High</span>
                </div>
              </div>

              <div className="glass-card panel" style={{ marginTop: 18 }}>
                <div className="eyebrow">Recommended output</div>
                <p className="card-copy">
                  Prioritize this workflow, route resources here, and track the result
                  so the system gets sharper over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">
            <span className="section-label-dot" />
            Why Modex
          </div>

          <div className="card-grid-3">
            <div className="glass-card panel-lg">
              <div className="eyebrow">Prediction</div>
              <h3 className="card-title">Turn raw scenarios into scored judgment.</h3>
              <p className="card-copy">
                Modex helps operators move from intuition alone to machine-assisted scoring
                with clearer visibility into risk and confidence.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Inference</div>
              <h3 className="card-title">Generate machine-backed recommendations.</h3>
              <p className="card-copy">
                The engine provides a recommendation layer on top of scenario input,
                giving decisions structure instead of ambiguity.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Learning</div>
              <h3 className="card-title">Build toward an adaptive system.</h3>
              <p className="card-copy">
                Long term, Modex compounds value by learning from outcomes and improving
                how future decisions are framed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>Modex — A Noaerth Ecosystem Venture</div>
          <nav className="nav-links">
            <a className="nav-link" href="/technology">Technology</a>
            <a className="nav-link" href="/investors">Investors</a>
            <a className="nav-link" href="/dashboard">Dashboard</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
