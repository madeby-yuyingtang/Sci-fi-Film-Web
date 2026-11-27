import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono, Outfit } from "next/font/google";
import "./globals.css";

const hero = Outfit({ subsets: ["latin"], weight: ["700"], variable: "--font-hero", display: "swap" });

const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteTitle = "FUTURE CIVILIZATION";
const siteDescription = "A Global Community of Creators Exploring Science × Art × AI";
const shareTitle = `${siteTitle}: ${siteDescription}`;
const shareImage = {
  url: "/images/future-civilization-share-v3.png",
  width: 1200,
  height: 630,
  alt: "FUTURE CIVILIZATION — A Global Community of Creators Exploring Science × Art × AI",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-creative-study.click"),
  title: shareTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-creative-study.click/",
    siteName: siteTitle,
    title: shareTitle,
    description: siteDescription,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: siteDescription,
    images: [shareImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable} ${hero.variable}`}>
      <body>{children}</body>
    </html>
  );
}
