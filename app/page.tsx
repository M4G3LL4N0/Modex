export default function Page() {
  return (
    <main className="page-shell">
      <section className="section hero-section" style={{ paddingTop: '120px' }}>
        <div className="hero-radial-gradient" />
        <div className="hero-glass-layer" />
        <div className="container" style={{ maxWidth: 940 }}>
          <div className="hero-content" style={{ textAlign: 'center' }}>
            <h1 className="hero-title">
              Machine intelligence<br/>
              <span className="gradient-text">for decisions.</span>
            </h1>

            <p className="hero-copy" style={{ margin: '32px auto 0', maxWidth: 640 }}>
              Modex is building a decision intelligence layer that transforms raw scenarios into
              scored judgment, confidence, and action.
            </p>

            <div style={{ marginTop: 48, display: "flex", gap: 16, justifyContent: 'center' }}>
              <a className="button-primary" href="/dashboard">Open Dashboard</a>
              <a className="button-secondary" href="/technology">View Tech</a>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: 120 }}>
          <div className="portfolio-container">
            <div className="grid-3" style={{ gap: 24 }}>
              <div className="venture-card">
                <div className="venture-bg" style={{ background: 'linear-gradient(135deg, #4361ee, #3f37c9)' }} />
                <div className="venture-overlay" />
                <div className="venture-content">
                  <div className="venture-pill" style={{ color: '#8bb0ff' }}>Infrastructure</div>
                  <h2 style={{ marginTop: 16, fontSize: 22, fontWeight: 700 }}>Prediction Layer</h2>
                  <p style={{ marginTop: 8, opacity: 0.8, fontSize: 15 }}>
                    Structured scoring and confidence intervals
                  </p>
                </div>
              </div>

              <div className="venture-card">
                <div className="venture-bg" style={{ background: 'linear-gradient(135deg, #7209b7, #4361ee)' }} />
                <div className="venture-overlay" />
                <div className="venture-content">
                  <div className="venture-pill" style={{ color: '#d8b9ff' }}>Intelligence</div>
                  <h2 style={{ marginTop: 16, fontSize: 22, fontWeight: 700 }}>Inference System</h2>
                  <p style={{ marginTop: 8, opacity: 0.8, fontSize: 15 }}>
                    Adaptive reasoning and judgment framing
                  </p>
                </div>
              </div>

              <div className="venture-card">
                <div className="venture-bg" style={{ background: 'linear-gradient(135deg, #f72585, #7209b7)' }} />
                <div className="venture-overlay" />
                <div className="venture-content">
                  <div className="venture-pill" style={{ color: '#ffa6d9' }}>Consumer</div>
                  <h2 style={{ marginTop: 16, fontSize: 22, fontWeight: 700 }}>Learning Loop</h2>
                  <p style={{ marginTop: 8, opacity: 0.8, fontSize: 15 }}>
                    Outcome-driven compound improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
    </main>
  );
}
