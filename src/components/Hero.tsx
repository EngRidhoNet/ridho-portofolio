import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown, Sparkles, Code2, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full Stack Developer",
    "AI Engineer", 
    "Tech Innovator",
    "Problem Solver"
  ];

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [0, window.innerWidth], [-30, 30]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, window.innerHeight], [-30, 30]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Mouse Follow Glow */}
      <motion.div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* 3D Floating Elements */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute top-20 left-10 md:left-20"
      >
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          className="w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center"
        >
          <Code2 className="w-8 h-8 md:w-12 md:h-12 text-blue-400" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ x: useTransform(moveX, v => -v), y: useTransform(moveY, v => -v) }}
        className="absolute bottom-32 right-10 md:right-20"
      >
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
          className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center"
        >
          <Cpu className="w-6 h-6 md:w-10 md:h-10 text-purple-400" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ x: moveY, y: moveX }}
        className="absolute top-40 right-20 md:right-40"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center"
        >
          <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-pink-400" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
        >
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            className="text-2xl"
          >
            👋
          </motion.span>
          <span className="text-gray-300">Welcome to my portfolio</span>
        </motion.div>

        {/* Name with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-6"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-8xl font-bold relative"
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-2xl opacity-50">
                Ridho Aulia Rahman
              </span>
              <span className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ridho Aulia Rahman
              </span>
            </span>
          </motion.h1>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 w-32 md:w-48 mx-auto mt-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          />
        </motion.div>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-16 md:h-20 flex items-center justify-center mb-4"
        >
          <div className="relative">
            {roles.map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentRole === index ? 1 : 0,
                  y: currentRole === index ? 0 : -20
                }}
                transition={{ duration: 0.5 }}
                className={`text-2xl md:text-4xl font-semibold ${currentRole === index ? 'block' : 'absolute inset-0'}`}
              >
                <span className="text-gray-300">I'm a </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {role}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex items-center justify-center gap-2 text-gray-400 mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MapPin className="w-5 h-5 text-red-400" />
          </motion.div>
          <span>Malang, Indonesia</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[2px] bg-[#0a0a0a] rounded-full opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400">
              <Sparkles className="w-5 h-5 text-white group-hover:text-purple-400" />
              View My Work
            </span>
          </motion.a>
          
          <motion.a
            href="/ridho-cv.pdf"
            download="CV-Ridho-Aulia-Rahman.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full font-semibold bg-white/5 backdrop-blur-xl border border-white/20 hover:border-purple-500/50 transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          {[
            { Icon: Github, href: 'https://github.com/EngRidhoNet', color: 'hover:text-gray-100 hover:border-gray-100' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/ridho-aulia-rahman', color: 'hover:text-blue-400 hover:border-blue-400' },
            { Icon: Mail, href: 'mailto:ridho.aulia7324@gmail.com', color: 'hover:text-red-400 hover:border-red-400' }
          ].map(({ Icon, href, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-300 ${color}`}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;