import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { UpdatesSection } from '@/components/UpdatesSection'
import { Ship, MapPin, Clock, CreditCard, Calendar, AlertTriangle, Info, Anchor, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroFerry from '@/assets/hero-ferry.jpg'
import karachiPort from '@/assets/karachi-port.jpg'
import chabaharPort from '@/assets/chabahar-port.jpg'

export const metadata: Metadata = {
  title: 'Pakistan Iran Ferry Service | Karachi to Chabahar Ferry',
  description: 'Official information about the Pakistan Iran ferry service connecting Karachi and Chabahar. Travel time 12-16 hours, fare around PKR 50,000 round trip, 2-3 weekly departures.',
  keywords: ['Pakistan Iran ferry', 'Karachi to Chabahar ferry', 'Pakistan Iran sea travel', 'Chabahar ferry service', 'Karachi Chabahar route'],
  alternates: {
    canonical: 'https://pakiranferry.com/',
  },
  openGraph: {
    title: 'Pakistan Iran Ferry Service | Karachi to Chabahar',
    description: 'Maritime passenger transport connecting Karachi, Pakistan and Chabahar, Iran across the Arabian Sea.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[400px] md:h-[480px]">
            <Image
              src={heroFerry}
              alt="Passenger ferry on the Arabian Sea"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/80" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl text-primary-foreground">
                  <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70 mb-3">
                    Official Information Portal
                  </p>
                  <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Pakistan–Iran Ferry Service
                  </h1>
                  <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl">
                    Maritime passenger transport connecting Karachi, Pakistan and Chabahar, Iran 
                    across the Arabian Sea.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/schedule">
                      <Button variant="govOutline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0">
                        View Schedule
                      </Button>
                    </Link>
                    <Link href="/fares">
                      <Button variant="govOutline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                        Fare Information
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Bar */}
        <section className="bg-primary text-primary-foreground py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold">12–16 hrs</p>
                <p className="text-sm text-primary-foreground/70">Travel Duration</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">~PKR 50,000</p>
                <p className="text-sm text-primary-foreground/70">Round Trip (Est.)</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">2–3/week</p>
                <p className="text-sm text-primary-foreground/70">Expected Frequency</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">~450 km</p>
                <p className="text-sm text-primary-foreground/70">Route Distance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Notice */}
        <section className="py-4 bg-gold/10 border-b border-gold/20">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <AlertTriangle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Important Notice:</strong> This website provides general information only. 
                Schedules, fares, and operational details are subject to change without notice. 
                Please verify all information with official sources before making travel arrangements.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Ship className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Overview of the Ferry Service
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The Pakistan–Iran ferry service is a maritime passenger transport initiative 
                  connecting the port cities of <strong className="text-foreground">Karachi, Pakistan</strong> and 
                  <strong className="text-foreground"> Chabahar, Iran</strong>. This service establishes a direct 
                  sea route across the Arabian Sea, providing an alternative mode of travel between the two countries.
                </p>
                
                <p>
                  The ferry service is intended to strengthen bilateral connectivity between Pakistan and Iran, 
                  facilitating movement of passengers, vehicles, and cargo. It represents an important transport 
                  corridor for trade, tourism, pilgrimage, and people-to-people contact between the two nations.
                </p>

                <p>
                  Vessels operating on this route are designed to accommodate passengers with various seating 
                  and cabin options. Onboard facilities typically include dining areas, prayer rooms, and 
                  essential amenities for the duration of the voyage. The service operates in accordance 
                  with applicable maritime safety regulations and standards.
                </p>

                <div className="bg-secondary rounded border border-border p-6 mt-8">
                  <h3 className="font-heading font-bold text-foreground mb-3">Key Highlights</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Direct maritime connection between Pakistan and Iran
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Passenger ferry with accommodation options
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Vehicle transport capacity available
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Onboard dining and passenger facilities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Route Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Karachi to Chabahar Route
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                The ferry operates between Karachi Port in Pakistan and Shahid Beheshti Port in 
                Chabahar, Iran. The route traverses the Arabian Sea, covering an approximate 
                distance of 450 kilometers.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Karachi */}
                <div className="bg-card rounded border border-border overflow-hidden">
                  <div className="relative w-full h-44">
                    <Image 
                      src={karachiPort} 
                      alt="Port of Karachi, Pakistan" 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Anchor className="h-5 w-5 text-primary" />
                      <h3 className="font-heading font-bold text-foreground">Karachi, Pakistan</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Departure Point</strong>
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Karachi is Pakistan's largest city and principal seaport. The Port of Karachi, 
                      situated on the Arabian Sea coast, serves as the departure point for the ferry service. 
                      It is one of the busiest and largest deep-water seaports in the region.
                    </p>
                  </div>
                </div>

                {/* Chabahar */}
                <div className="bg-card rounded border border-border overflow-hidden">
                  <div className="relative w-full h-44">
                    <Image 
                      src={chabaharPort} 
                      alt="Chabahar Port, Iran" 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Anchor className="h-5 w-5 text-primary" />
                      <h3 className="font-heading font-bold text-foreground">Chabahar, Iran</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Arrival Point</strong>
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Chabahar is Iran's only oceanic port, located in Sistan-Baluchestan Province on 
                      the Gulf of Oman. Shahid Beheshti Port in Chabahar serves as the arrival point. 
                      The city is a designated free trade zone with strategic regional importance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded border border-border p-6">
                <h3 className="font-heading font-bold text-foreground mb-4">Route Details</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Distance</p>
                    <p className="text-xl font-bold text-primary">Approximately 450 km</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Sea Route</p>
                    <p className="text-xl font-bold text-primary">Arabian Sea</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Direction</p>
                    <p className="text-xl font-bold text-primary">Bidirectional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Time, Fare & Frequency */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Info className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Service Information
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {/* Travel Time */}
                <div className="bg-card rounded border border-border p-6">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    Expected Travel Time
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-3">12–16 Hours</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Journey duration varies depending on weather conditions, sea state, and 
                    operational factors. Passengers should plan accordingly and allow for 
                    possible variations in travel time.
                  </p>
                </div>

                {/* Fare */}
                <div className="bg-card rounded border border-border p-6">
                  <CreditCard className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    Expected Fare
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-3">~PKR 50,000</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Approximate round-trip fare. Actual fares may vary based on cabin class, 
                    season, and availability. One-way tickets and different fare categories 
                    may be available. Confirm current pricing before booking.
                  </p>
                </div>

                {/* Frequency */}
                <div className="bg-card rounded border border-border p-6">
                  <Calendar className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    Expected Frequency
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-3">2–3 Trips/Week</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The ferry service is expected to operate 2 to 3 round trips per week 
                    when fully operational. Schedules may vary due to maintenance, weather, 
                    demand, or other operational considerations.
                  </p>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="bg-secondary rounded border border-border p-6">
                <h3 className="font-heading font-bold text-foreground mb-4">Please Note</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <span>All passengers require a valid passport with at least 6 months remaining validity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <span>Pakistani nationals require an Iranian visa prior to travel. Apply through the Embassy of Iran.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <span>Check-in procedures typically begin several hours before scheduled departure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <span>Schedules and fares are subject to change. Verify all details before making travel plans.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News & Updates Section */}
        <UpdatesSection />

        {/* Quick Links */}
        <section className="py-12 bg-secondary border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                More Information
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { href: '/schedule', label: 'Full Schedule', icon: Calendar },
                  { href: '/fares', label: 'Fare Details', icon: CreditCard },
                  { href: '/travel-guide', label: 'Travel Guide', icon: FileText },
                  { href: '/visa-guide', label: 'Visa Information', icon: FileText },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex flex-col items-center gap-2 p-4 bg-card rounded border border-border hover:border-primary/50 transition-colors text-center group"
                  >
                    <link.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-10 bg-muted border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-3">Disclaimer</h3>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      The information provided on this website is for general informational purposes only. 
                      While every effort has been made to ensure accuracy, we make no representations or 
                      warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                      or availability of the information contained herein.
                    </p>
                    <p>
                      Fares, schedules, routes, and services are subject to change without prior notice. 
                      Travelers are strongly advised to verify all information with official booking channels, 
                      port authorities, and relevant government agencies before making travel arrangements or 
                      purchasing tickets.
                    </p>
                    <p>
                      This website is provided for informational purposes and does not constitute an official 
                      booking platform. For ticket purchases and confirmed schedule information, please contact 
                      authorized booking offices or official service operators directly.
                    </p>
                  </div>
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
