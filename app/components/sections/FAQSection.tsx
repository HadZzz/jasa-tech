'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Berapa harga jasa pembuatan website di Sukoharjo?",
    answer: "Harga jasa pembuatan website di Sukoharjo mulai dari 200rb untuk website company profile sederhana. Untuk website toko online mulai 500rb, dan landing page mulai 300rb. Harga dapat disesuaikan dengan kebutuhan dan fitur yang diinginkan.",
    keywords: "harga jasa pembuatan website sukoharjo"
  },
  {
    question: "Berapa lama proses pembuatan website di Sukoharjo?",
    answer: "Proses pembuatan website di Sukoharjo biasanya memakan waktu 3-14 hari kerja tergantung kompleksitas. Website company profile 3-7 hari, toko online 7-14 hari, dan landing page 2-5 hari kerja.",
    keywords: "lama pembuatan website sukoharjo"
  },
  {
    question: "Apakah jasa pembuatan website Sukoharjo include domain dan hosting?",
    answer: "Ya, semua paket jasa pembuatan website kami sudah include domain .com gratis selama 1 tahun dan hosting gratis 1 tahun. Setelah itu bisa diperpanjang dengan biaya terjangkau.",
    keywords: "jasa website sukoharjo include hosting"
  },
  {
    question: "Apakah website yang dibuat SEO friendly untuk bisnis Sukoharjo?",
    answer: "Tentu! Semua website yang kami buat sudah SEO friendly dengan optimasi khusus untuk bisnis lokal Sukoharjo. Termasuk local SEO, Google My Business setup, dan keyword optimization.",
    keywords: "website seo friendly sukoharjo"
  },
  {
    question: "Bisakah website di-update sendiri setelah selesai?",
    answer: "Ya, kami akan memberikan training cara update content, foto produk, dan informasi bisnis. Website dibuat dengan CMS yang user-friendly sehingga mudah dikelola sendiri.",
    keywords: "update website sendiri sukoharjo"
  },
  {
    question: "Apakah ada garansi untuk jasa pembuatan website Sukoharjo?",
    answer: "Ya, kami memberikan garansi revisi gratis sampai puas, garansi bug fixing 3 bulan, dan support teknis selama 1 tahun. Kepuasan klien adalah prioritas utama kami.",
    keywords: "garansi website sukoharjo"
  },
  {
    question: "Jasa pembuatan website mana yang cocok untuk UMKM Sukoharjo?",
    answer: "Untuk UMKM Sukoharjo, kami merekomendasikan paket website company profile atau katalog produk mulai 200rb. Sudah include fitur WhatsApp integration, SEO local, dan mobile responsive.",
    keywords: "website umkm sukoharjo"
  },
  {
    question: "Apakah melayani pembuatan website toko online di Sukoharjo?",
    answer: "Ya, kami spesialis pembuatan website toko online di Sukoharjo dengan fitur lengkap: payment gateway, manajemen produk, sistem order, dan integrasi WhatsApp untuk kemudahan UMKM.",
    keywords: "website toko online sukoharjo"
  },
  {
    question: "Bagaimana cara konsultasi jasa pembuatan website Sukoharjo?",
    answer: "Konsultasi sangat mudah! Bisa via WhatsApp di 085876120167, email, atau datang langsung ke kantor kami di Karangasem, Bulu, Sukoharjo. Konsultasi gratis dan tanpa komitmen.",
    keywords: "konsultasi website sukoharjo"
  },
  {
    question: "Apakah web developer Sukoharjo bisa handle project besar?",
    answer: "Tentu! Tim web developer kami berpengalaman menangani project dari website sederhana hingga sistem enterprise. Dengan 5+ tahun pengalaman dan 100+ project selesai.",
    keywords: "web developer sukoharjo project besar"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FAQ Jasa Pembuatan Website Sukoharjo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pertanyaan yang sering ditanyakan tentang jasa pembuatan website di Sukoharjo. 
            Tidak menemukan jawaban? Hubungi kami untuk konsultasi gratis!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="border border-primary/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-primary/5 hover:bg-primary/10 transition-colors flex items-center justify-between"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-background border-t border-primary/10"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Masih Ada Pertanyaan Lain?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tim ahli kami siap membantu menjawab semua pertanyaan Anda tentang 
              jasa pembuatan website di Sukoharjo. Konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285876120167?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20jasa%20pembuatan%20website%20di%20Sukoharjo"
                className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya via WhatsApp
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}