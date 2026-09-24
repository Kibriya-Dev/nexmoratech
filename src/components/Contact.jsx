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
            {/* TODO: replace with your real contact info */}
            <div className="contact-detail">
              <span className="detail-label">Email</span>
              <span className="detail-value">nexmoratech@gmail.com</span>
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