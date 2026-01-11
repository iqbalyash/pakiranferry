import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Pak-Iran Ferry | Maritime Services Between Pakistan & Iran',
  description: 'Experience comfortable ferry travel between Karachi, Pakistan and Chabahar, Iran. Book your voyage across the Arabian Sea with Pak-Iran Ferry Services.',
  keywords: ['Pakistan Iran ferry', 'Karachi Chabahar ferry', 'maritime travel', 'Arabian Sea', 'ferry booking', 'sea travel'],
  authors: [{ name: 'Pak-Iran Ferry Services' }],
  verification: {
    google: 'vBgj1fWAs9Mhi69Lniw-vGmoXfe6WZETMpCe1g-5cc8',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Pak-Iran Ferry | Maritime Services',
    description: 'Connecting Pakistan and Iran across the Arabian Sea. Comfortable, reliable ferry services between Karachi and Chabahar.',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PakIranFerry',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  themeColor: '#0c4a6e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
