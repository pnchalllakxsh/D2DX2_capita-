import vibhuImg from "../../assets/vibhu.jpeg";
import brijjImg from "../../assets/brijj.jpg";
import ramanImg from "../../assets/raman.jpeg";
import nidhiImg from "../../assets/nidhi.jpeg";
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

export function Leadership() {
  const leaders = [
    {
      name: 'Mr. Vibhu Gupta',
      designation: 'Founder',
      bio: 'Founder of Mighty Avengers Solar Private Limited',
      image: vibhuImg,
    },
    {
      name: 'Mrs. Nidhi Gupta',
      designation: 'Co-Founder',
      bio: 'CEO & Founder at Rays Expert',
      image: nidhiImg
    },
    {
      name: 'Mr. Raman Gupta',
      designation: 'Director',
      bio: 'Director at Mighty Avengers Solar Private Limited',
      image: ramanImg,
    },
    {
      name: 'Mr. Brij Pal',
      designation: 'Vice President',
      bio: 'VP at Mighty Avengers Solar Pvt Lmt',
      image: brijjImg,
    }
  ];

  return (
    <section id="leadership" className="relative py-24 bg-white">
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
            Our <span className="text-blue-700">Leadership Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals driving execution excellence and venture success
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-700 font-semibold text-sm mb-3">
                    {leader.designation}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                  
                  {/* LinkedIn Icon */}
                  <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center transition-all">
                    <Linkedin className="w-5 h-5 text-blue-700" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
