"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { collection, addDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { Category } from "@/lib/types";

export default function NewProductPage() {
  const router = useRouter();
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
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const q = query(collection(db, "categories"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Category));
        setCategories(data);
        if (data.length > 0) setForm((f) => ({ ...f, category: data[0].slug }));
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.category) { alert("Please select a category."); return; }
    setSaving(true);
    try {
      let imageUrl = "";
      if (imageFile) {
        const storageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, "products"), {
        name: form.name.trim(),
        description: form.description.trim(),
        category: form.category,
        applications: form.applications.split(",").map((s) => s.trim()).filter(Boolean),
        badge: form.badge.trim(),
        imageUrl,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      router.push("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Failed to save product. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/products" className="text-gray-400 hover:text-gray-700 transition-colors">
          ← Products
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-2xl font-black text-gray-900">Add New Product</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Sikaflex® PRO-3"
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
                Add a category first
              </Link>{" "}
              before adding products.
            </div>
          ) : (
            <select
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 bg-white"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
            placeholder="Describe the product, its properties and benefits…"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 resize-none"
          />
        </div>

        {/* Applications */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Key Applications
          </label>
          <input
            type="text"
            value={form.applications}
            onChange={(e) => setForm({ ...form, applications: e.target.value })}
            placeholder="Concrete, Glass, Metal, Timber (comma-separated)"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
          />
          <p className="text-xs text-gray-400 mt-1">Separate applications with commas</p>
        </div>

        {/* Badge */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Badge <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={form.badge}
            onChange={(e) => setForm({ ...form, badge: e.target.value })}
            placeholder="e.g. Best Seller, Popular, New"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Product Image
          </label>
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
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={saving || categories.length === 0}
            className="px-6 py-2.5 font-bold text-sm text-gray-900 disabled:opacity-60"
            style={{ backgroundColor: "#FFC510" }}
          >
            {saving ? "Saving…" : "Save Product"}
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
