import "./About.css";

const principles = [
  {
    title: "Direct access",
    description:
      "You work with the people actually building your product, not an account manager relaying messages.",
  },
  {
    title: "Built to last",
    description:
      "Clean, documented code that your next developer can pick up without guessing.",
  },
  {
    title: "Transparent process",
    description:
      "Regular updates in plain language, so you always know where your project stands.",
  },
  {
    title: "Right-sized solutions",
    description:
      "We build what your business needs now, not an over-engineered platform you'll never fully use.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-intro">
          <span className="about-badge">Who we are</span>

          <h2 className="about-title">
            A technology company built by five friends who wanted to build it right.
          </h2>

          <p className="about-text">
            NEXMORA TECH was founded by five friends with backgrounds across
            software engineering, design and digital marketing. We started
            the company to build well-engineered digital products for
            businesses that are ready to invest in their online presence.
          </p>

          <p className="about-text">
            We're a new company, and we work like it — closely, carefully,
            and without the layers that slow larger agencies down. Every
            project gets our full attention from first call to launch.
          </p>
        </div>

        <div className="about-principles">
          {principles.map((principle) => (
            <div className="principle" key={principle.title}>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;