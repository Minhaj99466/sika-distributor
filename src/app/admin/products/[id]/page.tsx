"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { collection, doc, getDoc, getDocs, orderBy, query, updateDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { Category, Product } from "@/lib/types";

export default function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    applications: "",
    badge: "",
    imageUrl: "",
  });

  useEffect(() => {
    const load = async () => {
      try {
        const [catSnap, productSnap] = await Promise.all([
          getDocs(query(collection(db, "categories"), orderBy("createdAt", "desc"))),
          getDoc(doc(db, "products", id)),
        ]);

        const cats = catSnap.docs.map((d) => ({ id: d.id, ...d.data() } as Category));
        setCategories(cats);

        if (!productSnap.exists()) { router.push("/admin/products"); return; }
        const data = productSnap.data() as Product;
        setForm({
          name: data.name,
          description: data.description,
          category: data.category,
          applications: data.applications?.join(", ") || "",
          badge: data.badge || "",
          imageUrl: data.imageUrl || "",
        });
        if (data.imageUrl) setImagePreview(data.imageUrl);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let imageUrl = form.imageUrl;
      if (imageFile) {
        const storageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      await updateDoc(doc(db, "products", id), {
        name: form.name.trim(),
        description: form.description.trim(),
        category: form.category,
        applications: form.applications.split(",").map((s) => s.trim()).filter(Boolean),
        badge: form.badge.trim(),
        imageUrl,
        updatedAt: serverTimestamp(),
      });

      router.push("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Failed to update product.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3" />
          <div className="bg-white border border-gray-200 p-8 space-y-4">
            {[...Array(5)].map((_, i) => <div key={i} className="h-10 bg-gray-200 rounded" />)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/products" className="text-gray-400 hover:text-gray-700 transition-colors">
          ← Products
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-2xl font-black text-gray-900">Edit Product</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
          />
        </div>

        {/* Category — fetched from Firebase */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Category <span className="text-red-500">*</span>
          </label>
          {categories.length === 0 ? (
            <div className="border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              No categories found.{" "}
              <Link href="/admin/categories/new" className="font-semibold underline">
                Add a category first.
              </Link>
            </div>
          ) : (
            <select
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 bg-white"
            >
              {/* Keep existing value if category was deleted */}
              {form.category && !categories.find((c) => c.slug === form.category) && (
                <option value={form.category}>{form.category} (removed category)</option>
              )}
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Key Applications</label>
          <input
            type="text"
            value={form.applications}
            onChange={(e) => setForm({ ...form, applications: e.target.value })}
            placeholder="Concrete, Glass, Metal (comma-separated)"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Badge <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={form.badge}
            onChange={(e) => setForm({ ...form, badge: e.target.value })}
            placeholder="e.g. Best Seller"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 file:mr-4 file:py-1 file:px-3 file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
          {imagePreview && (
            <div className="mt-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imagePreview} alt="Preview" className="h-32 w-auto object-cover border border-gray-200" />
              <p className="text-xs text-gray-400 mt-1">Current image. Upload a new file to replace it.</p>
            </div>
          )}
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 font-bold text-sm text-gray-900 disabled:opacity-60"
            style={{ backgroundColor: "#FFC510" }}
          >
            {saving ? "Saving…" : "Update Product"}
          </button>
          <Link
            href="/admin/products"
            className="px-6 py-2.5 font-semibold text-sm text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
