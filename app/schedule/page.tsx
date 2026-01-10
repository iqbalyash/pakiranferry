import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Calendar, Clock, ArrowRight, Ship, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Ferry Schedule & Timetable | Pakistan Iran Ferry',
  description: 'Weekly sailing schedule for the Karachi to Chabahar ferry service. Check departure times, arrival times, and frequency of Pakistan Iran sea travel.',
  keywords: ['Pakistan Iran ferry schedule', 'Karachi Chabahar timetable', 'ferry departure times', 'Chabahar ferry service'],
  alternates: {
    canonical: 'https://pakiranferry.com/schedule',
  },
}

const scheduleData = [
  { route: 'Karachi → Chabahar', departure: '08:00', arrival: '20:00', day: 'Monday', duration: '12 hours' },
  { route: 'Chabahar → Karachi', departure: '09:00', arrival: '21:00', day: 'Tuesday', duration: '12 hours' },
  { route: 'Karachi → Chabahar', departure: '08:00', arrival: '20:00', day: 'Wednesday', duration: '12 hours' },
  { route: 'Chabahar → Karachi', departure: '09:00', arrival: '21:00', day: 'Thursday', duration: '12 hours' },
  { route: 'Karachi → Chabahar', departure: '08:00', arrival: '20:00', day: 'Friday', duration: '12 hours' },
  { route: 'Chabahar → Karachi', departure: '09:00', arrival: '21:00', day: 'Saturday', duration: '12 hours' },
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">Weekly Timetable</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Sailing Schedule
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Plan your journey with our regular ferry departures between Karachi and Chabahar.
            </p>
          </div>
        </section>

        {/* Notice */}
        <section className="py-6 bg-secondary border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 justify-center text-center">
              <Info className="h-5 w-5 text-primary" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Important:</span> Schedule may vary due to weather conditions or national holidays. Verify availability before booking.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Table */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-heading font-semibold">Day</th>
                      <th className="px-6 py-4 text-left font-heading font-semibold">Route</th>
                      <th className="px-6 py-4 text-left font-heading font-semibold">Departure</th>
                      <th className="px-6 py-4 text-left font-heading font-semibold">Arrival</th>
                      <th className="px-6 py-4 text-left font-heading font-semibold">Duration</th>
                      <th className="px-6 py-4 text-left font-heading font-semibold">Status</th>
                      <th className="px-6 py-4 text-left font-heading font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.map((item, index) => (
                      <tr key={index} className="border-b border-border last:border-b-0 hover:bg-secondary/50 transition-colors">
                        <td className="px-6 py-5 font-semibold text-foreground">{item.day}</td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <Ship className="h-4 w-4 text-primary" />
                            <span className="text-foreground">{item.route}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {item.departure}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {item.arrival}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">{item.duration}</td>
                        <td className="px-6 py-5">
                          <span className="px-3 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold uppercase">
                            Operational
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <Button variant="gov" size="sm">
                            Book
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded bg-secondary border border-border">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Check-in Requirements</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Check-in opens 3 hours before departure</li>
                  <li>• All passengers must check in at least 1 hour before departure</li>
                  <li>• Vehicle check-in opens 4 hours before departure</li>
                  <li>• Boarding begins 30 minutes before departure</li>
                </ul>
              </div>
              <div className="p-6 rounded bg-secondary border border-border">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Sunday Service</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No regular scheduled service on Sundays. The ferry undergoes maintenance and crew rest. 
                  Special charter services may be available upon request for groups of 100+ passengers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
