'use client'

import Image from "next/image";
import { Ship, Clock, CreditCard, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroFerry from "@/assets/hero-ferry.jpg";

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[450px] md:h-[500px] w-full">
        <Image
          src={heroFerry}
          alt="Ferry sailing across the Arabian Sea"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
                <Ship className="h-4 w-4" />
                <span className="text-sm font-medium">Official Information Portal</span>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Pakistan–Iran Ferry Service
              </h1>

              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Information about the maritime passenger service connecting Karachi, Pakistan 
                and Chabahar, Iran across the Arabian Sea.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/route">
                  <Button variant="govOutline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0">
                    Route Information
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button variant="govOutline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                    View Schedule
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Facts Bar */}
      <div className="bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            <div className="text-center">
              <Clock className="h-7 w-7 text-primary mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-bold text-foreground">12–16 Hours</p>
              <p className="text-sm text-muted-foreground">Journey Duration</p>
            </div>
            <div className="text-center">
              <Calendar className="h-7 w-7 text-primary mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-bold text-foreground">2–3 Trips</p>
              <p className="text-sm text-muted-foreground">Per Week (Expected)</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-7 w-7 text-primary mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-bold text-foreground">~PKR 50,000</p>
              <p className="text-sm text-muted-foreground">Round Trip (Approx.)</p>
            </div>
            <div className="text-center">
              <Ship className="h-7 w-7 text-primary mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-bold text-foreground">~450 km</p>
              <p className="text-sm text-muted-foreground">Route Distance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
