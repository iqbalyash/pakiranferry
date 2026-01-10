import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Shield, Mail, Globe, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Pakistan Iran Ferry',
  description: 'Privacy Policy for PakIranFerry - Learn how we collect, use, and protect your information when you visit our website.',
  alternates: {
    canonical: 'https://pakiranferry.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Legal Information</span>
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Last updated: January 2026
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Welcome to PakIranFerry (accessible at{' '}
                <a href="https://pakiranferry.com" className="text-primary hover:underline">
                  https://pakiranferry.com
                </a>
                ). Your privacy is important to us, and this Privacy Policy document explains how we collect, use, and protect information when you visit our website.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                By using this website, you agree to the terms described in this Privacy Policy.
              </p>

              {/* Section 1 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  1. Purpose of This Website
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  PakIranFerry is an informational platform created to provide publicly available information related to the proposed and upcoming ferry service between Pakistan (Karachi Port) and Iran (Chabahar Port).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At present, this website:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Does not sell tickets</li>
                  <li>Does not process payments</li>
                  <li>Does not act as an official ferry operator</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Future features may include booking support, customer assistance, or integrations with official service providers. This policy will be updated accordingly if such features are introduced.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  a) Personal Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not automatically collect personal information such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Name</li>
                  <li>CNIC</li>
                  <li>Passport details</li>
                  <li>Phone number</li>
                  <li>Payment information</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Personal information is only collected if you voluntarily provide it, for example:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Contacting us via a form</li>
                  <li>Sending an email inquiry</li>
                  <li>Subscribing to updates (if enabled in the future)</li>
                </ul>

                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  b) Non-Personal Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect limited non-personal information, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Browser type</li>
                  <li>Device type</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Referring website</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  This data is used only for analytics and performance improvement.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  3. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  PakIranFerry may use cookies or similar technologies to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Improve website functionality</li>
                  <li>Analyze traffic and usage patterns</li>
                  <li>Enhance user experience</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You can choose to disable cookies through your browser settings. Disabling cookies may affect some features of the website.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  4. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Any information collected may be used to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Respond to inquiries or support requests</li>
                  <li>Improve website content and usability</li>
                  <li>Monitor website performance</li>
                  <li>Publish relevant updates and announcements</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent user information to third parties.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  5. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website may contain links to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Government departments</li>
                  <li>Port authorities</li>
                  <li>Embassies</li>
                  <li>Official maritime organizations</li>
                  <li>News and reference sources</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  PakIranFerry has no control over the privacy practices of third-party websites. We encourage users to review the privacy policies of any external websites they visit.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  6. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We take reasonable steps to protect information from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Unauthorized access</li>
                  <li>Alteration</li>
                  <li>Disclosure</li>
                  <li>Destruction</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  7. Children's Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  PakIranFerry does not knowingly collect personal information from children under the age of 13.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you believe that a child has provided personal information on this website, please contact us, and we will promptly remove such information.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  8. Future Services & Policy Updates
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As this website evolves, new features such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Online booking</li>
                  <li>Customer support services</li>
                  <li>Official operator integrations</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  may be added. When this happens:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>This Privacy Policy will be updated</li>
                  <li>Changes will be reflected on this page</li>
                  <li>The "Last updated" date will be revised</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage users to review this policy periodically.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  9. Consent
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  10. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions, concerns, or suggestions regarding this Privacy Policy, you may contact us at:
                </p>
                <div className="space-y-3 bg-secondary rounded border border-border p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-foreground">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:info@pakiranferry.com" className="text-primary hover:underline">
                        info@pakiranferry.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="text-foreground">
                      <strong>Website:</strong>{' '}
                      <a href="https://pakiranferry.com" className="text-primary hover:underline">
                        https://pakiranferry.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-amber-900 mb-2">
                      ⚠️ Disclaimer
                    </h3>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      PakIranFerry is an independent informational website and is not an official government or ferry operator platform, unless explicitly stated otherwise in the future.
                    </p>
                  </div>
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
