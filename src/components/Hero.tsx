"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-60 pointer-events-none" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[720px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 pt-20 sm:pt-28 pb-24 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-xs font-mono text-[color:var(--muted)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent)] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--accent)]" />
          </span>
          {t.hero.statusLabel}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="mt-8 text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          {t.hero.name}
          <span className="text-[color:var(--accent)]">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-4 font-mono text-sm sm:text-base text-[color:var(--accent)]"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg text-[color:var(--muted)] leading-relaxed"
        >
          {t.hero.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-sm font-medium text-[color:var(--background)] hover:opacity-90 transition-opacity"
          >
            {t.hero.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-2.5 text-sm font-medium hover:border-[color:var(--accent)] transition-colors"
          >
            <Mail className="h-4 w-4" />
            {t.hero.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
