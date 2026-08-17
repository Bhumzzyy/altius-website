'use client';

import Link from 'next/link';
import { PROGRESSION, STAGES } from '@/components/programs/futurereadyData';

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 bg-altiusLight text-altiusNavy scroll-mt-28">
      <div className="max-w-7xl mx-auto space-y-14">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
            The Flagship System
          </span>
          <h2 className="font-serif text-3xl sm:text-[44px] font-bold text-altiusNavy leading-tight">
            The 8-Year Altius FutureReady™ Journey
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Every year builds on the last. Each grade asks a bigger question — until the
            student leaves Grade 12 knowing exactly who they are and where they are going.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRESSION.map((p, index) => {
            const stage = STAGES[index];
            return (
              <Link
                key={p.stage}
                href="/programs"
                className="group relative bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between space-y-4 hover:-translate-y-1"
                style={{ borderRadius: '10px' }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full bg-altiusNavy text-altiusGold flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition">
                    {stage?.emoji ?? '🎯'}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-altiusGold/15 text-altiusGold px-2.5 py-1 rounded-full">
                    {p.grade}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-altiusBlue">
                      Stage {index + 1} of 8
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-altiusNavy group-hover:text-altiusBlue transition">
                    {p.stage}
                  </h3>
                  <p className="font-serif italic text-sm text-gray-600">
                    “{p.question}”
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-altiusBlue">
                  View curriculum
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/programs"
            className="inline-block bg-altiusNavy text-white text-xs font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-altiusBlue transition tracking-wider uppercase"
          >
            See the Full Grades 5–12 Curriculum
          </Link>
        </div>

      </div>
    </section>
  );
}