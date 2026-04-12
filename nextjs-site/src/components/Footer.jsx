import Image from "next/image";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="pre-footer-cta">
        <div className="container">
          <h3>Ready to Crack NEET? Join Ideal Academy Today</h3>
          <div className="pre-footer-btns">
            <a href="#programs" className="btn btn-outline">
              Explore Batch Options
            </a>
            <a
              href="#contact"
              className="btn"
              style={{ background: "var(--white)", color: "var(--cta-coral)" }}
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image
                src="/images/neet_logo.jpeg"
                alt="Ideal NEET Academy"
                width={60}
                height={60}
                className="logo-img mb-2"
                style={{ borderRadius: "8px" }}
              />
              <p>
                Leading coaching institute and student training academy serving
                medical aspirants across Tamil Nadu with complete educational
                support.
              </p>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#programs">Programs</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Our Programs</h4>
              <ul>
                <li>
                  <a href="#programs">Foundation Batch</a>
                </li>
                <li>
                  <a href="#programs">Dropper Batch</a>
                </li>
                <li>
                  <a href="#programs">Crash Course</a>
                </li>
                <li>
                  <a href="#abroad">Abroad Studies</a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>
                  3rd floor, Bharath Shopping Mall, EVR Rd, opp. to GH, Puthur,
                  Tennur, Tiruchirappalli, TN 620017
                </span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} />
                <a href="tel:+917358603244">+91 7358603244</a>
              </div>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/idealneetacademy/"
                  target="_blank"
                  aria-label="Follow on Instagram"
                >
                  <img src="/images/insta_logo.jpg" alt="Instagram" />
                </a>
                <a
                  href="https://www.facebook.com/people/Ideal-neet-academy/61585388948214/"
                  target="_blank"
                  aria-label="Follow on Facebook"
                >
                  <img src="/images/fb_logo.jpg" alt="Facebook" />
                </a>
                <a
                  href="https://wa.me/917358603244"
                  target="_blank"
                  aria-label="Chat on WhatsApp"
                >
                  <img src="/images/footer_what.png" alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ideal NEET Academy. All rights reserved.</p>
            <p style={{ marginTop: "10px" }}>
              Developed by{" "}
              <a
                href="https://javia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Javia
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
