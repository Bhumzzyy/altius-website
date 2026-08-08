export default function Hero() {
  return (
    <section className="relative min-h-[115vh] flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Fixed Parallax Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/bg1.png')` }}
      >
        {/* Dark overlay so the text stands out clearly */}
        <div className="absolute inset-0 bg-altiusNavy/85"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto py-24">
        <span className="inline-block bg-altiusGold/20 text-altiusGold border border-altiusGold/40 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
          Welcome to Altius Education Inc.
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Learn Higher. <span className="text-altiusGold">Achieve Greater.</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Empowering students with world-class mentorship, small batch sizes, and a rigorous academic foundation designed for top-tier success.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" className="w-full sm:w-auto bg-altiusBlue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition shadow-lg shadow-altiusBlue/30">
            Enroll Now
          </a>
          <a href="#courses" className="w-full sm:w-auto border border-altiusGold text-altiusGold px-8 py-4 rounded-xl font-semibold hover:bg-altiusGold hover:text-altiusNavy transition">
            Explore Our Courses
          </a>
        </div>
      </div>
    </section>
  );
}