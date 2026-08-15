import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import './globals.css'
import SmoothScrollProvider from "@/components/smoothscrollprovider";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interDisplay = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-inter-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akihiko® - Minimal Portfolio & Agency",
  description:
    "Akihiko, a minimal portfolio site, built for art direction, branding, strategy, and web design work based in Tokyo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable}`}>
      <SmoothScrollProvider>
      <body>{children}</body>
      </SmoothScrollProvider>
    </html>
  );
}
