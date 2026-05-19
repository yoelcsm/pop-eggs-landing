import { recipeIdeas } from "@/data/landing-content";
import { FadeIn, Section, SectionHeading } from "./ui";

export function RecipesSection() {
  return (
    <Section className="pt-16 sm:pt-20">
      <SectionHeading
        eyebrow="Recetas e ideas"
        title="Usalo como snack o como upgrade de tus comidas"
        description="Inspirado en formatos de reels: rapido, visual y facil de compartir."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipeIdeas.map((idea, index) => (
          <FadeIn key={idea} delay={0.05 * index}>
            <article className="group relative overflow-hidden rounded-3xl border border-brand-ink/10 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,122,51,0.12),rgba(255,106,0,0.12))] opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/45">
                  Idea {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-bold text-brand-ink">{idea}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                  Textura crocante que suma sabor, proteina y caracter visual a cada receta.
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
