"use client";

import { useState, FormEvent } from "react";

const contactLinks = [
  {
    href: "mailto:viosa.rayhan@gmail.com",
    iconStyle: { background: "rgba(255,107,0,0.15)", color: "var(--accent)" },
    iconClass: "bx bx-envelope",
    label: "Email",
    value: "viosa.rayhan@gmail.com",
    tooltip: "Send me an email",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/viosa-rayhan",
    iconStyle: { background: "rgba(10,102,194,0.15)", color: "#0a66c2" },
    iconClass: "bx bxl-linkedin",
    label: "LinkedIn",
    value: "viosa-rayhan",
    tooltip: "Connect on LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/viosa-rayhan",
    iconStyle: { background: "rgba(255,255,255,0.08)", color: "#fff" },
    iconClass: "bx bxl-github",
    label: "GitHub",
    value: "viosa-rayhan",
    tooltip: "View my GitHub",
    external: true,
  },
  {
    href: "https://instagram.com/viosa.rayhan",
    iconStyle: { background: "rgba(228,64,95,0.15)", color: "#e4405f" },
    iconClass: "bx bxl-instagram",
    label: "Instagram",
    value: "@viosa.rayhan",
    tooltip: "Follow on Instagram",
    external: true,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  };

  return (
    <section className="section" id="contact" style={{ background: "var(--bg-2)" }}>
      <div className="section-container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title observe">Let&apos;s Work Together</h2>
        <div className="contact-grid">
          <div className="contact-info observe observe-left">
            <h3>Open to opportunities</h3>
            <p>
              Whether you have a project in mind, want to collaborate, or just
              want to say hi — my inbox is always open. I&apos;ll try my best to
              get back to you within 24 hours!
            </p>
            <div className="contact-links">
              {contactLinks.map((cl) => (
                <a
                  key={cl.label}
                  href={cl.href}
                  className="contact-link"
                  target={cl.external ? "_blank" : undefined}
                  rel={cl.external ? "noopener noreferrer" : undefined}
                  data-tooltip={cl.tooltip}
                >
                  <div className="contact-link-icon" style={cl.iconStyle}>
                    <i className={cl.iconClass}></i>
                  </div>
                  <div>
                    <div className="contact-link-label">{cl.label}</div>
                    <div className="contact-link-value">{cl.value}</div>
                  </div>
                  <i className="bx bx-chevron-right contact-link-arrow"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap observe observe-right">
            {status === "sent" ? (
              <div className="form-success">
                <div className="success-checkmark">
                  <svg viewBox="0 0 52 52" className="checkmark-svg">
                    <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark-path" fill="none" d="M14 27l8 8 16-16" />
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  className="btn-secondary"
                  style={{ marginTop: "1rem" }}
                  onClick={() => setStatus("idle")}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form id="contact-form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="inp_name" className="form-label">Name</label>
                    <input type="text" id="inp_name" className="form-input" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inp_email" className="form-label">Email</label>
                    <input type="email" id="inp_email" className="form-input" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inp_subject" className="form-label">Subject</label>
                  <input type="text" id="inp_subject" className="form-input" placeholder="Project inquiry, collaboration..." />
                </div>
                <div className="form-group">
                  <label htmlFor="inp_message" className="form-label">Message</label>
                  <textarea
                    id="inp_message"
                    className="form-textarea"
                    placeholder="Tell me about your project or how I can help..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <i className="bx bx-loader-alt btn-spinner"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bx bx-send"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
