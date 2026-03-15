import React from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useRef, useCallback } from 'react';

interface Node {
  id: number;
  baseX: number;
  baseY: number;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitOffset: number;
  driftRadiusX: number;
  driftRadiusY: number;
  driftSpeedX: number;
  driftSpeedY: number;
  driftOffsetX: number;
  driftOffsetY: number;
  pulseDelay: number;
  color: string;
}

function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const timeRef = useRef(0);

  const colors = useMemo(() => [
    'rgba(59,130,246,', // blue
    'rgba(6,182,212,',  // cyan
    'rgba(139,92,246,', // purple
    'rgba(16,185,129,', // emerald
    'rgba(99,102,241,', // indigo
  ], []);

  const initNodes = useCallback((w: number, h: number) => {
    const nodes: Node[] = [];
    const count = Math.min(Math.floor((w * h) / 9000), 140);
    for (let i = 0; i < count; i++) {
      nodes.push({
        id: i,
        baseX: Math.random() * w,
        baseY: Math.random() * h,
        size: Math.random() * 1.8 + 0.7,
        orbitRadius: Math.random() * 15 + 5,
        orbitSpeed: (Math.random() * 0.5 + 0.3) * (Math.random() > 0.5 ? 1 : -1),
        orbitOffset: Math.random() * Math.PI * 2,
        driftRadiusX: Math.random() * 22 + 8,
        driftRadiusY: Math.random() * 16 + 6,
        driftSpeedX: Math.random() * 0.38 + 0.18,
        driftSpeedY: Math.random() * 0.3 + 0.14,
        driftOffsetX: Math.random() * Math.PI * 2,
        driftOffsetY: Math.random() * Math.PI * 2,
        pulseDelay: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return nodes;
  }, [colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      nodesRef.current = initNodes(rect.width, rect.height);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);
      timeRef.current += 0.008;
      const t = timeRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const nodes = nodesRef.current;
      const isDark = document.documentElement.classList.contains('dark');
      const alphaBoost = isDark ? 1 : 2.2;
      const connectionAlphaBase = isDark ? 0.12 : 0.18;

      const positions: { x: number; y: number }[] = [];

      for (const node of nodes) {
        const ox = Math.cos(t * node.orbitSpeed + node.orbitOffset) * node.orbitRadius;
        const oy = Math.sin(t * node.orbitSpeed + node.orbitOffset) * node.orbitRadius;
        const driftX = Math.sin(t * node.driftSpeedX + node.driftOffsetX) * node.driftRadiusX;
        const driftY = Math.cos(t * node.driftSpeedY + node.driftOffsetY) * node.driftRadiusY;

        let nx = node.baseX + driftX + ox;
        let ny = node.baseY + driftY + oy;

        const dx = nx - mx;
        const dy = ny - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const magnetRadius = 150;
        if (dist < magnetRadius && dist > 0) {
          const force = (1 - dist / magnetRadius) * 40;
          nx += (dx / dist) * force;
          ny += (dy / dist) * force;
        }

        positions.push({ x: nx, y: ny });

        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + node.pulseDelay);
        const alpha = Math.min((0.15 + pulse * 0.35) * alphaBoost, 0.85);

        // Outer glow
        const glowR = node.size * 4;
        const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, glowR);
        grad.addColorStop(0, `${node.color}${(alpha * 0.35).toFixed(2)})`);
        grad.addColorStop(1, `${node.color}0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(nx, ny, glowR, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `${node.color}${alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Orbit ring
        ctx.strokeStyle = `${node.color}${(alpha * 0.1).toFixed(2)})`;
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        ctx.ellipse(
          node.baseX + driftX,
          node.baseY + driftY,
          node.orbitRadius,
          node.orbitRadius * 0.6,
          t * node.orbitSpeed * 0.3,
          0,
          Math.PI * 2,
        );
        ctx.stroke();
      }

      // Connection lines
      const connectionDist = 100;
      ctx.lineWidth = 0.4;
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const dx = positions[i].x - positions[j].x;
          const dy = positions[i].y - positions[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < connectionDist) {
            const a = (1 - d / connectionDist) * connectionAlphaBase;
            ctx.strokeStyle = isDark ? `rgba(99,130,246,${a})` : `rgba(30,64,175,${a})`;
            ctx.beginPath();
            ctx.moveTo(positions[i].x, positions[i].y);
            ctx.lineTo(positions[j].x, positions[j].y);
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
}

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.4 + i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) * 0.15);
      mouseY.set((e.clientY - cy) * 0.15);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineWords = ['Building', 'Scalable', 'Ventures'];
  const subWords = ['with', 'Capital', 'and', 'Infrastructure'];

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Animated cursor-following gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/15 to-cyan-400/15 dark:from-blue-500/10 dark:to-cyan-500/10 blur-[100px] pointer-events-none"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-400/10 to-blue-400/10 dark:from-purple-500/8 dark:to-blue-500/8 blur-[80px] pointer-events-none"
        style={{ x: useSpring(mouseX, { stiffness: 20, damping: 25 }), y: useSpring(mouseY, { stiffness: 20, damping: 25 }) }}
      />

      {/* Atoms / molecules / space canvas */}
      <SpaceBackground />

      {/* Grid pattern */}
      <motion.div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]" style={{ y: bgY }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-blue-900 dark:text-blue-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-100/80 dark:bg-blue-500/10 border border-blue-200/60 dark:border-blue-500/20 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 text-sm font-semibold">Capital-Backed Execution Ecosystem</span>
          </motion.div>

          {/* Animated Headline */}
          <div className="overflow-hidden">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
              <span className="block">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                    className="inline-block mr-[0.25em] text-gray-900 dark:text-white"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block mt-2">
                {subWords.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i + headlineWords.length}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                    className={`inline-block mr-[0.25em] ${
                      word === 'Capital' || word === 'Infrastructure'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            D2DX2 Capital empowers founders with funding support, legal infrastructure,
            manufacturing enablement, and operational scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('apply')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-2xl font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-300 flex items-center space-x-2"
            >
              <span>Apply for Partnership</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl font-semibold hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              Explore Services
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 mx-auto border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-3 mt-2 bg-gray-400 dark:bg-gray-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
