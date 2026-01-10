import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CreditCard, Users, Car, Info, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Ticket Fares & Pricing | Pakistan Iran Ferry',
  description: 'Ticket fares for the Pakistan Iran ferry. Passenger and vehicle pricing for the Karachi to Chabahar route. Economy, business, and premium cabin options.',
  keywords: ['Pakistan Iran ferry fare', 'Karachi Chabahar ticket price', 'ferry ticket cost', 'Chabahar ferry service pricing'],
  alternates: {
    canonical: 'https://pakiranferry.com/fares',
  },
}

const fareData = {
  passenger: [
    { class: 'Economy Class', adult: '$80', child: '$50', infant: 'Free', description: 'Shared cabin (4 berths), basic amenities' },
    { class: 'Business Class', adult: '$150', child: '$100', infant: 'Free', description: 'Private cabin (2 berths), all meals included' },
    { class: 'Premium Suite', adult: '$280', child: '$180', infant: 'Free', description: 'Deluxe suite, ocean view, lounge access' },
  ],
  vehicle: [
    { type: 'Motorcycle', fare: '$40' },
    { type: 'Small Car (up to 1600cc)', fare: '$120' },
    { type: 'Large Car / SUV', fare: '$180' },
    { type: 'Van / Minibus', fare: '$250' },
    { type: 'Light Commercial Vehicle', fare: '$350' },
  ],
}

export default function FaresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <CreditCard className="h-4 w-4" />
              <span className="text-sm font-medium">Pricing</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Ticket Fares
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Complete fare information for passengers and vehicles.
            </p>
          </div>
        </section>

        <section className="py-6 bg-secondary border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Note:</strong> Fares are in USD and subject to change. Prices shown are one-way fares. 
                Taxes and port fees may apply. Contact booking office for current rates.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Passenger Fares
                </h2>
              </div>

              <div className="bg-card rounded border border-border overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-6 py-4 text-left font-heading font-semibold">Cabin Class</th>
                        <th className="px-6 py-4 text-left font-heading font-semibold">Adult (12+)</th>
                        <th className="px-6 py-4 text-left font-heading font-semibold">Child (2-11)</th>
                        <th className="px-6 py-4 text-left font-heading font-semibold">Infant (0-2)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fareData.passenger.map((fare, index) => (
                        <tr key={index} className="border-b border-border last:border-b-0">
                          <td className="px-6 py-5">
                            <p className="font-semibold text-foreground">{fare.class}</p>
                            <p className="text-sm text-muted-foreground">{fare.description}</p>
                          </td>
                          <td className="px-6 py-5 font-bold text-primary">{fare.adult}</td>
                          <td className="px-6 py-5 text-foreground">{fare.child}</td>
                          <td className="px-6 py-5 text-foreground">{fare.infant}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-secondary rounded border border-border p-6 mb-12">
                <h3 className="font-heading font-bold text-foreground mb-3">Passenger Fare Notes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Children aged 2-11 years receive discounted fares</li>
                  <li>• Infants under 2 years travel free (no separate berth)</li>
                  <li>• Senior citizens (65+) may be eligible for 10% discount</li>
                  <li>• Group bookings (10+ passengers) may receive special rates</li>
                  <li>• Round-trip bookings receive 10% discount on return fare</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <Car className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Vehicle Transport Fares
                </h2>
              </div>

              <div className="bg-card rounded border border-border overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-6 py-4 text-left font-heading font-semibold">Vehicle Type</th>
                        <th className="px-6 py-4 text-left font-heading font-semibold">One-Way Fare</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fareData.vehicle.map((vehicle, index) => (
                        <tr key={index} className="border-b border-border last:border-b-0">
                          <td className="px-6 py-5 font-medium text-foreground">{vehicle.type}</td>
                          <td className="px-6 py-5 font-bold text-primary">{vehicle.fare}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button variant="gov" size="lg">
                  Book Your Ticket
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
