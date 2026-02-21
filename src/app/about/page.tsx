import type { Metadata } from "next";
import Link from "next/link";

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
    color: "#FFC510",
  },
  {
    title: "Technical Excellence",
    desc: "Our certified technical team provides expert advice from product selection through to on-site application support.",
    icon: "🔬",
    color: "#D50000",
  },
  {
    title: "Customer Focus",
    desc: "We build long-term partnerships by understanding your project needs and delivering tailored solutions on time.",
    icon: "🤝",
    color: "#FFC510",
  },
  {
    title: "Sustainability",
    desc: "We promote Sika's sustainable construction practices to help clients build greener, more efficient structures.",
    icon: "🌱",
    color: "#2d7d2d",
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
    bio: "20+ years in construction chemicals. Sika-certified specialist.",
  },
  {
    name: "Maria Chen",
    role: "Technical Director",
    bio: "Structural engineering background with expertise in waterproofing systems.",
  },
  {
    name: "Robert Patel",
    role: "Sales Director",
    bio: "Former Sika regional manager, bridging clients with the right solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #CC8800 0%, #7A4400 100%)" }}
        className="py-20 md:py-28 relative overflow-hidden"
      >
        <div
          style={{ backgroundColor: "#D50000", height: "4px" }}
          className="absolute top-0 left-0 w-full"
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-red-200">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-red-300">/</li>
                <li className="text-white font-medium">About Us</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5">
              About <span style={{ color: "#D50000" }}>SikaPartner Pro</span>
            </h1>
            <p className="text-xl text-amber-100 leading-relaxed">
              Your trusted authorized Sika distributor — delivering premium construction chemical
              solutions with local expertise and global quality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#D50000", marginBottom: "1.5rem" }} />
              <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: "#1a1a1a" }}>
                Our <span style={{ color: "#FFC510" }}>Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
            </div>

            {/* Timeline */}
            <div>
              <h3 className="font-bold text-xl mb-6 text-gray-900">Our Journey</h3>
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 flex items-center justify-center flex-shrink-0 font-black text-xs text-white"
                        style={{ backgroundColor: "#FFC510" }}
                      >
                        {m.year.slice(2)}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-0.5 flex-1 my-1" style={{ backgroundColor: "#E0E0E0" }} />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="font-bold text-sm" style={{ color: "#FFC510" }}>{m.year}</div>
                      <div className="text-gray-600 text-sm mt-0.5">{m.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#1a1a1a" }}>
              Our <span style={{ color: "#FFC510" }}>Values</span>
            </h2>
            <p className="text-gray-600">The principles that drive everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-7 text-center border-t-4 hover:shadow-lg transition-shadow"
                style={{ borderTopColor: v.color }}
              >
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Badge */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex flex-col md:flex-row items-center gap-8 p-10 border-2"
            style={{ borderColor: "#FFC510" }}
          >
            <div className="flex-shrink-0 text-center">
              <div
                style={{ backgroundColor: "#FFC510" }}
                className="text-white font-black text-4xl px-6 py-4 tracking-tight mx-auto w-fit"
              >
                SIKA
              </div>
              <div className="text-xs font-bold tracking-widest uppercase mt-2 text-gray-500">
                Platinum Partner
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">
                Authorized Sika Distributor
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Platinum Partner status represents the highest tier of Sika&apos;s distribution
                network, recognizing our commitment to technical excellence, customer service, and
                sales volume. This means you receive full manufacturer backing, product warranties,
                and access to Sika&apos;s latest innovations through us.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Full Product Warranty", "Technical Certification", "Priority Stock Access", "Sika Training"].map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: "#FFC510" }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#1a1a1a" }}>
              Meet Our <span style={{ color: "#FFC510" }}>Leadership Team</span>
            </h2>
            <p className="text-gray-600">Experienced professionals dedicated to your project success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white text-center p-8 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="w-20 h-20 mx-auto mb-5 flex items-center justify-center text-white font-black text-2xl"
                  style={{ backgroundColor: "#FFC510" }}
                >
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <div className="text-sm font-semibold mt-1 mb-3" style={{ color: "#FFC510" }}>
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FFC510" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-700 mb-8">
            Contact our team today and discover how we can support your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block font-bold px-10 py-4 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#D50000", color: "white" }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
