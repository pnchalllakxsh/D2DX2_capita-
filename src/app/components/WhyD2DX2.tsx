import { motion } from 'motion/react';
import { DollarSign, Zap, Building, Network } from 'lucide-react';

const pillars = [
  {
    icon: DollarSign,
    title: 'Capital Access',
    description: 'Direct access to funding networks, investor connections, and strategic capital partnerships to fuel your growth journey.',
    gradient: 'from-blue-500 to-blue-600',
    glowColor: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-400/10',
  },
  {
    icon: Zap,
    title: 'Execution Support',
    description: 'Hands-on operational guidance, infrastructure setup, and execution frameworks to turn strategies into results.',
    gradient: 'from-cyan-500 to-teal-500',
    glowColor: 'group-hover:shadow-cyan-500/20 dark:group-hover:shadow-cyan-400/10',
  },
  {
    icon: Building,
    title: 'Infrastructure Backbone',
    description: 'Complete infrastructure ecosystem including office space, manufacturing facilities, and operational resources.',
    gradient: 'from-purple-500 to-violet-500',
    glowColor: 'group-hover:shadow-purple-500/20 dark:group-hover:shadow-purple-400/10',
  },
  {
    icon: Network,
    title: 'Strategic Scale Partnerships',
    description: 'Extensive network of industry partners, vendors, and service providers to accelerate your market expansion.',
    gradient: 'from-teal-500 to-emerald-500',
    glowColor: 'group-hover:shadow-teal-500/20 dark:group-hover:shadow-teal-400/10',
  },
];

export function WhyD2DX2() {
  return (
    <section id="why-d2dx2" className="relative py-24 md:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

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
            Our Advantage
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">D2DX2 Capital</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Four fundamental pillars that make us the execution partner of choice
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative`}
            >
              <div className={`h-full p-8 md:p-10 bg-gray-50 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl hover:shadow-2xl ${pillar.glowColor} transition-all duration-500`}>
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${pillar.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 relative p-10 md:p-14 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-3xl text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.15),transparent_50%)]" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
              More Than Capital. A Complete Execution Ecosystem.
            </h3>
            <p className="text-blue-100/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We don't just invest—we build alongside you. From initial capital to manufacturing scale,
              from legal setup to supply chain operations, D2DX2 Capital provides the complete infrastructure
              that hardware and early-stage ventures need to succeed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
