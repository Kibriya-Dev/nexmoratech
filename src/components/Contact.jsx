import { useState } from "react";
import "./Contact.css";

const services = [
  "Software Development",
  "Web Development",
  "Custom Web Applications",
  "Digital Marketing",
  "UI / UX Design",
  "E-Commerce Development",
  "AI & Technology Solutions",
  "Website Maintenance & Support",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: connect this to an email service (e.g. Formspree, EmailJS)
    // or your own backend once you're ready to receive real messages.
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-badge">Get in touch</span>
          <h2 className="contact-title">
            Have a project in mind?
            <br />
            Let's build something great together.
          </h2>
          <p className="contact-description">
            Tell us a bit about what you're looking to build. We'll get back
            to you to talk through the details and next steps.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="detail-label">Email</span>
              <a href="mailto:noxmoratech@gmail.com" className="detail-value detail-link">
                noxmoratech@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials">
            <span className="contact-socials-label">Follow us</span>
            <div className="contact-socials-row">
              <a
                href="https://www.instagram.com/nexmoratech/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61594880300685"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://www.decodelabs.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="DecodeLabs"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                DecodeLabs
              </a>
              <a
                href="https://www.internee.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="Internee.pk"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <line x1="12" y1="12" x2="12" y2="17" />
                  <line x1="9" y1="14.5" x2="15" y2="14.5" />
                </svg>
                Internee.pk
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option value={service} key={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send message
          </button>

          {submitted && (
            <p className="form-success">
              Thanks — your message has been received. We'll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;