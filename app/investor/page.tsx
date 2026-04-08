import Link from "next/link";

export default function InvestorPage() {
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
            <Link className="nav-link" href="/founder">
              Founder
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
              Investor Thesis
            </div>

            <h1 className="section-title">
              Modex is building a cross-domain discovery engine for hidden
              structure in real-world systems.
            </h1>

            <p className="section-copy">
              The core thesis is that many valuable real-world signals remain
              underinterpreted because current tooling is fragmented, narrow, or
              domain-specific. Modex is designed as a broader experimental
              machine learning platform for ingesting, embedding, comparing,
              clustering, and hypothesizing across unknown systems.
            </p>

            <div className="feature-grid" style={{ marginTop: 28 }}>
              <article className="feature-card">
                <div className="eyebrow">Why Now</div>
                <h2 className="card-title">Representation and comparison are now practical.</h2>
                <p className="card-copy">
                  Modern ML makes it increasingly feasible to represent signals
                  computationally and compare them across large spaces of data,
                  creating the basis for discovery systems rather than one-off
                  classifiers.
                </p>
              </article>

              <article className="feature-card">
                <div className="eyebrow">Wedge</div>
                <h2 className="card-title">Experimental signal discovery.</h2>
                <p className="card-copy">
                  Modex starts as an experimentation platform for structured
                  discovery across domains like animal communication, fluids,
                  materials, and unknown signal families.
                </p>
              </article>

              <article className="feature-card">
                <div className="eyebrow">Moat</div>
                <h2 className="card-title">Workflow, data, and discovery infrastructure.</h2>
                <p className="card-copy">
                  Defensibility can grow through domain-specific experiment
                  flows, proprietary signal datasets, cross-domain pattern
                  tooling, and a discovery UX that becomes more useful as usage
                  compounds.
                </p>
              </article>

              <article className="feature-card">
                <div className="eyebrow">Business Model</div>
                <h2 className="card-title">Platform, research tooling, and APIs.</h2>
                <p className="card-copy">
                  The long-term business can expand through research tooling,
                  enterprise experimentation workflows, vertical modules, and API
                  access to discovery infrastructure.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
