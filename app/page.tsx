import { Metadata } from 'next';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import ServiceDetailSection from './components/sections/ServiceDetailSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import PricingSection from './components/sections/PricingSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ProcessSection from './components/sections/ProcessSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import LocalSEOSection from './components/sections/LocalSEOSection';
import FAQSection from './components/sections/FAQSection';
import InternalLinksSection from './components/sections/InternalLinksSection';
import ContactSection from './components/sections/ContactSection';

// Aggressive SEO metadata for homepage ranking
export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Sukoharjo Murah Terpercaya | Jawatechno Mulai 200rb",
  description: "⭐ Jasa pembuatan website di Sukoharjo terpercaya #1 dengan harga mulai 200rb. Spesialis website company profile, toko online, landing page UMKM. Web developer Sukoharjo berpengalaman 5+ tahun. Gratis konsultasi, SEO friendly, garansi revisi. Melayani Sukoharjo, Solo, Kartasura. Hubungi sekarang!",
  keywords: [
    "jasa pembuatan website sukoharjo",
    "jasa pembuatan website di sukoharjo", 
    "jasa pembuatan website di sukoharjo terpercaya",
    "web developer sukoharjo",
    "jasa website sukoharjo",
    "website murah sukoharjo",
    "harga pembuatan website sukoharjo",
    "jasa pembuatan website sukoharjo murah",
    "jasa pembuatan website company profile sukoharjo",
    "jasa pembuatan website toko online sukoharjo",
    "jasa pembuatan website umkm sukoharjo"
  ],
  openGraph: {
    title: "Jasa Pembuatan Website Sukoharjo Murah Terpercaya | Jawatechno",
    description: "⭐ Jasa pembuatan website di Sukoharjo terpercaya #1 dengan harga mulai 200rb. Web developer Sukoharjo berpengalaman 5+ tahun.",
    url: "https://jawatechno.com",
    siteName: "Jawatechno - Jasa Website Sukoharjo",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Sukoharjo Murah Terpercaya - Jawatechno",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Sukoharjo Murah Terpercaya | Jawatechno",
    description: "⭐ Jasa pembuatan website di Sukoharjo terpercaya #1 dengan harga mulai 200rb. Web developer Sukoharjo berpengalaman 5+ tahun.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://jawatechno.com",
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

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ServiceDetailSection />
      <WhyChooseUsSection />
      <PricingSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <LocalSEOSection />
      <FAQSection />
      <InternalLinksSection />
      <ContactSection />
    </main>
  );
}
