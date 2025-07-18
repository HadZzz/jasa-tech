'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

const internalLinks = [
  {
    title: "Harga Pembuatan Website Sukoharjo",
    description: "Daftar lengkap harga jasa pembuatan website di Sukoharjo mulai 200rb. Paket company profile, toko online, landing page.",
    url: "/blog/harga-pembuatan-website-sukoharjo",
    category: "Pricing",
    keywords: "harga website sukoharjo"
  },
  {
    title: "Jasa Website UMKM Sukoharjo",
    description: "Paket khusus pembuatan website untuk UMKM di Sukoharjo. Fitur lengkap, harga terjangkau, SEO friendly.",
    url: "/blog/jasa-pembuatan-website-umkm-sukoharjo", 
    category: "UMKM",
    keywords: "website umkm sukoharjo"
  },
  {
    title: "Web Developer Sukoharjo Terpercaya",
    description: "Profil lengkap web developer profesional di Sukoharjo. Pengalaman 5+ tahun, teknologi modern, portfolio terbaik.",
    url: "/blog/web-developer-sukoharjo-terpercaya",
    category: "Developer",
    keywords: "web developer sukoharjo"
  },
  {
    title: "Tips Memilih Jasa Website",
    description: "Panduan lengkap memilih jasa pembuatan website terpercaya di Sukoharjo. 7 tips penting sebelum memutuskan.",
    url: "/blog/tips-memilih-jasa-pembuatan-website",
    category: "Tips",
    keywords: "tips pilih jasa website"
  },
  {
    title: "Jenis Website untuk Bisnis",
    description: "5 jenis website yang cocok untuk bisnis di Sukoharjo. Company profile, toko online, landing page, dan lainnya.",
    url: "/blog/jenis-website-bisnis",
    category: "Business",
    keywords: "jenis website bisnis"
  },
  {
    title: "UMKM Sukoharjo Go Digital",
    description: "Panduan transformasi digital untuk UMKM Sukoharjo. Strategi marketing online dan tips sukses berbisnis digital.",
    url: "/blog/umkm-sukoharjo-digital",
    category: "Digital Marketing",
    keywords: "umkm digital sukoharjo"
  }
];

const servicePages = [
  {
    title: "Layanan Website Company Profile",
    description: "Jasa pembuatan website company profile profesional untuk bisnis di Sukoharjo",
    url: "#services",
    icon: "🏢"
  },
  {
    title: "Layanan Website Toko Online", 
    description: "Pembuatan website e-commerce lengkap dengan payment gateway dan manajemen produk",
    url: "#services",
    icon: "🛒"
  },
  {
    title: "Layanan Landing Page",
    description: "Jasa pembuatan landing page yang convert tinggi untuk campaign marketing",
    url: "#services", 
    icon: "📱"
  },
  {
    title: "Portfolio Website Kami",
    description: "Lihat contoh website yang telah kami buat untuk klien di Sukoharjo",
    url: "#portfolio",
    icon: "💼"
  }
];

export default function InternalLinksSection() {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Artikel & Panduan Website Sukoharjo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Baca artikel lengkap tentang jasa pembuatan website di Sukoharjo, tips memilih developer, 
            dan panduan digital marketing untuk bisnis lokal.
          </p>
        </motion.div>

        {/* Blog Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {internalLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={link.url} className="group block">
                <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {link.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center text-primary text-sm font-medium">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Layanan Pembuatan Website Kami
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicePages.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.url} className="group block">
                  <div className="bg-background rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30 text-center">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Keywords Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
            <h3 className="text-xl font-bold mb-4">
              Kata Kunci Populer Jasa Website Sukoharjo
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                "jasa pembuatan website sukoharjo",
                "web developer sukoharjo", 
                "website murah sukoharjo",
                "jasa website umkm sukoharjo",
                "pembuatan website company profile",
                "website toko online sukoharjo",
                "landing page sukoharjo",
                "web design sukoharjo"
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Kami adalah spesialis jasa pembuatan website di Sukoharjo dengan pengalaman 5+ tahun. 
              Melayani berbagai jenis website untuk bisnis UMKM, perusahaan, dan organisasi di Sukoharjo dan sekitarnya.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}