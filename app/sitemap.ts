import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pakiranferry.com'
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/route',
    '/schedule',
    '/fares',
    '/services',
    '/travel-guide',
    '/visa-guide',
    '/resources',
    '/faq',
    '/contact',
    '/privacy-policy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
