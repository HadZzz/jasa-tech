'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, ShoppingCart, Building2, Search, Laptop } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-10 h-10" />,
    title: 'Website Company Profile Sukoharjo',
    description: 'Jasa pembuatan website company profile profesional di Sukoharjo untuk meningkatkan kredibilitas bisnis Anda. Desain modern, responsive, dan SEO friendly.',
    technologies: ['Responsive Design', 'SEO Optimized', 'CMS Admin', 'Fast Loading'],
    keyword: 'website company profile sukoharjo'
  },
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: 'Website Toko Online Sukoharjo',
    description: 'Pembuatan website toko online di Sukoharjo dengan fitur lengkap: payment gateway, manajemen produk, dan sistem order yang mudah digunakan.',
    technologies: ['E-Commerce', 'Payment Gateway', 'Inventory System', 'Mobile Friendly'],
    keyword: 'website toko online sukoharjo'
  },
  {
    icon: <Laptop className="w-10 h-10" />,
    title: 'Landing Page Sukoharjo',
    description: 'Jasa pembuatan landing page di Sukoharjo yang convert tinggi untuk campaign marketing dan promosi bisnis Anda.',
    technologies: ['High Converting', 'A/B Testing', 'Analytics', 'Lead Generation'],
    keyword: 'landing page sukoharjo'
  },
  {
    icon: <Code2 className="w-10 h-10" />,
    title: 'Website Bisnis Sukoharjo',
    description: 'Pembuatan website bisnis profesional di Sukoharjo dengan teknologi modern Next.js dan Laravel untuk performa optimal.',
    technologies: ['Next.js', 'Laravel', 'React', 'TypeScript'],
    keyword: 'website bisnis sukoharjo'
  },
  {
    icon: <Search className="w-10 h-10" />,
    title: 'Website SEO Friendly Sukoharjo',
    description: 'Jasa pembuatan website SEO friendly di Sukoharjo untuk ranking #1 di Google. Optimasi on-page dan technical SEO terbaik.',
    technologies: ['On-page SEO', 'Technical SEO', 'Local SEO', 'Google Analytics'],
    keyword: 'website seo sukoharjo'
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: 'Website Responsive Sukoharjo',
    description: 'Pembuatan website responsive di Sukoharjo yang tampil sempurna di semua device: desktop, tablet, dan mobile.',
    technologies: ['Mobile First', 'Cross Browser', 'Touch Friendly', 'Fast Loading'],
    keyword: 'website responsive sukoharjo'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Jasa Pembuatan Website di Sukoharjo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Layanan pembuatan website profesional di Sukoharjo dengan harga terjangkau. Spesialis website company profile, toko online, dan landing page untuk bisnis lokal Sukoharjo.
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