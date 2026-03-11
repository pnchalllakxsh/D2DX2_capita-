import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-blue-200/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            About <span className="text-blue-700">D2DX2 Capital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            D2DX2 Capital is a venture platform providing capital access, infrastructure, 
            and operational support for scalable startups. We are not just an incubator—we 
            are a capital-backed execution ecosystem that transforms ideas into market-ready ventures.
          </p>
        </motion.div>

        {/* Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-10 md:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Execution Ecosystem</h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
            We provide comprehensive support spanning capital access, legal and compliance infrastructure, 
            manufacturing enablement, and supply chain operations. Our platform is designed for founders 
            who need more than mentorship—they need execution partners who can help them scale from 
            concept to market leadership.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            With dedicated facilities, strategic partnerships, and capital backing, we ensure that every 
            venture in our ecosystem has the resources to succeed. From initial structuring to manufacturing 
            at scale, we walk alongside founders every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}