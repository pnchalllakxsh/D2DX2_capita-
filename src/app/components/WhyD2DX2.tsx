import { motion } from 'motion/react';
import { DollarSign, Zap, Building, Network } from 'lucide-react';

export function WhyD2DX2() {
  const pillars = [
    {
      icon: DollarSign,
      title: 'Capital Access',
      description: 'Direct access to funding networks, investor connections, and strategic capital partnerships to fuel your growth journey.',
      color: 'text-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: Zap,
      title: 'Execution Support',
      description: 'Hands-on operational guidance, infrastructure setup, and execution frameworks to turn strategies into results.',
      color: 'text-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100',
      borderColor: 'border-cyan-200'
    },
    {
      icon: Building,
      title: 'Infrastructure Backbone',
      description: 'Complete infrastructure ecosystem including office space, manufacturing facilities, and operational resources.',
      color: 'text-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      icon: Network,
      title: 'Strategic Scale Partnerships',
      description: 'Extensive network of industry partners, vendors, and service providers to accelerate your market expansion.',
      color: 'text-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-200'
    }
  ];

  return (
    <section id="why-d2dx2" className="relative py-24 bg-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
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
            Why Choose <span className="text-blue-700">D2DX2 Capital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four fundamental pillars that make us the execution partner of choice
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className={`h-full p-8 bg-gradient-to-br ${pillar.bgColor} border ${pillar.borderColor} rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-lg">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-10 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            More Than Capital. A Complete Execution Ecosystem.
          </h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
            We don't just invest—we build alongside you. From initial capital to manufacturing scale, 
            from legal setup to supply chain operations, D2DX2 Capital provides the complete infrastructure 
            that hardware and early-stage ventures need to succeed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}