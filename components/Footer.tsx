import Image from "next/image";
import { mockPhoto } from "@/lib/images";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

const networks = ["Instagram", "Dribbble", "Framer", "Twitter"];
const closingSeeds = [
  "close-1",
  "close-2",
  "close-3",
  "close-4",
  "close-5",
  "close-6",
  "close-7",
  "close-8",
];

export default function Footer() {
  return (
    <footer id="contact" className="hairline">
      <Marquee speed={45} className="border-b border-line py-4">
        {closingSeeds.map((s) => (
          <div
            key={s}
            className="relative mx-2 h-28 w-20 shrink-0 overflow-hidden rounded-lg md:h-40 md:w-28"
          >
            <Image
              src={mockPhoto(s, 200, 280)}
              alt="Studio wrap"
              fill
              sizes="150px"
              className="mono-photo object-cover"
            />
          </div>
        ))}
      </Marquee>

      <div className="container-px mx-auto max-w-content py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">
            (WDX® — 12) Final Section · Studio Wrap
          </p>
          <p className="mt-2 text-sm text-muted">
            Independent · Overview · Multidisciplinary · Focused
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-snug md:text-5xl">
            I build expressive, performance-driven websites by blending clean
            design and native development to help creative teams and modern
            brands stand out with intention.
          </h2>

          <a
            href="mailto:hello@akihiko.studio"
            className="mt-10 inline-block rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
        </Reveal>

        <div className="mt-20 flex flex-col gap-8 border-t border-line pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <a href="#top" className="text-muted hover:text-paper">
            Back to top
          </a>

          <ul className="flex flex-wrap gap-6 text-muted">
            {networks.map((n) => (
              <li key={n}>
                <a href="#" className="hover:text-paper">
                  {n}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-muted">©2025 Akihiko®</p>
        </div>
      </div>
    </footer>
  );
}
