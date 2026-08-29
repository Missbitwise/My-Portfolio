import SectionHeader from './common/SectionHeader';
import GlassCard from './common/GlassCard';
import { DATA } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-20 relative z-10 scroll-mt-24">
      <div className="max-w-5xl mx-auto">

        <SectionHeader badge={DATA.about.badge} title="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Narrative Card — condensed, personal */}
          <GlassCard className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4">
              I'm{' '}
              <span className="text-cyan-400 font-semibold">Urmila Rajapurkar</span>
              {' '}— a Full Stack Developer who turns product ideas into working web applications.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              My focus is on the MERN stack — building RESTful APIs, designing clean React interfaces, and shipping things that actually work in production. I care about modular code, real performance, and interfaces that feel right to use.
            </p>
          </GlassCard>

          {/* Engineering Focus Card */}
          <GlassCard className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Engineering Focus
            </h3>
            {DATA.about.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </GlassCard>

        </div>

      </div>
    </section>
  );
}