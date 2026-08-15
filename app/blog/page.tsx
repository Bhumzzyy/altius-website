import BlogHero from '@/components/blog/BlogHero';
import BlogLayout from '@/components/blog/BlogLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <div>
        <Navbar />
        <BlogHero />
        <BlogLayout />
      </div>
      <Footer />
    </main>
  );
}