"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { mockPhoto } from "@/lib/images";
import Reveal from "./Reveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const stack = [
  { group: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", tools: ["Node.js", "PostgreSQL",  "REST / GraphQL APIs", "Express"] },
  { group: "Motion & Interaction", tools: ["GSAP", "ScrollTrigger", "Lenis", "CSS transitions"] },
  { group: "Tooling", tools: ["Git", "Vercel", "Figma-to-code", "Performance auditing"] },
];

export default function Craft() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".craft-heading", {
        y: 45,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: { trigger: scope.current, start: "top 78%", once: true },
      });

      gsap.from(".craft-image", {
        clipPath: "inset(100% 0 0 0)",
        scale: 1.06,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: { trigger: scope.current, start: "top 70%", once: true },
      });

      gsap.from(".craft-copy", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: ".craft-copy", start: "top 82%", once: true },
      });

      gsap.from(".craft-row", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".craft-list", start: "top 82%", once: true },
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".craft-heading, .craft-image, .craft-copy, .craft-row", { clearProps: "all" });
    });

    return () => mm.revert();
  }, { scope });

  return (
    <section ref={scope} className="hairline overflow-hidden bg-ink">
      <div className="container-px mx-auto max-w-content py-20 md:py-28">
        <p className="eyebrow">(WDX® — 05) Toolkit</p>
        <h2 className="craft-heading mt-4 font-display text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
          Craft.
        </h2>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[0.85fr_1.4fr] md:gap-16">
          <div className="craft-image relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line">
            <Image
              src={mockPhoto("craft", 600, 800)}
              alt="MAKTUM workspace and development setup"
              fill
              sizes="(min-width: 768px) 38vw, 100vw"
              className="object-cover grayscale transition-transform duration-700 hover:scale-[1.025]"
            />
          </div>

          <div>
            <div className="craft-copy">
              <p className="eyebrow">What I reach for</p>
              <p className="text-body mt-2 max-w-[52ch] text-muted">
                A practical stack refined project over project — focused on clean interfaces,
                reliable systems, interaction, and performance.
              </p>
            </div>

            <div className="craft-list mt-8 divide-y divide-line border-t border-line">
              {stack.map((item) => (
                <div key={item.group} className="craft-row grid gap-3 py-6 md:grid-cols-[1fr_2fr] md:items-baseline">
                  <span className="font-display text-base md:text-lg">{item.group}</span>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors duration-300 hover:border-paper/30 hover:text-paper"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}