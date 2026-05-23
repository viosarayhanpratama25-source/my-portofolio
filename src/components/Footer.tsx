const socialLinks = [
  { href: "mailto:viosa.rayhan@gmail.com", icon: "bx bx-envelope", label: "Email" },
  { href: "https://www.linkedin.com/in/viosa-rayhan", icon: "bx bxl-linkedin", label: "LinkedIn" },
  { href: "https://github.com/viosa-rayhan", icon: "bx bxl-github", label: "GitHub" },
  { href: "https://instagram.com/viosa.rayhan", icon: "bx bxl-instagram", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <p className="footer-copy">
          &copy; 2025 <strong>Viosa Rayhan Pratama</strong>. Built with ❤️ and Next.js.
        </p>
        <div className="footer-social">
          {socialLinks.map((sl) => (
            <a
              key={sl.label}
              href={sl.href}
              aria-label={sl.label}
              target={sl.href.startsWith("mailto") ? undefined : "_blank"}
              rel={sl.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            >
              <i className={sl.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
