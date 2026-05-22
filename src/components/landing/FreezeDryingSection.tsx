import { Flame, Package, ShieldCheck } from "lucide-react";
import { freezeDryingHighlights, sectionText } from "@/data/landing-content";
import { FadeIn, Section, SectionHeading } from "./ui";
import { ZoomableImage } from "./ZoomableImage";

const icons = [Flame, Package, ShieldCheck];

export function FreezeDryingSection() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="rounded-[1.75rem] border border-brand-green/15 bg-brand-ice/70 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Que es la liofilizacion"
          title="Como mejora el producto"
          description={sectionText.freezeDryingSummary}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {freezeDryingHighlights.map((step, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={step.title} delay={0.1 * index}>
                <article className="h-full rounded-2xl border border-brand-green/15 bg-white p-5">
                  <div className="inline-flex rounded-xl bg-brand-green/10 p-2 text-brand-green">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-brand-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">{step.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-6 rounded-3xl border border-brand-green/15 bg-white p-2 shadow-soft sm:p-3">
            <p className="px-3 pt-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-green/80 sm:px-4">
              Proceso visual
            </p>
            <ZoomableImage
              src="/images/quees2.png"
              alt="Proceso de liofilizacion Pop-eggs"
              width={1400}
              height={900}
              previewClassName="h-auto w-full rounded-2xl object-contain"
            />
            <p className="mt-2 text-center text-xs font-medium text-brand-ink/60">
              Toca la imagen para ampliar.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
