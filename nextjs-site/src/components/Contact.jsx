"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Foundation (Class 11/12)",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, course, message } = formData;

    let whatsappText = `Hi, I want to get in touch!\n\n`;
    whatsappText += `*Name:* ${name}\n`;
    whatsappText += `*Phone:* ${phone}\n`;
    if (email) whatsappText += `*Email:* ${email}\n`;
    whatsappText += `*Course:* ${course}\n\n`;
    if (message) whatsappText += `*Message:* ${message}`;

    const encodedText = encodeURIComponent(whatsappText);
    window.open(`https://wa.me/917358603244?text=${encodedText}`, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact section-padding" id="contact" aria-label="Contact Us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <div className="title-underline" />
        </div>

        <div className="contact-wrapper">
          <div className="contact-form-box">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="course">Course Interested In</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option>Foundation (Class 11/12)</option>
                  <option>Dropper Batch</option>
                  <option>Crash Course</option>
                  <option>Abroad Studies</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your target"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary full-width">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-box">
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4>Address</h4>
                <p>
                  3rd floor, Bharath Shopping Mall, EVR Rd, opp. to GH, Puthur,
                  Tennur, Tiruchirappalli, Tamil Nadu 620017
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+917358603244">+91 7358603244</a>
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:idealneetacademy@gmail.com">idealneetacademy@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="map-embed">
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=3rd%20floor,%20Bharath%20Shopping%20Mall,%20EVR%20Rd,%20opp.%20to%20GH,%20Puthur,%20Tennur,%20Tiruchirappalli,%20Tamil%20Nadu%20620017&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
              <p>Click to open in Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
