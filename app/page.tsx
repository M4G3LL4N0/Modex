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
              Decode complex systems
              <br />
              through signal intelligence
            </h1>

            <p className="hero-copy">
              Modex helps researchers and enterprises uncover actionable insights 
              from unstructured signals across animal, fluid, material, and unknown 
              systems - accelerating discovery and decision-making.
            </p>

            <div className="value-prop">
              <div className="value-prop-text">
                Turn unstructured signals into structured intelligence
              </div>
            </div>

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
            <div className="eyebrow">Product Overview</div>
            <h2 className="card-title">The Modex Pipeline</h2>
            <p className="card-copy">
              A complete workflow for signal intelligence - from raw data to 
              actionable insights.
            </p>

            <div className="pipeline-steps">
              <div className="pipeline-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <div className="step-title">Signal Collection</div>
                  <div className="step-description">
                    Ingest diverse signals from sensors, audio, video, and 
                    unstructured text
                  </div>
                </div>
              </div>
              <div className="pipeline-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <div className="step-title">Pattern Extraction</div>
                  <div className="step-description">
                    Transform raw signals into structured embeddings using 
                    proprietary ML models
                  </div>
                </div>
              </div>
              <div className="pipeline-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">Insight Generation</div>
                  <div className="step-description">
                    Detect patterns, clusters, and anomalies to generate 
                    actionable hypotheses
                  </div>
                </div>
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
              Market Context
            </div>

            <h2 className="section-title">
              Why signal intelligence matters now
            </h2>

            <p className="section-copy">
              With the explosion of IoT devices, sensors, and unstructured data, 
              organizations are drowning in signals but starved for insights. 
              Modex provides the missing layer to transform this data deluge 
              into competitive advantage.
            </p>

            <div className="market-stats">
              <div className="market-stat">
                <div className="stat-value">+40%</div>
                <div className="stat-label">Annual growth in sensor data</div>
              </div>
              <div className="market-stat">
                <div className="stat-value">$1.6T</div>
                <div className="stat-label">Potential value from IoT analytics</div>
              </div>
              <div className="market-stat">
                <div className="stat-value">80%</div>
                <div className="stat-label">Of data remains unstructured</div>
              </div>
            </div>
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
