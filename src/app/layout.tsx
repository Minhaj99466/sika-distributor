import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SikaPartner Pro | Authorized Sika Distributor",
    template: "%s | SikaPartner Pro",
  },
  description:
    "Authorized Sika distributor and partner offering premium adhesives, flooring, roofing, and waterproofing solutions. Trusted quality backed by Sika's global technology.",
  keywords: [
    "Sika distributor",
    "authorized Sika partner",
    "Sika adhesives",
    "Sika flooring",
    "Sika roofing",
    "Sika waterproofing",
    "construction chemicals",
    "building materials",
    "industrial adhesives",
    "waterproofing solutions",
  ],
  authors: [{ name: "SikaPartner Pro" }],
  creator: "SikaPartner Pro",
  publisher: "SikaPartner Pro",
  metadataBase: new URL("https://www.sikapartnerpro.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sikapartnerpro.com",
    siteName: "SikaPartner Pro",
    title: "SikaPartner Pro | Authorized Sika Distributor",
    description:
      "Authorized Sika distributor and partner offering premium adhesives, flooring, roofing, and waterproofing solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SikaPartner Pro - Authorized Sika Distributor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SikaPartner Pro | Authorized Sika Distributor",
    description:
      "Authorized Sika distributor offering premium construction chemical solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SikaPartner Pro",
  description:
    "Authorized Sika distributor and partner offering premium adhesives, flooring, roofing, and waterproofing solutions.",
  url: "https://www.sikapartnerpro.com",
  telephone: "+1-800-SIKA-PRO",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Industrial Boulevard",
    addressLocality: "Your City",
    addressRegion: "State",
    postalCode: "00000",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0,
    longitude: 0,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://www.sika.com"],
  brand: {
    "@type": "Brand",
    name: "Sika",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://www.sikapartnerpro.com" />
        <meta name="theme-color" content="#FFC510" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
