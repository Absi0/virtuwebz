import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "VirtuWebz — Websites, Apps & Digital Experiences",
  description: "VirtuWebz creates distinctive websites, applications, brand identities and digital experiences for ambitious businesses.",
  keywords: ["website design", "web development", "app design", "digital studio", "brand identity", "digital experiences"],
  openGraph: { title: "VirtuWebz — Digital work built to move businesses forward", description: "Websites, apps, brands and digital experiences created with clarity, craft and purpose.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
