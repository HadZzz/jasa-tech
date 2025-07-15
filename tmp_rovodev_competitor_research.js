// Simulasi data kompetitor berdasarkan riset pasar Sukoharjo
const competitorData = {
  "jasa pembuatan website sukoharjo": {
    topCompetitors: [
      {
        name: "WebSolo.id",
        domain: "websolo.id",
        estimatedRanking: 3,
        strengths: ["Local presence", "Portfolio lokal", "Harga kompetitif"],
        weaknesses: ["SEO kurang optimal", "Content terbatas"],
        pricing: "Rp 3-8 juta"
      },
      {
        name: "JogjaWeb",
        domain: "jogjaweb.com", 
        estimatedRanking: 5,
        strengths: ["Brand awareness", "Portfolio besar"],
        weaknesses: ["Tidak fokus Sukoharjo", "Harga mahal"],
        pricing: "Rp 5-15 juta"
      },
      {
        name: "Freelancer Lokal",
        domain: "various",
        estimatedRanking: 7,
        strengths: ["Harga murah", "Personal touch"],
        weaknesses: ["Tidak profesional", "SEO lemah"],
        pricing: "Rp 1-3 juta"
      }
    ]
  },
  
  "website company profile sukoharjo": {
    competition: "Medium",
    opportunities: [
      "Keyword belum dioptimalkan maksimal",
      "Content gap untuk local business",
      "Technical SEO masih lemah"
    ]
  },
  
  "website toko online sukoharjo": {
    competition: "Low",
    opportunities: [
      "Sangat sedikit kompetitor lokal",
      "UMKM butuh solusi e-commerce",
      "Keyword masih blue ocean"
    ]
  }
};

console.log("Competitor Analysis Data:", JSON.stringify(competitorData, null, 2));