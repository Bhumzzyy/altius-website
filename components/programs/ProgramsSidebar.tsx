'use client';

import { useState } from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  programsList: { id: string; title: string }[];
}

export default function ProgramsSidebar({ activeTab, setActiveTab, programsList }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Find currently active program title to display on the mobile toggle button
  const currentProgramTitle = programsList.find(p => p.id === activeTab)?.title || 'Select Program';

  return (
    <div id="programs-sidebar" className="lg:col-span-4 bg-white p-4 border border-gray-200 shadow-sm space-y-1.5 lg:sticky lg:top-28" style={{ borderRadius: '8px' }}>
      
      {/* Mobile Collapsible Header / Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderRadius: '6px' }}
        className="w-full lg:hidden flex items-center justify-between px-4 py-3 bg-altiusNavy text-white font-bold text-xs uppercase tracking-wider shadow-sm"
      >
        <div className="flex items-center gap-2 truncate">
          <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <span className="truncate">Menu: {currentProgramTitle}</span>
        </div>
        <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Desktop Heading (Always visible on large screens) */}
      <h3 className="hidden lg:flex font-serif font-bold text-xs uppercase tracking-wider text-altiusNavy px-3 py-2 border-b border-gray-100 mb-2 items-center gap-2">
        <svg className="w-4 h-4 text-altiusBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        Program Menu
      </h3>

      {/* Programs List (Collapsible on mobile, always open on desktop) */}
      <div className={`space-y-1.5 pt-2 lg:pt-0 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        {programsList.map((prog) => (
          <button
            key={prog.id}
            onClick={() => {
              setActiveTab(prog.id);
              setIsOpen(false); // Close menu automatically on mobile selection
            }}
            style={{ borderRadius: '6px' }}
            className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-wider transition flex items-center justify-between ${
              activeTab === prog.id 
                ? 'bg-altiusNavy text-altiusGold shadow' 
                : 'text-gray-600 hover:bg-altiusLight hover:text-altiusNavy'
            }`}
          >
            <span className="truncate">{prog.title}</span>
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>

    </div>
  );
}