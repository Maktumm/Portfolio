import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/smoothscrollprovider";
import CustomCursor from "@/components/CustomCursor";

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
  title: "MAKTUM®",
  description:
    "MAKTUM — independent web developer creating expressive, performance-driven digital experiences.",

    
  openGraph: {
    title: "MAKTUM®",
    description:
      "MAKTUM — independent web developer creating expressive, performance-driven digital experiences.",
    siteName: "MAKTUM®",
    images: [
      {
        url: "/app/metadata.png",
        width: 1200,
        height: 630,
        alt: "MAKTUM®",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MAKTUM®",
    description:
      "MAKTUM — independent web developer creating expressive, performance-driven digital experiences.",
    images: ["/app/metadata.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interDisplay.variable}`}
    >
      <body>
        <CustomCursor />

        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}