import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jawatechno - Jasa Pembuatan Website Sukoharjo',
    short_name: 'Jawatechno',
    description: 'Jasa pembuatan website profesional di Sukoharjo dengan harga terjangkau mulai 200rb',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}