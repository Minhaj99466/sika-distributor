import type { Metadata } from "next";
import Link from "next/link";
import ProductsGrid from "../ProductsGrid";

export const metadata: Metadata = {
  title: "Sika Roofing Solutions | Sarnafil Membranes & Liquid Systems",
  description:
    "Complete Sika roofing solutions including Sarnafil single-ply membranes, SikaRoof liquid waterproofing, and bituminous systems. Authorized Sika roofing distributor.",
  keywords: ["Sika roofing", "Sarnafil", "SikaRoof", "flat roof waterproofing", "liquid roofing", "single ply membrane"],
  alternates: {
    canonical: "https://www.sikapartnerpro.com/products/roofing",
  },
};

const roofTypes = [
  { type: "Flat Roofs", icon: "▬", desc: "Commercial & industrial flat roof systems" },
  { type: "Green Roofs", icon: "🌿", desc: "Root-resistant membranes for planted roofs" },
  { type: "Pitched Roofs", icon: "△", desc: "Liquid and sheet systems for sloped roofs" },
  { type: "Roof Repair", icon: "🔧", desc: "Refurbishment without full tear-off" },
];

export default function RoofingPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #1e5c1e 0%, #0f2f0f 100%)" }}
        className="py-10 md:py-8 relative"
      >
        <div style={{ backgroundColor: "#D50000", height: "4px" }} className="absolute top-0 left-0 w-full" />
        <div className="max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-green-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Roofing</li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-5xl">🏠</span>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              Sika <span style={{ color: "#D50000" }}>Roofing Solutions</span>
            </h1>
          </div>
          <p className="text-xl text-green-100 max-w-2xl leading-relaxed">
            Durable, reliable, and sustainable Sika roofing systems — single-ply membranes, liquid
            waterproofing, and bituminous solutions for every roof type.
          </p>
        </div>
      </section>

      {/* Roof types */}
      <section className="py-12" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roofTypes.map((type) => (
              <div key={type.type} className="text-center p-5 border border-gray-700 hover:border-green-500 transition-colors">
                <span className="text-3xl block mb-2 font-bold text-green-400">{type.icon}</span>
                <div className="font-bold text-white text-sm mb-1">{type.type}</div>
                <div className="text-gray-400 text-xs">{type.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#D50000", margin: "0 auto 1.5rem" }} />
            <h2 className="text-3xl font-black mb-3" style={{ color: "#1a1a1a" }}>
              Sika Roofing <span style={{ color: "#FFC510" }}>Product Range</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              All Sika roofing membranes and systems — contact our team for specs, pricing, and installation support.
            </p>
          </div>

          <ProductsGrid
            category="roofing"
            accentColor="#2d7d2d"
            badgeColor="#2d7d2d"
            tagBg="#F0FDF4"
            tagText="#166534"
            hoverBorderClass="hover:border-green-500"
            titleHoverClass="group-hover:text-green-700"
            linkColor="#166534"
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FFC510" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Planning a Roofing Project?</h2>
          <p className="text-gray-700 mb-8">Our Sika roofing specialists will help you select the ideal system for your roof type and budget.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="font-bold px-8 py-4 hover:opacity-90" style={{ backgroundColor: "#D50000", color: "white" }}>
              Get Expert Advice
            </Link>
            <Link href="/products" className="font-bold px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-700 transition-all">
              All Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
