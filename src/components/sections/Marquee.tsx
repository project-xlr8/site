const items = [
  "Trips",
  "Birthdays",
  "Weddings",
  "Exams",
  "Launch day",
  "Anniversaries",
  "Concerts",
  "New babies",
  "Sober days",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y hairline py-7">
      {[0, 1].map((dup) => (
        <div
          key={dup}
          aria-hidden={dup === 1}
          className="animate-marquee flex shrink-0 items-center whitespace-nowrap"
        >
          {row.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="display px-8 text-3xl text-ink/70 sm:text-4xl">
                {item}
              </span>
              <span className="serif-accent text-2xl text-accent/70">&</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
