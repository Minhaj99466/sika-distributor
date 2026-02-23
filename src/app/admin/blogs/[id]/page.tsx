"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { doc, getDoc, updateDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { BlogPost } from "@/lib/types";

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function EditBlogPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
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
    imageUrl: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const snap = await getDoc(doc(db, "blogs", id));
        if (!snap.exists()) { router.push("/admin/blogs"); return; }
        const data = snap.data() as BlogPost;
        setForm({
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          content: data.content,
          author: data.author,
          category: data.category || "",
          tags: data.tags?.join(", ") || "",
          publishedAt: data.publishedAt
            ? new Date(data.publishedAt.seconds * 1000).toISOString().slice(0, 10)
            : new Date().toISOString().slice(0, 10),
          imageUrl: data.imageUrl || "",
        });
        if (data.imageUrl) setImagePreview(data.imageUrl);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
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
        const storageRef = ref(storage, `blogs/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      await updateDoc(doc(db, "blogs", id), {
        title: form.title.trim(),
        slug: form.slug.trim() || generateSlug(form.title),
        excerpt: form.excerpt.trim(),
        content: form.content.trim(),
        author: form.author.trim(),
        category: form.category.trim(),
        tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
        imageUrl,
        publishedAt: Timestamp.fromDate(new Date(form.publishedAt)),
        updatedAt: serverTimestamp(),
      });

      router.push("/admin/blogs");
    } catch (err) {
      console.error(err);
      alert("Failed to update post.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3" />
          <div className="bg-white border border-gray-200 p-8 space-y-4">
            {[...Array(6)].map((_, i) => <div key={i} className="h-10 bg-gray-200 rounded" />)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/blogs" className="text-gray-400 hover:text-gray-700 transition-colors">
          ← Blog Posts
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-2xl font-black text-gray-900">Edit Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
          />
        </div>

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
              className="flex-1 px-3 py-2.5 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Excerpt <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            rows={2}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={14}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 resize-y font-mono"
          />
        </div>

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
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category</label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tags</label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              placeholder="Comma-separated"
              className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400"
            />
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

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm file:mr-4 file:py-1 file:px-3 file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
          {imagePreview && (
            <div className="mt-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imagePreview} alt="Preview" className="h-40 w-auto object-cover border border-gray-200" />
              <p className="text-xs text-gray-400 mt-1">Upload a new file to replace.</p>
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
            {saving ? "Saving…" : "Update Post"}
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
