"use client";

import { useEffect, useRef } from "react";

export default function StatCounter() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counters = el.querySelectorAll<HTMLElement>("[data-target]");

    const animateCount = (el: HTMLElement) => {
      const target = parseInt(el.dataset.target || "0", 10);
      const duration = 1600;
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
        el.textContent = String(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = String(target);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((c) => animateCount(c));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { target: 3, suffix: "+", label: "Projects Shipped" },
    { target: 2, suffix: "+", label: "Years Learning" },
    { target: 5, suffix: "+", label: "Users Served" },
    { target: 97, suffix: "%", label: "Uptime Achieved" },
  ];

  return (
    <div className="stat-counter-grid" ref={ref}>
      {stats.map((s) => (
        <div className="stat-card" key={s.label}>
          <div className="stat-number">
            <span data-target={s.target}>0</span>
            <span className="stat-suffix">{s.suffix}</span>
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
