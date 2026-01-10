import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FileText, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Iran Visa Guide for Pakistani Nationals | Pakistan Iran Ferry',
  description: 'Complete guide to obtaining an Iranian visa for ferry travel. Visa types, application process, required documents, and embassy locations for Pakistan Iran sea travel.',
  keywords: ['Iran visa for Pakistani', 'Iranian visa application', 'Pakistan Iran ferry visa', 'Chabahar visa requirements'],
  alternates: {
    canonical: 'https://pakiranferry.com/visa-guide',
  },
}

export default function VisaGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Visa Information</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Iran Visa Guide
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Complete guide to obtaining an Iranian visa for Pakistani nationals.
            </p>
          </div>
        </section>

        <section className="py-6 bg-gold/10 border-y border-gold/30">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <AlertCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Disclaimer:</strong> Visa requirements and procedures are subject to change. 
                Always verify current requirements with the Embassy of Iran or official government sources before applying.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Visa Types for Pakistani Nationals
              </h2>
              <div className="space-y-6">
                <div className="bg-card rounded border border-border p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Tourist Visa</h3>
                  <p className="text-sm text-muted-foreground mb-4">Validity: 30 days | Processing Time: 7-14 working days</p>
                  <p className="text-sm text-muted-foreground">Suitable for tourism, visiting religious sites, and short-term visits.</p>
                </div>
                <div className="bg-card rounded border border-border p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Business Visa</h3>
                  <p className="text-sm text-muted-foreground mb-4">Validity: Up to 90 days | Processing Time: 10-21 working days</p>
                  <p className="text-sm text-muted-foreground">For business meetings, trade, and commercial activities. Requires invitation from Iranian company.</p>
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
