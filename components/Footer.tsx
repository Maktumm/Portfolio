"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { mockPhoto } from "@/lib/images";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

const networks = ["Instagram", "Dribbble", "Framer", "Twitter"];

const closingSeeds = [
  "close-1",
  "close-2",
  "close-3",
  "close-4",
  "close-5",
  "close-6",
  "close-7",
  "close-8",
];

function ColorRevealImage({
  seed,
  index,
}: {
  seed: string;
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    // Only use scroll reveal on mobile.
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    if (!mediaQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        color-reveal-image
        group
        relative
        mx-2
        h-[42vw]
        max-h-[520px]
        min-h-[260px]
        w-[30vw]
        max-w-[390px]
        min-w-[210px]
        shrink-0
        overflow-hidden
        rounded-xl
        border
        border-line
        bg-white/5
        md:mx-3
      "
    >
      <Image
        src={mockPhoto(seed, 800, 1100)}
        alt={`MAKTUM work ${index + 1}`}
        fill
        sizes="(max-width: 768px) 30vw, 390px"
        className="
          object-cover
          grayscale
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:grayscale-0
          group-hover:scale-105

          md:grayscale
        "
      />

      {/* Color reveal layer */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-transparent
          to-transparent
          opacity-60
        "
      />

      {/* Image number */}

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <span className="text-[9px] uppercase tracking-[0.18em] text-white/70">
          MAKTUM®
        </span>

        <span className="font-mono text-[9px] text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="hairline overflow-hidden bg-ink text-paper"
    >
      {/* ───────────────── IMAGE MARQUEE ───────────────── */}

      <div className="relative overflow-hidden border-b border-line py-5 md:py-8">
        {/* Edge fades */}

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink to-transparent md:w-32" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink to-transparent md:w-32" />

        <Marquee speed={35}>
          {closingSeeds.map((seed, index) => (
            <ColorRevealImage
              key={seed}
              seed={seed}
              index={index}
            />
          ))}
        </Marquee>
      </div>

      {/* ───────────────── CONTACT ───────────────── */}

      <div className="container-px mx-auto max-w-content">
        <div className="py-20 md:py-28 lg:py-36">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-[0.55fr_2fr] md:gap-20">
              {/* Label */}

              <div>
                <p className="eyebrow">
                  (WDX® — 8) Contact
                </p>

                <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span className="h-px w-8 bg-line" />
                  <span>Let&apos;s build something</span>
                </div>
              </div>

              {/* Main */}

              <div>
                <h2 className="max-w-5xl font-display text-[11vw] font-medium leading-[0.85] tracking-[-0.065em] md:text-[7vw]">
                  Have a project
                  <br />
                  in mind?
                </h2>

                <div className="mt-10 flex flex-col items-start gap-7 md:mt-14 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-md text-sm leading-6 text-muted md:text-base">
                    I design and develop expressive digital experiences
                    with a focus on clarity, performance, and interaction.
                  </p>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=maktum5068@gmail.com"
                     
  target="_blank"
  rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-full
                      bg-paper
                      px-6
                      py-3.5
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-ink
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:shadow-[0_12px_40px_rgba(255,255,255,0.12)]
                    "
                  >
                    Email

                    <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-ink text-paper">
                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          -translate-x-0
                          translate-y-0
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          group-hover:scale-110
                        "
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ───────────────── BOTTOM BAR ───────────────── */}

        <div className="border-t border-line py-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <a
              href="#top"
              className="
                group
                flex
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-muted
                transition-colors
                hover:text-paper
              "
            >
              <span className="h-px w-6 bg-line transition-all duration-300 group-hover:w-10 group-hover:bg-paper" />
              Back to top
            </a>

            <ul className="flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.14em]">
             
            </ul>

            <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
              © 2026 MAKTUM®
            </p>
          </div>
        </div>
      </div>

      {/* ───────────────── MOBILE COLOR REVEAL ───────────────── */}

      <style jsx global>{`
        @media (max-width: 767px) {
          .color-reveal-image.is-visible img {
            filter: grayscale(0);
            transform: scale(1.05);
          }
        }
      `}</style>
    </footer>
  );
}