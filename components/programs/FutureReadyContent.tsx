'use client';

export default function FutureReadyContent() {
  return (
    <div id="futureready-content" className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { grade: "Grade 5", stage: "Discover", q: "Who am I?" },
          { grade: "Grade 6", stage: "Explore", q: "What interests me?" },
          { grade: "Grade 7", stage: "Create", q: "What can I build?" },
          { grade: "Grade 8", stage: "Develop", q: "What skills can I develop?" },
          { grade: "Grade 9", stage: "Experience", q: "What does the real world look like?" },
          { grade: "Grade 10", stage: "Specialize", q: "Which pathway fits me?" },
          { grade: "Grade 11", stage: "Apply", q: "Can I use my skills professionally?" },
          { grade: "Grade 12", stage: "Launch", q: "Am I ready for my next step?" },
        ].map((item, idx) => (
          <div key={idx} style={{ borderRadius: '8px' }} className="bg-altiusLight p-4 border border-gray-200/80 space-y-1">
            <span className="text-[10px] font-bold text-altiusBlue uppercase">{item.grade} • {item.stage}</span>
            <h4 className="font-serif font-bold text-sm text-altiusNavy">{item.q}</h4>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 sm:p-8 border border-gray-200 space-y-4" style={{ borderRadius: '8px' }}>
        <h3 className="font-serif font-bold text-xl text-altiusNavy">The 8-Year Progression Overview</h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          Discover → Explore → Create → Develop → Experience → Specialize → Apply → Launch. Students accumulate evidence of communication, leadership, technology, innovation, business, financial literacy, and career readiness in their <strong>Altius FutureReady Passport</strong>.
        </p>
      </div>
    </div>
  );
}