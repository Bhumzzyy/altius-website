import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Courses from "@/components/home/Courses";
import Features from "@/components/home/Features";
import Gallery from "@/components/home/Gallery";
import TestimonialsFAQ from "@/components/home/TestimonialsFAQ"; // <-- Combined Section

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <Stats />
        <Courses />
        <Features />
        <Gallery />
        <TestimonialsFAQ /> {/* <-- Render Combined Section */}
      </div>
      <Footer />
    </main>
  );
}