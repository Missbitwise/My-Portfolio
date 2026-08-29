import { useEffect } from 'react';
import { ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

export default function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-black/75 backdrop-blur-sm">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-[#0c0a1e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-start justify-between px-7 py-5 border-b border-white/[0.08]">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-gray-500 text-xs mt-1 font-medium">
              Case Study &amp; Technical Overview
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-white/8 text-gray-400 hover:text-white transition-all cursor-pointer ml-4 shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 px-7 py-6 space-y-7">

          {/* Screenshot — purely decorative, no hover link */}
          <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-black/30">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>

          {/* Overview */}
          {project.details?.overview && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Overview</p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.details.overview}
              </p>
            </div>
          )}

          {/* Engineering Highlights */}
          {project.details?.engineeringStory && project.details.engineeringStory.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Engineering Highlights</p>
              <div className="space-y-3">
                {project.details.engineeringStory.map((story, idx) => (
                  <div key={idx} className="pl-4 border-l-2 border-cyan-500/40">
                    <h4 className="text-sm font-semibold text-white mb-1">{story.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{story.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.details?.keyFeatures && project.details.keyFeatures.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Key Features</p>
              <ul className="space-y-2">
                {project.details.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Tech Stack</p>
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

        </div>

        {/* Footer — action buttons */}
        <div className="px-7 py-4 border-t border-white/[0.08] flex items-center gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2.5 px-5 rounded-xl font-semibold bg-cyan-500 text-[#060418] hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 text-sm shadow-md shadow-cyan-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-5 rounded-xl font-medium border border-white/15 bg-white/[0.04] text-gray-200 hover:bg-white/[0.08] hover:text-white transition-all flex items-center gap-2 text-sm"
            >
              <SiGithub className="w-4 h-4" />
              <span>View Code</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
