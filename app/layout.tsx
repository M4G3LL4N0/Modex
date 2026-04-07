import "./globals.css";
import MouseTracker from "./mouse-tracker";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Modex",
  description: "Machine intelligence for decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MouseTracker />
        <Header />
        <main className="page-shell">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
