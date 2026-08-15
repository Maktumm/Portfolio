import Image from "next/image";
import { mockPhoto } from "@/lib/images";
import Reveal from "./Reveal";

const posts = [
  {
    date: "May 21, 2024",
    author: "Gregory Lalle",
    tag: "Web Design",
    title:
      "Good design is not just about structure—it's about the emotional weight of space, rhythm, and silence.",
    seed: "blog-1",
  },
  {
    date: "February 5, 2024",
    author: "Clive Willow",
    tag: "Design",
    title:
      "Typography today is no longer static. It breathes, scales, and adapts—blurring the lines between function and expression.",
    seed: "blog-2",
  },
  {
    date: "June 2, 2024",
    author: "Raven Claw",
    tag: "Visual Identity",
    title:
      "Minimal design isn't emptiness—it's clarity, intention, and the reduction of noise to amplify what truly matters.",
    seed: "blog-3",
  },
  {
    date: "June 10, 2025",
    author: "Clay Nicolas",
    tag: "Portfolio",
    title:
      "Portfolios today must be more than archives—they need to feel alive, intentional, and editorial by design.",
    seed: "blog-4",
  },
];

export default function Blog() {
  return (
    <section className="hairline">
      <div className="container-px mx-auto max-w-content py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">(WDX® — 10) Visual Journal · Creative Notes</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl md:text-4xl">
            Featured Article©
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <a
                href="#"
                className="group flex h-full flex-col rounded-2xl border border-line p-8 transition-colors hover:bg-surface"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image
                    src={mockPhoto(p.seed, 800, 450)}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="mono-photo object-cover"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-xs text-muted">
                  <span>{p.author}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.tag}</span>
                </div>
                <p className="mt-4 font-display text-lg leading-snug">
                  {p.title}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
