import Image from "next/image";
import { mockPhoto } from "@/lib/images";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Akihiko elevated every layer of our brand's online presence. From motion details to structural layout, every piece felt crafted and intentional.",
    name: "Lisa Kuroda",
    role: "Founder, Studio Analog",
    seed: "avatar-1",
  },
  {
    quote:
      "Akihiko approaches every project with a deep sense of purpose. His work is never just about the surface — it's about how each element functions and flows.",
    name: "Daniel Reyes",
    role: "Director, Framehaus",
    seed: "avatar-2",
  },
  {
    quote:
      "His ability to merge storytelling with clean interaction design is unmatched. He understands not just how things should look, but why.",
    name: "Mei Tanaka",
    role: "UX Designer, Nuro",
    seed: "avatar-3",
  },
  {
    quote:
      "Working with Akihiko felt like bringing on a creative partner who truly understood our goals — raw ideas became something stunning.",
    name: "Julian Pierce",
    role: "Director, Vektor Inc.",
    seed: "avatar-4",
  },
  {
    quote:
      "Akihiko brings a rare balance of creativity and discipline. Incredibly fast without ever sacrificing attention to detail.",
    name: "Hana Samoto",
    role: "CEO, Willow Studio",
    seed: "avatar-5",
  },
];

export default function Testimonials() {
  return (
    <section className="hairline">
      <div className="container-px mx-auto max-w-content py-20 md:py-28">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">(WDX® — 06) Testimonials · Real Feedback</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl md:text-4xl">
              Testimonial© — Reviews
            </h2>
          </div>
          <a
            href="#contact"
            className="w-fit rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-paper"
          >
            Get in touch
          </a>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04}>
              <blockquote className="flex h-full flex-col justify-between rounded-2xl border border-line p-8">
                <p className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-8 flex items-center gap-3 text-sm">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={mockPhoto(t.seed, 100, 100)}
                      alt={t.name}
                      fill
                      sizes="40px"
                      className="mono-photo object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-muted">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
