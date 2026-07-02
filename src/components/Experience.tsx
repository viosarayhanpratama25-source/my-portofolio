"use client";

import { useState } from "react";

const experiences = [
  {
    date: "May 2025 – Jun 2025",
    role: "Basic Web Application Developer",
    company: "Universitas Gunadarma — Short Course Program",
    achievements: [
      "Built a full-stack web application using HTML, CSS, JavaScript, and PHP",
      "Designed and implemented a MySQL relational database schema",
      "Applied UI/UX principles to create user-friendly interfaces",
      "Completed system planning, database setup, and front-end implementation phases",
    ],
  },
  {
    date: "Sep 2024 – Dec 2024",
    role: "Web Developer & UI/UX Designer",
    company: "Celerates — Kampus Merdeka MSIB Program",
    achievements: [
      "Led frontend development of a JobFlow e-learning platform used by 200+ users",
      "Implemented Google OAuth authentication and multi-role admin dashboard",
      "Deployed production app to Ubuntu server with PM2, achieving 97% uptime",
      "Reduced UI bug reports by 35% through iterative Figma prototyping sessions",
      "Mentored 2 junior team members on React best practices and Git workflow",
    ],
  },
  {
    date: "2021 – Present",
    role: "Fundamental Frontend Web Development",
    company: "CodingStudio — Self-paced Online Course",
    achievements: [
      "Mastered HTML5, CSS3, JavaScript fundamentals and DOM manipulation",
      "Learned responsive design with Bootstrap and CSS Grid/Flexbox",
      "Practiced version control using Git and GitHub collaboration workflows",
    ],
  },
  {
    date: "2021 – Present",
    role: "S1 Teknik Informatika",
    company: "Universitas Gunadarma",
    achievements: [
      "Focused on software engineering, algorithms, and database systems",
      "Completed thesis project on NLP-based news article summarization using T5",
      "Active participant in campus web development and programming communities",
    ],
  },
];

const certificates = [
  {
    title: "Full-Stack Web Development",
    issuer: "CodingStudio",
    date: "Aug 2024",
    image: "/img/poster.png", 
    link: "#",
  },
  {
    title: "React & Next.js Advanced Concepts",
    issuer: "Celerates",
    date: "Nov 2024",
    image: "/img/poster2.png", 
    link: "#",
  },
  {
    title: "UI/UX Design for Web Applications",
    issuer: "Kampus Merdeka",
    date: "Oct 2024",
    image: "/img/poster3.png", 
    link: "#",
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="section exp-section" id="experience">
      <div className="section-container">
        <div className="section-label">Journey</div>
        <h2 className="section-title observe">Experience &amp; Sertifikat</h2>
        <p className="section-desc observe">
          My professional path, continuous learning journey, and achievements.
        </p>

        <div className="tab-nav observe">
          <button 
            className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experience & Education
          </button>
          <button 
            className={`tab-btn ${activeTab === "certificates" ? "active" : ""}`}
            onClick={() => setActiveTab("certificates")}
          >
            Sertifikat
          </button>
        </div>

        {activeTab === "experience" && (
          <div className="timeline">
            {experiences.map((exp, i) => (
              <div
                className="timeline-item observe visible"
                key={exp.role}
                style={{ transitionDelay: `${i * 100}ms` } as React.CSSProperties}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-date">{exp.date}</div>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
                <ul className="timeline-achievements">
                  {exp.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="certificates-grid">
            {certificates.map((cert, i) => (
              <div 
                className="certificate-card observe visible" 
                key={cert.title}
                style={{ transitionDelay: `${i * 100}ms` } as React.CSSProperties}
              >
                <div className="certificate-image-wrapper">
                  <img src={cert.image} alt={cert.title} className="certificate-img" />
                </div>
                <div className="certificate-content">
                  <div className="certificate-issuer">{cert.issuer}</div>
                  <h3 className="certificate-title">{cert.title}</h3>
                  <div className="certificate-date">{cert.date}</div>
                  <a href={cert.link} className="certificate-link">
                    View Credential
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
