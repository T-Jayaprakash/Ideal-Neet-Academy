import { GraduationCap, FileText, Languages, Plane } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Selection & Admission",
    desc: "Finding the right fit for your medical career.",
  },
  {
    icon: FileText,
    title: "Visa Application Support",
    desc: "End-to-end assistance with documentation.",
  },
  {
    icon: Languages,
    title: "IELTS / Language Prep",
    desc: "Training to excel in required proficiency tests.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Orientation",
    desc: "Guidance for your new journey overseas.",
  },
];

export default function Abroad() {
  return (
    <section
      className="abroad section-padding"
      id="abroad"
      aria-label="Study Medicine Abroad"
    >
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Global Opportunities</span>
          <h2 className="section-title">
            Study Medicine Abroad — We Guide You There
          </h2>
          <p className="section-desc">
            Opening doors to world-class medical universities with recognized
            degrees.
          </p>
        </div>

        <div className="abroad-grid">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article className="abroad-card" key={idx}>
                <div className="card-icon">
                  <Icon size={24} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span className="active" />
          <span />
        </div>
      </div>
    </section>
  );
}
