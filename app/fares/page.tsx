import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CreditCard, Users, Car, Info, AlertTriangle, CheckCircle, Ticket, TrendingDown, Calendar, DollarSign, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ferry Ticket Fares & Pricing Guide | Karachi to Chabahar Pakistan Iran Ferry',
  description: 'Current approximate passenger and vehicle fares for Pakistan-Iran ferry service (Karachi-Chabahar). Ticket prices range PKR 18,000-25,000 per adult. Official pricing to be announced.',
  keywords: [
    'Pakistan Iran ferry fare',
    'Karachi Chabahar ticket price',
    'ferry ticket cost PKR',
    'Chabahar ferry pricing',
    'Pakistan Iran ferry rates',
    'ferry passenger fare',
    'Karachi Chabahar travel cost',
    'ferry booking price',
    'Pakistan Iran maritime fare'
  ],
  alternates: {
    canonical: 'https://pakiranferry.com/fares',
  },
  openGraph: {
    title: 'Ferry Ticket Fares & Pricing Guide | Pakistan Iran Ferry',
    description: 'Current approximate passenger fares for Pakistan-Iran ferry. Ticket prices PKR 18,000-25,000 per adult. Official pricing to be announced.',
    url: 'https://pakiranferry.com/fares',
    siteName: 'Pak-Iran Ferry',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferry Ticket Fares & Pricing Guide | Pakistan Iran Ferry',
    description: 'Current approximate passenger fares for Pakistan-Iran ferry. Ticket prices PKR 18,000-25,000 per adult.',
  },
}

// Fare data structure - easy to update when official information is released
const passengerFares = [
  {
    category: 'Adult (12+)',
    fare: 'PKR 18,000 – PKR 25,000',
    description: 'Approximate one-way fare',
  },
  {
    category: 'Child (2–11)',
    fare: 'PKR 12,000 – PKR 18,000',
    description: 'Discounted fare (approximate)',
  },
  {
    category: 'Infant (0–2)',
    fare: 'Usually Free',
    description: 'No separate seat required',
  },
]

const expectedFareFeatures = [
  'Fare classes (Economy / Standard / Deluxe / Suite, etc.)',
  'One-way and round-trip pricing in PKR',
  'Child and senior discounts',
  'Vehicle transport prices (if supported)',
  'Group travel and pilgrimage (zaireen) packages',
]

const ticketingChannels = [
  {
    title: 'Port Ticket Counters',
    description: 'In-person booking at Karachi & Chabahar ports',
  },
  {
    title: 'Official Ferry Operator Website',
    description: 'Online booking portal (when available)',
  },
  {
    title: 'Approved Travel Agents',
    description: 'Authorized booking agents nationwide',
  },
]

