"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the product, audience and constraints before touching the interface.",
  },
  {
    number: "02",
    title: "Design",
    text: "Shape the visual system, responsive structure and interaction direction.",
  },
  {
    number: "03",
    title: "Build",
    text: "Turn the direction into a production-ready experience with a clean technical foundation.",
  },
  {
    number: "04",
    title: "Refine",
    text: "Test, optimize and polish the details until the experience feels effortless.",
  },
];

export default function Process() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(".process-heading, .process-step, .process-intro", {
          opacity: 1,
          y: 0,
          yPercent: 0,
        });
        return;
      }

      gsap.fromTo(
        ".process-heading",
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
        ".process-intro",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".process-step",
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-grid",
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
      id="process"
      className="hairline overflow-hidden bg-ink text-paper"
    >
      <div className="container-px mx-auto max-w-content py-20 md:py-28 lg:py-36">
        <div className="grid gap-12 md:grid-cols-[0.8fr_2fr] md:gap-16">
          <div>
            <p className="eyebrow">(WDX® — 07) Process</p>

            <div className="process-intro mt-8 max-w-xs">
              <p className="text-sm leading-6 text-muted">
                A simple process keeps the creative direction clear and the
                technical decisions intentional.
              </p>

              <ArrowDownRight
                className="mt-8 h-8 w-8 text-muted"
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <div className="overflow-hidden">
              <h2 className="process-heading text-display font-display font-semibold tracking-tightest">
                From idea to interface.
              </h2>
            </div>

            <div className="process-grid mt-14 border-t border-line">
              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className="process-step group grid gap-5 border-b border-line py-8 md:grid-cols-[70px_1fr_1.2fr] md:gap-8 md:py-10"
                >
                  <span className="font-mono text-xs text-muted">
                    ({step.number})
                  </span>

                  <h3 className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="max-w-md text-sm leading-6 text-muted md:text-base">
                    {step.text}
                  </p>

                  <div className="pointer-events-none absolute" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}