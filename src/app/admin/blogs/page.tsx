"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BlogPost } from "@/lib/types";

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      setPosts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as BlogPost)));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog post? This cannot be undone.")) return;
    setDeleting(id);
    try {
      await deleteDoc(doc(db, "blogs", id));
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete post.");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Blog Posts</h1>
          <p className="text-gray-500 text-sm mt-1">{posts.length} post{posts.length !== 1 ? "s" : ""} published</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm text-gray-900"
          style={{ backgroundColor: "#FFC510" }}
        >
          <span>+</span> Write Post
        </Link>
      </div>

      {loading ? (
        <div className="bg-white border border-gray-200">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-4 p-4 border-b border-gray-100 animate-pulse">
              <div className="w-14 h-14 bg-gray-200 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-3 bg-gray-200 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-white border border-gray-200 text-center py-20">
          <div className="text-5xl mb-4">📝</div>
          <p className="text-gray-500 mb-6">No blog posts yet. Write your first post.</p>
          <Link
            href="/admin/blogs/new"
            className="inline-block px-6 py-3 font-bold text-sm text-gray-900"
            style={{ backgroundColor: "#FFC510" }}
          >
            Write Post
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Post</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 hidden sm:table-cell">Category</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 hidden md:table-cell">Date</th>
                <th className="text-right px-5 py-3 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {post.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-12 h-12 object-cover shrink-0 bg-gray-100"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-xl shrink-0">
                          📰
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-gray-900 line-clamp-1">{post.title}</div>
                        <div className="text-xs text-gray-400 mt-0.5">/{post.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    {post.category ? (
                      <span className="text-xs font-semibold px-2 py-1 bg-yellow-50 text-yellow-800">
                        {post.category}
                      </span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell text-gray-500">
                    {post.publishedAt
                      ? new Date(post.publishedAt.seconds * 1000).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "—"}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-700 transition-colors"
                        title="View post"
                      >
                        View
                      </Link>
                      <Link
                        href={`/admin/blogs/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id!)}
                        disabled={deleting === post.id}
                        className="text-red-500 hover:text-red-700 font-medium transition-colors disabled:opacity-50"
                      >
                        {deleting === post.id ? "…" : "Delete"}
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
