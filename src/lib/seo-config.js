import {
  defaultLocale,
  getDictionary,
  getLocalePath,
  getLocaleSettings,
  locales,
} from "./i18n";

export const siteConfig = {
  name: "Mohamad Karbejha",
  title:
    "Mohamad Karbejha - Full Stack Developer | Next.js, TypeScript, Node.js",
  description:
    "Full Stack Developer with 6+ years of experience building scalable web applications. Core stack: Next.js, TypeScript, Node.js, Express.js, PostgreSQL. Based in Istanbul, Turkey - open to remote and relocation.",
  url: "https://karbejha.me",
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
    email: "info@karbejha.me",
    url: "https://karbejha.me",
    image: "https://karbejha.me/images/hero-image.png",
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

const absoluteUrl = (path = "/") => `${siteConfig.url}${path}`;

const languageAlternates = {
  en: absoluteUrl(getLocalePath("en")),
  ar: absoluteUrl(getLocalePath("ar")),
  tr: absoluteUrl(getLocalePath("tr")),
  "x-default": absoluteUrl(getLocalePath("en")),
};

const getProjectPath = (locale, slug) =>
  `${getLocalePath(locale)}projects/${slug}/`;

const getProjectImageUrl = (image) => {
  if (!image) return undefined;

  return image.startsWith("http") ? image : absoluteUrl(image);
};

const getProjectLanguageAlternates = (slug) =>
  Object.fromEntries([
    ...locales.map((locale) => [locale, absoluteUrl(getProjectPath(locale, slug))]),
    ["x-default", absoluteUrl(getProjectPath(defaultLocale, slug))],
  ]);

export const getLocalizedMetadata = (locale = defaultLocale) => {
  const dictionary = getDictionary(locale);
  const settings = getLocaleSettings(locale);
  const path = getLocalePath(locale);

  return {
    title: {
      default: dictionary.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dictionary.seo.description,
    keywords:
      locale === "ar"
        ? [
            ...siteConfig.keywords,
            "محمد كربجها",
            "مطور ويب متكامل",
            "مطور Next.js",
            "مطور TypeScript",
            "مطور Node.js",
          ]
        : locale === "tr"
          ? [
              ...siteConfig.keywords,
              "Mohamad Karbejha",
              "Full Stack Geliştirici",
              "Next.js Geliştirici",
              "TypeScript Geliştirici",
              "Yazılım Mühendisi İstanbul",
              "Bilgisayar Mühendisi",
            ]
          : siteConfig.keywords,
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: settings.ogLocale,
      url: absoluteUrl(path),
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      siteName: `${siteConfig.name} Portfolio`,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1476,
          height: 1461,
          alt: dictionary.seo.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      images: [absoluteUrl(siteConfig.ogImage)],
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
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        {
          url: "/images/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  };
};

export const metadata = getLocalizedMetadata(defaultLocale);

export const getStructuredData = (locale = defaultLocale) => {
  const dictionary = getDictionary(locale);
  const path = getLocalePath(locale);
  const pageUrl = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: "Full Stack Developer",
        description: dictionary.seo.personDescription,
        url: pageUrl,
        image: `${siteConfig.url}/images/hero-image.png`,
        logo: `${siteConfig.url}/images/logo.png`,
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
        description: dictionary.seo.websiteDescription,
        url: siteConfig.url,
        author: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: dictionary.seo.webPageName,
        description: dictionary.seo.description,
        url: pageUrl,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        mainEntity: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  };
};

export const getProjectMetadata = (locale = defaultLocale, project) => {
  const settings = getLocaleSettings(locale);
  const path = getProjectPath(locale, project.slug);
  const title = project.title;
  const socialTitle = `${project.title} | ${siteConfig.name}`;
  const description = project.description;
  const image = getProjectImageUrl(project.images?.[0] ?? project.image);

  return {
    title,
    description,
    keywords: [project.title, project.tagline, ...project.techStack],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
      languages: getProjectLanguageAlternates(project.slug),
    },
    openGraph: {
      type: "article",
      locale: settings.ogLocale,
      url: absoluteUrl(path),
      title: socialTitle,
      description,
      siteName: `${siteConfig.name} Portfolio`,
      images: [
        {
          url: image,
          alt: `${project.title} project screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

export const getProjectStructuredData = (locale = defaultLocale, project) => {
  const pageUrl = absoluteUrl(getProjectPath(locale, project.slug));
  const settings = getLocaleSettings(locale);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${pageUrl}#project`,
    name: project.title,
    description: project.description,
    url: pageUrl,
    image: (project.images ?? [project.image]).map(getProjectImageUrl),
    inLanguage: settings.htmlLang,
    keywords: project.techStack,
    about: project.tagline,
    author: {
      "@id": `${siteConfig.url}/#person`,
    },
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };
};

export const structuredData = getStructuredData(defaultLocale);

export const serializeJsonLd = (data) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
