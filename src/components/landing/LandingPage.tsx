"use client";

import { motion } from "framer-motion";
import { BenefitsSection } from "./BenefitsSection";
import { FooterSection } from "./FooterSection";
import { FreezeDryingSection } from "./FreezeDryingSection";
import { HeroSection } from "./HeroSection";
import { ProductsSection } from "./ProductsSection";
import { RecipesSection } from "./RecipesSection";
import { StorySection } from "./StorySection";

export function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-[#f7f6f3] text-brand-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 14% 10%, rgba(11,122,51,0.14), transparent 36%), radial-gradient(circle at 84% 20%, rgba(255,106,0,0.12), transparent 42%), radial-gradient(circle at 52% 82%, rgba(11,122,51,0.08), transparent 48%), linear-gradient(180deg, #fbfaf7 0%, #f4f2ee 52%, #f9f8f4 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,20,32,0.06) 0.5px, transparent 0.5px)",
          backgroundSize: "3px 3px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] top-[-140px] h-[400px] w-[400px] rounded-full bg-brand-green/16 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-brand-orange/16 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[38%] h-6 w-6 rounded-full bg-[#f6c977]/35 blur-sm"
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[14%] top-[56%] h-5 w-5 rounded-full bg-[#f6c977]/30 blur-sm"
        animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[28%] top-[24%] h-4 w-4 rounded-full bg-[#f6c977]/25 blur-sm"
        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <main className="relative pb-4">
        <HeroSection />
        <BenefitsSection />
        <FreezeDryingSection />
        <ProductsSection />
        <RecipesSection />
        <StorySection />
      </main>

      <FooterSection />
    </div>
  );
}
