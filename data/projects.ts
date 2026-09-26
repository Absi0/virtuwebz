export type Project = {
  name: string;
  description: string;
  tags: string[];
  technology: string[];
  image: string;
  url?: string;
  year: string;
  sector: string;
};

export const projects: Project[] = [
  {
    name: "Eri Meeting Point",
    description: "A full-stack multilingual publishing platform that brings editorial workflows, content management and an engaging reader experience into one scalable digital ecosystem.",
    tags: ["Full-stack platform", "Editorial UX", "Development"],
    technology: ["Next.js", "TypeScript", "Supabase"],
    image: "/projects/erimeetingpoint.png",
    url: "https://erimeetingpoint.com",
    year: "2026",
    sector: "Media & publishing",
  },
  {
    name: "Egypt Visa Entry",
    description: "A clear, reassuring visa application experience that helps travellers apply online and track every step of their journey.",
    tags: ["Travel", "Product design", "Development"],
    technology: ["Next.js", "TypeScript", "Secure API"],
    image: "/projects/egypt visa.png",
    url: "https://egyptentry.online",
    year: "2026",
    sector: "Travel & immigration",
  },
  {
    name: "NH Fly",
    description: "A fast, dependable flight-booking platform built for travel agents working across desktop and mobile.",
    tags: ["Travel platform", "UX / UI", "Development"],
    technology: ["Next.js", "TypeScript", "Booking API"],
    image: "/projects/NHfly.png",
    url: "https://fly.newhorizonsgulf.com",
    year: "2025",
    sector: "Travel technology",
  },
  {
    name: "MapsLio",
    description: "An AI-powered platform that turns Google Maps business listings into polished, ready-to-publish websites in minutes.",
    tags: ["SaaS platform", "AI product", "Web development"],
    technology: ["Next.js", "TypeScript", "Google Maps API"],
    image: "/projects/Screenshot map.png",
    url: "mailto:support@mapslio.com",
    year: "2025",
    sector: "SaaS & local business",
  },
  {
    name: "Akaltun Real Estate",
    description: "A refined property experience that makes discovering, comparing and exploring spaces feel effortless.",
    tags: ["Real estate", "Web design", "Development"],
    technology: ["Next.js", "TypeScript", "Headless CMS"],
    image: "/projects/mockups/akaltun-real-estate.png",
    url: "https://akaltun.com",
    year: "2025",
    sector: "Property",
  },
  {
    name: "Akaltun Furniture",
    description: "A visual digital showroom designed to let the collection, materials and craftsmanship lead the experience.",
    tags: ["E-commerce", "Creative direction", "Web design"],
    technology: ["Next.js", "TypeScript", "Commerce API"],
    image: "/projects/mockups/akaltun-furniture.png",
    year: "2026",
    sector: "Furniture & retail",
  },
  {
    name: "L’Atelier Design",
    description: "An elegant service website built around interiors, atmosphere and confident editorial typography.",
    tags: ["Showcase website", "Brand experience", "Web design"],
    technology: ["Next.js", "TypeScript", "CMS"],
    image: "/projects/mockups/latelier.png",
    year: "2022",
    sector: "Interior design",
  },
  {
    name: "Groupe Lachapelle",
    description: "A trustworthy, practical digital presence that turns specialist expertise into a clear customer journey.",
    tags: ["Construction", "Website", "Content structure"],
    technology: ["Next.js", "TypeScript", "CMS"],
    image: "/projects/mockups/groupe-lachapelle.png",
    year: "2022",
    sector: "Construction",
  },
  {
    name: "Lipman Wizzifi",
    description: "A bold music-led experience that gives the artist’s identity, releases and energy a distinctive digital stage.",
    tags: ["Music", "Digital experience", "Creative direction"],
    technology: ["Next.js", "TypeScript", "Motion"],
    image: "/projects/mockups/wizzifi.png",
    year: "2022",
    sector: "Music & culture",
  },
  {
    name: "Beauty by Rhia",
    description: "A warm, polished booking experience created to showcase services and convert attention into appointments.",
    tags: ["Beauty", "Booking experience", "Web design"],
    technology: ["Next.js", "TypeScript", "Booking API"],
    image: "/projects/mockups/beautybyrhia.png",
    year: "2022",
    sector: "Beauty & wellness",
  },
];
