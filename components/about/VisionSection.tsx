// 'use client';

// import Image from 'next/image';

// const stats = [
//   { value: '17,000+', label: 'Students' },
//   { value: '320+', label: 'Batch Success' },
//   { value: '120+', label: 'Professional Teacher' },
//   { value: '95%', label: 'Career Success' },
// ];

// export default function VisionSection() {
//   return (
//     <section className="py-24 px-6 bg-white text-altiusNavy">
//       <div className="max-w-6xl mx-auto space-y-20">
        
//         {/* Vision Block */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           <div className="lg:col-span-5 relative">
//             <div className="relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl">
//               <Image src="/bg.jpg" alt="Rector Altius" fill className="object-cover" />
//             </div>
//             <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl text-center shadow-md border border-gray-200">
//               <p className="font-serif font-bold text-altiusNavy text-sm">RECTOR ALTIUS</p>
//             </div>
//           </div>

//           <div className="lg:col-span-7 space-y-6">
//             <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy leading-snug">
//               Our Vision For Altius Education
//             </h2>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               We strive to cultivate an academic ecosystem driven by uncompromising standards, curiosity, and moral integrity. Our goal is to equip every scholar with the mental framework needed to conquer competitive frontiers.
//             </p>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Through consistent innovation in teaching methodologies and personal accountability, we turn ambition into accomplished reality.
//             </p>
//             <div className="font-serif italic text-altiusGold text-xl font-bold pt-2">
//               — Altius Leadership
//             </div>
//           </div>
//         </div>

//         {/* Stats Strip */}
//         <div className="bg-altiusNavy rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-center text-white shadow-xl">
//           {stats.map((stat, index) => (
//             <div key={index} className="space-y-1">
//               <h3 className="font-serif text-3xl md:text-4xl font-bold text-altiusGold">{stat.value}</h3>
//               <p className="text-gray-300 text-xs uppercase tracking-wider font-medium">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';

const stats = [
  { value: '500+', label: 'Students Enrolled' },
  { value: '100%', label: 'Dedicated Support' },
  { value: '15+', label: 'Specialized Programs' },
  { value: '95%', label: 'Goal Achievement' },
];

export default function VisionSection() {
  return (
    <section className="py-24 px-6 bg-white text-altiusNavy">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Mission & Vision Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative h-[340px] w-full rounded-md overflow-hidden shadow-md">
              <Image src="/bg.jpg" alt="Altius Learning Environment" fill className="object-cover" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-md text-center shadow-sm border border-gray-200">
              <p className="font-serif font-bold text-altiusNavy text-xs tracking-wider">ALTIUS EDUCATION INC.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Mission & Vision</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy leading-snug">
              Empowering Students to Think Bigger, Learn More, and Aim Higher
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to provide accessible, engaging, and meaningful educational opportunities that help students build knowledge, confidence, practical skills, and a love for lifelong learning.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We strive to connect education, technology, creativity, and career exploration so students can prepare for a changing world and discover their true potential.
            </p>
            <div className="font-serif italic text-altiusGold text-lg font-bold pt-2">
              — Learn Higher. Achieve Greater.
            </div>
          </div>
        </div>

        {/* Stats Strip with 6px border-radius */}
        <div className="bg-altiusNavy rounded-md grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-center text-white shadow-lg">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-altiusGold">{stat.value}</h3>
              <p className="text-gray-300 text-xs uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}