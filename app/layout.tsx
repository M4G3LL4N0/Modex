import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modex — Machine Intelligence Engine",
  description:
    "Modex is a machine intelligence engine for prediction, inference, optimization, and decision systems.",
  openGraph: {
    title: "Modex — Machine Intelligence Engine",
    description:
      "Machine intelligence for decisions that matter.",
    url: "https://modex.noaerth.com",
    siteName: "Modex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modex — Machine Intelligence Engine",
    description:
      "Machine intelligence for decisions that matter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
