"use client";

import { motion } from "framer-motion";
import { Users, Trophy } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeader } from "./SectionHeader";

export function Hackathons() {
  const { t } = useLanguage();

  return (
    <section id="hackathons" className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeader
        number={t.hackathons.number}
        label={t.hackathons.label}
        title={t.hackathons.title}
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl text-[color:var(--muted)] leading-relaxed mb-10"
      >
        {t.hackathons.intro}
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2">
        {t.hackathons.items.map((h, i) => (
          <motion.article
            key={h.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 transition-all hover:border-[color:var(--accent)] hover:-translate-y-1"
          >
            <div
              className="absolute -top-32 -right-32 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40"
              style={{ background: "var(--accent-glow)" }}
            />

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--accent)] bg-[color:var(--accent-glow)] px-2.5 py-0.5 font-mono text-xs text-[color:var(--accent)]">
                  <Trophy className="h-3 w-3" />
                  {t.hackathons.roleBadge}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-2.5 py-0.5 font-mono text-xs text-[color:var(--muted)]">
                  <Users className="h-3 w-3" />
                  {h.team}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">{h.name}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
                {h.event}
              </p>

              <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
                {h.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-[color:var(--muted)]">
                {h.highlights.map((hi, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--accent)]" />
                    <span>{hi}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {h.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-2.5 py-0.5 font-mono text-xs text-[color:var(--muted)]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
