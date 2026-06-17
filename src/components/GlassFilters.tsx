/**
 * SVG displacement filters that power the "liquid glass" refraction.
 * Referenced from CSS via `backdrop-filter: url(#liquid-glass)`.
 *
 * Only Chromium honors SVG filters in backdrop-filter; Safari/Firefox ignore
 * the `url()` (the CSS @supports gate keeps them on the clear-blur fallback),
 * so this markup is harmless there.
 */
export default function GlassFilters() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute", overflow: "hidden" }}
    >
      <defs>
        {/* Panels / nav / cards — broad, soft warp */}
        <filter
          id="liquid-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.009"
            numOctaves="2"
            seed="17"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.4" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="62"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Cursor — finer, gentler ripple for a small lens */}
        <filter
          id="liquid-glass-cursor"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.02"
            numOctaves="2"
            seed="7"
            result="n"
          />
          <feGaussianBlur in="n" stdDeviation="1" result="s" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="s"
            scale="28"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
