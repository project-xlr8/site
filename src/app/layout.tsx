import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import LiquidCursor from "@/components/LiquidCursor";
import GlassFilters from "@/components/GlassFilters";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Until — a beautiful countdown for iOS",
  description:
    "Until is a calm, beautiful iOS app that counts down to — and up from — any moment, shown everywhere you look: Home Screen, Lock Screen, and the Dynamic Island. Free, no ads, privacy-first.",
  keywords: [
    "Until",
    "countdown",
    "countdown app",
    "iOS",
    "widgets",
    "Lock Screen",
    "Dynamic Island",
    "project-xlr8",
  ],
  openGraph: {
    title: "Until — a beautiful countdown for iOS",
    description:
      "A calm, beautiful countdown to any moment — on your Home Screen, Lock Screen, and Dynamic Island. Free, no ads.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="grain min-h-full text-ink">
        <div aria-hidden className="ambient" />
        <GlassFilters />
        <LiquidCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
