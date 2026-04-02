export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06070b] text-white">
      <Header />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold leading-tight">
          Machine intelligence for decisions.
        </h1>

        <p className="mt-6 text-white/70 max-w-xl">
          Modex is building an intelligence engine for prediction,
          inference, and decision systems.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/dashboard"
            className="bg-white text-black px-6 py-3 rounded-xl"
          >
            Open Dashboard
          </a>

          <a
            href="/technology"
            className="border border-white/20 px-6 py-3 rounded-xl"
          >
            View Technology
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
