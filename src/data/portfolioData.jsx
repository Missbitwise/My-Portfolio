import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiRedux, 
  SiSocketdotio, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiFramer, 
  SiGithub, 
  SiCloudinary, 
  SiDocker, 
  SiVite, 
  SiJavascript,
  SiPostgresql,
  SiPostman,
  SiGit,
  SiTypescript,
  SiPrisma,
  SiRedis
} from 'react-icons/si';
import { FaJava, FaLinkedin } from 'react-icons/fa';
import { Sparkles, MapPin, CreditCard, Code2, Layout, Server, Database, Wrench, Mail } from 'lucide-react';

export const DATA = {
  profile: {
    name: "Urmila Rajapurkar",
    firstName: "Urmila",
    title: "Full Stack Developer",
    shortBio: "Building modern web applications with React, Node.js, and MongoDB.",
    summary: "Full Stack Engineer focused on building fast, reliable web applications. I specialize in MERN stack development, RESTful APIs, and clean UI engineering.",
    location: "India",
    email: "urmilarajapurkar953@gmail.com",
    avatar: "/Urmi-image.png",
    status: "Available for opportunities",
    github: "https://github.com/missbitwise",
    linkedin: "https://www.linkedin.com/in/urmila-rajapurkar",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/missbitwise",
        icon: <SiGithub className="w-4 h-4 text-gray-200" />
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/urmila-rajapurkar",
        icon: <FaLinkedin className="w-4 h-4 text-cyan-400" />
      },
      {
        name: "Email",
        url: "mailto:urmilarajapurkar953@gmail.com",
        icon: <Mail className="w-4 h-4 text-purple-400" />
      }
    ]
  },
  navItems: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    badge: "About",
    title: "About Me",
    paragraphs: [
      "I'm Urmila Rajapurkar, a Full Stack Developer passionate about turning complex ideas into clean, efficient web products.",
      "My primary expertise is in frontend & backend JavaScript development using React, Next.js, Node.js, Express, and MongoDB. I focus on writing modular code, optimizing performance, and designing responsive interfaces."
    ],
    highlights: [
      { title: "Frontend Engineering", desc: "React, Next.js, Redux Toolkit, Tailwind CSS" },
      { title: "Backend & APIs", desc: "Node.js, Express, REST APIs, JWT Auth" },
      { title: "Database Systems", desc: "MongoDB, MySQL, PostgreSQL" },
    ]
  },
  skills: {
    badge: "Expertise",
    title: "Tech Stack & Skills",
    subtitle: "Technologies and frameworks I work with daily to build production-grade web applications.",
    items: [
      { name: "React.js", category: "Frontend", icon: <SiReact className="w-6 h-6 text-cyan-400" /> },
      { name: "Next.js", category: "Frontend", icon: <SiNextdotjs className="w-6 h-6 text-white" /> },
      { name: "JavaScript", category: "Language", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
      { name: "Node.js", category: "Backend", icon: <SiNodedotjs className="w-6 h-6 text-green-500" /> },
      { name: "Express.js", category: "Backend", icon: <SiExpress className="w-6 h-6 text-gray-200" /> },
      { name: "MongoDB", category: "Database", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
      { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
      { name: "Redux Toolkit", category: "State", icon: <SiRedux className="w-6 h-6 text-purple-400" /> },
      { name: "PostgreSQL", category: "Database", icon: <SiPostgresql className="w-6 h-6 text-blue-400" /> },
      { name: "Java", category: "Language", icon: <FaJava className="w-6 h-6 text-red-400" /> },
      { name: "Socket.IO", category: "Real-Time", icon: <SiSocketdotio className="w-6 h-6 text-white" /> },
      { name: "Docker", category: "DevOps", icon: <SiDocker className="w-6 h-6 text-blue-500" /> },
      { name: "Git & GitHub", category: "Version Control", icon: <SiGit className="w-6 h-6 text-orange-500" /> },
      { name: "Postman", category: "API Testing", icon: <SiPostman className="w-6 h-6 text-orange-400" /> },
      { name: "Framer Motion", category: "Animation", icon: <SiFramer className="w-6 h-6 text-pink-500" /> },
      { name: "Vite", category: "Tooling", icon: <SiVite className="w-6 h-6 text-purple-400" /> },
    ]
  },
  projects: {
    badge: "Work",
    title: "Things I've Built",
    subtitle: "A few products I've designed, engineered, and shipped.",
    items: [
      {
        id: "ai-resume-builder",
        title: "AI Resume Builder",
        hook: "Helping job seekers craft ATS-optimized resumes in minutes — powered by GPT, not guesswork.",
        description: "Full-stack AI-powered resume builder featuring resume parsing, secure JWT authentication, OpenAI integration, and real-time previews.",
        image: "/project-view/AI-Resume-Builder.png",
        liveLink: "https://ai-resume-builder-fronted-yvgr.onrender.com/",
        githubLink: "https://github.com/missbitwise/ai-resume-builder",
        borderColor: "hover:border-cyan-400/50",
        techItems: [
          { name: "React", icon: <SiReact className="text-cyan-400" /> },
          { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
          { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
          { name: "Express", icon: <SiExpress className="text-gray-200" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
          { name: "OpenAI API", icon: <Sparkles className="text-emerald-400" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        ],
        details: {
          overview: "AI Resume Builder is a full-stack web application designed to help job seekers generate, optimize, and export ATS-friendly professional resumes using generative AI.",
          engineeringStory: [
            {
              title: "AI Prompt Engineering & ATS Tuning",
              description: "Integrated OpenAI GPT models with strict system prompts to refine raw user experience statements into keyword-optimized, high-impact bullet points designed for Applicant Tracking Systems."
            },
            {
              title: "Complex Nested State with Redux Toolkit",
              description: "Architected centralized state management to handle multi-section form updates and render synchronized changes instantly across visual preview templates."
            }
          ],
          keyFeatures: [
            "AI Professional Summary & Experience Bullet Enhancer",
            "Real-time synchronized interactive live preview canvas",
            "Vectorized one-click PDF download generation",
            "JWT session security and MongoDB draft persistence"
          ]
        }
      },
      {
        id: "vingo-food-delivery",
        title: "Vingo Food Delivery",
        hook: "End-to-end food delivery platform with live driver tracking on a map — orders placed, paid, and tracked in real time.",
        description: "Full-stack food delivery platform featuring real-time order tracking with Socket.IO, secure Razorpay payments, and user authentication.",
        image: "/project-view/Vingo-food.png",
        liveLink: "https://vingo-food-delivery-yi6q.onrender.com/home",
        githubLink: "https://github.com/Missbitwise/Vingo-food-delivery",
        borderColor: "hover:border-pink-400/50",
        techItems: [
          { name: "React", icon: <SiReact className="text-cyan-400" /> },
          { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
          { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
          { name: "Express", icon: <SiExpress className="text-gray-200" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
          { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
          { name: "Razorpay", icon: <CreditCard className="text-blue-500" /> },
        ],
        details: {
          overview: "Vingo is an end-to-end food delivery platform built on the MERN stack that connects customers, restaurants, and delivery drivers with real-time tracking and automated payments.",
          engineeringStory: [
            {
              title: "Real-Time Driver Geospatial Tracking",
              description: "Replaced heavy HTTP polling with bidirectional Socket.io web sockets and Google Maps JavaScript API to broadcast driver GPS coordinates live to customer maps."
            }
          ],
          keyFeatures: [
            "Live delivery driver map tracking with Google Maps & Socket.io",
            "Automated Razorpay checkout integration with cryptographic webhook validation"
          ]
        }
      },
      {
        id: "yapster",
        title: "Yapster",
        hook: "Real-time messaging, friend management, and location-based discovery in one responsive social app.",
        description: "Full-stack social messaging application built with Next.js, WebSockets, PostgreSQL, and MongoDB.",
        image: "/project-view/yapster.png",
        liveLink: "https://yapster-fe.vercel.app/",
        githubLink: "https://github.com/Missbitwise/yapster-be",
        borderColor: "hover:border-cyan-400/50",
        techItems: [
          { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
          { name: "React", icon: <SiReact className="text-cyan-400" /> },
          { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
          { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
          { name: "Express", icon: <SiExpress className="text-gray-200" /> },
          { name: "WebSockets", icon: <SiSocketdotio className="text-white" /> },
          { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
          { name: "JWT", icon: <Code2 className="text-amber-400" /> },
        ],
        details: {
          overview: "Yapster is a full-stack social messaging application that helps users stay connected with friends and discover new people nearby or around the world. It combines real-time chat, friend management, and location-based discovery in one responsive interface.",
          engineeringStory: [
            {
              title: "Real-Time Messaging",
              description: "Built WebSocket messaging with message delivery and read receipts, typing indicators, unread counts, and conversation history."
            },
            {
              title: "Location-Based Discovery",
              description: "Users can save their location and discover people within a chosen distance or explore users from other cities and regions. Location data is retrieved from the backend and shared across the app."
            },
            {
              title: "Friend and Privacy Controls",
              description: "Implemented friend requests, blocking, and privacy rules that restrict messaging and presence visibility between blocked users."
            },
            {
              title: "Authentication and Data Management",
              description: "Added JWT authentication using HTTP-only cookies. PostgreSQL stores user, friendship, and location data; MongoDB stores chat messages."
            }
          ],
          keyFeatures: [
            "Real-time one-to-one messaging",
            "Sent, delivered, and read indicators",
            "Friend requests and contact management",
            "Block and unblock controls",
            "Nearby and global user discovery",
            "Persistent location and user profiles",
            "Online presence and typing indicators",
            "Responsive Next.js interface"
          ]
        }
      },
      {
        id: "legalbuddy",
        title: "Legalbuddy",
        hook: "An AI legal assistant that grounds conversational answers in searchable legal documents and shows its sources.",
        description: "AI-powered legal assistance backend with retrieval-augmented generation and persistent, user-scoped conversations.",
        image: "/project-view/legalbuddy.png",
        liveLink: "https://legalbuddyy.vercel.app/",
        githubLink: "https://github.com/Missbitwise/Legalbuddy-be",
        borderColor: "hover:border-blue-400/50",
        techItems: [
          { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
          { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
          { name: "Express", icon: <SiExpress className="text-gray-200" /> },
          { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
          { name: "Prisma", icon: <SiPrisma className="text-indigo-400" /> },
          { name: "pgvector", icon: <Database className="text-cyan-400" /> },
          { name: "Gemini", icon: <Sparkles className="text-purple-400" /> },
          { name: "Redis", icon: <SiRedis className="text-red-400" /> },
          { name: "BullMQ", icon: <Wrench className="text-red-400" /> },
          { name: "JWT", icon: <Code2 className="text-amber-400" /> },
        ],
        details: {
          overview: "Legalbuddy is an AI-powered legal assistance backend that answers user questions using a searchable collection of legal documents. It combines retrieval-augmented generation (RAG) with conversational history to provide contextual answers and identify the sources used.",
          engineeringStory: [
            {
              title: "Retrieval-Augmented Legal Answers",
              description: "Built a retrieval pipeline that searches legal document chunks and supplies relevant passages to Gemini. Prompts require answers to rely on the provided legal context, avoid invented citations, and acknowledge when the sources do not contain enough information."
            },
            {
              title: "Persistent, User-Scoped Conversations",
              description: "Implemented conversation and message storage with PostgreSQL and Prisma. Users can create and revisit conversations, send follow-up questions, edit and resend messages, and delete conversations."
            },
            {
              title: "Secure Authentication & Background Processing",
              description: "Added account and authentication modules, plus a Redis and BullMQ job pipeline for legal-document processing. The backend also includes a dedicated voice module."
            }
          ],
          keyFeatures: [
            "Legal question answering grounded in retrieved documents",
            "Conversation history used to resolve follow-up questions",
            "Source metadata attached to AI responses",
            "User-scoped conversation and message persistence",
            "Legal-document ingestion jobs",
            "Voice-related API module"
          ]
        }
      },
    ]
  },
  contact: {
    badge: "Contact",
    title: "Get in Touch",
    subtitle: "Looking for a full stack engineer or want to discuss a project? Feel free to reach out."
  }
};
