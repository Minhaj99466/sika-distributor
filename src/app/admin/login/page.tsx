"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (password === adminPassword) {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin");
    } else {
      setError("Incorrect password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a00 100%)" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div
            style={{ backgroundColor: "#FFC510" }}
            className="text-gray-900 font-black text-2xl px-3 py-2 tracking-tight"
          >
            SIKA
          </div>
          <div>
            <div className="font-bold text-white text-lg leading-none">PARTNER</div>
            <div style={{ color: "#FFC510" }} className="text-xs font-semibold tracking-widest uppercase leading-none mt-0.5">
              PRO ADMIN
            </div>
          </div>
        </div>

        <div className="bg-white p-8">
          <h1 className="text-2xl font-black text-gray-900 mb-1">Admin Login</h1>
          <p className="text-gray-500 text-sm mb-8">Enter your admin password to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 text-sm"
                style={{ focusRingColor: "#FFC510" } as React.CSSProperties}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 font-bold text-gray-900 transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#FFC510" }}
            >
              {loading ? "Logging in…" : "Login"}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          SikaPartner Pro · Admin Panel
        </p>
      </div>
    </div>
  );
}
