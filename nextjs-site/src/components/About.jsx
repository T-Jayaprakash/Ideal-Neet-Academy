import { BookOpen, Layers, CheckSquare, Users } from "lucide-react";

const advantages = [
  {
    icon: BookOpen,
    title: "Expert Faculty",
    desc: "Highly qualified educators specializing in medical coaching.",
  },
  {
    icon: Layers,
    title: "Study Material",
    desc: "Comprehensive modules covering the complete NMC syllabus.",
  },
  {
    icon: CheckSquare,
    title: "Test Series",
    desc: "Extensive mock exams ensuring exam-day readiness.",
  },
  {
    icon: Users,
    title: "Mentorship",
    desc: "1-on-1 performance tracking and regular doubt solving.",
  },
];

export default function About() {
  return (
    <section className="about section-padding" id="about" aria-label="About Us">
      <div className="page-header">
        <h2>About Us</h2>
        <p className="breadcrumb">
          <a href="#home">Home</a> / About Us
        </p>
      </div>

      <div className="container">
        <div className="about-container">
          <div className="about-text">
            <h2 className="section-title">
              Your Trusted Partner for <br />
              Medical Admissions
            </h2>
            <div className="title-underline" style={{ margin: "0 0 24px 0" }} />
            <p>
              As a premier educational institution in Trichy, Ideal NEET Academy
              serves students with dynamic, high-yield coaching tailored for
              standard medical entrance exams.
            </p>
            <p>
              We provide an ecosystem focused on rigorous practice, smart study
              strategies, and 24/7 doubt resolution, ensuring every student has
              the tools they need to secure a government medical seat.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
          <div className="about-visual">
            <img
              src="/images/students.png"
              alt="Successful NEET Students Batch in Trichy"
              className="about-img"
              loading="lazy"
            />
          </div>
        </div>

        <h3 className="mini-title">Why Choose IDEAL NEET?</h3>
        <div className="advantage-grid">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <article className="advantage-card" key={idx}>
                <div className="adv-icon">
                  <Icon size={32} />
                </div>
                <h4>{adv.title}</h4>
                <p>{adv.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
