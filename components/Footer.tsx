'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-altiusNavy text-white pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Row: Logo & Social Media Circular SVG Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-white/10 gap-6">
          
          {/* Logo Image Placeholder */}
          <div className="bg-white rounded-md relative w-45 h-20 shadow-sm">
            <Image 
              src="/logo.png" 
              alt="Altius Logo" 
              fill 
              className="object-contain p-1"
            />
          </div>

          {/* Social Media Circular SVG Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/10">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/10">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/10">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-altiusBlue transition shadow-sm border border-white/10">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* 5-Column Footer Grid Layout Updated with Specific Program Query Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-10">
          
          {/* Column 1: About Altius */}
          <div className="space-y-3 lg:pr-4">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">About Altius</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Empowering students with academic tutoring, languages, TCF/TEF prep, music, technology, CNC, and skilled trades. Learn Higher. Achieve Greater.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><Link href="/" className="hover:text-altiusGold transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-altiusGold transition">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-altiusGold transition">Our Programs</Link></li>
              <li><Link href="/blog" className="hover:text-altiusGold transition">Blog & Articles</Link></li>
              <li><Link href="/contact" className="hover:text-altiusGold transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Programs (Redirecting to specific program query paths) */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><Link href="/programs?tab=#academic-tutoring" className="hover:text-altiusGold transition">Academic Tutoring</Link></li>
              <li><Link href="/programs?tab=language-programs" className="hover:text-altiusGold transition">Language Programs</Link></li>
              <li><Link href="/programs?tab=tcf-tef-preparation" className="hover:text-altiusGold transition">TCF & TEF Prep</Link></li>
              <li><Link href="/programs?tab=music-programs" className="hover:text-altiusGold transition">Music Programs</Link></li>
              <li><Link href="/programs?tab=cnc-programming" className="hover:text-altiusGold transition">CNC Programming</Link></li>
              <li><Link href="/programs?tab=3d-printing" className="hover:text-altiusGold transition">3D Printing & Tech</Link></li>
              <li><Link href="/programs?tab=welding-trades" className="hover:text-altiusGold transition">Welding & Skilled Trades</Link></li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Reach Us</h4>
            <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Altius Education Centre</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>Contact via Office</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>info@altiuseducation.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Mon - Sat (Support Available)</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Download our Apps */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-altiusGold uppercase tracking-wider">Download Apps</h4>
            <p className="text-gray-300 text-[11px]">Get instant access to learning materials on mobile.</p>
            
            <div className="space-y-2 pt-1">
              {/* App Store Badge with SVG */}
              <div className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-3 w-fit cursor-pointer hover:bg-gray-800 transition shadow-sm border border-white/10">
                <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.03c.64-.78 1.08-1.87.96-2.96-1.03.04-2.28.69-3.01 1.47-.57.61-1.08 1.7-1.0 2.76 1.15.09 2.31-.56 3.05-1.27z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 leading-none">Available on the</p>
                  <p className="text-xs font-bold leading-tight">App Store</p>
                </div>
              </div>

              {/* Google Play Badge with SVG */}
              <div className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-3 w-fit cursor-pointer hover:bg-gray-800 transition shadow-sm border border-white/10">
                <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.35 1.35 0 01-.61-1.146V2.96c0-.472.222-.907.609-1.146zM15.208 13.416l2.122 2.122-11.455 6.618 9.333-8.74zM18.04 10.584l2.84 1.64c.594.342.594.901 0 1.244l-2.84 1.64-2.43-2.43 2.43-2.43zM5.875 2.182l11.455 6.618-2.122 2.122-9.333-8.74z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 leading-none">GET IT ON</p>
                  <p className="text-xs font-bold leading-tight">Google Play</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ALTIUS EDUCATION INC. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span className="hover:text-altiusGold cursor-pointer transition">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-altiusGold cursor-pointer transition">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}