export interface CurriculumArea {
  area: string;
  items: string[];
}

export interface Stage {
  grade: string;
  stage: string;
  question: string;
  goal: string;
  curriculum: CurriculumArea[];
  majorProject: {
    title: string;
    detail: string;
  };
  emoji: string;
}

export const PROGRESSION: { grade: string; stage: string; question: string }[] = [
  { grade: "Grade 5", stage: "Discover", question: "Who am I?" },
  { grade: "Grade 6", stage: "Explore", question: "What interests me?" },
  { grade: "Grade 7", stage: "Create", question: "What can I build?" },
  { grade: "Grade 8", stage: "Develop", question: "What skills can I develop?" },
  { grade: "Grade 9", stage: "Experience", question: "What does the real world look like?" },
  { grade: "Grade 10", stage: "Specialize", question: "Which pathway fits me?" },
  { grade: "Grade 11", stage: "Apply", question: "Can I use my skills professionally?" },
  { grade: "Grade 12", stage: "Launch", question: "Am I ready for my next step?" },
];

export const PILLARS = [
  { title: "Communication", desc: "Speak, write and present with confidence in any room.", emoji: "🗣️" },
  { title: "Leadership", desc: "Take responsibility, lead teams and make decisions.", emoji: "🎤" },
  { title: "Technology", desc: "Coding, AI, CAD, 3D printing and digital tools.", emoji: "💻" },
  { title: "Innovation", desc: "Design thinking, problem solving and prototyping.", emoji: "🔧" },
  { title: "Business", desc: "Marketing, sales, entrepreneurship and e-commerce.", emoji: "💼" },
  { title: "Financial Literacy", desc: "Saving, budgeting, credit and investing basics.", emoji: "💰" },
  { title: "Career Readiness", desc: "Resumes, interviews, portfolios and workplace skills.", emoji: "🚀" },
];

