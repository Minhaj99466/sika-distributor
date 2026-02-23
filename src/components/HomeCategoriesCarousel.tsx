"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Category } from "@/lib/types";

/* ─── Single card ─────────────────────────────────────────────── */
function CategoryCard({ cat }: { cat: Category }) {
  return (
    <Link href={`/products/${cat.slug}`} className="group block h-full">
      <div className="border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-100/60 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

        {/* Colored top section */}
        <div
          className="relative p-8 flex flex-col items-start"
          style={{ backgroundColor: cat.accentColor, minHeight: "180px" }}
        >
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle,white 1px,transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
          {/* Subtle bottom fade */}
          <div
            className="absolute bottom-0 left-0 w-full h-10"
            style={{ background: "linear-gradient(to bottom,transparent,rgba(0,0,0,0.15))" }}
          />
          <span className="relative text-5xl mb-5 block transition-transform duration-300 group-hover:scale-110">
            {cat.icon}
          </span>
          <h3 className="relative text-xl font-black text-white leading-tight">{cat.name}</h3>
        </div>

        {/* Body */}
        <div className="p-6 bg-white flex flex-col flex-1">
          <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
            {cat.description}
          </p>
          <div
            className="flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all duration-200"
            style={{ color: "#2563EB" }}
          >
            Explore {cat.name}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── Skeleton card ───────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="border border-slate-100 overflow-hidden animate-pulse flex flex-col">
      <div className="h-44 bg-slate-200" />
      <div className="p-6 space-y-3">
        <div className="h-4 bg-slate-200 rounded w-3/4" />
        <div className="h-3 bg-slate-200 rounded w-full" />
        <div className="h-3 bg-slate-200 rounded w-2/3" />
        <div className="h-4 bg-slate-200 rounded w-1/3 mt-4" />
      </div>
    </div>
  );
}

/* ─── Main carousel ───────────────────────────────────────────── */
export default function HomeCategoriesCarousel() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const isHoveredRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Fetch categories from Firebase */
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const q = query(collection(db, "categories"), orderBy("createdAt", "asc"));
        const snap = await getDocs(q);
        setCategories(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Category)));
      } catch (err) {
        console.error("HomeCategoriesCarousel fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  /* Responsive: cards visible at once */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const showCarousel = categories.length > cardsPerView;
  const maxIndex = Math.max(0, categories.length - cardsPerView);

  /* Clamp index when cardsPerView increases (e.g. resize) */
  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  /* Auto-advance every 2 s */
  useEffect(() => {
    if (!showCarousel) return;
    timerRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
      }
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [showCarousel, maxIndex]);

  /* Manual nav — pauses 3 s then resumes */
  const goTo = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    setTimeout(() => {
      timerRef.current = setInterval(() => {
        if (!isHoveredRef.current) {
          setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
        }
      }, 4000);
    }, 5000);
  };

  /* ── translateX formula ──
     Track width  = (N / cardsPerView) × container
     Each card    = (1 / N) × 100% of track = (1 / cardsPerView) × container
     To move by k cards: translateX = -(k / N × 100)% of track ✓  */
  const translateX =
    categories.length > 0
      ? `translateX(-${(currentIndex / categories.length) * 100}%)`
      : "translateX(0)";

  /* Loading skeletons */
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  /* Empty */
  if (categories.length === 0) {
    return (
      <p className="text-center text-slate-400 py-12">
        No categories found. Add categories in the admin panel.
      </p>
    );
  }

  return (
    <div>
      {/* ── Track ── */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
      >
        <div
          style={{
            display: "flex",
            transform: translateX,
            transition: "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)",
            width: `${(categories.length / cardsPerView) * 100}%`,
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              style={{ width: `${(1 / categories.length) * 100}%` }}
              className="px-3"
            >
              <CategoryCard cat={cat} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Controls (only in carousel mode) ── */}
      {showCarousel && (
        <div className="mt-10 flex flex-col items-center gap-4">

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="focus:outline-none transition-all duration-300"
                style={{
                  width: i === currentIndex ? "28px" : "10px",
                  height: "10px",
                  borderRadius: i === currentIndex ? "5px" : "50%",
                  backgroundColor: i === currentIndex ? "#2563EB" : "#CBD5E1",
                }}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="w-10 h-10 flex items-center justify-center border border-slate-200 hover:border-blue-400 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-sm text-slate-400 font-medium min-w-16 text-center">
              {currentIndex + 1} / {maxIndex + 1}
            </span>

            <button
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex === maxIndex}
              className="w-10 h-10 flex items-center justify-center border border-slate-200 hover:border-blue-400 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
