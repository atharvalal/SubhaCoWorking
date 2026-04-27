"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Available Services", href: "/#services" },
  { label: "Why Shubha", href: "/#why-shubha" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 border-b px-5 py-5 transition-all ${
          scrolled
            ? "border-slate-200/80 bg-[#fffaf2]/85 shadow-[0_18px_50px_rgba(17,28,57,0.08)] backdrop-blur-xl"
            : "border-slate-200/70 bg-[#fffaf2]/75 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex flex-col no-underline" onClick={() => setMenuOpen(false)}>
          <span className="text-[1.15rem] font-extrabold tracking-[-0.03em] text-slate-950">Shubha CoWorking</span>
          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
            Premium Commercial Spaces
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-900 transition-colors hover:text-slate-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-slate-200 bg-[#fffdf8]/80 p-3 text-slate-900 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="mx-auto max-w-7xl px-1 pt-3 md:hidden">
          <div className="grid gap-2 rounded-[28px] border border-slate-200 bg-[#fffdf8]/95 p-4 shadow-[0_18px_40px_rgba(17,28,57,0.08)]">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-900 transition-colors hover:bg-stone-100 hover:text-slate-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
