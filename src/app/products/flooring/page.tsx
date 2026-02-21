import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sika Flooring Systems | Sikafloor Self-Leveling & Epoxy",
  description:
    "Complete Sika flooring systems — self-leveling screeds, epoxy coatings, polyurethane floors, and decorative finishes. Authorized Sika distributor with expert technical support.",
  keywords: ["Sika flooring", "Sikafloor", "self-leveling screed", "epoxy flooring", "industrial floor", "decorative flooring"],
  alternates: {
    canonical: "https://www.sikapartnerpro.com/products/flooring",
  },
};

const products = [
  {
    name: "Sikafloor® Level-30",
    category: "Self-Leveling Screed",
    desc: "Fast-setting, pumpable self-leveling screed. Ideal for rapid floor leveling before final flooring installation. Foot-traffic ready in 4 hours.",
    applications: ["Floor leveling", "Overlay base", "Commercial flooring", "Residential prep"],
    badge: "Fast Curing",
    color: "#D50000",
  },
  {
    name: "Sikafloor® 264",
    category: "Epoxy Coating System",
    desc: "2-part, solvent-free, pigmented, self-smoothing epoxy resin floor coating. Seamless, hygienic, and highly chemical resistant.",
    applications: ["Food industry", "Industrial floors", "Warehouses", "Clean rooms"],
    badge: "Best Seller",
    color: "#D50000",
  },
  {
    name: "Sikafloor® 400 N Elastic",
    category: "Polyurethane Floor Coating",
    desc: "2-part, flexible polyurethane floor coating for areas requiring crack-bridging ability. UV-stable for indoor and outdoor use.",
    applications: ["Car parks", "Balconies", "Walkways", "Outdoor areas"],
    badge: null,
    color: "#D50000",
  },
  {
    name: "Sikafloor® Chapdur",
    category: "Dry Shake Hardener",
    desc: "Surface hardener for fresh concrete floors. Creates an extremely hard, wear-resistant, dust-proof surface.",
    applications: ["Industrial concrete", "Warehouses", "Factory floors", "Logistics hubs"],
    badge: "Durable",
    color: "#D50000",
  },
  {
    name: "Sikafloor® ProSeal",
    category: "Surface Sealer",
    desc: "Penetrating sealer and densifier for concrete floor surfaces. Improves surface hardness and significantly reduces dusting.",
    applications: ["Concrete sealing", "Warehouse floors", "Hardening", "Dust proofing"],
    badge: null,
    color: "#D50000",
  },
  {
    name: "Sikafloor® MultiDur ES-24",
    category: "Epoxy Mortar System",
    desc: "3-part, broadcast-applied epoxy mortar floor system. Provides extreme mechanical and chemical resistance for heavily loaded areas.",
    applications: ["Heavy industry", "Chemical plants", "Food processing", "Pharmaceutical"],
    badge: "Heavy Duty",
    color: "#D50000",
  },
];

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
        className="py-20 md:py-28 relative"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.name}
                className="bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all group"
              >
                <div className="h-2 w-full" style={{ backgroundColor: "#D50000" }} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-black text-gray-900 text-lg group-hover:text-yellow-700 transition-colors">
                      {product.name}
                    </h3>
                    {product.badge && (
                      <span className="px-2 py-0.5 text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: "#FFC510" }}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3 text-yellow-700">
                    {product.category}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Applications</div>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <span key={app} className="px-2.5 py-1 text-xs font-medium bg-yellow-50 text-yellow-800">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="mt-5 flex items-center gap-1 text-sm font-semibold text-yellow-700 hover:gap-2 transition-all">
                    Request Quote →
                  </Link>
                </div>
              </article>
            ))}
          </div>
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
