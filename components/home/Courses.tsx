// export default function Courses() {
//   return (
//     <section id="courses" className="py-24 px-6 bg-altiusNavy text-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Academic Excellence</span>
//           <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 text-white">Our Core Programs</h2>
//           <p className="text-gray-300 mt-3 text-sm">Explore our specialized curriculum designed to foster deep understanding, critical thinking, and stellar exam results.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Program 1 */}
//           <div className="bg-[#112244] p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-altiusGold/50 transition">
//             <div>
//               <span className="inline-block bg-altiusBlue/30 text-altiusBlue text-xs font-bold px-3 py-1 rounded-full mb-4">Grades 6 - 10</span>
//               <h3 className="font-bold text-2xl mb-3 text-white">Foundation Batches</h3>
//               <p className="text-gray-300 text-sm leading-relaxed mb-6">Comprehensive coaching tailored for school students building conceptual clarity early on to handle advanced academics with ease.</p>
//               <ul className="space-y-2 text-xs text-gray-300 mb-8">
//                 <li>✓ Strong conceptual building blocks</li>
//                 <li>✓ Regular weekly assessments</li>
//                 <li>✓ Dedicated doubt-clearing sessions</li>
//               </ul>
//             </div>
//             <a href="/contact" className="block text-center bg-altiusBlue text-white py-3 rounded-xl font-semibold text-sm hover:bg-blue-600 transition">
//               Enquire Now
//             </a>
//           </div>

//           {/* Program 2 */}
//           <div className="bg-[#112244] p-8 rounded-2xl border border-altiusGold/30 shadow-xl flex flex-col justify-between hover:border-altiusGold transition relative">
//             <div className="absolute -top-3 right-6 bg-altiusGold text-altiusNavy text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
//               Popular
//             </div>
//             <div>
//               <span className="inline-block bg-altiusGold/20 text-altiusGold text-xs font-bold px-3 py-1 rounded-full mb-4">Grades 11 - 12 & Beyond</span>
//               <h3 className="font-bold text-2xl mb-3 text-white">Advanced Test Prep</h3>
//               <p className="text-gray-300 text-sm leading-relaxed mb-6">Rigorous problem-solving methodologies, high-level mock exam series, and strategy sessions designed specifically for top competitive ranks.</p>
//               <ul className="space-y-2 text-xs text-gray-300 mb-8">
//                 <li>✓ High-difficulty question banks</li>
//                 <li>✓ All-India simulated mock tests</li>
//                 <li>✓ Time management strategies</li>
//               </ul>
//             </div>
//             <a href="/contact" className="block text-center bg-altiusGold text-altiusNavy py-3 rounded-xl font-semibold text-sm hover:bg-yellow-500 transition">
//               Enquire Now
//             </a>
//           </div>

//           {/* Program 3 */}
//           <div className="bg-[#112244] p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-altiusBlue/50 transition">
//             <div>
//               <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">All Levels</span>
//               <h3 className="font-bold text-2xl mb-3 text-white">1-on-1 Mentorship</h3>
//               <p className="text-gray-300 text-sm leading-relaxed mb-6">Personalized progress tracking, customized study schedules, and individual guidance sessions paired directly with expert faculty mentors.</p>
//               <ul className="space-y-2 text-xs text-gray-300 mb-8">
//                 <li>✓ Tailored individual roadmaps</li>
//                 <li>✓ Personal academic counselor</li>
//                 <li>✓ Performance deep-dives</li>
//               </ul>
//             </div>
//             <a href="/contact" className="block text-center bg-altiusBlue text-white py-3 rounded-xl font-semibold text-sm hover:bg-blue-600 transition">
//               Enquire Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Courses() {
  return (
    <section id="courses" className="py-24 px-6 bg-altiusNavy text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Academic Excellence</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">Our Core Programs</h2>
          <p className="text-gray-300 mt-3 text-sm">Explore our structured curriculums designed to help students master concepts and achieve top academic ranks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="bg-[#112244] p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-altiusGold/50 transition">
            <div>
              <span className="inline-block bg-altiusBlue/30 text-altiusBlue text-xs font-bold px-3 py-1 rounded-full mb-4">Grades 6 - 10</span>
              <h3 className="font-bold text-2xl mb-3 text-white">Foundation Batches</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">Comprehensive coaching tailored for school students building conceptual clarity early on to handle advanced academics with ease.</p>
              <ul className="space-y-2 text-xs text-gray-300 mb-8">
                <li>✓ Strong conceptual building blocks</li>
                <li>✓ Regular weekly assessments</li>
                <li>✓ Dedicated doubt-clearing sessions</li>
              </ul>
            </div>
            <a href="/contact" className="block text-center bg-altiusBlue text-white py-3 rounded-xl font-semibold text-sm hover:bg-blue-600 transition">
              Enquire Now
            </a>
          </div>

          {/* Program 2 */}
          <div className="bg-[#112244] p-8 rounded-2xl border border-altiusGold/30 shadow-xl flex flex-col justify-between hover:border-altiusGold transition relative">
            <div className="absolute -top-3 right-6 bg-altiusGold text-altiusNavy text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Popular
            </div>
            <div>
              <span className="inline-block bg-altiusGold/20 text-altiusGold text-xs font-bold px-3 py-1 rounded-full mb-4">Grades 11 - 12 & Beyond</span>
              <h3 className="font-bold text-2xl mb-3 text-white">Advanced Test Prep</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">Rigorous problem-solving methodologies, high-level mock exam series, and strategy sessions designed specifically for top competitive ranks.</p>
              <ul className="space-y-2 text-xs text-gray-300 mb-8">
                <li>✓ High-difficulty question banks</li>
                <li>✓ All-India simulated mock tests</li>
                <li>✓ Time management strategies</li>
              </ul>
            </div>
            <a href="/contact" className="block text-center bg-altiusGold text-altiusNavy py-3 rounded-xl font-semibold text-sm hover:bg-yellow-500 transition">
              Enquire Now
            </a>
          </div>

          {/* Program 3 */}
          <div className="bg-[#112244] p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-altiusBlue/50 transition">
            <div>
              <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">All Levels</span>
              <h3 className="font-bold text-2xl mb-3 text-white">1-on-1 Mentorship</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">Personalized progress tracking, customized study schedules, and individual guidance sessions paired directly with expert faculty mentors.</p>
              <ul className="space-y-2 text-xs text-gray-300 mb-8">
                <li>✓ Tailored individual roadmaps</li>
                <li>✓ Personal academic counselor</li>
                <li>✓ Performance deep-dives</li>
              </ul>
            </div>
            <a href="/contact" className="block text-center bg-altiusBlue text-white py-3 rounded-xl font-semibold text-sm hover:bg-blue-600 transition">
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}