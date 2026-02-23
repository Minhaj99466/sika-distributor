import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Authorized Sika Distributor",
  description:
    "Learn about SikaPartner Pro — your trusted authorized Sika distributor with 20+ years of experience in adhesives, flooring, roofing, and waterproofing solutions.",
  alternates: {
    canonical: "https://www.sikapartnerpro.com/about",
  },
};

const values = [
  {
    title: "Quality Commitment",
    desc: "Every product we supply meets Sika's rigorous international quality standards. Zero compromise on product integrity.",
    icon: "🏅",
    color: "#2563EB",
  },
  {
    title: "Technical Excellence",
    desc: "Our certified technical team provides expert advice from product selection through to on-site application support.",
    icon: "🔬",
    color: "#BE2227",
  },
  {
    title: "Customer Focus",
    desc: "We build long-term partnerships by understanding your project needs and delivering tailored solutions on time.",
    icon: "🤝",
    color: "#2563EB",
  },
  {
    title: "Sustainability",
    desc: "We promote Sika's sustainable construction practices to help clients build greener, more efficient structures.",
    icon: "🌱",
    color: "#16a34a",
  },
];

const milestones = [
  { year: "2004", event: "Founded as a regional construction chemicals supplier" },
  { year: "2008", event: "Became an authorized Sika distributor for the region" },
  { year: "2012", event: "Expanded product portfolio to full Sika catalog" },
  { year: "2016", event: "Opened dedicated technical support center" },
  { year: "2020", event: "Achieved Sika Platinum Partner certification" },
  { year: "2024", event: "Serving 500+ active clients across 6 sectors" },
];

const team = [
  {
    name: "John Anderson",
    role: "Managing Director",
    bio: "20+ years in construction chemicals. Sika-certified specialist with deep expertise in adhesive and structural systems.",
  },
  {
    name: "Maria Chen",
    role: "Technical Director",
    bio: "Structural engineering background with expertise in waterproofing and roofing systems across 200+ projects.",
  },
  {
    name: "Robert Patel",
    role: "Sales Director",
    bio: "Former Sika regional manager, bridging clients with the right solutions since 2010.",
  },
];

const badges = ["Full Product Warranty", "Technical Certification", "Priority Stock Access", "Sika Training"];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="py-10 md:py-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #060A12 0%, #0A1628 55%, #0F2451 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,#3B82F6 0px,#3B82F6 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#3B82F6 0px,#3B82F6 1px,transparent 1px,transparent 60px)`,
          }}
        />
        <div className="absolute top-0 left-0 h-1 w-full" style={{ backgroundColor: "#2563EB" }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="mb-6 animate-fade-in-down">
              <ol className="flex items-center gap-2 text-sm text-blue-300/70">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">About Us</li>
              </ol>
            </nav>
            <h1 className="animate-fade-in-up delay-100 text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              About{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#3B82F6,#60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                SikaPartner Pro
              </span>
            </h1>
            <p className="animate-fade-in-up delay-300 text-lg text-slate-300 leading-relaxed">
              Your trusted authorized Sika distributor — delivering premium construction chemical
              solutions with local expertise and global quality for over two decades.
            </p>
          </div>
        </div>

        <div
          className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
          style={{ background: "radial-gradient(ellipse at 80% 50%,rgba(37,99,235,0.10) 0%,transparent 70%)" }}
        />

      </section>

      {/* ── Our Story ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            <ScrollReveal direction="left">
              <div className="yellow-bar-left" />
              <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: "#0F172A" }}>
                Our <span style={{ color: "#2563EB" }}>Story</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2004, SikaPartner Pro began as a regional supplier of specialty construction
                  chemicals, driven by a belief that every project deserves the best possible materials.
                  By 2008, we had earned authorized distributor status from Sika AG — one of the world&apos;s
                  leading construction chemical companies.
                </p>
                <p>
                  Over two decades, we have grown from a small team into a trusted regional partner,
                  supplying the complete Sika product portfolio to contractors, engineers, architects,
                  and developers across six major construction sectors.
                </p>
                <p>
                  Today, as a Sika Platinum Partner, we combine Sika&apos;s world-class product technology
                  with our deep local market knowledge to help clients build stronger, more durable, and
                  more sustainable structures.
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal direction="right" delay={100}>
              <h3 className="font-bold text-xl mb-8 text-slate-900">Our Journey</h3>
              <div className="relative">
                <div
                  className="absolute left-5 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: "#E2E8F0" }}
                />
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-5 mb-6 relative group">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0 font-black text-xs text-white relative z-10 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: "#2563EB" }}
                    >
                      {m.year.slice(2)}
                    </div>
                    <div className="pt-1.5">
                      <div className="font-bold text-sm mb-0.5" style={{ color: "#2563EB" }}>{m.year}</div>
                      <div className="text-slate-600 text-sm">{m.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <div className="yellow-bar mx-auto" style={{ margin: "0 auto 1.5rem" }} />
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#0F172A" }}>
              Our <span style={{ color: "#2563EB" }}>Core Values</span>
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">The principles that drive everything we do.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div
                  className="bg-white p-8 text-center border-t-4 hover:shadow-xl hover:-translate-y-2 transition-all group h-full"
                  style={{ borderTopColor: v.color }}
                >
                  <span className="text-5xl block mb-5 transition-transform group-hover:scale-110">{v.icon}</span>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Badge ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div
              className="flex flex-col md:flex-row items-center gap-8 p-10 border-2 border-blue-200 bg-linear-to-r from-blue-50 to-white"
            >
              <div className="shrink-0 text-center">
                <div
                  style={{ backgroundColor: "#2563EB" }}
                  className="text-white font-black text-4xl px-6 py-4 tracking-tight mx-auto w-fit animate-pulse-glow"
                >
                  SIKA
                </div>
                <div className="text-xs font-bold tracking-widest uppercase mt-2 text-slate-500">
                  Platinum Partner
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3 text-slate-900">
                  Authorized Sika Distributor
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Our Platinum Partner status represents the highest tier of Sika&apos;s distribution
                  network, recognizing our commitment to technical excellence, customer service, and
                  sales volume. This means you receive full manufacturer backing, product warranties,
                  and access to Sika&apos;s latest innovations through us.
                </p>
                <div className="flex flex-wrap gap-3">
                  {badges.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-105"
                      style={{ backgroundColor: "#2563EB" }}
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="py-20" style={{ backgroundColor: "#080C15" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <div
              style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#2563EB", margin: "0 auto 1.5rem" }}
            />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Meet Our <span style={{ color: "#3B82F6" }}>Leadership Team</span>
            </h2>
            <p className="text-slate-500">Experienced professionals dedicated to your project success.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 150}>
                <div
                  className="text-center p-8 border hover:-translate-y-2 transition-all group"
                  style={{ backgroundColor: "#0E1628", borderColor: "#1E2C42" }}
                >
                  <div
                    className="w-20 h-20 mx-auto mb-5 flex items-center justify-center text-white font-black text-2xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: "#2563EB" }}
                  >
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-bold text-white text-lg">{member.name}</h3>
                  <div className="text-sm font-semibold mt-1 mb-3" style={{ color: "#3B82F6" }}>
                    {member.role}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: "#2563EB" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle,white 1px,transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <ScrollReveal direction="scale" className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-blue-100 mb-8">
            Contact our team today and discover how we can support your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block font-bold px-10 py-4 hover:opacity-90 transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "#BE2227", color: "white" }}
          >
            Contact Us Today
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
