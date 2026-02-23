"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/lib/types";

const categoryColors: Record<string, string> = {
  adhesive: "#FFF3CD",
  flooring: "#D1ECF1",
  roofing: "#D4EDDA",
  waterproofing: "#CCE5FF",
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      setProducts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Product)));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product? This cannot be undone.")) return;
    setDeleting(id);
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete product.");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Products</h1>
          <p className="text-gray-500 text-sm mt-1">{products.length} product{products.length !== 1 ? "s" : ""} in catalog</p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm text-gray-900"
          style={{ backgroundColor: "#FFC510" }}
        >
          <span>+</span> Add Product
        </Link>
      </div>

      {loading ? (
        <div className="bg-white border border-gray-200">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border-b border-gray-100 animate-pulse">
              <div className="w-12 h-12 bg-gray-200 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-3 bg-gray-200 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white border border-gray-200 text-center py-20">
          <div className="text-5xl mb-4">📦</div>
          <p className="text-gray-500 mb-6">No products yet. Add your first product to the catalog.</p>
          <Link
            href="/admin/products/new"
            className="inline-block px-6 py-3 font-bold text-sm text-gray-900"
            style={{ backgroundColor: "#FFC510" }}
          >
            Add Product
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Product</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 hidden sm:table-cell">Category</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 hidden md:table-cell">Badge</th>
                <th className="text-right px-5 py-3 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {product.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-10 h-10 object-cover shrink-0 bg-gray-100"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center text-lg shrink-0">
                          📦
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span
                      className="text-xs font-semibold px-2 py-1 capitalize"
                      style={{ backgroundColor: categoryColors[product.category] || "#f3f4f6" }}
                    >
                      {product.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    {product.badge ? (
                      <span className="text-xs font-bold px-2 py-1" style={{ backgroundColor: "#FFC510", color: "#1a1a1a" }}>
                        {product.badge}
                      </span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/products/${product.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(product.id!)}
                        disabled={deleting === product.id}
                        className="text-red-500 hover:text-red-700 font-medium transition-colors disabled:opacity-50"
                      >
                        {deleting === product.id ? "…" : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
