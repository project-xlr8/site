import Link from "next/link";
import Logo from "@/components/Logo";

type FooterLink = { label: string; href: string };

const cols: { title: string; links: FooterLink[] }[] = [
  {
    title: "Project",
    links: [
      { label: "Apps", href: "/#apps" },
      { label: "Principles", href: "/#principles" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "Twitter / X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Email", href: "mailto:hello@project-xlr8.app" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Privacy Policy", href: "/until/privacy-policy" }],
  },
];

export default function Footer() {
  return (
    <footer className="px-6 pt-20 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-10 border-t hairline pt-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo className="text-lg" />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              Until — a calm, beautiful countdown for iOS. Free, no ads,
              privacy-first. Made by project-xlr8.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <span className="label">{c.title}</span>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="link-wipe text-sm text-ink/80 transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant outline wordmark */}
        <div className="overflow-hidden pt-16">
          <span className="display text-outline block select-none text-center text-[13vw] leading-[0.8]">
            <span className="text-[0.5em]">project-</span>xlr8
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t hairline py-6 text-center sm:flex-row sm:text-left">
          <span className="label">© {new Date().getFullYear()} project-xlr8</span>
          <Link href="/until/privacy-policy" className="link-wipe label hover:text-ink">
            Privacy-first, by design
          </Link>
        </div>
      </div>
    </footer>
  );
}
