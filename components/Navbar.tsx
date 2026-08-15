"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Gallery", href: "#work" },
  { label: "Work", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsHidden(true);
        setOpen(false);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top 4-column metadata grid matching the reference design */}
      <div className="border-b border-white/15">
        <div className="container-px mx-auto max-w-content grid grid-cols-2 md:grid-cols-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white/50">
          <div>
            <span className="text-white/35">MAK™</span>
            <span className="block mt-0.5 text-[10px] tracking-[0.12em] text-white/70">Creative Studio</span>
          </div>
          <div className="hidden md:block border-l border-white/15 pl-4">
            <span className="text-white/35">Based in</span>
            <span className="block mt-0.5 text-[10px] tracking-[0.12em] text-white/70">Dhaka, Bangladesh</span>
          </div>
          <div className="hidden md:block border-l border-white/15 pl-4">
            <span className="text-white/35">Available for</span>
            <span className="block mt-0.5 text-[10px] tracking-[0.12em] text-white/70">Select Projects</span>
          </div>
          <div className="text-right border-l border-white/15 pl-4 md:border-l">
            <span className="text-white/35">2026</span>
            <span className="block mt-0.5 text-[10px] tracking-[0.12em] text-white/70">WDX® — 01</span>
          </div>
        </div>
      </div>

      <nav className="container-px mx-auto flex max-w-content items-center justify-between py-4">
        <Link
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-75"
        >
          MAK™
        </Link>

        {/* Pill menu */}
        <div className="hidden items-center gap-10 md:flex bg-white/5 px-8 py-2.5 rounded-full border border-white/10 shadow-sm backdrop-blur-md">
          <ul className="flex items-center gap-8 text-xs font-medium uppercase tracking-[0.12em] text-gray-300">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="group flex items-center gap-1 transition-all duration-300 hover:text-white"
                >
                  {l.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="rounded-full bg-white text-black px-6 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </div>

        <button
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-64 border-b border-white/15" : "max-h-0"
        }`}
      >
        <ul className="container-px mx-auto flex max-w-content flex-col gap-4 bg-black py-6 text-xs uppercase tracking-[0.12em] text-white">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-white text-black px-5 py-2 font-medium"
            >
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}