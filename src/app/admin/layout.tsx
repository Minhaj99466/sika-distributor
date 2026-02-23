"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "📊" },
  { label: "Products", href: "/admin/products", icon: "📦" },
  { label: "Categories", href: "/admin/categories", icon: "🏷️" },
  { label: "Blog Posts", href: "/admin/blogs", icon: "📝" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (pathname === "/admin/login") {
        setChecked(true);
        return;
      }
      const auth = localStorage.getItem("admin_auth");
      if (!auth) {
        router.replace("/admin/login");
      } else {
        setChecked(true);
      }
    };
    checkAuth();
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.replace("/admin/login");
  };

  if (!checked) return null;

  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 z-30 flex flex-col transition-transform duration-200 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#1a1a1a" }}
      >
        {/* Logo */}
        <div className="p-6 border-b" style={{ borderColor: "#333" }}>
          <Link href="/admin" className="flex items-center gap-3" onClick={() => setSidebarOpen(false)}>
            <div
              style={{ backgroundColor: "#FFC510" }}
              className="text-gray-900 font-black text-lg px-2 py-1 tracking-tight"
            >
              SIKA
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-none">PARTNER PRO</div>
              <div style={{ color: "#FFC510" }} className="text-xs font-semibold tracking-widest uppercase leading-none mt-0.5">
                Admin
              </div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
                style={isActive ? { backgroundColor: "#FFC510" } : {}}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t space-y-2" style={{ borderColor: "#333" }}>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <span>🌐</span> View Website
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:text-red-400 transition-colors w-full text-left"
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="md:hidden bg-white border-b border-gray-200 px-6 h-14 flex items-center justify-between shrink-0">
          <button
            className="md:hidden p-1 text-gray-600"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </header>

        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
