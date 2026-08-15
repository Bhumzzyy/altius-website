'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative w-full">
      {/* Uniform Banner Height & bg1.png */}
      <div className="relative h-[300px] sm:h-[380px] w-full bg-altiusNavy">
        <Image 
          src="/bg1.png" 
          alt="Altius Education Campus" 
          fill 
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-altiusNavy/90 via-altiusNavy/40 to-transparent flex items-end justify-center pb-12">
          <div className="text-center space-y-2 px-6">
            <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">
              Learn Higher. Achieve Greater.
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
              About Altius Education
            </h1>
          </div>
        </div>
      </div>

      {/* Intro Text Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center space-x-2 text-altiusGold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-semibold uppercase tracking-widest text-xs">Who We Are</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy leading-snug">
              Bridging Academic Excellence with Practical Future Skills
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm leading-relaxed border-l-2 border-altiusGold/40 pl-6">
            <p>
              ALTIUS EDUCATION INC. is an educational and training centre committed to providing quality learning opportunities for children, youth, and students preparing for future education and careers. We combine academic learning, creativity, technology, practical skills, and career exploration.
            </p>
            <p>
              Whether you need academic tutoring, language programs (English, French, Punjabi), TCF/TEF exam prep, music education, or hands-on exposure to CNC programming, 3D printing, and skilled trades like welding, we provide a supportive environment to help you succeed.
            </p>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="inline-block bg-altiusNavy text-white text-xs font-semibold px-6 py-3 rounded-md shadow-sm hover:bg-altiusBlue transition tracking-wider uppercase"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}