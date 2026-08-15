'use client';

export default function AnnouncementBar() {
  return (
    <div className="bg-altiusGold text-altiusNavy text-xs font-bold uppercase tracking-wider py-2 overflow-hidden relative z-50 shadow-sm">
      <div className="flex w-max" style={{ animation: 'marquee 25s linear infinite' }}>
        
        {/* Repeat the text items twice to ensure a seamless infinite loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0 px-6">
            <span className="flex items-center gap-2">
              📍 123 Education Hub, Main Street, City
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              📞 Call Us: +91 98765 43210
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              ✉️ info@altiuseducation.com
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 text-white bg-altiusNavy px-3 py-0.5 rounded-full">
              🚀 Admissions Open for 2026 Batch — Join Today & Secure Your Rank!
            </span>
            <span>•</span>
          </div>
        ))}

      </div>

      {/* Global CSS for the continuous sliding train marquee animation */}
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
    </div>
  );
}