'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Star } from 'lucide-react';

const localInfo = {
  address: 'Karangasem, Bulu, Sukoharjo, Jawa Tengah, Indonesia',
  phone: '+62 858-7612-0167',
  whatsapp: '+62 858-7612-0167',
  email: 'hadzipamuji5@gmail.com',
  hours: 'Senin - Sabtu: 09:00 - 17:00',
  areas: [
    'Sukoharjo Kota',
    'Kartasura',
    'Grogol',
    'Baki',
    'Mojolaban',
    'Polokarto',
    'Bendosari',
    'Tawangsari'
  ]
};

const services = [
  'Jasa Pembuatan Website Company Profile Sukoharjo - Mulai 200rb',
  'Jasa Pembuatan Website Toko Online Sukoharjo - E-commerce Lengkap', 
  'Jasa Pembuatan Landing Page Sukoharjo - High Converting',
  'Jasa Pembuatan Website UMKM Sukoharjo - Paket Khusus',
  'Web Developer Sukoharjo Terpercaya - 5+ Tahun Pengalaman',
  'Website Murah Sukoharjo - Harga Terjangkau Kualitas Premium'
];

export default function LocalSEOSection() {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jasa Pembuatan Website Sukoharjo Murah & Terpercaya
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Melayani seluruh wilayah Sukoharjo, Solo, Kartasura dengan layanan pembuatan website profesional mulai 200rb. 
            Spesialis website UMKM, company profile, toko online. Gratis konsultasi & garansi revisi!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Hubungi Kami</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{localInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>{localInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>{localInfo.hours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-primary" />
                <span>Rating 4.9/5 dari 100+ klien puas</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4">Area Layanan Sukoharjo:</h4>
            <div className="grid grid-cols-2 gap-2">
              {localInfo.areas.map((area, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  • {area}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Layanan Website Kami</h3>
            
            <div className="space-y-3 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg border border-primary/10">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">🎯 Mengapa Pilih Kami?</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✅ Berpengalaman 5+ tahun di Sukoharjo</li>
                <li>✅ Harga terjangkau mulai Rp 200 ribu</li>
                <li>✅ Gratis konsultasi dan revisi</li>
                <li>✅ Website SEO friendly</li>
                <li>✅ Support 24/7</li>
                <li>✅ Garansi kepuasan 100%</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Siap Membuat Website untuk Bisnis Anda di Sukoharjo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Konsultasikan kebutuhan website Anda dengan tim ahli kami. 
              Gratis konsultasi dan penawaran terbaik khusus untuk bisnis di Sukoharjo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${localInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Halo, saya tertarik dengan jasa pembuatan website di Sukoharjo`}
                className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Sekarang
              </a>
              <a
                href="#kontak"
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