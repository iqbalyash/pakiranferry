'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Ship, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/route", label: "Route" },
  { href: "/schedule", label: "Schedule" },
  { href: "/fares", label: "Fares" },
  { href: "/services", label: "Services" },
  { href: "/updates", label: "News & Updates" },
  { href: "/travel-guide", label: "Travel Guide" },
  { href: "/visa-guide", label: "Visa Guide" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <span className="hidden md:block">Official Maritime Transport Service</span>
            <div className="flex items-center gap-4">
              <a href="tel:+922112345678" className="hover:underline">+92 21 1234 5678</a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:info@pakiranferry.com" className="hidden sm:block hover:underline">info@pakiranferry.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 rounded bg-primary">
                <Ship className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">Pak-Iran Ferry</span>
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.slice(0, 8).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button variant="gov">Book Passage</Button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="xl:hidden py-4 border-t border-border">
              <nav className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded",
                      pathname === link.href ? "text-primary bg-accent" : "text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button variant="gov" className="w-full mt-4">Book Passage</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
