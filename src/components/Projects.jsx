import { useEffect, useRef, useState } from 'react';
import { ExternalLink, FileText, Sparkles, MapPin, CreditCard } from 'lucide-react';
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
  SiJavascript 
} from 'react-icons/si';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function Projects() {
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "ai-resume-builder",
      title: "AI Resume Builder",
      description: "Full-stack AI-powered resume builder featuring resume parsing, secure JWT authentication, OpenAI integration, and real-time previews.",
      image: "/project-view/AI-Resume-Builder.png",
      liveLink: "https://ai-resume-builder-fronted-yvgr.onrender.com/",
      githubLink: "https://github.com/urmilarajapurkar953-design/ai-resume-builder",
      borderColor: "hover:border-cyan-400/50",
      techItems: [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-200" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "OpenAI API", icon: <Sparkles className="text-emerald-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Vite", icon: <SiVite className="text-purple-400" /> },
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
          },
          {
            title: "Client-Side Vectorized PDF Export",
            description: "Implemented html2pdf.js and PDF parsing pipelines to generate high-resolution print-ready documents client-side without heavy headless browser overhead."
          },
          {
            title: "Cloud Media & Auth Security",
            description: "Integrated ImageKit and Cloudinary APIs for profile image processing along with JWT authentication for persistent multi-draft user data."
          }
        ],
        keyFeatures: [
          "AI Professional Summary & Experience Bullet Enhancer",
          "Real-time synchronized interactive live preview canvas",
          "Vectorized one-click PDF download generation",
          "Modern responsive Tailwind CSS styling with dark mode aesthetics",
          "ImageKit media integration for headshots and logos",
          "JWT session security and MongoDB draft persistence"
        ]
      }
    },
    {
      id: "vingo-food-delivery",
      title: "Vingo Food Delivery",
      description: "Full-stack food delivery platform featuring real-time order tracking with Socket.IO, secure Razorpay payments, and user authentication.",
      image: "/project-view/Vingo-food.png",
      liveLink: "https://vingo-food-delivery-yi6q.onrender.com/home",
      githubLink: "https://github.com/urmilarajapurkar953-design",
      borderColor: "hover:border-pink-400/50",
      techItems: [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-200" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
        { name: "Google Maps", icon: <MapPin className="text-red-500" /> },
        { name: "Razorpay", icon: <CreditCard className="text-blue-500" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      ],
      details: {
        overview: "Vingo is an end-to-end food delivery platform built on the MERN stack that connects customers, restaurants, and delivery drivers with real-time tracking and automated payments.",
        engineeringStory: [
          {
            title: "Real-Time Driver Geospatial Tracking",
            description: "Replaced heavy HTTP polling with bidirectional Socket.io web sockets and Google Maps JavaScript API to broadcast driver GPS coordinates live to customer maps."
          },
          {
            title: "Transaction-First Payment Verification",
            description: "Resolved payment bypass vulnerabilities by creating transactional ledger records in MongoDB and upgrading order status only after cryptographic Razorpay webhook verification."
          },
          {
            title: "Stateful Cart & Ordering Flow",
            description: "Utilized Redux Toolkit to retain item customizations, dynamic pricing, and restaurant selections across user login sessions and reloads."
          },
          {
            title: "Cloud Storage & Docker Setup",
            description: "Containerized backend micro-services using Docker and delegated image transformations to Cloudinary CDN for fast global content delivery."
          }
        ],
        keyFeatures: [
          "Live delivery driver map tracking with Google Maps & Socket.io",
          "Google One-Tap OAuth and JWT authentication with Email OTP",
          "Automated Razorpay checkout integration with cryptographic webhook validation",
          "Centralized Redux state management for shopping carts and restaurant menus",
          "Optimized food item image uploads powered by Cloudinary",
          "Containerized development environment using Docker"
        ]
      }
    },
    {
      id: "animated-saas",
      title: "Animated SaaS Web Application",
      description: "Production-style SaaS web application built with Next.js App Router, featuring advanced Framer Motion animations and dynamic pricing tiers.",
      image: "/project-view/Animated-SaaS.png",
      liveLink: "https://animated-saas-web-application.netlify.app/",
      githubLink: "https://github.com/urmilarajapurkar953-design",
      borderColor: "hover:border-purple-400/50",
      techItems: [
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      ],
      details: {
        overview: "A modern visual SaaS landing page and web application built using Next.js App Router and Framer Motion, delivering sleek dark-mode glassmorphism and interactive motion UI.",
        engineeringStory: [
          {
            title: "60fps Scroll & Micro-Animations",
            description: "Leveraged Framer Motion layout animations and hardware-accelerated transforms to achieve silky smooth 60fps scroll transitions across desktop and mobile browsers."
          },
          {
            title: "Component-Driven SaaS Architecture",
            description: "Built modular React components with Next.js App Router for optimal bundle sizes, SEO metadata, and performance scoring."
          }
        ],
        keyFeatures: [
          "Smooth scroll animations and interactive parallax effects",
          "Dynamic pricing table toggles and plan comparisons",
          "Glassmorphism UI design tokens and responsive Tailwind layout",
          "Fast page loads optimized by Next.js compiler"
        ]
      }
    },
    {
      id: "virtualr-saas",
      title: "VirtualR - SaaS Landing Page",
      description: "Modern, responsive SaaS product landing page built with React and Tailwind CSS featuring reusable workflow and pricing components.",
      image: "/project-view/VirtualR.png",
      liveLink: "https://software-website-gray.vercel.app/",
      githubLink: "https://github.com/urmilarajapurkar953-design",
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
          "Fully mobile-responsive flexbox and grid layouts",
          "Modern dark theme aesthetics with neon accent highlights"
        ]
      }
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
            Portfolio
          </span>
          <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white mt-3 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`opacity-0 translate-y-10 transition-all duration-700 ease-out group p-6 sm:p-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl ${project.borderColor} hover:-translate-y-2 hover:duration-150 shadow-xl flex flex-col justify-between`}
            >
              <div>
                {/* Clickable Project Image Preview Box -> Opens Live Deployed App */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Click to visit live deployed app"
                  className="block relative h-52 sm:h-60 overflow-hidden rounded-2xl border border-white/10 mb-6 bg-white/5 cursor-pointer group/img"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020010] via-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />
                  
                  {/* Floating Overlay Hint on Photo Hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-500/80 text-white shadow-lg backdrop-blur-md flex items-center gap-1">
                      Live App <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-bold text-white tracking-wide mb-3 flex items-center justify-between">
                  <span>{project.title}</span>
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Icons (No Text Names, Pure Icon Badges) */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {project.techItems.map((tech, idx) => (
                    <div
                      key={idx}
                      title={tech.name}
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all text-lg cursor-pointer flex items-center justify-center"
                    >
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Action Buttons: Live Preview | View Details | GitHub Repo */}
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-3 pt-2">
                {/* Button 1: Live Preview */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>

                {/* Button 2: Details Modal */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="py-3 px-4 rounded-xl font-semibold bg-white/10 hover:bg-cyan-500/20 border border-white/15 hover:border-cyan-400/40 text-white transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Details</span>
                </button>

                {/* Button 3: GitHub Repo */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  title="View GitHub Repository"
                  className="py-3 px-3.5 rounded-xl font-semibold bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-all duration-150 flex items-center justify-center cursor-pointer text-sm"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Render Project Details Modal when a project is selected */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}