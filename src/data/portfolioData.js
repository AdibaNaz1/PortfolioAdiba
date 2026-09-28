export const PERSONAL_INFO = {
  name: "Adiba Naz",
  title: "Full Stack Developer with AI",
  status: "Available for Opportunities",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    year: "4th Year Undergraduate",
    college: "Ambalika Institute of Management & Technology",
    graduation: "2026",
  },
  bio: "Passionate 4th-year Computer Science engineering student dedicated to building high-performance full-stack web applications, integrating AI/LLM workflows, and contributing to open source. Focused on clean code, modular architecture, and solving practical real-world problems.",
  heroSupportingText: "I build responsive web applications, scalable backend systems, and AI-powered experiences using modern technologies.",
  githubUsername: "AdibaNaz1",
  githubUrl: "https://github.com/AdibaNaz1",
  linkedinUrl: "https://linkedin.com/in/#PLACEHOLDER",
  email: "adibanaz.work@gmail.com",
  resumeUrl: "#PLACEHOLDER_RESUME",
};

export const QUICK_STATS = [
  { label: "Academic Standing", value: "B.Tech CSE (4th Year)", highlight: "Final Year" },
  { label: "Core Discipline", value: "Full Stack Development", highlight: "MERN Stack" },
  { label: "Modern Edge", value: "AI & LLM Integration", highlight: "APIs & Workflows" },
  { label: "Community", value: "Open Source Contributor", highlight: "GitHub Active" },
  { label: "Foundation", value: "DSA Practice", highlight: "Problem Solving" },
];

