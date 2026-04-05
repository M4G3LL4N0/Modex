import "./globals.css";
import MouseTracker from "./mouse-tracker";

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
        {children}
      </body>
    </html>
  );
}
