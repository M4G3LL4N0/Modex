export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MODEX — A Noaerth Ecosystem Venture
      </div>
    </footer>
  );
}
