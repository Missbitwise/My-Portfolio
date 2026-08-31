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
  SiGit
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
        id: "animated-saas",
        title: "Animated SaaS Web Application",
        hook: "A production-grade SaaS landing page that demonstrates what 60fps motion design looks like in real product interfaces.",
        description: "Production-style SaaS web application built with Next.js App Router, featuring advanced Framer Motion animations and dynamic pricing tiers.",
        image: "/project-view/Animated-SaaS.png",
        liveLink: "https://animated-saas-web-application.netlify.app/",
        githubLink: "https://github.com/Missbitwise/Animated-SaaS-Web-Application",
        borderColor: "hover:border-purple-400/50",
        techItems: [
          { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
          { name: "React", icon: <SiReact className="text-cyan-400" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
          { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
        ],
        details: {
          overview: "A modern visual SaaS landing page and web application built using Next.js App Router and Framer Motion, delivering sleek dark-mode glassmorphism and interactive motion UI.",
          engineeringStory: [
            {
              title: "60fps Scroll & Micro-Animations",
              description: "Leveraged Framer Motion layout animations and hardware-accelerated transforms to achieve silky smooth 60fps scroll transitions across desktop and mobile browsers."
            }
          ],
          keyFeatures: [
            "Smooth scroll animations and interactive parallax effects",
            "Dynamic pricing table toggles and plan comparisons"
          ]
        }
      },
      {
        id: "virtualr-saas",
        title: "VirtualR - SaaS Landing Page",
        hook: "Clean, responsive SaaS product page showcasing modular React component architecture and dark-mode glassmorphism UI.",
        description: "Modern, responsive SaaS product landing page built with React and Tailwind CSS featuring reusable workflow and pricing components.",
        image: "/project-view/VirtualR.png",
        liveLink: "https://software-website-gray.vercel.app/",
        githubLink: "https://github.com/Missbitwise/Software-website",
        borderColor: "hover:border-emerald-400/50",
        techItems: [
          { name: "React", icon: <SiReact className="text-cyan-400" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
          { name: "Vite", icon: <SiVite className="text-purple-400" /> },
        ],
        details: {
          overview: "VirtualR is a futuristic VR software developer platform landing page showcasing reusable workflow sections, pricing cards, and interactive feature breakdowns.",
          engineeringStory: [
            {
              title: "Responsive Glassmorphism & Custom UI",
              description: "Designed clean dark-themed UI components using Tailwind CSS grid layouts, gradient borders, and reusable feature cards."
            }
          ],
          keyFeatures: [
            "Modular feature, workflow, and pricing components",
            "Fully mobile-responsive flexbox and grid layouts"
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
