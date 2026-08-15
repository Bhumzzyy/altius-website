// export default function Hero() {
//   return (
//     <section className="relative min-h-[115vh] flex items-center justify-center text-center px-4 overflow-hidden">
//       {/* Fixed Parallax Background Image with Dark Overlay */}
//       <div 
//         className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
//         style={{ backgroundImage: `url('/bg1.png')` }}
//       >
//         {/* Dark overlay so the text stands out clearly */}
//         <div className="absolute inset-0 bg-altiusNavy/85"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-4xl mx-auto py-24">
//         <span className="inline-block bg-altiusGold/20 text-altiusGold border border-altiusGold/40 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
//           Welcome to Altius Education Inc.
//         </span>
//         <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//           Learn Higher. <span className="text-altiusGold">Achieve Greater.</span>
//         </h1>
//         <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
//           Empowering students with world-class mentorship, small batch sizes, and a rigorous academic foundation designed for top-tier success.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <a href="/contact" className="w-full sm:w-auto bg-altiusBlue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition shadow-lg shadow-altiusBlue/30">
//             Enroll Now
//           </a>
//           <a href="#courses" className="w-full sm:w-auto border border-altiusGold text-altiusGold px-8 py-4 rounded-xl font-semibold hover:bg-altiusGold hover:text-altiusNavy transition">
//             Explore Our Courses
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }




// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-altiusNavy">

//       {/* Background Image with Gradient Overlay for Left-side Readability */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/bg1.png"
//           alt="Campus background"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//         {/* Gradient overlay: solid/faded on the left for text, revealing the campus photo on the right */}
//         <div className="absolute inset-0 bg-gradient-to-r from-altiusLight via-altiusLight/90 to-transparent lg:w-[65%]" />
//       </div>

//       {/* Hero Content Container */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
//         <div className="max-w-xl space-y-6">

//           {/* Subheading / Tagline */}
//           <span className="text-altiusBlue font-semibold uppercase tracking-widest text-xs block">
//             Shaping Minds • Inspiring Futures
//           </span>

//           {/* Main Headline */}
//           <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-altiusNavy leading-tight">
//             A Legacy of Excellence. <br />
//             <span className="text-altiusGold">A Future of Impact.</span>
//           </h1>

//           {/* Paragraph / Description */}
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//             At Altius, we empower students to think critically, lead courageously, and create meaningful change in the world through world-class mentorship and structured learning.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
//             <Link
//               href="/#courses"
//               className="bg-altiusBlue text-white text-xs font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-600 transition tracking-wider uppercase text-center"
//             >
//               Explore Programs &rarr;
//             </Link>
//             <Link
//               href="/contact"
//               className="border-2 border-altiusNavy text-altiusNavy text-xs font-semibold px-8 py-3.5 rounded-xl hover:bg-altiusNavy hover:text-white transition tracking-wider uppercase text-center"
//             >
//               Visit Campus &rarr;
//             </Link>
//           </div>
//           {/* Student Social Proof / Avatar Group */}
//           <div className="pt-6 flex items-center gap-4 border-t border-gray-300/60">
//             <div className="flex -space-x-3 overflow-hidden">
//               <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
//                 <Image src="/student1.jpg" alt="Student 1" fill className="object-cover" />
//               </div>
//               <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
//                 <Image src="/student2.jpg" alt="Student 2" fill className="object-cover" />
//               </div>
//               <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
//                 <Image src="/student3.jpg" alt="Student 3" fill className="object-cover" />
//               </div>
//               <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
//                 <Image src="/student4.jpg" alt="Student 4" fill className="object-cover" />
//               </div>
//             </div>
//             <div>
//               <p className="text-xs font-bold text-altiusNavy">Join 17,000+ Students</p>
//               <p className="text-[11px] text-gray-600">From 90+ Countries</p>
//             </div>
//           </div>


//         </div>
//       </div>

//     </section>
//   );
// }




'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-altiusNavy">
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg1.png" 
          alt="Campus background" 
          fill 
          priority
          className="object-cover object-center"
        />
        {/* Gradient overlay: fading from blue tint to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-altiusNavy via-altiusNavy/90 to-transparent lg:w-[65%]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-white pt-20">
        <div className="max-w-xl space-y-6">
          
          {/* Subheading / Tagline */}
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
            Shaping Minds • Inspiring Futures
          </span>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            A Legacy of Excellence. <br />
            <span className="text-altiusGold">A Future of Impact.</span>
          </h1>

          {/* Paragraph / Description */}
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            At Altius, we empower students to think critically, lead courageously, and create meaningful change in the world through world-class mentorship and structured learning.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link 
              href="/#courses" 
              className="bg-altiusBlue text-white text-xs font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-600 transition tracking-wider uppercase text-center"
            >
              Explore Programs &rarr;
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white text-xs font-semibold px-8 py-3.5 rounded-xl hover:bg-white hover:text-altiusNavy transition tracking-wider uppercase text-center"
            >
              Visit Campus &rarr;
            </Link>
          </div>

          {/* Student Social Proof / Avatar Group */}
          <div className="pt-6 flex items-center gap-4 border-t border-white/20">
            <div className="flex -space-x-3 overflow-hidden">
              <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                <Image src="/student1.jpg" alt="Student 1" fill className="object-cover" />
              </div>
              <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                <Image src="/student2.jpg" alt="Student 2" fill className="object-cover" />
              </div>
              <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                <Image src="/student3.jpg" alt="Student 3" fill className="object-cover" />
              </div>
              <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-altiusNavy overflow-hidden bg-gray-200">
                <Image src="/student4.jpg" alt="Student 4" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-white">Join 17,000+ Students</p>
              <p className="text-[11px] text-gray-300">From 90+ Countries</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}