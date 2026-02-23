import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HomeCategoriesCarousel from "@/components/HomeCategoriesCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "SikaPartner Pro | Authorized Sika Distributor & Partner",
  description:
    "SikaPartner Pro is your trusted authorized Sika distributor. We supply premium adhesives, flooring systems, roofing solutions, and waterproofing products backed by Sika's world-class technology.",
  alternates: {
    canonical: "https://www.sikapartnerpro.com",
  },
};


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
      {/* ── Hero Section ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #060A12 0%, #0A1628 55%, #0F2451 100%)",
          minHeight: "600px",
        }}
        aria-label="Hero section"
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, #3B82F6 0px, #3B82F6 1px, transparent 1px, transparent 60px
            ), repeating-linear-gradient(
              90deg, #3B82F6 0px, #3B82F6 1px, transparent 1px, transparent 60px
            )`,
          }}
        />

        {/* Sapphire accent bar */}
        <div className="absolute top-0 left-0 h-1 w-full" style={{ backgroundColor: "#2563EB" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-8 lg:py-16">
          <div className="max-w-3xl">

            {/* Badge */}
            <div
              className="animate-fade-in-left inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold mb-6"
              style={{ backgroundColor: "#BE2227", color: "white" }}
            >
              <span>★</span>
              <span>Authorized Sika Distributor &amp; Partner</span>
            </div>

            <h1 className="animate-fade-in-up delay-200 text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Premium Sika Solutions{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Delivered to Your Project
              </span>
            </h1>

            <p className="animate-fade-in-up delay-400 text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              As an authorized Sika partner, we supply the complete range of Sika adhesives, flooring,
              roofing, and waterproofing products — backed by local expertise and global quality.
            </p>

            <div className="animate-fade-in-up delay-600 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="font-bold text-base px-4 py-4 transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#2563EB", color: "white" }}
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="font-bold text-base px-8 py-4 border-2 border-white/60 text-white transition-all hover:border-white hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </div>

            {/* Trust signals */}
            <div className="animate-fade-in-up delay-800 mt-12 flex flex-wrap gap-6">
              {["Sika Certified Partner", "ISO 9001 Compliant", "Technical Support Included"].map((trust) => (
                <div key={trust} className="flex items-center gap-2 text-slate-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#3B82F6" }} fill="currentColor" viewBox="0 0 20 20">
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

        {/* Decorative glowing orb */}
        <div
          className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
          style={{
            background: "radial-gradient(ellipse at 80% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }}
        />

      </section>

      {/* ── Stats Bar ── */}
      <section style={{ backgroundColor: "#080C15" }} className="py-12" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 120}>
                <div className="text-center group">
                  <div
                    className="text-3xl md:text-4xl font-black mb-1 transition-transform group-hover:scale-110"
                    style={{ color: "#3B82F6" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="py-20 bg-white" id="products" aria-label="Product categories">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <span className="yellow-bar mx-auto" style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#2563EB", margin: "0 auto 1.5rem" }} />
            <h2 className="section-heading text-3xl md:text-4xl font-black mb-4" style={{ color: "#0F172A" }}>
              Our Product <span style={{ color: "#2563EB" }}>Categories</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We carry the complete Sika product portfolio across all key segments — delivering
              proven solutions for every construction and industrial need.
            </p>
          </ScrollReveal>

          <HomeCategoriesCarousel />

          <ScrollReveal className="text-center mt-10" delay={400}>
            <Link
              href="/products"
              className="btn-outline-red inline-flex items-center gap-2 font-semibold text-sm px-8 py-3 border-2 transition-all"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20" style={{ backgroundColor: "#EFF6FF" }} aria-label="Why choose us">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <ScrollReveal direction="left">
              <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#2563EB", marginBottom: "1.5rem" }} />
              <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: "#0F172A" }}>
                Why Choose{" "}
                <span style={{ color: "#2563EB" }}>SikaPartner Pro?</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                With direct authorization from Sika and years of hands-on experience, we are your
                single-source partner for all Sika construction chemical needs — from product
                selection to on-site technical support.
              </p>

              <div className="space-y-5">
                {features.slice(0, 3).map((f) => (
                  <div key={f.title} className="flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white font-bold transition-transform group-hover:scale-110"
                      style={{ backgroundColor: "#2563EB" }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{f.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 font-semibold text-sm px-7 py-3 text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "#2563EB" }}
              >
                Learn About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.slice(3).map((f, i) => (
                <ScrollReveal key={f.title} direction="right" delay={i * 120}>
                  <div
                    className="bg-white p-6 shadow-sm border-t-4 hover:shadow-lg hover:-translate-y-1 transition-all"
                    style={{ borderTopColor: "#2563EB" }}
                  >
                    <div className="text-3xl mb-3">{f.icon}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sectors We Serve ── */}
      <section className="py-16 bg-white" aria-label="Sectors served">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ color: "#0F172A" }}>
              Sectors We <span style={{ color: "#2563EB" }}>Serve</span>
            </h2>
            <p className="text-slate-500 mb-10">Trusted across all major construction and industrial sectors.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {sectors.map((sector, i) => (
                <span
                  key={sector}
                  className="px-5 py-2.5 text-sm font-semibold border-2 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all cursor-default"
                  style={{ borderColor: "#2563EB", color: "#1E3A8A", animationDelay: `${i * 0.05}s` }}
                >
                  {sector}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20" style={{ backgroundColor: "#080C15" }} aria-label="Testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#2563EB", margin: "0 auto 1.5rem" }} />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              What Our <span style={{ color: "#3B82F6" }}>Clients Say</span>
            </h2>
            <p className="text-slate-500">Trusted by contractors, engineers, and builders across the region.</p>
          </ScrollReveal>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: "#2563EB" }}
        aria-label="Call to action"
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
              radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <ScrollReveal direction="scale" className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Contact our team for expert product recommendations, competitive pricing, and fast delivery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="font-bold text-base px-8 py-4 hover:opacity-90 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#BE2227", color: "white" }}
            >
              Get a Quote Today
            </Link>
            <Link
              href="/products"
              className="font-bold text-base px-8 py-4 border-2 border-white/70 text-white hover:border-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Browse Products
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
