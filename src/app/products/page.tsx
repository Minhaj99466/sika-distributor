import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sika Products | Adhesive, Flooring, Roofing & Waterproofing",
  description:
    "Explore our complete range of Sika products — adhesives, flooring systems, roofing membranes, and waterproofing solutions. All products supplied as an authorized Sika distributor.",
  alternates: {
    canonical: "https://www.sikapartnerpro.com/products",
  },
};

const categories = [
  {
    title: "Adhesive Solutions",
    slug: "adhesive",
    description:
      "High-performance Sika adhesives and sealants for structural bonding, elastic joints, and specialty applications across construction and industry.",
    icon: "🔗",
    highlight: "#FFC510",
    products: [
      "Sikaflex® Elastic Adhesives",
      "SikaBond® Construction Adhesives",
      "Sika® Epoxy Adhesives",
      "Sikasil® Silicone Sealants",
      "SikaForce® Structural Adhesives",
    ],
  },
  {
    title: "Flooring Systems",
    slug: "flooring",
    description:
      "Complete Sika flooring solutions from surface preparation to decorative finishes — self-leveling screeds, resin flooring, and heavy-duty industrial systems.",
    icon: "🏗️",
    highlight: "#D50000",
    products: [
      "Sikafloor® Self-Leveling Screeds",
      "Sikafloor® Epoxy Coatings",
      "Sikafloor® Polyurethane Systems",
      "Sikafloor® Decorative Floors",
      "Sikafloor® Primers & Sealers",
    ],
  },
  {
    title: "Roofing Solutions",
    slug: "roofing",
    description:
      "Durable Sika roofing systems for flat, pitched, and green roofs — including single-ply membranes, liquid waterproofing, and bituminous solutions.",
    icon: "🏠",
    highlight: "#2d7d2d",
    products: [
      "Sika® Sarnafil Membranes",
      "SikaRoof® Liquid Systems",
      "Sika® Bituminous Sheets",
      "SikaRoof® MTC Coating",
      "Sika® Roof Fasteners & Accessories",
    ],
  },
  {
    title: "Waterproofing Systems",
    slug: "waterproofing",
    description:
      "Comprehensive Sika waterproofing solutions for foundations, basements, tunnels, bridges, water tanks, and all water-retaining structures.",
    icon: "💧",
    highlight: "#0066CC",
    products: [
      "Sika® Crystalline Waterproofing",
      "SikaTop® Cementitious Coatings",
      "Sika® Injection Systems",
      "Sikaplan® Waterproofing Membranes",
      "SikaDur® Epoxy Waterproofing",
    ],
  },
];

export default function ProductsPage() {
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
              <li className="text-red-300">/</li>
              <li className="text-white font-medium">Products</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">
            Sika <span style={{ color: "#D50000" }}>Product Range</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl">
            We supply the complete Sika portfolio across four major product categories —
            all backed by Sika&apos;s global quality and our local technical expertise.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#D50000", margin: "0 auto 1.5rem" }} />
            <h2 className="text-3xl font-black mb-3" style={{ color: "#1a1a1a" }}>
              Product <span style={{ color: "#FFC510" }}>Categories</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Select a category to explore the full range of Sika solutions available through our distribution network.
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((cat, index) => (
              <article
                key={cat.slug}
                className="grid md:grid-cols-5 gap-0 border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Icon/Title side */}
                <div
                  className={`md:col-span-2 p-10 flex flex-col justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}
                  style={{ backgroundColor: cat.highlight, color: "white" }}
                >
                  <span className="text-5xl mb-4 block">{cat.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-black mb-3 text-white">{cat.title}</h2>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">{cat.description}</p>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 bg-white hover:bg-gray-100 transition-colors w-fit"
                    style={{ color: cat.highlight }}
                  >
                    Explore {cat.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Products list side */}
                <div
                  className={`md:col-span-3 p-10 bg-gray-50 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <h3 className="font-bold text-gray-900 mb-5 text-lg">Featured Products</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.products.map((product) => (
                      <div
                        key={product}
                        className="flex items-center gap-3 bg-white p-3.5 border border-gray-200 hover:border-red-300 transition-colors"
                      >
                        <span
                          className="w-2 h-2 flex-shrink-0"
                          style={{ backgroundColor: cat.highlight }}
                        />
                        <span className="text-sm text-gray-800 font-medium">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sika */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: "#1a1a1a" }}>
            Why <span style={{ color: "#FFC510" }}>Sika Products?</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Sika has been at the forefront of construction chemistry for over 110 years.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🌍", label: "100+ Countries", desc: "Global presence" },
              { icon: "🔬", label: "100+ Years", desc: "R&D excellence" },
              { icon: "✓", label: "ISO Certified", desc: "Quality guaranteed" },
              { icon: "🏗️", label: "500,000+ Projects", desc: "Worldwide delivered" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 text-center shadow-sm">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <div className="font-bold text-gray-900">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FFC510" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Need Help Choosing the Right Product?</h2>
          <p className="text-gray-700 mb-8">
            Our technical team is ready to help you specify the right Sika solution for your project.
          </p>
          <Link
            href="/contact"
            className="inline-block font-bold px-10 py-4 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#D50000", color: "white" }}
          >
            Talk to Our Experts
          </Link>
        </div>
      </section>
    </>
  );
}
