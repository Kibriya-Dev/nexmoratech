import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="badge-dot"></span>
            Founded by five engineers who wanted to build better
          </span>

          <h1 className="hero-title">
            We turn ambitious ideas into
            <br />
            software people actually use.
          </h1>

          <p className="hero-description">
            NEXMORA TECH designs and builds websites, applications and digital
            products for companies that are ready to grow. From first
            wireframe to production launch, we handle the engineering so you
            can focus on the business.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start a project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#portfolio" className="btn-secondary">
              See our work
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">5</span>
              <span className="stat-label">Founding engineers</span>
            </div>
            <div className="stat">
              <span className="stat-value">8</span>
              <span className="stat-label">Core services</span>
            </div>
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Custom built</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-glow"></div>

          <svg viewBox="0 0 480 480" className="network-svg">
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FACC15" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FACC15" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
              </linearGradient>
            </defs>

            <circle cx="240" cy="240" r="200" fill="url(#glow)" />
            <circle cx="240" cy="240" r="170" fill="none" stroke="url(#ring)" strokeWidth="1" />
            <circle cx="240" cy="240" r="130" fill="none" stroke="#27272A" strokeWidth="1" />

            <g className="network-lines" stroke="#3F3F46" strokeWidth="1">
              <line x1="240" y1="240" x2="120" y2="140" />
              <line x1="240" y1="240" x2="360" y2="120" />
              <line x1="240" y1="240" x2="380" y2="280" />
              <line x1="240" y1="240" x2="110" y2="320" />
              <line x1="240" y1="240" x2="230" y2="400" />
              <line x1="120" y1="140" x2="360" y2="120" />
              <line x1="380" y1="280" x2="230" y2="400" />
            </g>

            <g className="network-nodes">
              <circle cx="240" cy="240" r="11" fill="#FACC15" />
              <circle cx="120" cy="140" r="6" fill="#FFFFFF" />
              <circle cx="360" cy="120" r="5" fill="#A1A1AA" />
              <circle cx="380" cy="280" r="6" fill="#FFFFFF" />
              <circle cx="110" cy="320" r="5" fill="#A1A1AA" />
              <circle cx="230" cy="400" r="6" fill="#FFFFFF" />
            </g>
          </svg>

          <div className="floating-tag tag-1">Web Development</div>
          <div className="floating-tag tag-2">AI Solutions</div>
          <div className="floating-tag tag-3">UI / UX Design</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;