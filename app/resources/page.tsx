import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ExternalLink, Building, Globe, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources & Links | Pakistan Iran Ferry',
  description: 'Official resources and links for Pakistan Iran ferry travel. Government websites, port authorities, visa information, and travel advisories.',
  keywords: ['Pakistan Iran ferry resources', 'government links', 'port authorities', 'visa information'],
  alternates: {
    canonical: 'https://pakiranferry.com/resources',
  },
}

const resources = {
  pakistan: [
    { name: 'Ministry of Maritime Affairs', url: 'https://moma.gov.pk', description: 'Official ministry overseeing maritime transport' },
    { name: 'Pakistan Maritime Authority', url: 'https://pakmaritimeauthority.gov.pk', description: 'Regulatory body for maritime affairs' },
    { name: 'Karachi Port Trust', url: 'https://kpt.gov.pk', description: 'Port authority for Karachi' },
    { name: 'Ministry of Foreign Affairs', url: 'https://mofa.gov.pk', description: 'Passport and travel advisories' },
    { name: 'Federal Board of Revenue (Customs)', url: 'https://fbr.gov.pk', description: 'Customs regulations and duties' },
    { name: 'NADRA', url: 'https://nadra.gov.pk', description: 'National identity and travel documents' },
  ],
  iran: [
    { name: 'Ports and Maritime Organization', url: 'https://www.pmo.ir', description: 'Iranian port authority' },
    { name: 'Ministry of Foreign Affairs', url: 'https://www.mfa.ir', description: 'Visa and consular services' },
    { name: 'Iran e-Visa Portal', url: 'https://evisa.mfa.ir', description: 'Online visa application' },
    { name: 'Chabahar Free Zone', url: 'https://www.chabaharfz.ir', description: 'Free trade zone information' },
    { name: 'Islamic Republic of Iran Customs', url: 'https://www.irica.ir', description: 'Customs regulations' },
  ],
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Useful Links</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Resources & Links
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Official resources and links for ferry travel between Pakistan and Iran.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building className="h-8 w-8 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Pakistan Resources
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {resources.pakistan.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-card rounded border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {resource.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Iran Resources
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {resources.iran.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-card rounded border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {resource.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
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
