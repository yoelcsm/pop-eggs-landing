import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`px-4 sm:px-6 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-brand-green/20 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-brand-ink/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function FadeIn({ children, delay = 0, y = 24, className = "" }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
