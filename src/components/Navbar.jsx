import { useState, useEffect } from 'react';
import { DATA } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkModal = () => {
      setIsModalOpen(document.body.classList.contains('modal-open'));
    };

    checkModal();
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    if (targetId === '#' || targetId === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isModalOpen) return null;

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto pointer-events-none">
      {/* Centered Desktop Navigation Pill */}
      <div className="pointer-events-auto hidden items-center gap-6 md:flex text-sm font-medium text-slate-200 rounded-full border border-white/10 bg-[#060419]/85 px-8 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
        {DATA.navItems.map((item, idx) => {
          const isContact = item.href === '#contact';
          if (isContact) {
            return (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 font-semibold transition hover:bg-cyan-500/20 hover:border-cyan-400"
              >
                {item.label}
              </a>
            );
          }
          return (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#060419]/90 text-white shadow-xl backdrop-blur-2xl"
        aria-label="Toggle navigation"
      >
        <span className="block h-0.5 w-6 bg-white"></span>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-16 z-50 w-64 rounded-3xl border border-white/10 bg-[#060419]/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden text-center">
          <nav className="flex flex-col gap-4 text-base text-slate-100 font-medium">
            {DATA.navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-cyan-300 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
