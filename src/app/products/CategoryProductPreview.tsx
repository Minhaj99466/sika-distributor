"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/lib/types";

interface CategoryProductPreviewProps {
  category: string;
  accentColor: string;
}

export default function CategoryProductPreview({ category, accentColor }: CategoryProductPreviewProps) {
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
          .sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0))
          .slice(0, 6);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching category preview:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-12 bg-slate-200 animate-pulse" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-sm text-slate-400 italic">No products added yet.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center gap-3 bg-white p-3.5 border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all group"
        >
          <span
            className="w-2 h-2 shrink-0 rounded-full transition-transform group-hover:scale-125"
            style={{ backgroundColor: accentColor }}
          />
          <span className="text-sm text-slate-700 font-medium leading-snug group-hover:text-blue-700 transition-colors">
            {product.name}
          </span>
        </div>
      ))}
    </div>
  );
}
