import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://karbejha.site'
  const lastModified = new Date()
  const languages = {
    en: `${baseUrl}/`,
    ar: `${baseUrl}/ar/`,
  }

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages,
      },
    },
    {
      url: `${baseUrl}/ar/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages,
      },
    },
  ]
}
