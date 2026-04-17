"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeader number={t.education.number} label={t.education.label} title={t.education.title} />

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4"
        >
          {t.education.items.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
            >
              <h3 className="text-base font-medium">{e.title}</h3>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{e.school}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
                {e.period}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--muted)] mb-5">
            {t.education.languagesTitle}
          </h3>
          <ul className="space-y-4">
            {t.education.languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between border-b border-[color:var(--border)] pb-3 last:border-0 last:pb-0">
                <span className="font-medium">{l.name}</span>
                <span className="text-sm text-[color:var(--muted)]">{l.level}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
