export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-altiusLight text-altiusNavy border-y border-gray-200/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-altiusBlue font-semibold uppercase tracking-widest text-xs">The Altius Advantage</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-altiusNavy mt-2">Why Students Excel With Us</h2>
          <p className="text-gray-600 mt-3 text-sm">We combine rigorous academic frameworks with individualized support to bring out the absolute best in every student.</p>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Large Highlight Card */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-2xl border border-altiusGold/40 shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-altiusGold/10 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <span className="inline-block bg-altiusGold/20 text-altiusNavy text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                Core Pillar
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-altiusNavy mb-4">Expert Faculty Members</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Learn directly from seasoned educators and industry experts dedicated to simplified concept delivery, turning complex topics into intuitive milestones.
              </p>
            </div>
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-altiusBlue font-semibold">
              <span>10+ Years Avg Experience</span>
              <span>→ Verified Mentors</span>
            </div>
          </div>

          {/* Right Stacked Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/60 shadow-lg flex items-start gap-5 hover:border-altiusBlue/50 transition">
              <div className="w-12 h-12 bg-altiusBlue/10 text-altiusBlue rounded-xl flex items-center justify-center font-bold text-xl shrink-0">
                02
              </div>
              <div>
                <h3 className="font-bold text-xl text-altiusNavy mb-2">Smart Learning Analytics</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Regular tests backed by deep performance diagnostics to pinpoint and strengthen weak areas before final exams.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/60 shadow-lg flex items-start gap-5 hover:border-altiusBlue/50 transition">
              <div className="w-12 h-12 bg-altiusGold/20 text-altiusNavy rounded-xl flex items-center justify-center font-bold text-xl shrink-0">
                03
              </div>
              <div>
                <h3 className="font-bold text-xl text-altiusNavy mb-2">Holistic Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Focusing not just on rote memorization, but critical thinking, problem-solving speed, and supreme academic confidence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}