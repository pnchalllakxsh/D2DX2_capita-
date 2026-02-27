import { motion } from 'motion/react';
import { Building2, Users, TrendingUp, Factory } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Building2, number: '120+', label: 'Startups Supported', color: 'text-blue-700' },
    { icon: TrendingUp, number: '₹300Cr+', label: 'Capital Raised', color: 'text-cyan-600' },
    { icon: Users, number: '75+', label: 'Strategic Partners', color: 'text-purple-600' },
    { icon: Factory, number: '20+', label: 'Manufacturing Facilities', color: 'text-blue-600' }
  ];

  return (
    <section id="about" className="relative py-24 bg-white">
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
            About <span className="text-blue-700">D2DX2 Capital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            D2DX2 Capital is a venture platform providing capital access, infrastructure, 
            and operational support for scalable startups. We are not just an incubator—we 
            are a capital-backed execution ecosystem that transforms ideas into market-ready ventures.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                {/* Icon */}
                <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                
                {/* Number */}
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-gray-700 text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-10 md:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Execution Ecosystem</h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            We provide comprehensive support spanning capital access, legal and compliance infrastructure, 
            manufacturing enablement, and supply chain operations. Our platform is designed for founders 
            who need more than mentorship—they need execution partners who can help them scale from 
            concept to market leadership. With dedicated facilities, strategic partnerships, and capital 
            backing, we ensure that every venture in our ecosystem has the resources to succeed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}