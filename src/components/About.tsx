"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeader number={t.about.number} label={t.about.label} />

      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5 text-[color:var(--muted)] leading-relaxed text-[17px]"
        >
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--muted)] mb-4">
            {t.about.factsTitle}
          </h3>
          <dl className="space-y-3">
            {t.about.facts.map((f) => (
              <div key={f.label} className="flex justify-between gap-4 text-sm">
                <dt className="text-[color:var(--muted)]">{f.label}</dt>
                <dd className="text-[color:var(--foreground)] text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}
