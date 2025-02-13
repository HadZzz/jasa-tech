import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './components/theme/theme-provider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Sukoharjo 2024 ⭐ Terpercaya | Jawatechno',
  description: '✓ Jasa pembuatan website Sukoharjo terbaik dengan 100+ klien puas. Spesialis website company profile, toko online, landing page. Gratis konsultasi, desain modern, SEO friendly, support 24/7. Harga mulai 2jt!',
  keywords: [
    'jasa pembuatan website sukoharjo',
    'jasa buat website sukoharjo',
    'bikin website sukoharjo',
    'harga website sukoharjo',
    'web developer sukoharjo',
    'jasa it sukoharjo',
    'pembuatan website company profile',
    'jasa website toko online sukoharjo',
    'website murah sukoharjo',
    'website profesional sukoharjo',
    'website bisnis sukoharjo',
    'website sekolah sukoharjo',
    'website umkm sukoharjo',
    'website landing page sukoharjo'
  ],
  metadataBase: new URL('https://jawatechno.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jasa Pembuatan Website Sukoharjo 2024 ⭐ Terpercaya | Jawatechno',
    description: '✓ Jasa pembuatan website Sukoharjo terbaik dengan 100+ klien puas. Spesialis website company profile, toko online, landing page. Gratis konsultasi, desain modern, SEO friendly, support 24/7',
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
    title: 'Jasa Pembuatan Website Sukoharjo 2024 ⭐ Terpercaya | Jawatechno',
    description: '✓ Jasa pembuatan website Sukoharjo terbaik dengan 100+ klien puas. Spesialis website company profile, toko online, landing page. Gratis konsultasi!',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_ID',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Jawatechno - Jasa Pembuatan Website Sukoharjo',
  description: 'Jasa pembuatan website profesional di Sukoharjo dengan pengalaman 5+ tahun dan 100+ website selesai. Spesialis website company profile, toko online, dan landing page.',
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
  priceRange: 'Rp2.000.000 - Rp10.000.000',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Website',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Company Profile',
          description: 'Pembuatan website company profile profesional untuk bisnis di Sukoharjo'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Toko Online',
          description: 'Pembuatan website toko online dengan fitur lengkap'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Landing Page',
          description: 'Pembuatan landing page yang convert untuk bisnis Anda'
        }
      }
    ]
  }
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
