'use client'
import Image from "next/image";

import { mockPhoto } from "@/lib/images";
import Reveal from "./Reveal";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".animate-item", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%", // Triggers when the top of the container hits 80% of the viewport height
        end: "bottom 20%",
        scrub: true, // Ties the animation to the scrollbar
      }
    });
  }, { scope: container });
  return (
    <section ref={container} className="hairline">
      <div className=" animate-item container-px mx-auto max-w-content py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">(WDX® — 05) Personal Profile</p>
        </Reveal>

        <div className=" animate-item mt-10 grid gap-4 sm:grid-cols-3">
          {["profile-1", "profile-2", "profile-3"].map((seed, i) => (
            <Reveal key={seed} delay={i * 0.06}>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src={mockPhoto(seed, 500, 660)}
                  alt="Portrait"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="mono-photo object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 grid gap-10 md:grid-cols-2">
          <h2 className="font-display text-2xl leading-snug md:text-4xl">
            Blending design and code with functional clarity and creative
            precision. Delivering thoughtful digital systems with structure,
            flow, and expressive interaction.
          </h2>
          <div className="animate-item">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              We bridge creative direction with real-world execution,
              combining design and development into one seamless workflow to
              deliver digital experiences that are thoughtful, fast, and
              built to perform.
            </p>
            <a
              href="#work"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-paper"
            >
              See Works →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
