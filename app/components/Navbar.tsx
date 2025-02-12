'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative w-40 h-12">
            <Image
              src="/logo.jpeg"
              alt="Simbah Digital"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/services"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Layanan
            </Link>
            <Link
              href="/portfolio"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Tentang Kami
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/services"
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Layanan
              </Link>
              <Link
                href="/portfolio"
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors inline-block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 