import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Sukoharjo Murah & Terpercaya | Mulai 200rb",
  description:
    "Jasa pembuatan website di Sukoharjo terpercaya dengan harga mulai 200rb. Spesialis website company profile, toko online & landing page. Gratis konsultasi, SEO friendly, garansi revisi. Hubungi sekarang!",
  keywords: [
    // Primary high-search keywords (Exact match untuk ranking #1)
    "jasa pembuatan website sukoharjo",
    "jasa pembuatan website di sukoharjo",
    "jasa website sukoharjo", 
    "web developer sukoharjo",
    "website murah sukoharjo",
    "harga pembuatan website sukoharjo",
    "jasa pembuatan website sukoharjo murah",
    "jasa pembuatan website sukoharjo terpercaya",
    
    // Service-based keywords (high search volume)
    "jasa pembuatan website company profile sukoharjo",
    "jasa pembuatan website toko online sukoharjo",
    "jasa pembuatan website umkm sukoharjo",
    "jasa pembuatan website bisnis sukoharjo",
    "jasa pembuatan website sekolah sukoharjo",
    "jasa pembuatan website landing page sukoharjo",
    
    // Local expansion keywords (geographic targeting)
    "jasa pembuatan website solo",
    "jasa pembuatan website kartasura",
    "jasa pembuatan website karanganyar",
    "web developer solo",
    "web developer kartasura",
    "pembuatan website jawa tengah",
    
    // Long-tail high-intent keywords (conversion focused)
    "jasa buat website murah sukoharjo",
    "bikin website company profile sukoharjo",
    "pembuatan website responsive sukoharjo",
    "jasa website seo friendly sukoharjo",
    "web design profesional sukoharjo",
    "jasa pembuatan website wordpress sukoharjo",
    "jasa pembuatan website ecommerce sukoharjo",
    
    // Commercial intent keywords (buying signals)
    "harga jasa pembuatan website sukoharjo",
    "jasa pembuatan website terpercaya sukoharjo",
    "web developer terbaik sukoharjo",
    "jasa pembuatan website sukoharjo termurah",
    "jasa pembuatan website sukoharjo berkualitas",
    
    // Competitor & comparison keywords
    "perbandingan jasa website sukoharjo",
    "jasa website sukoharjo vs solo",
    "review jasa pembuatan website sukoharjo",
    "rekomendasi jasa website sukoharjo"
  ],
  metadataBase: new URL("https://jawatechno.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jasa Pembuatan Website Sukoharjo Murah & Terpercaya | Mulai 200rb",
    description:
      "Jasa pembuatan website di Sukoharjo terpercaya dengan harga mulai 200rb. Spesialis website company profile, toko online & landing page. Gratis konsultasi, SEO friendly, garansi revisi.",
    url: "https://jawatechno.com",
    siteName: "Jawatechno - Jasa Website Sukoharjo",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Sukoharjo Murah - Jawatechno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Sukoharjo Murah & Terpercaya | Mulai 200rb",
    description:
      "Jasa pembuatan website di Sukoharjo terpercaya dengan harga mulai 200rb. Spesialis website company profile, toko online & landing page. Gratis konsultasi, SEO friendly!",
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
  "@type": ["ProfessionalService", "LocalBusiness", "WebDesignCompany"],
  name: "Jawatechno - Jasa Pembuatan Website Sukoharjo",
  alternateName: "Jasa Website Sukoharjo Terpercaya",
  description:
    "Jasa pembuatan website profesional di Sukoharjo dengan harga mulai 200rb. Spesialis website company profile, toko online, landing page, dan website bisnis. Melayani Sukoharjo, Solo, Kartasura dan sekitarnya.",
  image: [
    "https://jawatechno.com/og-image.jpg",
    "https://jawatechno.com/logo-jawatechno.png"
  ],
  "@id": "https://jawatechno.com",
  url: "https://jawatechno.com",
  telephone: "+6285876120167",
  email: "hadzipamuji5@gmail.com",
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
  areaServed: [
    {
      "@type": "City",
      name: "Sukoharjo"
    },
    {
      "@type": "City", 
      name: "Solo"
    },
    {
      "@type": "City",
      name: "Kartasura"
    },
    {
      "@type": "City",
      name: "Karanganyar"
    }
  ],
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
    "https://wa.me/6285876120167"
  ],
  priceRange: "Rp200.000 - Rp2.000.000",
  currenciesAccepted: "IDR",
  paymentAccepted: ["Cash", "Bank Transfer", "E-Wallet"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1"
  },
  founder: {
    "@type": "Person",
    name: "Hadzi Pamuji",
    jobTitle: "Web Developer & Digital Marketing Specialist"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Pembuatan Website Sukoharjo",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Jasa Pembuatan Website Company Profile Sukoharjo",
        description: "Pembuatan website company profile profesional untuk bisnis di Sukoharjo dengan harga mulai 200rb",
        price: "200000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Website Company Profile Sukoharjo",
          serviceType: "Web Development"
        }
      },
      {
        "@type": "Offer", 
        name: "Jasa Pembuatan Website Toko Online Sukoharjo",
        description: "Pembuatan website toko online e-commerce dengan fitur lengkap untuk bisnis di Sukoharjo",
        price: "500000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Website Toko Online Sukoharjo",
          serviceType: "E-commerce Development"
        }
      },
      {
        "@type": "Offer",
        name: "Jasa Pembuatan Landing Page Sukoharjo", 
        description: "Pembuatan landing page yang convert tinggi untuk campaign marketing bisnis di Sukoharjo",
        price: "300000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Sukoharjo",
          serviceType: "Landing Page Development"
        }
      },
      {
        "@type": "Offer",
        name: "Jasa Pembuatan Website UMKM Sukoharjo",
        description: "Pembuatan website khusus untuk UMKM di Sukoharjo dengan harga terjangkau dan fitur sesuai kebutuhan",
        price: "250000", 
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Website UMKM Sukoharjo",
          serviceType: "UMKM Web Development"
        }
      }
    ],
  },
  knowsAbout: [
    "Web Development",
    "Website Design",
    "E-commerce Development", 
    "SEO Optimization",
    "Digital Marketing",
    "Responsive Design",
    "WordPress Development",
    "Laravel Development",
    "Next.js Development"
  ],
  slogan: "Jasa Pembuatan Website Sukoharjo Terpercaya & Terjangkau"
};

