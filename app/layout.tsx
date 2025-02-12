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
    'jasa pembuatan toko online',
    'website bisnis sukoharjo',
    'website profesional sukoharjo',
    'website murah sukoharjo',
    'website sekolah sukoharjo',
    'website umkm sukoharjo',
    'website toko online sukoharjo'
  ],
  authors: [{ name: 'Jawatechno - Jasa Website Sukoharjo' }],
  creator: 'Jawatechno',
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.jpeg',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://jawatechno.vercel.app/',
    title: 'Jasa Pembuatan Website Sukoharjo #1 | Jawatechno',
    description: 'Jasa pembuatan website profesional di Sukoharjo dengan harga terjangkau. ✓ Gratis Konsultasi ✓ Desain Menarik ✓ SEO Friendly ✓ Support 24/7',
    siteName: 'Jawatechno - Jasa Website Sukoharjo',
    images: [{
      url: '/logo.jpeg',
      width: 800,
      height: 600,
      alt: 'Jasa Pembuatan Website Sukoharjo - Jawatechno'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website Sukoharjo #1 | Jawatechno',
    description: 'Jasa pembuatan website profesional di Sukoharjo dengan harga terjangkau. Gratis Konsultasi!',
    images: ['/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'notranslate': true,
    },
    nocache: true,
  },
  verification: {
    google: 'googled3abef38210a98f2',
  },
  alternates: {
    canonical: 'https://jawatechno.vercel.app/',
  },
  other: {
    'geo.region': 'ID-JT',
    'geo.placename': 'Sukoharjo',
    'geo.position': '-7.681282;110.835292',
    'ICBM': '-7.681282, 110.835292'
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jawatechno",
              "image": "/logo.jpeg",
              "description": "Jasa pembuatan website profesional di Sukoharjo dengan harga terjangkau",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Veteran",
                "addressLocality": "Sukoharjo",
                "addressRegion": "Jawa Tengah",
                "postalCode": "57514",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.681282,
                "longitude": 110.835292
              },
              "url": "https://jawatechno.vercel.app",
              "telephone": "+6281234567890",
              "priceRange": "Rp2.000.000 - Rp10.000.000",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            })
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
