import Logo from "@/components/Logo";

const cols = [
  {
    title: "Project",
    links: ["Apps", "Principles"],
  },
  {
    title: "Elsewhere",
    links: ["Twitter / X", "Instagram", "Email"],
  },
];

export default function Footer() {
  return (
    <footer className="px-6 pt-20 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-10 border-t hairline pt-12 md:grid-cols-3">
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
                  <li key={l}>
                    <a
                      href="#"
                      className="link-wipe text-sm text-ink/80 transition-colors hover:text-ink"
                    >
                      {l}
                    </a>
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
          <span className="label">Privacy-first, by design</span>
        </div>
      </div>
    </footer>
  );
}
