'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Do you prepare students for competitive entrance exams?",
    answer: "Yes. We provide comprehensive, structured coaching for national and state-level entrance exams, including NEET, JEE, and GUJCET, with a focus on deep conceptual clarity."
  },
  {
    question: "Which academic streams do you specialise in?",
    answer: "We specialise in Foundation programs for school students (Class 8th to 10th) as well as higher secondary Science and Commerce streams tailored for academic excellence."
  },
  {
    question: "How do you support students struggling with specific topics?",
    answer: "We provide dedicated 1-on-1 mentorship sessions, regular doubt-clearing hours, and personalized practice worksheets to help students master challenging topics."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white text-altiusNavy">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header with Icon */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block mb-2">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-altiusNavy">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List with Line Separators & SVG Arrow Icons */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="font-serif font-bold text-base sm:text-lg text-altiusNavy">
                  {faq.question}
                </span>
                
                {/* SVG Chevron Arrow Icon matching the exact style */}
                <span className="text-altiusNavy ml-4 shrink-0 transition-transform duration-300">
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div className="mt-3 pr-8">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}