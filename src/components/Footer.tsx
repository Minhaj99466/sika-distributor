"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#080C15" }} className="text-white">
      {/* Sapphire accent line */}
      <div style={{ backgroundColor: "#2563EB", height: "4px" }} />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                style={{ backgroundColor: "#2563EB" }}
                className="text-white font-black text-xl px-3 py-1.5 tracking-tight"
              >
                SIKA
              </div>
              <div>
                <div className="font-bold text-white text-base leading-none">PARTNER</div>
                <div style={{ color: "#3B82F6" }} className="text-xs font-semibold tracking-widest uppercase leading-none mt-0.5">
                  PRO
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Your trusted authorized Sika distributor. We bring world-class construction chemical solutions
              directly to your projects with expert local support.
            </p>
            <div className="flex gap-4">
              {[
                { label: "LinkedIn", href: "#", icon: "in" },
                { label: "Facebook", href: "#", icon: "f" },
                { label: "Twitter", href: "#", icon: "𝕏" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{ backgroundColor: "#162038" }}
                  className="w-9 h-9 flex items-center justify-center text-sm font-bold transition-all hover:-translate-y-0.5"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#162038")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 style={{ color: "#3B82F6" }} className="font-bold text-sm uppercase tracking-widest mb-5">
              Products
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Adhesive Solutions", href: "/products/adhesive" },
                { name: "Flooring Systems", href: "/products/flooring" },
                { name: "Roofing Solutions", href: "/products/roofing" },
                { name: "Waterproofing Systems", href: "/products/waterproofing" },
                { name: "All Products", href: "/products" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span
                      style={{ backgroundColor: "#2563EB" }}
                      className="w-1.5 h-1.5 shrink-0 rounded-full transition-transform group-hover:scale-125"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: "#3B82F6" }} className="font-bold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
                { name: "Get a Quote", href: "/contact" },
                { name: "Sika Global", href: "https://www.sika.com", external: true },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span
                      style={{ backgroundColor: "#2563EB" }}
                      className="w-1.5 h-1.5 shrink-0 rounded-full transition-transform group-hover:scale-125"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#3B82F6" }} className="font-bold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">📍</span>
                <span>123 Industrial Boulevard<br />Your City, State 00000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">📞</span>
                <a href="tel:+18005472776" className="hover:text-white transition-colors">
                  +1 800 SIKA PRO
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">✉</span>
                <a href="mailto:info@sikapartnerpro.com" className="hover:text-white transition-colors">
                  info@sikapartnerpro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">🕐</span>
                <span>Mon–Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>

            {/* Partner badge */}
            <div
              className="mt-6 p-3 border"
              style={{ borderColor: "#2563EB" }}
            >
              <div className="flex items-center gap-2">
                <div style={{ backgroundColor: "#2563EB" }} className="text-white font-black px-2 py-0.5 text-xs">
                  SIKA
                </div>
                <span className="text-xs text-slate-400">Authorized Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTopColor: "#162038" }} className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {currentYear} SikaPartner Pro. All rights reserved. An authorized distributor of Sika AG products.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link key={item} href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
