import Reveal from "@/components/ui/Reveal";
import { MaskText } from "@/components/ui/Mask";

const points = [
  "Count down to any future moment — or up from a past one.",
  "Recurring birthdays & anniversaries roll forward automatically.",
  "Gorgeous widgets: Home Screen, Lock Screen & StandBy — every size, all free.",
  "Lives in the Dynamic Island with real-time Live Activities.",
  "Ten curated gradients and six widget templates — beautiful by default.",
  "No ads, no accounts, no in-app purchases. Private and offline-first.",
];

export default function Apps() {
  return (
    <section
      id="apps"
      className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="flex items-center gap-3 border-b hairline pb-4">
        <span className="inline-block h-1.5 w-1.5 bg-accent" />
        <span className="label">(02) Apps</span>
      </div>

      <div className="grid grid-cols-1 gap-10 pt-12 md:grid-cols-12 md:pt-16">
        <h2 className="display text-[8vw] leading-[0.95] md:col-span-7 md:text-[4.2vw]">
          <MaskText text="One app," />{" "}
          <span className="serif-accent">so far.</span>
        </h2>
        <div className="md:col-span-4 md:col-start-9">
          <Reveal>
            <p className="text-ink-soft">
              project-xlr8 makes a small family of focused apps. This is the
              first —
              built whole before the next one begins.
            </p>
          </Reveal>
        </div>
      </div>

      {/* The app */}
      <Reveal>
        <article className="liquid-glass mt-16 rounded-3xl p-8 md:mt-24 md:p-14">
          {/* Pills: name + working title + platform */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              <span className="display text-lg leading-none">Until</span>
            </span>
            <span className="label">xlr8-1</span>
            <span className="label ml-auto text-accent">iOS 26+ · Free</span>
          </div>

          {/* Headline + tagline */}
          <div className="mt-12 md:mt-16">
            <h3 className="display text-5xl leading-[0.95] md:text-7xl">
              <span className="text-muted">Count down to</span>{" "}
              <span className="serif-accent">what matters.</span>
            </h3>
            <p className="mt-6 max-w-xl text-ink-soft">
              A calm, beautiful countdown to — and up from — any moment, shown
              everywhere you look.
            </p>
          </div>

          {/* Points */}
          <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-1 md:mt-16 md:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex gap-4 border-t hairline py-5 text-ink-soft"
              >
                <span className="serif-accent text-xl leading-none text-accent">
                  →
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </section>
  );
}
