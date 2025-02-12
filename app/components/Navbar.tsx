'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-3xl font-bold flex items-center"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-foreground">Jawa</span>
            <span className="text-purple-600 dark:text-purple-400">techno</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Hubungi Kami
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Hubungi Kami
            </button>
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
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}