"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BlogPost } from "@/lib/types";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("publishedAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as BlogPost));
        setPosts(data);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
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
          <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in-down">
            <Link href="/" className="text-blue-300/70 hover:text-white transition-colors">Home</Link>
            <span className="text-blue-300/40">/</span>
            <span className="text-white font-medium">Blog</span>
          </nav>
          <div className="max-w-2xl">
            <div
              className="animate-fade-in-left inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 mb-5"
              style={{ backgroundColor: "#2563EB", color: "white" }}
            >
              Insights &amp; Updates
            </div>
            <h1 className="animate-fade-in-up delay-200 text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              The SikaPartner{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#3B82F6,#60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pro Blog
              </span>
            </h1>
            <p className="animate-fade-in-up delay-400 text-slate-400 text-lg leading-relaxed">
              Expert tips, product guides, and industry insights from our technical team.
            </p>
          </div>
        </div>

        <div
          className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
          style={{ background: "radial-gradient(ellipse at 80% 50%,rgba(37,99,235,0.10) 0%,transparent 70%)" }}
        />

      </section>

      {/* ── Posts Grid ── */}
      <section className="py-16" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white border border-slate-100 animate-pulse overflow-hidden">
                  <div className="h-52 bg-slate-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-1/3" />
                    <div className="h-6 bg-slate-200 rounded w-3/4" />
                    <div className="h-4 bg-slate-200 rounded w-full" />
                    <div className="h-4 bg-slate-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                📝
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">No posts yet</h2>
              <p className="text-slate-500 mb-8">Blog posts will appear here once published by the admin.</p>
              <Link
                href="/"
                className="inline-block font-semibold px-8 py-3 text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#2563EB" }}
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="h-52 overflow-hidden relative bg-slate-100">
                      {post.imageUrl ? (
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center text-5xl"
                          style={{ backgroundColor: "#EFF6FF" }}
                        >
                          📰
                        </div>
                      )}
                      {/* Sapphire top border */}
                      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#2563EB" }} />
                    </div>
                  </Link>

                  <div className="p-6">
                    {post.category && (
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 text-white"
                        style={{ backgroundColor: "#2563EB" }}
                      >
                        {post.category}
                      </span>
                    )}
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-slate-900 mt-3 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                      <span className="font-medium">By {post.author}</span>
                      <span>
                        {post.publishedAt
                          ? new Date(post.publishedAt.seconds * 1000).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                          : ""}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                      style={{ color: "#2563EB" }}
                    >
                      Read More →
                    </Link>
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
        style={{ backgroundColor: "#080C15" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,#3B82F6 0px,#3B82F6 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#3B82F6 0px,#3B82F6 1px,transparent 1px,transparent 60px)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div
            style={{ display: "block", width: "4rem", height: "4px", backgroundColor: "#2563EB", margin: "0 auto 1.5rem" }}
          />
          <h2 className="text-3xl font-black text-white mb-4">Need Technical Advice?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Our team of Sika-certified experts is ready to help with your project.
          </p>
          <Link
            href="/contact"
            className="inline-block font-bold px-8 py-4 text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: "#2563EB" }}
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
