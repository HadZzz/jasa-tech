'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-24 md:pt-32">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80 mb-6">
              Jasa Pembuatan Website Profesional Sukoharjo 2024
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              <strong>Jawatechno</strong> adalah jasa pembuatan website terpercaya di Sukoharjo dengan pengalaman 5+ tahun. Kami telah membantu 100+ bisnis lokal dengan solusi website modern menggunakan teknologi terkini seperti Next.js dan React. Dapatkan website berkualitas dengan harga terjangkau mulai Rp 2 juta!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#kontak" className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition text-center">
                Konsultasi Gratis
              </a>
              <a href="#portfolio" className="px-8 py-3 rounded-full border border-primary/20 hover:bg-primary/5 transition text-center">
                Lihat Portfolio
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">100+</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Website Selesai</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">50+</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Klien di Sukoharjo</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">5+</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image with Dots Pattern */}
          <div className="relative animate-fade-in-up mt-8 lg:mt-0">
            {/* Dots Pattern */}
            <div className="absolute -right-4 sm:-right-12 -top-4 sm:-top-12 w-48 sm:w-72 h-48 sm:h-72 opacity-20">
              <div className="absolute inset-0 grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary"></div>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/jasa-website-sukoharjo.jpg"
                alt="Jasa Pembuatan Website Profesional Sukoharjo - Jawatechno"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-4 sm:-left-8 -bottom-4 sm:-bottom-8 p-3 sm:p-4 bg-background/90 backdrop-blur-md rounded-xl shadow-lg border border-primary/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Rating 4.9/5</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">50+ Review Positif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-40 md:opacity-70">
        <div className="absolute top-1/4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
} 