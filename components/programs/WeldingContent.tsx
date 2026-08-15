'use client';

export default function WeldingContent() {
  return (
    <div id="welding-content" className="space-y-6">
      <div className="bg-white p-6 sm:p-8 border border-gray-200 space-y-4" style={{ borderRadius: '8px' }}>
        <h3 className="font-serif font-bold text-xl text-altiusNavy">Trades Awareness Tracks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["Welding Concepts", "Skilled Trades Awareness", "Workplace Skills", "Safety Awareness", "Career Exploration", "Practical Learning"].map((item, idx) => (
            <div key={idx} className="bg-altiusLight p-3 text-xs font-semibold text-altiusNavy flex items-center gap-2" style={{ borderRadius: '6px' }}>
              <svg className="w-4 h-4 text-altiusBlue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}