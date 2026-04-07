import Link from "next/link";

export default function AboutPage() {
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
              About Modex
            </div>

            <h1 className="section-title">
              A machine learning system for discovering hidden structure.
            </h1>

            <p className="section-copy">
              Modex is an experimental intelligence platform designed to ingest
              signals, represent them computationally, compare relationships,
              detect clusters, and generate early hypotheses across complex
              domains.
            </p>

            <div className="feature-grid" style={{ marginTop: 28 }}>
              <article className="feature-card">
                <div className="eyebrow">Mission</div>
                <h2 className="card-title">Learn the world through patterns.</h2>
                <p className="card-copy">
                  Modex is built around the idea that many systems in the world
                  contain hidden recurring structures that can be surfaced
                  through representation, similarity, clustering, and discovery.
                </p>
              </article>

              <article className="feature-card">
                <div className="eyebrow">Scope</div>
                <h2 className="card-title">Cross-domain experimental research.</h2>
                <p className="card-copy">
                  The long-term direction includes animal communication, fluid
                  and water dynamics, material interactions, sequence systems,
                  and unknown signal spaces where structure is not yet well
                  understood.
                </p>
              </article>

              <article className="feature-card">
                <div className="eyebrow">Approach</div>
                <h2 className="card-title">Ingest, embed, compare, cluster.</h2>
                <p className="card-copy">
                  Modex treats signal discovery as a structured machine learning
                  problem: bring in data, convert it into stable embeddings,
                  compare it against known and emerging structures, then group
                  and interpret patterns.
                </p>
              </article>

              <article className="feature-card">
                <div className="eyebrow">Vision</div>
                <h2 className="card-title">A platform for experimental intelligence.</h2>
                <p className="card-copy">
                  The goal is not to build a narrow one-off model, but a broader
                  discovery platform that can help reveal how real-world systems
                  behave, communicate, and interact.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
