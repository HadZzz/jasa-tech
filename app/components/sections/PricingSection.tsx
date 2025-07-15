'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Landing Page Sukoharjo',
    price: 'Rp 200rb',
    description: 'Paket landing page sederhana untuk promosi bisnis',
    features: [
      '1 Halaman Landing Page',
      'Responsive Design',
      'Modern Design',
      'Contact Form',
      'WhatsApp Button',
      'Basic SEO Setup'
    ],
    highlighted: false,
    keyword: 'landing page sukoharjo'
  },
  {
    name: 'Website Company Profile Sukoharjo',
    price: 'Rp 800rb',
    description: 'Paket website company profile profesional untuk bisnis',
    features: [
      'Website Company Profile Profesional',
      'Responsive Design (Mobile Friendly)',
      '5 Halaman (Home, About, Service, Portfolio, Contact)',
      'Contact Form & WhatsApp Integration',
      'Basic SEO Setup',
      'Google Analytics Setup',
      'Support 1 Bulan'
    ],
    highlighted: true,
    keyword: 'website company profile sukoharjo'
  },
  {
    name: 'Custom Website Sukoharjo',
    price: 'Rp 1.5jt',
    description: 'Paket website custom sesuai kebutuhan bisnis Anda',
    features: [
      'Website Custom Design',
      'Fitur Sesuai Kebutuhan',
      'CMS Admin Panel',
      'Responsive Design',
      'SEO Optimization',
      'WhatsApp Integration',
      'Google Analytics',
      'Support 3 Bulan',
      'Konsultasi Unlimited'
    ],
    highlighted: false,
    keyword: 'custom website sukoharjo'
  }
];

export default function PricingSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Harga Pembuatan Website di Sukoharjo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Paket jasa pembuatan website di Sukoharjo dengan harga terjangkau mulai Rp 200 ribu. Konsultasi gratis untuk semua paket website sesuai kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 bg-background rounded-xl border ${
                plan.highlighted
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-primary/10'
              } hover:border-primary/30 transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                  Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full transition ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-primary/20 hover:bg-primary/10'
                }`}
              >
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Butuh paket website custom untuk bisnis di Sukoharjo? Konsultasikan kebutuhan pembuatan website Anda dengan tim ahli kami secara GRATIS!
          </p>
          <a href="#kontak" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition">
            Konsultasi Gratis Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
} 