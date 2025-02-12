'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmad Rizki',
    position: 'CEO, Tech Startup',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
    rating: 5,
    content:
      'Sangat puas dengan layanan yang diberikan. Tim developer sangat profesional dan hasil websitenya melebihi ekspektasi kami.'
  },
  {
    name: 'Sarah Putri',
    position: 'Marketing Director, E-Commerce',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
    rating: 5,
    content:
      'Platform e-commerce yang dibangun sangat powerful dan user-friendly. Fitur-fiturnya lengkap dan performa sangat baik.'
  },
  {
    name: 'Budi Santoso',
    position: 'Owner, Fashion Brand',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    rating: 5,
    content:
      'Aplikasi mobile yang dibuat sangat membantu bisnis kami. Customer service responsive dan maintenance rutin.'
  },
  {
    name: 'Linda Wijaya',
    position: 'Manager, Education Platform',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
    rating: 5,
    content:
      'Website learning management system kami berjalan dengan sangat baik. Semua fitur berfungsi sempurna.'
  }
];

const techLogos = [
  {
    src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    alt: "Next.js"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    alt: "React"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    alt: "Laravel"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
    alt: "Flutter"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    alt: "TypeScript"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    alt: "TailwindCSS"
  },
  // Duplicate for seamless loop
  {
    src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    alt: "Next.js"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    alt: "React"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    alt: "Laravel"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
    alt: "Flutter"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    alt: "TypeScript"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    alt: "TailwindCSS"
  }
];

const cloudLogos = [
  {
    src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    alt: "AWS"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
    alt: "Google Cloud"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg",
    alt: "Digital Ocean"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    alt: "Vercel"
  },
  // Duplicate for seamless loop
  {
    src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    alt: "AWS"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
    alt: "Google Cloud"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg",
    alt: "Digital Ocean"
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    alt: "Vercel"
  }
];

export default function TestimonialsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Klien Kami</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimoni dari klien yang telah menggunakan layanan kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Teknologi yang Kami Gunakan</h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Stack teknologi modern untuk solusi digital terbaik
          </p>
          
          <div className="relative w-full overflow-hidden logo-container">
            <div className="logo-slider animate-scroll">
              {[...techLogos, ...techLogos].map((logo, index) => (
                <div
                  key={index}
                  className="logo-slide grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative h-16">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Services */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Cloud Services yang Kami Gunakan</h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Infrastruktur cloud terpercaya untuk performa maksimal
            </p>
            
            <div className="relative w-full overflow-hidden logo-container">
              <div className="logo-slider animate-scroll-reverse">
                {[...cloudLogos, ...cloudLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="logo-slide grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <div className="relative h-16">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain dark:invert"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 