// 'use client';

// import { useState, useEffect } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import ProgramsHero from '@/components/programs/ProgramsHero';
// import ProgramsSidebar from '@/components/programs/ProgramsSidebar';
// import FutureReadyContent from '@/components/programs/FutureReadyContent';
// import TutoringContent from '@/components/programs/TutoringContent';
// import LanguagesContent from '@/components/programs/LanguagesContent';
// import TcfTefContent from '@/components/programs/TcfTefContent';
// import MusicContent from '@/components/programs/MusicContent';
// import CoopContent from '@/components/programs/CoopContent';
// import CncContent from '@/components/programs/CncContent';
// import Tech3dContent from '@/components/programs/Tech3dContent';
// import WeldingContent from '@/components/programs/WeldingContent';

// export default function ProgramsPage() {
//   const [activeTab, setActiveTab] = useState('futureready');

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const tabParam = params.get('tab');
//     if (tabParam) {
//       const tabMap = {
//         'academic-tutoring': 'tutoring',
//         'tutoring': 'tutoring',
//         'language-programs': 'languages',
//         'languages': 'languages',
//         'tcf-tef-preparation': 'tcf-tef',
//         'tcf-tef': 'tcf-tef',
//         'music-programs': 'music',
//         'music': 'music',
//         'cnc-programming': 'cnc',
//         'cnc': 'cnc',
//         '3d-printing': '3d-printing',
//         'welding-trades': 'welding',
//         'welding': 'welding',
//         'futureready': 'futureready',
//         'coop': 'coop'
//       };
//       if (tabMap[tabParam]) {
//         setActiveTab(tabMap[tabParam]);
//       }
//     }
//   }, []);

//   const programsData = [
//     {
//       id: 'futureready',
//       title: 'Grades 5–12 (FutureReady™)',
//       subtitle: 'Career • Leadership • Innovation • Life Skills',
//       description: 'An 8-year structured system taking a child from career discovery in Grade 5 to complete career readiness in Grade 12.',
//       component: <FutureReadyContent />
//     },
//     {
//       id: 'tutoring',
//       title: 'Academic Tutoring',
//       subtitle: 'Core Subject Mastery & Confidence',
//       description: 'We provide tutoring and academic support to help students build confidence and strengthen their understanding of important subjects.',
//       component: <TutoringContent />
//     },
//     {
//       id: 'languages',
//       title: 'Language Programs',
//       subtitle: 'Global Communication & Fluency',
//       description: 'Language learning opens doors to education, careers, communication, and new opportunities.',
//       component: <LanguagesContent />
//     },
//     {
//       id: 'tcf-tef',
//       title: 'TCF & TEF Preparation',
//       subtitle: 'French Language Examination Mastery',
//       description: 'Preparing for a French language examination requires practice, confidence, and an understanding of the test format.',
//       component: <TcfTefContent />
//     },
//     {
//       id: 'music',
//       title: 'Music Programs',
//       subtitle: 'Creativity, Discipline & Performance',
//       description: 'Music education helps students develop creativity, confidence, discipline, and performance skills in a supportive environment.',
//       component: <MusicContent />
//     },
//     {
//       id: 'coop',
//       title: 'Co-op & Career-Focused Programs',
//       subtitle: 'Real-World Skills & Practical Experience',
//       description: 'Connecting learning with real-world skills and future career opportunities.',
//       component: <CoopContent />
//     },
//     {
//       id: 'cnc',
//       title: 'CNC Programming',
//       subtitle: 'Advanced Manufacturing & Industrial Technology',
//       description: 'Technology and manufacturing are important parts of today\'s skilled trades and modern industries.',
//       component: <CncContent />
//     },
//     {
//       id: '3d-printing',
//       title: '3D Printing & Technology',
//       subtitle: 'Innovation, Design & Robotics',
//       description: 'Hands-on technology programs encouraging students to think creatively, explore new ideas, and develop future skills.',
//       component: <Tech3dContent />
//     },
//     {
//       id: 'welding',
//       title: 'Welding & Skilled Trades',
//       subtitle: 'Foundational Craft & Safety Awareness',
//       description: 'Skilled trades offer valuable career opportunities, foundational learning, and workplace safety awareness.',
//       component: <WeldingContent />
//     }
//   ];

//   const currentProgram = programsData.find(p => p.id === activeTab) || programsData[0];

//   return (
//     <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
//       <div>
//         <Navbar />
//         <ProgramsHero />

//         <section className="py-16 px-6 max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
//             <ProgramsSidebar 
//               activeTab={activeTab} 
//               setActiveTab={setActiveTab} 
//               programsList={programsData} 
//             />

//             <div className="lg:col-span-8 space-y-6">
//               <div className="bg-white p-8 sm:p-10 border border-gray-200 shadow-sm space-y-6" style={{ borderRadius: '8px' }}>
//                 <div className="border-b border-gray-100 pb-4 space-y-2">
//                   <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
//                     {currentProgram.subtitle}
//                   </span>
//                   <h2 className="font-serif text-3xl font-bold text-altiusNavy">
//                     {currentProgram.title}
//                   </h2>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {currentProgram.description}
//                   </p>
//                 </div>

