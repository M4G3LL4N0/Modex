import SectionLabel from '../page'

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function InvestorsPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[540px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(71,113,255,0.20),rgba(71,113,255,0.04),transparent_68%)] blur-3xl" />
      
      <Header />
      
      <div className="glass-panel max-w-7xl mx-auto px-6 py-10 lg:px-10">
      {/* HERO */}
      <section className="section-ring">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300 mb-6">
            Machine Intelligence Infrastructure
          </h1>
          <p className="mt-6 text-xl text-blue-100">
            Building category-defining decision systems powered by real-world outcomes
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="mt-16">
        <SectionLabel>Vision</SectionLabel>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">The Decision Infrastructure Gap</h3>
            <p className="text-gray-300">
              Enterprises operate with fragmented visibility and reactive decision cycles. 
              Modex establishes a continuous intelligence layer that predicts, recommends, 
              and learns from outcomes - turning operations into compounding advantage.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Thesis</h3>
            <p className="text-gray-300">
              Proprietary data and outcome-driven learning create fundamentally better decisions 
              that reinforce themselves over time. We're building the infrastructure layer that 
              enterprises will depend on for mission-critical optimization.
            </p>
          </div>
        </div>
      </section>

      {/* MARKET OPPORTUNITY */}
      <section className="mt-16">
        <SectionLabel>Market Opportunity</SectionLabel>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">$12B+</h3>
            <p className="text-blue-200">Enterprise Optimization Market</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">72%</h3>
            <p className="text-blue-200">Companies With Decision-Support Needs</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">40%</h3>
            <p className="text-blue-200">Annual Budget Now Allocated To AI</p>
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="mt-16">
        <SectionLabel>Product Overview</SectionLabel>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Core Engine</h3>
            <p className="text-gray-300">
              Modex integrates signal processing, probabilistic reasoning, and outcome learning 
              into a unified system that surfaces the highest-value decisions from enterprise noise.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Operator Interface</h3>
            <p className="text-gray-300">
              Clean, intuitive dashboards provide visibility into automated insights while preserving 
              human judgment - the best of machine intelligence with human oversight.
            </p>
          </div>
        </div>
      </section>

      {/* DEFENSIBILITY */}
      <section className="mt-16">
        <SectionLabel>Defensibility</SectionLabel>
        <div className="mt-8 space-y-6">
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">Outcome Data Advantage</h3>
            <p className="text-gray-300">
              Every prediction and real outcome further trains our proprietary models, creating an 
              accelerating intelligence cycle competitors can't replicate.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Workflow Depth</h3>
            <p className="text-gray-300">
              Tight integrations with core business systems embed Modex into daily operations, 
              creating durable customer lock-in through workflow dependence.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="mt-16">
        <SectionLabel>Business Model</SectionLabel>
        <div className="mt-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">Annual Contracts</h3>
              <p className="text-blue-200">Enterprise SaaS Pricing</p>
              <p className="text-gray-300 mt-2">$50K-$250K/year varying by deployment scope</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">Pricing Model</h3>
              <p className="text-blue-200">Value-Based</p>
              <p className="text-gray-300 mt-2">Scales with predicted decision impact size</p>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white">Customer Profile</h3>
            <p className="text-gray-300 mt-2">
              Mid-market to enterprise operations teams with mission-critical 
              workflows around risk, resources, and strategic planning.
            </p>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mt-16">
        <SectionLabel>Roadmap</SectionLabel>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            ["Q3 2026", "Enterprise Launch", "First major deployments"],
            ["Q4 2026", "Outcome Network", "Cross-customer learning"],
            ["2027", "Autonomous Ops", "Closed-loop optimization"],
          ].map(([quarter, title, desc]) => (
            <div key={title} className="glass-panel p-4 rounded-xl">
              <div className="text-sm text-blue-200">{quarter}</div>
              <h4 className="text-lg font-semibold text-white mt-2">{title}</h4>
              <p className="text-sm text-gray-300 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <a href="#waitlist" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
          Contact Investor Relations
        </a>
      </section>
      </div>
      <Footer />
    </main>
  )
}
