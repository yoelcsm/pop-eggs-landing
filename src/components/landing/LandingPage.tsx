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
    <div className="relative overflow-hidden bg-brand-bg text-brand-ink">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-5%] top-[-120px] h-[340px] w-[340px] rounded-full bg-brand-green/18 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[15%] h-[360px] w-[360px] rounded-full bg-brand-orange/18 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
