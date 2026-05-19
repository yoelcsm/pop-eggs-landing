import { benefits } from "@/data/landing-content";
import { FadeIn, Section, SectionHeading } from "./ui";

export function BenefitsSection() {
  return (
    <Section id="beneficios" className="pt-16 sm:pt-20">
      <SectionHeading
        eyebrow="Beneficios"
        title="Nutricion limpia para rendir mas"
        description="Cada porcion de Pop-eggs fue pensada para quienes buscan un snack funcional sin ingredientes innecesarios."
      />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <FadeIn key={benefit.title} delay={0.03 * index}>
              <article className="group h-full rounded-2xl border border-brand-ink/8 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
                <div className="mb-3 inline-flex rounded-xl bg-brand-green/10 p-2 text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
                  <Icon size={18} />
                </div>
                <p className="text-sm font-semibold text-brand-ink sm:text-base">{benefit.title}</p>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
