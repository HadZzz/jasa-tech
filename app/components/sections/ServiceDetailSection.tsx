'use client';

import { motion } from 'framer-motion';
import { Check, Star, Users, Clock, Shield } from 'lucide-react';

const serviceDetails = [
  {
    id: 'landing-page',
    title: 'Jasa Pembuatan Landing Page di Sukoharjo',
    subtitle: 'Landing Page Sederhana untuk Promosi Bisnis',
    description: 'Buat landing page sederhana untuk promosi produk atau jasa Anda. Cocok untuk campaign marketing dengan budget terbatas.',
    features: [
      '1 Halaman Landing Page',
      'Responsive Design',
      'Modern Design',
      'Contact Form',
      'WhatsApp Button',
      'Basic SEO Setup'
    ],
    benefits: [
      'Promosi produk/jasa lebih efektif',
      'Tampil profesional dengan budget minim',
      'Lead generation sederhana',
      'Mobile friendly'
    ],
    price: 'Mulai Rp 200 Ribu',
    keyword: 'landing page sukoharjo'
  },
  {
    id: 'company-profile',
    title: 'Jasa Pembuatan Website Company Profile di Sukoharjo',
    subtitle: 'Website Company Profile Profesional untuk Bisnis',
    description: 'Tingkatkan kredibilitas bisnis Anda dengan website company profile profesional. Cocok untuk perusahaan yang ingin tampil profesional online.',
    features: [
      'Website Company Profile Profesional',
      'Responsive Design',
      '5 Halaman Lengkap',
      'Contact Form & WhatsApp',
      'Basic SEO Setup',
      'Google Analytics'
    ],
    benefits: [
      'Meningkatkan kredibilitas bisnis',
      'Mudah ditemukan di Google',
      'Tampil profesional di mata klien',
      'Hemat biaya marketing'
    ],
    price: 'Mulai Rp 800 Ribu',
    keyword: 'website company profile sukoharjo'
  },
  {
    id: 'custom-website',
    title: 'Jasa Pembuatan Custom Website di Sukoharjo',
    subtitle: 'Website Custom Sesuai Kebutuhan Bisnis Anda',
    description: 'Butuh website dengan fitur khusus? Kami buat website custom sesuai kebutuhan bisnis Anda. Bisa untuk toko online, portal, sistem informasi, atau apapun yang Anda butuhkan.',
    features: [
      'Website Custom Design',
      'Fitur Sesuai Kebutuhan',
      'CMS Admin Panel',
      'Responsive Design',
      'SEO Optimization',
      'WhatsApp Integration'
    ],
    benefits: [
      'Solusi tepat sesuai kebutuhan',
      'Fitur tidak terbatas template',
      'Scalable untuk masa depan',
      'Support konsultasi unlimited'
    ],
    price: 'Mulai Rp 1.5 Juta',
    keyword: 'custom website sukoharjo'
  }
];

const stats = [
  { icon: <Users className="w-6 h-6" />, number: '100+', label: 'Klien Puas' },
  { icon: <Star className="w-6 h-6" />, number: '4.9', label: 'Rating' },
  { icon: <Clock className="w-6 h-6" />, number: '7-14', label: 'Hari Selesai' },
  { icon: <Shield className="w-6 h-6" />, number: '100%', label: 'Garansi' }
];

export default function ServiceDetailSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mengapa Memilih Jasa Pembuatan Website di Sukoharjo Kami?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jawatechno adalah pilihan terbaik untuk jasa pembuatan website di Sukoharjo. 
            Kami telah dipercaya 100+ klien dengan hasil yang memuaskan.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Service Details */}
        <div className="space-y-20">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {service.title}
                </h3>
                <h4 className="text-lg text-primary font-semibold mb-4">
                  {service.subtitle}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-semibold mb-3">Fitur Unggulan:</h5>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Manfaat:</h5>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                  <a
                    href="#kontak"
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition"
                  >
                    Konsultasi Gratis
                  </a>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {service.keyword.replace(/\b\w/g, l => l.toUpperCase())}
                  </h4>
                  <p className="text-muted-foreground">
                    Solusi terbaik untuk bisnis Anda di Sukoharjo
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}