import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SikaPartner Pro | Authorized Sika Distributor & Partner",
  description:
    "SikaPartner Pro is your trusted authorized Sika distributor. We supply premium adhesives, flooring systems, roofing solutions, and waterproofing products backed by Sika's world-class technology.",
  alternates: {
    canonical: "https://www.sikapartnerpro.com",
  },
};

const productCategories = [
  {
    title: "Adhesive Solutions",
    slug: "adhesive",
    description:
      "High-performance bonding systems for construction, industrial, and specialty applications. From structural glazing to tile fixing.",
    icon: "🔗",
    bg: "#FFF5F5",
    border: "#FFC510",
    items: ["Structural Adhesives", "Elastic Sealants", "Contact Adhesives", "Epoxy Systems"],
  },
  {
    title: "Flooring Systems",
    slug: "flooring",
    description:
      "Self-leveling, decorative, and heavy-duty industrial floor solutions with exceptional durability and aesthetics.",
    icon: "🏗️",
    bg: "#FFFBF0",
    border: "#D50000",
    items: ["Self-Leveling Screeds", "Epoxy Flooring", "Polyurethane Floors", "Decorative Coatings"],
  },
  {
    title: "Roofing Solutions",
    slug: "roofing",
    description:
      "Complete roofing systems including liquid membranes, bituminous waterproofing, and single-ply roofing solutions.",
    icon: "🏠",
    bg: "#F5FFF5",
    border: "#2d7d2d",
    items: ["Liquid Membranes", "Bituminous Systems", "Single-Ply Roofing", "Roof Coatings"],
  },
  {
    title: "Waterproofing",
    slug: "waterproofing",
    description:
      "Comprehensive waterproofing systems for basements, tunnels, bridges, roofs, and all water-retaining structures.",
    icon: "💧",
    bg: "#F0F8FF",
    border: "#0066CC",
    items: ["Crystalline Waterproofing", "Cementitious Coatings", "Injection Systems", "Drainage Systems"],
  },
];

const stats = [
  { value: "100+", label: "Products Available", desc: "Full Sika product range" },
  { value: "20+", label: "Years Experience", desc: "In construction chemicals" },
  { value: "500+", label: "Projects Completed", desc: "Across all sectors" },
  { value: "24/7", label: "Technical Support", desc: "Expert guidance always" },
];

const features = [
  {
    icon: "✓",
    title: "Authorized Partner",
    desc: "Official Sika distributor with full product warranty and manufacturer support.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "Next-day delivery available across the region. Large stock maintained.",
  },
  {
    icon: "🔬",
    title: "Technical Expertise",
    desc: "Certified technical advisors to help you choose the right product for your project.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    desc: "Direct distributor pricing means better value without compromising on quality.",
  },
  {
    icon: "📋",
    title: "Project Support",
    desc: "From specification to application — full project lifecycle support.",
  },
  {
    icon: "🌍",
    title: "Sika Quality",
    desc: "All products backed by Sika's 110+ years of global innovation and quality standards.",
  },
];

const testimonials = [
  {
    name: "Michael T.",
    role: "Project Manager, BuildCo",
    quote:
      "SikaPartner Pro's expertise and fast delivery made our waterproofing project a success. Their technical team was available throughout.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Structural Engineer",
    quote:
      "We've relied on their adhesive solutions for 3 years. Consistently high quality and the team always recommends the right product.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "General Contractor",
    quote:
      "The flooring systems we sourced from SikaPartner Pro exceeded client expectations. Competitive pricing with no compromise on quality.",
    rating: 5,
  },
];

