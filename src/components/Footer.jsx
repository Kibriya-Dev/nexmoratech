import "./Footer.css";
import logo from "../assets/logo.png";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// TODO: replace with your real social links (or remove any you don't use)
const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="NEXMORA TECH" className="footer-logo" />
            <p className="footer-tagline">NEXT GEN TECH</p>
            <p className="footer-description">
              A technology company founded by five friends, building modern
              websites, applications and digital solutions for growing
              businesses.
            </p>
          </div>

          <div className="footer-links">
            <span className="footer-heading">Quick Links</span>
            {quickLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-links">
            <span className="footer-heading">Connect</span>
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} NEXMORA TECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;