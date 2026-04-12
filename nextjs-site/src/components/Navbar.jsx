"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Abroad", href: "#abroad" },
  { label: "Programs", href: "#programs" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const navHeight =
        window.innerWidth >= 1024 ? 80 : window.innerWidth >= 768 ? 72 : 64;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar-container">
        <Link href="/" className="logo" aria-label="Ideal NEET Academy Home">
          <Image
            src="/images/neet_logo.jpeg"
            alt="Ideal NEET Academy Logo"
            width={44}
            height={44}
            className="logo-img"
            priority
          />
        </Link>

        <ul className={`nav-links ${isOpen ? "active" : ""}`} role="menubar">
          {navItems.map((item) => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                role="menuitem"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/917358603244?text=Hi%2C%20I%20would%20like%20to%20study%20or%20enquire%20about%20your%20academy."
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enroll now via WhatsApp"
        >
          Enroll Now
        </a>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
}
