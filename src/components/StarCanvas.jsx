import { useEffect, useRef } from 'react';

export default function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // ── NEBULA CLOUDS ──────────────────────────────────────────
    const nebulae = [
      // Crimson red — hydrogen-alpha emission (Orion / Lagoon nebula)
      { x: 0.12, y: 0.15, r: 400, rgb: [200, 30,  50],  opacity: 0.07 },
      // Warm amber orange — Eagle Nebula / Pillars of Creation
      { x: 0.85, y: 0.25, r: 350, rgb: [210, 100, 20],  opacity: 0.065 },
      // Hot magenta pink — Lagoon / Carina nebula
      { x: 0.5,  y: 0.80, r: 380, rgb: [190, 40,  130], opacity: 0.06 },
      // Deep teal green — OIII emission (Helix / Ring nebula)
      { x: 0.08, y: 0.65, r: 280, rgb: [0,   160, 120], opacity: 0.055 },
      // Rich gold — Pillars of Creation warm tones
      { x: 0.75, y: 0.72, r: 300, rgb: [190, 150, 20],  opacity: 0.05 },
      // Coral rose — Rosette / Heart nebula
      { x: 0.35, y: 0.35, r: 260, rgb: [210, 70,  80],  opacity: 0.045 },
    ];

    // ── 3-LAYER PARALLAX STARS ─────────────────────────────────
    const makeStars = (count, parallax) =>
      Array.from({ length: count }, () => {
        const bx = Math.random() * width;
        const by = Math.random() * height;
        return {
          bx, by,           // base position (never changed)
          radius: Math.random() * 1.5 + 0.2,
          alpha: Math.random() * 0.8 + 0.2,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
          twinkleSpeed: Math.random() * 0.012 + 0.003,
          color: Math.random() > 0.6 ? 0 : Math.random() > 0.4 ? 1 : 2, // 0=cyan 1=purple 2=white
          parallax,
          // flash
          flashing: false,
          flashAlpha: 0,
          flashDecay: 0,
        };
      });

    const farStars  = makeStars(200, 0.004); // barely moves
    const midStars  = makeStars(180, 0.014); // gentle shift
    const nearStars = makeStars(120, 0.030); // most parallax

    const allStars = [...farStars, ...midStars, ...nearStars];

    // ── SHOOTING STARS ─────────────────────────────────────────
    const shooters = Array.from({ length: 4 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.4,
      length: Math.random() * 120 + 60,
      speed: Math.random() * 8 + 4,
      angle: Math.PI / 4,
      delay: Math.random() * 150,
    }));

    // ── FLASH SCHEDULER ────────────────────────────────────────
    let flashTick = 0;

    // ── EVENT HANDLERS ─────────────────────────────────────────
    const onResize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onMouse = (e) => { mouseX = e.clientX; mouseY = e.clientY; };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouse);

    // ── STAR COLOR HELPER ──────────────────────────────────────
    const starRgba = (colorId, a) => {
      if (colorId === 0) return `rgba(0,212,255,${a})`;
      if (colorId === 1) return `rgba(168,85,247,${a})`;
      return `rgba(255,255,255,${a})`;
    };

    // ── RENDER LOOP ────────────────────────────────────────────
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep space backdrop
      const bg = ctx.createRadialGradient(width/2, height/3, 50, width/2, height/2, Math.max(width, height));
      bg.addColorStop(0,   '#0a051d');
      bg.addColorStop(0.5, '#040212');
      bg.addColorStop(1,   '#020108');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Nebula clouds
      nebulae.forEach(({ x, y, r, rgb, opacity }) => {
        const nx = x * width;
        const ny = y * height;
        const g  = ctx.createRadialGradient(nx, ny, 0, nx, ny, r);
        const [R, G, B] = rgb;
        g.addColorStop(0,   `rgba(${R},${G},${B},${opacity})`);
        g.addColorStop(0.5, `rgba(${R},${G},${B},${opacity * 0.35})`);
        g.addColorStop(1,   `rgba(${R},${G},${B},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Flash trigger — one random star every ~2.5 s
      flashTick++;
      if (flashTick > 150) {
        flashTick = 0;
        const s = allStars[Math.floor(Math.random() * allStars.length)];
        s.flashing   = true;
        s.flashAlpha = 1.0;
        s.flashDecay = 0.025 + Math.random() * 0.03;
      }

      // Parallax offset from mouse
      const ox = (mouseX - width  / 2) / width;
      const oy = (mouseY - height / 2) / height;

      allStars.forEach((star) => {
        // Twinkle
        star.alpha += star.twinkleDir * star.twinkleSpeed;
        if (star.alpha > 0.95) { star.alpha = 0.95; star.twinkleDir = -1; }
        if (star.alpha < 0.12) { star.alpha = 0.12; star.twinkleDir =  1; }

        // Parallax position
        const px = star.bx + ox * width  * star.parallax * 10;
        const py = star.by + oy * height * star.parallax * 10;

        // Flash glow
        if (star.flashing && star.flashAlpha > 0) {
          const glow = ctx.createRadialGradient(px, py, 0, px, py, star.radius * 10);
          glow.addColorStop(0, `rgba(255,255,255,${star.flashAlpha * 0.9})`);
          glow.addColorStop(0.4, `rgba(180,240,255,${star.flashAlpha * 0.3})`);
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, star.radius * 10, 0, Math.PI * 2);
          ctx.fill();
          star.flashAlpha -= star.flashDecay;
          if (star.flashAlpha <= 0) { star.flashing = false; }
        }

        // Star dot
        ctx.beginPath();
        ctx.arc(px, py, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = starRgba(star.color, star.alpha);
        ctx.fill();
      });

      // Shooting stars
      shooters.forEach((s) => {
        if (s.delay > 0) { s.delay--; return; }

        const tx = s.x - s.length * Math.cos(s.angle);
        const ty = s.y - s.length * Math.sin(s.angle);
        const g  = ctx.createLinearGradient(s.x, s.y, tx, ty);
        g.addColorStop(0,   'rgba(0,212,255,0.95)');
        g.addColorStop(0.4, 'rgba(168,85,247,0.6)');
        g.addColorStop(1,   'rgba(0,212,255,0)');

        ctx.strokeStyle = g;
        ctx.lineWidth   = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        s.x += s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);

        if (s.x > width || s.y > height) {
          s.x      = Math.random() * width;
          s.y      = Math.random() * height * 0.3;
          s.length = Math.random() * 120 + 60;
          s.speed  = Math.random() * 8 + 4;
          s.delay  = Math.random() * 200 + 50;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  );
}