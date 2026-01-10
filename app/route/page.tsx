import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MapPin, Clock, Ship, Anchor, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import karachiPort from '@/assets/karachi-port.jpg'
import chabaharPort from '@/assets/chabahar-port.jpg'

export const metadata: Metadata = {
  title: 'Karachi to Chabahar Route | Pakistan Iran Ferry',
  description: 'Detailed route information for the Karachi to Chabahar ferry. 450km journey across the Arabian Sea with 12-hour travel time between Pakistan and Iran.',
  keywords: ['Karachi to Chabahar ferry', 'Pakistan Iran sea travel', 'Karachi Chabahar route', 'Arabian Sea ferry'],
  alternates: {
    canonical: 'https://pakiranferry.com/route',
  },
}

export default function RoutePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Route Information</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Karachi to Chabahar Route
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Detailed information about the maritime route connecting Pakistan and Iran.
            </p>
          </div>
        </section>

        {/* Route Overview */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-card rounded border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Anchor className="h-6 w-6 text-primary" />
                    <h3 className="font-heading text-xl font-bold text-foreground">Departure Port</h3>
                  </div>
                  <div className="relative w-full h-40 rounded mb-4 overflow-hidden">
                    <Image src={karachiPort} alt="Karachi Port" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Karachi Port, Pakistan</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pakistan's largest and busiest seaport, located on the coast of the Arabian Sea. 
                    The ferry terminal is situated at the West Wharf area of Karachi Port.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Address:</strong> West Wharf, Karachi Port Trust, Karachi 74000
                  </p>
                </div>
                <div className="p-6 bg-card rounded border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Anchor className="h-6 w-6 text-primary" />
                    <h3 className="font-heading text-xl font-bold text-foreground">Arrival Port</h3>
                  </div>
                  <div className="relative w-full h-40 rounded mb-4 overflow-hidden">
                    <Image src={chabaharPort} alt="Chabahar Port" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Chabahar Port, Iran</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Iran's only oceanic port, located in the Sistan-Baluchestan Province on the Gulf 
                    of Oman. A strategic free trade zone with modern port facilities.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Address:</strong> Chabahar Free Trade Zone, Shahid Beheshti Port
                  </p>
                </div>
              </div>

              {/* Route Details */}
              <div className="bg-secondary rounded border border-border p-6 md:p-8 mb-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Route Details</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Distance</p>
                    <p className="text-2xl font-bold text-primary">~450 km</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="text-2xl font-bold text-primary">12 hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Sea Route</p>
                    <p className="text-2xl font-bold text-primary">Arabian Sea</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Frequency</p>
                    <p className="text-2xl font-bold text-primary">3x Weekly</p>
                  </div>
                </div>
              </div>

              {/* Journey Description */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">The Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The ferry departs from Karachi Port and sails northwest across the Arabian Sea, 
                    following the Pakistani coastline before entering Iranian waters. The route passes 
                    through the Gulf of Oman before arriving at Chabahar Port.
                  </p>
                  <p>
                    The 12-hour journey offers passengers stunning views of the open sea, with opportunities 
                    to observe marine life and coastal landscapes. The ferry is equipped with comfortable 
                    seating areas, cabins, and observation decks.
                  </p>
                  <p>
                    Weather conditions in the Arabian Sea are generally favorable year-round, though 
                    monsoon season (June–September) may occasionally affect sailing schedules. Passengers 
                    are advised to check weather advisories before travel.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-card rounded border border-border p-6 md:p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Typical Journey Timeline</h2>
                <div className="space-y-4">
                  {[
                    { time: '05:00', event: 'Check-in opens at Karachi Port' },
                    { time: '07:00', event: 'Boarding begins' },
                    { time: '08:00', event: 'Departure from Karachi' },
                    { time: '12:00', event: 'Lunch service in onboard restaurant' },
                    { time: '14:00', event: 'Enter Iranian territorial waters' },
                    { time: '18:00', event: 'Dinner service' },
                    { time: '19:30', event: 'Approach Chabahar Port' },
                    { time: '20:00', event: 'Arrival and disembarkation' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-16 flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{item.time}</span>
                      </div>
                      <div className="flex-1 pb-4 border-b border-border last:border-b-0">
                        <p className="text-foreground">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <Link href="/schedule">
                  <Button variant="gov" size="lg">
                    View Full Schedule
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
