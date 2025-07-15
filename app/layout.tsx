import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Sukoharjo Terpercaya 2024 | Mulai 200 Ribu | Jawatechno",
  description:
    "🏆 Jasa Pembuatan Website di Sukoharjo #1 Terpercaya! ✅ 100+ Klien Puas ✅ Harga Mulai 200 Ribu ✅ Website Company Profile, Toko Online, Landing Page ✅ SEO Friendly ✅ Gratis Konsultasi ✅ Support 24/7. Hubungi Sekarang!",
  keywords: [
    "jasa pembuatan website sukoharjo",
    "pembuatan website sukoharjo",
    "pembuatan website di sukoharjo", 
    "jasa buat website sukoharjo",
    "bikin website sukoharjo",
    "harga website sukoharjo",
    "web developer sukoharjo",
    "jasa website sukoharjo",
    "jasa it sukoharjo",
    "website company profile sukoharjo",
    "jasa website toko online sukoharjo",
    "website murah sukoharjo",
    "website profesional sukoharjo",
    "website bisnis sukoharjo",
    "website sekolah sukoharjo",
    "website umkm sukoharjo",
    "website landing page sukoharjo",
    "jasa pembuatan website solo",
    "web design sukoharjo",
    "website responsive sukoharjo"
  ],
  metadataBase: new URL("https://jawatechno.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jasa Pembuatan Website Sukoharjo Terpercaya 2024 | Mulai 200 Ribu | Jawatechno",
    description:
      "🏆 Jasa Pembuatan Website di Sukoharjo #1 Terpercaya! ✅ 100+ Klien Puas ✅ Harga Mulai 200 Ribu ✅ Website Company Profile, Toko Online, Landing Page ✅ SEO Friendly ✅ Gratis Konsultasi ✅ Support 24/7",
    url: "https://jawatechno.com",
    siteName: "Jawatechno",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Sukoharjo - Jawatechno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Sukoharjo Terpercaya 2024 | Mulai 200 Ribu | Jawatechno",
    description:
      "🏆 Jasa Pembuatan Website di Sukoharjo #1 Terpercaya! ✅ 100+ Klien Puas ✅ Harga Mulai 200 Ribu ✅ Website Company Profile, Toko Online, Landing Page ✅ SEO Friendly ✅ Gratis Konsultasi!",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google4e3a1c0d34f5d8a4",
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
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jawatechno - Jasa Pembuatan Website Sukoharjo",
  description:
    "Jasa pembuatan website profesional di Sukoharjo dengan pengalaman 5+ tahun dan 100+ website selesai. Spesialis website company profile, toko online, dan landing page.",
  image: "https://jawatechno.com/og-image.jpg",
  "@id": "https://jawatechno.com",
  url: "https://jawatechno.com",
  telephone: "+6285876120167",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Karangasem, Bulu",
    addressLocality: "Sukoharjo",
    postalCode: "57512",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.681282,
    longitude: 110.835292,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: [
    "https://facebook.com/jawatechno",
    "https://instagram.com/jawatechno",
  ],
  priceRange: "Rp200.000 - Rp1.500.000",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Website",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Company Profile",
          description:
            "Pembuatan website company profile profesional untuk bisnis di Sukoharjo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Toko Online",
          description: "Pembuatan website toko online dengan fitur lengkap",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page",
          description: "Pembuatan landing page yang convert untuk bisnis Anda",
        },
      },
    ],
  },
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#000000" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
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
