export default function UpdatesPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-500">Updates</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900">
            Latest Developments
          </h1>
          
          <p className="text-lg text-gray-600">
            Stay informed about our latest breakthroughs, research publications,
            and ecosystem developments.
          </p>
        </div>
      </div>
    </section>
  );
}
