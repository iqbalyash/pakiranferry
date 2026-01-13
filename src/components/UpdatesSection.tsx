import Link from 'next/link'
import { Calendar, ArrowRight, Newspaper } from 'lucide-react'
import { getLatestUpdates, type Update } from '@/data/updates'

const categoryIcons = {
  news: Newspaper,
  event: Calendar,
  announcement: Calendar,
  update: Newspaper,
}

const categoryColors = {
  news: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  event: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  announcement: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  update: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  })
}

export function UpdatesSection() {
  const latestUpdates = getLatestUpdates(3)

  if (latestUpdates.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Newspaper className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Latest News & Updates
              </h2>
            </div>
            <Link
              href="/updates"
              className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 transition-colors"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {latestUpdates.map((update) => {
              const Icon = categoryIcons[update.category]
              return (
                <Link
                  key={update.id}
                  href={`/updates/${update.id}`}
                  className="bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all group p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${categoryColors[update.category]}`}>
                      {update.category}
                    </span>
                    <Icon className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm">
                    {update.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {update.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(update.date)}
                    </span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
