import { motion } from 'motion/react';
import { 
  Building2, 
  DollarSign, 
  Scale, 
  Factory, 
  Truck
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Office Infrastructure',
      description: 'Modern office space, coworking facilities, meeting rooms, and operational base setup for your venture.',
      color: 'text-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: DollarSign,
      title: 'Funding & Fund Raise Support',
      description: 'Investor connections, pitch refinement, fundraising strategy, and term sheet advisory for growth capital.',
      color: 'text-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100'
    },
    {
      icon: Scale,
      title: 'Legal & CA Services',
      description: 'Company registration, compliance management, tax advisory, and corporate structuring support.',
      color: 'text-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: Factory,
      title: 'Manufacturing Support',
      description: 'Factory space access, vendor onboarding, hardware manufacturing assistance, and quality control.',
      color: 'text-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Truck,
      title: 'Supply Chain Support',
      description: 'Procurement networks, logistics enablement, vendor management, and scaling operations efficiently.',
      color: 'text-teal-600',
      bgColor: 'from-teal-50 to-teal-100'
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
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
            Our <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive infrastructure and operational support for scalable ventures
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Clean Card */}
              <div className="h-full p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.bgColor} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6 text-lg">
            Ready to leverage our comprehensive support ecosystem?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('apply');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}