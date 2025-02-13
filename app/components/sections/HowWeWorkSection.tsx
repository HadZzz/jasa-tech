'use client';

import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Lightbulb, 
  Code2, 
  Rocket,
  Zap,
  Users,
  Monitor,
  HeartHandshake
} from 'lucide-react';

const workSteps = [
  {
    icon: MessageSquare,
    title: 'Konsultasi Gratis',
    description: 'Diskusi kebutuhan website Anda dengan tim kami secara detail dan gratis.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Lightbulb,
    title: 'Analisis & Perencanaan',
    description: 'Kami menganalisis kebutuhan dan membuat rencana pengembangan yang terstruktur.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Monitor,
    title: 'Desain UI/UX',
    description: 'Tim desainer kami membuat tampilan website yang menarik dan user-friendly.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: Code2,
    title: 'Pengembangan',
    description: 'Mengembangkan website dengan teknologi modern dan kode yang bersih.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Users,
    title: 'Review & Revisi',
    description: 'Anda dapat mereview dan meminta revisi hingga sesuai dengan keinginan.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10'
  },
  {
    icon: Rocket,
    title: 'Peluncuran',
    description: 'Website diluncurkan ke publik dengan optimasi performa dan SEO.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  },
  {
    icon: Zap,
    title: 'Optimasi',
    description: 'Mengoptimalkan kecepatan dan performa website secara berkelanjutan.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10'
  },
  {
    icon: HeartHandshake,
    title: 'Dukungan 24/7',
    description: 'Layanan support dan maintenance website selama 24/7.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  }
];

export default function HowWeWorkSection() {
  return (
    <section id="cara-kerja" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Proses Pengerjaan
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-4 mb-4"
          >
            Bagaimana Kami Bekerja
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Proses pengembangan website yang terstruktur dan profesional untuk hasil terbaik
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/20 transition-colors"
              >
                <div className={`w-12 h-12 ${step.bgColor} ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#kontak"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Mulai Proyek
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 