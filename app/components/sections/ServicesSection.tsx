'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, ShoppingCart, Building2, Search, Laptop } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-10 h-10" />,
    title: 'Web Development',
    description: 'Modern web apps dengan Next.js dan Laravel untuk performa dan skalabilitas terbaik.',
    technologies: ['Next.js', 'Laravel', 'React', 'TypeScript']
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: 'Mobile Development',
    description: 'Aplikasi mobile cross-platform dengan React Native dan Flutter.',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: 'E-Commerce Solutions',
    description: 'Platform e-commerce yang powerful dengan fitur lengkap untuk bisnis online Anda.',
    technologies: ['WooCommerce', 'Shopify', 'Custom Solution']
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: 'Company Profile',
    description: 'Website company profile profesional yang merepresentasikan brand Anda.',
    technologies: ['Responsive Design', 'Modern UI/UX', 'CMS']
  },
  {
    icon: <Search className="w-10 h-10" />,
    title: 'SEO Optimization',
    description: 'Optimasi mesin pencari untuk meningkatkan visibilitas online Anda.',
    technologies: ['On-page SEO', 'Technical SEO', 'Content Strategy']
  },
  {
    icon: <Laptop className="w-10 h-10" />,
    title: 'Custom Solutions',
    description: 'Solusi digital custom sesuai kebutuhan spesifik bisnis Anda.',
    technologies: ['Web Apps', 'Mobile Apps', 'Integration']
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi digital komprehensif untuk membantu bisnis Anda berkembang di era digital
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