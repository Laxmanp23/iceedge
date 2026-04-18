"use client";
import HeroSection from "@/components/industrial/HeroSection";
import SolutionsSection from "@/components/industrial/SolutionsSection";
import IndustriesSection from "@/components/industrial/IndustriesSection";
import ProcessSection from "@/components/industrial/ProcessSection";
import FeaturedSystemSection from "@/components/industrial/FeaturedSystemSection";
import WhyChooseSection from "@/components/industrial/WhyChooseSection";
import CtaSection from "@/components/industrial/CtaSection";

export default function IndustrialClient() {
  return (
    <main className="min-h-screen bg-[#000510] selection:bg-cyan-500/30 overflow-hidden">
      <HeroSection />
      <SolutionsSection />
      <IndustriesSection />
      <ProcessSection />
      <FeaturedSystemSection />
      <WhyChooseSection />
      <CtaSection />
    </main>
  );
}
