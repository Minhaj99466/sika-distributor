import type { Metadata } from "next";
import Link from "next/link";
import ProductsGrid from "../ProductsGrid";

export const metadata: Metadata = {
  title: "Sika Flooring Systems | Sikafloor Self-Leveling & Epoxy",
  description:
    "Complete Sika flooring systems — self-leveling screeds, epoxy coatings, polyurethane floors, and decorative finishes. Authorized Sika distributor with expert technical support.",
  keywords: ["Sika flooring", "Sikafloor", "self-leveling screed", "epoxy flooring", "industrial floor", "decorative flooring"],
  alternates: {
    canonical: "https://www.sikapartnerpro.com/products/flooring",
  },
};

const flooringTypes = [
  {
    type: "Industrial Flooring",
    desc: "Chemical-resistant, heavy-load epoxy and polyurethane systems for factories and warehouses.",
    icon: "🏭",
  },
  {
    type: "Commercial Flooring",
    desc: "Elegant, seamless decorative floors for retail, hospitality, and office environments.",
    icon: "🏢",
  },
  {
    type: "Sports Flooring",
    desc: "Shock-absorbing, elastic systems for sports halls, gyms, and recreational facilities.",
    icon: "⚽",
  },
  {
    type: "Healthcare Flooring",
    desc: "Hygienic, seamless, antimicrobial floor systems for hospitals and clean rooms.",
    icon: "🏥",
  },
];

export default function FlooringPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #B8880A 0%, #7A5A00 100%)" }}
        className="py-10 md:py-8 relative"
      >
        <div style={{ backgroundColor: "#D50000", height: "4px" }} className="absolute top-0 left-0 w-full" />
        <div className="max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#FFE08A" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Flooring</li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-5xl">🏗️</span>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              Sika <span style={{ color: "#D50000" }}>Flooring Systems</span>
            </h1>
          </div>
          <p className="text-xl text-yellow-100 max-w-2xl leading-relaxed">
            From self-leveling screeds to decorative epoxy finishes — complete Sikafloor® systems
            for industrial, commercial, and residential applications.
          </p>
        </div>
      </section>

      {/* Flooring types */}
      <section className="py-14" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {flooringTypes.map((type) => (
              <div key={type.type} className="text-center p-5 border border-gray-700 hover:border-yellow-400 transition-colors">
                <span className="text-3xl block mb-3">{type.icon}</span>
                <div className="font-bold text-white mb-2 text-sm">{type.type}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{type.desc}</div>
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
              Sikafloor® <span style={{ color: "#FFC510" }}>Product Range</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We supply the complete Sikafloor product range. Request data sheets and pricing from our team.
            </p>
          </div>

          <ProductsGrid
            category="flooring"
            accentColor="#D50000"
            badgeColor="#FFC510"
            tagBg="#FEFCE8"
            tagText="#713F12"
            hoverBorderClass="hover:border-yellow-400"
            titleHoverClass="group-hover:text-yellow-700"
            linkColor="#713F12"
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FFC510" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Need a Flooring Solution?</h2>
          <p className="text-gray-700 mb-8">Our Sikafloor specialists will design the right system for your environment.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="font-bold px-8 py-4 hover:opacity-90" style={{ backgroundColor: "#D50000", color: "white" }}>
              Speak to an Expert
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
