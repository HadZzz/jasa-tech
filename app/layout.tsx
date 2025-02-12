import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './components/theme/theme-provider';
import { ModeToggle } from './components/theme/mode-toggle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simbah Digital - Solusi Digital Modern untuk Bisnis Anda',
  description: 'Transformasi digital untuk bisnis Anda dengan teknologi modern seperti Next.js, Laravel, React Native, dan Flutter. Konsultasi gratis untuk solusi digital terbaik.',
  keywords: ['web development', 'aplikasi mobile', 'transformasi digital', 'next.js', 'laravel', 'react native', 'flutter'],
  authors: [{ name: 'Simbah Digital' }],
  creator: 'Simbah Digital',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://simbah.digital',
    title: 'Simbah Digital - Solusi Digital Modern untuk Bisnis Anda',
    description: 'Transformasi digital untuk bisnis Anda dengan teknologi modern seperti Next.js, Laravel, React Native, dan Flutter.',
    siteName: 'Simbah Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simbah Digital - Solusi Digital Modern untuk Bisnis Anda',
    description: 'Transformasi digital untuk bisnis Anda dengan teknologi modern.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
