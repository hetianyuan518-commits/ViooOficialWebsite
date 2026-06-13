import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Features from "@/components/sections/Features";
import CloverPlugins from "@/components/sections/CloverPlugins";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <Features />
      <CloverPlugins />
      <CTA />
      <Footer />
    </main>
  );
}
