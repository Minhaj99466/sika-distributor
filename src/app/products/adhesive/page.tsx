import type { Metadata } from "next";
import Link from "next/link";
import ProductsGrid from "../ProductsGrid";

export const metadata: Metadata = {
  title: "Sika Adhesive Solutions | SikaFlex, SikaBond & More",
  description:
    "Explore our full range of Sika adhesive solutions including elastic adhesives, structural adhesives, silicone sealants, and epoxy systems. Authorized Sika distributor.",
  keywords: ["Sika adhesive", "Sikaflex", "SikaBond", "structural adhesive", "elastic sealant", "construction adhesive"],
  alternates: {
    canonical: "https://www.sikapartnerpro.com/products/adhesive",
  },
};

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
        className="py-10 md:py-8 relative"
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

          <ProductsGrid
            category="adhesive"
            accentColor="#FFC510"
            badgeColor="#FFC510"
            tagBg="#FFF5F5"
            tagText="#D50000"
            hoverBorderClass="hover:border-red-500"
            titleHoverClass="group-hover:text-red-700"
            linkColor="#D50000"
          />
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
