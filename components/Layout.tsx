"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      {children}
    </div>
  );
}
