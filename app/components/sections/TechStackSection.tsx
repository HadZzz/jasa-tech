'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = [
  {
    category: 'Frontend',
    techs: [
      {
        name: 'Next.js',
        image: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
        description: 'React framework untuk production'
      },
      {
        name: 'React',
        image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        description: 'Library UI yang powerful'
      },
      {
        name: 'TypeScript',
        image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
        description: 'JavaScript dengan type system'
      },
      {
        name: 'TailwindCSS',
        image: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
        description: 'Framework CSS utility-first'
      }
    ]
  },
  {
    category: 'Backend',
    techs: [
      {
        name: 'Laravel',
        image: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
        description: 'PHP framework yang elegant'
      },
      {
        name: 'Node.js',
        image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        description: 'Runtime JavaScript'
      },
      {
        name: 'PostgreSQL',
        image: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
        description: 'Database SQL powerful'
      },
      {
        name: 'MongoDB',
        image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
        description: 'Database NoSQL fleksibel'
      }
    ]
  },
  {
    category: 'Mobile',
    techs: [
      {
        name: 'React Native',
        image: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
        description: 'Framework mobile cross-platform'
      },
      {
        name: 'Flutter',
        image: 'https://cdn.worldvectorlogo.com/logos/flutter.svg',
        description: 'SDK mobile dari Google'
      },
      {
        name: 'iOS',
        image: 'https://cdn.worldvectorlogo.com/logos/ios-2.svg',
        description: 'Development untuk Apple'
      },
      {
        name: 'Android',
        image: 'https://cdn.worldvectorlogo.com/logos/android.svg',
        description: 'Development untuk Android'
      }
    ]
  }
];

export default function TechStackSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami menggunakan teknologi terkini untuk memberikan solusi terbaik
          </p>
        </motion.div>

        <div className="space-y-16">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex + techIndex) * 0.1 }}
                    className="group bg-background p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="relative h-16 mb-4">
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Fitur Tambahan</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-xl border border-primary/10">
              <h4 className="text-lg font-semibold mb-2">Cloud Services</h4>
              <p className="text-muted-foreground">
                AWS, Google Cloud, Digital Ocean untuk hosting dan deployment
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-primary/10">
              <h4 className="text-lg font-semibold mb-2">Security</h4>
              <p className="text-muted-foreground">
                SSL, encryption, dan best practices keamanan
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-primary/10">
              <h4 className="text-lg font-semibold mb-2">Analytics</h4>
              <p className="text-muted-foreground">
                Google Analytics, Hotjar untuk tracking dan analisis
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 