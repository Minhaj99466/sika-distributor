"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Category } from "@/lib/types";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const q = query(collection(db, "categories"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      setCategories(snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Category)));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this category? Products assigned to it will not be deleted but will no longer appear under a category page.")) return;
    setDeleting(id);
    try {
      await deleteDoc(doc(db, "categories", id));
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete category.");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Categories</h1>
          <p className="text-gray-500 text-sm mt-1">
            {categories.length} categor{categories.length !== 1 ? "ies" : "y"} — these appear in the product category dropdown
          </p>
        </div>
        <Link
          href="/admin/categories/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm text-gray-900"
          style={{ backgroundColor: "#FFC510" }}
        >
          <span>+</span> Add Category
        </Link>
      </div>

      {loading ? (
        <div className="bg-white border border-gray-200">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border-b border-gray-100 animate-pulse">
              <div className="w-10 h-10 bg-gray-200 rounded shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-3 bg-gray-200 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      ) : categories.length === 0 ? (
        <div className="bg-white border border-gray-200 text-center py-20">
          <div className="text-5xl mb-4">🏷️</div>
          <p className="text-gray-500 mb-2 font-medium">No categories yet.</p>
          <p className="text-gray-400 text-sm mb-6">Add categories so admins can assign products to them.</p>
          <Link
            href="/admin/categories/new"
            className="inline-block px-6 py-3 font-bold text-sm text-gray-900"
            style={{ backgroundColor: "#FFC510" }}
          >
            Add First Category
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Category</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 hidden sm:table-cell">Slug</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 hidden md:table-cell">Color</th>
                <th className="text-right px-5 py-3 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cat.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{cat.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">{cat.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <code className="text-xs bg-gray-100 px-2 py-1 text-gray-700">{cat.slug}</code>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-5 h-5 rounded-sm border border-gray-200 inline-block"
                        style={{ backgroundColor: cat.accentColor }}
                      />
                      <span className="text-xs text-gray-500">{cat.accentColor}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/categories/${cat.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(cat.id!)}
                        disabled={deleting === cat.id}
                        className="text-red-500 hover:text-red-700 font-medium transition-colors disabled:opacity-50"
                      >
                        {deleting === cat.id ? "…" : "Delete"}
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
