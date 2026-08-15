"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { mockPhoto } from "@/lib/images";
import Reveal from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const roles = [
  { company: "Clavmen Studio", year: "2022 - present", role: "Art Director & Designer", location: "Tokyo" },
  { company: "Modular Eight", year: "2020 – 2022", role: "Senior Developer", location: "Osaka" },
  { company: "Haus of Signal", year: "2018 – 2020", role: "Creative Technologist", location: "Berlin" },
  { company: "Studio Orbit", year: "2016 – 2018", role: "UI/UX Designer", location: "Dallas" },
  { company: "Novaform Labs", year: "2014 – 2016", role: "Junior Designer", location: "Kyoto" },
];

const word = "Practice.".split("");

export default function Experience() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".practice-letter",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.04,
          ease: "power4.out",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    },
    { scope }
  );

  return (
    <section ref={scope} className="hairline overflow-hidden">
      <div className="container-px mx-auto max-w-content py-20 md:py-28">
        <p className="eyebrow">(WDX® — 05) Experience · Digital Craft</p>

        <h2 className="mt-4 flex flex-wrap font-display text-[16vw] font-semibold leading-[0.85] tracking-tightest md:text-[8vw]">
          {word.map((ch, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="practice-letter inline-block">
                {ch === " " ? "\u00A0" : ch}
              </span>
            </span>
          ))}
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src={mockPhoto("experience", 600, 800)}
                alt="Portrait"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="mono-photo object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Global · Creative Collabs</p>
              <p className="mt-2 text-sm text-muted">
                Studio · Creative Partnerships
              </p>
            </Reveal>

            <div className="mt-8 divide-y divide-line border-t border-line">
              {roles.map((r, i) => (
                <Reveal key={r.company} delay={i * 0.04}>
                  <div className="grid grid-cols-2 gap-2 py-6 text-sm md:grid-cols-4 md:items-center">
                    <span className="font-display text-base md:text-lg">
                      {r.company}
                    </span>
                    <span className="text-muted">{r.year}</span>
                    <span className="text-muted">{r.role}</span>
                    <span className="text-right text-muted md:text-left">
                      {r.location}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
