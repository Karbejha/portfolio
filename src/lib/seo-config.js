export const siteConfig = {
  name: "Mohamad Karbejha",
  title:
    "Mohamad Karbejha - Full Stack Developer | Next.js, TypeScript, Node.js",
  description:
    "Full Stack Developer with 6+ years of experience building scalable web applications. Core stack: Next.js, TypeScript, Node.js, Express.js, PostgreSQL. Based in Istanbul, Turkey - open to remote and relocation.",
  url: "https://karbejha.site",
  ogImage: "/images/hero-image.png",
  links: {
    github: "https://github.com/Karbejha",
    linkedin: "https://www.linkedin.com/in/mohamad-karbejha",
    cv: "https://drive.google.com/file/d/19zqXIvsUvuhUjtqE5rtOxIa3dqbIykiq/view?usp=sharing",
  },
  keywords: [
    "Mohamad Karbejha",
    "Full Stack Developer",
    "Full Stack Developer Istanbul",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "Express.js",
    "REST API",
    "Full Stack Engineer",
    "Remote Developer Turkey",
    "Python Developer",
    "Django Developer",
    "Node.js Developer",
    "Web Developer Istanbul",
    "Software Engineer Turkey",
    "Computer Engineering",
    "Portfolio Website",
    "Multilingual Developer",
  ],
  author: {
    name: "Mohamad Karbejha",
    email: "info@karbejha.site",
    url: "https://karbejha.site",
    image: "https://karbejha.site/images/hero-image.png",
  },
  location: {
    city: "Istanbul",
    country: "Turkey",
    coordinates: {
      latitude: "41.0082",
      longitude: "28.9784",
    },
  },
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Python",
    "Django",
    "REST APIs",
    "WebSocket",
    "Socket.IO",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Docker",
    "CI/CD",
  ],
  languages: ["Arabic", "English", "Turkish"],
  education: [
    {
      degree: "Computer Engineering",
      school: "Dogus University",
      location: "Istanbul, Turkey",
      type: "Bachelor's Degree",
    },
    {
      degree: "Robot Engineering (Double Major)",
      school: "Dogus University",
      location: "Istanbul, Turkey",
      type: "Bachelor's Degree",
    },
    {
      degree: "Fullstack Web Development",
      school: "Re:Coded",
      type: "Bootcamp",
    },
  ],
};

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1476,
        height: 1461,
        alt: `${siteConfig.name} - Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googled96d8fe7bd564ca7",
    other: {
      "msvalidate.01": "DE98BD5140ED95B0034263DE0DE408D0",
    },
  },
  category: "technology",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer with 6+ years of experience building scalable web applications using Next.js, TypeScript, Node.js, Express.js, and PostgreSQL.",
      url: siteConfig.url,
      image: `${siteConfig.url}/images/hero-image.png`,
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
      knowsAbout: siteConfig.skills,
      knowsLanguage: siteConfig.languages.map((language) => ({
        "@type": "Language",
        name: language,
      })),
      alumniOf: siteConfig.education.slice(0, 2).map((education) => ({
        "@type": "CollegeOrUniversity",
        name: education.school,
        location: education.location,
      })),
      workLocation: {
        "@type": "Place",
        name: "Istanbul, Turkey",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: `${siteConfig.name} Portfolio`,
      description:
        "Professional portfolio showcasing full stack development skills and projects.",
      url: siteConfig.url,
      author: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      name: `${siteConfig.name} - Full Stack Developer Portfolio`,
      description: siteConfig.description,
      url: siteConfig.url,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      mainEntity: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
  ],
};

export const serializeJsonLd = (data) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
