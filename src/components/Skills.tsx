"use client";

import React from "react";
import Image from "next/image";

type Skill =
  | { type?: "icon"; icon: string; name: string }
  | { type: "img"; src: string; name: string };

export default function Skills() {
  const skills: Skill[] = [
    { icon: "bx bxl-react", name: "React.js" },
    { icon: "bx bx-rocket", name: "Next.js" },
    { icon: "bx bxl-typescript", name: "TypeScript" },
    { icon: "bx bxl-tailwind-css", name: "Tailwind CSS" },
    {
      type: "img",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      name: "Laravel",
    },
    { icon: "bx bxl-nodejs", name: "Node.js" },
    { icon: "bx bxl-postgresql", name: "PostgreSQL" },
    { icon: "bx bx-cube", name: "MongoDB" },
    { icon: "bx bxl-docker", name: "Docker" },
    { icon: "bx bx-slider-alt", name: "Odoo Customization" },
    { icon: "bx bx-wrench", name: "iTop Customization" },
    { icon: "bx bxl-google", name: "Google Workspace" },
    { icon: "bx bxl-figma", name: "Figma" },
    { icon: "bx bxl-wordpress", name: "WordPress" },
  ];

  return (
    <section className="section tech-section" id="skills">
      <div className="section-container">
        <div className="section-label">Tech Stack</div>
        <h2 className="section-title observe">Skills &amp; Technologies</h2>
        <p className="section-desc observe">
          A curated set of tools and technologies I use to build modern, scalable web applications.
        </p>
        <div className="skills-horizontal">
          {skills.map((skill, i) => (
            <div
              className="skills-tile observe"
              key={skill.name}
              style={{ transitionDelay: `${i * 25}ms` } as React.CSSProperties}
            >
              {skill.type === "img" ? (
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={22}
                  height={22}
                  className="skills-tile-img"
                />
              ) : (
                <i className={`${(skill as { icon: string }).icon} skills-tile-icon`}></i>
              )}
              <span className="skills-tile-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
