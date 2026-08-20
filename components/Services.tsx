"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const labels = ["Precise", "Structured", "Focused"];

const services = [
  {
    n: "01",
    title: "Art Direction",
    body: "We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.",
  },
  {
    n: "02",
    title: "Brand Identity",
    body: "From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable.",
  },
  {
    n: "03",
    title: "Motion Direction",
    body: "We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention.",
  },
  {
    n: "04",
    title: "Custom Sites",
    body: "Design meets execution with real-time, scalable websites — all crafted natively for speed and precision.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        gsap.set(".services-reveal", {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.fromTo(
        ".services-reveal",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    },
    { scope }
  );

  const toggleService = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      ref={scope}
      id="services"
      className="hairline overflow-hidden bg-ink text-paper"
    >
      <div className="container-px mx-auto max-w-content py-20 md:py-28 lg:py-36">

        {/* HEADER */}

        <div className="grid gap-10 md:grid-cols-[0.65fr_2fr] md:gap-16">
          <div className="services-reveal">
            <p className="eyebrow">(WDX® — 03) Capabilities</p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-muted">
              {labels.map((label) => (
                <span
                  key={label}
                  className="transition-colors duration-300 hover:text-paper"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="services-reveal">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              Digital experiences
              <br />
              built with intention.
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-6 text-muted md:text-base">
              From visual direction to production-ready websites, every
              project is designed around clarity, interaction, and purpose.
            </p>
          </div>
        </div>

        {/* SERVICES */}

        <div className="mt-16 border-t border-line md:mt-24">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={service.n}
                  data-cursor="click"
                className={`services-reveal group relative border-b border-line transition-colors duration-500 ${
                  isOpen ? "bg-white/[0.025]" : ""
                }`}
              >
                {/* CLICKABLE ROW */}

                <button
                  type="button"
                  onClick={() => toggleService(index)}
                  aria-expanded={isOpen}
                  aria-controls={`service-description-${index}`}
                  className="w-full text-left"
                >
                  <div className="grid items-center gap-6 py-8 md:grid-cols-[70px_1fr_48px] md:py-10 lg:py-12">

                    {/* NUMBER */}

                    <div>
                      <span className="font-mono text-xs text-muted transition-colors duration-300 group-hover:text-paper">
                        ({service.n})
                      </span>
                    </div>

                    {/* TITLE */}

                    <div>
                      <h3
                        className={`font-display text-3xl font-medium tracking-tight transition-transform duration-500 ease-out md:text-4xl lg:text-5xl ${
                          isOpen ? "translate-x-1" : "group-hover:translate-x-2"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <div
                        id={`service-description-${index}`}
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                          isOpen
                            ? "mt-5 grid-rows-[1fr] opacity-100"
                            : "mt-0 grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <p className="max-w-xl pb-1 text-sm leading-6 text-muted md:text-base">
                            {service.body}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CENTERED ARROW */}

                    <div className="flex items-center justify-end">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isOpen
                            ? "rotate-45 border-paper bg-paper text-ink"
                            : "border-line text-muted group-hover:border-paper group-hover:text-paper"
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>

                {/* HOVER LINE */}

                <div
                  className={`absolute bottom-0 left-0 h-px bg-paper transition-all duration-700 ease-out ${
                    isOpen ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </article>
            );
          })}
        </div>

        {/* FOOTER META */}

        <div className="services-reveal mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-muted">
          <span>Selected capabilities</span>
          <span>04 — 04</span>
        </div>
      </div>
    </section>
  );
}