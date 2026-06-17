"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LiquidCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Tight follow with just a hint of lag.
  const sx = useSpring(x, { stiffness: 700, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 700, damping: 40, mass: 0.5 });

  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("has-liquid-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const el = e.target as Element | null;
      setActive(Boolean(el?.closest?.("a, button, input, [data-cursor]")));
    };
    const leave = () => setHidden(true);
    const downFn = () => setDown(true);
    const upFn = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", leave);
    window.addEventListener("mousedown", downFn);
    window.addEventListener("mouseup", upFn);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
      window.removeEventListener("mousedown", downFn);
      window.removeEventListener("mouseup", upFn);
      document.documentElement.classList.remove("has-liquid-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = active ? 42 : 11;

  return (
    <motion.div className="liquid-cursor-layer" style={{ x: sx, y: sy }}>
      <motion.div
        className="cursor-dot"
        animate={{
          width: size,
          height: size,
          opacity: hidden ? 0 : active ? 0.35 : 1,
          scale: down ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
      />
    </motion.div>
  );
}
