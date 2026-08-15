import Reveal from "./Reveal";

const labels = ["Precise", "Structured", "Focused"];

const services = [
  {
    n: "01",
    title: "Art Direction",
    body: "We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.",
  },
  {
    n: "02",
    title: "Brand Identity",
    body: "From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable.",
  },
  {
    n: "03",
    title: "Motion Direction",
    body: "We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention.",
  },
  {
    n: "04",
    title: "Framer Sites",
    body: "Design meets execution with real-time, scalable websites — all crafted natively for speed and precision.",
  },
];

export default function Services() {
  return (
    <section id="services" className="hairline">
      <div className="container-px mx-auto max-w-content py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">(WDX® — 04) Capabilities</p>
          <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-display text-3xl md:text-4xl">Services</h2>
            <span className="text-muted">(6)</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
            {labels.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="h-full bg-ink p-8 md:p-10">
                <span className="text-sm text-muted">{s.n}</span>
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
