import { motion } from 'motion/react';
import { Building2, DollarSign, Scale, Factory, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Office Infrastructure',
    description: 'Modern office space, coworking facilities, meeting rooms, and operational base setup for your venture.',
    gradient: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-50 dark:bg-blue-500/10',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: DollarSign,
    title: 'Funding & Fund Raise Support',
    description: 'Investor connections, pitch refinement, fundraising strategy, and term sheet advisory for growth capital.',
    gradient: 'from-cyan-500 to-teal-500',
    iconBg: 'bg-cyan-50 dark:bg-cyan-500/10',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: Scale,
    title: 'Legal & CA Services',
    description: 'Company registration, compliance management, tax advisory, and corporate structuring support.',
    gradient: 'from-purple-500 to-violet-500',
    iconBg: 'bg-purple-50 dark:bg-purple-500/10',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: Factory,
    title: 'Manufacturing Support',
    description: 'Factory space access, vendor onboarding, hardware manufacturing assistance, and quality control.',
    gradient: 'from-blue-600 to-indigo-600',
    iconBg: 'bg-indigo-50 dark:bg-indigo-500/10',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    icon: Truck,
    title: 'Supply Chain Support',
    description: 'Procurement networks, logistics enablement, vendor management, and scaling operations efficiently.',
    gradient: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-50 dark:bg-teal-500/10',
    iconColor: 'text-teal-600 dark:text-teal-400',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/50 dark:bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

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
            What We Offer
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive infrastructure and operational support for scalable ventures
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/5">
                {/* Hover gradient bar */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${service.gradient} rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Hover link */}
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Ready to leverage our comprehensive support ecosystem?
          </p>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300 font-semibold"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
