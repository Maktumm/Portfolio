"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mockPhoto } from "@/lib/images";

const services = [
  { name: "Art Direction", num: "01" },
  { name: "Branding", num: "02" },
  { name: "Strategy", num: "03" },
  { name: "Web Design", num: "04" },
];

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.2,
      });

      tl.from(".hero-meta", {
        opacity: 0,
        y: 15,
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
      })
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 1.6,
            stagger: 0.16,
            ease: "power4.out",
          },
          "-=0.65"
        )
        .from(
          ".hero-image",
          {
            opacity: 0,
            scale: 0.92,
            y: 30,
            duration: 1.7,
            ease: "power3.out",
          },
          "-=1"
        )
        .from(
          ".hero-services",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.3,
            ease: "power4.inOut",
          },
          "-=1"
        )
        .from(
          ".hero-services-content",
          {
            opacity: 0,
            y: 10,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          ".hero-wordmark",
          {
            opacity: 0,
            yPercent: 40,
            duration: 1.8,
            ease: "power4.out",
          },
          "-=0.8"
        );
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="relative flex min-h-screen max-h-screen flex-col overflow-hidden bg-black text-white"
    >
      <div className="container-px mx-auto flex min-h-0 w-full max-w-content flex-1 flex-col pt-3 md:pt-6">

        {/* ───────────────── TOP META ───────────────── */}

        <div className="grid grid-cols-2 border border-white/15 md:grid-cols-4">
          <div className="hero-meta border-b border-r border-white/15 p-2.5 md:p-3 md:border-b-0">
            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white/35">
              MAK™
            </p>
            <p className="mt-0.5 md:mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-white/70">
              Creative Studio
            </p>
          </div>

          <div className="hero-meta hidden border-r border-white/15 p-3 md:block">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
              Based in
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/70">
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="hero-meta hidden border-r border-white/15 p-3 md:block">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
              Available for
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/70">
              Select Projects
            </p>
          </div>

          <div className="hero-meta border-b border-white/15 p-2.5 text-right md:p-3 md:border-b-0">
            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white/35">
              2026
            </p>
            <p className="mt-0.5 md:mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-white/70">
              WDX® — 01
            </p>
          </div>
        </div>

        {/* ───────────────── MAIN ───────────────── */}

        <div className="relative flex min-h-0 flex-1 flex-col justify-center py-3 md:py-6">

          {/* Intro & Heading with Right Spacing for Desktop Image */}

          <div className="relative z-10 max-w-full md:max-w-[660px]">
            <div className="mb-2 hidden md:flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />
              <span className="hero-meta text-[9px] uppercase tracking-[0.2em] text-white/40">
                Independent creative direction
              </span>
            </div>

            {/* Main Heading (Compact & Perfectly Sized for Mobile) */}

            <h1 className="font-display text-[7.8vw] font-semibold leading-[0.88] tracking-[-0.065em] md:text-[5.3vw]">
              <span className="hero-title-line block overflow-hidden">
                Pattern Dimensions
              </span>

              <span className="hero-title-line block overflow-hidden">
                and Moments that
              </span>

              <span className="hero-title-line block overflow-hidden">
                Connect and Leave a
              </span>

              <span className="hero-title-line block overflow-hidden">
                Bold イメージ。
              </span>
            </h1>
          </div>

          {/* ───────────────── DESKTOP IMAGE (9:16) ───────────────── */}

          <div
            className="
              hero-image
              absolute
              right-[2%]
              top-1/2
              z-20
              hidden
              w-[clamp(150px,16vw,230px)]
              -translate-y-1/2
              md:block
            "
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-white/15 bg-white text-black shadow-2xl">
              <Image
                src={mockPhoto("akihiko-hero", 800, 1422)}
                alt="MAK creative portrait"
                fill
                sizes="230px"
                priority
                className="object-cover transition-transform duration-[2000ms] hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between text-white">
                <span className="text-[7.5px] uppercase tracking-[0.2em] text-white/80">
                  Portrait / 01
                </span>

                <span className="text-[7.5px] uppercase tracking-[0.2em] text-white/80">
                  2026
                </span>
              </div>
            </div>
          </div>

          {/* ───────────────── MOBILE IMAGE (16:9 Landscape, Rounded, Matches Reference) ───────────────── */}

          <div className="hero-image relative my-3 w-full overflow-hidden rounded-2xl border border-white/15 bg-white text-black shadow-xl md:hidden">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={mockPhoto("akihiko-hero", 1200, 675)}
                alt="MAK creative portrait"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* ───────────────── SERVICES (Clean White Aesthetic Bar) ───────────────── */}

          <div className="hero-services relative z-10 mt-2 md:mt-5 overflow-hidden rounded-md bg-white text-black">
            <div className="hero-services-content grid grid-cols-4 md:grid-cols-6">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className={`flex items-center justify-between px-3 py-2 border-black/10 ${
                    index < 2 ? "border-b md:border-b-0" : ""
                  } ${index % 2 === 0 ? "border-r md:border-r" : "border-r-0 md:border-r"} ${
                    index === 3 ? "md:border-r-0" : ""
                  }`}
                >
                  <span className="text-[6px] md:text-[9px] font-medium uppercase tracking-[0.14em] text-black">
                    {service.name}
                  </span>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ───────────────── GIANT MAK WORDMARK ───────────────── */}

        <div className="hero-wordmark relative shrink-0 overflow-hidden border-t border-white/15 pt-1 flex items-end justify-between">
          <div
            className="
              whitespace-nowrap
              font-display
              text-[20vw]
              font-semibold
              leading-[0.65]
              tracking-[-0.09em]
              text-white
              md:text-[16vw]
            "
          >
            MAKTUM
          </div>

          <Link
            href="#contact"
            className="hidden md:flex items-center gap-1.5 pb-4 text-[10px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}