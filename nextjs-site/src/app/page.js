import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Abroad from "@/components/Abroad";
import Programs from "@/components/Programs";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Abroad />
      <Programs />
      <Reviews />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
