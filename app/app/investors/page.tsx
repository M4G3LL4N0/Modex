import Link from 'next/link'

export default function InvestorsPage() {
  return (
    <div className="glass-panel">
      {/* HERO */}
      <section className="section-ring">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
            Machine intelligence infrastructure
          </h1>
          <p className="mt-6 text-xl text-blue-100">
            Modex is building a decision intelligence layer that learns from real-world outcomes.
          </p>
          <p className="mt-4 text-blue-200">
            We combine prediction, inference and optimization into a single platform that continuously improves from operational feedback.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="section-ring mt-24">
        <h2 className="text-3xl font-bold text-white mb-8">
          The future is decision systems
        </h2>
        
        
        <div className="grid grid-cols-1 gap-8 text-blue-100">
          <p>
            Enterprise technology has evolved from software to dashboards to intelligent systems. 
            Modex provides the infrastructure layer that turns business outcomes into adaptive intelligence.
          </p>
          
          <p>
            We're building the decision fabric where every operational workflow connects to machine reasoning.
          </p>
        </div>
      </section>

      {/* MARKET */}
      <section className="section-ring mt-24">
        <h2 className="text-3xl font-bold text-white mb-12">
          Market opportunity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Decision intelligence</h3>
            <p className="text-blue-200">
              Every company will require continuous decision optimization across all operations.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Operational AI</h3>
            <p className="text-blue-200">
              The $5T+ operational expenditure market is moving to autonomous optimization.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Autonomous systems</h3>
            <p className="text-blue-200">
              Every workflow ultimately becomes a prediction problem.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="section-ring mt-24">
        <h2 className="text-3xl font-bold text-white mb-12">
          Product architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Signal intake</h3>
            <p className="text-blue-200">
              Unified pipeline for structured and unstructured data across all business systems.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Inference layer</h3>
            <p className="text-blue-200">
              Probabilistic reasoning engine that suggests optimal actions.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Action layer</h3>
            <p className="text-blue-200">
              Executes decisions across operational systems while maintaining guardrails.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Feedback loop</h3>
            <p className="text-blue-200">
              Continuous learning from real-world outcomes to improve future decisions.
            </p>
          </div>
        </div>
      </section>

      {/* DEFENSIBILITY */}
      <section className="section-ring mt-24">
        <h2 className="text-3xl font-bold text-white mb-8">
          Defensibility
        </h2>
        
        <div className="grid grid-cols-1 gap-6 text-blue-100">
          <div className="flex items-start">
            <div className="bg-blue-900/30 px-3 py-1 rounded mr-4">1</div>
            <p>Data moat from continuous outcome capture across enterprise operations</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-900/30 px-3 py-1 rounded mr-4">2</div>
            <p>Cross-domain intelligence that compounds across different business functions</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-900/30 px-3 py-1 rounded mr-4">3</div>
            <p>Enterprise switching costs increase as systems become autonomous</p>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="section-ring mt-24">
        <h2 className="text-3xl font-bold text-white mb-8">
          Business model
        </h2>
        
        <div className="grid grid-cols-1 gap-6 text-blue-100">
          <p>
            SaaS pricing based on decision volume and value capture.
          </p>
          <p>
            API access for third-party intelligent applications.
          </p>
          <p>
            Enterprise contracts for full intelligence system deployment.
          </p>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section-ring mt-24">
        <h2 className="text-3xl font-bold text-white mb-8">
          Roadmap
        </h2>
        
        <div className="grid grid-cols-1 gap-6 text-blue-100">
          <div className="flex items-start">
            <div className="bg-blue-900/30 px-3 py-1 rounded mr-4">Now</div>
            <p>Phase 1: Core platform launch with initial enterprise deployments</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-900/30 px-3 py-1 rounded mr-4">2025</div>
            <p>Phase 2: Prediction engine scaling across industries</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-900/30 px-3 py-1 rounded mr-4">2026+</div>
            <p>Phase 3: Full intelligence platform ecosystem</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Partner with Modex
        </h2>
        
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-gradient-to-r from-blue-200 to-white hover:bg-blue-100 transition-all duration-200">
          Get in touch
          <span className="ml-2">→</span>
        </Link>
      </section>
    </div>
  )
}
