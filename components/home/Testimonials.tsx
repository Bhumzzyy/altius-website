'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Altius completely transformed my approach to complex subjects. The personal attention from mentors and regular assessment tests gave me the exact confidence I needed to top my board exams.",
    name: "Aarav Kapoor",
    role: "Batch of 2025 – Top Ranker",
  },
  {
    quote: "The faculty here doesn't just teach syllabus content; they teach you how to think. The interactive class environments and clean study materials made learning engaging and seamless.",
    name: "Priya Sharma",
    role: "Foundation Program Student",
  },
  {
    quote: "The 1-on-1 mentorship sessions changed everything for me. My mentor helped me fix my weak topics systematically, which directly boosted my final score significantly.",
    name: "Rohan Verma",
    role: "Advanced Test Prep",
  },
];

export default function TestimonialsFAQ() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  const current = testimonials[currentIndex];

  return (
    <section 
      className="py-24 px-6 bg-altiusNavy text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto relative">
        
        {/* Left Navigation Arrow */}
        <button 
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-altiusBlue transition shadow-sm z-20 text-lg"
          aria-label="Previous Testimonial"
        >
          ‹
        </button>

        {/* Right Navigation Arrow */}
        <button 
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-altiusBlue transition shadow-sm z-20 text-lg"
          aria-label="Next Testimonial"
        >
          ›
        </button>

        {/* Testimonial Content Area */}
        <div className="text-center px-6 md:px-12 transition-all duration-700">
          
          {/* SVG Quote Icon */}
          <div className="flex justify-center mb-6">
            <svg className="w-8 h-8 text-altiusGold fill-current opacity-80" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.998v10h-9.998z"/>
            </svg>
          </div>

          {/* Quote Text */}
          <p className="font-serif text-lg md:text-2xl text-white italic leading-relaxed mb-8 max-w-3xl mx-auto">
            &ldquo;{current.quote}&rdquo;
          </p>

          {/* Author Details */}
          <div className="space-y-1">
            <h4 className="font-bold text-altiusGold text-sm uppercase tracking-wider">
              {current.name}
            </h4>
            <p className="text-gray-300 text-xs font-medium">
              {current.role}
            </p>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-altiusGold' : 'w-2 bg-white/30'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}