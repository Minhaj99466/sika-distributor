"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Michael T.",
    role: "Project Manager, BuildCo",
    quote:
      "SikaPartner Pro's expertise and fast delivery made our waterproofing project a success. Their technical team was available throughout.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Sarah K.",
    role: "Structural Engineer",
    quote:
      "We've relied on their adhesive solutions for 3 years. Consistently high quality and the team always recommends the right product.",
    rating: 5,
    initial: "S",
  },
  {
    name: "David R.",
    role: "General Contractor",
    quote:
      "The flooring systems we sourced from SikaPartner Pro exceeded client expectations. Competitive pricing with no compromise on quality.",
    rating: 5,
    initial: "D",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
        setSliding(false);
      }, 500);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = testimonials[current];
  const prev = testimonials[(current - 1 + testimonials.length) % testimonials.length];
  const next = testimonials[(current + 1) % testimonials.length];

  return (
    <div className="relative">
      {/* ── Main centered card ── */}
      <div
        className="max-w-3xl mx-auto"
        style={{
          opacity: sliding ? 0 : 1,
          transform: sliding ? "translateY(12px)" : "translateY(0)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <article
          className="relative p-10 md:p-14 border overflow-hidden"
          style={{ backgroundColor: "#0E1628", borderColor: "#1E3A5F" }}
        >
          {/* Sapphire accent bar */}
          <div className="absolute top-0 left-0 h-1 w-full" style={{ backgroundColor: "#2563EB" }} />

          {/* Large quote mark */}
          <div
            className="absolute top-8 right-10 text-8xl font-black leading-none select-none"
            style={{ color: "#1E3A5F", fontFamily: "Georgia, serif" }}
            aria-hidden="true"
          >
            "
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, j) => (
              <svg key={j} className="w-5 h-5" style={{ color: "#3B82F6" }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 relative">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 flex items-center justify-center font-black text-white text-lg shrink-0"
              style={{ backgroundColor: "#2563EB" }}
            >
              {t.initial}
            </div>
            <div>
              <div className="font-bold text-white text-base">{t.name}</div>
              <div className="text-slate-400 text-sm">{t.role}</div>
            </div>
          </div>
        </article>
      </div>

      {/* ── Preview cards (flanking) ── */}
      <div className="mt-6 hidden md:flex gap-5">
        {/* Prev preview */}
        <div
          className="flex-1 p-6 border opacity-40 hover:opacity-60 transition-opacity cursor-default"
          style={{ backgroundColor: "#0A1020", borderColor: "#1E2C42" }}
        >
          <p className="text-slate-400 text-sm italic line-clamp-2">&ldquo;{prev.quote}&rdquo;</p>
          <p className="text-slate-600 text-xs mt-2 font-medium">{prev.name}</p>
        </div>

        {/* Active indicator — center spacer */}
        <div className="flex items-center gap-2 px-4 shrink-0">
          {testimonials.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: i === current ? "4px" : "50%",
                backgroundColor: i === current ? "#2563EB" : "#1E3A5F",
                display: "inline-block",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>

        {/* Next preview */}
        <div
          className="flex-1 p-6 border opacity-40 hover:opacity-60 transition-opacity cursor-default"
          style={{ backgroundColor: "#0A1020", borderColor: "#1E2C42" }}
        >
          <p className="text-slate-400 text-sm italic line-clamp-2">&ldquo;{next.quote}&rdquo;</p>
          <p className="text-slate-600 text-xs mt-2 font-medium">{next.name}</p>
        </div>
      </div>

      {/* Mobile dots only */}
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {testimonials.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              borderRadius: i === current ? "4px" : "50%",
              backgroundColor: i === current ? "#2563EB" : "#1E3A5F",
              display: "inline-block",
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
