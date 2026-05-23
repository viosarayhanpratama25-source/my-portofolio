"use client";

import Image from "next/image";

const projects = [
  {
    num: "01 / Project",
    title: "JobFlow — E-Learning Platform",
    problem:
      "Fresh graduates lacked a structured platform to learn industry-ready skills and manage their career journey from a single dashboard.",
    challenge:
      "Implementing secure Google Auth across a multi-role system (admin/student), then deploying reliably to an Ubuntu server with zero downtime. Solved by architecting middleware-based auth guards and a PM2-managed deployment pipeline.",
    tags: ["React.js", "Express.js", "Google Auth", "Multer", "Ubuntu", "Figma"],
    poster: "/img/poster (2).png",
    video: "/img/JobFlow Showcase.mp4",
    liveLink:
      "https://drive.google.com/drive/folders/1j28pm-UupGbPmqRXQIs7bw3QDdIePTvs?usp=sharing",
    reverse: false,
  },
  {
    num: "02 / Project",
    title: "BuburKangYoyo — Food Sales App",
    problem:
      "A local food business needed a digital ordering system to replace manual order-taking and reduce errors in high-volume periods.",
    challenge:
      "Designing a real-time stock management system with PHP and MySQL that stays consistent under concurrent orders. Implemented transaction-based queries to prevent race conditions on inventory updates.",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
    poster: "/img/poster2.png",
    video: "/img/0802.mp4",
    liveLink:
      "https://drive.google.com/drive/folders/1bL44wnz9Xd2Ik1qsY6T1t_Tvrr4ShdHl?usp=sharing",
    reverse: true,
  },
  {
    num: "03 / Project",
    title: "SummaAI — News Article Summarizer",
    problem:
      "Readers were overwhelmed by long news articles. The goal: build a web app that uses AI to summarize Indonesian news in seconds.",
    challenge:
      "Integrating a T5 transformer model into a web pipeline with acceptable latency. Solved by offloading inference to a Python FastAPI backend, reducing average response time by ~60% through caching frequent article patterns.",
    tags: ["Python", "T5 Model", "FastAPI", "JavaScript", "NLP"],
    poster: "/img/poster3.png",
    video: "/img/summa.mp4",
    liveLink:
      "https://drive.google.com/drive/folders/1eph-dA8qRJJttF9mhD4KvRlz6k9Q3Wn4?usp=sharing",
    reverse: false,
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-container">
        <div className="section-label">Featured Work</div>
        <h2 className="section-title observe">Selected Projects</h2>
        <p className="section-desc observe">
          Hand-picked projects showcasing problem-solving, technical depth, and attention to detail.
        </p>
        <div className="projects-list">
          {projects.map((p, i) => (
            <div
              key={p.num}
              className={`project-card${p.reverse ? " reverse" : ""} observe`}
              style={{ transitionDelay: `${i * 150}ms` } as React.CSSProperties}
            >
              <div className="project-media">
                <video
                  poster={p.poster}
                  muted
                  loop
                  preload="none"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget;
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(() => {
                        // Safe to ignore
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                  }}
                >
                  <source src={p.video} type="video/mp4" />
                </video>
                <div className="project-overlay"></div>
                <div className="video-play-badge">
                  <i className="bx bx-play-circle"></i>
                  <span>Hover to Play</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-num-tag">
                  <span className="project-num-line"></span>
                  <span className="project-num-text">{p.num}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <div className="project-problem">
                  <i className="bx bx-help-circle"></i> The Problem
                </div>
                <p className="project-desc">{p.problem}</p>
                <div className="project-challenge">
                  <i className="bx bx-extension"></i>
                  <div>
                    <strong>Challenge:</strong> {p.challenge}
                  </div>
                </div>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn link-btn-primary"
                  >
                    <i className="bx bx-link-external"></i> Live Demo
                  </a>
                  <a href="#" className="link-btn link-btn-ghost">
                    <i className="bx bxl-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
