import "./Process.css";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, your users and what the project actually needs to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and visual design come first, so you see and approve the direction before any code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop in stages with regular check-ins, so you're never waiting weeks to see progress.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy, test on real devices, and stay available for fixes and updates after launch.",
  },
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="process-container">
        <div className="process-header">
          <span className="process-badge">How we work</span>
          <h2 className="process-title">A straightforward process, start to finish.</h2>
          <p className="process-description">
            No black box. You know what phase your project is in and what
            comes next, at every point.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;