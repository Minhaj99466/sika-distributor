"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Category } from "@/lib/types";
import CategoryProductPreview from "./CategoryProductPreview";

const ITEMS_PER_PAGE = 2;

const whySika = [
  { icon: "🌍", label: "100+ Countries", desc: "Global presence" },
  { icon: "🔬", label: "110+ Years", desc: "R&D excellence" },
  { icon: "✓", label: "ISO Certified", desc: "Quality guaranteed" },
  { icon: "🏗️", label: "500,000+ Projects", desc: "Worldwide delivered" },
];

export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const q = query(collection(db, "categories"), orderBy("createdAt", "asc"));
        const snap = await getDocs(q);
        setCategories(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Category)));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

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
              <li className="text-white font-medium">Products</li>
            </ol>
          </nav>
          <h1 className="animate-fade-in-up delay-100 text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Sika{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#3B82F6,#60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Product Range
            </span>
          </h1>
          <p className="animate-fade-in-up delay-300 text-lg text-slate-300 max-w-2xl leading-relaxed">
            We supply the complete Sika portfolio across all product categories —
            all backed by Sika&apos;s global quality and our local technical expertise.
          </p>
        </div>

        <div
          className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
          style={{ background: "radial-gradient(ellipse at 80% 50%,rgba(37,99,235,0.10) 0%,transparent 70%)" }}
        />

      </section>

      {/* ── Category Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="yellow-bar mx-auto" style={{ margin: "0 auto 1.5rem" }} />
            <h2 className="text-3xl font-black mb-3" style={{ color: "#0F172A" }}>
              Product <span style={{ color: "#2563EB" }}>Categories</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Select a category to explore the full range of Sika solutions available through our distribution network.
            </p>
          </div>

          {loading ? (
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="grid md:grid-cols-5 border border-slate-100 animate-pulse overflow-hidden">
                  <div className="md:col-span-2 h-52 bg-slate-200" />
                  <div className="md:col-span-3 p-10 bg-slate-50 space-y-4">
                    <div className="h-5 bg-slate-200 rounded w-1/3" />
                    <div className="grid grid-cols-2 gap-3">
                      {[...Array(4)].map((_, j) => <div key={j} className="h-10 bg-slate-200 rounded" />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : categories.length === 0 ? (
            <div className="text-center py-24">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                🏷️
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No categories yet</h3>
              <p className="text-slate-500">Product categories will appear here once added by the admin.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {categories.map((cat, index) => (
                <article
                  key={cat.id}
                  className="grid md:grid-cols-5 gap-0 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 group"
                >
                  {/* Colored side */}
                  <div
                    className={`md:col-span-2 p-10 flex flex-col justify-center relative overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}
                    style={{ backgroundColor: cat.accentColor }}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle,white 1px,transparent 1px)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <span className="relative text-5xl mb-4 block transition-transform group-hover:scale-110">{cat.icon}</span>
                    <h2 className="relative text-2xl md:text-3xl font-black mb-3 text-white">{cat.name}</h2>
                    <p className="relative text-white/80 text-sm leading-relaxed mb-6">{cat.description}</p>
                    <Link
                      href={`/products/${cat.slug}`}
                      className="relative inline-flex items-center gap-2 font-bold text-sm px-6 py-3 bg-white hover:bg-slate-50 transition-all hover:-translate-y-0.5 w-fit"
                      style={{ color: cat.accentColor }}
                    >
                      Explore {cat.name}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Products preview side */}
                  <div
                    className={`md:col-span-3 p-10 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}
                    style={{ backgroundColor: "#F8FAFC" }}
                  >
                    <h3 className="font-bold text-slate-900 mb-5 text-lg flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: cat.accentColor }} />
                      Featured Products
                    </h3>
                    <CategoryProductPreview category={cat.slug} accentColor={cat.accentColor} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Why Sika ── */}
      <section className="py-20" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="yellow-bar mx-auto" style={{ margin: "0 auto 1.5rem" }} />
          <h2 className="text-3xl font-black mb-4" style={{ color: "#0F172A" }}>
            Why <span style={{ color: "#2563EB" }}>Sika Products?</span>
          </h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto">
            Sika has been at the forefront of construction chemistry for over 110 years.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whySika.map((item) => (
              <div
                key={item.label}
                className="bg-white p-8 text-center border border-slate-100 hover:shadow-lg hover:-translate-y-2 hover:border-blue-200 transition-all group"
              >
                <span className="text-4xl block mb-4 transition-transform group-hover:scale-110">{item.icon}</span>
                <div className="font-bold text-slate-900 mb-1">{item.label}</div>
                <div className="text-slate-500 text-sm">{item.desc}</div>
              </div>
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
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Need Help Choosing the Right Product?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Our technical team is ready to help you specify the right Sika solution for your project.
          </p>
          <Link
            href="/contact"
            className="inline-block font-bold px-10 py-4 hover:opacity-90 transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "#BE2227", color: "white" }}
          >
            Talk to Our Experts
          </Link>
        </div>
      </section>
    </>
  );
}
