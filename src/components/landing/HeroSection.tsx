import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroHighlights, sectionText, socialLinks } from "@/data/landing-content";
import { FadeIn, Section } from "./ui";

export function HeroSection() {
  return (
    <Section className="pt-8 sm:pt-12 md:pt-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-brand-ink shadow-premium">
        <div className="relative grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="relative overflow-hidden p-6 sm:p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(11,122,51,0.32),transparent_46%),radial-gradient(circle_at_85%_80%,rgba(255,106,0,0.12),transparent_45%)]" />
            <FadeIn>
              <p className="relative inline-flex items-center gap-2 rounded-full border border-brand-green/35 bg-brand-green/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
                <Sparkles size={14} />
                Startup food tech
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="relative mt-5 max-w-lg text-balance text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
                {sectionText.heroTitle}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="relative mt-5 max-w-md text-base text-white/82 sm:text-lg">
                {sectionText.heroSubtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative mt-7 flex flex-wrap gap-3">
                <a
                  href={socialLinks.buy}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-brand-green-dark"
                >
                  Comprar ahora
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex items-center rounded-xl border border-white/35 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-brand-ink"
                >
                  Ver beneficios
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="relative bg-[linear-gradient(135deg,#f6fbf7_15%,#fff7ef_95%)] p-5 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(11,122,51,0.16),transparent_45%),radial-gradient(circle_at_100%_0%,rgba(255,106,0,0.18),transparent_45%)]" />
            <motion.article
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-brand-ink/10 bg-white p-3 shadow-premium"
            >
              <Image
                src="/images/packaging-unified.png"
                alt="Packaging unificado Pop-eggs"
                width={1800}
                height={1200}
                priority
                className="h-auto w-full rounded-2xl object-contain"
              />
            </motion.article>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
