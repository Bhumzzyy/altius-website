'use client';

import Link from 'next/link';
import { PILLARS } from '@/components/programs/futurereadyData';

export default function Passport() {
  return (
    <section className="py-24 px-6 bg-altiusNavy text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-altiusBlue/20 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5 space-y-6">
            <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
              The Differentiator
            </span>
            <h2 className="font-serif text-3xl sm:text-[40px] font-bold leading-tight">
              Not Another Tutoring Program.
              <br />
              <span className="text-altiusGold">An Evidence-Building System.</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every student carries an <strong className="text-white">Altius FutureReady Passport</strong>.
              Year after year, they collect proof of growth across seven competency pillars — real
              projects, real skills, real results. By Grade 12 they don&apos;t just receive a
              certificate. They walk out with a <strong className="text-white">portfolio showing what they actually did</strong>.
            </p>
            <Link
              href="/about"
              className="inline-block bg-altiusGold text-altiusNavy text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition tracking-wider uppercase"
            >
              How the System Works
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="bg-white/5 border border-white/10 p-6 rounded-[10px] backdrop-blur-sm hover:bg-white/10 transition space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-altiusGold/15 border border-altiusGold/30 text-altiusGold flex items-center justify-center text-lg shrink-0">
                      {pillar.emoji}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-altiusGold">
                        Pillar {index + 1}
                      </span>
                      <h3 className="font-serif font-bold text-lg text-white leading-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}