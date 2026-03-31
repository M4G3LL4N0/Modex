import {
  featureCards,
  heroPills,
  platformBlocks,
  roadmap,
  trustStats,
  useCases,
} from "@/lib/modex-content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/60">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-300/80" />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[540px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(71,113,255,0.20),rgba(71,113,255,0.04),transparent_68%)] blur-3xl" />

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <div className="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl">
            <span className="text-sm font-semibold tracking-[0.28em] text-white/90">
              MX
            </span>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.25em] text-white/90">
              MODEX
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              Noaerth Ecosystem Venture
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#platform" className="transition hover:text-white">
            Platform
          </a>
          <a href="#use-cases" className="transition hover:text-white">
            Use Cases
          </a>
          <a href="#roadmap" className="transition hover:text-white">
            Roadmap
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://noaerth.com"
            className="hidden rounded-full border border-white/12 px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:text-white md:inline-flex"
          >
            Noaerth
          </a>
          <a
            href="#waitlist"
            className="rounded-full border border-blue-300/20 bg-white/[0.08] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.12]"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-white/65"
                >
                  {pill}
                </span>
              ))}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
              Machine intelligence
              <br />
              <span className="text-gradient">for decisions that matter.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
              Modex is a machine intelligence engine for prediction, inference,
              optimization, and feedback-driven decision systems. It turns raw
              signals into scored judgment, sharper actions, and compounding
              operational intelligence.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.01]"
              >
                Get early access
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.045] px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/[0.08]"
              >
                Explore the platform
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {trustStats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-2xl p-4">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                    {stat.label}
                  </div>
                  <div className="mt-3 text-sm font-medium text-white/88">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="section-ring glass-strong relative rounded-[28px] p-4 md:p-6">
              <div className="rounded-[24px] border border-white/10 bg-[#0a0d15]/85 p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/42">
                      Live system frame
                    </div>
                    <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                      Modex Engine
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300/90">
                    Adaptive
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                      Input layer
                    </div>
                    <div className="mt-3 text-sm leading-7 text-white/72">
                      Events, text, histories, operator feedback, system
                      signals, and outcomes.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/42">
                      <span>Inference layer</span>
                      <span>Scoring active</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        ["Confidence", "91%"],
                        ["Risk signal", "Moderate"],
                        ["Action priority", "High"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between rounded-xl border border-white/8 bg-black/20 px-4 py-3"
                        >
                          <span className="text-sm text-white/62">{label}</span>
                          <span className="text-sm font-medium text-white">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-blue-300/15 bg-[linear-gradient(135deg,rgba(71,113,255,0.15),rgba(117,62,255,0.08))] p-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/48">
                      Recommended output
                    </div>
                    <div className="mt-3 text-sm leading-7 text-white/85">
                      Prioritize this workflow, route resources here, and track
                      the resulting outcome to refine the model.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 left-10 h-32 w-32 rounded-full bg-violet-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <SectionLabel>Why Modex</SectionLabel>
        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="section-ring glass-panel rounded-[26px] p-6"
            >
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                {card.eyebrow}
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/66">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="platform"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Platform</SectionLabel>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              A machine decision layer built to compound.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/67">
              Modex is designed as infrastructure, not a one-off app. It
              connects signal intake, scoring, action, and learning into a
              single system that gets more useful as usage and outcomes grow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {platformBlocks.map((block) => (
              <div
                key={block.title}
                className="glass-panel rounded-[24px] p-5 md:p-6"
              >
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="use-cases"
        className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-10"
      >
        <SectionLabel>Use Cases</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="glass-panel rounded-[24px] p-5"
            >
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/63">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="roadmap"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SectionLabel>Roadmap</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Launch now. Learn fast. Build the moat.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/67">
              The goal is simple: establish the category, ship the first
              operator-facing intelligence workflows, then compound real outcome
              data into proprietary advantage.
            </p>
          </div>

          <div className="space-y-4">
            {roadmap.map((item) => (
              <div
                key={item.phase}
                className="glass-panel rounded-[24px] p-6"
              >
                <div className="text-[11px] uppercase tracking-[0.26em] text-white/42">
                  {item.phase}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10"
      >
        <div className="section-ring glass-strong rounded-[32px] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <SectionLabel>Early Access</SectionLabel>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Join the first wave of machine-backed decision infrastructure.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
                Modex is entering the Noaerth ecosystem as a machine
                intelligence venture focused on prediction, optimization, and
                adaptive decision systems. Get access before the first engine
                release.
              </p>
            </div>

            <form className="rounded-[28px] border border-white/10 bg-[#0a0d15]/75 p-5 md:p-6">
              <label
                htmlFor="email"
                className="text-[11px] uppercase tracking-[0.24em] text-white/44"
              >
                Request access
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/28 focus:border-white/20"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-2xl border border-white/12 bg-white px-4 py-3 text-sm font-medium text-black transition hover:opacity-95"
              >
                Join waitlist
              </button>
              <p className="mt-3 text-xs leading-6 text-white/42">
                Fast launch version. Connect this form to Resend, ConvertKit,
                Mailchimp, Supabase, or a simple API route next.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
