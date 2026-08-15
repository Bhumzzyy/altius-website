import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Courses from "@/components/home/Courses";
import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import TestimonialsFAQ from "@/components/home/Testimonials"; 
import HomeContactBanner from "@/components/home/HomeContactBanner";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <Courses />
        <Stats />
        <About />
        {/* <Gallery /> */}
        <TestimonialsFAQ />
        <FAQ />
        <HomeContactBanner />
      </div>
      <Footer />
    </main>
  );
}