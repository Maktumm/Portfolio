"use client";

import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What services do you offer?",
    a: "Brand identity, art direction, motion design, and full website builds — from strategy through launch.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "One-page sites typically ship within 7 days; larger, multi-page projects run 3–6 weeks depending on scope.",
  },
  {
    q: "Do you only work in Framer?",
    a: "Framer is the primary build tool, but projects can also be delivered as custom code, including Next.js.",
  },
  {
    q: "Can you handle both design and build?",
    a: "Yes — every engagement covers the full path from concept and visual system to a shipped, responsive build.",
  },
  {
    q: "Do you offer brand strategy too?",
    a: "Yes, strategy work is available as a standalone engagement or bundled into a full identity and site project.",
  },
  {
    q: "What's your process like?",
    a: "Discovery, direction, design, build, and QA — with regular checkpoints so feedback shapes the work early.",
  },
];

function FAQItem({
  index,
  q,
  a,
  defaultOpen,
}: {
  index: number;
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  const bodyRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (!bodyRef.current || !iconRef.current) return;

    if (next) {
      gsap.set(bodyRef.current, { height: "auto" });
      gsap.from(bodyRef.current, { height: 0, duration: 0.35, ease: "power2.out" });
      gsap.to(iconRef.current, { rotate: 45, duration: 0.3 });
    } else {
      gsap.to(bodyRef.current, { height: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(iconRef.current, { rotate: 0, duration: 0.3 });
    }
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="text-sm text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg md:text-xl">{q}</span>
        </span>
        <span ref={iconRef} className="shrink-0">
          <Plus size={20} />
        </span>
      </button>
      <div ref={bodyRef} className="overflow-hidden" style={{ height: open ? "auto" : 0 }}>
        <p className="pb-6 pl-9 text-sm leading-relaxed text-muted">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="hairline">
      <div className="container-px mx-auto max-w-content py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">(WDX® — 11) Help Center · Clarifications</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl md:text-4xl">
            Clarifying deliverables before they begin, with real process and
            honest アンサー.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} index={i} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
