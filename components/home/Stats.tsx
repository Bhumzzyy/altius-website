'use client';

import { useState, useEffect, useRef } from 'react';

// Reusable counter component that triggers on viewport entry
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Observer to check if element is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Run animation only when visible
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // Animation duration in milliseconds (2 seconds)
    const increment = target / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref}>
      <span>{count}{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-12 shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        <div>
          <h3 className="text-4xl md:text-5xl font-bold font-serif text-altiusBlue mb-1">
            <Counter target={98} suffix="%" />
          </h3>
          <p className="text-gray-600 text-sm font-medium">Success Rate</p>
        </div>
        <div>
          <h3 className="text-4xl md:text-5xl font-bold font-serif text-altiusBlue mb-1">
            <Counter target={500} suffix="+" />
          </h3>
          <p className="text-gray-600 text-sm font-medium">Students Taught</p>
        </div>
        <div>
          <h3 className="text-4xl md:text-5xl font-bold font-serif text-altiusBlue mb-1">
            <Counter target={10} suffix="+" />
          </h3>
          <p className="text-gray-600 text-sm font-medium">Expert Faculty</p>
        </div>
        <div>
          <h3 className="text-4xl md:text-5xl font-bold font-serif text-altiusBlue mb-1">
            <Counter target={15} suffix="+" />
          </h3>
          <p className="text-gray-600 text-sm font-medium">Programs Offered</p>
        </div>
      </div>
    </section>
  );
}