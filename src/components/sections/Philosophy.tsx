import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { MaskText } from "@/components/ui/Mask";

const principles = [
  {
    n: "01",
    title: "Focused, not bloated",
    body: "Until does one thing — count toward a moment — and does it exceptionally well. No clutter, no settings maze.",
  },
  {
    n: "02",
    title: "Privacy first",
    body: "Your data is yours. It lives on your device and syncs only through your private iCloud — never collected, never sold.",
  },
  {
    n: "03",
    title: "Delight over features",
    body: "Speed, polish, and low friction beat a checklist of capabilities every single time.",
  },
  {
    n: "04",
    title: "Calm by design",
    body: "No dark patterns, no guilt-driven streaks. Watching time should feel good, not anxious.",
  },
];

const stats = [
  { to: 10, suffix: "", label: "Curated gradients" },
  { to: 6, suffix: "", label: "Widget templates" },
  { to: 0, suffix: "", label: "Ads, ever" },
  { to: 0, suffix: "", label: "Accounts, ever" },
];

export default function Philosophy() {
  return (
    <section
      id="principles"
      className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="flex items-center gap-3 border-b hairline pb-4">
        <span className="inline-block h-1.5 w-1.5 bg-accent" />
        <span className="label">(01) Principles</span>
      </div>

      <h2 className="display mt-12 max-w-4xl text-[8vw] leading-[0.98] md:mt-16 md:text-[4.6vw]">
        <MaskText text="Built on principles, not" />{" "}
        <span className="serif-accent">engagement</span>{" "}
        <MaskText text="metrics." delay={0.08} />
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-24 md:grid-cols-2">
        {principles.map((p) => (
          <Reveal key={p.n}>
            <div className="flex gap-6 border-t hairline pt-6">
              <span className="label pt-1">{p.n}</span>
              <div>
                <h3 className="display text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-3 max-w-md text-ink-soft">{p.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Stats row */}
      <div className="mt-20 grid grid-cols-2 border-t hairline md:mt-28 md:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.label}>
            <div className="border-b border-r hairline px-2 py-10 md:border-b-0">
              <div className="display text-6xl md:text-7xl">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="label mt-3">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
