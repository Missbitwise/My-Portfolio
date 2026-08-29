import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import StarCanvas from '../components/StarCanvas';
import Navbar from '../components/Navbar';
import { DATA } from '../data/portfolioData';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = DATA.projects.items.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <StarCanvas />
        <p className="text-gray-400 text-lg mb-6">Project not found.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-xl bg-cyan-500 text-[#060418] font-semibold text-sm hover:bg-cyan-400 transition-all cursor-pointer"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      <StarCanvas />
      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* Back Button */}
        <button
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors mb-10 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            {project.title}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            {project.hook || project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-500 text-[#060418] hover:bg-cyan-400 font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] text-gray-200 hover:bg-white/[0.08] hover:text-white font-medium text-sm transition-all"
            >
              <SiGithub className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>

        {/* Screenshot */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-black/30 mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>

        {/* Overview */}
        {project.details?.overview && (
          <div className="mb-10">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Overview</p>
            <p className="text-gray-300 text-base leading-relaxed">
              {project.details.overview}
            </p>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-white/[0.07] mb-10" />

        {/* Engineering Highlights */}
        {project.details?.engineeringStory?.length > 0 && (
          <div className="mb-10">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Engineering Highlights</p>
            <div className="space-y-5">
              {project.details.engineeringStory.map((story, idx) => (
                <div key={idx} className="pl-5 border-l-2 border-cyan-500/40">
                  <h3 className="text-base font-semibold text-white mb-1.5">{story.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{story.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.details?.keyFeatures?.length > 0 && (
          <div className="mb-10">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Key Features</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.details.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techItems?.map((tech, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-gray-200 text-xs font-medium"
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="border-t border-white/[0.07] pt-8 flex items-center justify-between">
          <button
            onClick={() => navigate('/#projects')}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </button>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-[#060418] hover:bg-cyan-400 font-semibold text-sm transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live App
            </a>
          )}
        </div>

      </main>
    </div>
  );
}
