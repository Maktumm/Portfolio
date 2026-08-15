"use client";
import Lenis from "@studio-freight/react-lenis";
import Image from "next/image";
import { useState, useRef } from "react";
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

  useGSAP(() => {
    if (!cursorRef.current) return;
    
    // Centers the floating image exactly on the mouse cursor
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    // Creates high-performance setters for the cursor tracking
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      id="work" 
      // Locks the section to exactly 100vh height
       className="bg-black text-white h-screen flex flex-col justify-center relative"
    >
      <div className="container-px mx-auto max-w-5xl w-full flex flex-col h-full py-16 md:py-24">
        
        {/* Header Section */}
        <Reveal className="mb-8 md:mb-12 shrink-0">
          <p className="eyebrow text-gray-400 uppercase tracking-widest text-xs font-medium mb-2">
            (WDX® — 03) Featured Works©
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
        </Reveal>

        {/* Scrollable list area (Allows scrolling if projects exceed 100vh) */}
        <div   data-lenis-prevent className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] border-t border-white/10">
          <ul className="flex flex-col w-full">
            {projects.map((p, i) => (
              <li 
                key={p.name}
                className="group border-b border-white/10"
                // Desktop Hover triggers the floating cursor image
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Row Content */}
                <div 
                  className="w-full flex items-center justify-between py-5 md:py-6 cursor-pointer"
                  // Mobile Click toggles the inline image
                  onClick={() => setMobileOpenIndex(mobileOpenIndex === i ? null : i)}
                >
                  <div className="flex items-center gap-4 md:gap-8 pointer-events-none">
                    <span className="text-gray-500 text-sm font-mono shrink-0">
                      ({p.index})
                    </span>
                    <h3 className="text-3xl md:text-5xl font-display font-semibold transition-colors duration-300 group-hover:text-gray-300">
                      {p.name}
                    </h3>
                  </div>
                  
                  {/* Plus/Minus Icon */}
                  <div className="text-gray-400 transition-transform duration-500 group-hover:rotate-90 md:group-hover:rotate-0">
                    {mobileOpenIndex === i ? <Minus className="md:hidden" /> : <Plus />}
                  </div>
                </div>

                {/* Mobile Accordion Image (Hidden entirely on PC) */}
                <div 
                  className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    mobileOpenIndex === i ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <Image
                      src={mockPhoto(`work-${p.index}`, 600, 450)}
                      alt={p.name}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-3 px-1">
                    <p className="text-sm font-medium text-gray-300">{p.category}</p>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">View Project ↗</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* PC Floating Cursor Image (Hidden on mobile) */}
      <div 
        ref={cursorRef}
        className={`hidden md:block fixed top-0 left-0 pointer-events-none z-50 transition-all duration-300 ease-out ${
          hoveredIndex !== null ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="relative w-[320px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10">
          {/* Render all images and fade in the active one to avoid loading flickering */}
          {projects.map((p, i) => (
            <Image
              key={p.name}
              src={mockPhoto(`work-${p.index}`, 600, 800)}
              alt={p.name}
              fill
              sizes="320px"
              priority
              className={`object-cover absolute top-0 left-0 transition-opacity duration-300 ${
                hoveredIndex === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}