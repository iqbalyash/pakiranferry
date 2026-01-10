import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Ship, Target, Users, Shield, Award, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About the Ferry Service | Pakistan Iran Ferry',
  description: 'Learn about the Pakistan Iran ferry service connecting Karachi and Chabahar. Information about the maritime transport initiative, mission, and operating authority.',
  keywords: ['Pakistan Iran ferry', 'Chabahar ferry service', 'Pakistan maritime transport', 'Karachi Chabahar ferry'],
  alternates: {
    canonical: 'https://pakiranferry.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <Ship className="h-4 w-4" />
              <span className="text-sm font-medium">About Us</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              About the Ferry Service
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Learn about Pakistan's official maritime transport connection to Iran.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Overview
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  The Pakistan–Iran Ferry Service is an official maritime transport initiative connecting 
                  the port cities of Karachi, Pakistan and Chabahar, Iran. Launched as part of bilateral 
                  cooperation between the two nations, this service provides a safe, reliable, and 
                  economical mode of transportation across the Arabian Sea.
                </p>
                <p>
                  The ferry service operates modern vessels equipped with passenger amenities, vehicle 
                  transport facilities, and cargo capacity. It serves as a vital link for trade, tourism, 
                  and cultural exchange between Pakistan and Iran.
                </p>
                <p>
                  Operated under the supervision of the Pakistan Maritime Transport Authority, the service 
                  adheres to international maritime safety standards and regulations, ensuring passenger 
                  safety and comfort throughout the 12-hour journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 md:p-8 bg-card rounded border border-border">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide safe, affordable, and reliable maritime transportation between Pakistan 
                  and Iran, facilitating trade, tourism, and people-to-people connectivity between 
                  the two nations.
                </p>
              </div>
              <div className="p-6 md:p-8 bg-card rounded border border-border">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the premier maritime transport service in the region, setting standards 
                  for safety, comfort, and operational excellence while strengthening bilateral ties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Key Facts
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Calendar, label: 'Service Commenced', value: '2020' },
                  { icon: Ship, label: 'Fleet Size', value: '2 Vessels' },
                  { icon: Users, label: 'Passenger Capacity', value: '500+ per voyage' },
                  { icon: Shield, label: 'Safety Rating', value: 'IMO Certified' },
                  { label: 'Route Distance', value: '~450 km' },
                  { label: 'Journey Duration', value: '12 hours' },
                ].map((fact, index) => (
                  <div key={index} className="p-5 bg-secondary rounded border border-border text-center">
                    {fact.icon && <fact.icon className="h-8 w-8 text-primary mx-auto mb-3" />}
                    <p className="text-2xl font-bold text-foreground">{fact.value}</p>
                    <p className="text-sm text-muted-foreground">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Operating Authority */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Operating Authority
              </h2>
              <div className="bg-card rounded border border-border p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Pakistan–Iran Ferry Service operates under the authority of the Ministry of 
                  Maritime Affairs, Government of Pakistan, in coordination with the Ports and 
                  Shipping Organization of Iran.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Licensed by Pakistan Maritime Authority (PMA)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Compliant with International Maritime Organization (IMO) standards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Regular safety inspections and certifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Trained crew and maritime professionals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
