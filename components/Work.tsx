"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { mockPhoto } from "@/lib/images";
import Reveal from "./Reveal";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const projects = [
  { index: "01", name: "Sonder Goods", category: "Branding" },
  { index: "02", name: "Halo Wear", category: "Web Design" },
  { index: "03", name: "Lucent Lab", category: "Creative Direction" },
  { index: "04", name: "Arc & Bloom", category: "Identity Design" },
  { index: "05", name: "Atelier Nara", category: "Portfolio Site" },
  { index: "06", name: "Vanguard", category: "3D Motion" },
  { index: "07", name: "Aura Space", category: "Interior Web" },
  { index: "08", name: "Kinetix", category: "App Design" },
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  /*
   * Hide the GLOBAL custom cursor only while this page/section exists.
   * Your normal custom cursor will return automatically when leaving Work.
   */
  useEffect(() => {
    document.documentElement.classList.add("work-page");

    return () => {
      document.documentElement.classList.remove("work-page");
    };
  }, []);

  /*
   * Floating image cursor
   */
  useGSAP(
    () => {
      if (!cursorRef.current) return;

      const cursor = cursorRef.current;

      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
      });

      const xTo = gsap.quickTo(cursor, "x", {
        duration: 0.45,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(cursor, "y", {
        duration: 0.45,
        ease: "power3.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    {
      scope: sectionRef,
    }
  );

  /*
   * Entrance animation
   */
  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        gsap.set(".work-reveal", {
          opacity: 1,
          y: 0,
        });

        return;
      }

      gsap.fromTo(
        ".work-reveal",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    },
    {
      scope: sectionRef,
    }
  );

  const toggleMobileProject = (index: number) => {
    setMobileOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="
        relative
        flex
        h-screen
        flex-col
        justify-center
        overflow-hidden
        bg-black
        text-white
      "
    >
      <div
        className="
          container-px
          mx-auto
          flex
          h-full
          w-full
          max-w-5xl
          flex-col
          py-16
          md:py-24
        "
      >
        {/* HEADER */}

        <Reveal className="work-reveal mb-8 shrink-0 md:mb-12">
          <p
            className="
              eyebrow
              mb-2
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-gray-400
            "
          >
            (WDX® — 02) Featured Works©
          </p>

          <h2
            className="
              font-display
              text-4xl
              font-bold
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Selected Projects
          </h2>
        </Reveal>

        {/* PROJECT LIST */}

        <div
          data-lenis-prevent
          data-cursor="hide"
          className="
            flex-1
            overflow-y-auto
            border-t
            border-white/10
            [-ms-overflow-style:'none']
            [scrollbar-width:'none']
            [&::-webkit-scrollbar]:hidden
          "
        >
          <ul className="flex w-full flex-col">
            {projects.map((project, index) => {
              const isMobileOpen = mobileOpenIndex === index;

              return (
                <li
                  key={project.name}
                  className="
                    work-reveal
                    group
                    border-b
                    border-white/10
                  "
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                  }}
                >
                  {/* PROJECT ROW */}

                  <button
                    type="button"
                    onClick={() => toggleMobileProject(index)}
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                      gap-6
                      py-5
                      text-left
                      md:py-6
                    "
                    aria-expanded={isMobileOpen}
                  >
                    <div className="pointer-events-none flex items-center gap-4 md:gap-8">
                      {/* NUMBER */}

                      <span
                        className="
                          shrink-0
                          font-mono
                          text-sm
                          text-gray-500
                          transition-colors
                          duration-300
                          group-hover:text-gray-300
                        "
                      >
                        ({project.index})
                      </span>

                      {/* TITLE */}

                      <h3
                        className="
                          font-display
                          text-3xl
                          font-semibold
                          tracking-tight
                          text-white
                          transition-all
                          duration-500
                          ease-out
                          group-hover:translate-x-1
                          group-hover:text-gray-300
                          md:text-5xl
                        "
                      >
                        {project.name}
                      </h3>
                    </div>

                    {/* PLUS / MINUS */}

                    <div
                      className="
                        shrink-0
                        text-gray-400
                        transition-all
                        duration-500
                        group-hover:text-white
                        md:hidden
                      "
                    >
                      {isMobileOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </button>

                  {/* MOBILE IMAGE */}

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      md:hidden
                      ${
                        isMobileOpen
                          ? "max-h-[600px] pb-8 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        relative
                        aspect-[4/3]
                        w-full
                        overflow-hidden
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                      "
                    >
                      <Image
                        src={mockPhoto(
                          `work-${project.index}`,
                          800,
                          600
                        )}
                        alt={project.name}
                        fill
                        sizes="100vw"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    <div className="mt-3 flex items-center justify-between px-1">
                      <p className="text-sm font-medium text-gray-300">
                        {project.category}
                      </p>

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-gray-500
                        "
                      >
                        View Project ↗
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* =====================================================
          DESKTOP IMAGE CURSOR
          ===================================================== */}

      <div
        ref={cursorRef}
        aria-hidden="true"
       data-cursor="hide"
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          will-change-transform
          md:block
          ${
            hoveredIndex !== null
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <div
          className="
            relative
            aspect-[4/5]
            w-[300px]
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-black
            shadow-2xl
            transition-transform
            duration-500
            ease-out
          "
        >
          {/* IMAGES */}

          {projects.map((project, index) => (
            <Image
              key={project.name}
              src={mockPhoto(
                `work-${project.index}`,
                600,
                800
              )}
              alt=""
              fill
              sizes="300px"
              priority={index < 3}
              className={`
                absolute
                inset-0
                object-cover
                transition-all
                duration-500
                ease-out
                ${
                  hoveredIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-[1.04] opacity-0"
                }
              `}
            />
          ))}

          {/* DARK OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-transparent
            "
          />

          {/* PROJECT META */}

          {hoveredIndex !== null && (
            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                flex
                items-end
                justify-between
                text-white
              "
            >
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/60">
                  Selected Work
                </p>

                <p className="mt-1 text-sm font-medium">
                  {projects[hoveredIndex].name}
                </p>
              </div>

              <span className="font-mono text-[9px] text-white/60">
                {projects[hoveredIndex].index}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}