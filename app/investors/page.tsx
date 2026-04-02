import Layout from "@/components/Layout";

export default function InvestorsPage() {
  return (
    <Layout>
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
            Investors
          </div>

          <h1 className="section-title">Machine intelligence infrastructure.</h1>
          <p className="section-copy">
            Modex is building a decision layer for prediction, inference, optimization,
            and adaptive systems. The long-term opportunity is infrastructure that helps
            teams move from static software into machine-backed operational judgment.
          </p>

          <div className="card-grid-2" style={{ marginTop: 28 }}>
            <div className="glass-card panel-lg">
              <div className="eyebrow">Why now</div>
              <h2 className="card-title">Software is becoming decision software.</h2>
              <p className="card-copy">
                The next layer after dashboards and SaaS is machine-backed reasoning and action guidance.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Business model</div>
              <h2 className="card-title">SaaS, API, and enterprise deployments.</h2>
              <p className="card-copy">
                Modex can scale from direct product usage into embedded intelligence and infrastructure access.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Defensibility</div>
              <h2 className="card-title">Better decisions compound.</h2>
              <p className="card-copy">
                The moat grows through data, outcomes, and product usage that refine prediction quality over time.
              </p>
            </div>

            <div className="glass-card panel-lg">
              <div className="eyebrow">Roadmap</div>
              <h2 className="card-title">Stabilize, ship, and deepen intelligence.</h2>
              <p className="card-copy">
                The immediate milestone is a reliable operator-facing product with the foundation for richer learning loops.
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
            <a className="nav-link" href="/technology">Technology</a>
            <a className="nav-link" href="/dashboard">Dashboard</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