export const STAGES: Stage[] = [
  {
    grade: "Grade 5",
    stage: "Discover",
    question: "Who am I?",
    emoji: "🧭",
    goal: "Help students understand themselves, the world of work and basic life skills.",
    curriculum: [
      { area: "Personality", items: ["Confidence", "Strengths & weaknesses", "Growth mindset"] },
      { area: "Communication", items: ["Speaking clearly", "Listening", "Introductions"] },
      { area: "Social Skills", items: ["Teamwork", "Respect", "Cooperation"] },
      { area: "Careers", items: ["What is a career?", "Different professions"] },
      { area: "Money", items: ["Needs vs. wants", "Saving", "Budgeting"] },
      { area: "Technology", items: ["Computer basics", "Digital safety", "AI awareness"] },
      { area: "Innovation", items: ["Simple design/build challenges"] },
      { area: "Creativity", items: ["Art", "Design", "Presentation"] },
      { area: "Life Skills", items: ["Time management", "Organization"] },
      { area: "Leadership", items: ["Taking responsibility", "Helping others"] },
    ],
    majorProject: {
      title: "My Future Career",
      detail: "Each student researches one career and presents it to the class.",
    },
  },
  {
    grade: "Grade 6",
    stage: "Explore",
    question: "What interests me?",
    emoji: "🔍",
    goal: "Students discover their interests and begin developing practical skills.",
    curriculum: [
      { area: "Personality", items: ["Self-awareness", "Confidence", "Resilience"] },
      { area: "Communication", items: ["Public speaking", "Storytelling"] },
      { area: "Leadership", items: ["Team roles", "Decision-making"] },
      { area: "Careers", items: ["STEM", "Business", "Healthcare", "Trades", "Arts"] },
      { area: "Finance", items: ["Saving", "Budgeting", "Basic banking"] },
      { area: "Technology", items: ["Digital productivity", "Presentations"] },
      { area: "Coding", items: ["Block coding", "Introductory programming"] },
      { area: "Design", items: ["Engineering challenges"] },
      { area: "Entrepreneurship", items: ["Idea generation"] },
      { area: "Life Skills", items: ["Planning", "Responsibility"] },
    ],
    majorProject: {
      title: "Invent Something",
      detail: "Students identify a problem, create an idea, design it and present it.",
    },
  },
  {
    grade: "Grade 7",
    stage: "Create",
    question: "What can I build?",
    emoji: "🛠️",
    goal: "Move students from learning about careers to actually creating things.",
    curriculum: [
      { area: "Personality", items: ["Leadership", "Confidence", "Emotional intelligence"] },
      { area: "Communication", items: ["Debate", "Presentations", "Persuasive speaking"] },
      { area: "Business", items: ["Products", "Customers", "Branding"] },
      { area: "Entrepreneurship", items: ["Business ideas"] },
      { area: "Finance", items: ["Budgeting", "Profit and cost"] },
      { area: "Coding", items: ["Introduction to Python"] },
      { area: "Engineering", items: ["Design thinking"] },
      { area: "CAD", items: ["Introduction to 3D design"] },
      { area: "3D Printing", items: ["Design to prototype"] },
      { area: "Marketing", items: ["Posters", "Advertising", "Social media concepts"] },
    ],
    majorProject: {
      title: "Design & Build Challenge",
      detail: "Students design a product and create a working prototype.",
    },
  },
  {
    grade: "Grade 8",
    stage: "Develop",
    question: "What skills can I develop?",
    emoji: "📈",
    goal: "Develop stronger technical, business and leadership skills before entering high school.",
    curriculum: [
      { area: "Leadership", items: ["Team leadership", "Conflict resolution"] },
      { area: "Communication", items: ["Professional presentations"] },
      { area: "Career", items: ["Career assessment", "Exploration"] },
      { area: "Business", items: ["Marketing", "Customer research"] },
      { area: "Entrepreneurship", items: ["Business model basics"] },
      { area: "Finance", items: ["Profit", "Revenue", "Expenses"] },
      { area: "Coding", items: ["Python", "Web fundamentals"] },
      { area: "AI", items: ["Responsible use of AI"] },
      { area: "CAD", items: ["Intermediate 3D modelling"] },
      { area: "3D Printing", items: ["Prototyping"] },
      { area: "Career Skills", items: ["Resumes", "Interviews"] },
    ],
    majorProject: {
      title: "Build a Business",
      detail: "Problem → Product → Prototype → Brand → Marketing → Presentation.",
    },
  },
  {
    grade: "Grade 9",
    stage: "Experience",
    question: "What does the real world look like?",
    emoji: "🏢",
    goal: "Introduce students to the actual workplace and different career pathways.",
    curriculum: [
      { area: "Career Exploration", items: ["Career assessment", "University", "College", "Skilled trades", "Apprenticeships", "Entrepreneurship"] },
      { area: "Professional Communication", items: ["Professional email", "Phone etiquette", "Presentations", "Workplace behaviour"] },
      { area: "Technology", items: ["Coding", "AI", "CAD", "3D printing", "Digital tools"] },
      { area: "Business", items: ["Entrepreneurship", "Marketing", "Sales", "Customer service"] },
      { area: "Financial Literacy", items: ["Banking", "Budgeting", "Credit", "Taxes intro"] },
      { area: "Workplace Readiness", items: ["Punctuality", "Professionalism", "Teamwork", "Workplace safety"] },
    ],
    majorProject: {
      title: "Career Discovery Portfolio",
      detail: "Students participate in workplace tours, career speakers, job-shadowing, industry visits and professional interviews.",
    },
  },
  {
    grade: "Grade 10",
    stage: "Specialize",
    question: "Which pathway fits me?",
    emoji: "🎯",
    goal: "Students begin choosing a career pathway across five tracks.",
    curriculum: [
      { area: "Engineering & Technology", items: ["CAD", "3D modelling", "3D printing", "Mechanical design", "Robotics", "CNC concepts", "Programming", "Automation"] },
      { area: "Business & Entrepreneurship", items: ["Business planning", "Marketing", "Sales", "Accounting basics", "E-commerce", "Digital marketing"] },
      { area: "Education & Leadership", items: ["Communication", "Leadership", "Child development basics", "Teaching strategies", "Classroom activities", "Tutoring", "Presentation skills"] },
      { area: "Digital Media", items: ["Graphic design", "Photography", "Video", "Digital cinematography", "AI-assisted creativity", "Branding", "Social media"] },
      { area: "Manufacturing & Skilled Trades", items: ["Tools", "Mechanical fundamentals", "Manufacturing", "CAD", "CNC concepts", "3D printing", "Workplace safety"] },
    ],
    majorProject: {
      title: "Career Portfolio",
      detail: "Students produce a resume, cover letter, career plan, skills profile, portfolio and complete a mock interview.",
    },
  },
  {
    grade: "Grade 11",
    stage: "Apply",
    question: "Can I use my skills professionally?",
    emoji: "💼",
    goal: "Students start applying their knowledge to realistic professional situations.",
    curriculum: [
      { area: "Professional Development", items: ["Resume writing", "Cover letters", "Interviewing", "Networking", "Professional communication"] },
      { area: "Leadership", items: ["Project management", "Team leadership", "Conflict resolution", "Decision-making"] },
      { area: "Financial Independence", items: ["Paycheques", "Taxes", "Credit", "Banking", "Budgeting", "Financial planning"] },
      { area: "Semester 2 Specialization", items: ["Engineering: design & manufacture a product", "Business: create & operate a mini-business", "Coding: develop an app or website", "Education: develop & deliver a lesson", "Media: produce a professional campaign", "Manufacturing: design a component & process"] },
    ],
    majorProject: {
      title: "Workplace Learning",
      detail: "Where Ontario requirements are satisfied, eligible students participate in a co-operative education / workplace learning arrangement.",
    },
  },
  {
    grade: "Grade 12",
    stage: "Launch",
    question: "Am I ready for my next step?",
    emoji: "🚀",
    goal: "A student finishes Grade 12 knowing: Who am I? What can I do? What career do I want? How do I get there?",
    curriculum: [
      { area: "Career Launch", items: ["Resume", "Cover letters", "Interviews", "Networking", "Job applications", "References", "LinkedIn profile"] },
      { area: "Financial Independence", items: ["First job & paycheque", "Taxes", "Budgeting", "Credit scores", "Loans", "Insurance", "Investing fundamentals", "Housing costs"] },
      { area: "Entrepreneurship", items: ["Idea → Market research → Business model → Product → Marketing → Sales → Finance"] },
      { area: "Professional Skills", items: ["Workplace conflict", "Working with managers", "Negotiation", "Meetings", "Workplace ethics", "Problem solving"] },
      { area: "Capstone Project", items: ["Engineering: design + prototype + technical presentation", "Business: launch a small business", "Coding: build software", "Education: create & deliver an educational program", "Media: produce a professional campaign", "Trades: design / build / manufacturing project"] },
    ],
    majorProject: {
      title: "My Future Plan",
      detail: "Each Grade 12 student presents their final capstone: career choice, education pathway, skills, resume, portfolio, financial plan and 5-year goals.",
    },
  },
];

export const PATHWAY_LABELS = [
  { title: "Engineering & Technology", emoji: "⚙️" },
  { title: "Business & Entrepreneurship", emoji: "💼" },
  { title: "Education & Leadership", emoji: "🎓" },
  { title: "Digital Media", emoji: "🎬" },
  { title: "Manufacturing & Skilled Trades", emoji: "🔩" },
];