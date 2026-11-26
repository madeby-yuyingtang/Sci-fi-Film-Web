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

export const metadata: Metadata = {
  title: "FUTURE CIVILIZATION",
  description:
    "A research-led interdisciplinary workshop exploring how generative AI can support science fiction storytelling, filmmaking, and scientific inquiry. Create the Future. Tell the Story.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable} ${hero.variable}`}>
      <body>{children}</body>
    </html>
  );
}
