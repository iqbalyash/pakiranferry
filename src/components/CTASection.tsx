import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
            Ready to Book Your Passage?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Secure your ticket for the Pakistan–Iran ferry service. Book online or contact 
            our booking office for assistance with reservations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="govOutline" 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
            >
              Book Online
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/contact">
              <Button 
                variant="govOutline" 
                size="lg" 
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
