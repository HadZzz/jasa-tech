import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jawatechno.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog posts - High priority SEO content
    {
      url: `${baseUrl}/blog/harga-pembuatan-website-sukoharjo`,
      lastModified: new Date('2024-12-19'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/jasa-pembuatan-website-umkm-sukoharjo`,
      lastModified: new Date('2024-12-19'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/web-developer-sukoharjo-terpercaya`,
      lastModified: new Date('2024-12-19'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/kompetitor-jasa-website-sukoharjo`,
      lastModified: new Date('2024-12-19'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/cara-memilih-jasa-website-terpercaya-sukoharjo`,
      lastModified: new Date('2024-12-19'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/ranking-1-google-jasa-website-sukoharjo`,
      lastModified: new Date('2024-12-19'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog/jasa-pembuatan-website-sukoharjo`,
      lastModified: new Date('2024-02-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/tips-memilih-jasa-pembuatan-website`,
      lastModified: new Date('2024-02-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/jenis-website-bisnis`,
      lastModified: new Date('2024-02-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/umkm-sukoharjo-digital`,
      lastModified: new Date('2024-02-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/membangun-website-modern`,
      lastModified: new Date('2024-02-05'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}