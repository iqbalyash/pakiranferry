import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Calendar, Tag, ArrowLeft, Newspaper, Megaphone, Bell, TrendingUp } from 'lucide-react'
import { updates } from '@/data/updates'

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

export async function generateStaticParams() {
  return updates.map((update) => ({
    id: update.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const update = updates.find((u) => u.id === params.id)

  if (!update) {
    return {
      title: 'Update Not Found',
    }
  }

  return {
    title: `${update.title} | Pakistan Iran Ferry Updates`,
    description: update.excerpt,
    alternates: {
      canonical: `https://pakiranferry.com/updates/${update.id}`,
    },
    openGraph: {
      title: update.title,
      description: update.excerpt,
      type: 'article',
      publishedTime: update.date,
    },
  }
}

export default function UpdateDetailPage({ params }: { params: { id: string } }) {
  const update = updates.find((u) => u.id === params.id)

  if (!update) {
    notFound()
  }

  const Icon = categoryIcons[update.category]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Updates</span>
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded text-sm font-semibold bg-primary-foreground/10 text-primary-foreground ${categoryColors[update.category]}`}>
                  {update.category}
                </span>
                <Icon className="h-5 w-5 text-primary-foreground/70" />
                <time className="text-primary-foreground/70 flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  {formatDate(update.date)}
                </time>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {update.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
              <div className="bg-card rounded-lg border border-border p-8">
                <div className="prose prose-lg max-w-none">
                  {update.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-border">
                <Link
                  href="/updates"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>View All Updates</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
