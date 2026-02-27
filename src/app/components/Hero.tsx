import { motion } from 'motion/react';
import { ArrowRight, Building2 } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="none" />
              <circle cx="40" cy="40" r="2" fill="#1e40af" opacity="0.3" />
              <line x1="0" y1="40" x2="80" y2="40" stroke="#1e40af" strokeWidth="0.5" opacity="0.2" />
              <line x1="40" y1="0" x2="40" y2="80" stroke="#1e40af" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full"
          >
            <Building2 className="w-4 h-4 text-blue-700" />
            <span className="text-blue-700 text-sm font-medium">Capital-Backed Execution Ecosystem</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
          >
            Building Scalable Ventures
            <br />
            <span className="text-blue-700">
              with Capital and Infrastructure
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            D2DX2 Capital empowers founders with funding support, legal infrastructure, 
            manufacturing enablement, and operational scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button
              onClick={() => scrollToSection('apply')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span className="font-semibold">Apply for Partnership</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-white border-2 border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-5xl mx-auto"
          >
            {[
              { number: '100+', label: 'Startups Supported' },
              { number: '₹250Cr+', label: 'Capital Raised' },
              { number: '50+', label: 'Strategic Partners' },
              { number: '15+', label: 'Manufacturing Facilities' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-700">{stat.number}</div>
                <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}