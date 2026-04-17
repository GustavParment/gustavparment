"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeader number={t.skills.number} label={t.skills.label} title={t.skills.title} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
            className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 transition-colors hover:border-[color:var(--accent)]"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)] mb-4">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-sm text-[color:var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
