"use client";

import { useState } from "react";
import Image from "next/image";
import { mockPhoto } from "@/lib/images";
import Reveal from "./Reveal";

const awards = [
  {
    count: "27x",
    name: "Awwwards",
    body: "Recognized for bold interaction, structured visual rhythm, and design consistency across creative categories.",
    seeds: ["aw-1a", "aw-1b", "aw-1c", "aw-1d"],
  },
  {
    count: "14x",
    name: "FWA",
    body: "Awarded for outstanding execution, seamless animation, and originality in modern digital experiences.",
    seeds: ["aw-2a", "aw-2b", "aw-2c", "aw-2d"],
  },
  {
    count: "09x",
    name: "CSSDA",
    body: "Celebrated for front-end excellence, design innovation, and development precision across multiple showcases.",
    seeds: ["aw-3a", "aw-3b", "aw-3c", "aw-3d"],
  },
  {
    count: "08x",
    name: "Dribbble",
    body: "Highlighted for strong typographic systems, visual hierarchy, and thoughtful layout built with intent.",
    seeds: ["aw-4a", "aw-4b", "aw-4c", "aw-4d"],
  },
];

export default function Awards() {
  const [active, setActive] = useState(0);
  const current = awards[active];

  return (
    <section className="hairline">
      <div className="container-px mx-auto max-w-content py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">(WDX® — 07) Awards · Selected Honors</p>
          <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-display text-3xl md:text-4xl">Awards</h2>
            <span className="text-muted">(3)</span>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {awards.map((a, i) => (
            <button
              key={a.name}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                active === i
                  ? "border-paper bg-paper text-ink"
                  : "border-line text-muted hover:border-paper hover:text-paper"
              }`}
            >
              {a.count} {a.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p className="font-display text-5xl md:text-6xl">
              {current.count}
            </p>
            <p className="mt-2 font-display text-xl">{current.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {current.body}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {current.seeds.map((s) => (
              <div
                key={s}
                className="relative aspect-square w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={mockPhoto(s, 300, 300)}
                  alt="Award reference"
                  fill
                  sizes="150px"
                  className="mono-photo object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
