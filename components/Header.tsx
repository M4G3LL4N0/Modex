"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/updates", label: "Updates" },
  { href: "/investor", label: "Investor" },
  { href: "/dashboard", label: "Dashboard" },
];

function IconMenu({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--glass-border)] bg-[rgba(4,6,12,0.72)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="container mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 md:h-[72px] md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-90" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(225,85%,55%)] to-[hsl(260,70%,40%)] text-sm font-semibold tracking-tight text-white shadow-lg shadow-[rgba(80,120,255,0.28)]">
            MX
          </div>
          <div className="min-w-0 leading-tight">
            <div className="text-[12px] font-semibold tracking-[0.22em] text-white sm:text-[13px]">MODEX</div>
            <div className="truncate text-[10px] text-[var(--text-soft)] sm:text-[11px]">Signal intelligence lab</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:border-[hsl(225,85%,65%)]/40 hover:bg-white/[0.1] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[rgba(4,6,12,0.94)] backdrop-blur-xl md:hidden">
          <nav className="container mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-3">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm text-[var(--text-muted)] transition hover:bg-white/[0.06] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-2 text-[11px] leading-relaxed text-[var(--text-soft)]">
              Experimental pattern discovery — hypotheses require human validation before operational use.
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
