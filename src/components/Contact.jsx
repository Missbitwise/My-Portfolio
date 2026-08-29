import { ArrowUpRight, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import { DATA } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10 scroll-mt-24">
      <div className="max-w-xl mx-auto text-center">

        <SectionHeader
          badge={DATA.contact.badge}
          title={DATA.contact.title}
        />

        <p className="text-gray-400 text-base leading-relaxed -mt-4 mb-12">
          Open to full-stack engineering roles and collaborations.<br />
          Best way to reach me — just send an email.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">

          <a
            href={`mailto:${DATA.profile.email}`}
            className="group flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-cyan-500 text-[#060418] hover:bg-cyan-400 transition-all font-semibold text-sm shadow-md shadow-cyan-500/20"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={DATA.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.04] text-gray-200 hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all font-medium text-sm"
          >
            <FaLinkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={DATA.profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.04] text-gray-200 hover:border-white/25 hover:text-white hover:bg-white/[0.08] transition-all font-medium text-sm"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-gray-600 text-sm">
          <MapPin className="w-3.5 h-3.5" />
          <span>Based in {DATA.profile.location}</span>
        </div>

      </div>
    </section>
  );
}