import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Travel & Documentation Guide | Pakistan Iran Ferry',
  description: 'Travel guide for the Pakistan Iran ferry. Required documents, passport requirements, Iranian visa information, immigration guidance for Karachi to Chabahar travel.',
  keywords: ['Pakistan Iran ferry documents', 'Karachi Chabahar travel guide', 'Iran visa for Pakistani', 'ferry travel requirements'],
  alternates: {
    canonical: 'https://pakiranferry.com/travel-guide',
  },
}

export default function TravelGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Travel Information</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Travel & Documentation Guide
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Essential information for passengers traveling on the Pakistan–Iran ferry service.
            </p>
          </div>
        </section>

        <section className="bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-800">
                <strong>Important Disclaimer:</strong> This guide provides general information only. 
                Always verify current requirements with the relevant embassies before travel.
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Required Documents
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded border border-border p-6">
                  <h3 className="font-heading font-bold text-foreground mb-4">Essential Documents for All Passengers</h3>
                  <ul className="space-y-3">
                    {[
                      'Valid passport with at least 6 months validity beyond your intended return date',
                      'Valid visa for the destination country',
                      'Confirmed ferry ticket or booking confirmation',
                      'Recent passport-size photographs (2–4 copies recommended)',
                      'Travel insurance documentation (strongly recommended)',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
