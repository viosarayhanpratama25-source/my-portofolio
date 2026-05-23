"use client";

import { useEffect } from "react";

export default function ObserveProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once visible, we can optionally stop observing to improve scroll performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    // Keep track of observed elements to avoid observing multiple times
    const observedElements = new Set<Element>();

    const observeNewElements = () => {
      const elements = document.querySelectorAll(".observe");
      elements.forEach((el) => {
        if (!observedElements.has(el)) {
          observer.observe(el);
          observedElements.add(el);
        }
      });
    };

    // Run initially for any elements already in the DOM
    observeNewElements();

    // Use MutationObserver to watch for newly added/hydrated DOM elements
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      observedElements.clear();
    };
  }, []);

  return null;
}

