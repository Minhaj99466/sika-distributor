"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: "📍",
      label: "Our Address",
      value: "123 Industrial Boulevard, Your City, State 00000",
      href: null,
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+1 800 SIKA PRO",
      href: "tel:+18005472776",
    },
    {
      icon: "✉",
      label: "Email",
      value: "info@sikapartnerpro.com",
      href: "mailto:info@sikapartnerpro.com",
    },
    {
      icon: "🕐",
      label: "Business Hours",
      value: "Mon – Fri: 8:00 AM – 5:00 PM",
      href: null,
    },
  ];

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
              <li className="text-white font-medium">Contact Us</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Get in <span style={{ color: "#D50000" }}>Touch</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-xl">
            Ready to discuss your project? Our team is here to help with product recommendations,
            pricing, and technical support.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - wider column */}
            <div className="lg:col-span-3">
              <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#D50000", marginBottom: "1.5rem" }} />
              <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "#1a1a1a" }}>
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill in the form below and we&apos;ll get back to you within one business day.
              </p>

              {submitted ? (
                <div
                  className="p-8 text-center border-2"
                  style={{ borderColor: "#FFC510" }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will contact you within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", phone: "", company: "", product: "", message: "" }); }}
                    className="font-bold px-8 py-3 text-white hover:opacity-90"
                    style={{ backgroundColor: "#FFC510" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name <span style={{ color: "#FFC510" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-red-600 transition-colors"
                        style={{ borderColor: "#E0E0E0" }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email Address <span style={{ color: "#FFC510" }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 border text-sm focus:outline-none focus:border-red-600 transition-colors"
                        style={{ borderColor: "#E0E0E0" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 000 000 0000"
                        className="w-full px-4 py-3 border text-sm focus:outline-none focus:border-red-600 transition-colors"
                        style={{ borderColor: "#E0E0E0" }}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 border text-sm focus:outline-none focus:border-red-600 transition-colors"
                        style={{ borderColor: "#E0E0E0" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formState.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border text-sm focus:outline-none focus:border-red-600 transition-colors bg-white"
                      style={{ borderColor: "#E0E0E0" }}
                    >
                      <option value="">Select a category...</option>
                      <option value="adhesive">Adhesive Solutions</option>
                      <option value="flooring">Flooring Systems</option>
                      <option value="roofing">Roofing Solutions</option>
                      <option value="waterproofing">Waterproofing Systems</option>
                      <option value="multiple">Multiple Categories</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message / Project Details <span style={{ color: "#FFC510" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, required quantities, timeline, or any specific questions..."
                      className="w-full px-4 py-3 border text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
                      style={{ borderColor: "#E0E0E0" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-base text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#FFC510" }}
                  >
                    Send Message →
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form you agree to our privacy policy. We never share your information.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#D50000", marginBottom: "1.5rem" }} />
                <h2 className="text-2xl font-black mb-6" style={{ color: "#1a1a1a" }}>
                  Contact Information
                </h2>
              </div>

              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 bg-gray-50"
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#FFC510" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-800 font-medium hover:text-red-700 transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-800 font-medium text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Partner badge */}
              <div className="p-6 border-2" style={{ borderColor: "#FFC510" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div style={{ backgroundColor: "#FFC510" }} className="text-white font-black px-3 py-1.5">
                    SIKA
                  </div>
                  <span className="font-bold text-gray-900 text-sm">Authorized Partner</span>
                </div>
                <p className="text-gray-600 text-sm">
                  As an official Sika distributor, all products come with full manufacturer support and warranty.
                </p>
              </div>

              {/* Quick links */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900">Quick Links</h3>
                {[
                  { label: "Browse All Products", href: "/products" },
                  { label: "Adhesive Solutions", href: "/products/adhesive" },
                  { label: "Waterproofing Systems", href: "/products/waterproofing" },
                  { label: "About Our Company", href: "/about" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium hover:translate-x-1 transition-transform"
                    style={{ color: "#FFC510" }}
                  >
                    → {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 w-full" style={{ backgroundColor: "#E0E0E0" }} aria-label="Office location map">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-3">📍</div>
            <p className="text-gray-600 font-medium">123 Industrial Boulevard, Your City</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#FFC510" }}
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
