import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line - Center on desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2" />

          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative mb-12 md:mb-16 pl-12 md:pl-0 md:flex md:items-start"
              >
                {/* Timeline Dot - Always centered on the line */}
                <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-[#0f0f0f] -translate-x-1/2 z-10" />

                {/* Left spacer for odd items on desktop */}
                {!isEven && <div className="hidden md:block md:w-1/2" />}

                {/* Card Container */}
                <div className={`md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <div className="text-purple-400 font-semibold mb-1">{exp.role}</div>
                    <div className="text-gray-400 text-sm mb-1">{exp.period}</div>
                    <div className="text-gray-500 text-sm mb-4">{exp.location}</div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="text-gray-300 text-sm">• {achievement}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Right spacer for even items on desktop */}
                {isEven && <div className="hidden md:block md:w-1/2" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;