"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)] mt-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[color:var(--muted)] font-mono">
        <p>
          © {year} Gustav Parment. {t.footer.rights}
        </p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