export const CURRENTLY_LEARNING = [
  { name: "Advanced React Patterns", icon: "Code2", tag: "Frontend" },
  { name: "Advanced Node.js & Scalability", icon: "Server", tag: "Backend" },
  { name: "AI / LLM System Integration", icon: "Sparkles", tag: "AI" },
  { name: "Data Structures & Algorithms", icon: "Binary", tag: "Core CS" },
];

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "HTML5", level: "Advanced", icon: "Layout" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code" },
      { name: "React.js", level: "Proficient", icon: "Atom" },
      { name: "Tailwind CSS", level: "Proficient", icon: "Wind" },
      { name: "Bootstrap", level: "Proficient", icon: "Boxes" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Developing robust server-side systems and RESTful endpoints.",
    skills: [
      { name: "Node.js", level: "Proficient", icon: "Cpu" },
      { name: "Express.js", level: "Proficient", icon: "Layers" },
      { name: "REST APIs", level: "Proficient", icon: "Network" },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    description: "NoSQL schema design, queries, and persistent storage.",
    skills: [
      { name: "MongoDB", level: "Proficient", icon: "Database" },
    ],
  },
  {
    id: "ai",
    title: "AI & Modern Workflows",
    description: "Integrating intelligent reasoning and language models into web apps.",
    skills: [
      { name: "AI / LLM APIs", level: "Active Learning", icon: "Sparkles" },
      { name: "Prompt Engineering", level: "Skilled", icon: "Wand2" },
      { name: "AI-Powered Web Apps", level: "Active Development", icon: "Bot" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    description: "Version control, API validation, and development environments.",
    skills: [
      { name: "Git", level: "Proficient", icon: "GitBranch" },
      { name: "GitHub", level: "Proficient", icon: "Github" },
      { name: "VS Code", level: "Daily Driver", icon: "Terminal" },
      { name: "Postman", level: "Proficient", icon: "Send" },
    ],
  },
];

export const EXPERIENCE = [
  {
    id: "cut-edge-tech",
    role: "Web Development Intern",
    company: "Cut Edge Technology",
    period: "Internship Experience",
    type: "Internship",
    points: [
      "Worked on web development and contributed to real-world web application development.",
      "Utilized modern frontend technologies to deliver clean, responsive user interfaces.",
      "Practiced and strengthened JavaScript core fundamentals and full-stack development patterns.",
      "Collaborated on CRM-related web development work, assisting in feature implementation and workflow optimization.",
    ],
    tech: ["JavaScript", "HTML/CSS", "CRM Workflows", "Frontend Tech", "Responsive Design"],
  },
];

export const PROJECTS = [
  {
    id: "votechain",
    title: "VoteChain – College Election Voting System",
    shortDescription: "A full-stack college election voting platform with separate administrative control and secure student voting portals.",
    fullDescription: "VoteChain is designed to streamline campus democracy by providing a transparent, structured online election system. It segregates administrative tasks (election configuration, candidate verification, live vote tabulation) from the student experience (secure credential authentication, candidate exploration, single-cast ballot submission).",
    tech: ["JavaScript", "React/Vite", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    category: "Full Stack",
    features: [
      "Student authentication and credential verification",
      "Dynamic candidate listing with manifestos",
      "Secure ballot voting flow with duplicate prevention",
      "Comprehensive election management lifecycle",
      "Administrative dashboard for election officers",
      "Live candidate vote counts and tabulation",
      "Structured REST API architecture with robust error handling",
    ],
    demoUrl: "#PLACEHOLDER",
    githubUrl: "https://github.com/AdibaNaz1",
    badge: "Featured System",
    stats: {
      architecture: "Client-Server REST",
      database: "MongoDB Document Store",
      roleSupport: "Admin & Student Portals",
    },
  },
  {
    id: "enigma-blog",
    title: "Enigma Tech Blog",
    shortDescription: "A full-stack blog and expense management application built using the MERN stack with JWT authentication.",
    fullDescription: "A dual-purpose platform combining a technical blog engine with expense tracking capabilities. Engineered with the MERN stack, it incorporates token-based authentication (JWT), protected routes, state management, and full CRUD operations with MongoDB persistence.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    category: "Full Stack",
    features: [
      "JWT-based user authentication and route protection",
      "Full CRUD operations for publishing articles and tracking entries",
      "RESTful API endpoints with modular controller patterns",
      "Responsive and clean reader-focused interface",
      "MongoDB database integration with Mongoose schemas",
    ],
    demoUrl: "#PLACEHOLDER",
    githubUrl: "https://github.com/AdibaNaz1",
    badge: "MERN Stack",
    stats: {
      auth: "JSON Web Tokens",
      storage: "MongoDB Atlas",
      client: "React SPA",
    },
  },
  {
    id: "manetor-crm",
    title: "Manetor CRM",
    shortDescription: "A CRM-focused web application designed for organizing leads, customer-related workflows, and WhatsApp communication.",
    fullDescription: "Designed to address client acquisition and customer communication needs. Manetor CRM provides an intuitive interface for managing inbound business leads, showcasing tiered pricing models, collecting client testimonials, and integrating WhatsApp CRM touchpoints.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: "Frontend & CRM",
    features: [
      "Fully responsive corporate interface built with modern Bootstrap",
      "WhatsApp CRM integration entry-points for instant messaging",
      "Structured lead capture and management UI",
      "Tiered pricing structure showcase",
      "Customer testimonials and feedback carousel",
      "Interactive contact and inquiry forms",
    ],
    demoUrl: "#PLACEHOLDER",
    githubUrl: "https://github.com/AdibaNaz1",
    badge: "Client Interface",
    stats: {
      layout: "Bootstrap Grid",
      leadFlow: "Direct WhatsApp CTA",
      responsiveness: "Mobile-First",
    },
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot Application",
    shortDescription: "An AI-powered conversational web application demonstrating seamless integration of LLM functionality into a modern interface.",
    fullDescription: "Demonstrates practical integration of Large Language Model (LLM) APIs into an interactive web application. Features dynamic prompt submission, structured response rendering, conversation context management, and graceful error handling.",
    tech: ["JavaScript", "React.js", "AI/LLM API", "CSS3 / Tailwind"],
    category: "AI & Web",
    features: [
      "Real-time integration with modern AI / LLM APIs",
      "Context-aware conversation thread rendering",
      "Interactive prompt suggestions and clean user input bar",
      "Markdown & code snippet rendering in assistant responses",
      "Graceful fallback handling for API rate limits and connection issues",
    ],
    demoUrl: "#PLACEHOLDER",
    githubUrl: "https://github.com/AdibaNaz1",
    badge: "AI Powered",
    stats: {
      engine: "LLM API Integration",
      frontend: "React Reactive UI",
      ux: "Chat Stream Simulation",
    },
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Full Stack Development Certification",
    organization: "Softpro",
    type: "Certification",
    description: "Completed comprehensive training and evaluation covering full-stack web architectures, frontend engineering, and backend service integration.",
    icon: "Award",
    tag: "Certified",
  },
  {
    title: "Open Source Contributions",
    organization: "GitHub Community",
    type: "Open Source",
    description: "Active participant in the open-source developer ecosystem, contributing code, maintaining personal repositories, and learning collaborative development workflows.",
    icon: "GitPullRequest",
    tag: "Community",
  },
  {
    title: "Enigma Technical Club",
    organization: "College Technical Club",
    type: "Leadership & Club Activity",
    description: "Active contributor and member involved in technical workshops, peer learning sessions, coding challenges, and collaborative student project builds.",
    icon: "Users",
    tag: "Campus Tech",
  },
  {
    title: "Hackathons & Technical Events",
    organization: "Academic & Tech Competitions",
    type: "Competitive Events",
    description: "Participated in inter-college coding events and hackathon challenges, applying problem-solving skills under time constraints.",
    icon: "Trophy",
    tag: "Competitions",
  },
];