//                 <div>
//                   {currentProgram.component}
//                 </div>

//                 <div className="pt-6 border-t border-gray-100 flex justify-end">
//                   <a 
//                     href="/contact" 
//                     style={{ borderRadius: '6px' }}
//                     className="bg-altiusBlue text-white text-xs font-bold px-6 py-3 uppercase tracking-wider hover:bg-blue-600 transition shadow-sm"
//                   >
//                     Enquire About This Program &rarr;
//                   </a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </section>

//       </div>
//       <Footer />
//     </main>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsSidebar from '@/components/programs/ProgramsSidebar';
import FutureReadyContent from '@/components/programs/FutureReadyContent';
import TutoringContent from '@/components/programs/TutoringContent';
import LanguagesContent from '@/components/programs/LanguagesContent';
import TcfTefContent from '@/components/programs/TcfTefContent';
import MusicContent from '@/components/programs/MusicContent';
import CoopContent from '@/components/programs/CoopContent';
import CncContent from '@/components/programs/CncContent';
import Tech3dContent from '@/components/programs/Tech3dContent';
import WeldingContent from '@/components/programs/WeldingContent';

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('futureready');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (tabParam) {
      const tabMap: Record<string, string> = {
        'academic-tutoring': 'tutoring',
        'tutoring': 'tutoring',
        'language-programs': 'languages',
        'languages': 'languages',
        'tcf-tef-preparation': 'tcf-tef',
        'tcf-tef': 'tcf-tef',
        'music-programs': 'music',
        'music': 'music',
        'cnc-programming': 'cnc',
        'cnc': 'cnc',
        '3d-printing': '3d-printing',
        'welding-trades': 'welding',
        'welding': 'welding',
        'futureready': 'futureready',
        'coop': 'coop'
      };
      if (tabMap[tabParam]) {
        setActiveTab(tabMap[tabParam]);
      }
    }
  }, []);

  const programsData = [
    {
      id: 'futureready',
      title: 'Grades 5–12 (FutureReady™)',
      subtitle: 'Career • Leadership • Innovation • Life Skills',
      description: 'An 8-year structured system taking a child from career discovery in Grade 5 to complete career readiness in Grade 12.',
      component: <FutureReadyContent />
    },
    {
      id: 'tutoring',
      title: 'Academic Tutoring',
      subtitle: 'Core Subject Mastery & Confidence',
      description: 'We provide tutoring and academic support to help students build confidence and strengthen their understanding of important subjects.',
      component: <TutoringContent />
    },
    {
      id: 'languages',
      title: 'Language Programs',
      subtitle: 'Global Communication & Fluency',
      description: 'Language learning opens doors to education, careers, communication, and new opportunities.',
      component: <LanguagesContent />
    },
    {
      id: 'tcf-tef',
      title: 'TCF & TEF Preparation',
      subtitle: 'French Language Examination Mastery',
      description: 'Preparing for a French language examination requires practice, confidence, and an understanding of the test format.',
      component: <TcfTefContent />
    },
    {
      id: 'music',
      title: 'Music Programs',
      subtitle: 'Creativity, Discipline & Performance',
      description: 'Music education helps students develop creativity, confidence, discipline, and performance skills in a supportive environment.',
      component: <MusicContent />
    },
    {
      id: 'coop',
      title: 'Co-op & Career-Focused Programs',
      subtitle: 'Real-World Skills & Practical Experience',
      description: 'Connecting learning with real-world skills and future career opportunities.',
      component: <CoopContent />
    },
    {
      id: 'cnc',
      title: 'CNC Programming',
      subtitle: 'Advanced Manufacturing & Industrial Technology',
      description: 'Technology and manufacturing are important parts of today\'s skilled trades and modern industries.',
      component: <CncContent />
    },
    {
      id: '3d-printing',
      title: '3D Printing & Technology',
      subtitle: 'Innovation, Design & Robotics',
      description: 'Hands-on technology programs encouraging students to think creatively, explore new ideas, and develop future skills.',
      component: <Tech3dContent />
    },
    {
      id: 'welding',
      title: 'Welding & Skilled Trades',
      subtitle: 'Foundational Craft & Safety Awareness',
      description: 'Skilled trades offer valuable career opportunities, foundational learning, and workplace safety awareness.',
      component: <WeldingContent />
    }
  ];

  const currentProgram = programsData.find(p => p.id === activeTab) || programsData[0];

  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <div>
        <Navbar />
        <ProgramsHero />

        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <ProgramsSidebar 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              programsList={programsData} 
            />

            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white p-8 sm:p-10 border border-gray-200 shadow-sm space-y-6" style={{ borderRadius: '8px' }}>
                <div className="border-b border-gray-100 pb-4 space-y-2">
                  <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs block">
                    {currentProgram.subtitle}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-altiusNavy">
                    {currentProgram.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {currentProgram.description}
                  </p>
                </div>

                <div>
                  {currentProgram.component}
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-end">
                  <a 
                    href="/contact" 
                    style={{ borderRadius: '6px' }}
                    className="bg-altiusBlue text-white text-xs font-bold px-6 py-3 uppercase tracking-wider hover:bg-blue-600 transition shadow-sm"
                  >
                    Enquire About This Program &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}