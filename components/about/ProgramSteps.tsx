// 'use client';

// import Image from 'next/image';

// const steps = [
//   { icon: '💻', title: 'Public Course', desc: 'Comprehensive foundational learning modules for all academic levels.' },
//   { icon: '🎓', title: 'Undergraduate Courses', desc: 'Rigorous streams designed to build deep foundational expertise.' },
//   { icon: '🔬', title: 'Master’s Courses', desc: 'Advanced specializations focused on innovation and mastery.' },
//   { icon: '🏛️', title: 'Postgraduate Research', desc: 'Independent research programs guided by world-class experts.' },
//   { icon: '💼', title: 'Become Lecturer', desc: 'Mentorship pathways for aspiring educators and leaders.' },
// ];

// const cards = [
//   { title: 'Undergraduate Courses', image: '/program1.jpg' },
//   { title: 'Master’s Courses', image: '/program2.jpg' },
//   { title: 'Become Lecturer', image: '/program3.jpg' },
// ];

// export default function ProgramSteps() {
//   return (
//     <section className="py-20 px-6 bg-altiusLight text-altiusNavy border-y border-gray-200">
//       <div className="max-w-6xl mx-auto space-y-16">
        
//         <div className="text-center max-w-xl mx-auto">
//           <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
//             Course And Study Program
//           </h2>
//         </div>

//         {/* Timeline Steps */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 relative">
//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center text-center space-y-3">
//               <div className="w-12 h-12 rounded-full bg-altiusGold text-altiusNavy flex items-center justify-center font-bold text-lg shadow-md z-10">
//                 {step.icon}
//               </div>
//               <h3 className="font-serif font-bold text-sm text-altiusNavy">{step.title}</h3>
//               <p className="text-gray-600 text-[11px] leading-relaxed">{step.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Image Showcase Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
//           {cards.map((card, index) => (
//             <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 group">
//               <div className="relative h-48 w-full">
//                 <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
//               </div>
//               <div className="p-6 text-center">
//                 <h4 className="font-serif font-bold text-altiusNavy text-base">{card.title}</h4>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }




'use client';

const offerings = [
  {
    icon: (
      <svg className="w-6 h-6 text-altiusGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0.011.665M12 14L5.84 10.578C5.308 10.285 5 9.68 5 9v6m14 0v-6c0-.68-.308-1.285-.84-1.578L12 14z" />
      </svg>
    ),
    title: 'Academic & Language Tutoring',
    desc: 'Comprehensive tutoring in Math, Science, English, French, and Punjabi, alongside specialized TCF & TEF exam preparation.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-altiusGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Music Programs',
    desc: 'Explore rhythm, musical concepts, and performance skills to foster creativity, confidence, and discipline.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-altiusGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Technology & 3D Printing',
    desc: 'Hands-on learning covering 3D design, digital technology, robotics, and artificial intelligence concepts.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-altiusGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0.010.586.142l2.358 2.358M16 10V4m-8 6V4" />
      </svg>
    ),
    title: 'CNC & Skilled Trades',
    desc: 'Introduction to CNC programming, manufacturing operations, welding fundamentals, and workplace safety.'
  }
];

export default function ProgramSteps() {
  return (
    <section className="py-20 px-6 bg-altiusLight text-altiusNavy border-y border-gray-200">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Our Curriculum</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
            Diverse Learning Paths For Tomorrow's Careers
          </h2>
        </div>

        {/* 4-Column Clean Feature Grid with 6px rounding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-md border border-gray-200/80 shadow-sm hover:shadow transition flex flex-col justify-between space-y-4"
            >
              <div className="w-12 h-12 rounded-md bg-altiusNavy/5 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-sm text-altiusNavy">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}