'use client';

import Image from 'next/image';

const team = [
  { name: 'Career Mentors', role: 'Discover → Launch Journey Guides', image: '/student1.jpg' },
  { name: 'Pathway Specialists', role: 'Engineering, Business, Media & Trades', image: '/student2.jpg' },
  { name: 'Technology Instructors', role: 'Coding, AI, CAD & 3D Printing', image: '/student3.jpg' },
  { name: 'Industry & Workplace Guides', role: 'Co-op, Interviews & Career Readiness', image: '/student4.jpg' },
];

export default function LeadershipTeam() {
  return (
    <section className="py-20 px-6 bg-altiusLight text-altiusNavy">
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="text-center max-w-lg mx-auto space-y-2">
          <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Our Mentors</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
            Mentors Who Build Careers, Not Just Lessons
          </h2>
          <p className="text-gray-600 text-sm">
            Every stage of the FutureReady™ journey is guided by mentors who connect classroom
            learning to real industries and workplaces.
          </p>
        </div>

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