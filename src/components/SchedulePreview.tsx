import { Calendar, Clock, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const scheduleData = [
  {
    route: "Karachi → Chabahar",
    departure: "08:00",
    arrival: "20:00",
    days: "Monday, Wednesday, Friday",
  },
  {
    route: "Chabahar → Karachi",
    departure: "09:00",
    arrival: "21:00",
    days: "Tuesday, Thursday, Saturday",
  },
];

export function SchedulePreview() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-secondary text-primary text-sm font-semibold mb-4 uppercase tracking-wide">
              Timetable
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Departure Schedule
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Regular ferry services operate between Karachi and Chabahar throughout the week. 
              All times are listed in local time for each port.
            </p>

            <div className="space-y-4 mb-8">
              {scheduleData.map((schedule) => (
                <div
                  key={schedule.route}
                  className="p-5 bg-card rounded border border-border"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading font-bold text-foreground">
                      {schedule.route}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      12 hours
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Departs: {schedule.departure} | Arrives: {schedule.arrival}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{schedule.days}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/schedule">
              <Button variant="gov" size="lg">
                View Full Schedule
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Right - Important Notice */}
          <div className="space-y-6">
            <div className="p-6 bg-secondary rounded border border-border">
              <div className="flex items-start gap-3 mb-4">
                <Info className="h-5 w-5 text-primary mt-0.5" />
                <h3 className="font-heading font-bold text-foreground">
                  Important Information
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Check-in opens 3 hours before departure
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Passengers must check in at least 1 hour before departure
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Valid passport and visa required for all passengers
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Schedule subject to change due to weather conditions
                </li>
              </ul>
            </div>

            <div className="p-6 bg-primary text-primary-foreground rounded">
              <h3 className="font-heading font-bold mb-3">
                Book Early & Save
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Advance bookings made 30 days or more before departure are eligible 
                for discounted fares. Early booking also ensures cabin availability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-primary-foreground/10 rounded text-center">
                  <p className="text-2xl font-bold">20%</p>
                  <p className="text-xs text-primary-foreground/70">Early Booking Discount</p>
                </div>
                <div className="p-3 bg-primary-foreground/10 rounded text-center">
                  <p className="text-2xl font-bold">Free</p>
                  <p className="text-xs text-primary-foreground/70">Date Changes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
