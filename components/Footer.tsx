// export default function Footer() {
//   return (
//     <footer className="bg-altiusNavy text-white py-8 text-center border-t border-altiusGold/20">
//       <p className="font-serif text-lg mb-2">Altius Education Inc.</p>
//       <p className="text-altiusGold tracking-widest text-xs uppercase mb-4">Learn Higher. Achieve Greater.</p>
//       <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
//     </footer>
//   );
// }
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-altiusNavy text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Grid: Multi-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
          <div className="relative w-40 h-15 shrink-0">
            <Image 
              src="/logo.png" 
              alt="Altius Logo" 
              fill 
              className="object-contain object-left"
            />
          </div>
        </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering students through exceptional mentorship, rigorous academic programs, and a commitment to lifelong success.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-altiusGold hover:bg-altiusBlue hover:text-white transition cursor-pointer">f</span>
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-altiusGold hover:bg-altiusBlue hover:text-white transition cursor-pointer">in</span>
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-altiusGold hover:bg-altiusBlue hover:text-white transition cursor-pointer">ig</span>
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-altiusGold hover:bg-altiusBlue hover:text-white transition cursor-pointer">yt</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-altiusGold">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-altiusGold transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-altiusGold transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-altiusGold transition">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-altiusGold transition">Admissions</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-altiusGold">Programs</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/#courses" className="hover:text-altiusGold transition">Foundation (8th-10th)</Link></li>
              <li><Link href="/#courses" className="hover:text-altiusGold transition">Advanced Test Prep</Link></li>
              <li><Link href="/#courses" className="hover:text-altiusGold transition">Board Exam Excellence</Link></li>
              <li><Link href="/#courses" className="hover:text-altiusGold transition">Mentorship Sessions</Link></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-altiusGold">Reach Us</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>123 Education Hub, Main Street</li>
              <li>City, State - 123456</li>
              <li className="text-white font-medium">+91 98765 43210</li>
              <li className="text-white font-medium">info@altiuseducation.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Altius Education. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}