"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-container">
        <div className="hero-backdrop" />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

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

        <div className="container hero-inner">
          <div className="hero-copy-wrap">
            <div className="section-label">
              <span className="section-label-dot" />
              Machine Learning Discovery Engine
            </div>

            <h1 className="hero-title">
              Discover hidden patterns
              <br />
              across real-world systems.
            </h1>

            <p className="hero-copy">
              Modex is an experimental machine learning platform for ingesting
              signals, embedding them, comparing them, clustering them, and
              generating early hypotheses across complex domains.
            </p>

            <div className="button-row hero-actions">
              <Link className="button-primary" href="/dashboard">
                Explore Experiments
              </Link>
              <Link className="button-secondary" href="/technology">
                View Technology
              </Link>
            </div>
          </div>

          <div className="hero-panel glass-card panel-lg">
            <div className="eyebrow">System Preview</div>
            <h2 className="card-title">Modex Core</h2>
            <p className="card-copy">
              Ingest signals. Embed structure. Compare relationships. Detect
              clusters. Generate hypotheses.
            </p>

            <div className="metric-list">
              <div className="metric-item">
                <span className="metric-label">Signal Ingestion</span>
                <span className="metric-value">Active</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">Embedding Layer</span>
                <span className="metric-value">64-dim</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">Pattern Discovery</span>
                <span className="metric-value">Enabled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="slab">
            <div className="section-label">
              <span className="section-label-dot" />
              Core Thesis
            </div>

            <h2 className="section-title">
              A platform for learning the structure of reality.
            </h2>

            <p className="section-copy">
              Modex is built to study unknown and partially understood systems by
              turning raw signals into structured representations that can be
              compared, grouped, and explored computationally.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">
            <span className="section-label-dot" />
            Research Tracks
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="eyebrow">Animal Communication</div>
              <h3 className="card-title">Signal pattern decoding</h3>
              <p className="card-copy">
                Analyze recurrent structures in vocal, behavioral, and sequence
                signals.
              </p>
            </article>

            <article className="feature-card">
              <div className="eyebrow">Fluid / Water Dynamics</div>
              <h3 className="card-title">Flow and interaction modeling</h3>
              <p className="card-copy">
                Explore emergent pattern relationships in motion, turbulence,
                and response.
              </p>
            </article>

            <article className="feature-card">
              <div className="eyebrow">Material Interactions</div>
              <h3 className="card-title">Physical response mapping</h3>
              <p className="card-copy">
                Compare interactions, transitions, and structured reaction
                signals across systems.
              </p>
            </article>

            <article className="feature-card">
              <div className="eyebrow">Unknown Signal Discovery</div>
              <h3 className="card-title">Cross-domain clustering</h3>
              <p className="card-copy">
                Detect similarity, cluster recurring structures, and generate
                early hypotheses.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="slab">
            <div className="section-label">
              <span className="section-label-dot" />
              How Modex Works
            </div>

            <div className="process-grid">
              <div className="process-step">
                <div className="process-number">01</div>
                <div className="process-title">Ingest</div>
              </div>
              <div className="process-step">
                <div className="process-number">02</div>
                <div className="process-title">Embed</div>
              </div>
              <div className="process-step">
                <div className="process-number">03</div>
                <div className="process-title">Compare</div>
              </div>
              <div className="process-step">
                <div className="process-number">04</div>
                <div className="process-title">Cluster</div>
              </div>
              <div className="process-step">
                <div className="process-number">05</div>
                <div className="process-title">Hypothesize</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
