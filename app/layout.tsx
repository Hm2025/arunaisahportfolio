import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isah Aruna — WordPress Developer | Elementor & Avada Builder | Front-End Developer",
  description:
    "5+ years building WordPress sites with Elementor, Bricks Builder, and Divi. Figma-to-pixel-perfect responsive pages, landing pages optimized for conversions, SEO & Core Web Vitals.",
  keywords: [
    "WordPress Developer",
    "Elementor",
    "Avada Builder",
    "Bricks Builder",
    "Divi",
    "Front-End Developer",
    "React.js",
    "SEO",
    "Core Web Vitals",
    "WooCommerce",
  ],
  authors: [{ name: "Isah Aruna" }],
  openGraph: {
    title: "Isah Aruna — WordPress Developer",
    description: "5+ years building WordPress sites with Elementor, Bricks Builder, and Divi.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
