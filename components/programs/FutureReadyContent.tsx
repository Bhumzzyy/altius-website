'use client';

import { useState } from 'react';
import { STAGES, PROGRESSION, PILLARS, PATHWAY_LABELS } from '@/components/programs/futurereadyData';

export default function FutureReadyContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = STAGES[activeIndex];

  return (
    <div id="futureready-content" className="space-y-10">

      <div className="bg-altiusNavy text-white rounded-[10px] p-8 sm:p-10 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-altiusGold/10 blur-2xl" />
        <div className="relative space-y-3">
          <span className="inline-flex items-center gap-2 bg-altiusGold/15 border border-altiusGold/40 text-altiusGold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            The Flagship System
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            The 8-Year Altius FutureReady™ Journey
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            A structured Grades 5–12 system that takes a child from career discovery to complete
            career readiness. Select a stage to explore the curriculum and signature project for
            that year.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {PROGRESSION.map((p, index) => (
          <button
            key={p.stage}
            onClick={() => setActiveIndex(index)}
            aria-pressed={activeIndex === index}
            className={`px-2 py-3 rounded-lg text-center transition border ${
              activeIndex === index
                ? 'bg-altiusNavy text-altiusGold border-altiusNavy shadow-md'
                : 'bg-white text-altiusNavy border-gray-200 hover:border-altiusBlue'
            }`}
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider opacity-80">
              {p.grade}
            </span>
            <span className="block font-serif font-bold text-sm mt-0.5">{p.stage}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-gray-200/80 shadow-sm p-6 sm:p-8 space-y-5" style={{ borderRadius: '10px' }}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="text-altiusGold font-semibold uppercase tracking-widest text-[10px] block">
                  Stage {activeIndex + 1} of 8
                </span>
                <h3 className="font-serif text-2xl font-bold text-altiusNavy mt-1">
                  {current.grade} — {current.stage.toUpperCase()}
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-altiusLight border border-gray-200 px-3 py-2 rounded-lg">
                <span className="text-xl">{current.emoji}</span>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                    The guiding question
                  </p>
                  <p className="font-serif italic text-sm text-altiusNavy">
                    “{current.question}”
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-altiusNavy">Main goal:</strong> {current.goal}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-altiusNavy mb-3">
                Year Curriculum
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.curriculum.map((area) => (
                  <div
                    key={area.area}
                    className="bg-altiusLight border border-gray-200/80 rounded-lg p-4"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-altiusBlue mb-1.5">
                      {area.area}
                    </p>
                    <ul className="space-y-1">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-xs leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-altiusGold mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-altiusGold/10 border border-altiusGold/40 p-6 rounded-[10px] space-y-3">
            <span className="inline-block bg-altiusGold text-altiusNavy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Signature Project
            </span>
            <h4 className="font-serif text-xl font-bold text-altiusNavy">
              {current.majorProject.title}
            </h4>
            <p className="text-gray-700 text-xs leading-relaxed">
              {current.majorProject.detail}
            </p>
          </div>

          <div className="bg-white border border-gray-200/80 p-6 rounded-[10px] space-y-3 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-altiusNavy">
              What goes in the Passport
            </h4>
            <ul className="space-y-2">
              {PILLARS.map((pillar, i) => (
                <li key={pillar.title} className="flex items-center gap-3 text-gray-600 text-xs">
                  <span className="w-6 h-6 rounded-full bg-altiusNavy text-altiusGold flex items-center justify-center text-[11px] shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-medium">{pillar.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {activeIndex === 5 && (
        <div className="bg-white border border-gray-200/80 shadow-sm p-6 sm:p-8 space-y-4" style={{ borderRadius: '10px' }}>
          <h4 className="font-serif text-xl font-bold text-altiusNavy">
            Grade 10 — The Five Career Pathways
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PATHWAY_LABELS.map((pathway) => (
              <div key={pathway.title} className="bg-altiusLight border border-gray-200/80 rounded-lg p-4 text-center space-y-2">
                <div className="text-2xl">{pathway.emoji}</div>
                <p className="font-serif font-bold text-sm text-altiusNavy leading-snug">
                  {pathway.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}