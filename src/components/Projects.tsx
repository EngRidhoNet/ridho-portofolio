import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Award, ChevronRight, X, Layers } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'web', 'mobile', 'ai'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 px-6 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Layers className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">My Work</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8"
          >
            A collection of projects I've built, from award-winning applications to production-ready systems
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(i)}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl ${
                      project.category === 'web' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      project.category === 'mobile' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {project.category === 'web' && <Globe className="w-3 h-3 inline mr-1" />}
                      {project.category === 'mobile' && <Smartphone className="w-3 h-3 inline mr-1" />}
                      {project.category === 'ai' && <Award className="w-3 h-3 inline mr-1" />}
                      {project.category}
                    </span>
                  </div>

                  {/* Award Badge */}
                  {project.award && (
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-yellow-500/20 backdrop-blur-xl flex items-center justify-center border border-yellow-500/30"
                      >
                        <Award className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t, j) => (
                      <span 
                        key={j} 
                        className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-500">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    <span className="ml-auto text-xs text-gray-500">
                      Click for details
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#1a1a1a] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              >
                {/* Modal Image */}
                <div className="relative h-64 md:h-80">
                  <div className={`absolute inset-0 bg-gradient-to-br ${filteredProjects[selectedProject].gradient}`} />
                  <img 
                    src={filteredProjects[selectedProject].image}
                    alt={filteredProjects[selectedProject].title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  {filteredProjects[selectedProject].award && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-300">{filteredProjects[selectedProject].award}</span>
                    </div>
                  )}
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{filteredProjects[selectedProject].title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {filteredProjects[selectedProject].description}
                  </p>

                  {/* Features */}
                  {filteredProjects[selectedProject].features && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-purple-400">Key Features</h4>
                      <ul className="space-y-2">
                        {filteredProjects[selectedProject].features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <ChevronRight className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-purple-400">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[selectedProject].tech.map((t, j) => (
                        <span 
                          key={j} 
                          className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-300 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {filteredProjects[selectedProject].github && (
                      <motion.a
                        href={filteredProjects[selectedProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-gray-300 hover:text-white hover:border-white/20 transition-all"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </motion.a>
                    )}
                    {filteredProjects[selectedProject].link && (
                      <motion.a
                        href={filteredProjects[selectedProject].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center gap-2 text-white font-medium"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;