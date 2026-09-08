export type Project = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  sector: string;
};

export const projects: Project[] = [
  {
    name: "Eri Meeting Point",
    description: "A multilingual publishing platform with a focused editorial workspace and a clear experience for readers.",
    tags: ["Platform", "Editorial UX", "Development"],
    image: "/projects/mockups/eri-editor.jpeg",
    year: "2026",
    sector: "Media & publishing",
  },
  {
    name: "Akaltun Real Estate",
    description: "A refined property experience that makes discovering, comparing and exploring spaces feel effortless.",
    tags: ["Real estate", "Web design", "Development"],
    image: "/projects/mockups/akaltun-real-estate.png",
    year: "2026",
    sector: "Property",
  },
  {
    name: "Akaltun Furniture",
    description: "A visual digital showroom designed to let the collection, materials and craftsmanship lead the experience.",
    tags: ["E-commerce", "Creative direction", "Web design"],
    image: "/projects/mockups/akaltun-furniture.png",
    year: "2026",
    sector: "Furniture & retail",
  },
  {
    name: "L’Atelier Design",
    description: "An elegant portfolio and service website built around interiors, atmosphere and confident editorial typography.",
    tags: ["Portfolio", "Brand experience", "Web design"],
    image: "/projects/mockups/latelier.png",
    year: "2025",
    sector: "Interior design",
  },
  {
    name: "Groupe Lachapelle",
    description: "A trustworthy, practical digital presence that turns specialist expertise into a clear customer journey.",
    tags: ["Construction", "Website", "Content structure"],
    image: "/projects/mockups/groupe-lachapelle.png",
    year: "2025",
    sector: "Construction",
  },
  {
    name: "Lipman Wizzifi",
    description: "A bold music-led experience that gives the artist’s identity, releases and energy a distinctive digital stage.",
    tags: ["Music", "Digital experience", "Creative direction"],
    image: "/projects/mockups/wizzifi.png",
    year: "2025",
    sector: "Music & culture",
  },
  {
    name: "Beauty by Rhia",
    description: "A warm, polished booking experience created to showcase services and convert attention into appointments.",
    tags: ["Beauty", "Booking experience", "Web design"],
    image: "/projects/mockups/beautybyrhia.png",
    year: "2025",
    sector: "Beauty & wellness",
  },
];

