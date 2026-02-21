"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const products = [
  {
    name: "Adhesive",
    href: "/products/adhesive",
    description: "High-performance bonding solutions",
    icon: "🔗",
  },
  {
    name: "Flooring",
    href: "/products/flooring",
    description: "Self-leveling & decorative floors",
    icon: "🏗️",
  },
  {
    name: "Roofing",
    href: "/products/roofing",
    description: "Durable roofing membranes & coatings",
    icon: "🏠",
  },
  {
    name: "Waterproofing",
    href: "/products/waterproofing",
    description: "Complete waterproofing systems",
    icon: "💧",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div style={{ backgroundColor: "#FFC510" }} className="text-gray-900 text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="font-semibold">Authorized Sika Distributor &amp; Partner</span>
          <div className="flex items-center gap-6">
            <a href="tel:+18005472776" className="hover:text-gray-700 transition-colors font-medium">
              📞 +1 800 SIKA PRO
            </a>
            <a href="mailto:info@sikapartnerpro.com" className="hover:text-gray-700 transition-colors font-medium">
              ✉ info@sikapartnerpro.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="SikaPartner Pro Home">
              <div
                style={{ backgroundColor: "#FFC510" }}
                className="text-gray-900 font-black text-xl px-3 py-1.5 tracking-tight leading-none"
              >
                SIKA
              </div>
              <div className="leading-tight">
                <div className="font-bold text-gray-900 text-base leading-none">PARTNER</div>
                <div style={{ color: "#FFC510" }} className="text-xs font-semibold tracking-widest uppercase leading-none mt-0.5">
                  PRO
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-gray-800 font-medium hover:text-red-700 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-gray-800 font-medium hover:text-red-700 transition-colors text-sm"
              >
                About Us
              </Link>

              {/* Products dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setProductOpen(!productOpen)}
                  onMouseEnter={() => setProductOpen(true)}
                  className="flex items-center gap-1 px-4 py-2 text-gray-800 font-medium hover:text-red-700 transition-colors text-sm cursor-pointer bg-transparent border-none"
                  aria-haspopup="true"
                  aria-expanded={productOpen}
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {productOpen && (
                  <div
                    onMouseLeave={() => setProductOpen(false)}
                    className="absolute top-full left-0 mt-0 w-72 bg-white shadow-2xl border-t-4 z-50"
                    style={{ borderTopColor: "#FFC510" }}
                    role="menu"
                  >
                    <div className="py-2">
                      <Link
                        href="/products"
                        className="block px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-red-50 border-b border-gray-100"
                        onClick={() => setProductOpen(false)}
                        role="menuitem"
                      >
                        All Products
                      </Link>
                      {products.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 group transition-colors"
                          onClick={() => setProductOpen(false)}
                          role="menuitem"
                        >
                          <span className="text-xl mt-0.5">{p.icon}</span>
                          <div>
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                              {p.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">{p.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="px-4 py-2 text-gray-800 font-medium hover:text-red-700 transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* CTA button */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary text-sm px-5 py-2.5"
                style={{ backgroundColor: "#FFC510", color: "#1a1a1a", padding: "0.6rem 1.5rem", fontWeight: 700 }}
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded text-gray-700 hover:text-red-700 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 text-gray-800 font-medium hover:text-red-700 hover:bg-red-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 text-gray-800 font-medium hover:text-red-700 hover:bg-red-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Products */}
              <div>
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-gray-800 font-medium hover:text-red-700 hover:bg-red-50 transition-colors bg-transparent border-none cursor-pointer"
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileProductOpen && (
                  <div className="pl-6 space-y-1 pb-2">
                    <Link
                      href="/products"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-red-700 font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      All Products
                    </Link>
                    {products.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-red-700"
                        onClick={() => setIsOpen(false)}
                      >
                        {p.icon} {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block px-3 py-2.5 text-gray-800 font-medium hover:text-red-700 hover:bg-red-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>

              <div className="pt-2 pb-3">
                <Link
                  href="/contact"
                  className="block text-center py-3 font-semibold text-gray-900 w-full"
                  style={{ backgroundColor: "#FFC510" }}
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
