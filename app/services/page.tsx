import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServicesSection } from '@/components/ServicesSection'
import { Ship, Star, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services & Amenities | Pakistan Iran Ferry',
  description: 'Onboard services and amenities available on the Pakistan Iran ferry. Dining, accommodation, and passenger facilities for your journey.',
  keywords: ['Pakistan Iran ferry services', 'onboard amenities', 'ferry facilities', 'passenger services'],
  alternates: {
    canonical: 'https://pakiranferry.com/services',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <Ship className="h-4 w-4" />
              <span className="text-sm font-medium">Onboard Experience</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Services & Amenities
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Discover the facilities and services available during your journey across the Arabian Sea.
            </p>
          </div>
        </section>

        <ServicesSection />

        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Users, title: 'Passenger Capacity', value: '500+' },
                  { icon: Star, title: 'Service Rating', value: '4.5/5' },
                  { icon: Award, title: 'Certification', value: 'IMO Certified' },
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 bg-card rounded border border-border">
                    <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground mb-1">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
