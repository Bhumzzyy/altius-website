'use client';

import Image from 'next/image';

const stats = [
  { value: '8', label: 'Grades of Progression' },
  { value: '8', label: 'Journey Stages' },
  { value: '5', label: 'Career Pathways' },
  { value: '1', label: 'FutureReady Passport' },
];

export default function VisionSection() {
  return (
    <section className="py-24 px-6 bg-white text-altiusNavy">
      <div className="max-w-6xl mx-auto space-y-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative h-[340px] w-full rounded-md overflow-hidden shadow-md">
              <Image src="/bg.jpg" alt="Altius Learning Environment" fill className="object-cover" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-md text-center shadow-sm border border-gray-200">
              <p className="font-serif font-bold text-altiusNavy text-xs tracking-wider">ALTIUS EDUCATION INC.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Mission & Vision</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy leading-snug">
              From Career Discovery in Grade 5 to Career Readiness in Grade 12
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to give every student a structured, escalating path through careers,
              leadership, technology, business, and life skills — not just a series of classes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We connect education, technology, creativity, and real-world experience so students
              graduate with the knowledge, confidence, and evidence to step into the world of work
              and higher education with purpose.
            </p>
            <div className="font-serif italic text-altiusGold text-lg font-bold pt-2">
              — Not another tutoring program. An 8-year system.
            </div>
          </div>
        </div>

        <div className="bg-altiusNavy rounded-md grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-center text-white shadow-lg">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-altiusGold">{stat.value}</h3>
              <p className="text-gray-300 text-xs uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}