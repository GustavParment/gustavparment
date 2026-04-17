"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeader } from "./SectionHeader";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const EMAIL = "gustav.parment1993@gmail.com";
const PHONE = "+46737460033";
const PHONE_DISPLAY = "+46 73 746 00 33";
const LINKEDIN = "https://linkedin.com/in/gustav-parment-9a8393290";
const GITHUB = "https://github.com/GustavParment";

export function Contact() {
  const { t } = useLanguage();

  const items = [
    { label: t.contact.email, value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail },
    { label: t.contact.phone, value: PHONE_DISPLAY, href: `tel:${PHONE}`, Icon: Phone },
    { label: t.contact.linkedin, value: "gustav-parment", href: LINKEDIN, Icon: LinkedinIcon, external: true },
    { label: t.contact.github, value: "GustavParment", href: GITHUB, Icon: GithubIcon, external: true },
  ];

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24">
      <SectionHeader number={t.contact.number} label={t.contact.label} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 sm:p-12"
      >
        <div
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{ background: "var(--accent-glow)" }}
        />

        <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-[color:var(--muted)] leading-relaxed max-w-lg">
              {t.contact.intro}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-sm font-medium text-[color:var(--background)] hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>
          </div>

          <ul className="grid gap-2">
            {items.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer noopener" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 hover:border-[color:var(--accent)] transition-colors"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--surface)] text-[color:var(--accent)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-mono text-xs uppercase tracking-widest text-[color:var(--muted)]">
                      {label}
                    </span>
                    <span className="block text-sm text-[color:var(--foreground)]">{value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
