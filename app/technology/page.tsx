import SectionLabel from '../page'

export default function TechnologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
          The Modex Engine
        </h1>
        <p className="text-lg text-gray-300">
          A machine intelligence system designed to predict, optimize, and learn from outcomes.
        </p>
      </section>

      {/* SYSTEM OVERVIEW */}
      <section className="mb-16">
        <SectionLabel>System Overview</SectionLabel>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Signal Layer</h3>
            <p className="text-gray-300">
              Inputs, events, user data - structured and unstructured. The foundation of our intelligence system.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Inference Layer</h3>
            <p className="text-gray-300">
              Models, scoring, reasoning, and probabilities. Where raw data becomes meaningful insights.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Decision Layer</h3>
            <p className="text-gray-300">
              Recommendations, prioritization, and actions. Turning insights into concrete next steps.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Learning Layer</h3>
            <p className="text-gray-300">
              Feedback loop, outcomes, and reinforcement. The system gets smarter with every interaction.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="mb-16">
        <SectionLabel>Architecture</SectionLabel>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
            <p className="text-gray-300">
              Next.js dashboard and operator UI - real-time visualization of system intelligence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
            <p className="text-gray-300">
              API routes and orchestration layer - the nervous system connecting all components.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">ML Layer</h3>
            <p className="text-gray-300">
              LLM integration, scoring algorithms, and embeddings - the cognitive engine.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Data Layer</h3>
            <p className="text-gray-300">
              Supabase-powered storage for inputs, predictions, and outcomes - the system's memory.
            </p>
          </div>
        </div>
      </section>

      {/* MODEL LOGIC */}
      <section className="mb-16">
        <SectionLabel>Model Logic</SectionLabel>
        <div className="space-y-4">
          <p className="text-gray-300">
            Our scoring system evaluates signals with weighted confidence levels, detecting risk patterns and prioritizing actions based on predicted impact.
          </p>
        </div>
      </section>

      {/* FEEDBACK LOOP */}
      <section className="mb-16">
        <SectionLabel>Feedback Loop</SectionLabel>
        <div className="space-y-4">
          <p className="text-gray-300">
            Every prediction is compared against actual outcomes, creating a continuous improvement cycle where the system refines its understanding and decision-making capabilities.
          </p>
        </div>
      </section>

      {/* FUTURE STACK */}
      <section className="mb-16">
        <SectionLabel>Future Stack</SectionLabel>
        <div className="space-y-4">
          <p className="text-gray-300">
            We're evolving toward domain-specific models, autonomous agents, and real-time decisioning systems that anticipate needs before they're expressed.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors">
          Build on Modex
        </button>
      </section>
    </div>
  )
}
