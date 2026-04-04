import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import MouseTracker from "./mouse-tracker";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-shell">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
