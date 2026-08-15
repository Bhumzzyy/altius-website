'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-altiusLight text-altiusNavy border-y border-gray-200/60 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block mb-2">
                About Altius Education
              </span>
              <h2 className="font-serif text-5xl sm:text-5xl font-bold text-altiusNavy leading-tight">
                Empowering Minds, <br />
                <span className="text-altiusGold">Shaping Futures</span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At <strong>ALTIUS EDUCATION INC.</strong>, we believe that every student has the potential to learn, grow, and achieve great things. We provide a supportive and engaging learning environment where students strengthen their academic skills, discover new interests, and prepare for their future.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              From academic tutoring and language learning to skilled trades, technology, music, and career-focused programs, we offer learning opportunities designed for today&apos;s students and tomorrow&apos;s careers.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link 
                href="/about" 
                className="inline-block bg-altiusBlue text-white text-xs font-semibold px-7 py-3.5 rounded-sm shadow-md hover:bg-blue-600 transition tracking-wider uppercase"
              >
                Learn More About Us &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Image with Minimal/Barely Visible Roundness */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[450px] w-full rounded-[10px] overflow-hidden shadow-2xl">
              <Image 
                src="/bg.jpg" 
                alt="Altius Campus and Students" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Decorative background accent card with minimal roundness */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-altiusNavy text-white p-6 rounded-[10px] shadow-xl max-w-xs border border-white/10">
              <p className="font-serif text-altiusGold font-bold text-lg mb-1">Learn Higher. Achieve Greater.</p>
              <p className="text-gray-300 text-xs leading-relaxed">Dedicated to fostering individual growth, practical skills, and excellence.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}