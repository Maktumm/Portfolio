import Marquee from "./Marquee";

const clients = [
  "Studio Analog",
  "Framehaus",
  "Nuro",
  "Vektor Inc.",
  "Willow Studio",
  "Modular Eight",
];

export default function ClientLogos() {
  return (
    <section className="hairline">
      <Marquee speed={30} className="py-8">
        {clients.map((c) => (
          <span
            key={c}
            className="mx-10 whitespace-nowrap font-display text-lg tracking-tight text-muted/70"
          >
            {c}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
