import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustav Parment — Full-stack Developer",
  description:
    "Full-stack developer based in Stockholm. Building AI-driven SaaS, cross-platform mobile apps and backend systems in Go, TypeScript and Java.",
  keywords: [
    "Gustav Parment",
    "Full-stack developer",
    "Stockholm",
    "Next.js",
    "Go",
    "TypeScript",
    "Java",
    "Spring Boot",
  ],
  authors: [{ name: "Gustav Parment" }],
  openGraph: {
    title: "Gustav Parment — Full-stack Developer",
    description:
      "Full-stack developer based in Stockholm. Building AI-driven SaaS, cross-platform mobile apps and backend systems.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
