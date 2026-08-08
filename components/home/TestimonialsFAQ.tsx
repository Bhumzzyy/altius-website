'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Altius completely transformed my approach to complex subjects. The personal attention from mentors and regular assessment tests gave me the exact confidence I needed to top my board exams.",
    name: "Aarav Kapoor",
    role: "Batch of 2025 – Top Ranker",
    initials: "AK",
    cardBg: "bg-[#0B1B3D]",
    borderColor: "border-altiusBlue/50",
    badgeColor: "bg-altiusBlue text-white",
  },
  {
    quote: "The faculty here doesn't just teach syllabus content; they teach you how to think. The interactive class environments and clean study materials made learning engaging and seamless.",
    name: "Priya Sharma",
    role: "Foundation Program Student",
    initials: "PS",
    cardBg: "bg-[#162a56]",
    borderColor: "border-altiusGold/40",
    badgeColor: "bg-altiusGold text-altiusNavy",
  },
  {
    quote: "The 1-on-1 mentorship sessions changed everything for me. My mentor helped me fix my weak topics systematically, which directly boosted my final score significantly.",
    name: "Rohan Verma",
    role: "Advanced Test Prep",
    initials: "RV",
    cardBg: "bg-[#112244]",
    borderColor: "border-blue-500/40",
    badgeColor: "bg-blue-600 text-white",
  },
];

const faqs = [
  {
    question: "How can I enroll in a batch?",
    answer: "You can easily register by navigating to our Contact page, filling out the inquiry form with your course preference, or reaching out directly through our listed phone number."
  },
  {
    question: "What is the batch size for classes?",
    answer: "We maintain strictly limited batch sizes to guarantee individual attention and personalized mentorship for every single student enrolled."
  },
  {
    question: "Are backup classes available if a session is missed?",
    answer: "Yes, structured review sessions and learning resources are available to help students seamlessly catch up on any missed topics."
  },
  {
    question: "How do parents track student progress?",
    answer: "We provide regular performance analytics, test score reports, and scheduled faculty interaction sessions so parents are always updated on student growth."
  }
];

export default function TestimonialsFAQ() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Auto-advance timer for testimonials every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 px-6 bg-altiusLight text-altiusNavy">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-altiusBlue font-semibold uppercase tracking-widest text-xs">Student Support & Trust</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-altiusNavy mt-2">Success Stories & Answers</h2>
          <p className="text-gray-600 mt-3 text-sm">Discover what our top rankers say about us and find quick answers to your questions.</p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Testimonials Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-altiusNavy mb-4">What Our Students Say</h3>
            
            <div 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className={`${current.cardBg} text-white p-8 md:p-10 rounded-3xl border ${current.borderColor} shadow-xl relative transition-all duration-700 flex flex-col justify-between min-h-[300px]`}
            >
              {/* Top: Name and Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center ${current.badgeColor}`}>
                    {current.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{current.name}</h4>
                    <p className="text-altiusGold text-[11px]">{current.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-altiusBlue transition text-xs"
                    aria-label="Previous Testimonial"
                  >
                    ←
                  </button>
                  <span className="text-[11px] text-gray-400 px-1">
                    {currentIndex + 1} / {testimonials.length}
                  </span>
                  <button 
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-altiusBlue transition text-xs"
                    aria-label="Next Testimonial"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Bottom: Review / Quote */}
              <div>
                <p className="text-gray-200 text-sm md:text-base italic leading-relaxed pt-2">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center items-center gap-2 pt-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-altiusBlue' : 'w-1.5 bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-altiusNavy mb-4">Frequently Asked Questions</h3>

            {faqs.map((faq, index) => (
              <div 
                key={index}
                onClick={() => toggleFAQ(index)}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm cursor-pointer transition hover:border-altiusBlue/50"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-altiusNavy text-sm md:text-base">{faq.question}</h4>
                  <span className="text-altiusBlue font-bold text-lg transition-transform duration-300">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mt-3 pt-3 border-t border-gray-100">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}