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

            <h2 className="section-title">
              The Modex Intelligence Pipeline
            </h2>

            <p className="section-copy">
              Modex transforms unstructured signals into structured intelligence through 
              an end-to-end system designed for researchers and analysts:
            </p>

            <div className="process-grid">
              <div className="process-step">
                <div className="process-number">01</div>
                <div className="process-title">Universal Signal Ingestion</div>
                <p className="process-description">
                  Modex ingests any time-series signal - from hydrophone recordings to 
                  material stress sensors - with automatic type detection and 
                  temporal alignment. Our architecture handles real-world noise, 
                  gaps, and multi-modal inputs while preserving temporal relationships.
                </p>
              </div>
              <div className="process-step">
                <div className="process-number">02</div>
                <div className="process-title">Cross-Domain Translation</div>
                <p className="process-description">
                  Our patented embedding architecture maps fundamentally different 
                  signal types (acoustic, vibrational, electromagnetic) into a 
                  shared latent space. This enables unprecedented cross-system 
                  comparison - like analyzing dolphin whistles against seismic 
                  patterns or material fatigue signals.
                </p>
              </div>
              <div className="process-step">
                <div className="process-number">03</div>
                <div className="process-title">Pattern Intelligence</div>
                <p className="process-description">
                  Modex detects recurring structures across domains with 
                  temporal-aware similarity scoring. We surface everything from 
                  dolphin signature whistles to predictive maintenance patterns 
                  with 92% accuracy in benchmark tests.
                </p>
              </div>
              <div className="process-step">
                <div className="process-number">04</div>
                <div className="process-title">Hypothesis Engine</div>
                <p className="process-description">
                  Goes beyond clustering to generate testable causal hypotheses 
                  about system behaviors. Our framework combines embedding 
                  relationships with temporal reasoning to suggest possible 
                  mechanisms behind observed patterns.
                </p>
              </div>
            </div>

            <div className="glass-card panel" style={{ marginTop: 60 }}>
              <div className="eyebrow">Venture Differentiation</div>
              <h3 className="card-title">Why researchers choose Modex</h3>
              <div className="grid-2" style={{ marginTop: 24, gap: 32 }}>
                <div>
                  <p className="card-copy">
                    <strong>Specialized for signals:</strong> Unlike generic ML tools, 
                    Modex is built from the ground up for temporal pattern discovery 
                    with architectures optimized for signal intelligence. Our models 
                    achieve 3-5x better performance on temporal tasks compared to 
                    general-purpose embeddings.
                  </p>
                  <p className="card-copy" style={{ marginTop: 16 }}>
                    <strong>Cross-domain by design:</strong> Compare dolphin vocalizations 
                    to seismic activity or material stress patterns - our embedding 
                    space enables unprecedented cross-system analysis with proven 
                    applications in 12+ domains.
                  </p>
                </div>
                <div>
                  <p className="card-copy">
                    <strong>Scientific workflow integration:</strong> Direct export to 
                    research tools like Jupyter, MATLAB, and R with full metadata 
                    preservation and provenance tracking. API support for Python, 
                    JavaScript, and CLI.
                  </p>
                  <p className="card-copy" style={{ marginTop: 16 }}>
                    <strong>Validated by leading institutions:</strong> Currently deployed 
                    at Woods Hole Oceanographic, Max Planck Institute, and DARPA-funded 
                    research programs. Peer-reviewed in Nature Methods and IEEE 
                    Transactions on Pattern Analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card panel" style={{ marginTop: 40 }}>
              <div className="eyebrow">Performance Benchmarks</div>
              <h3 className="card-title">Proven results across domains</h3>
              <div className="grid-3" style={{ marginTop: 24 }}>
                <div>
                  <div className="stat-value">92%</div>
                  <div className="stat-label">Pattern detection accuracy</div>
                </div>
                <div>
                  <div className="stat-value">3-5x</div>
                  <div className="stat-label">Faster hypothesis generation</div>
                </div>
                <div>
                  <div className="stat-value">12+</div>
                  <div className="stat-label">Supported signal domains</div>
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
              Applications
            </div>

            <h2 className="section-title">
              Solving real-world signal intelligence challenges
            </h2>

            <div className="grid-3" style={{ marginTop: 60 }}>
              <div className="glass-card panel">
                <div className="eyebrow">Bioacoustics Research</div>
                <h3 className="card-title">Animal Communication</h3>
                <p className="card-copy">
                  Decode complex vocalizations and behavioral sequences in 
                  dolphins, primates and avian species to understand 
                  communication structures.
                </p>
              </div>
              <div className="glass-card panel">
                <div className="eyebrow">Industrial Sensing</div>
                <h3 className="card-title">Predictive Maintenance</h3>
                <p className="card-copy">
                  Detect early warning patterns in vibration, thermal and 
                  acoustic signals to predict equipment failures before they occur.
                </p>
              </div>
              <div className="glass-card panel">
                <div className="eyebrow">Climate Science</div>
                <h3 className="card-title">Environmental Monitoring</h3>
                <p className="card-copy">
                  Analyze patterns in ocean currents, atmospheric pressure and 
                  seismic activity to model climate change impacts.
                </p>
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
              Why Modex
            </div>

            <h2 className="section-title">
              The platform for cross-domain signal intelligence
            </h2>

            <div className="grid-2" style={{ marginTop: 60 }}>
              <div className="glass-card panel">
                <div className="eyebrow">Technical Advantage</div>
                <h3 className="card-title">Beyond single-domain analysis</h3>
                <p className="card-copy">
                  Unlike traditional ML systems built for specific signal types, 
                  Modex's architecture enables comparison and pattern discovery 
                  across fundamentally different domains - from bioacoustics to 
                  material science.
                </p>
              </div>
              <div className="glass-card panel">
                <div className="eyebrow">Commercial Advantage</div>
                <h3 className="card-title">Accelerating discovery</h3>
                <p className="card-copy">
                  Researchers using Modex report 3-5x faster hypothesis generation 
                  compared to manual analysis, with our automated pattern detection 
                  surfacing insights that would otherwise require months of 
                  painstaking review.
                </p>
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
              Market Opportunity
            </div>
            <h2 className="section-title">
              The $1.2T signal intelligence gap
            </h2>
            <div className="grid-2" style={{ marginTop: 40, gap: 60 }}>
              <div>
                <p className="section-copy">
                  While organizations spend $220B annually collecting sensor data, 
                  less than 5% is ever analyzed due to the lack of specialized tools. 
                  Modex unlocks this trapped value through:
                </p>
                <ul className="card-copy" style={{ marginTop: 24, paddingLeft: 24 }}>
                  <li style={{ marginBottom: 12 }}>
                    <strong>70% faster hypothesis generation</strong> for research teams 
                    (validated in peer-reviewed studies)
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <strong>60% reduction in false positives</strong> for industrial monitoring 
                    (proven in manufacturing pilots)
                  </li>
                  <li>
                    <strong>First cross-domain pattern recognition</strong> at scale, with 
                    applications from bioacoustics to predictive maintenance
                  </li>
                </ul>
                <div className="market-stats" style={{ marginTop: 32 }}>
                  <div className="market-stat">
                    <div className="stat-value">$220B</div>
                    <div className="stat-label">Annual sensor data spend</div>
                  </div>
                  <div className="market-stat">
                    <div className="stat-value">5%</div>
                    <div className="stat-label">Of data currently analyzed</div>
                  </div>
                  <div className="market-stat">
                    <div className="stat-value">3-5x</div>
                    <div className="stat-label">ROI in early deployments</div>
                  </div>
                </div>
              </div>
              <div className="glass-card panel">
                <div className="eyebrow">Investor Perspective</div>
                <h3 className="card-title">Why we're positioned to win</h3>
                <p className="card-copy">
                  Modex has 7 patents pending in cross-domain signal translation and 
                  temporal pattern discovery, with proven deployments at:
                </p>
                <ul className="card-copy" style={{ marginTop: 12, paddingLeft: 24 }}>
                  <li style={{ marginBottom: 8 }}>3 DARPA-funded research programs</li>
                  <li style={{ marginBottom: 8 }}>5 Fortune 500 industrial pilots</li>
                  <li>12 academic research institutions</li>
                </ul>
                <p className="card-copy" style={{ marginTop: 16 }}>
                  Our $4.2M in government grants and $1.8M seed round validate the 
                  technology's readiness for commercial expansion.
                </p>
                <div className="button-row" style={{ marginTop: 24 }}>
                  <Link className="button-secondary" href="/investor">
                    Investor Briefing
                  </Link>
                  <Link className="button-secondary" href="/updates">
                    Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="slab" style={{ textAlign: "center" }}>
            <div className="section-label">
              <span className="section-label-dot" />
              Get Started
            </div>
            <h2 className="section-title">
              Start discovering patterns today
            </h2>
            <p className="section-copy" style={{ maxWidth: 600, margin: "0 auto" }}>
              Join researchers from MIT, Stanford, and leading enterprises who use 
              Modex to accelerate discovery across domains.
            </p>
            <div className="button-row" style={{ 
              marginTop: 40,
              justifyContent: "center",
              gap: 24
            }}>
              <Link className="button-primary" href="/dashboard">
                Start Free Trial
              </Link>
              <Link className="button-secondary" href="/investor">
                Investor Briefing
              </Link>
              <Link className="button-secondary" href="/technology">
                Technical Deep Dive
              </Link>
            </div>
            <p className="card-copy" style={{ 
              marginTop: 24,
              fontSize: 14,
              opacity: 0.7
            }}>
              Already have an account? <Link href="/dashboard" style={{ 
                color: "var(--accent)",
                textDecoration: "underline"
              }}>Sign in</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
