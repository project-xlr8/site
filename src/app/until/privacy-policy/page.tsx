import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — project-xlr8",
  description:
    "How project-xlr8 apps, including Until, handle your data. The short version: they don't. No accounts, no analytics, no tracking — everything stays on your device.",
};

const lastUpdated = "June 18, 2026";

type Section = { heading: string; body: React.ReactNode };

const sections: Section[] = [
  {
    heading: "The short version",
    body: (
      <>
        <strong className="text-ink">Until collects nothing.</strong> There are
        no accounts, no sign-ups, and no analytics. Everything you create —
        timers, dates, gradients, and photos — lives only on your device and in
        your own iCloud backups. We never see it, and there are no servers for it
        to travel to.
      </>
    ),
  },
  {
    heading: "Information we collect",
    body: (
      <>
        None. Until does not collect, transmit, or store any personal
        information on our side. We don&rsquo;t ask for your name, email, or any
        identifier, and the app has no login.
      </>
    ),
  },
  {
    heading: "Data stored on your device",
    body: (
      <>
        The timers and countdowns you create are saved locally on your device.
        To power the Home Screen, Lock Screen, and StandBy widgets — and the
        Dynamic Island Live Activities — this data is shared with the app&rsquo;s
        own widget extension through a private iOS{" "}
        <span className="serif-accent text-accent">App Group</span> container.
        That container never leaves your device.
      </>
    ),
  },
  {
    heading: "Photos",
    body: (
      <>
        If you choose a background photo for a timer, iOS lets you pick that
        image and Until stores a copy locally for that timer. We request access
        only when you tap to add a photo, the selection stays on your device, and
        we never upload it anywhere.
      </>
    ),
  },
  {
    heading: "Analytics & tracking",
    body: (
      <>
        There are none. Until contains no analytics SDKs, no advertising
        identifiers, and no third-party tracking of any kind. We do not use
        cookies in the app, and this website does not run analytics or
        advertising either.
      </>
    ),
  },
  {
    heading: "Third parties",
    body: (
      <>
        We do not share data with third parties because there is no data to
        share. The only external party involved is Apple, which may handle your
        own iCloud backups under{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          className="link-wipe text-ink underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          Apple&rsquo;s Privacy Policy
        </a>
        .
      </>
    ),
  },
  {
    heading: "Children",
    body: (
      <>
        Until is suitable for all ages. Because the app collects no personal
        information from anyone, it collects none from children.
      </>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <>
        If this policy ever changes, we&rsquo;ll update the date at the top of
        this page. Since the apps are offline-first and collect nothing,
        substantive changes should be rare.
      </>
    ),
  },
  {
    heading: "Contact",
    body: (
      <>
        Questions about privacy? Reach us at{" "}
        <a
          href="mailto:hello@project-xlr8.app"
          className="link-wipe text-ink underline-offset-4"
        >
          hello@project-xlr8.app
        </a>
        .
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="relative">
      {/* Lightweight header with a way back home */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6">
        <div className="liquid-glass mx-auto flex max-w-[1100px] items-center justify-between rounded-full px-6 py-3.5 md:px-9">
          <Link href="/" aria-label="project-xlr8 — home">
            <Logo className="text-2xl md:text-[1.6rem]" />
          </Link>
          <Link
            href="/"
            className="link-wipe text-[0.72rem] uppercase tracking-[0.14em] text-ink/65 transition-colors hover:text-ink"
          >
            ← Back
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-[820px] px-6 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48">
        <div className="flex items-center gap-3 border-b hairline pb-4">
          <span className="inline-block h-1.5 w-1.5 bg-accent" />
          <span className="label">Legal · Privacy</span>
        </div>

        <Reveal>
          <h1 className="display mt-12 text-[12vw] leading-[0.95] md:text-[5.5vw]">
            Privacy, <span className="serif-accent">by design.</span>
          </h1>
          <p className="label mt-6">Last updated · {lastUpdated}</p>
          <p className="mt-8 max-w-xl text-ink-soft">
            project-xlr8 makes a small family of focused apps, starting with
            Until. They are private and offline-first by default — this page
            explains exactly what that means.
          </p>
        </Reveal>

        <div className="mt-16 space-y-px md:mt-24">
          {sections.map((s, i) => (
            <Reveal key={s.heading}>
              <article className="grid grid-cols-1 gap-2 border-t hairline py-8 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <span className="label">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                  <h2 className="display mt-2 text-2xl leading-tight">
                    {s.heading}
                  </h2>
                </div>
                <p className="text-ink-soft md:col-span-8">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
