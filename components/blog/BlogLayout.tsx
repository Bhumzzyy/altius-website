'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Expanded categories and posts tailored to Altius Education Inc.
const blogCategories = [
  {
    name: "All Articles",
    blogs: [
      {
        id: "1",
        title: "Learning Beyond the Classroom: Everyday Activities That Build Academic Skills",
        category: "Academic Tutoring",
        date: "June 10, 2026",
        image: "/program1.jpg",
        excerpt: "Discover practical everyday activities—from reading and math puzzles to critical thinking exercises—that help students strengthen core skills outside formal study hours."
      },
      {
        id: "2",
        title: "Preparing for French Language Exams: TCF & TEF Success Strategies",
        category: "TCF & TEF Prep",
        date: "May 28, 2026",
        image: "/program2.jpg",
        excerpt: "Mastering speaking, listening, reading, and writing for the TCF or TEF requires structured practice and test familiarity. Here is how learners can approach exam prep with confidence."
      },
      {
        id: "3",
        title: "Why Early Exposure to Skilled Trades & Technology Matters",
        category: "Skilled Trades",
        date: "May 15, 2026",
        image: "/program3.jpg",
        excerpt: "From 3D printing and CNC programming to foundational welding awareness, exploring modern industries early gives students a valuable head start on future career paths."
      },
      {
        id: "4",
        title: "The Cognitive Benefits of Music Education for Children and Youth",
        category: "Music Programs",
        date: "May 02, 2026",
        image: "/program4.jpg",
        excerpt: "Music education does more than teach rhythm—it builds discipline, enhances memory, and fosters creative self-expression in a supportive environment."
      }
    ]
  },
  {
    name: "Academic Tutoring",
    blogs: [
      {
        id: "1",
        title: "Learning Beyond the Classroom: Everyday Activities That Build Academic Skills",
        category: "Academic Tutoring",
        date: "June 10, 2026",
        image: "/program1.jpg",
        excerpt: "Discover practical everyday activities—from reading and math puzzles to critical thinking exercises—that help students strengthen core skills outside formal study hours."
      },
      {
        id: "5",
        title: "Building Math and Science Confidence: Tips for K-12 Students",
        category: "Academic Tutoring",
        date: "April 20, 2026",
        image: "/program5.jpg",
        excerpt: "Overcoming math anxiety and complex science concepts starts with breaking down problems into manageable, engaging steps with personalized support."
      }
    ]
  },
  {
    name: "Language & TCF/TEF",
    blogs: [
      {
        id: "2",
        title: "Preparing for French Language Exams: TCF & TEF Success Strategies",
        category: "TCF & TEF Prep",
        date: "May 28, 2026",
        image: "/program2.jpg",
        excerpt: "Mastering speaking, listening, reading, and writing for the TCF or TEF requires structured practice and test familiarity. Here is how learners can approach exam prep with confidence."
      },
      {
        id: "6",
        title: "Multilingual Advantage: Learning English, French, and Punjabi",
        category: "Language Programs",
        date: "April 12, 2026",
        image: "/program1.jpg",
        excerpt: "Explore how learning multiple languages enhances communication, opens up international career opportunities, and broadens cultural understanding."
      }
    ]
  },
  {
    name: "Technology & CNC",
    blogs: [
      {
        id: "3",
        title: "Why Early Exposure to Skilled Trades & Technology Matters",
        category: "Skilled Trades",
        date: "May 15, 2026",
        image: "/program3.jpg",
        excerpt: "From 3D printing and CNC programming to foundational welding awareness, exploring modern industries early gives students a valuable head start on future career paths."
      },
      {
        id: "7",
        title: "Introduction to 3D Printing & Digital Design for Young Creators",
        category: "3D Printing & Tech",
        date: "March 30, 2026",
        image: "/program2.jpg",
        excerpt: "How hands-on digital technology, 3D modeling, and creative problem-solving spark imagination and prepare students for technology-driven futures."
      }
    ]
  },
  {
    name: "Music & Arts",
    blogs: [
      {
        id: "4",
        title: "The Cognitive Benefits of Music Education for Children and Youth",
        category: "Music Programs",
        date: "May 02, 2026",
        image: "/program4.jpg",
        excerpt: "Music education does more than teach rhythm—it builds discipline, enhances memory, and fosters creative self-expression in a supportive environment."
      }
    ]
  },
  {
    name: "Center News",
    blogs: [
      {
        id: "8",
        title: "Altius Education Announces New Specialized Program Batches for 2026",
        category: "News",
        date: "June 12, 2026",
        image: "/program3.jpg",
        excerpt: "We are thrilled to announce expanded support across tutoring, languages, music, CNC programming, and skilled trades designed to help students achieve greater heights."
      }
    ]
  }
];

export default function BlogLayout() {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  // Get active category data
  const currentCategoryData = blogCategories.find(c => c.name === activeCategory) || blogCategories[0];

  return (
    <section className="py-20 px-6 bg-white text-altiusNavy">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sidebar: Categories List & Promo Card */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-altiusLight p-6 rounded-md border border-gray-200/80">
              <h3 className="font-serif text-lg font-bold text-altiusNavy mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-altiusGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Categories
              </h3>
              <ul className="space-y-2">
                {blogCategories.map((cat, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`text-sm font-medium transition text-left w-full py-2 px-3 rounded-md ${
                        activeCategory === cat.name 
                          ? 'bg-altiusNavy text-white font-bold shadow-sm' 
                          : 'text-gray-700 hover:bg-gray-200/60'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Promo Card with 6px rounding (rounded-md) */}
            <div className="relative rounded-md overflow-hidden shadow-md h-[340px] flex flex-col justify-end p-6 text-white">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/student1.jpg" 
                  alt="Altius Learning Programs" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-altiusNavy/95 via-altiusNavy/50 to-transparent" />
              </div>

              <div className="relative z-10 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-altiusGold">Learn Higher. Achieve Greater.</span>
                <h4 className="font-serif text-lg font-bold leading-snug">
                  Explore our tutoring, languages, and career programs today!
                </h4>
                <div className="pt-2">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-altiusGold text-altiusNavy text-xs font-semibold px-4 py-2 rounded-md shadow hover:bg-yellow-500 transition tracking-wider uppercase"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area: Grid of Blog Posts for Selected Category */}
          <div className="lg:col-span-9">
            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
              <h2 className="font-serif text-xl font-bold text-altiusNavy">
                {activeCategory} <span className="text-sm font-normal text-gray-500">({currentCategoryData.blogs.length} articles)</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentCategoryData.blogs.map((blog) => (
                <div key={blog.id} className="flex flex-col space-y-4 group bg-white border border-gray-200/80 rounded-md p-5 shadow-sm hover:shadow transition">
                  
                  {/* Blog Thumbnail Image with 6px rounding */}
                  <div className="relative h-52 w-full rounded-md overflow-hidden bg-gray-100">
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Blog Meta & Title */}
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-bold text-gray-500">
                        <span className="text-altiusGold bg-altiusNavy px-2 py-0.5 rounded-sm">{blog.category}</span>
                        <span>{blog.date}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-altiusNavy group-hover:text-altiusBlue transition leading-snug">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-altiusNavy hover:text-altiusBlue transition"
                      >
                        <span className="w-2 h-0.5 bg-altiusGold inline-block" /> Read more
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}