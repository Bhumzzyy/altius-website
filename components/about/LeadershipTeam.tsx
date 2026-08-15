// 'use client';

// import Image from 'next/image';

// const team = [
//   { name: 'Jack Treguردن', role: 'Teaching Assistant', image: '/student1.jpg' },
//   { name: 'Leanna Hartough', role: 'Teaching Assistant', image: '/student2.jpg' },
//   { name: 'Ted Carter', role: 'Professor', image: '/student3.jpg' },
//   { name: 'Sarah Jenkins', role: 'Senior Mentor', image: '/student4.jpg' },
// ];

// export default function LeadershipTeam() {
//   return (
//     <section className="py-20 px-6 bg-altiusLight text-altiusNavy">
//       <div className="max-w-6xl mx-auto space-y-12">
        
//         <div className="text-center">
//           <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
//             Our Vision For Altius Leadership & Faculty
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {team.map((member, index) => (
//             <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm flex flex-col">
//               <div className="relative h-64 w-full bg-gray-100">
//                 <Image src={member.image} alt={member.name} fill className="object-cover" />
//               </div>
//               <div className="p-5 text-center space-y-1">
//                 <h3 className="font-serif font-bold text-altiusNavy text-sm">{member.name}</h3>
//                 <p className="text-gray-500 text-xs font-medium">{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }




'use client';

import Image from 'next/image';

const team = [
  { name: 'Academic Faculty', role: 'Tutoring & Languages', image: '/student1.jpg' },
  { name: 'Language Specialists', role: 'French, English & Punjabi', image: '/student2.jpg' },
  { name: 'Technology Instructors', role: '3D Printing & CNC', image: '/student3.jpg' },
  { name: 'Skilled Trades Mentors', role: 'Welding & Career Exploration', image: '/student4.jpg' },
];

export default function LeadershipTeam() {
  return (
    <section className="py-20 px-6 bg-altiusLight text-altiusNavy">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="text-center max-w-lg mx-auto space-y-2">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Our Mentors</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
            Experienced Faculty & Instructors
          </h2>
        </div>

        {/* 4 Cards with rounded-md (6px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden border border-gray-200/80 shadow-sm flex flex-col">
              <div className="relative h-60 w-full bg-gray-100">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-center space-y-1">
                <h3 className="font-serif font-bold text-altiusNavy text-sm">{member.name}</h3>
                <p className="text-gray-500 text-xs font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}