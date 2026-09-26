import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.virtuwebz.com"),
  applicationName: "VirtuWebz",
  title: {
    default: "VirtuWebz — Websites, Apps & Digital Experiences",
    template: "%s — VirtuWebz",
  },
  description: "VirtuWebz is a digital studio creating distinctive websites, full-stack applications, brand identities and digital experiences for ambitious businesses.",
  keywords: ["website design", "web development", "full-stack development", "app design", "digital studio", "brand identity", "digital experiences"],
  authors: [{ name: "VirtuWebz", url: "https://www.virtuwebz.com" }],
  creator: "VirtuWebz",
  publisher: "VirtuWebz",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: "VirtuWebz — Digital work built to move businesses forward",
    description: "Websites, apps, brands and digital experiences created with clarity, craft and purpose.",
    url: "/",
    siteName: "VirtuWebz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VirtuWebz — Websites, Apps & Digital Experiences",
    description: "Websites, apps, brands and digital experiences created with clarity, craft and purpose.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.virtuwebz.com/#organization",
        name: "VirtuWebz",
        url: "https://www.virtuwebz.com",
        logo: "https://www.virtuwebz.com/icon.svg",
        email: "hello@virtuwebz.com",
        description: "Digital studio specializing in websites, full-stack applications, brand identities and digital experiences.",
        areaServed: "Worldwide",
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@virtuwebz.com",
          contactType: "sales and project enquiries",
          availableLanguage: ["English"],
        },
        sameAs: ["https://github.com/Absi0"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.virtuwebz.com/#website",
        url: "https://www.virtuwebz.com",
        name: "VirtuWebz",
        publisher: { "@id": "https://www.virtuwebz.com/#organization" },
        inLanguage: "en",
      },
    ],
  };

  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/></body></html>;
}
