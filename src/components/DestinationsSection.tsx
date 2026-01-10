import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import karachiPort from "@/assets/karachi-port.jpg";
import chabaharPort from "@/assets/chabahar-port.jpg";

const destinations = [
  {
    name: "Karachi",
    country: "Pakistan",
    image: karachiPort,
    description:
      "Pakistan's largest city and principal seaport. The Port of Karachi is the busiest port in Pakistan and handles the majority of the nation's trade.",
    details: ["Major commercial hub", "Historical landmarks", "Gateway to South Asia"],
  },
  {
    name: "Chabahar",
    country: "Iran",
    image: chabaharPort,
    description:
      "Iran's only oceanic port, located in the Gulf of Oman. A strategic free trade zone with growing commercial importance in the region.",
    details: ["Free Trade Zone", "Pristine beaches", "Gateway to Central Asia"],
  },
];

export function DestinationsSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary text-primary text-sm font-semibold mb-4 uppercase tracking-wide">
            Destinations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Route Information
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our ferry service operates between two major port cities, providing a vital 
            maritime link between Pakistan and Iran.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="gov-card rounded overflow-hidden"
            >
              <div className="relative h-48 md:h-56 w-full">
                <Image
                  src={dest.image}
                  alt={`${dest.name} port city`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded text-sm font-medium z-10">
                  <MapPin className="h-4 w-4" />
                  {dest.country}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {dest.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {dest.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {dest.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full">
                  Learn More About {dest.name}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
