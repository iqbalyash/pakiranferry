import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const metadata: Metadata = {
  title: 'Contact Us | Pakistan Iran Ferry',
  description: 'Contact the Pakistan Iran ferry service for bookings and inquiries. Office locations in Karachi and Chabahar, phone numbers, and email addresses.',
  keywords: ['Pakistan Iran ferry contact', 'Karachi ferry booking', 'Chabahar ferry service phone', 'ferry inquiry'],
  alternates: {
    canonical: 'https://pakiranferry.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Get in Touch</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Have questions about your journey? Our team is here to assist with booking and inquiries.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-card rounded border border-border p-6 md:p-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name <span className="text-destructive">*</span>
                      </label>
                      <Input placeholder="Enter first name" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name <span className="text-destructive">*</span>
                      </label>
                      <Input placeholder="Enter last name" className="h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input type="email" placeholder="your@email.com" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+92 300 1234567" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      placeholder="Please describe your inquiry..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>
                  <Button variant="gov" size="lg" className="w-full">
                    Submit Inquiry
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of the following channels. We are available to assist with bookings, inquiries, and support.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      title: 'Head Office',
                      content: 'Port Terminal Building, West Wharf, Karachi Port, Karachi 74000, Pakistan',
                    },
                    {
                      icon: Phone,
                      title: 'Telephone',
                      content: '+92 21 1234 5678\n+92 21 8765 4321 (Bookings)',
                    },
                    {
                      icon: Mail,
                      title: 'Email',
                      content: 'info@pakiranferry.com\nbookings@pakiranferry.com',
                    },
                    {
                      icon: Clock,
                      title: 'Office Hours',
                      content: 'Monday – Saturday: 8:00 AM – 8:00 PM\nSunday: 10:00 AM – 4:00 PM',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 rounded bg-secondary border border-border">
                      <div className="w-12 h-12 rounded bg-primary flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded bg-primary text-primary-foreground">
                  <h4 className="font-heading text-lg font-bold mb-3">Iran Office</h4>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">
                    Chabahar Free Trade Zone, Port Terminal, Chabahar, Sistan-Baluchestan Province, Iran
                  </p>
                  <p className="text-sm text-primary-foreground/80 mt-2">
                    Tel: +98 54 3132 5678
                  </p>
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
