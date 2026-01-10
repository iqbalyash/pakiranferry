import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FAQSection } from '@/components/FAQSection'
import { HelpCircle, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Pakistan Iran Ferry',
  description: 'Common questions about the Pakistan Iran ferry service. Information about booking, travel requirements, visas, and the Karachi to Chabahar sea route.',
  keywords: ['Pakistan Iran ferry FAQ', 'Karachi Chabahar ferry questions', 'ferry travel help', 'Chabahar ferry service'],
  alternates: {
    canonical: 'https://pakiranferry.com/faq',
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Help Center</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Find answers to common questions about booking, travel requirements, and our services.
            </p>
          </div>
        </section>

        <FAQSection />

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded bg-secondary border border-border">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our customer service team is available to assist you with any inquiries.
              </p>
              <Link href="/contact">
                <Button variant="gov" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
