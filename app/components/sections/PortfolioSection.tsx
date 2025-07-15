"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Data portfolio
const portfolioItems = [
  {
    id: 1,
    title: "Website Company Profile PT. ABC",
    category: "Company Profile",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=60",
    description: "Website company profile profesional dengan desain modern dan responsive untuk meningkatkan kredibilitas bisnis."
  },
  {
    id: 2,
    title: "Toko Online XYZ Shop",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&auto=format&fit=crop&q=60",
    description: "Platform e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin yang user-friendly."
  },
  {
    id: 3,
    title: "Landing Page Event DEF",
    category: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
    description: "Landing page event dengan desain menarik dan call-to-action yang efektif untuk meningkatkan konversi pendaftaran."
  },
];

interface PortfolioItemType {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies?: string[];
  features?: string[];
  client?: string;
  duration?: string;
  link?: string;
}

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: PortfolioItemType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Portfolio Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Beberapa proyek website yang telah kami kerjakan untuk klien di
            Sukoharjo dan sekitarnya.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {item.description}
                </p>
                <button
                  onClick={() => openModal(item)}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Lihat Detail
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl bg-background rounded-2xl shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">
                      {selectedItem.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {selectedItem.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          Teknologi
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          Fitur Utama
                        </h4>
                        <ul className="space-y-2">
                          {selectedItem.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <svg
                                className="w-4 h-4 mr-2 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-1">Klien</h4>
                          <p className="text-sm text-muted-foreground">
                            {selectedItem.client}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1">
                            Durasi Pengerjaan
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {selectedItem.duration}
                          </p>
                        </div>
                      </div>

                      <a
                        href={selectedItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        Kunjungi Website
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
