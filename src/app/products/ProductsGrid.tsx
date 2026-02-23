"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/lib/types";

interface ProductsGridProps {
  category: string;
  accentColor: string;
  badgeColor: string;
  tagBg: string;
  tagText: string;
  hoverBorderClass: string;
  titleHoverClass: string;
  linkColor: string;
}

export default function ProductsGrid({
  category,
  accentColor,
  badgeColor,
  tagBg,
  tagText,
  hoverBorderClass,
  titleHoverClass,
  linkColor,
}: ProductsGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(
          collection(db, "products"),
          where("category", "==", category)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() } as Product))
          .sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white border border-gray-200 animate-pulse">
            <div className="h-2 w-full bg-gray-200" />
            <div className="p-6 space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
              <div className="flex gap-2 mt-2">
                <div className="h-6 bg-gray-200 rounded w-20" />
                <div className="h-6 bg-gray-200 rounded w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-24">
        <div className="text-6xl mb-6">📦</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">No products yet</h3>
        <p className="text-gray-500 mb-8">
          Products in this category will appear here once added by the admin.
        </p>
        <Link
          href="/contact"
          className="inline-block font-semibold px-6 py-3"
          style={{ backgroundColor: accentColor, color: "#1a1a1a" }}
        >
          Contact Us for More Information
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <article
          key={product.id}
          className={`bg-white border border-gray-200 ${hoverBorderClass} hover:shadow-lg transition-all group`}
        >
          <div className="h-2 w-full" style={{ backgroundColor: accentColor }} />
          {product.imageUrl && (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className={`font-black text-gray-900 text-lg ${titleHoverClass} transition-colors`}>
                {product.name}
              </h3>
              {product.badge && (
                <span
                  className="px-2 py-0.5 text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: badgeColor }}
                >
                  {product.badge}
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
            {product.applications && product.applications.length > 0 && (
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Key Applications
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="px-2.5 py-1 text-xs font-medium"
                      style={{ backgroundColor: tagBg, color: tagText }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <Link
              href="/contact"
              className="mt-5 flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
              style={{ color: linkColor }}
            >
              Request Quote →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
