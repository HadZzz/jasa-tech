'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const categories = ['Semua', 'Web', 'Mobile', 'E-Commerce', 'Company Profile'];

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60',
    alt: 'E-commerce platform modern - Portfolio Jasa Pembuatan Website',
    description: 'Platform e-commerce modern dengan fitur lengkap',
    technologies: ['Next.js', 'Laravel', 'MySQL'],
    link: '#'
  },
  {
    title: 'Company Profile Website',
    category: 'Company Profile',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    alt: 'Website company profile profesional - Portfolio Jasa Website',
    description: 'Website company profile dengan desain modern',
    technologies: ['React', 'TailwindCSS'],
    link: '#'
  },
  {
    title: 'Mobile App Marketplace',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60',
    alt: 'Aplikasi marketplace mobile modern - Portfolio Jasa Pembuatan Aplikasi',
    description: 'Aplikasi marketplace mobile cross-platform',
    technologies: ['React Native', 'Node.js'],
    link: '#'
  },
  {
    title: 'Web Application Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    alt: 'Dashboard admin web aplikasi modern - Portfolio Jasa Pembuatan Website',
    description: 'Dashboard admin dengan analitik lengkap',
    technologies: ['Next.js', 'TypeScript'],
    link: '#'
  },
  {
    title: 'Flutter E-Learning App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60',
    alt: 'Aplikasi pembelajaran online modern - Portfolio Jasa Pembuatan Aplikasi',
    description: 'Aplikasi pembelajaran online dengan Flutter',
    technologies: ['Flutter', 'Firebase'],
    link: '#'
  },
  {
    title: 'SEO Optimized Blog',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60',
    alt: 'Blog platform SEO optimasi - Portfolio Jasa Pembuatan Website',
    description: 'Blog platform dengan optimasi SEO',
    technologies: ['Next.js', 'MDX'],
    link: '#'
  }
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProjects = projects.filter(
    project => activeCategory === 'Semua' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Kami</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beberapa project terbaik yang telah kami kerjakan untuk klien
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  Lihat Detail
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 