const sectors = [
  "Commercial Construction",
  "Infrastructure & Civil",
  "Industrial Facilities",
  "Residential Projects",
  "Marine & Offshore",
  "Tunnel & Underground",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #CC8800 0%, #7A4400 50%, #1a1a1a 100%)",
          minHeight: "600px",
        }}
        aria-label="Hero section"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #ffffff 0px,
              #ffffff 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
        />

        {/* Yellow accent bar */}
        <div
          className="absolute top-0 left-0 h-1 w-full"
          style={{ backgroundColor: "#D50000" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold mb-6"
              style={{ backgroundColor: "#D50000", color: "white" }}
            >
              <span>★</span>
              <span>Authorized Sika Distributor &amp; Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Premium Sika Solutions{" "}
              <span style={{ color: "#fff" }}>Delivered to Your Project</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              As an authorized Sika partner, we supply the complete range of Sika adhesives, flooring,
              roofing, and waterproofing products — backed by local expertise and global quality.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="font-bold text-base px-8 py-4 transition-all hover:scale-105"
                style={{ backgroundColor: "#FFC510", color: "#1a1a1a" }}
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="font-bold text-base px-8 py-4 border-2 border-white text-white transition-all hover:bg-white hover:text-red-700"
              >
                Get a Quote
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap gap-6">
              {["Sika Certified Partner", "ISO 9001 Compliant", "Technical Support Included"].map((trust) => (
                <div key={trust} className="flex items-center gap-2 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {trust}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative shape */}
        <div
          className="absolute right-0 top-0 h-full w-1/3 hidden lg:block opacity-10"
          style={{
            background: "linear-gradient(90deg, transparent, #D50000)",
            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-10" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-black mb-1"
                  style={{ color: "#FFC510" }}
                >
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm">{stat.label}</div>
                <div className="text-gray-500 text-xs mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white" id="products" aria-label="Product categories">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="yellow-bar mx-auto" style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#D50000", margin: "0 auto 1.5rem" }} />
            <h2 className="section-heading text-3xl md:text-4xl font-black mb-4" style={{ color: "#1a1a1a" }}>
              Our Product <span style={{ color: "#FFC510" }}>Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We carry the complete Sika product portfolio across four key segments — delivering
              proven solutions for every construction and industrial need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group product-card block"
                style={{
                  background: "white",
                  border: "1px solid #E0E0E0",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{ backgroundColor: cat.bg, borderBottom: `3px solid ${cat.border}` }}
                  className="p-6 group-hover:opacity-90 transition-opacity"
                >
                  <span className="text-4xl block mb-3">{cat.icon}</span>
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-yellow-700 transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <span style={{ color: "#B8870A" }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                    style={{ color: "#B8870A" }}
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="btn-outline-red inline-flex items-center gap-2 font-semibold text-sm px-8 py-3 border-2 transition-all"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }} aria-label="Why choose us">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#D50000", marginBottom: "1.5rem" }} />
              <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: "#1a1a1a" }}>
                Why Choose{" "}
                <span style={{ color: "#FFC510" }}>SikaPartner Pro?</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With direct authorization from Sika and years of hands-on experience, we are your
                single-source partner for all Sika construction chemical needs — from product
                selection to on-site technical support.
              </p>

              <div className="space-y-5">
                {features.slice(0, 3).map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-gray-900 font-bold"
                      style={{ backgroundColor: "#FFC510" }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 font-semibold text-sm px-7 py-3 text-gray-900 transition-all hover:opacity-90"
                style={{ backgroundColor: "#FFC510" }}
              >
                Learn About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.slice(3).map((f) => (
                <div
                  key={f.title}
                  className="bg-white p-6 shadow-sm border-t-4 hover:shadow-md transition-shadow"
                  style={{ borderTopColor: "#D50000" }}
                >
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 bg-white" aria-label="Sectors served">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ color: "#1a1a1a" }}>
            Sectors We <span style={{ color: "#B8870A" }}>Serve</span>
          </h2>
          <p className="text-gray-600 mb-10">Trusted across all major construction and industrial sectors.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="px-5 py-2.5 text-sm font-semibold border-2 hover:text-white transition-all cursor-default"
                style={{ borderColor: "#FFC510", color: "#B8870A" }}
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#1a1a1a" }} aria-label="Testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#D50000", margin: "0 auto 1.5rem" }} />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              What Our <span style={{ color: "#FFC510" }}>Clients Say</span>
            </h2>
            <p className="text-gray-400">Trusted by contractors, engineers, and builders across the region.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="p-7 border"
                style={{ backgroundColor: "#242424", borderColor: "#333" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#FFC510" }}>★</span>
                  ))}
                </div>
                <blockquote className="text-gray-300 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{t.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16"
        style={{ backgroundColor: "#FFC510" }}
        aria-label="Call to action"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Contact our team for expert product recommendations, competitive pricing, and fast delivery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="font-bold text-base px-8 py-4 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#D50000", color: "white" }}
            >
              Get a Quote Today
            </Link>
            <Link
              href="/products"
              className="font-bold text-base px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-yellow-400 transition-all"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
