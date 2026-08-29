export default function GlassCard({ children, className = '', hoverBorder = 'hover:border-cyan-400/40' }) {
  return (
    <div
      className={`p-6 sm:p-8 lg:p-10 bg-[#080718]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 ${hoverBorder} ${className}`}
    >
      {children}
    </div>
  );
}
