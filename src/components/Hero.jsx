import { Mail, ArrowRight, MapPin } from 'lucide-react';
import { DATA } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-24 px-6 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-600/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">

        {/* Avatar */}
        <div className="relative mb-7">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl scale-110 pointer-events-none" />
          {/* Thin cyan border ring */}
          <div className="relative w-40 h-40 rounded-full p-[2px] bg-cyan-400/60 shadow-2xl shadow-cyan-500/20">
            <img
              src={DATA.profile.avatar}
              alt={DATA.profile.name}
              className="w-full h-full object-cover rounded-full bg-[#090514]"
            />
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {DATA.profile.status}
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-3 px-2">
          {DATA.profile.firstName}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
            Rajapurkar
          </span>
        </h1>

        {/* Title */}
        <p className="text-base sm:text-lg font-medium text-slate-400 tracking-widest mb-5">
          {DATA.profile.title}
        </p>

        {/* One-liner bio */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mb-2">
          I build full-stack web products — from API design to the interfaces people actually use.
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-8">
          <MapPin className="w-3.5 h-3.5" />
          <span>{DATA.profile.location}</span>
        </div>

        {/* Social Links — icon + label */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {DATA.profile.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:bg-white/[0.09] hover:text-white transition-all duration-200 text-xs font-medium"
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold bg-cyan-500/15 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 hover:text-cyan-200 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold border border-white/15 bg-white/[0.04] text-gray-200 hover:bg-white/[0.08] hover:border-white/30 hover:text-white transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Get in Touch</span>
          </a>
        </div>

      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 text-xs">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-600 animate-pulse" />
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
      </div>

    </section>
  );
}