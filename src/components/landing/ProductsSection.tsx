import Image from "next/image";
import { products } from "@/data/landing-content";
import { FadeIn, Section, SectionHeading } from "./ui";

export function ProductsSection() {
  return (
    <Section id="productos" className="pt-16 sm:pt-20">
      <SectionHeading
        eyebrow="Productos"
        title="Dos perfiles nutricionales, una misma calidad premium"
        description="Elegi la variante que mejor se adapta a tu rutina diaria o combinalas para potenciar recetas y snacks."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {products.map((product, index) => {
          const accentClasses =
            product.accent === "green"
              ? "border-brand-green/20 bg-brand-ice/55"
              : "border-brand-orange/20 bg-brand-warm/50";

          return (
            <FadeIn key={product.name} delay={0.08 * index}>
              <article className={`overflow-hidden rounded-3xl border p-5 sm:p-6 ${accentClasses}`}>
                <div className="mx-auto w-fit overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-soft">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1200}
                    height={900}
                    className="h-auto w-auto max-h-[320px] rounded-xl object-contain sm:max-h-[360px]"
                  />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-brand-ink">{product.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.13em] text-brand-ink/55">
                  {product.subtitle}
                </p>

                <ul className="mt-5 grid gap-2 text-sm text-brand-ink/80">
                  {product.points.map((point) => (
                    <li key={point} className="rounded-xl border border-white/80 bg-white/90 px-3 py-2">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-brand-ink/10 bg-white p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">
                    Tabla nutricional visual
                  </p>
                  <div className="space-y-2">
                    {product.nutrition.map((item) => (
                      <div key={item.label} className="grid grid-cols-2 rounded-lg bg-brand-ink/[0.03] px-3 py-2 text-sm">
                        <span className="text-brand-ink/65">{item.label}</span>
                        <span className="text-right font-semibold text-brand-ink">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