// Advanced Service Schema for better SERP features
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Jasa Pembuatan Website Sukoharjo",
  "description": "Jasa pembuatan website profesional di Sukoharjo dengan harga mulai 200rb. Spesialis website company profile, toko online, landing page untuk UMKM dan bisnis.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Jawatechno",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Karangasem, Bulu",
      "addressLocality": "Sukoharjo",
      "addressRegion": "Jawa Tengah",
      "postalCode": "57512",
      "addressCountry": "ID"
    },
    "telephone": "+6285876120167"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Sukoharjo"
    },
    {
      "@type": "City",
      "name": "Solo"
    },
    {
      "@type": "City",
      "name": "Kartasura"
    }
  ],
  "serviceType": "Web Development",
  "offers": {
    "@type": "Offer",
    "price": "200000",
    "priceCurrency": "IDR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "200000",
      "maxPrice": "2000000",
      "priceCurrency": "IDR"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Layanan Website Sukoharjo",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Company Profile Sukoharjo",
          "description": "Jasa pembuatan website company profile profesional untuk bisnis di Sukoharjo mulai 200rb"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Website Toko Online Sukoharjo",
          "description": "Jasa pembuatan website toko online e-commerce untuk UMKM di Sukoharjo"
        }
      }
    ]
  }
};

// FAQ Schema for better SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa harga jasa pembuatan website di Sukoharjo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Harga jasa pembuatan website di Sukoharjo mulai dari 200rb untuk website company profile sederhana. Untuk website toko online mulai 500rb, dan landing page mulai 300rb."
      }
    },
    {
      "@type": "Question", 
      "name": "Berapa lama proses pembuatan website di Sukoharjo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proses pembuatan website di Sukoharjo biasanya memakan waktu 3-14 hari kerja tergantung kompleksitas. Website company profile 3-7 hari, toko online 7-14 hari."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah website yang dibuat SEO friendly untuk bisnis Sukoharjo?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tentu! Semua website yang kami buat sudah SEO friendly dengan optimasi khusus untuk bisnis lokal Sukoharjo, termasuk local SEO dan Google My Business setup."
      }
    },
    {
      "@type": "Question",
      "name": "Jasa pembuatan website mana yang cocok untuk UMKM Sukoharjo?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Untuk UMKM Sukoharjo, kami merekomendasikan paket website company profile atau katalog produk mulai 200rb dengan fitur WhatsApp integration dan SEO local."
      }
    }
  ]
};

// Breadcrumb Schema for better navigation SEO
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://jawatechno.com"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Jasa Pembuatan Website Sukoharjo",
      "item": "https://jawatechno.com/#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Portfolio Website",
      "item": "https://jawatechno.com/#portfolio"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Harga Website Sukoharjo", 
      "item": "https://jawatechno.com/#pricing"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Kontak Jasa Website",
      "item": "https://jawatechno.com/#contact"
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
