import AboutHero from '@/components/about/AboutHero';
import ProgramSteps from '@/components/about/ProgramSteps';
import VisionSection from '@/components/about/VisionSection';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <div>
        <Navbar />
        <AboutHero />
        <ProgramSteps />
        <VisionSection />
        <LeadershipTeam />
      </div>
      <Footer />
    </main>
  );
}