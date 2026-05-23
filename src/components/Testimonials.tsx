const testimonials = [
  {
    quote:
      "Viosa has an exceptional ability to translate complex design concepts into clean, functional code. His attention to detail in UI implementation and willingness to go the extra mile made him a standout contributor in our MSIB cohort.",
    name: "Muhammad Rizki",
    role: "Team Lead — Celerates MSIB Program",
    initials: "MR",
  },
  {
    quote:
      "Working with Viosa was a great experience. He consistently delivered well-structured code and proactively identified edge cases before they became issues. His React and Node.js skills helped the team ship features 20% faster in our final sprint.",
    name: "Andi Susanto",
    role: "Senior Developer — Project Collaborator",
    initials: "AS",
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-container">
        <div className="section-label">Social Proof</div>
        <h2 className="section-title observe">What People Say</h2>
        <p className="section-desc observe">
          Feedback from colleagues and mentors I&apos;ve had the privilege of working with.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card observe" key={t.name}>
              <div className="quote-icon">&quot;</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
