import SectionHeader from './common/SectionHeader';
import GlassCard from './common/GlassCard';
import { DATA } from '../data/portfolioData';
import { Code2, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20 relative z-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Domain Focus */}
          <div className="lg:col-span-4 flex flex-col text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-400 tracking-wider capitalize bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 rounded-full inline-block w-max mx-auto lg:mx-0 mb-3">
              {DATA.skills.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {DATA.skills.title}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {DATA.skills.subtitle}
            </p>

            <div className="space-y-3 mt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-medium text-gray-200">
                <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Frontend & Responsive Web Architecture</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-medium text-gray-200">
                <Server className="w-4 h-4 text-purple-400 shrink-0" />
                <span>REST APIs & Node.js Backend Microservices</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-medium text-gray-200">
                <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SQL & NoSQL Database Optimization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Tech Icon Grid Matrix */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
              {DATA.skills.items.map((tech, index) => (
                <div
                  key={index}
                  className="group p-4 bg-[#080718]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-md hover:border-cyan-400/50 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center sm:items-start text-center sm:text-left justify-between gap-3"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {tech.name}
                    </h3>
                    <span className="text-[11px] font-medium text-gray-400 mt-0.5 block">
                      {tech.category}
                    </span>
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