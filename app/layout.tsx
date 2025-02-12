import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './components/theme/theme-provider';
import { ModeToggle } from './components/theme/mode-toggle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Sukoharjo #1 | Jawatechno',
  description: 'Jasa pembuatan website profesional di Sukoharjo dengan harga terjangkau. ✓ Gratis Konsultasi ✓ Desain Menarik ✓ SEO Friendly ✓ Support 24/7. Hubungi Sekarang!',
  keywords: [
    'jasa pembuatan website sukoharjo',
    'jasa buat website sukoharjo',
    'bikin website sukoharjo',
    'harga website sukoharjo',
    'web developer sukoharjo',
    'jasa it sukoharjo',
    'pembuatan website company profile',
  ],
  metadataBase: new URL('https://jawatechno.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jasa Pembuatan Website Sukoharjo #1 | Jawatechno',
    description: 'Jasa pembuatan website profesional di Sukoharjo dengan harga terjangkau. ✓ Gratis Konsultasi ✓ Desain Menarik ✓ SEO Friendly ✓ Support 24/7',
    url: 'https://jawatechno.com',
    siteName: 'Jawatechno',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jasa Pembuatan Website Sukoharjo - Jawatechno',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website Sukoharjo #1 | Jawatechno',
    description: 'Jasa pembuatan website profesional di Sukoharjo dengan harga terjangkau. ✓ Gratis Konsultasi ✓ Desain Menarik ✓ SEO Friendly',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_ID',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Jawatechno - Jasa Pembuatan Website Sukoharjo',
  image: 'https://jawatechno.com/og-image.jpg',
  '@id': 'https://jawatechno.com',
  url: 'https://jawatechno.com',
  telephone: '+628XXXXXXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alamat Anda',
    addressLocality: 'Sukoharjo',
    postalCode: '57512',
    addressRegion: 'Jawa Tengah',
    addressCountry: 'ID'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -7.681282,
    longitude: 110.835292
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    opens: '09:00',
    closes: '17:00'
  },
  sameAs: [
    'https://facebook.com/jawatechno',
    'https://instagram.com/jawatechno'
  ],
  priceRange: 'Rp2.000.000 - Rp10.000.000'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
