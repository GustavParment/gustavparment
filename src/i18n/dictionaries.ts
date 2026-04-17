export type Locale = "sv" | "en";

export const dictionaries = {
  sv: {
    nav: {
      about: "Om mig",
      skills: "Kompetens",
      experience: "Erfarenhet",
      projects: "Projekt",
      education: "Utbildning",
      contact: "Kontakt",
    },
    hero: {
      tagline: "Fullstack-utvecklare",
      name: "Gustav Parment",
      intro:
        "Jag bygger praktiska, prestandafokuserade produkter — från AI-driven bokföring till cross-platform mobilappar. Baserad i Stockholm.",
      cta: "Se mina projekt",
      secondaryCta: "Kontakta mig",
      statusLabel: "Tillgänglig för uppdrag",
    },
    about: {
      label: "Om mig",
      number: "01",
      paragraphs: [
        "Jag är en junior fullstack-utvecklare som trivs bäst när jag får bygga praktiska lösningar från grunden. Under 2025 har jag arbetat som konsult och drivit egna projekt, vilket gett mig erfarenhet av allt från TypeScript och Go till Java och Spring Boot.",
        "Med tio år i ryggen som lastbilschaufför och inom logistik har jag en arbetsmoral som är djupt rotad i ansvarstagande och problemlösning under tidspress. Jag kombinerar den strukturen med min kreativa sida från musiken för att skriva ren och effektiv kod.",
        "Jag jobbar aktivt med AI-verktyg som Cursor och Claude Code för att öka min leveranstakt och har ett stort intresse för cybersäkerhet.",
      ],
      factsTitle: "Kort om mig",
      facts: [
        { label: "Bas", value: "Stockholm, Sverige" },
        { label: "Fokus", value: "Fullstack · SaaS · Mobil" },
        { label: "Status", value: "Öppen för uppdrag" },
      ],
    },
    skills: {
      label: "Kompetens",
      number: "02",
      title: "Teknologier jag använder",
      groups: [
        {
          title: "Backend",
          items: ["Java", "Spring Boot", "Go", "Node.js", "Dart"],
        },
        {
          title: "Frontend",
          items: ["TypeScript", "React", "Next.js", "Flutter", "Tailwind CSS", "HTML5", "CSS3"],
        },
        {
          title: "Verktyg & DevOps",
          items: ["Docker", "CI/CD", "Git", "Linux", "Bash", "Claude Code", "Cursor"],
        },
        {
          title: "Data & Moln",
          items: ["PostgreSQL", "NoSQL", "Open Banking API:er", "AWS", "Google Cloud", "Supabase"],
        },
        {
          title: "Säkerhet",
          items: ["Cybersäkerhet", "Etisk hackning", "GDPR-efterlevnad"],
        },
      ],
    },
    experience: {
      label: "Erfarenhet",
      number: "03",
      title: "Var jag har arbetat",
      items: [
        {
          company: "Parment Software Solutions AB",
          role: "Grundare & IT-konsult",
          period: "Jan 2025 – Pågående",
          bullets: [
            "Esbio (esbio.se): Arkitekt och huvudutvecklare för en AI-driven SaaS-plattform för bokföring. Implementerat Open Banking (automatiserad bankkoppling), AI-baserad kontering (Ester AI), automatisk momsrapportering och fakturering.",
            "Hanterar hela livscykeln: från kravställning och systemdesign till driftsättning och säkerhet.",
          ],
        },
        {
          company: "Massfluencer",
          role: "Fullstack-utvecklare (konsult)",
          period: "Jan 2025 – Pågående",
          bullets: [
            "CoShout: Leder utvecklingen av en cross-platform mobilapplikation. Bygger frontend i Flutter/Dart mot en serverless-arkitektur i TypeScript.",
            "Driver migrering av befintlig kodbas till Go för att maximera prestanda och hållbarhet.",
            "Använder AI-verktyg som Cursor och Claude Code för att optimera utvecklingshastighet och kodkvalitet.",
          ],
        },
        {
          company: "Lantmännen Unibake",
          role: "Lageransvarig",
          period: "2022 – 2023",
          bullets: [
            "Ansvarade för personal och lagerlogistik. Utvecklade förmåga att leda och prioritera i kritiska flöden under tidspress.",
          ],
        },
        {
          company: "Diverse uppdrag",
          role: "Lastbilschaufför",
          period: "2012 – 2022",
          bullets: [
            "Tio års erfarenhet av yrkesmässigt ansvarstagande i krävande miljöer, inklusive körning av kranbil och tung trafik. Har format min arbetsmoral och förmåga att hantera komplexa logistiska kedjor.",
          ],
        },
        {
          company: "Frilans",
          role: "DJ & musikproducent",
          period: "2015 – Pågående",
          bullets: [
            "Kreativt skapande och projektledning inom event och musikproduktion.",
          ],
        },
      ],
    },
    projects: {
      label: "Projekt",
      number: "04",
      title: "Utvalda projekt",
      items: [
        {
          name: "Esbio",
          tag: "SaaS · AI · Bokföring",
          description:
            "AI-driven bokföringsplattform för svenska småföretag. Open Banking-integration, AI-baserad kontering (Ester AI), automatisk momsrapportering och fakturering.",
          stack: ["Go", "Next.js", "PostgreSQL", "Stripe", "Tink", "Google Cloud"],
          links: [
            { label: "Besök", href: "https://esbio.se" },
          ],
        },
        {
          name: "CoShout",
          tag: "Mobil · Cross-platform",
          description:
            "Cross-platform mobilapp för influencer-samarbeten. Flutter-frontend mot serverless-backend. Pågående migrering till Go för prestanda.",
          stack: ["Flutter", "Dart", "TypeScript", "Go", "Serverless"],
          links: [
            { label: "App Store", href: "https://apps.apple.com/se/app/coshout/id6749793188" },
          ],
        },
      ],
      more: "Se mer på GitHub",
    },
    education: {
      label: "Utbildning",
      number: "05",
      title: "Utbildning & språk",
      items: [
        { title: "Full-stack Javautvecklare", school: "Yrkeshögskola (YH)", period: "2023 – 2025" },
        { title: "Programmering & Matematik", school: "Komvux", period: "2022 – 2023" },
        { title: "Fordon & Transport", school: "Yrkesplugget", period: "2010 – 2013" },
      ],
      languagesTitle: "Språk",
      languages: [
        { name: "Svenska", level: "Modersmål" },
        { name: "Engelska", level: "Flytande (professionell nivå)" },
        { name: "Spanska", level: "Grundläggande" },
      ],
    },
    contact: {
      label: "Kontakt",
      number: "06",
      title: "Låt oss bygga något tillsammans",
      intro:
        "Jag är öppen för uppdrag, samarbeten och intressanta problem. Hör av dig — jag svarar normalt inom ett dygn.",
      email: "Skicka e-post",
      phone: "Ring mig",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      built: "Byggd med Next.js & Tailwind.",
      rights: "Alla rättigheter förbehållna.",
    },
    languageToggle: {
      label: "Språk",
      sv: "Svenska",
      en: "English",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      tagline: "Full-stack Developer",
      name: "Gustav Parment",
      intro:
        "I build practical, performance-focused products — from AI-driven accounting to cross-platform mobile apps. Based in Stockholm.",
      cta: "View my work",
      secondaryCta: "Get in touch",
      statusLabel: "Available for work",
    },
    about: {
      label: "About",
      number: "01",
      paragraphs: [
        "I'm a junior full-stack developer who thrives when building practical solutions from the ground up. Throughout 2025 I've been consulting and shipping my own products, gaining hands-on experience across TypeScript, Go, Java and Spring Boot.",
        "With ten years behind me as a truck driver and in logistics, my work ethic is rooted in responsibility and problem-solving under time pressure. I combine that structure with the creative side from music to write clean, efficient code.",
        "I actively use AI tools like Cursor and Claude Code to accelerate delivery and have a strong interest in cybersecurity.",
      ],
      factsTitle: "Quick facts",
      facts: [
        { label: "Based in", value: "Stockholm, Sweden" },
        { label: "Focus", value: "Full-stack · SaaS · Mobile" },
        { label: "Status", value: "Open to work" },
      ],
    },
    skills: {
      label: "Skills",
      number: "02",
      title: "Technologies I work with",
      groups: [
        {
          title: "Backend",
          items: ["Java", "Spring Boot", "Go", "Node.js", "Dart"],
        },
        {
          title: "Frontend",
          items: ["TypeScript", "React", "Next.js", "Flutter", "Tailwind CSS", "HTML5", "CSS3"],
        },
        {
          title: "Tools & DevOps",
          items: ["Docker", "CI/CD", "Git", "Linux", "Bash", "Claude Code", "Cursor"],
        },
        {
          title: "Data & Cloud",
          items: ["PostgreSQL", "NoSQL", "Open Banking APIs", "AWS", "Google Cloud", "Supabase"],
        },
        {
          title: "Security",
          items: ["Cybersecurity", "Ethical hacking", "GDPR compliance"],
        },
      ],
    },
    experience: {
      label: "Experience",
      number: "03",
      title: "Where I've worked",
      items: [
        {
          company: "Parment Software Solutions AB",
          role: "Founder & IT Consultant",
          period: "Jan 2025 – Present",
          bullets: [
            "Esbio (esbio.se): Architect and lead developer of an AI-driven SaaS accounting platform. Built Open Banking integration, AI-assisted bookkeeping (Ester AI), automatic VAT reporting and invoicing.",
            "Owning the full lifecycle: from requirements and system design to deployment and security.",
          ],
        },
        {
          company: "Massfluencer",
          role: "Full-stack Developer (Consultant)",
          period: "Jan 2025 – Present",
          bullets: [
            "CoShout: Leading development of a cross-platform mobile app. Building the frontend in Flutter/Dart against a TypeScript serverless backend.",
            "Driving migration of the existing codebase to Go to maximize performance and maintainability.",
            "Leveraging AI tools like Cursor and Claude Code to optimize delivery speed and code quality.",
          ],
        },
        {
          company: "Lantmännen Unibake",
          role: "Warehouse Supervisor",
          period: "2022 – 2023",
          bullets: [
            "Responsible for staff and warehouse logistics. Developed the ability to lead and prioritize critical flows under pressure.",
          ],
        },
        {
          company: "Various clients",
          role: "Truck Driver",
          period: "2012 – 2022",
          bullets: [
            "Ten years of professional responsibility in demanding environments, including crane trucks and heavy transport. Shaped my work ethic and ability to handle complex logistical chains.",
          ],
        },
        {
          company: "Freelance",
          role: "DJ & Music Producer",
          period: "2015 – Present",
          bullets: [
            "Creative production and project management in events and music.",
          ],
        },
      ],
    },
    projects: {
      label: "Projects",
      number: "04",
      title: "Selected work",
      items: [
        {
          name: "Esbio",
          tag: "SaaS · AI · Accounting",
          description:
            "AI-driven accounting platform for Swedish small businesses. Open Banking integration, AI-assisted bookkeeping (Ester AI), automatic VAT reporting and invoicing.",
          stack: ["Go", "Next.js", "PostgreSQL", "Stripe", "Tink", "Google Cloud"],
          links: [
            { label: "Visit", href: "https://esbio.se" },
          ],
        },
        {
          name: "CoShout",
          tag: "Mobile · Cross-platform",
          description:
            "Cross-platform mobile app for influencer collaborations. Flutter frontend on a serverless backend. Ongoing migration to Go for performance.",
          stack: ["Flutter", "Dart", "TypeScript", "Go", "Serverless"],
          links: [
            { label: "App Store", href: "https://apps.apple.com/se/app/coshout/id6749793188" },
          ],
        },
      ],
      more: "See more on GitHub",
    },
    education: {
      label: "Education",
      number: "05",
      title: "Education & languages",
      items: [
        { title: "Full-stack Java Developer", school: "Higher Vocational Education (YH)", period: "2023 – 2025" },
        { title: "Programming & Mathematics", school: "Komvux", period: "2022 – 2023" },
        { title: "Vehicle & Transport", school: "Yrkesplugget", period: "2010 – 2013" },
      ],
      languagesTitle: "Languages",
      languages: [
        { name: "Swedish", level: "Native" },
        { name: "English", level: "Fluent (professional)" },
        { name: "Spanish", level: "Basic" },
      ],
    },
    contact: {
      label: "Contact",
      number: "06",
      title: "Let's build something together",
      intro:
        "I'm open for freelance work, collaborations and interesting problems. Reach out — I usually reply within a day.",
      email: "Send email",
      phone: "Call me",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      built: "Built with Next.js & Tailwind.",
      rights: "All rights reserved.",
    },
    languageToggle: {
      label: "Language",
      sv: "Svenska",
      en: "English",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
