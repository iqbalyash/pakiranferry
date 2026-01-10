import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FileText, CheckCircle, AlertTriangle, Ship, Luggage, Heart, Smartphone, Building2, Phone, ExternalLink, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Travel Guide: Karachi to Chabahar Ferry | Pakistan Iran Ferry',
  description: 'Complete travel guide for the Pakistan-Iran ferry service. Essential preparation, passport requirements, packing checklist, port procedures, and arrival information for Karachi to Chabahar journey.',
  keywords: ['Karachi Chabahar ferry travel guide', 'Pakistan Iran ferry preparation', 'ferry travel documents', 'Chabahar port arrival', 'ferry packing checklist', 'Pakistan Iran sea travel tips'],
  alternates: {
    canonical: 'https://pakiranferry.com/travel-guide',
  },
  openGraph: {
    title: 'Travel Guide: Karachi to Chabahar Ferry Journey',
    description: 'Everything you need to know before traveling on the Pakistan-Iran ferry service between Karachi and Chabahar.',
    type: 'article',
  },
}

const packingCategories = [
  {
    title: 'Essential Documents',
    icon: FileText,
    items: [
      'Passport (original)',
      'Iranian visa (printed)',
      'CNIC (original + copy)',
      'Ferry ticket confirmation',
      'Emergency contact list',
      'Accommodation or onward travel details',
    ],
    note: 'Carry separately in a secure folder',
  },
  {
    title: 'Clothing & Personal Items',
    icon: Luggage,
    items: [
      'Comfortable clothing for long sea travel',
      'Light jacket (cabins and night travel can be cool)',
      'Extra clothes in case of delays',
      'Toiletries and personal hygiene items',
      'Prayer essentials (if required)',
    ],
  },
  {
    title: 'Medicines & Health',
    icon: Heart,
    items: [
      'Personal prescription medicines (with prescription)',
      'Motion sickness medication (strongly recommended)',
      'Basic first-aid items',
      'Hand sanitizer and face masks',
    ],
    warning: 'Some medicines may be restricted in Iran. Carry only necessary quantities with prescriptions.',
  },
  {
    title: 'Electronics & Money',
    icon: Smartphone,
    items: [
      'Mobile phone and charger',
      'Power bank',
      'International roaming or unlocked phone',
      'Limited cash (exchange rules apply)',
      'Debit/ATM card (inform your bank before travel)',
    ],
  },
]

const officialContacts = [
  {
    name: 'Pakistan Immigration & Passports',
    url: 'https://dgip.gov.pk',
    description: 'Passport validity and exit requirements',
  },
  {
    name: 'Embassy of Iran in Islamabad',
    url: 'https://pakistan.mfa.gov.ir',
    description: 'Official consular services and visa information',
  },
  {
    name: 'Karachi Port Trust',
    url: 'https://kpt.gov.pk',
    description: 'Port-related notices and passenger terminal updates',
  },
  {
    name: 'Iranian Ports & Maritime Organization',
    url: 'https://www.pmo.ir',
    description: 'Port and maritime updates in Iran',
  },
]

