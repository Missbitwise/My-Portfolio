import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import SectionHeader from './common/SectionHeader';
import { DATA } from '../data/portfolioData';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-6 lg:px-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        <SectionHeader badge={DATA.projects.badge} title={DATA.projects.title} subtitle={DATA.projects.subtitle} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA.projects.items.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-[#080718]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Image → opens modal */}
              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className="relative h-52 sm:h-60 overflow-hidden bg-black/40 block w-full cursor-pointer"
                aria-label={`View details for ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080718] via-[#080718]/20 to-transparent" />
                {/* View Details center overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    View Details
                  </span>
                </div>
              </button>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6">

                {/* Title — plain, no link */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {project.title}
                </h3>

                {/* Punchy hook */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.hook || project.description}
                </p>


                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techItems.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-gray-300 flex items-center gap-1.5"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                  {project.techItems.length > 5 && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-gray-500">
                      +{project.techItems.length - 5} more
                    </span>
                  )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Action Row — 2 buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
                  {project.liveLink && <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl font-semibold bg-cyan-500 text-[#060418] hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 text-sm shadow-md shadow-cyan-500/20 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    <span>Live Demo</span>
                  </a>}

                  {project.githubLink && <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 rounded-xl font-medium border border-white/15 bg-white/[0.04] text-gray-300 hover:bg-white/[0.08] hover:text-white hover:border-white/30 transition-all flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <SiGithub className="w-4 h-4 shrink-0" />
                    <span>Code</span>
                  </a>}
                  {!project.liveLink && !project.githubLink && (
                    <span className="text-xs text-gray-500">Project links coming soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
