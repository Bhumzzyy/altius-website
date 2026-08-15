'use client';

import { useState, useEffect, useRef } from 'react';

const statsData = [
  { 
    value: 12000, 
    prefix: '',
    suffix: '+', 
    label: 'Students Enrolled',
    icon: (
      <svg className="w-8 h-8 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  { 
    value: 90, 
    prefix: '',
    suffix: '+', 
    label: 'Countries Represented',
    icon: (
      <svg className="w-8 h-8 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    value: 100, 
    prefix: '',
    suffix: '+', 
    label: 'Academic Programs',
    icon: (
      <svg className="w-8 h-8 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  { 
    value: 87, 
    prefix: '#',
    suffix: '', 
    label: 'Top Universities Worldwide',
    icon: (
      <svg className="w-8 h-8 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  { 
    value: 95, 
    prefix: '',
    suffix: '%', 
    label: 'Graduate Employment Rate',
    icon: (
      <svg className="w-8 h-8 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
];

export default function Stats() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section ref={ref} className="py-8 px-6 bg-altiusNavy text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 items-center justify-items-center">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 justify-start w-full max-w-[220px] ${
                index !== statsData.length - 1 ? 'md:border-r md:border-white/15' : ''
              } md:pr-4`}
            >
              <div className="shrink-0">
                {stat.icon}
              </div>
              <div>
                <h3 className="font-serif text-2xl lg:text-[40px] font-bold text-white tracking-wide">
                  {stat.prefix}{inView ? <Counter target={stat.value} /> : 0}{stat.suffix}
                </h3>
                <p className="text-gray-300 text-[11px] font-medium tracking-tight whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper Counter component for the count-up animation
function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * target));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [target]);

  return <>{count.toLocaleString()}</>;
}