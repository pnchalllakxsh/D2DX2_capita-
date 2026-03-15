import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Building2, Globe } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: TrendingUp, value: 50, suffix: '+', label: 'Ventures Backed' },
  { icon: Users, value: 200, suffix: '+', label: 'Founders Supported' },
  { icon: Building2, value: 15, suffix: '+', label: 'Facility Partners' },
  { icon: Globe, value: 8, suffix: '+', label: 'Industry Sectors' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full"
          >
            Who We Are
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">D2DX2 Capital</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            D2DX2 Capital is a venture platform providing capital access, infrastructure,
            and operational support for scalable startups. We are not just an incubator—we
            are a capital-backed execution ecosystem that transforms ideas into market-ready ventures.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 md:p-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-center hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-500/5 dark:to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <stat.icon className="w-7 h-7 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative p-8 md:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-900 border border-blue-100 dark:border-gray-800 rounded-3xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 dark:bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Execution Ecosystem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-6">
              We provide comprehensive support spanning capital access, legal and compliance infrastructure,
              manufacturing enablement, and supply chain operations. Our platform is designed for founders
              who need more than mentorship—they need execution partners who can help them scale from
              concept to market leadership.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              With dedicated facilities, strategic partnerships, and capital backing, we ensure that every
              venture in our ecosystem has the resources to succeed. From initial structuring to manufacturing
              at scale, we walk alongside founders every step of the way.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
