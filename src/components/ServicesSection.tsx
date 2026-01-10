import { Utensils, Wifi, Bed, Coffee, ShieldCheck, Luggage } from "lucide-react";

const services = [
  {
    icon: Bed,
    title: "Passenger Cabins",
    description:
      "Comfortable private and shared cabin options with air conditioning and essential amenities.",
  },
  {
    icon: Utensils,
    title: "Onboard Dining",
    description:
      "Restaurant service offering Pakistani and Iranian cuisine throughout the journey.",
  },
  {
    icon: Wifi,
    title: "Communications",
    description:
      "Satellite internet and communication services available for passengers.",
  },
  {
    icon: Coffee,
    title: "Passenger Lounge",
    description:
      "Common areas and lounges with seating, refreshments, and panoramic views.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Equipment",
    description:
      "Modern safety systems and trained crew ensuring passenger safety at all times.",
  },
  {
    icon: Luggage,
    title: "Vehicle Transport",
    description:
      "Dedicated vehicle deck for cars, motorcycles, and light commercial vehicles.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold mb-4 uppercase tracking-wide">
            Onboard Facilities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services & Amenities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our ferry is equipped with modern facilities to ensure a comfortable 
            and safe journey for all passengers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-card rounded border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded bg-primary flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
