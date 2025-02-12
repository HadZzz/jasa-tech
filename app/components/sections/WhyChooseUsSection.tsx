'use client';

import { motion } from 'framer-motion';
import { Clock, Code, HeartHandshake, Rocket, Shield, Wrench } from 'lucide-react';

const features = [
  {
    icon: <HeartHandshake className="w-12 h-12" />,
    title: 'Tim Berpengalaman',
    description: 'Tim developer profesional dengan pengalaman lebih dari 5 tahun di industri.'
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: 'Teknologi Modern',
    description: 'Menggunakan teknologi terkini untuk memastikan solusi yang future-proof.'
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: 'Support 24/7',
    description: 'Dukungan teknis 24/7 untuk memastikan sistem Anda selalu berjalan optimal.'
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: 'Hasil Terukur',
    description: 'Fokus pada hasil yang terukur dan ROI yang jelas untuk bisnis Anda.'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Keamanan Terjamin',
    description: 'Implementasi standar keamanan terbaik untuk melindungi data Anda.'
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: 'Maintenance Berkala',
    description: 'Pemeliharaan rutin untuk memastikan performa optimal sistem.'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen untuk memberikan solusi terbaik dengan standar kualitas tertinggi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Proyek Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Klien Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Dukungan Teknis</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 