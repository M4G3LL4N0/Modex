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
              <span className="pill">Inference Layer</span>
              <span className="pill">Decision Systems</span>
              <span className="pill">Adaptive Intelligence</span>
            </div>

            <h1 className="hero-title">
              Machine intelligence
              <br />
              <span className="gradient-text">for decisions that matter.</span>
            </h1>

            <p className="hero-copy">
              Modex is a premium machine-intelligence venture focused on prediction,
              inference, optimization, and long-term adaptive decision systems.
            </p>

            <div className="button-row" style={{ marginTop: 30 }}>
              <a className="button-primary" href="/dashboard">Open Dashboard</a>
              <a className="button-secondary" href="/technology">Explore Technology</a>
            </div>

            <div className="stat-row card-grid-3">
              <div className="glass-card panel">
                <div className="eyebrow">Category</div>
                <div className="card-copy" style={{ marginTop: 10, color: "rgba(255,255,255,0.92)" }}>
                  Decision intelligence infrastructure
                </div>
              </div>

              <div className="glass-card panel">
                <div className="eyebrow">Core thesis</div>
                <div className="card-copy" style={{ marginTop: 10, color: "rgba(255,255,255,0.92)" }}>
                  Signals become scored judgment
                </div>
              </div>

              <div className="glass-card panel">
                <div className="eyebrow">Long-term moat</div>
                <div className="card-copy" style={{ marginTop: 10, color: "rgba(255,255,255,0.92)" }}>
                  Outcome-driven learning loops
                </div>
              </div>
            </div>
          </div>

          <div className="engine-frame">
            <div className="engine-inner">
              <div className="eyebrow">System preview</div>
              <h2 className="card-title" style={{ marginTop: 10 }}>Modex Engine</h2>
              <p className="card-copy">
                A glassy, operator-facing decision layer for turning scenario input into
                scored output, confidence estimates, and recommended next action.
              </p>

              <div className="metric-list">
                <div className="metric-item">
                  <span className="metric-label">Confidence</span>
                  <span className="metric-value">91%</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Risk framing</span>
                  <span className="metric-value">Moderate</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Action priority</span>
                  <span className="metric-value">High</span>
                </div>
              </div>

              <div className="glass-card panel" style={{ marginTop: 18 }}>
                <div className="eyebrow">Recommendation</div>
                <p className="card-copy">
                  Proceed with structured caution, monitor outcomes, and feed results back
                  into the system to improve future predictions.
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
            Core System
          </div>

          <h2 className="section-title">A premium operating layer for machine-backed judgment.</h2>
          <p className="section-copy">
            Modex is being shaped as a refined intelligence product: calm, decisive,
            high-signal, and designed to feel more like infrastructure than an app.
          </p>

          <div className="card-grid-3" style={{ marginTop: 28 }}>
            <div className="glass-card panel-lg">
              <div className="eyebrow">Prediction</div>
              <h3 className="card-title">Turn scenarios into scored outputs.</h3>
              <p className="card-copy">
                The system converts raw input into structured judgment with clearer visibility into likely direction.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Inference</div>
              <h3 className="card-title">Generate recommendations with context.</h3>
              <p className="card-copy">
                Modex adds confidence and risk framing so action is guided, not improvised.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Learning</div>
              <h3 className="card-title">Evolve toward adaptive decision systems.</h3>
              <p className="card-copy">
                Over time the platform can deepen into memory, outcomes, and stronger intelligence loops.
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