export default function TravelGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <Ship className="h-4 w-4" />
              <span className="text-sm font-medium">Travel Preparation</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Travel Guide: Karachi to Chabahar Ferry
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Essential information for travelers on the Pakistan–Iran ferry service
            </p>
          </div>
        </section>

        <section className="py-6 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-900">
                <strong>Important:</strong> The Pakistan–Iran ferry service is newly introduced. Schedules, fares, and procedures may change. Always verify details with official authorities before travel.
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-muted-foreground leading-relaxed">
                  Traveling by sea from Karachi, Pakistan to Chabahar, Iran is expected to become a convenient option for tourists, pilgrims, and business travelers. This guide helps Pakistani travelers prepare correctly, understand port procedures, and know what to expect before boarding the ferry.
                </p>
              </div>

              {/* Passport & Visa Requirements */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Before You Travel: Essential Preparation
                </h2>
                
                <div className="bg-card rounded border border-border p-6 mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    Passport & Visa Requirements
                  </h3>
                  <div className="bg-destructive/10 border border-destructive/20 rounded p-4 mb-4">
                    <p className="text-sm font-semibold text-destructive">
                      Pakistani nationals must obtain a valid Iranian visa before departure. Visas are not issued on arrival at Karachi Port.
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Passport validity: At least 6 months recommended</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Visa type must match your purpose of travel</span>
                    </li>
                  </ul>

                  <div className="bg-secondary rounded p-4 mb-6">
                    <p className="font-semibold text-foreground mb-3">Carry printed copies of:</p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Passport bio page
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Approved Iranian visa
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        CNIC (recommended)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Ferry ticket (when officially available)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border border-primary/30 rounded p-4">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-foreground mb-2">
                          For a detailed, step-by-step explanation of visa types, requirements, and official application links, please visit:
                        </p>
                        <Link 
                          href="/visa-guide"
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                        >
                          Visa Guide for Pakistani Nationals
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Visa Links */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <a
                    href="https://evisa.mfa.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-card rounded border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Visa Application Portal</p>
                      <p className="text-xs text-muted-foreground">Ministry of Foreign Affairs, Iran</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://evisatraveller.mfa.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-card rounded border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Track Your Application</p>
                      <p className="text-xs text-muted-foreground">Iran eVisa Traveller Portal</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              {/* Reporting at Karachi Port */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Reporting at Karachi Port (Departure)
                </h2>
                <div className="bg-card rounded border border-border p-6">
                  <p className="text-muted-foreground mb-4">
                    The ferry is expected to operate from Karachi Port, with passenger handling managed through port authorities.
                  </p>
                  <p className="font-semibold text-foreground mb-3">Travelers should:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Arrive at the port well before departure',
                      'Complete immigration and customs clearance',
                      'Present original documents at check-in',
                      'Follow baggage screening instructions',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-secondary rounded p-3 text-sm">
                    <p className="text-muted-foreground">
                      Port-related notices and updates can be checked at{' '}
                      <a href="https://kpt.gov.pk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Karachi Port Trust
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Pack */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  What to Pack for Karachi–Chabahar Ferry Travel
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {packingCategories.map((category, index) => (
                    <div key={index} className="bg-card rounded border border-border p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                          <category.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          {category.title}
                        </h3>
                      </div>
                      {category.note && (
                        <p className="text-xs text-muted-foreground mb-3 italic">
                          {category.note}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {category.warning && (
                        <div className="mt-4 bg-amber-50 border border-amber-200 rounded p-3">
                          <p className="text-xs text-amber-800">
                            <strong>⚠️ Note:</strong> {category.warning}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* During Ferry Journey */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  During the Ferry Journey
                </h2>
                <div className="bg-primary/5 border border-primary/30 rounded p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Ship className="h-6 w-6 text-primary" />
                    <p className="text-lg font-semibold text-foreground">
                      Estimated travel time: 12–16 hours
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Follow crew safety instructions at all times',
                      'Smoking and restricted items policies apply onboard',
                      'Keep travel documents secure and accessible',
                      'Be mindful of fellow passengers',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrival at Chabahar */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Arrival at Chabahar Port (Iran)
                </h2>
                <div className="bg-card rounded border border-border p-6 mb-4">
                  <p className="text-muted-foreground mb-4">On arrival at Chabahar Port:</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Passengers undergo Iranian immigration checks',
                      'Passport and visa are verified',
                      'Customs screening is conducted',
                      'Entry approval is subject to immigration discretion',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-secondary rounded p-4">
                    <p className="font-semibold text-foreground mb-3">Travelers are advised to:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Arrange accommodation in advance</li>
                      <li>• Plan onward travel before arrival</li>
                      <li>• Respect local laws and cultural norms</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Important Travel Tips */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Important Travel Tips
                </h2>
                <div className="bg-amber-50 border border-amber-200 rounded p-6">
                  <ul className="space-y-3">
                    {[
                      'Avoid unofficial agents or unverified information sources',
                      'Do not carry prohibited or undeclared items',
                      'Monitor weather conditions before departure',
                      'Keep family informed of travel plans',
                      'Always cross-check updates with official authorities',
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-amber-900">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Emergency & Information Contacts
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {officialContacts.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-5 bg-card rounded border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <Building2 className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {contact.name}
                          </h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {contact.description}
                        </p>
                        <p className="text-xs text-primary font-medium truncate">
                          {contact.url.replace('https://', '').replace('www.', '')}
                        </p>
                      </div>
                    </a>
                  ))}
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
