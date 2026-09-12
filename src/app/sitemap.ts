import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://karbejha.me";
  const featuredProjectSlugs = ["mpais", "ea400"];
  const languages = {
    en: `${baseUrl}/`,
    ar: `${baseUrl}/ar/`,
    tr: `${baseUrl}/tr/`,
  };
  const projectEntries = featuredProjectSlugs.flatMap((slug) => {
    const projectLanguages = {
      en: `${baseUrl}/projects/${slug}/`,
      ar: `${baseUrl}/ar/projects/${slug}/`,
      tr: `${baseUrl}/tr/projects/${slug}/`,
    };

    return [
      {
        url: projectLanguages.en,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: { languages: projectLanguages },
      },
      {
        url: projectLanguages.ar,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages: projectLanguages },
      },
      {
        url: projectLanguages.tr,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages: projectLanguages },
      },
    ];
  });

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages,
      },
    },
    {
      url: `${baseUrl}/ar/`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages,
      },
    },
    {
      url: `${baseUrl}/tr/`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages,
      },
    },
    ...projectEntries,
  ];
}
