"use client";

import { motion } from "framer-motion";

type Props = {
  number: string;
  label: string;
  title?: string;
};

export function SectionHeader({ number, label, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10 flex flex-col gap-3"
    >
      <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-[color:var(--muted)]">
        <span className="text-[color:var(--accent)]">{number}</span>
        <span className="h-px flex-1 bg-[color:var(--border)]" />
        <span>{label}</span>
      </div>
      {title && (
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--foreground)]">
          {title}
        </h2>
      )}
    </motion.div>
  );
}
