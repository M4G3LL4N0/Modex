export default function Page() {
  return (
    <main className="page-shell">
      <section className="section hero-section" style={{ paddingTop: '120px' }}>
        <div className="container grid-2">
          <div className="hero-content">
            <h1 className="hero-title">
              Machine intelligence<br/>
              <span className="gradient-text">for decisions.</span>
            </h1>

            <p className="hero-copy">
              Modex is building a decision intelligence layer that transforms raw scenarios into
              scored judgment, confidence, and action.
            </p>

            <div style={{marginTop:30,display:"flex",gap:12}}>
              <a className="button-primary" href="/dashboard">Open Dashboard</a>
              <a className="button-secondary" href="/technology">View Tech</a>
            </div>

            <div className="grid-3" style={{marginTop:40}}>
              <div className="glass" style={{padding:20}}>
                Prediction layer
              </div>
              <div className="glass" style={{padding:20}}>
                Inference system
              </div>
              <div className="glass" style={{padding:20}}>
                Learning loop
              </div>
            </div>
          </div>

          <div className="engine">
            <div style={{opacity:.6,fontSize:12}}>LIVE ENGINE</div>

            <h2 style={{marginTop:10}}>Modex Core</h2>

            <div style={{marginTop:20,display:"grid",gap:12}}>
              <div className="metric">
                <span>Confidence</span>
                <span>91%</span>
              </div>

              <div className="metric">
                <span>Risk</span>
                <span>Moderate</span>
              </div>

              <div className="metric">
                <span>Action</span>
                <span>Proceed</span>
              </div>
            </div>

            <div className="glass" style={{marginTop:20,padding:16}}>
              Recommendation: Continue execution with monitored feedback loop.
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
