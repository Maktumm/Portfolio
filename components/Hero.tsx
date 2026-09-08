
"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "motion/react";

const services = [
  "Web Design",
  "Development",
  "Creative Direction",
  "Digital Experiences",
];

const floatingItems = [
  {
    text: "HELLO",
    className: "left-[8%] top-[24%] rotate-[-12deg]",
    duration: 5,
    delay: 0,
  },
  {
    text: "01",
    className: "right-[12%] top-[19%] rotate-[8deg]",
    duration: 6,
    delay: 0.8,
  },
  {
    text: "MAKTUM WAS HERE",
    className: "bottom-[28%] left-[7%] rotate-[6deg]",
    duration: 7,
    delay: 1.2,
  },
  {
    text: "∞",
    className: "bottom-[22%] right-[9%] rotate-[-8deg]",
    duration: 5.5,
    delay: 0.4,
  },
];

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-black text-white">
      {/* SUBTLE SPACE DOTS */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-white/40" />
        <span className="absolute left-[78%] top-[32%] h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="absolute left-[22%] top-[72%] h-1 w-1 rounded-full bg-white/30" />
        <span className="absolute left-[88%] top-[75%] h-1 w-1 rounded-full bg-white/40" />
        <span className="absolute left-[51%] top-[12%] h-0.5 w-0.5 rounded-full bg-white/50" />
      </div>

      {/* FLOATING EASTER EGGS */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0, 8, 0],
            rotate: [0, 2, -2, 1, 0],
          }}
          transition={{
            opacity: {
              duration: 0.8,
              delay: item.delay,
            },
            scale: {
              duration: 0.8,
              delay: item.delay,
            },
            y: {
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            },
            rotate: {
              duration: item.duration + 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            },
          }}
          className={`
            pointer-events-none
            absolute
            z-10
            hidden
            rounded-full
            border
            border-white/20
            px-3
            py-1.5
            font-mono
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-white/35
            md:block
            ${item.className}
          `}
        >
          {item.text}
        </motion.div>
      ))}

      {/* FLOATING STAR */}
      <motion.div
        animate={{
          y: [0, -12, 0, 8, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="pointer-events-none absolute right-[25%] top-[23%] hidden md:block"
      >
        <Star className="h-5 w-5 stroke-[1] text-white/30" />
      </motion.div>

      {/* ORBIT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          hidden
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-white/[0.06]
          md:block
        "
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1600px] flex-col px-4 py-4 sm:px-6 md:px-8 lg:px-10">
        {/* TOP BAR */}
        <motion.header
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid shrink-0 grid-cols-2 border border-white/15 md:grid-cols-4"
        >
          <div className="border-r border-white/15 p-3">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-white/40">
              MAKTUM®
            </span>

            <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-white/70">
              Independent Developer
            </span>
          </div>

          <div className="hidden border-r border-white/15 p-3 md:block">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-white/40">
              Based in
            </span>

            <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-white/70">
              Bangladesh
            </span>
          </div>

          <div className="hidden border-r border-white/15 p-3 md:block">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-white/40">
              Focus
            </span>

            <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-white/70">
              Digital Experiences
            </span>
          </div>

          <div className="p-3 text-right">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-white/40">
              2026
            </span>

            <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-white/70">
              Available
            </span>
          </div>
        </motion.header>

        {/* CENTER CONTENT */}
        <main className="flex min-h-0 flex-1 items-center justify-center">
          <div className="w-full max-w-5xl text-center">
            {/* SMALL INTRO */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 flex items-center justify-center gap-3"
            >
              <span className="h-px w-7 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.22em] text-white/45">
                Hey, I'm Maktum
              </span>

              <span className="h-px w-7 bg-white/30" />
            </motion.div>

            {/* MAIN TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mx-auto
                max-w-[1100px]
                font-display
                text-[14vw]
                font-medium
                leading-[0.9]
                tracking-[-0.04em]
                sm:text-[11vw]
                md:text-[8.5vw]
                lg:text-[7.5vw]
              "
            >
             Where Ideas<br/>Meet The Web
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: "easeOut",
              }}
              className="
                mx-auto
                mt-7
                max-w-md
                text-xs
                leading-relaxed
                text-white/45
                sm:text-sm
              "
            >
              Independent web developer creating clean, expressive and
              performance-driven digital experiences.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="mt-7 flex items-center justify-center gap-5"
            >
              <Link
                href="#work"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-black
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              >
                View my work

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#contact"
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-white/50
                  transition-colors
                  hover:text-white
                "
              >
                Let's talk
              </Link>
            </motion.div>
          </div>
        </main>

        {/* BOTTOM */}
        <div className="shrink-0">
          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-2 border-y border-white/15 md:grid-cols-4"
          >
            {services.map((service, index) => (
              <div
                key={service}
                className={`
                  flex
                  min-h-12
                  items-center
                  justify-between
                  px-3
                  py-3
                  md:px-4
                  ${
                    index % 2 === 0
                      ? "border-r border-white/15"
                      : "md:border-r md:border-white/15"
                  }
                  ${index < 2 ? "border-b border-white/15 md:border-b-0" : ""}
                  ${index === 3 ? "md:border-r-0" : ""}
                `}
              >
                <span className="text-[8px] uppercase tracking-[0.15em] text-white/55 md:text-[9px]">
                  {service}
                </span>

                <span className="font-mono text-[8px] text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </motion.div>

          {/* TINY FOOTER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center justify-between pt-3"
          >
            <span className="font-mono text-[8px] text-white/25">
              © 2026 MAKTUM
            </span>

            <span className="font-mono text-[8px] text-white/25">
              SCROLL ↓
            </span>

            <span className="font-mono text-[8px] text-white/25">
              01 / 06
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

