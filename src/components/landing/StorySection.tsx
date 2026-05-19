import Image from "next/image";
import { brandStory } from "@/data/landing-content";
import { FadeIn, Section, SectionHeading } from "./ui";

export function StorySection() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="grid gap-6 rounded-[1.75rem] border border-brand-ink/8 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Historia" title={brandStory.title} description={brandStory.text} />
        </div>

        <FadeIn>
          <div className="overflow-hidden rounded-3xl border border-brand-green/20 bg-brand-ice p-5">
            <Image
              src="/images/maquina.png"
              alt="Maquina de liofilizacion"
              width={900}
              height={650}
              className="mb-5 h-auto w-full rounded-2xl object-cover"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
              Valores de marca
            </p>
            <div className="mt-4 space-y-3">
              {brandStory.badges.map((badge) => (
                <p
                  key={badge}
                  className="rounded-xl border border-white bg-white px-4 py-3 text-sm font-semibold text-brand-ink"
                >
                  {badge}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
