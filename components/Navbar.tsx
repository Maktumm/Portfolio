"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";

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

  // Lenis instance
  const lenis = useLenis();

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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lenis smooth navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (lenis) {
      lenis.scrollTo(href, {
        duration: 1.5,
        offset: -20,
      });
    }

    setOpen(false);
  };

  return (
    <header
      
      className={`fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top metadata grid */}
      <div className="border-b border-white/15">
        <div className="container-px mx-auto grid max-w-content grid-cols-2 py-2 text-[9px] uppercase tracking-[0.2em] text-white/50 md:grid-cols-4">
          {/* Studio */}
          <div>
            <span className="text-white/35">MAKTUM</span>

            <span className="mt-0.5 block text-[10px] tracking-[0.12em] text-white/70">
              Creative Studio
            </span>
          </div>

          {/* Location */}
          <div className="hidden border-l border-white/15 pl-4 md:block">
            <span className="text-white/35">Based in</span>

            <span className="mt-0.5 block text-[10px] tracking-[0.12em] text-white/70">
              Dhaka, Bangladesh
            </span>
          </div>

          {/* Availability */}
          <div className="hidden border-l border-white/15 pl-4 md:block">
            <span className="text-white/35">Available for</span>

            <span className="mt-0.5 block text-[10px] tracking-[0.12em] text-white/70">
              Select Projects
            </span>
          </div>

          {/* Year */}
          <div className="border-l border-white/15 pl-4 text-right">
            <span className="text-white/35">2026</span>

            <span className="mt-0.5 block text-[10px] tracking-[0.12em] text-white/70">
              WDX® — 01
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container-px mx-auto flex max-w-content items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="font-display text-xl font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-75"
        >
          MAKTUM
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center rounded-full border border-white/10 bg-white/5 px-8 py-2.5 shadow-sm backdrop-blur-md md:flex">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="group flex items-center gap-1 text-xs font-medium uppercase tracking-[0.12em] text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  {/* Text roll */}
                  <span className="relative block overflow-hidden leading-none">
                    {/* Current text */}
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      {l.label}
                    </span>

                    {/* Text coming from below */}
                    <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      {l.label}
                    </span>
                  </span>

                  {/* Arrow */}
                  <ArrowUpRight
                    className="
                      h-3 w-3
                      -translate-x-2 translate-y-2
                      opacity-0
                      transition-all
                      duration-300
                      ease-out
                      group-hover:translate-x-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="rounded-full bg-white px-6 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="p-1 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          open ? "max-h-64 border-b border-white/15" : "max-h-0"
        }`}
      >
        <ul className="container-px mx-auto flex max-w-content flex-col gap-4 bg-black py-6 text-xs uppercase tracking-[0.12em] text-white">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="block text-gray-400 transition-colors duration-300 hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-block rounded-full bg-white px-5 py-2 font-medium text-black transition-all duration-300 hover:bg-gray-200"
            >
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}