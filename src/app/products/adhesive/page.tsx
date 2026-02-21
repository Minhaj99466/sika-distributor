import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sika Adhesive Solutions | SikaFlex, SikaBond & More",
  description:
    "Explore our full range of Sika adhesive solutions including elastic adhesives, structural adhesives, silicone sealants, and epoxy systems. Authorized Sika distributor.",
  keywords: ["Sika adhesive", "Sikaflex", "SikaBond", "structural adhesive", "elastic sealant", "construction adhesive"],
  alternates: {
    canonical: "https://www.sikapartnerpro.com/products/adhesive",
  },
};

const products = [
  {
    name: "Sikaflex® PRO-3",
    category: "Elastic Adhesive & Sealant",
    desc: "1-part polyurethane elastic adhesive and sealant. Ideal for floor and wall joints in demanding environments. Foot-traffic resistant when cured.",
    applications: ["Floor joints", "Wall joints", "Sanitary areas", "Façades"],
    badge: "Best Seller",
  },
  {
    name: "SikaBond® T54",
    category: "Elastic Bonding Adhesive",
    desc: "1-part, moisture-curing elastic bonding adhesive for bonding parquet, hardwood, and engineered wood flooring to various substrates.",
    applications: ["Hardwood bonding", "Parquet floors", "Sports floors", "Subfloor prep"],
    badge: "Popular",
  },
  {
    name: "Sikadur® 32",
    category: "Epoxy Adhesive",
    desc: "2-part, thixotropic, epoxy resin bonding agent for structural bonding of concrete, masonry, and cementitious overlays to existing substrates.",
    applications: ["Concrete repair", "Structural bonding", "New/old concrete", "Overlay systems"],
    badge: null,
  },
  {
    name: "Sikasil® C",
    category: "Silicone Sealant",
    desc: "1-part, neutral-curing silicone sealant for construction joint sealing. Excellent adhesion to glass, aluminium, and most building materials.",
    applications: ["Glass façades", "Window sealing", "Curtain walling", "Sanitary joints"],
    badge: null,
  },
  {
    name: "SikaForce® 7710",
    category: "Structural Adhesive",
    desc: "2-part polyurethane structural adhesive for load-bearing bonded connections. Replaces traditional mechanical fasteners with high strength bonds.",
    applications: ["Structural glazing", "Façade panels", "Composite materials", "Load-bearing joints"],
    badge: "Technical",
  },
  {
    name: "Sikaflex® 221",
    category: "Multi-Purpose Sealant",
    desc: "1-part polyurethane adhesive and sealant designed for interior and exterior use on metal, painted surfaces, wood, and rigid plastics.",
    applications: ["General sealing", "Interior/exterior", "Transportation", "Marine"],
    badge: null,
  },
];

const applications = [
  { icon: "🏗️", name: "Concrete & Masonry" },
  { icon: "🪟", name: "Glass & Glazing" },
  { icon: "🌳", name: "Timber & Wood" },
  { icon: "⚙️", name: "Metal & Steel" },
  { icon: "🏠", name: "Façades" },
  { icon: "🚗", name: "Transportation" },
];

export default function AdhesivePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #CC8800 0%, #7A4400 100%)" }}
        className="py-20 md:py-28 relative"
      >
        <div style={{ backgroundColor: "#D50000", height: "4px" }} className="absolute top-0 left-0 w-full" />
        <div className="max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-red-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Adhesive</li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-5xl">🔗</span>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              Sika <span style={{ color: "#D50000" }}>Adhesive Solutions</span>
            </h1>
          </div>
          <p className="text-xl text-amber-100 max-w-2xl leading-relaxed">
            High-performance Sika bonding and sealing systems for every substrate and application.
            From elastic sealants to structural adhesives.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#D50000", margin: "0 auto 1.5rem" }} />
            <h2 className="text-3xl font-black mb-3" style={{ color: "#1a1a1a" }}>
              Available <span style={{ color: "#FFC510" }}>Adhesive Products</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We supply the full Sika adhesive portfolio. Contact us for specific product data sheets, pricing, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.name}
                className="bg-white border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all group"
              >
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: "#FFC510" }}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-black text-gray-900 text-lg group-hover:text-red-700 transition-colors">
                      {product.name}
                    </h3>
                    {product.badge && (
                      <span
                        className="px-2 py-0.5 text-xs font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: product.badge === "Technical" ? "#1a1a1a" : "#FFC510" }}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#D50000", filter: "brightness(0.8)" }}>
                    {product.category}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Key Applications</div>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <span
                          key={app}
                          className="px-2.5 py-1 text-xs font-medium"
                          style={{ backgroundColor: "#FFF5F5", color: "#D50000" }}
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-5 flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                    style={{ color: "#FFC510" }}
                  >
                    Request Quote →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-10" style={{ color: "#1a1a1a" }}>
            Suitable for All <span style={{ color: "#FFC510" }}>Substrates</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {applications.map((app) => (
              <div
                key={app.name}
                className="bg-white px-6 py-4 shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <span className="text-3xl block mb-2">{app.icon}</span>
                <span className="text-sm font-semibold text-gray-800">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FFC510" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Need the Right Adhesive for Your Project?</h2>
          <p className="text-gray-700 mb-8">Our experts will help you select the perfect Sika adhesive solution.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="font-bold px-8 py-4 hover:opacity-90" style={{ backgroundColor: "#D50000", color: "white" }}>
              Get Technical Advice
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
