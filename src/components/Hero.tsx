"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import StatCounter from "./StatCounter";

const TYPED_WORDS = ["Web Developer", "Frontend Engineer", "UI/UX Designer", "React Developer"];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setTypedText(word.slice(0, charIndex + 1));
          if (charIndex + 1 === word.length) {
            setTimeout(() => setDeleting(true), 1800);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setTypedText(word.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % TYPED_WORDS.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? 60 : 100
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge observe">
            <span>Available for work</span>
          </div>
          <h1 className="hero-title observe">
            Crafting <span className="gradient-text">Digital</span>
            <br />
            Experiences That
            <br />
            <span className="gradient-text">Matter</span>
          </h1>
          <p className="hero-subtitle observe">
            Hi, I&apos;m <strong>Viosa Rayhan Pratama</strong> —{" "}
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>
              {typedText}
              <span style={{ animation: "blink 1s step-end infinite" }}>|</span>
            </span>
            . I build responsive, accessible, and performant web applications
            with a focus on great user experience.
          </p>
          <div className="hero-actions observe">
            <a href="#projects" className="btn-primary">
              <i className="bx bx-folder-open"></i> View Projects
            </a>
            <a href="/img/pass foto 2.jpg" download="Viosa_Rayhan_CV.pdf" className="btn-secondary">
              <i className="bx bx-download"></i> Download CV
            </a>
          </div>
          <StatCounter />
        </div>

        <div className="hero-visual observe">
          <div className="hero-photo-wrap">
            <div className="hero-photo-glow"></div>
            <Image
              src="/img/icon_image.jpeg"
              alt="Viosa Rayhan Pratama — Frontend Engineer"
              className="hero-photo"
              width={320}
              height={380}
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="hero-card hero-card-code">
              &lt;dev.skill = &quot;fullstack&quot; /&gt;
            </div>
            <div className="hero-card hero-card-status">
              <span className="status-dot"></span>
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
