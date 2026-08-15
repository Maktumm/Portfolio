import { Check } from "lucide-react";
import Reveal from "./Reveal";

const plans = [
  {
    price: "$99",
    name: "Starter Plan",
    desc: "Perfect for small launches and personal sites that need a fast online presence.",
    points: [
      "One-page site",
      "Custom layout & visuals",
      "Mobile-first responsive build",
      "Fast delivery (within 7 days)",
      "Design system setup",
      "SEO-ready structure",
      "Basic CMS integration",
      "Contact form setup",
    ],
    featured: false,
  },
  {
    price: "$299",
    name: "Growth Plan",
    desc: "Designed for growing brands that need flexibility and CMS support.",
    points: [
      "Up to 5 pages",
      "CMS-powered sections",
      "Component-based structure",
      "Motion design & transitions",
      "Clean UX-focused layout",
      "Device-optimized responsiveness",
      "Style guide system",
      "Email capture / integrations",
    ],
    featured: true,
  },
  {
    price: "$899",
    name: "Full Scope Plan",
    desc: "Best for studios or teams needing structure and enterprise-level execution.",
    points: [
      "10+ pages with CMS",
      "Advanced layout strategy",
      "Full brand system support",
      "Animation direction",
      "Custom-built components",
      "CMS training",
      "Launch support + QA",
      "Performance optimization",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="hairline">
      <div className="container-px mx-auto max-w-content py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">(WDX® — 09) Project Pricing · Custom Quotes</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Pick Plans.
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted">
            Custom options, transparent design packages, pricing tiers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  p.featured ? "border-paper bg-surface" : "border-line"
                }`}
              >
                <p className="font-display text-4xl">
                  {p.price}
                  <span className="text-base font-normal text-muted">
                    /Month
                  </span>
                </p>
                <h3 className="mt-4 font-display text-xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted">{p.desc}</p>
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-muted" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 w-full rounded-full py-3 text-center text-sm font-medium transition-opacity hover:opacity-80 ${
                    p.featured ? "bg-paper text-ink" : "border border-line"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
