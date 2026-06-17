import type { CSSProperties } from "react";

/**
 * The "8" rendered as two linked rings (lower ring in the teal accent),
 * numeral-proportioned to sit inline within the wordmark.
 */
export function Ring8({
  className,
  style,
  topStroke = "currentColor",
  bottomStroke = "var(--accent)",
  strokeWidth = 4,
  nonScaling = false,
}: {
  className?: string;
  style?: CSSProperties;
  topStroke?: string;
  bottomStroke?: string;
  strokeWidth?: number;
  /** Keep stroke width constant in px regardless of render size. */
  nonScaling?: boolean;
}) {
  const ve = nonScaling ? "non-scaling-stroke" : undefined;
  return (
    <svg
      viewBox="0 0 26 40"
      fill="none"
      role="img"
      aria-label="8"
      className={className}
      style={style}
    >
      <circle
        cx="13"
        cy="11"
        r="7"
        stroke={topStroke}
        strokeWidth={strokeWidth}
        vectorEffect={ve}
      />
      <circle
        cx="13"
        cy="29"
        r="9"
        stroke={bottomStroke}
        strokeWidth={strokeWidth}
        vectorEffect={ve}
      />
    </svg>
  );
}

/**
 * project-xlr8 logo — pure wordmark where the "8" is the linked-rings glyph.
 * Size it with a text-size class (e.g. `text-xl`); the ring-8 scales in `em`.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`display tracking-tight ${className ?? ""}`}>
      <span className="text-[0.5em] text-muted">project-</span>xlr
      <Ring8
        className="inline-block align-baseline"
        style={{ height: "0.86em", transform: "translateY(0.03em)" }}
      />
    </span>
  );
}
