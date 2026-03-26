import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "From MPLS With Love",
    template: "%s | From MPLS With Love",
  },
  description:
    "The most in-depth guide to every neighborhood in Minneapolis. Honest guides, interactive maps, and neighborhood sign art.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "From MPLS With Love",
    title: "From MPLS With Love",
    description:
      "The most in-depth guide to every neighborhood in Minneapolis. Honest guides, interactive maps, and neighborhood sign art.",
  },
  twitter: {
    card: "summary_large_image",
    title: "From MPLS With Love",
    description:
      "The most in-depth guide to every neighborhood in Minneapolis. Honest guides, interactive maps, and neighborhood sign art.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "From MPLS With Love",
              url: BASE_URL,
              description:
                "The most in-depth guide to every neighborhood in Minneapolis.",
            }),
          }}
        />
      </body>
    </html>
  );
}
