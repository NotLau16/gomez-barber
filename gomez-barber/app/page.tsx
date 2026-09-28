import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GalleryShowcase from "@/components/GalleryShowcase";
import LocationHours from "@/components/LocationHours";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GalleryShowcase />
        <LocationHours />
        <Testimonials />
        <FAQ />

        <div className="barber-stripes h-1.5 w-full opacity-70" aria-hidden="true" />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
