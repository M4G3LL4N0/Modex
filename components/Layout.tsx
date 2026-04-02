import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="page-shell">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
