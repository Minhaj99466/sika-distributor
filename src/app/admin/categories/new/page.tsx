"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

function toSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const PRESET_COLORS = [
  "#FFC510", "#D50000", "#2d7d2d", "#0066CC",
  "#7B2FBE", "#E65100", "#00838F", "#37474F",
];

const PRESET_ICONS = ["🔗", "🏗️", "🏠", "💧", "🔧", "🏭", "🌿", "⚡", "🛡️", "🔬"];

export default function NewCategoryPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    icon: "🔗",
    accentColor: "#FFC510",
  });

  const handleNameChange = (name: string) => {
    setForm((f) => ({ ...f, name, slug: toSlug(name) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.slug) return;
    setSaving(true);
    try {
      await addDoc(collection(db, "categories"), {
        slug: form.slug,
        name: form.name.trim(),
        description: form.description.trim(),
        icon: form.icon,
        accentColor: form.accentColor,
        createdAt: serverTimestamp(),
      });
      router.push("/admin/categories");
    } catch (err) {
      console.error(err);
      alert("Failed to save category. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/categories" className="text-gray-400 hover:text-gray-700 transition-colors">
          ← Categories
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-2xl font-black text-gray-900">Add New Category</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Category Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="e.g. Adhesive Solutions"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            URL Slug <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: toSlug(e.target.value) })}
            placeholder="e.g. adhesive-solutions"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 font-mono"
          />
          <p className="text-xs text-gray-400 mt-1">
            Auto-generated from name. Used in the URL: /products/<strong>{form.slug || "slug"}</strong>
          </p>
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
            rows={3}
            placeholder="Brief description of this product category…"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 resize-none"
          />
        </div>

        {/* Icon */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Icon (Emoji)</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {PRESET_ICONS.map((icon) => (
              <button
                key={icon}
                type="button"
                onClick={() => setForm({ ...form, icon })}
                className={`text-2xl p-2 border-2 transition-colors ${
                  form.icon === icon ? "border-yellow-400 bg-yellow-50" : "border-gray-200 hover:border-gray-400"
                }`}
              >
                {icon}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={form.icon}
            onChange={(e) => setForm({ ...form, icon: e.target.value })}
            placeholder="Or type any emoji"
            className="w-28 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 text-center"
          />
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Accent Color</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {PRESET_COLORS.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setForm({ ...form, accentColor: color })}
                className={`w-8 h-8 border-2 transition-colors ${
                  form.accentColor === color ? "border-gray-800 scale-110" : "border-transparent hover:border-gray-400"
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={form.accentColor}
              onChange={(e) => setForm({ ...form, accentColor: e.target.value })}
              className="w-10 h-10 border border-gray-300 cursor-pointer p-0.5"
            />
            <input
              type="text"
              value={form.accentColor}
              onChange={(e) => setForm({ ...form, accentColor: e.target.value })}
              placeholder="#FFC510"
              className="w-28 border border-gray-300 px-3 py-2 text-sm font-mono focus:outline-none focus:border-yellow-400"
            />
            <span className="text-sm text-gray-500">Preview:</span>
            <span
              className="px-3 py-1 text-white text-xs font-bold"
              style={{ backgroundColor: form.accentColor }}
            >
              {form.name || "Category"}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 font-bold text-sm text-gray-900 disabled:opacity-60"
            style={{ backgroundColor: "#FFC510" }}
          >
            {saving ? "Saving…" : "Save Category"}
          </button>
          <Link
            href="/admin/categories"
            className="px-6 py-2.5 font-semibold text-sm text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
