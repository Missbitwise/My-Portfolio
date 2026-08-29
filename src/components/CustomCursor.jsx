import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide the default cursor globally
    document.body.style.cursor = 'none';

    let mouseX = window.innerWidth  / 2;
    let mouseY = window.innerHeight / 2;
    let ringX  = mouseX;
    let ringY  = mouseY;
    let hovering = false;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnter = (e) => {
      const tag = e.target.closest('a, button, [role="button"]');
      if (tag) { hovering = true; }
    };

    const onLeave = () => { hovering = false; };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout',  onLeave);

    const animate = () => {
      // Dot — instant
      dot.style.transform  = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      // Ring — lerp (lazy follow for weight feel)
      const ease = hovering ? 0.10 : 0.14;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      const ringSize = hovering ? 40 : 24;
      const halfSize = ringSize / 2;
      ring.style.width     = `${ringSize}px`;
      ring.style.height    = `${ringSize}px`;
      ring.style.transform = `translate(${ringX - halfSize}px, ${ringY - halfSize}px)`;
      ring.style.opacity   = hovering ? '0.6' : '1';
      ring.style.background = hovering ? 'rgba(0,212,255,0.08)' : 'transparent';

      // Hide dot on hover (ring takes over)
      dot.style.opacity = hovering ? '0' : '1';

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout',  onLeave);
      document.body.style.cursor = '';
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot — exact cursor position */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'rgba(0,212,255,1)',
          boxShadow: '0 0 8px rgba(0,212,255,0.9), 0 0 16px rgba(0,212,255,0.4)',
          willChange: 'transform',
          transition: 'opacity 0.15s ease',
        }}
      />

      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '1.5px solid rgba(0,212,255,0.7)',
          boxShadow: '0 0 6px rgba(0,212,255,0.2)',
          willChange: 'transform, width, height',
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease, background 0.2s ease',
        }}
      />
    </>
  );
}
