import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, Section, SectionHeading } from "./ui";

export function PackagingMockupSection() {
  const cleanVisuals = [
    {
      src: "/images/clara-encab.png",
      alt: "Packaging Clara de huevo liofilizada",
      label: "Clara",
    },
    {
      src: "/images/yema-encab.png",
      alt: "Packaging Yema de huevo liofilizada",
      label: "Yema",
    },
    {
      src: "/images/packaging.jpeg",
      alt: "Presentacion premium Pop-eggs",
      label: "Presentacion",
    },
  ];

  return (
    <Section className="pt-16 sm:pt-20">
      <SectionHeading
        eyebrow="Mockups"
        title="Visuales de marca limpios y listos para comunicar"
        description="Galeria de producto con foco en packaging y presencia premium para venta desde QR."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cleanVisuals.map((visual, item) => (
          <FadeIn key={visual.src} delay={0.08 * item}>
            <motion.article
              whileHover={{ y: -6, rotate: item === 1 ? 0 : item === 0 ? -1 : 1 }}
              className="relative overflow-hidden rounded-3xl border border-brand-ink/10 bg-white p-3 shadow-soft"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,122,51,0.12),transparent_45%),radial-gradient(circle_at_90%_90%,rgba(255,106,0,0.12),transparent_45%)]" />
              <p className="relative px-2 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/55">
                {visual.label}
              </p>
              <Image
                src={visual.src}
                alt={visual.alt}
                width={800}
                height={1000}
                className="relative h-[280px] w-full rounded-2xl bg-white object-contain"
              />
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
