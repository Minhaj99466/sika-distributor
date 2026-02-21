import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sika Waterproofing Systems | Crystalline, Membranes & Injection",
  description:
    "Complete Sika waterproofing solutions for basements, tunnels, bridges, water tanks and podiums. Crystalline, cementitious, membrane and injection systems. Authorized distributor.",
  keywords: ["Sika waterproofing", "Sika crystalline", "Sikaplan", "basement waterproofing", "waterproofing membrane", "injection waterproofing"],
  alternates: {
    canonical: "https://www.sikapartnerpro.com/products/waterproofing",
  },
};

const products = [
  {
    name: "Sika® WT-200 W",
    category: "Crystalline Waterproofing",
    desc: "Integral crystalline waterproofing admixture for concrete. Permanently seals capillary pores and micro-cracks even under hydrostatic pressure.",
    applications: ["Concrete waterproofing", "Water tanks", "Tunnels", "Foundations"],
    badge: "Best in Class",
  },
  {
    name: "SikaTop® Seal-107",
    category: "Cementitious Coating",
    desc: "2-part, flexible, polymer-modified cementitious waterproofing slurry. Applied by brush or spray to concrete and masonry surfaces.",
    applications: ["Basements", "Retaining walls", "Planters", "Water tanks"],
    badge: "Popular",
  },
  {
    name: "Sikaplan® G-12",
    category: "Sheet Waterproofing Membrane",
    desc: "High-performance HDPE sheet membrane for buried structures. Excellent chemical resistance and long-term durability.",
    applications: ["Underground structures", "Tunnels", "Basements", "Podiums"],
    badge: null,
  },
  {
    name: "Sika® Injection-451",
    category: "Injection Grout",
    desc: "Expanding polyurethane injection resin for stopping active water infiltration in joints, cracks, and cavities. Fast-expanding foam gel system.",
    applications: ["Active leaks", "Joint injection", "Crack repair", "Tunnel sealing"],
    badge: "Emergency Fix",
  },
  {
    name: "Sikagard® 701 W",
    category: "Concrete Surface Protector",
    desc: "Penetrating silane/siloxane impregnation that repels water and chlorides on above-ground concrete structures without changing appearance.",
    applications: ["Bridge decks", "Façades", "Parking structures", "Marine structures"],
    badge: null,
  },
  {
    name: "Sika® Waterbar B 20",
    category: "Waterstop System",
    desc: "PVC flexible waterstop designed for construction joints in water-retaining structures. Available in various profiles for different joint widths.",
    applications: ["Construction joints", "Expansion joints", "Reservoirs", "Tunnels"],
    badge: "System Solution",
  },
];

const structures = [
  { icon: "🏗️", name: "Basements & Foundations", desc: "Below-grade waterproofing" },
  { icon: "🌊", name: "Water Retaining Structures", desc: "Tanks, reservoirs, pools" },
  { icon: "🚇", name: "Tunnels & Underground", desc: "Negative side systems" },
  { icon: "🌉", name: "Bridges & Infrastructure", desc: "Deck and pier protection" },
  { icon: "🏙️", name: "Podium Decks", desc: "Plaza and parking decks" },
  { icon: "🏠", name: "Roofs & Terraces", desc: "Above-ground waterproofing" },
];

export default function WaterproofingPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #0047AB 0%, #001f5b 100%)" }}
        className="py-20 md:py-28 relative"
      >
        <div style={{ backgroundColor: "#D50000", height: "4px" }} className="absolute top-0 left-0 w-full" />
        <div className="max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Waterproofing</li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-5xl">💧</span>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              Sika <span style={{ color: "#D50000" }}>Waterproofing Systems</span>
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Comprehensive Sika waterproofing solutions for every structure — from crystalline admixtures
            to sheet membranes and injection systems.
          </p>
        </div>
      </section>

      {/* Structures */}
      <section className="py-12" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {structures.map((s) => (
              <div key={s.name} className="text-center p-4 border border-gray-700 hover:border-blue-500 transition-colors">
                <span className="text-2xl block mb-2">{s.icon}</span>
                <div className="font-bold text-white text-xs mb-1">{s.name}</div>
                <div className="text-gray-400 text-xs">{s.desc}</div>
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
              Waterproofing <span style={{ color: "#FFC510" }}>Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From crystalline concrete protection to membrane and injection systems — the complete Sika waterproofing portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.name}
                className="bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="h-2 w-full" style={{ backgroundColor: "#0066CC" }} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-black text-gray-900 text-lg group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h3>
                    {product.badge && (
                      <span className="px-2 py-0.5 text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: "#0066CC" }}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3 text-blue-700">
                    {product.category}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Applications</div>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <span key={app} className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-800">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-700 hover:gap-2 transition-all">
                    Request Quote →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sika waterproofing */}
      <section className="py-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🔬", title: "Crystalline Technology", desc: "Sika's proprietary crystalline technology permanently seals concrete against water — even when concrete cracks later." },
              { icon: "🛡️", title: "Dual Protection", desc: "Positive and negative side systems for comprehensive protection regardless of where water pressure is applied." },
              { icon: "⏱️", title: "Lifetime Performance", desc: "Sika waterproofing solutions are engineered for the design life of the structure — not just a few years." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 shadow-sm">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FFC510" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Have a Waterproofing Challenge?</h2>
          <p className="text-gray-700 mb-8">
            Our waterproofing specialists will assess your structure and recommend the optimal Sika system.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="font-bold px-8 py-4 hover:opacity-90" style={{ backgroundColor: "#D50000", color: "white" }}>
              Get Expert Assessment
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
