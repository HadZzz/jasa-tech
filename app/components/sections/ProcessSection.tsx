'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, Code2, TestTube, Rocket, Wrench } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: 'Konsultasi',
    description: 'Diskusi mendalam tentang kebutuhan dan tujuan project Anda.'
  },
  {
    icon: <FileSearch className="w-12 h-12" />,
    title: 'Planning',
    description: 'Perencanaan detail termasuk timeline, fitur, dan teknologi yang akan digunakan.'
  },
  {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Development',
    description: 'Proses pengembangan dengan standar kualitas tinggi dan best practices.'
  },
  {
    icon: <TestTube className="w-12 h-12" />,
    title: 'Testing',
    description: 'Quality assurance menyeluruh untuk memastikan kualitas produk.'
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: 'Deployment',
    description: 'Proses deployment yang aman dan optimal ke production environment.'
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: 'Maintenance',
    description: 'Dukungan berkelanjutan dan pemeliharaan sistem.'
  }
];

export default function ProcessSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bagaimana Kami Bekerja</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proses pengembangan yang terstruktur untuk hasil yang optimal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -left-4 -top-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <div className="p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-primary/30"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition">
            Mulai Project
          </button>
        </motion.div>
      </div>
    </section>
  );
} 