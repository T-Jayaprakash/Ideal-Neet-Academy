"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const reelsData = [
  {
    src: "/videos/neet_fb.mp4",
    platform: "Facebook",
    iconSrc: "/images/fb_logo.jpg",
    link: "https://www.facebook.com/people/Ideal-neet-academy/61585388948214/",
  },
  {
    src: "/videos/neet_insta.mp4",
    platform: "Instagram",
    iconSrc: "/images/insta_logo.jpg",
    link: "https://www.instagram.com/idealneetacademy/",
  },
];

const Reel = ({ src, platform, iconSrc, link }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => { });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="reel-container">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="reel-video"
      />
      <button
        className="mute-toggle"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      <div className="reel-overlay-bottom">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-view-social"
        >
          <img src={iconSrc} alt="" style={{ width: "16px", height: "16px", borderRadius: "50%" }} /> Watch on {platform}
        </a>
      </div>
    </div>
  );
};

export default function Gallery() {
  return (
    <section className="gallery section-padding" id="gallery" aria-label="Academy Gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Life at Ideal NEET Academy</h2>
          <div className="title-underline" />
        </div>

        <div className="gallery-hero-img">
          <img
            src="/images/neet_class.png"
            alt="State-of-the-art Classroom at Ideal NEET Academy"
            loading="lazy"
          />
        </div>

        <div className="media-stack">
          {reelsData.map((reel, idx) => (
            <Reel key={idx} {...reel} />
          ))}
        </div>
      </div>
    </section>
  );
}
