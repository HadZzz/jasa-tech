'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Harga', href: '#paket' },
  { name: 'Portfolio', href: '#portfolio' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between gap-8">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Jawa Tech</span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Jawa Tech
              </motion.span>
            </Link>
          </div>
          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Button asChild className="hidden sm:flex">
                <Link href="#kontak">Hubungi Kami</Link>
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}