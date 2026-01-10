import Link from "next/link";
import { Ship, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-primary-foreground/10">
                <Ship className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">
                Pak-Iran Ferry
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Official maritime transport service connecting Pakistan and Iran 
              across the Arabian Sea since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold mb-4 pb-2 border-b border-primary-foreground/20">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Routes", "Schedule", "Services", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h4 className="font-heading text-base font-bold mb-4 pb-2 border-b border-primary-foreground/20">
              Official Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:underline flex items-center gap-1">
                  Travel Advisory <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:underline flex items-center gap-1">
                  Visa Requirements <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:underline flex items-center gap-1">
                  Customs Regulations <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:underline flex items-center gap-1">
                  Safety Guidelines <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-bold mb-4 pb-2 border-b border-primary-foreground/20">
              Contact Information
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Port Terminal Building, Karachi Port, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+92 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@pakiranferry.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-xs text-primary-foreground/70 space-y-3">
            <p>
              <strong>Disclaimer:</strong> This website provides information about ferry services between 
              Pakistan and Iran. All schedules are subject to change based on weather conditions, 
              regulatory requirements, and operational considerations. Passengers are advised to 
              confirm bookings and verify current travel requirements before departure.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-3 border-t border-primary-foreground/10">
              <p>© 2025 Pak-Iran Ferry Services. A Government of Pakistan Initiative.</p>
              <div className="flex gap-6">
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
