"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Terminal as TerminalIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    number: "01",
    question: "What services do you offer?",
    answer:
      "I build modern digital experiences across design and development — including creative direction, UI design, motion, and custom Next.js websites.",
  },
  {
    number: "02",
    question: "How long does a project take?",
    answer:
      "Smaller websites can move from concept to launch within a week, while larger experiences typically take several weeks depending on scope and complexity.",
  },
  {
    number: "03",
    question: "Do you design and develop?",
    answer:
      "Yes. I handle both sides of the process, allowing the visual system and final implementation to stay closely connected.",
  },
  {
    number: "04",
    question: "What technologies do you use?",
    answer:
      "My primary stack includes Next.js, React, TypeScript, Tailwind CSS, GSAP, and modern APIs — chosen around the needs of each project.",
  },
  {
    number: "05",
    question: "Can you build something completely custom?",
    answer:
      "Absolutely. I prefer custom interfaces over generic templates, with interaction, typography, layout, and development shaped around the project.",
  },
  {
    number: "06",
    question: "What does working together look like?",
    answer:
      "The process moves through direction, design, development, refinement, testing, and launch — keeping communication clear and decisions intentional throughout.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalAnswerRef = useRef<HTMLParagraphElement>(null);
  const terminalNumberRef = useRef<HTMLSpanElement>(null);
  const terminalStatusRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const questionItems =
        gsap.utils.toArray<HTMLElement>(".faq-question");

      const setActive = (index: number) => {
        questionItems.forEach((item, i) => {
          const active = i === index;

          gsap.to(item, {
            opacity: active ? 1 : 0.35,
            x: active ? 8 : 0,
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });

          const indicator = item.querySelector(
            ".faq-indicator"
          ) as HTMLElement | null;

          if (indicator) {
            gsap.to(indicator, {
              scaleX: active ? 1 : 0,
              duration: 0.4,
              ease: "power3.out",
              overwrite: true,
            });
          }
        });

        const faq = faqs[index];

        /*
         * Terminal transition
         */
        const terminal = terminalAnswerRef.current;
        const number = terminalNumberRef.current;
        const status = terminalStatusRef.current;

        if (!terminal || !number || !status) return;

        const transition = gsap.timeline();

        transition
          .to(
            [terminal, number],
            {
              opacity: 0,
              y: -8,
              duration: 0.18,
              ease: "power2.in",
            }
          )
          .call(() => {
            terminal.textContent = faq.answer;
            number.textContent = faq.number;
            status.textContent = "response received";
          })
          .set([terminal, number], {
            y: 8,
          })
          .to([terminal, number], {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          });
      };

      /*
       * Initial state
       */
      questionItems.forEach((item, index) => {
        gsap.set(item, {
          opacity: index === 0 ? 1 : 0.35,
          x: index === 0 ? 8 : 0,
        });

        const indicator = item.querySelector(
          ".faq-indicator"
        ) as HTMLElement | null;

        if (indicator) {
          gsap.set(indicator, {
            scaleX: index === 0 ? 1 : 0,
          });
        }
      });

      /*
       * Each question gets its own scroll zone.
       *
       * The terminal remains sticky while the questions
       * move through the viewport.
       */
      questionItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 52%",
          end: "bottom 52%",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });

      /*
       * Desktop terminal reveal
       */
      gsap.from(".faq-terminal", {
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      /*
       * Header reveal
       */
      gsap.from(".faq-header", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      /*
       * Progress indicator
       */
      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
        },
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (
            trigger.vars.trigger === sectionRef.current ||
            questionItems.includes(trigger.vars.trigger as HTMLElement)
          ) {
            trigger.kill();
          }
        });
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="hairline relative bg-ink text-paper"
    >
      <div className="container-px mx-auto max-w-content">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="faq-header flex items-center justify-between border-b border-line py-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-line" />

            <p className="eyebrow">
              (WDX® — 6) Help Center
            </p>
          </div>

          <span className="font-mono text-[9px] tracking-[0.16em] text-muted">
            QUESTIONS / ANSWERS
          </span>
        </div>

        {/* =====================================================
            DESKTOP FAQ
        ===================================================== */}

        <div className="hidden md:grid md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">

          {/* =================================================
              LEFT — QUESTIONS
          ================================================= */}

          <div className="relative py-28">

            <div className="mb-14">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                Common questions
              </p>

              <h2 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.055em] lg:text-7xl">
                Let's clear
                <br />
                things up.
              </h2>
            </div>

            <div className="relative">

              {/* Vertical progress */}

              <div className="absolute left-[3px] top-0 h-full w-px bg-line">
                <div
                  ref={progressRef}
                  className="h-full w-full origin-top scale-y-0 bg-paper"
                />
              </div>

              <div className="space-y-0">

                {faqs.map((faq) => (
                  <div
                    key={faq.number}
                    className="faq-question group relative pl-8 py-8"
                  >

                    {/* Active indicator */}

                    <div
                      className="
                        faq-indicator
                        absolute
                        left-0
                        top-0
                        h-full
                        w-px
                        origin-left
                        scale-x-0
                        bg-paper
                      "
                    />

                    <div className="flex items-start gap-5">

                      <span className="shrink-0 pt-1 font-mono text-[9px] tracking-[0.16em] text-muted">
                        {faq.number}
                      </span>

                      <h3 className="max-w-xl font-display text-2xl font-medium leading-[1.05] tracking-[-0.035em] lg:text-4xl">
                        {faq.question}
                      </h3>

                    </div>

                    <div className="mt-5 pl-[2.35rem]">
                      <span className="block h-px w-0 bg-line transition-all duration-500 group-hover:w-12" />
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — STICKY TERMINAL
          ================================================= */}

          <div className="relative">

            <div className="sticky top-[18vh] flex min-h-[82vh] items-center">

              <div className="faq-terminal w-full overflow-hidden rounded-xl border border-line bg-black/60 shadow-2xl">

                {/* Terminal top bar */}

                <div className="flex items-center justify-between border-b border-line px-5 py-4">

                  <div className="flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />

                  </div>

                  <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-muted">
                    <TerminalIcon className="h-3 w-3" />
                    mak-terminal
                  </div>

                  <span className="font-mono text-[8px] text-muted">
                    WDX/11
                  </span>
                </div>

                {/* Terminal body */}

                <div className="min-h-[390px] p-6 font-mono text-xs md:p-8 md:text-sm">

                  <div className="flex items-center gap-2 text-muted">
                    <span className="text-paper">
                      mak@studio
                    </span>

                    <span>:</span>

                    <span>~</span>

                    <span>$</span>

                    <span className="text-white/50">
                      answer --current
                    </span>
                  </div>

                  <div className="mt-8">

                    <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-muted">

                      <span>
                        question
                      </span>

                      <span className="h-px w-8 bg-line" />

                      <span ref={terminalNumberRef}>
                        01
                      </span>

                    </div>

                    <p
                      ref={terminalAnswerRef}
                      className="mt-7 max-w-xl text-sm leading-7 text-white/75 md:text-base md:leading-8"
                    >
                      {faqs[0].answer}
                    </p>

                  </div>

                  {/* Terminal footer */}

                  <div className="mt-16 border-t border-line pt-5">

                    <div className="flex items-center justify-between">

                      <span className="text-[9px] uppercase tracking-[0.16em] text-muted">
                        status
                      </span>

                      <span
                        ref={terminalStatusRef}
                        className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-white/50"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                        response received
                      </span>

                    </div>

                    <div className="mt-5 flex items-center gap-2 text-muted">

                      <span>
                        $
                      </span>

                      <span className="h-3 w-px animate-pulse bg-paper" />

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE
        ===================================================== */}

        <div className="md:hidden">

          <div className="py-16">

            <div className="faq-header">

              <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                Common questions
              </p>

              <h2 className="mt-5 max-w-sm font-display text-4xl font-semibold leading-[0.9] tracking-[-0.055em]">
                Let's clear
                <br />
                things up.
              </h2>

            </div>

            <div className="mt-16 border-t border-line">

              {faqs.map((faq) => (
                <div
                  key={faq.number}
                  className="border-b border-line py-9"
                >

                  {/* ONLY NUMBER */}

                  <span className="font-mono text-[9px] tracking-[0.16em] text-muted">
                    {faq.number}
                  </span>

                  <h3 className="mt-5 max-w-sm font-display text-2xl font-medium leading-[1] tracking-[-0.035em]">
                    {faq.question}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
                    {faq.answer}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-10 flex items-center justify-between">

              <span className="text-[9px] uppercase tracking-[0.18em] text-muted">
                End of questions
              </span>

              <a
                href="#contact"
                className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-paper"
              >
                Still have questions?

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}