'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary/5 pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Simbah Digital</h3>
            <p className="text-muted-foreground mb-4">
              Transformasi digital untuk bisnis Anda dengan teknologi modern dan inovatif.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-muted-foreground hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@simbahdigital.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  Jl. Teknologi No. 123, Jakarta Selatan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Simbah Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 