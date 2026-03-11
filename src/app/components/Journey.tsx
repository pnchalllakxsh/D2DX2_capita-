import { motion } from 'motion/react';
import { Lightbulb, FileCheck, DollarSign, Factory, TrendingUp, Globe } from 'lucide-react';

export function Journey() {
  const stages = [
    { icon: Lightbulb, label: 'Idea', color: 'bg-blue-700' },
    { icon: FileCheck, label: 'Structuring', color: 'bg-cyan-600' },
    { icon: DollarSign, label: 'Capital', color: 'bg-purple-600' },
    { icon: Factory, label: 'Manufacturing', color: 'bg-blue-600' },
    { icon: TrendingUp, label: 'Scale', color: 'bg-teal-600' },
    { icon: Globe, label: 'Expansion', color: 'bg-blue-800' }
  ];

  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated Dots Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your <span className="text-blue-700">Startup Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured roadmap from idea to market expansion
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800"></div>

          {/* Stages Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center relative"
              >
                {/* Icon Container */}
                <div className={`w-20 h-20 ${stage.color} rounded-2xl flex items-center justify-center shadow-lg z-10 mb-4 hover:scale-110 transition-transform`}>
                  <stage.icon className="w-10 h-10 text-white" />
                </div>

                {/* Stage Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center z-20 shadow-md">
                  <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                </div>

                {/* Label */}
                <div className="text-center">
                  <div className="text-gray-900 font-bold text-lg">{stage.label}</div>
                </div>

                {/* Arrow for Mobile */}
                {index < stages.length - 1 && (
                  <div className="md:hidden mt-4 text-gray-400">
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Foundation Phase</h4>
            <p className="text-gray-600 leading-relaxed">
              From idea validation to legal structuring, we help you establish a solid foundation with 
              proper incorporation, compliance, and initial capital access.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Execution Phase</h4>
            <p className="text-gray-600 leading-relaxed">
              Leverage our manufacturing facilities, supply chain networks, and operational support to 
              build and scale your product efficiently.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Growth Phase</h4>
            <p className="text-gray-600 leading-relaxed">
              Scale operations with strategic partnerships, additional capital raises, and market expansion 
              support to achieve sustainable growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}