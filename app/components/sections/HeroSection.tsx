"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-24 md:pt-32"
    >
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                ⚡ Website Modern & SEO Friendly
              </motion.span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80 mb-6"
            >
              Jasa Pembuatan Website Sukoharjo Murah & Terpercaya
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              <strong>Jawatechno</strong> adalah jasa pembuatan website di Sukoharjo
              terpercaya dengan harga mulai <strong>200rb</strong>. Spesialis website company profile, 
              toko online, dan landing page untuk bisnis UMKM. Melayani Sukoharjo, Solo, Kartasura 
              dengan teknologi modern Next.js. <strong>Gratis konsultasi & garansi revisi!</strong>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition text-center relative overflow-hidden"
                title="Konsultasi Gratis Jasa Pembuatan Website Sukoharjo"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Konsultasi Gratis Website
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#services"
                className="group px-8 py-3 rounded-full border border-primary/20 hover:bg-primary/5 transition text-center flex items-center justify-center gap-2"
                title="Layanan Jasa Pembuatan Website Sukoharjo"
              >
                Layanan Website Kami
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 sm:gap-8"
            >
              {[
                { number: "100+", label: "Website Selesai" },
                { number: "50+", label: "Klien di Sukoharjo" },
                { number: "5+", label: "Tahun Pengalaman" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.number}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image with Dots Pattern */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Dots Pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -right-4 sm:-right-12 -top-4 sm:-top-12 w-48 sm:w-72 h-48 sm:h-72"
            >
              <div className="absolute inset-0 grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.01 }}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary"
                  ></motion.div>
                ))}
              </div>
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=60"
                alt="Jasa Pembuatan Website Profesional Sukoharjo - Jawatechno"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -left-4 sm:-left-8 -bottom-4 sm:-bottom-8 p-3 sm:p-4 bg-background/90 backdrop-blur-md rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-xl sm:text-2xl"
                  >
                    ⭐
                  </motion.span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    Rating 4.9/5
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    50+ Review Positif
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-40 md:opacity-70">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, delay: 1, repeat: Infinity }}
          className="absolute top-1/3 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, delay: 2, repeat: Infinity }}
          className="absolute bottom-1/4 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>
    </section>
  );
}