export default function FaresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <Ticket className="h-4 w-4" />
              <span className="text-sm font-medium">Fare Information</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Ferry Ticket Fares & Pricing
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Current approximate fare information for Karachi–Chabahar ferry travel
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-6 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-900">
                <strong>Important Notice:</strong> Official ticket prices in PKR have not yet been formally published by authorities. 
                The fares shown below are approximate and based on early reports from travel sources and media coverage.
              </div>
            </div>
          </div>
        </section>

        {/* Passenger Fares Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-8">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Passenger Fares (Approximate / Reported)
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                As of the latest available updates on the Pakistan–Iran ferry service (Karachi–Chabahar), 
                early reports by multiple travel sources and news outlets indicate an approximate fare range 
                based on current operations and pilot voyages:
              </p>

              {/* Fare Table */}
              <div className="bg-card rounded-lg border border-border overflow-hidden mb-8 shadow-sm">
                <div className="bg-primary/5 px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold text-foreground">Approximate Passenger Fare</h3>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">Category</th>
                        <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">Approx. Fare (one-way)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {passengerFares.map((fare, index) => (
                        <tr key={index} className="border-b border-border last:border-b-0 hover:bg-secondary/50 transition-colors">
                          <td className="px-6 py-5">
                            <p className="font-semibold text-foreground">{fare.category}</p>
                            <p className="text-sm text-muted-foreground mt-1">{fare.description}</p>
                          </td>
                          <td className="px-6 py-5">
                            <span className="font-bold text-primary text-lg">{fare.fare}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Context Note */}
              <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-12">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-900">
                    <p className="font-semibold mb-2">Currency Conversion Note:</p>
                    <p>
                      A number of travel reports have quoted average ticket prices near <strong>USD 70 per person</strong>, 
                      which converts roughly to PKR 18,000–25,000 depending on exchange rates and class of service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Notes on Fares */}
              <div className="bg-card rounded-lg border border-border p-6 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <h3 className="font-heading text-xl font-bold text-foreground">Important Notes on Fares</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-amber-50 rounded border border-amber-200">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-900">
                      <strong>No official fare schedule</strong> has yet been published by federal authorities or port operators — 
                      reported prices are based on early reports and media coverage.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-3">Final fares may vary by:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Cabin class or seating type (once official classes are defined)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Seasonal demand (pilgrimage periods, holidays)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Round-trip bookings (possible discounts)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Group travel rates</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    Operators are expected to announce official fare tables on approved booking platforms 
                    and at port ticketing counters once services are fully operational.
                  </p>
                </div>
              </div>

              {/* What These Reported Fares Mean */}
              <div className="bg-green-50 rounded-lg border border-green-200 p-6 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingDown className="h-6 w-6 text-green-600" />
                  <h3 className="font-heading text-xl font-bold text-foreground">What These Reported Fares Mean for Travelers</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-900">
                      <strong>Karachi–Chabahar ferry travel is expected to be significantly cheaper than air travel</strong> — 
                      and often competitive with land travel costs, especially for groups and families.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-900">
                      Current reports consistently indicate an approximate single-fare figure of around <strong>USD 70 per passenger</strong> 
                      (converted above to PKR for your convenience), though actual published fares may differ when ticketing systems go live.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vehicle Transport Fares */}
              <div className="flex items-center gap-3 mb-8 mt-16">
                <Car className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Vehicle Transport Fares
                </h2>
              </div>

              <div className="bg-secondary rounded-lg border border-border p-8 text-center mb-12">
                <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Vehicle Transport Information Not Yet Available
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  As of now, official vehicle transport fees for cars, motorcycles, vans, or trucks have not been announced 
                  by port authorities or ferry operators. Once official rates are published (via the operator or government release), 
                  we will update this section.
                </p>
              </div>

              {/* What to Expect Section */}
              <div className="bg-primary/5 rounded-lg border border-primary/20 p-6 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    What to Expect When Official Fare Tables Are Published
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  When the ferry begins formal ticket sales, you should be able to find:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {expectedFareFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 bg-white rounded p-3 border border-border">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ticketing Channels */}
              <div className="mb-12">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Ticketing Expected to be Available Via:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {ticketingChannels.map((channel, index) => (
                    <div key={index} className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-shadow">
                      <h4 className="font-heading font-semibold text-foreground mb-2">{channel.title}</h4>
                      <p className="text-sm text-muted-foreground">{channel.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tip */}
              <div className="bg-blue-50 rounded-lg border border-blue-200 p-5 mb-12">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">Pro Tip:</p>
                    <p className="text-sm text-blue-900">
                      Always request a print or digital ticket receipt with fare breakdown and seat/cabin class before boarding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sources & Reporting */}
              <div className="bg-card rounded-lg border border-border p-6 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">Sources & Reporting</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  Until an official tariff is released, the reported approximate ticket fare information is based on:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Travel reports quoting ≈USD 70 per passenger for the Karachi–Chabahar ferry route.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Media accounts of official service launches noting affordability and pilot ticket pricing.</span>
                  </li>
                </ul>
              </div>

              {/* Final Disclaimer */}
              <div className="bg-amber-50 rounded-lg border-l-4 border-amber-500 p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-amber-900 mb-2">Disclaimer (Important)</h3>
                    <p className="text-sm text-amber-900 mb-3">
                      <strong>This fare information is indicative and not final pricing.</strong>
                    </p>
                    <p className="text-sm text-amber-900 mb-3">
                      Authorities and operators will issue the official PKR fare chart once ticketing systems go live. 
                      Always verify published fare details at:
                    </p>
                    <ul className="space-y-1 text-sm text-amber-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>The official ferry operator</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Karachi Port passenger terminal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Approved booking platforms</span>
                      </li>
                    </ul>
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
