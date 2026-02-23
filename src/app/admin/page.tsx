"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ products: 0, blogs: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [productsSnap, blogsSnap] = await Promise.all([
          getDocs(collection(db, "products")),
          getDocs(collection(db, "blogs")),
        ]);
        setCounts({ products: productsSnap.size, blogs: blogsSnap.size });
      } catch (err) {
        console.error("Error fetching counts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCounts();
  }, []);

  const stats = [
    {
      label: "Total Products",
      value: counts.products,
      icon: "📦",
      href: "/admin/products",
      color: "#FFC510",
    },
    {
      label: "Blog Posts",
      value: counts.blogs,
      icon: "📝",
      href: "/admin/blogs",
      color: "#D50000",
    },
  ];

  const quickActions = [
    { label: "Add New Product", href: "/admin/products/new", icon: "➕", desc: "Add a product to the catalog" },
    { label: "Write Blog Post", href: "/admin/blogs/new", icon: "✏️", desc: "Publish a new blog article" },
    { label: "View Products Page", href: "/products", icon: "🔗", desc: "See the live products page", external: true },
    { label: "View Blog Page", href: "/blog", icon: "🌐", desc: "See the live blog page", external: true },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back. Here&apos;s an overview of your content.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-5 mb-10">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white p-6 border border-gray-200 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">{stat.icon}</span>
              <div
                className="w-2 h-10"
                style={{ backgroundColor: stat.color }}
              />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-1">
              {loading ? <span className="animate-pulse bg-gray-200 rounded w-8 h-8 inline-block" /> : stat.value}
            </div>
            <div className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors">
              {stat.label}
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-base font-bold text-gray-700 mb-4 uppercase tracking-wider text-xs">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 bg-white p-5 border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all group"
            >
              <span className="text-2xl">{action.icon}</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm group-hover:text-yellow-700 transition-colors">
                  {action.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{action.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
