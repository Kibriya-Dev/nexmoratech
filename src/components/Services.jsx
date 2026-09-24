import "./Services.css";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software built around how your business actually operates, not a one-size-fits-all template.",
    icon: (
      <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" />
    ),
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive websites that hold up on every device and are built to scale as you grow.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </>
    ),
  },
  {
    title: "Custom Web Applications",
    description:
      "Internal tools, dashboards and platforms designed around the workflows your team already uses.",
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, social and paid campaigns built to bring the right people to your site, not just more traffic.",
    icon: (
      <>
        <path d="M4 11v2a2 2 0 002 2h2l5 4V5L8 9H6a2 2 0 00-2 2z" />
        <path d="M18 9a4 4 0 010 6" />
      </>
    ),
  },
  {
    title: "UI / UX Design",
    description:
      "Interfaces designed for clarity first — every screen earns its place by helping the user get something done.",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 9v12" />
      </>
    ),
  },
  {
    title: "E-Commerce Development",
    description:
      "Online stores built for real conversion — fast checkout, clean product pages and easy inventory management.",
    icon: (
      <>
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
        <path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h7.2a2 2 0 002-1.8L20 8H6" />
      </>
    ),
  },
  {
    title: "AI & Technology Solutions",
    description:
      "Practical AI and automation added where it actually saves time, without adding complexity to your stack.",
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2" />
      </>
    ),
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Ongoing updates, monitoring and fixes so your site stays fast, secure and online — without you thinking about it.",
    icon: (
      <>
        <path d="M11 4a7 7 0 106.65 9.15l-3.4-1.13a3 3 0 11-2.27-3.79L13.15 4.9A7 7 0 0011 4z" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-badge">What we do</span>
          <h2 className="services-title">
            A full-stack team, brought together under one company.
          </h2>
          <p className="services-description">
            Each of us focuses on a different part of the stack. Together, we
            cover everything a modern digital product needs, from the first
            line of code to the customer who finally uses it.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <svg
                className="service-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {service.icon}
              </svg>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;