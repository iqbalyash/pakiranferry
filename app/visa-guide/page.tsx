import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FileText, AlertCircle, CheckCircle, ExternalLink, Globe, Building2, Landmark } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Iran Visa Guide for Pakistani Nationals | Pakistan Iran Ferry',
  description: 'Complete Iran visa information for Pakistani nationals traveling via ferry. Learn about tourist, business, pilgrimage visas, application process, requirements, and official resources.',
  keywords: ['Iran visa Pakistan', 'Iranian visa application', 'Pakistan Iran ferry visa', 'tourist visa Iran', 'pilgrimage visa Iran', 'Chabahar visa requirements', 'Iran eVisa portal'],
  alternates: {
    canonical: 'https://pakiranferry.com/visa-guide',
  },
  openGraph: {
    title: 'Iran Visa Information for Pakistani Nationals',
    description: 'Essential visa information for Pakistani passport holders traveling to Iran via the Karachi-Chabahar ferry service.',
    type: 'article',
  },
}

const visaTypes = [
  {
    title: 'Tourist Visa',
    description: 'Issued for tourism, sightseeing, and short leisure visits. This is the most suitable visa for ferry passengers traveling for personal or recreational purposes.',
    recommended: true,
  },
  {
    title: 'Religious / Pilgrimage (Ziyarat) Visa',
    description: 'For pilgrims visiting religious cities such as Mashhad and Qom. Group travelers may need additional documentation or coordination through authorized agents.',
    recommended: true,
  },
  {
    title: 'Business Visa',
    description: 'For business meetings, trade, or commercial activities. An invitation letter from an Iranian company or organization is usually required. Suitable for traders using the ferry route.',
    recommended: true,
  },
  {
    title: 'Family Visit Visa',
    description: 'For Pakistani nationals visiting relatives residing in Iran. Proof of relationship and an invitation may be required.',
    recommended: false,
  },
  {
    title: 'Transit Visa',
    description: 'For passing through Iran to another destination. This visa is generally not recommended for ferry travel, as ferry passengers typically require a tourist or entry visa.',
    recommended: false,
  },
  {
    title: 'Student or Special Entry Visas',
    description: 'Issued for long-term study or specific approved purposes and require official authorization or admission documents.',
    recommended: false,
  },
]

const officialResources = [
  {
    name: 'Iran e-Visa System',
    description: 'Official visa application portal operated by the Ministry of Foreign Affairs of Iran',
    url: 'https://evisa.mfa.ir',
    icon: Globe,
  },
  {
    name: 'Iran eVisa Traveller Portal',
    description: 'Track your visa application status',
    url: 'https://evisatraveller.mfa.ir',
    icon: FileText,
  },
  {
    name: 'Embassy of Iran in Islamabad',
    description: 'Official consular services and visa guidance',
    url: 'https://pakistan.mfa.gov.ir',
    icon: Building2,
  },
  {
    name: 'Consulate General of Iran in Lahore',
    description: 'Regional consular office for visa services',
    url: 'https://lahore.mfa.gov.ir',
    icon: Building2,
  },
  {
    name: 'Pakistan Immigration & Passports',
    description: 'Passport validity and exit requirements',
    url: 'https://dgip.gov.pk',
    icon: Landmark,
  },
  {
    name: 'Karachi Port Trust',
    description: 'Port-related and passenger terminal updates',
    url: 'https://kpt.gov.pk',
    icon: Landmark,
  },
]

export default function VisaGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Visa Requirements</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Iran Visa Information
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Essential visa information for Pakistani nationals traveling to Iran via ferry
            </p>
          </div>
        </section>

        <section className="py-6 bg-gold/10 border-y border-gold/30">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <AlertCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Important:</strong> Pakistani passport holders must obtain a valid Iranian visa before traveling to Iran, including those planning to use the Pakistan–Iran ferry service (Karachi–Chabahar).
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Visa type, validity, and duration depend on the purpose of travel and are determined by Iranian authorities.
                  </p>
                  <div className="bg-secondary rounded border border-border p-6">
                    <h3 className="font-heading font-bold text-foreground mb-4">Application Process</h3>
                    <p className="text-muted-foreground mb-4">
                      Visa applications are initiated through the official Iran e-Visa system operated by the Ministry of Foreign Affairs of Iran.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Applicants can track their application status via the Iran eVisa Traveller Portal (see Official Resources below).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Types of Iranian Visas
                </h2>
                <div className="space-y-4">
                  {visaTypes.map((visa, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded border ${
                        visa.recommended
                          ? 'bg-primary/5 border-primary/30'
                          : 'bg-card border-border'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {visa.recommended && (
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                            {visa.title}
                            {visa.recommended && (
                              <span className="ml-2 text-xs px-2 py-1 rounded bg-primary text-primary-foreground">
                                Recommended for Ferry Travel
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {visa.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Recommended Visas for Ferry Travel
                </h2>
                <div className="bg-primary/5 border border-primary/30 rounded p-6">
                  <p className="text-muted-foreground mb-4">
                    For most passengers traveling via the Pakistan–Iran ferry, the following visas are generally appropriate:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">Tourist Visa</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">Religious / Pilgrimage Visa</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">Business Visa (with valid invitation)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Important Notes for Ferry Passengers
                </h2>
                <div className="bg-amber-50 border border-amber-200 rounded p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-amber-900 font-medium mb-2">
                          Visa approval must be obtained before departure from Karachi Port
                        </p>
                        <ul className="space-y-2 text-sm text-amber-800">
                          <li>• Passport validity should generally be at least six months</li>
                          <li>• Immigration and customs clearance will be conducted at both ports</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-amber-300">
                      <p className="font-semibold text-amber-900 mb-3">Travelers should carry printed copies of:</p>
                      <ul className="grid sm:grid-cols-2 gap-2 text-sm text-amber-800">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                          Passport
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                          Approved visa
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                          CNIC
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                          Ferry ticket (when officially available)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Official Authorities & Resources
                </h2>
                <p className="text-muted-foreground mb-6">
                  For official guidance, consular services, and updated requirements, Pakistani applicants should consult the following authorities:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {officialResources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-5 bg-card rounded border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <resource.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {resource.name}
                          </h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                          {resource.description}
                        </p>
                        <p className="text-xs text-primary font-medium truncate">
                          {resource.url.replace('https://', '')}
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
