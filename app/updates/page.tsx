import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Calendar, ArrowRight, Newspaper, Megaphone, Bell, TrendingUp } from 'lucide-react'
import { updates, getUpdatesByCategory } from '@/data/updates'

export const metadata: Metadata = {
  title: 'News & Updates | Pakistan Iran Ferry Service',
  description: 'Latest news, updates, and announcements about the Pakistan-Iran ferry service. Stay informed about operational status, events, and important developments.',
  keywords: ['Pakistan Iran ferry news', 'ferry service updates', 'Karachi Chabahar ferry announcements', 'ferry service events'],
  alternates: {
    canonical: 'https://pakiranferry.com/updates',
  },
  openGraph: {
    title: 'News & Updates | Pakistan Iran Ferry Service',
    description: 'Latest news, updates, and announcements about the Pakistan-Iran ferry service.',
    type: 'website',
  },
}

const categoryIcons = {
  news: Newspaper,
  event: Calendar,
  announcement: Megaphone,
  update: TrendingUp,
}

const categoryColors = {
  news: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  event: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  announcement: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  update: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function UpdatesPage() {
  const allUpdates = updates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featuredUpdates = allUpdates.filter(u => u.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <Newspaper className="h-4 w-4" />
              <span className="text-sm font-medium">Latest Information</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              News & Updates
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Stay informed about the latest developments, news, and announcements regarding the Pakistan-Iran ferry service.
            </p>
          </div>
        </section>

        {/* Featured Updates */}
        {featuredUpdates.length > 0 && (
          <section className="py-12 bg-secondary border-y border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Featured Updates
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {featuredUpdates.slice(0, 3).map((update) => {
                    const Icon = categoryIcons[update.category]
                    return (
                      <Link
                        key={update.id}
                        href={`/updates/${update.id}`}
                        className="bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${categoryColors[update.category]}`}>
                              {update.category}
                            </span>
                            <Icon className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {update.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {update.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(update.date)}
                            </span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Updates */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                All Updates
              </h2>

              <div className="space-y-6">
                {allUpdates.map((update) => {
                  const Icon = categoryIcons[update.category]
                  return (
                    <article
                      key={update.id}
                      className="bg-card rounded-lg border border-border hover:border-primary/30 transition-colors overflow-hidden"
                    >
                      <Link href={`/updates/${update.id}`} className="block">
                        <div className="p-6">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded text-xs font-semibold ${categoryColors[update.category]}`}>
                                {update.category}
                              </span>
                              <Icon className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <time className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(update.date)}
                            </time>
                          </div>

                          <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {update.title}
                          </h3>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {update.excerpt}
                          </p>

                          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                            Read more
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </Link>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-12 bg-secondary border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                Browse by Category
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(['news', 'event', 'announcement', 'update'] as const).map((category) => {
                  const Icon = categoryIcons[category]
                  const count = getUpdatesByCategory(category).length
                  return (
                    <Link
                      key={category}
                      href={`/updates?category=${category}`}
                      className="bg-card rounded-lg border border-border hover:border-primary/50 p-4 text-center transition-colors group"
                    >
                      <Icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                      <p className="font-semibold text-foreground capitalize mb-1">{category}</p>
                      <p className="text-xs text-muted-foreground">{count} posts</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
