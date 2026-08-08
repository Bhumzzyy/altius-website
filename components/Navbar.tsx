// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
//       <div className="font-serif text-2xl font-bold text-altiusNavy">
//         ALTIUS <span className="text-xs block font-sans tracking-widest text-altiusBlue">EDUCATION INC.</span>
//       </div>
//       <div className="space-x-6 font-medium flex items-center">
//         <Link href="/" className="hover:text-altiusBlue transition">Home</Link>
//         <Link href="/contact" className="bg-altiusBlue text-white px-5 py-2 rounded-lg hover:bg-altiusNavy transition">Contact Us</Link>
//       </div>
//     </nav>
//   );
// }




'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 md:px-8 max-w-6xl mx-auto">
      <nav className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg px-6 py-3.5 flex items-center justify-between transition-all duration-300">
        
        {/* Left: Logo without bounding box, wider layout */}
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

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-800">
          <Link href="/#courses" className="hover:text-altiusBlue transition">Programs</Link>
          <Link href="/#features" className="hover:text-altiusBlue transition">Features</Link>
          <Link href="/#gallery" className="hover:text-altiusBlue transition">Gallery</Link>
        </div>

        {/* Right: Enquire Now Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="bg-altiusBlue text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md hover:bg-blue-600 transition tracking-wider uppercase"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-altiusNavy focus:outline-none p-1"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white/70 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl p-6 flex flex-col gap-4 text-center text-sm font-semibold text-gray-800 animate-fadeIn">
          <Link 
            href="/#courses" 
            onClick={() => setIsOpen(false)}
            className="hover:text-altiusBlue transition py-2"
          >
            Programs
          </Link>
          <Link 
            href="/#features" 
            onClick={() => setIsOpen(false)}
            className="hover:text-altiusBlue transition py-2"
          >
            Features
          </Link>
          <Link 
            href="/#gallery" 
            onClick={() => setIsOpen(false)}
            className="hover:text-altiusBlue transition py-2"
          >
            Gallery
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-altiusBlue text-white text-xs font-semibold py-3 rounded-xl shadow-md hover:bg-blue-600 transition tracking-wider uppercase block text-center"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}