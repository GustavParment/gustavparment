"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeader } from "./SectionHeader";
import { GithubIcon } from "./BrandIcons";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeader number={t.projects.number} label={t.projects.label} title={t.projects.title} />

      <div className="grid gap-6 md:grid-cols-2">
        {t.projects.items.map((project, i) => (
          <motion.article
            key={project.name}
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
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3>
                </div>
                {project.links[0] && (
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
                    aria-label={`${project.links[0].label} ${project.name}`}
                  >
                    {project.links[0].label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
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

      <div className="mt-10 text-center">
        <a
          href="https://github.com/GustavParment"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
        >
          <GithubIcon className="h-4 w-4" />
          {t.projects.more}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
