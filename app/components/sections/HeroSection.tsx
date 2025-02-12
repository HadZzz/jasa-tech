'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-20">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
              Jasa Pembuatan Website Profesional di Sukoharjo
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Butuh website untuk bisnis Anda di Sukoharjo? Kami adalah jasa pembuatan website terpercaya di Sukoharjo yang telah membantu 50+ bisnis lokal dengan solusi digital modern menggunakan teknologi Next.js, Laravel, React Native, dan Flutter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition text-center">
                Konsultasi Gratis
              </a>
              <a href="#portfolio" className="px-8 py-3 rounded-full border border-primary/20 hover:bg-primary/5 transition text-center">
                Lihat Portfolio
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-primary">100+</h3>
                <p className="text-muted-foreground">Website Selesai</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Klien di Sukoharjo</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">5+</h3>
                <p className="text-muted-foreground">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image with Dots Pattern */}
          <div className="relative animate-fade-in-up">
            {/* Dots Pattern */}
            <div className="absolute -right-12 -top-12 w-72 h-72 opacity-20">
              <div className="absolute inset-0 grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
                alt="Digital Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-8 -bottom-8 p-4 bg-background/80 backdrop-blur-md rounded-xl shadow-lg border border-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="font-semibold">Modern Tech Stack</p>
                  <p className="text-sm text-muted-foreground">Next.js & React Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
} 