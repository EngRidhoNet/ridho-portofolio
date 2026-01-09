import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';
import type { StatItem } from '../types';
import profileImage from '../assets/profile.jpeg';
import { Code2, Brain, Rocket, GraduationCap, Award, Users, Building2, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const stats: StatItem[] = [
    { label: 'Years Experience', value: 3, suffix: '+', icon: Rocket },
    { label: 'Projects Completed', value: 15, suffix: '+', icon: Code2 },
    { label: 'Technologies', value: 20, suffix: '+', icon: Brain },
    { label: 'Awards Won', value: 5, suffix: '+', icon: Award }
  ];

  const highlights = [
    { icon: Building2, title: 'Hospital Penawar', subtitle: 'Web Developer', color: 'from-blue-500 to-cyan-500' },
    { icon: BookOpen, title: 'Ruangguru', subtitle: 'Coding Educator', color: 'from-purple-500 to-pink-500' },
    { icon: Rocket, title: 'Future AI Indonesia', subtitle: 'Founder & CEO', color: 'from-orange-500 to-red-500' },
    { icon: GraduationCap, title: 'GPA 3.87', subtitle: 'Academic Excellence', color: 'from-green-500 to-teal-500' }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Get to Know Me</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 w-24 h-24 border-2 border-dashed border-purple-500/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-dashed border-blue-500/30 rounded-full"
            />

            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#0a0a0a]">
                <img 
                  src={profileImage} 
                  alt="Ridho Aulia Rahman"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-gray-300">Available for opportunities</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Experience Badge - Floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -right-4 top-10 md:-right-8"
            >
              <div className="px-4 py-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-xs text-gray-400">Years Exp.</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed"
              >
                Hi! I'm a passionate{' '}
                <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>{' '}
                and{' '}
                <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Engineer
                </span>{' '}
                building the future of technology.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 leading-relaxed"
              >
                As the founder of <span className="text-purple-400 font-medium">Future AI Indonesia</span>, 
                I'm dedicated to advancing AI technology and education. My journey includes published research papers, 
                recognition in international competitions, and building solutions that impact thousands of users.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 leading-relaxed"
              >
                Teladan Scholarship awardee with multiple certifications from DeepLearning.AI, 
                committed to continuous learning and innovation in the tech space.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} p-2 mb-3`}>
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-white font-semibold text-sm">{item.title}</div>
                  <div className="text-gray-500 text-xs">{item.subtitle}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Stats Container */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            
            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <StatCard key={i} stat={stat} index={i} StatIcon={StatIcon} />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Separate component for stat card to properly use hooks
const StatCard: React.FC<{ stat: StatItem & { icon?: React.ComponentType<{ className?: string }> }; index: number; StatIcon?: React.ComponentType<{ className?: string }> }> = ({ stat, index, StatIcon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative text-center group"
    >
      {/* Icon */}
      {StatIcon && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
          className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"
        >
          <StatIcon className="w-6 h-6 text-purple-400" />
        </motion.div>
      )}
      
      {/* Number */}
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
        {count}{stat.suffix}
      </div>
      
      {/* Label */}
      <div className="text-gray-400 text-sm">{stat.label}</div>
      
      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3 }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </motion.div>
  );
};

export default About;