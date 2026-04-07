export default function PortfolioPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-500">Portfolio</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900">
            Modex Experimental Projects
          </h1>
          
          <p className="text-lg text-gray-600">
            Explore our active research initiatives across animal communication,
            fluid dynamics, material interactions, and unknown signal spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
