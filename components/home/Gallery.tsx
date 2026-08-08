'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/hero-bg.jpg', title: 'Classroom Session', category: 'Learning' },
  { id: 2, src: '/hero-bg.jpg', title: 'Interactive Workshop', category: 'Events' },
  { id: 3, src: '/hero-bg.jpg', title: 'Student Success Meet', category: 'Achievement' },
  { id: 4, src: '/hero-bg.jpg', title: 'Library & Study Area', category: 'Infrastructure' },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate images to create an endless smooth infinite loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="py-24 px-6 bg-altiusNavy text-white overflow-hidden border-y border-white/10">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Visual Tour</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">Life at Altius Education</h2>
          <p className="text-gray-300 mt-3 text-sm">Take a quick look inside our classrooms, events, and campus environment.</p>
        </div>
      </div>

      {/* Train-style Marquee Container */}
      <div 
        className="w-full overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex gap-6 w-max"
          style={{
            animation: 'marquee 25s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {duplicatedImages.map((img, idx) => (
            <div 
              key={`${img.id}-${idx}`}
              onClick={() => setActiveImage(img.src)}
              className="relative w-[320px] sm:w-[380px] h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer group border border-white/10 shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image 
                src={img.src} 
                alt={img.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-altiusNavy/90 via-altiusNavy/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6">
                <span className="text-altiusGold text-xs font-semibold uppercase tracking-wider">{img.category}</span>
                <h3 className="text-white font-bold text-lg mt-1">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for Marquee Train Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Full-Screen Lightbox Zoom Modal when Clicked */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
        >
          <div className="relative max-w-4xl w-full h-[80vh] flex items-center justify-center">
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-altiusGold transition"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image 
                src={activeImage} 
                alt="Enlarged view" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}