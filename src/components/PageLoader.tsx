"use client";

import { useEffect, useRef } from "react";

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;
    // Prevent scroll during loading
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      loader.classList.add("loader-hidden");
      document.body.style.overflow = "";
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-loader" ref={loaderRef}>
      <div className="loader-logo">
        <span>H</span>an.dev
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
    </div>
  );
}
