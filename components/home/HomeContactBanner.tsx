'use client';

import Link from 'next/link';

export default function HomeContactBanner() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-altiusNavy text-white rounded-[10px] p-10 md:p-14 text-center shadow-xl relative overflow-hidden flex flex-col items-center">
          
          {/* Top Tag / Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-altiusGold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Direct Support Line
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-3">
            Have Questions? Talk to Our Experts
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-xs md:text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Get instant answers and personalized academic guidance. Reach out to our admissions desk active Mon–Sat (9 AM to 8 PM).
          </p>

          {/* Contact Page Action Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-altiusBlue hover:bg-blue-600 text-white text-xs md:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-[10px] shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact Us Now
          </Link>

        </div>
      </div>
    </section>
  );
}