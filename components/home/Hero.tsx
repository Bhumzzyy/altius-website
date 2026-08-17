'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-altiusNavy">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg1.png"
          alt="Altius FutureReady campus background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-altiusNavy via-altiusNavy/90 to-altiusNavy/40 lg:w-[75%]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-white pt-24">
        <div className="max-w-2xl space-y-6">

          <span className="inline-flex items-center gap-2 bg-altiusGold/15 border border-altiusGold/40 text-altiusGold px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-altiusGold" />
            Grades 5–12 • Career • Leadership • Innovation • Life Skills
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            One System. Eight Years.
            <br />
            <span className="text-altiusGold">A Career-Ready Graduate.</span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl">
            Altius FutureReady™ is not another tutoring program — it is a structured
            8-year journey that takes a child from career discovery in Grade 5 to
            complete career readiness in Grade 12, building an evidence portfolio
            along the way.
          </p>

          <div className="font-serif text-sm sm:text-base text-altiusGold/90 italic">
            Discover → Explore → Create → Develop → Experience → Specialize → Apply → Launch
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/#journey"
              className="bg-altiusGold text-altiusNavy text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition tracking-wider uppercase text-center"
            >
              Explore the 8-Year Journey
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white text-xs font-bold px-8 py-3.5 rounded-xl hover:bg-white hover:text-altiusNavy transition tracking-wider uppercase text-center"
            >
              Enrol for 2026–27
            </Link>
          </div>

          <div className="pt-6 flex items-center gap-4 border-t border-white/20">
            <div className="flex -space-x-3 overflow-hidden">
              <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                <Image src="/student1.jpg" alt="Altius student 1" fill className="object-cover" />
              </div>
              <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                <Image src="/student2.jpg" alt="Altius student 2" fill className="object-cover" />
              </div>
              <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                <Image src="/student3.jpg" alt="Altius student 3" fill className="object-cover" />
              </div>
              <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                <Image src="/student4.jpg" alt="Altius student 4" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-white">Every grade. One destination.</p>
              <p className="text-[11px] text-gray-300">Reserve a seat for the 2026–27 journey</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}