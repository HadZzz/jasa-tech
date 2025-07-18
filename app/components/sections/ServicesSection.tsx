'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, ShoppingCart, Building2, Search, Laptop } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-10 h-10" />,
    title: 'Jasa Pembuatan Website Company Profile Sukoharjo',
    description: 'Jasa pembuatan website company profile profesional di Sukoharjo mulai 200rb. Desain modern, responsive, SEO friendly untuk meningkatkan kredibilitas bisnis UMKM Anda.',
    technologies: ['Mulai 200rb', 'SEO Optimized', 'CMS Admin', 'Garansi Revisi'],
    keyword: 'jasa pembuatan website company profile sukoharjo'
  },
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: 'Jasa Pembuatan Website Toko Online Sukoharjo',
    description: 'Pembuatan website toko online di Sukoharjo dengan fitur lengkap: payment gateway, manajemen produk, sistem order. Cocok untuk UMKM yang ingin jualan online.',
    technologies: ['E-Commerce', 'Payment Gateway', 'Inventory System', 'WhatsApp Order'],
    keyword: 'jasa pembuatan website toko online sukoharjo'
  },
  {
    icon: <Laptop className="w-10 h-10" />,
    title: 'Jasa Pembuatan Landing Page Sukoharjo',
    description: 'Jasa pembuatan landing page di Sukoharjo yang convert tinggi untuk campaign marketing dan promosi bisnis. Harga terjangkau dengan hasil maksimal.',
    technologies: ['High Converting', 'Lead Generation', 'Analytics', 'Mobile Optimized'],
    keyword: 'jasa pembuatan landing page sukoharjo'
  },
  {
    icon: <Code2 className="w-10 h-10" />,
    title: 'Jasa Pembuatan Website UMKM Sukoharjo',
    description: 'Pembuatan website khusus UMKM di Sukoharjo dengan harga murah mulai 200rb. Fitur sesuai kebutuhan bisnis kecil dan menengah.',
    technologies: ['Harga Murah', 'Fitur UMKM', 'Easy Update', 'Support 24/7'],
    keyword: 'jasa pembuatan website umkm sukoharjo'
  },
  {
    icon: <Search className="w-10 h-10" />,
    title: 'Website SEO Friendly Sukoharjo',
    description: 'Jasa pembuatan website SEO friendly di Sukoharjo untuk ranking #1 di Google. Optimasi local SEO khusus bisnis Sukoharjo dan sekitarnya.',
    technologies: ['Local SEO', 'Google My Business', 'On-page SEO', 'Analytics'],
    keyword: 'website seo friendly sukoharjo'
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: 'Web Developer Sukoharjo Terpercaya',
    description: 'Web developer profesional di Sukoharjo dengan pengalaman 5+ tahun. Spesialis Next.js, Laravel, WordPress untuk semua jenis website bisnis.',
    technologies: ['Next.js Expert', 'Laravel Pro', 'WordPress', '5+ Tahun'],
    keyword: 'web developer sukoharjo'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Jasa Pembuatan Website Sukoharjo Murah & Berkualitas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Layanan pembuatan website profesional di Sukoharjo dengan harga mulai 200rb. Spesialis website company profile, toko online, landing page, dan website UMKM. Melayani Sukoharjo, Solo, Kartasura dengan garansi kepuasan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 