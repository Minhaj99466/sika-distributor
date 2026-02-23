"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Category, Product } from "@/lib/types";

export default function DynamicCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const [slug, setSlug] = useState<string>("");
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { category: categorySlug } = await params;
      setSlug(categorySlug);
      try {
        const catQ = query(collection(db, "categories"), where("slug", "==", categorySlug));
        const catSnap = await getDocs(catQ);

        if (catSnap.empty) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const catData = { id: catSnap.docs[0].id, ...catSnap.docs[0].data() } as Category;
        setCategory(catData);

        const prodQ = query(collection(db, "products"), where("category", "==", categorySlug));
        const prodSnap = await getDocs(prodQ);
        const prods = prodSnap.docs
          .map((d) => ({ id: d.id, ...d.data() } as Product))
          .sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
        setProducts(prods);
      } catch (err) {
        console.error(err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [params]);

  if (loading) {
    return (
      <>
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
          <div className="max-w-7xl mx-auto px-6">
            <div className="animate-pulse space-y-4 max-w-md">
              <div className="h-4 bg-white/20 rounded w-1/3" />
              <div className="h-10 bg-white/20 rounded w-3/4" />
              <div className="h-4 bg-white/20 rounded w-full" />
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-16"
            style={{ background: "linear-gradient(to bottom,transparent,#F8FAFC)" }}
          />
        </section>
        <section className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white border border-slate-100 animate-pulse overflow-hidden">
                  <div className="h-1.5 bg-slate-200" />
                  <div className="h-48 bg-slate-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-slate-200 rounded w-3/4" />
                    <div className="h-4 bg-slate-200 rounded w-full" />
                    <div className="h-4 bg-slate-200 rounded w-2/3" />
                    <div className="flex gap-2 pt-2">
                      <div className="h-6 bg-slate-200 rounded w-20" />
                      <div className="h-6 bg-slate-200 rounded w-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  if (notFound || !category) {
    return (
      <section className="py-32 text-center bg-white">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
          style={{ backgroundColor: "#EFF6FF" }}
        >
          🔍
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-3">Category Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          The category &quot;{slug}&quot; does not exist or may have been removed.
        </p>
        <Link
          href="/products"
          className="inline-block font-bold px-8 py-4 text-white hover:opacity-90 transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: "#2563EB" }}
        >
          View All Categories
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="py-10 md:py-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #060A12 0%, #0A1628 55%, #0F2451 100%)" }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,#3B82F6 0px,#3B82F6 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#3B82F6 0px,#3B82F6 1px,transparent 1px,transparent 60px)`,
          }}
        />
        {/* Sapphire top bar */}
        <div className="absolute top-0 left-0 h-1 w-full" style={{ backgroundColor: "#2563EB" }} />

        {/* Category color accent orb */}
        <div
          className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
          style={{
            background: `radial-gradient(ellipse at 80% 50%, ${category.accentColor}22 0%, transparent 70%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 animate-fade-in-down">
            <ol className="flex items-center gap-2 text-sm text-blue-300/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li>/</li>
              <li className="text-white font-medium">{category.name}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-5 mb-5 animate-fade-in-up">
            <span
              className="text-5xl w-20 h-20 flex items-center justify-center shrink-0 transition-transform hover:scale-110"
              style={{ backgroundColor: `${category.accentColor}33`, borderRadius: "0" }}
            >
              {category.icon}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Sika{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${category.accentColor}, #60A5FA)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {category.name}
              </span>
            </h1>
          </div>

          <p className="animate-fade-in-up delay-200 text-lg text-slate-300 max-w-2xl leading-relaxed">
            {category.description}
          </p>

          <div className="animate-fade-in-up delay-400 flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#2563EB" }}
              />
              {products.length > 0 ? `${products.length} Products Available` : "Loading products..."}
            </div>
            <Link
              href="/contact"
              className="text-sm font-semibold text-blue-400 hover:text-white transition-colors"
            >
              Request Pricing →
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-16"
          style={{ background: "linear-gradient(to bottom,transparent,#F8FAFC)" }}
        />
      </section>

      {/* ── Product Grid ── */}
      <section className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="yellow-bar mx-auto" style={{ margin: "0 auto 1.5rem" }} />
            <h2 className="text-3xl font-black mb-3" style={{ color: "#0F172A" }}>
              Available{" "}
              <span style={{ color: "#2563EB" }}>{category.name} Products</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Contact us for specific product data sheets, pricing, and availability.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-24">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                📦
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No products yet</h3>
              <p className="text-slate-500 mb-8">
                Products in this category will appear here once added by the admin.
              </p>
              <Link
                href="/contact"
                className="inline-block font-semibold px-8 py-3 text-white hover:opacity-90 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#2563EB" }}
              >
                Contact Us
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="bg-white border border-slate-100 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                >
                  {/* Category accent bar */}
                  <div className="h-1.5 w-full" style={{ backgroundColor: category.accentColor }} />

                  {/* Product image */}
                  {product.imageUrl && (
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Name + badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-blue-700 transition-colors">
                        {product.name}
                      </h3>
                      {product.badge && (
                        <span
                          className="px-2.5 py-1 text-xs font-bold text-white shrink-0 leading-none"
                          style={{ backgroundColor: category.accentColor }}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Applications */}
                    {product.applications && product.applications.length > 0 && (
                      <div className="mb-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Key Applications
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {product.applications.map((app) => (
                            <span
                              key={app}
                              className="px-2.5 py-1 text-xs font-medium text-blue-700"
                              style={{ backgroundColor: "#EFF6FF" }}
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Divider + CTA */}
                    <div className="border-t border-slate-100 pt-4 mt-2">
                      <Link
                        href="/contact"
                        className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all"
                        style={{ color: "#2563EB" }}
                      >
                        Request Quote
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
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
          <h2 className="text-3xl font-black text-white mb-4">
            Need Help with {category.name}?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Our technical team will help you find the right Sika solution for your specific project requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="font-bold px-8 py-4 text-white hover:opacity-90 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#BE2227" }}
            >
              Get Technical Advice
            </Link>
            <Link
              href="/products"
              className="font-bold px-8 py-4 border-2 border-white/40 text-white hover:bg-white hover:text-blue-700 transition-all hover:-translate-y-0.5"
            >
              All Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
