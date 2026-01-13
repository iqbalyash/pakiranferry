import { MetadataRoute } from 'next'
import { updates } from '@/data/updates'

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
    '/updates',
    '/travel-guide',
    '/visa-guide',
    '/resources',
    '/faq',
    '/contact',
    '/privacy-policy',
  ]

  // Generate sitemap entries for main pages
  const mainPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route === '/updates' ? 0.9 : 0.8,
  }))

  // Generate sitemap entries for individual update pages
  const updatePages = updates.map((update) => ({
    url: `${baseUrl}/updates/${update.id}`,
    lastModified: new Date(update.date),
    changeFrequency: 'monthly' as const,
    priority: update.featured ? 0.8 : 0.7,
  }))

  return [...mainPages, ...updatePages]
}
