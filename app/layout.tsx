import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Sukoharjo #1 ⭐ Terpercaya 2024 | Jawatechno",
  description:
    "✓ Jasa pembuatan website Sukoharjo #1 dengan 100+ klien puas. Spesialis website company profile, toko online, landing page. Gratis konsultasi! Desain modern, SEO friendly, support 24/7. Harga mulai 2jt! Hubungi sekarang untuk penawaran terbaik.",
  keywords: [
    "jasa pembuatan website sukoharjo",
    "jasa buat website sukoharjo",
    "bikin website sukoharjo",
    "harga website sukoharjo",
    "web developer sukoharjo",
    "jasa it sukoharjo",
    "pembuatan website company profile",
    "jasa website toko online sukoharjo",
    "website murah sukoharjo",
    "website profesional sukoharjo",
    "website bisnis sukoharjo",
    "website sekolah sukoharjo",
    "website umkm sukoharjo",
    "website landing page sukoharjo",
    "jasa website termurah sukoharjo",
    "website toko online murah sukoharjo",
    "jasa pembuatan website profesional sukoharjo",
    "biaya pembuatan website sukoharjo",
    "harga jasa pembuatan website sukoharjo",
  ],
  metadataBase: new URL("https://jawatechno.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Jasa Pembuatan Website Sukoharjo #1 ⭐ Terpercaya 2024 | Jawatechno",
    description:
      "✓ Jasa pembuatan website Sukoharjo #1 dengan 100+ klien puas. Spesialis website company profile, toko online, landing page. Gratis konsultasi! Desain modern, SEO friendly.",
    url: "https://jawatechno.com",
    siteName: "Jawatechno - Jasa Pembuatan Website Sukoharjo",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Sukoharjo #1 - Jawatechno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jasa Pembuatan Website Sukoharjo #1 ⭐ Terpercaya 2024 | Jawatechno",
    description:
      "✓ Jasa pembuatan website Sukoharjo #1 dengan 100+ klien puas. Spesialis website company profile, toko online, landing page. Gratis konsultasi!",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630",
    ],
    creator: "@jawatechno",
    site: "@jawatechno",
  },
  category: "Technology",
  classification: "Business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://jawatechno.com/#organization",
  name: "Jawatechno - Jasa Pembuatan Website Sukoharjo #1",
  alternateName: ["Jasa Website Sukoharjo", "Web Developer Sukoharjo"],
  description:
    "Jasa pembuatan website profesional #1 di Sukoharjo dengan pengalaman 5+ tahun dan 100+ website selesai. Spesialis website company profile, toko online, dan landing page.",
  url: "https://jawatechno.com",
  logo: {
    "@type": "ImageObject",
    url: "https://jawatechno.com/logo.png",
  },
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630",
  telephone: "+628XXXXXXXXXX",
  email: "info@jawatechno.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alamat Anda",
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
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -7.681282,
      longitude: 110.835292,
    },
    geoRadius: "30000",
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
    "https://twitter.com/jawatechno",
    "https://linkedin.com/company/jawatechno",
  ],
  priceRange: "Rp2.000.000 - Rp10.000.000",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Ahmad Sulaiman",
    },
    datePublished: "2024-02-15",
    reviewBody:
      "Sangat puas dengan layanan Jawatechno. Website yang dibuatkan sangat profesional dan modern.",
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
          price: "2000000",
          priceCurrency: "IDR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Toko Online",
          description: "Pembuatan website toko online dengan fitur lengkap",
          price: "5000000",
          priceCurrency: "IDR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page",
          description: "Pembuatan landing page yang convert untuk bisnis Anda",
          price: "2000000",
          priceCurrency: "IDR",
        },
      },
    ],
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jawatechno.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id' suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5'
        />
        <meta name='theme-color' content='#000000' />
        <meta name='author' content='Jawatechno' />
        <meta name='geo.region' content='ID-JT' />
        <meta name='geo.placename' content='Sukoharjo' />
        <meta name='geo.position' content='-7.681282;110.835292' />
        <meta name='ICBM' content='-7.681282, 110.835292' />
        <meta name='revisit-after' content='7 days' />
        <meta name='rating' content='general' />
        <meta name='distribution' content='global' />
        <meta name='copyright' content='Jawatechno' />
        <link rel='alternate' hrefLang='id-id' href='https://jawatechno.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
