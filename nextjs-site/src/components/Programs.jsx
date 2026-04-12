const programs = [
  {
    title: "Foundation Batch",
    target: "Class 11 | Class 12",
    features: ["Comprehensive Syllabus", "Weekly Assessments", "Core Subject Focus"],
    waLink:
      "https://wa.me/917358603244?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20the%20Foundation%20Batch",
    popular: false,
  },
  {
    title: "Dropper Batch",
    target: "NEET Repeaters",
    features: [
      "Intensive Mock Tests",
      "Doubt Clearing Sessions",
      "Expert Strategy Sessions",
    ],
    waLink:
      "https://wa.me/917358603244?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Dropper%20Batch",
    popular: true,
  },
  {
    title: "Crash Course",
    target: "Final Revision",
    features: [
      "Short-term Intensive",
      "Previous Year Papers",
      "Quick Tips & Tricks",
    ],
    waLink:
      "https://wa.me/917358603244?text=Hi%2C%20I%20want%20to%20join%20the%20Crash%20Course",
    popular: false,
  },
];

export default function Programs() {
  return (
    <section
      className="section-padding"
      id="programs"
      aria-label="Our Programs"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Programs</h2>
          <div className="title-underline" />
        </div>

        <div className="offers-grid">
          {programs.map((program, idx) => (
            <article
              className={`offer-card ${program.popular ? "popular" : ""}`}
              key={idx}
            >
              {program.popular && (
                <div className="popular-tag">Most Popular</div>
              )}
              <h3>{program.title}</h3>
              <p className="plan-target">{program.target}</p>
              <ul className="plan-features">
                {program.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <a
                href={program.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${program.popular ? "btn-primary" : "btn-secondary"}`}
                aria-label={`Inquire about ${program.title}`}
              >
                Inquire Now
              </a>
            </article>
          ))}
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span className="active" />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
