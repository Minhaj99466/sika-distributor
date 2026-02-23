"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function NewBlogPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    tags: "",
    publishedAt: new Date().toISOString().slice(0, 10),
  });

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

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
      let imageUrl = "";
      if (imageFile) {
        const storageRef = ref(storage, `blogs/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const publishedDate = new Date(form.publishedAt);

      await addDoc(collection(db, "blogs"), {
        title: form.title.trim(),
        slug: form.slug.trim() || generateSlug(form.title),
        excerpt: form.excerpt.trim(),
        content: form.content.trim(),
        author: form.author.trim(),
        category: form.category.trim(),
        tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
        imageUrl,
        publishedAt: Timestamp.fromDate(publishedDate),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      router.push("/admin/blogs");
    } catch (err) {
      console.error(err);
      alert("Failed to save blog post. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/blogs" className="text-gray-400 hover:text-gray-700 transition-colors">
          ← Blog Posts
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-2xl font-black text-gray-900">Write New Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Enter blog post title…"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            URL Slug <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 focus-within:border-yellow-400">
            <span className="px-3 py-2.5 text-xs text-gray-400 bg-gray-50 border-r border-gray-300 shrink-0">
              /blog/
            </span>
            <input
              type="text"
              required
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
              placeholder="my-blog-post-title"
              className="flex-1 px-3 py-2.5 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Excerpt <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            rows={2}
            placeholder="A short summary shown on the blog listing page…"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 resize-none"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={14}
            placeholder="Write your blog post content here. You can use basic HTML tags like <p>, <h2>, <strong>, <ul>, <li>, <a>…"
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 resize-y font-mono"
          />
          <p className="text-xs text-gray-400 mt-1">Supports basic HTML for formatting.</p>
        </div>

        {/* Author & Category */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Author <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="e.g. John Anderson"
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category</label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="e.g. Waterproofing Tips"
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
            />
          </div>
        </div>

        {/* Tags & Published At */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tags</label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              placeholder="sika, flooring, tips"
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
            />
            <p className="text-xs text-gray-400 mt-1">Comma-separated</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Publish Date</label>
            <input
              type="date"
              value={form.publishedAt}
              onChange={(e) => setForm({ ...form, publishedAt: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
            />
          </div>
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 file:mr-4 file:py-1 file:px-3 file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
          {imagePreview && (
            <div className="mt-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imagePreview} alt="Preview" className="h-40 w-auto object-cover border border-gray-200" />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 font-bold text-sm text-gray-900 disabled:opacity-60"
            style={{ backgroundColor: "#FFC510" }}
          >
            {saving ? "Publishing…" : "Publish Post"}
          </button>
          <Link
            href="/admin/blogs"
            className="px-6 py-2.5 font-semibold text-sm text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
