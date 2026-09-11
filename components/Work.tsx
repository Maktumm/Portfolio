"use client";

import Image, {StaticImageData} from "next/image";
import { useState, useRef, useEffect } from "react";
import { mockPhoto } from "@/lib/images";
import Reveal from "./Reveal";
import { Plus, Minus, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AlbaHover from "../public/smt.png"
import Alba from "../public/alba.png"
import storyvalut from "../public/story.png"
import Blossom from "../public/blossom.png"
import Blossom1 from "../public/4.bip.2878.png"
import storyv from "../public/storyvault.png"
import alba1 from "../public/alva.png"
import Burgerlab from "../public/lipitlaput.png"
import Burgerlab1 from "../public/burger1.png"
type ProjectType = "Frontend" | "Backend" | "Fullstack";

interface Project {
  index: string;
  name: string;
  category: string;
  type: ProjectType;
  description: string;
  href: string;
  imageref?: StaticImageData;
  imagemainref?:StaticImageData;
}

const projects: Project[] = [
  {
    index: "01",
    name: "ALBA",
    category: "Bakery",
    type: "Frontend",
    description:
      "A refined identity system created around tactile materials, bold typography, and a warm editorial direction.",
    href: "https://alba-lyart.vercel.app/",
    imageref: AlbaHover,
    imagemainref:alba1,
  },
  {
     index: "02",
    name: "BURGERLAB",
    category: "Resturant Chain",
    type: "Frontend",
    description:
      "A distinctive visual identity balancing organic forms with a structured, modern design system.",
    href: "https://burger-labs.netlify.app/",
    imageref:Burgerlab1,
    imagemainref:Burgerlab,
  },
  {
    index: "03",
    name: "Blossom",
    category: "Creative Direction",
    type: "Frontend",
    description:
      "A complete creative direction built around experimental layouts, sharp visual language, and contemporary art direction.",
    href: "https://blossom-hazel-omega.vercel.app/",
    imageref: Blossom,
    imagemainref:Blossom1,
  },
  {index: "04",
    name: "Story Vault",
    category: "Web Design",
    type: "Fullstack",
    description:
      "A fashion-forward digital experience combining expressive typography, immersive imagery, and fluid interactions.",
    href: "https://storyvaults.netlify.app",
    imageref: storyvalut,
    imagemainref:storyv,
   
  },
  {
    index: "05",
    name: "Atelier Nara",
    category: "Portfolio Site",
    type: "Fullstack",
    description:
      "An editorial portfolio experience designed to let the work breathe through minimal layouts and subtle motion.",
    href: "https://atelier-nara-example.com",
  },
  {
    index: "06",
    name: "Vanguard",
    category: "3D Motion",
    type: "Frontend",
    description:
      "An experimental 3D-driven visual experience focused on movement, depth, and cinematic transitions.",
    href: "https://vanguard-example.com",
  },
  {
    index: "07",
    name: "Aura Space",
    category: "Interior Web",
    type: "Backend",
    description:
      "A digital showcase for an interior studio with immersive imagery, spacious layouts, and architectural rhythm.",
    href: "https://aura-space-example.com",
  },
  {
    index: "08",
    name: "Kinetix",
    category: "App Design",
    type: "Fullstack",
    description:
      "A modern product interface designed around clarity, motion, and a highly responsive interaction system.",
    href: "https://kinetix-example.com",
  },
];

const INITIAL_PROJECTS = 3;
const PROJECTS_PER_LOAD = 5;

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);

  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS);

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  /*
   * Hide the GLOBAL custom cursor only while this section exists.
   */
  useEffect(() => {
    document.documentElement.classList.add("work-page");

    return () => {
      document.documentElement.classList.remove("work-page");
    };
  }, []);

  /*
   * Lock page scrolling while desktop modal is open.
   */
  useEffect(() => {
    if (selectedProject !== null && window.innerWidth >= 768) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  /*
   * Escape closes modal.
   */
  useEffect(() => {
    if (selectedProject === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

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

      const handleMouseMove = (event: MouseEvent) => {
        xTo(event.clientX);
        yTo(event.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    {
      scope: sectionRef,
    },
  );

  /*
   * Main entrance animation
   */
  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
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
        },
      );
    },
    {
      scope: sectionRef,
    },
  );

  /*
   * Animate newly revealed projects.
   */
  useGSAP(
    () => {
      if (visibleCount <= INITIAL_PROJECTS) {
        return;
      }

      const startIndex = visibleCount - PROJECTS_PER_LOAD;

      const newItems =
        sectionRef.current?.querySelectorAll(`[data-project-index]`);

      if (!newItems) return;

      const elements = Array.from(newItems).filter((element) => {
        const index = Number(element.getAttribute("data-project-index"));

        return index >= startIndex;
      });

      if (!elements.length) return;

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
        },
      );
    },
    {
      scope: sectionRef,
      dependencies: [visibleCount],
    },
  );

  /*
   * Reveal next batch.
   */
  const handleSeeMore = () => {
    setVisibleCount((current) =>
      Math.min(current + PROJECTS_PER_LOAD, projects.length),
    );
  };

  /*
   * Mobile project accordion.
   */
  const toggleMobileProject = (index: number) => {
    setMobileOpenIndex((current) => (current === index ? null : index));
  };

  /*
   * Open desktop project modal.
   */
  const openProject = (index: number) => {
    if (window.innerWidth < 768) return;

    setSelectedProject(index);
  };

  const selected = selectedProject !== null ? projects[selectedProject] : null;

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <>
      <section
        ref={sectionRef}
        id="work"
        className="
          relative
          flex
          min-h-screen
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
            min-h-screen
            w-full
            max-w-5xl
            flex-col
            py-16
            md:py-24
          "
        >
          {/* =====================================================
              HEADER
              ===================================================== */}

          <Reveal
            className="
              work-reveal
              mb-8
              shrink-0
              md:mb-12
            "
          >
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

          {/* =====================================================
              PROJECT LIST
              ===================================================== */}

          <div
            data-lenis-prevent
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
              {visibleProjects.map((project, index) => {
                const isMobileOpen = mobileOpenIndex === index;

                return (
                  <li
                    key={project.name}
                    data-project-index={index}
                    data-cursor="hide"
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
                      onClick={() => {
                        if (window.innerWidth >= 768) {
                          openProject(index);
                        } else {
                          toggleMobileProject(index);
                        }
                      }}
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
                      aria-expanded={
                        typeof window !== "undefined" && window.innerWidth < 768
                          ? isMobileOpen
                          : undefined
                      }
                    >
                      {/* LEFT */}

                      <div
                        className="
                            pointer-events-none
                            flex
                            min-w-0
                            items-center
                            gap-4
                            md:gap-8
                          "
                      >
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

                      {/* DESKTOP META */}

                      <div
                        className="
                            hidden
                            shrink-0
                            items-center
                            gap-6
                            md:flex
                          "
                      >
                        <span
                          className="
                              text-xs
                              uppercase
                              tracking-[0.16em]
                              text-gray-500
                              transition-colors
                              duration-300
                              group-hover:text-gray-300
                            "
                        >
                          {project.category}
                        </span>

                        <span
                          className="
                              min-w-[75px]
                              text-right
                              text-[10px]
                              uppercase
                              tracking-[0.18em]
                              text-gray-600
                              transition-colors
                              duration-300
                              group-hover:text-gray-400
                            "
                        >
                          {project.type}
                        </span>
                      </div>

                      {/* MOBILE PLUS / MINUS */}

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

                    {/* =================================================
                          MOBILE IMAGE
                          ================================================= */}

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
                          src={project.imagemainref ? project.imagemainref : mockPhoto(`work-${project.index}`, 600, 800)}
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

                        <div
                          className="
                              absolute
                              inset-0
                              bg-gradient-to-t
                              from-black/40
                              via-transparent
                              to-transparent
                            "
                        />
                      </div>

                      <div
                        className="
                            mt-3
                            flex
                            items-center
                            justify-between
                            px-1
                          "
                      >
                        <div>
                          <p
                            className="
                                text-sm
                                font-medium
                                text-gray-300
                              "
                          >
                            {project.category}
                          </p>

                          <p
                            className="
                                mt-1
                                text-[10px]
                                uppercase
                                tracking-[0.18em]
                                text-gray-600
                              "
                          >
                            {project.type}
                          </p>
                        </div>

                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="
                              text-[10px]
                              uppercase
                              tracking-[0.18em]
                              text-gray-500
                              transition-colors
                              duration-300
                              hover:text-white
                            "
                        >
                          View Project ↗
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* =====================================================
                SEE MORE
                ===================================================== */}

            {visibleCount < projects.length && (
              <div
                className="
                  flex
                  justify-center
                  py-10
                  md:py-14
                "
              >
                <button
                  type="button"
                  onClick={handleSeeMore}
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    gap-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-gray-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <span
                    className="
                      relative
                      overflow-hidden
                    "
                  >
                    <span
                      className="
                        block
                        transition-transform
                        duration-500
                        group-hover:-translate-y-full
                      "
                    >
                      See More
                    </span>

                    <span
                      className="
                        absolute
                        left-0
                        top-full
                        block
                        text-white
                        transition-transform
                        duration-500
                        group-hover:-translate-y-full
                      "
                    >
                      See More
                    </span>
                  </span>

                  <span
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-y-1
                    "
                  >
                    ↓
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================
            DESKTOP FLOATING IMAGE CURSOR
            ========================================================= */}

        <div
          ref={cursorRef}
          aria-hidden="true"
          className={`
            pointer-events-none
            fixed
            left-0
            top-0
            z-[9999]
            hidden
            will-change-transform
            md:block
            ${hoveredIndex !== null ? "opacity-100" : "opacity-0"}
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
            "
          >
            {/* CURSOR IMAGES */}

            {projects.map((project, index) => (
              <Image
                key={project.name}
                src={project.imageref ? project.imageref : mockPhoto(`work-${project.index}`, 600, 800)}
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

            {/* CURSOR META */}

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
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-white/60
                    "
                  >
                    Selected Work
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                    "
                  >
                    {projects[hoveredIndex].name}
                  </p>
                </div>

                <span
                  className="
                    font-mono
                    text-[9px]
                    text-white/60
                  "
                >
                  {projects[hoveredIndex].index}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          DESKTOP PROJECT MODAL
          ========================================================= */}

      {selected && (
        <div
          className="
            fixed
            inset-0
            z-[10000]
            hidden
            items-center
            justify-center
            bg-black/80
            p-6
            backdrop-blur-md
            md:flex
          "
          onClick={() => setSelectedProject(null)}
        >
          {/* MODAL CONTENT */}

          <div
            className="
              relative
              flex
              w-full
              max-w-5xl
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0a0a0a]
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project"
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/50
                text-gray-400
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/10
                hover:text-white
              "
            >
              <X className="h-4 w-4" />
            </button>

            {/* MODAL IMAGE */}

            <div
              className="
                relative
                hidden
                aspect-[4/3]
                w-[55%]
                shrink-0
                overflow-hidden
                lg:block
              "
            >
              
              <Image
                src={selected.imagemainref ? selected.imagemainref: mockPhoto(`work-${selected.index}`, 1000, 750)}
                alt={selected.name}
                fill
                sizes="55vw"
                className="object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  to-black/20
                "
              />
            </div>

            {/* MODAL CONTENT */}

            <div
              className="
                flex
                min-h-[420px]
                flex-1
                flex-col
                justify-between
                p-8
                md:p-12
              "
            >
              <div>
                {/* TOP META */}

                <div
                  className="
                    mb-12
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      font-mono
                      text-xs
                      tracking-[0.15em]
                      text-gray-500
                    "
                  >
                    ({selected.index})
                  </span>

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                    "
                  >
                    Selected Work
                  </span>
                </div>

                {/* CATEGORY + TYPE */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                    "
                  >
                    {selected.category}
                  </p>

                  <span className="text-gray-700">/</span>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                    "
                  >
                    {selected.type}
                  </p>
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-3
                    font-display
                    text-4xl
                    font-semibold
                    tracking-tight
                    text-white
                    md:text-6xl
                  "
                >
                  {selected.name}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-8
                    max-w-md
                    text-sm
                    leading-7
                    text-gray-400
                  "
                >
                  {selected.description}
                </p>
              </div>

              {/* MODAL FOOTER */}

              <div
                className="
                  mt-12
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-gray-600
                  "
                >
                  WDX® — Selected Works
                </span>

                <a
                  href={selected.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-xs
                    text-gray-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
