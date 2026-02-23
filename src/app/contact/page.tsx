"use client";

import { useState } from "react";
import Link from "next/link";

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

  const inputClass =
    "w-full px-4 py-3 border border-slate-200 text-sm bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all rounded-sm";

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
          <nav aria-label="Breadcrumb" className="mb-6 animate-fade-in-down">
            <ol className="flex items-center gap-2 text-sm text-blue-300/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Contact Us</li>
            </ol>
          </nav>
          <h1 className="animate-fade-in-up delay-100 text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Let&apos;s Start a{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#3B82F6,#60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Conversation
            </span>
          </h1>
          <p className="animate-fade-in-up delay-300 text-lg text-slate-300 max-w-xl leading-relaxed">
            Ready to discuss your project? Our team provides expert product recommendations,
            competitive pricing, and full technical support.
          </p>
        </div>

        <div
          className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
          style={{ background: "radial-gradient(ellipse at 80% 50%,rgba(37,99,235,0.10) 0%,transparent 70%)" }}
        />

      </section>

      {/* ── Contact Content ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="yellow-bar-left" />
              <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "#0F172A" }}>
                Send Us a Message
              </h2>
              <p className="text-slate-500 mb-8">
                Fill in the form below and we&apos;ll get back to you within one business day.
              </p>

              {submitted ? (
                <div className="p-10 text-center border-2 border-blue-100 bg-blue-50/50 animate-scale-in">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl"
                    style={{ backgroundColor: "#2563EB" }}>
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-500 mb-6">
                    Thank you for reaching out. Our team will contact you within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", phone: "", company: "", product: "", message: "" });
                    }}
                    className="font-bold px-8 py-3 text-white transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "#2563EB" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name <span style={{ color: "#2563EB" }}>*</span>
                      </label>
                      <input
                        type="text" id="name" name="name" required
                        value={formState.name} onChange={handleChange}
                        placeholder="John Smith" className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address <span style={{ color: "#2563EB" }}>*</span>
                      </label>
                      <input
                        type="email" id="email" name="email" required
                        value={formState.email} onChange={handleChange}
                        placeholder="john@company.com" className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel" id="phone" name="phone"
                        value={formState.phone} onChange={handleChange}
                        placeholder="+1 000 000 0000" className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text" id="company" name="company"
                        value={formState.company} onChange={handleChange}
                        placeholder="Your Company" className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Product Interest
                    </label>
                    <select
                      id="product" name="product"
                      value={formState.product} onChange={handleChange}
                      className={inputClass}
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
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Message / Project Details <span style={{ color: "#2563EB" }}>*</span>
                    </label>
                    <textarea
                      id="message" name="message" required rows={5}
                      value={formState.message} onChange={handleChange}
                      placeholder="Tell us about your project, required quantities, timeline, or any specific questions..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-base text-white transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: "#2563EB" }}
                  >
                    Send Message →
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting this form you agree to our privacy policy. We never share your information.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="yellow-bar-left" />
                <h2 className="text-2xl font-black mb-6" style={{ color: "#0F172A" }}>
                  Contact Information
                </h2>
              </div>

              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg transition-transform group-hover:scale-110"
                      style={{ backgroundColor: "#EFF6FF" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#2563EB" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-700 font-medium hover:text-blue-600 transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-slate-700 font-medium text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Partner badge */}
              <div className="p-6 border-2 border-blue-200 bg-blue-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div style={{ backgroundColor: "#2563EB" }} className="text-white font-black px-3 py-1.5 text-sm">
                    SIKA
                  </div>
                  <span className="font-bold text-slate-900 text-sm">Authorized Partner</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  As an official Sika distributor, all products come with full manufacturer support and warranty.
                </p>
              </div>

              {/* Quick links */}
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 mb-3">Quick Links</h3>
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
                    style={{ color: "#2563EB" }}
                  >
                    <span>→</span> {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ── */}
      <section
        className="h-72 w-full relative overflow-hidden"
        style={{ backgroundColor: "#EFF6FF" }}
        aria-label="Office location map"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,#2563EB 0px,#2563EB 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#2563EB 0px,#2563EB 1px,transparent 1px,transparent 40px)`,
          }}
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl animate-pulse-glow"
              style={{ backgroundColor: "#2563EB" }}
            >
              📍
            </div>
            <p className="text-slate-700 font-semibold mb-1">123 Industrial Boulevard, Your City</p>
            <p className="text-slate-500 text-sm mb-4">View our office on the map</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#2563EB" }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
