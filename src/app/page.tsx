import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { LiveClasses } from "@/components/sections/live-classes";
import { Platform } from "@/components/sections/platform";
import { AppPromo } from "@/components/sections/app-promo";
import { Philosophy } from "@/components/sections/philosophy";
import { Founder } from "@/components/sections/founder";
import { Stats } from "@/components/sections/stats";
import { Approach } from "@/components/sections/approach";
import { Institutes } from "@/components/sections/institutes";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <LiveClasses />
        <Platform />
        <AppPromo />
        <Philosophy />
        <Founder />
        <Stats />
        <Approach />
        <Institutes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
