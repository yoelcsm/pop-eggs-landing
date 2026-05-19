import { AtSign, MessageCircle, ShoppingCart } from "lucide-react";
import { sectionText, socialLinks } from "@/data/landing-content";
import { FadeIn, Section } from "./ui";

export function FinalCtaSection() {
  return (
    <Section className="pb-16 pt-16 sm:pb-20 sm:pt-20">
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-ink/10 bg-brand-ink px-5 py-10 text-white shadow-premium sm:px-8 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(11,122,51,0.36),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(255,106,0,0.34),transparent_40%)]" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Listo para probar?</p>
            <h2 className="mt-3 max-w-3xl text-balance text-3xl font-black sm:text-4xl md:text-5xl">
              {sectionText.finalCta}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-ink transition hover:opacity-90"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-ink"
              >
                <AtSign size={16} />
                Instagram
              </a>
              <a
                href={socialLinks.buy}
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
              >
                <ShoppingCart size={16} />
                Comprar ahora
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
