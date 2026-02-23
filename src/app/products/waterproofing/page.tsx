import type { Metadata } from "next";
import Link from "next/link";
import ProductsGrid from "../ProductsGrid";

export const metadata: Metadata = {
  title: "Sika Waterproofing Systems | Crystalline, Membranes & Injection",
  description:
    "Complete Sika waterproofing solutions for basements, tunnels, bridges, water tanks and podiums. Crystalline, cementitious, membrane and injection systems. Authorized distributor.",
  keywords: ["Sika waterproofing", "Sika crystalline", "Sikaplan", "basement waterproofing", "waterproofing membrane", "injection waterproofing"],
  alternates: {
    canonical: "https://www.sikapartnerpro.com/products/waterproofing",
  },
};

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
        className="py-10 md:py-8 relative"
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

          <ProductsGrid
            category="waterproofing"
            accentColor="#0066CC"
            badgeColor="#0066CC"
            tagBg="#EFF6FF"
            tagText="#1E40AF"
            hoverBorderClass="hover:border-blue-500"
            titleHoverClass="group-hover:text-blue-700"
            linkColor="#1E40AF"
          />
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
