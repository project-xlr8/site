import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Apps from "@/components/sections/Apps";
import Philosophy from "@/components/sections/Philosophy";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Philosophy />
      <Apps />
      <Footer />
    </main>
  );
}
