import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white font-medium rounded-lg">
            MX
          </div>
          <div>
            <div className="text-gray-900 font-medium">MODEX</div>
            <div className="text-xs text-gray-500">Noaerth Ecosystem</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/technology" className="text-gray-600 hover:text-gray-900 transition-colors">
            Technology
          </Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
            Portfolio
          </Link>
          <Link href="/updates" className="text-gray-600 hover:text-gray-900 transition-colors">
            Updates
          </Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
