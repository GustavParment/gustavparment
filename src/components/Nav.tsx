"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const sections = ["about", "skills", "experience", "projects", "hackathons", "education", "contact"] as const;

export function Nav() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--background)]/75 border-b border-[color:var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="flex-shrink-0 font-mono text-sm tracking-tight text-[color:var(--foreground)] hover:text-[color:var(--accent)] transition-colors"
          aria-label="Gustav Parment"
        >
          <span className="text-[color:var(--accent)]">~/</span>gustavparment
        </a>

        <div className="hidden lg:flex items-center gap-5 text-sm">
          {sections.map((s, i) => (
            <a
              key={s}
              href={`#${s}`}
              className="whitespace-nowrap font-mono text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
            >
              <span className="text-[color:var(--accent)] mr-1">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {t.nav[s]}
            </a>
          ))}
        </div>

        <div className="flex-shrink-0 flex items-center gap-1 rounded-full border border-[color:var(--border)] p-1 font-mono text-xs">
          <button
            type="button"
            onClick={() => setLocale("sv")}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              locale === "sv"
                ? "bg-[color:var(--foreground)] text-[color:var(--background)]"
                : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            }`}
            aria-pressed={locale === "sv"}
          >
            SV
          </button>
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              locale === "en"
                ? "bg-[color:var(--foreground)] text-[color:var(--background)]"
                : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            }`}
            aria-pressed={locale === "en"}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
