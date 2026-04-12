import Image from "next/image";

const features = [
  {
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400",
    title: "Expert & Experienced Faculty",
    desc: "Learn from the best mentors in the industry.",
    alt: "Expert NEET Faculty at Ideal Academy Trichy",
  },
  {
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400",
    title: "Small Batch Sizes",
    desc: "Personalized attention for every individual student.",
    alt: "Small class at Ideal NEET Academy",
  },
  {
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400",
    title: "Daily Mock Tests & Analysis",
    desc: "Regular practice to build exam-winning confidence.",
    alt: "Mock test preparation for NEET",
  },
  {
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400",
    title: "Personalized Mentorship",
    desc: "One-on-one guidance to track your progress.",
    alt: "Mentorship session for NEET students",
  },
  {
    img: "/images/fee.jpg",
    title: "Affordable Fee Structure",
    desc: "Quality education accessible to everyone.",
    alt: "Affordable NEET Coaching Fee in Tiruchirappalli",
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
    title: "Positive Learning Environment",
    desc: "Motivating atmosphere to keep you focused.",
    alt: "Positive learning at Ideal NEET Academy",
  },
  {
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    title: "CCTV Surveillance",
    desc: "24/7 security monitoring for student safety.",
    alt: "CCTV surveillance at academy",
  },
  {
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=400",
    title: "Hostel Facility",
    desc: "Comfortable and secure accommodation for outstation students.",
    alt: "Hostel facility for students",
  },
  {
    img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=400",
    title: "Parking Facility",
    desc: "Ample and safe parking space for staff and students.",
    alt: "Parking facility at academy",
  },
];

export default function Features() {
  return (
    <section
      className="features section-padding"
      id="features"
      aria-label="Why Choose IDEAL NEET Academy"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose IDEAL NEET Academy?</h2>
          <div className="title-underline" />
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <article className="feature-card" key={idx}>
              <img
                src={feature.img}
                alt={feature.alt}
                className="feature-card-img"
                loading="lazy"
                width={400}
                height={220}
              />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
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
