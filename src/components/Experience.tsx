"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeader number={t.experience.number} label={t.experience.label} title={t.experience.title} />

      <ol className="relative border-l border-[color:var(--border)] ml-2">
        {t.experience.items.map((job, i) => (
          <motion.li
            key={`${job.company}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
            className="relative pl-8 pb-10 last:pb-0"
          >
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[color:var(--background)] bg-[color:var(--accent)]" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                {job.role}
              </h3>
              <span className="text-[color:var(--muted)]">·</span>
              <span className="text-[color:var(--accent)]">{job.company}</span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[color:var(--muted)]">
              {job.period}
            </p>
            <ul className="mt-3 space-y-2 text-[color:var(--muted)] leading-relaxed">
              {job.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
