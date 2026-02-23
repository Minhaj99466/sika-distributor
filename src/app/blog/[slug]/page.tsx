"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BlogPost } from "@/lib/types";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const snapshot = await getDocs(q);
        if (snapshot.empty) {
          setNotFound(true);
        } else {
          setPost({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as BlogPost);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-2/3" />
            <div className="h-64 bg-gray-200 rounded" />
            <div className="space-y-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-3xl font-black text-gray-900 mb-3">Post Not Found</h1>
          <p className="text-gray-500 mb-8">This blog post doesn&apos;t exist or has been removed.</p>
          <Link
            href="/blog"
            className="inline-block font-bold px-6 py-3"
            style={{ backgroundColor: "#FFC510", color: "#1a1a1a" }}
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section
        className="py-12 md:py-16"
        style={{ background: "linear-gradient(135deg, #3a2a1a 0%, #1a1a1a 60%, #2d1a00 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white font-medium truncate max-w-xs">{post.title}</span>
          </div>
          {post.category && (
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-4"
              style={{ backgroundColor: "#FFC510", color: "#1a1a1a" }}
            >
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>By <span className="text-white font-medium">{post.author}</span></span>
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt.seconds * 1000).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Featured image */}
          {post.imageUrl && (
            <div className="relative h-64 md:h-96 mb-10 overflow-hidden">
              <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
            </div>
          )}

          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium border-l-4 pl-6" style={{ borderColor: "#FFC510" }}>
            {post.excerpt}
          </p>

          {/* Main content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <span className="text-sm font-semibold text-gray-500 mr-3">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-xs font-medium px-3 py-1 mr-2 mb-2 bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-gray-900 hover:text-red-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Have Questions About This Topic?</h2>
          <p className="text-gray-400 mb-8">
            Our Sika-certified technical team is ready to assist with your project.
          </p>
          <Link
            href="/contact"
            className="inline-block font-bold px-8 py-3 text-gray-900"
            style={{ backgroundColor: "#FFC510" }}
          >
            Get Technical Support
          </Link>
        </div>
      </section>
    </>
  );
}
