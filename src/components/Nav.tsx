"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const leftLinks = [{ label: "Principles", href: "#principles" }];
const rightLinks = [{ label: "Apps", href: "#apps" }];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="link-wipe text-[0.72rem] uppercase tracking-[0.14em] text-ink/65 transition-colors hover:text-ink"
    >
      {label}
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6"
    >
      <div
        className={`mx-auto grid max-w-[1100px] grid-cols-[1fr_auto_1fr] items-center px-6 transition-all duration-500 md:px-9 ${
          scrolled
            ? "liquid-glass rounded-full py-3.5"
            : "rounded-full border border-transparent py-3.5"
        }`}
      >
        {/* Left links */}
        <nav className="hidden items-center gap-8 justify-self-start md:flex">
          {leftLinks.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        {/* Centered logo */}
        <a
          href="#top"
          aria-label="project-xlr8 — home"
          className="justify-self-center"
        >
          <Logo className="text-3xl md:text-[2.15rem]" />
        </a>

        {/* Right links */}
        <nav className="hidden items-center gap-8 justify-self-end md:flex">
          {rightLinks.map((l) => (
            <NavLink key={l.label} {...l} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
