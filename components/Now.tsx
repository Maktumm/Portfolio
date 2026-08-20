"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const focus = [
  "Building with Next.js",
  "Exploring better interactions",
  "Improving performance",
  "Learning new technologies",
];

export default function Now() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        gsap.set(".now-reveal", {
          opacity: 1,
          y: 0,
          yPercent: 0,
        });
        return;
      }

      gsap.fromTo(
        ".now-heading",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".now-reveal",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".now-list",
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="now"
      className="hairline overflow-hidden bg-ink text-paper"
    >
      <div className="container-px mx-auto max-w-content py-20 md:py-28 lg:py-36">
        <div className="grid gap-12 md:grid-cols-[0.8fr_2fr] md:gap-16">
          <div>
            <p className="eyebrow">(WDX® — 11) Now</p>

            <div className="now-reveal mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted">
              <span className="h-2 w-2 animate-pulse rounded-full bg-paper" />
              Currently building
            </div>
          </div>

          <div>
            <div className="overflow-hidden">
              <h2 className="now-heading font-display text-display font-semibold tracking-tightest">
                What I'm focused on.
              </h2>
            </div>

            <div className="now-list mt-12 border-t border-line">
              {focus.map((item, index) => (
                <div
                  key={item}
                  className="now-reveal group flex items-center justify-between gap-6 border-b border-line py-6 md:py-8"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-xs text-muted">
                      ({String(index + 1).padStart(2, "0")})
                    </span>

                    <span className="font-display text-xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                      {item}
                    </span>
                  </div>

                  <ArrowUpRight
                    className="h-4 w-4 -translate-x-2 translate-y-2 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            <div className="now-reveal mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-muted">
                I like working on interfaces where design, engineering and
                motion come together without sacrificing performance.
              </p>

              <Link
                href="#contact"
                className="group inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-paper"
              >
                Work with me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}