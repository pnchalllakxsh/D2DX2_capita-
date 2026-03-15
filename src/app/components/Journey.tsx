import { motion, useInView } from 'motion/react';
import { Lightbulb, FileCheck, DollarSign, Factory, TrendingUp, Globe } from 'lucide-react';
import { useRef } from 'react';

const stages = [
  { icon: Lightbulb, label: 'Idea', gradient: 'from-blue-500 to-blue-600' },
  { icon: FileCheck, label: 'Structuring', gradient: 'from-cyan-500 to-teal-500' },
  { icon: DollarSign, label: 'Capital', gradient: 'from-purple-500 to-violet-500' },
  { icon: Factory, label: 'Manufacturing', gradient: 'from-blue-600 to-indigo-600' },
  { icon: TrendingUp, label: 'Scale', gradient: 'from-teal-500 to-emerald-500' },
  { icon: Globe, label: 'Expansion', gradient: 'from-blue-700 to-blue-800' },
];

const phases = [
  {
    title: 'Foundation Phase',
    description: 'From idea validation to legal structuring, we help you establish a solid foundation with proper incorporation, compliance, and initial capital access.',
    stages: '1 — 2',
  },
  {
    title: 'Execution Phase',
    description: 'Leverage our manufacturing facilities, supply chain networks, and operational support to build and scale your product efficiently.',
    stages: '3 — 4',
  },
  {
    title: 'Growth Phase',
    description: 'Scale operations with strategic partnerships, additional capital raises, and market expansion support to achieve sustainable growth.',
    stages: '5 — 6',
  },
];

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="hidden md:block absolute top-[36px] left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 origin-left"
      />
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full"
          >
            The Roadmap
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Your <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Startup Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A structured roadmap from idea to market expansion
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <TimelineLine />

          {/* Desktop: horizontal row */}
          <div className="hidden md:grid grid-cols-6 gap-4">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                className="flex flex-col items-center relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className={`relative w-[72px] h-[72px] bg-gradient-to-br ${stage.gradient} rounded-2xl flex items-center justify-center shadow-lg z-10 mb-4 cursor-pointer`}
                >
                  <stage.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{index + 1}</span>
                  </div>
                </motion.div>
                <span className="text-gray-900 dark:text-white font-bold text-base">{stage.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-700" />
            {stages.map((stage, index) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex items-center space-x-4 mb-6 last:mb-0"
              >
                <div className={`relative flex-shrink-0 w-[40px] h-[40px] bg-gradient-to-br ${stage.gradient} rounded-xl flex items-center justify-center shadow-md -ml-[28px]`}>
                  <stage.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-gray-400 dark:text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-gray-900 dark:text-white font-bold">{stage.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-7 bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-1 rounded-md">
                  Stages {phase.stages}
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{phase.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
