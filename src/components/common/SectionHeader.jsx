export default function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {badge && (
        <span className="text-xs font-bold text-cyan-400 tracking-wider capitalize bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 rounded-full inline-block mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg mt-3 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
