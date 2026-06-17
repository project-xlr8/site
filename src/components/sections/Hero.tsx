"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLine } from "@/components/ui/Mask";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Giant background word drifts and fades as you scroll past the hero.
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const wordOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pb-10 pt-28 md:px-10 md:pb-14 md:pt-36"
    >
      {/* Giant outline word, parallaxed */}
      <motion.span
        aria-hidden
        style={{ x: wordX, opacity: wordOpacity }}
        className="display text-outline pointer-events-none absolute -bottom-[2vw] left-0 select-none text-[26vw] leading-none whitespace-nowrap"
      >
        everyday
      </motion.span>

      {/* Top meta row */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] items-start justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex items-center gap-3"
        >
          <span className="inline-block h-1.5 w-1.5 translate-y-[1px] bg-accent" />
          <span className="label">(00) Index — A beautiful countdown for iOS</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="hidden text-right sm:block"
        >
          <span className="label block">Est. 2026</span>
          <span className="label block">iOS 26+</span>
        </motion.div>
      </div>

      {/* Headline */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-[1400px]"
      >
        <h1 className="display text-[15vw] leading-[0.86] sm:text-[13vw] lg:text-[11.5vw]">
          <MaskLine delay={0.15}>Count down to</MaskLine>
          <MaskLine delay={0.28} className="text-ink-soft">
            what{" "}
            <span className="serif-accent text-ink">matters.</span>
          </MaskLine>
        </h1>
      </motion.div>

      {/* Bottom row */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-end gap-8 md:grid-cols-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md text-base leading-relaxed text-ink-soft md:col-span-5 md:col-start-8"
        >
          A calm, beautiful iOS app that counts down to — and up from — any
          moment, and shows it everywhere you look: Home Screen, Lock Screen,
          and the Dynamic Island. Free, no ads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-8 md:col-span-4 md:col-start-1 md:row-start-1"
        >
          <a
            href="#apps"
            className="group inline-flex items-center gap-3 text-sm font-medium"
          >
            <span className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:bg-ink group-hover:text-paper">
              ↓
            </span>
            <span className="link-wipe">Meet the app</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
