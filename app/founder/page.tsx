import Link from "next/link";

export default function FounderPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container nav-row">
          <div className="brand-wrap">
            <div className="brand-mark">MX</div>
            <div>
              <div className="brand-name">MODEX</div>
              <div className="brand-subtitle">
                Experimental Intelligence Platform
              </div>
            </div>
          </div>

          <nav className="nav-links">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/about">
              About
            </Link>
            <Link className="nav-link" href="/technology">
              Technology
            </Link>
            <Link className="nav-link" href="/investor">
              Investor
            </Link>
            <Link className="nav-link" href="/dashboard">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="slab">
            <div className="section-label">
              <span className="section-label-dot" />
              Founder Vision
            </div>

            <h1 className="section-title">
              Building a machine learning system that can help reveal how the
              world actually works.
            </h1>

            <p className="section-copy">
              Modex is being built from the belief that many real-world systems
              contain hidden structure that is difficult for humans to detect
              directly, but can become legible through representation, similarity,
              clustering, and experimentation.
            </p>

            <div className="feature-grid" style={{ marginTop: 28 }}>
              <article className="feature-card">
                <div className="eyebrow">Ambition</div>
                <h2 className="card-title">Go beyond narrow tools.</h2>
                <p className="card-copy">
                  The goal is not another generic interface or one-off model. The
                  goal is a broader discovery engine that can adapt across domains
                  and help surface structure in unknown systems.
                </p>
              </article>

              <article className="feature-card">
                <div className="eyebrow">Why This Matters</div>
                <h2 className="card-title">Unknown systems are everywhere.</h2>
                <p className="card-copy">
                  Animal communication, fluid interactions, material behavior,
                  temporal patterns, and other complex phenomena all contain
                  signals that are only partially understood. Modex is aimed at
                  that frontier.
                </p>
              </article>

              <article className="feature-card">
                <div className="eyebrow">Approach</div>
                <h2 className="card-title">Experimental intelligence infrastructure.</h2>
                <p className="card-copy">
                  Modex combines ingestion, embeddings, similarity analysis,
                  clustering, and hypothesis generation into a single evolving
                  system that can support experimentation rather than just static
                  prediction.
                </p>
              </article>

              <article className="feature-card">
                <div className="eyebrow">Long-Term Direction</div>
                <h2 className="card-title">A cross-domain discovery platform.</h2>
                <p className="card-copy">
                  The long-term vision is a platform that researchers, operators,
                  and experimental teams can use to explore hidden patterns in
                  real-world data across many categories of signal and interaction.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
