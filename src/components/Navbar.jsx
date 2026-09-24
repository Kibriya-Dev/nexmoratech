import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        <a href="#home" className="brand">
          <img src={logo} alt="NEXMORA TECH" />
        </a>

        <nav className="nav-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="#contact" className="quote-btn">
            Get Quote
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "menu-toggle-open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="mobile-quote-btn" onClick={() => setMenuOpen(false)}>
          Get Quote
        </a>
      </div>
    </header>
  );
}

export default Navbar;