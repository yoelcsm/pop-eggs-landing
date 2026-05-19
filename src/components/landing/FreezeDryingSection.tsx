import { Snowflake, Wind, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { freezeDryingSteps, sectionText } from "@/data/landing-content";
import { FadeIn, Section, SectionHeading } from "./ui";

const icons = [Snowflake, Wind, ShieldCheck];

export function FreezeDryingSection() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="rounded-[1.75rem] border border-brand-green/15 bg-brand-ice/70 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Que es la liofilizacion"
          title="Tecnologia que conserva lo mejor del huevo"
          description={sectionText.freezeDryingSummary}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {freezeDryingSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={step.title} delay={0.1 * index}>
                <article className="h-full rounded-2xl border border-brand-green/15 bg-white p-5">
                  <div className="inline-flex rounded-xl bg-brand-green/10 p-2 text-brand-green">
                    <Icon size={20} />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-green">
                    Paso {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-brand-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">{step.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-6 overflow-hidden rounded-3xl border border-brand-green/15 bg-white p-3 shadow-soft">
            <Image
              src="/images/quees2.png"
              alt="Proceso de liofilizacion Pop-eggs"
              width={1400}
              height={900}
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
