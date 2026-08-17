'use client';

import Link from 'next/link';
import { PROGRESSION, STAGES, PILLARS } from '@/components/programs/futurereadyData';

export default function ProgramSteps() {
  return (
    <section className="py-20 px-6 bg-altiusLight text-altiusNavy border-y border-gray-200">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Our Curriculum</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
            How the 8-Year System Works
          </h2>
          <p className="text-gray-600 text-sm">
            Eight stages. One escalating path. Every year students answer a bigger question.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRESSION.map((p, index) => {
            const stage = STAGES[index];
            return (
              <div
                key={p.stage}
                className="bg-white p-6 rounded-md border border-gray-200/80 shadow-sm hover:shadow transition flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-altiusNavy text-altiusGold flex items-center justify-center text-lg">
                    {stage?.emoji}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-altiusGold/15 text-altiusGold px-2.5 py-1 rounded-full">
                    {p.grade}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-altiusNavy">{p.stage}</h3>
                  <p className="font-serif italic text-xs text-gray-600">&ldquo;{p.question}&rdquo;</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-altiusNavy rounded-md p-8 text-white">
          <div className="text-center mb-8 space-y-1">
            <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">
              The FutureReady Passport
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Proof of growth across 7 competency pillars, every single year
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="bg-white/5 border border-white/10 rounded-md p-4 flex items-center gap-3">
                <span className="text-xl">{pillar.emoji}</span>
                <div>
                  <p className="font-serif font-bold text-sm">{pillar.title}</p>
                  <p className="text-gray-400 text-[11px] leading-snug">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/programs"
            className="inline-block bg-altiusBlue text-white text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-600 transition tracking-wider uppercase"
          >
            Explore the Curriculum
          </Link>
        </div>

      </div>
    </section>
  );
}