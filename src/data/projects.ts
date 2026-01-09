import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Marbot Application',
    description: 'High-performance mosque management app available on Play Store with comprehensive features for mosque administration, event scheduling, and community engagement. Built with scalable architecture to handle thousands of users.',
    tech: ['Laravel', 'RESTful API', 'Flutter', 'MySQL', 'Firebase'],
    gradient: 'from-blue-500 to-cyan-500',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=600&fit=crop',
    link: 'https://play.google.com',
    features: [
      'Real-time prayer time notifications',
      'Event and activity management',
      'Financial reporting system',
      'Community member directory',
      'Push notification integration'
    ]
  },
  {
    title: 'Cosmetic E-commerce Platform',
    description: 'Full-featured online store with admin dashboard, inventory management, and payment integration for PT Noxio. Handles product catalog, order processing, and customer management with real-time analytics.',
    tech: ['Laravel', 'React', 'RESTful API', 'PostgreSQL', 'Redis'],
    gradient: 'from-purple-500 to-pink-500',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop',
    github: 'https://github.com/EngRidhoNet',
    link: 'https://noxio.id',
    features: [
      'Advanced product filtering and search',
      'Real-time inventory tracking',
      'Multiple payment gateway integration',
      'Admin dashboard with analytics',
      'Order tracking system'
    ]
  },
  {
    title: 'Angkutkita',
    description: 'Public transportation automation app that achieved Top 10 at Hackfest 2024 Google Indonesia. Features microservices architecture for scalability and real-time tracking capabilities.',
    tech: ['Flutter', 'Golang', 'Microservices', 'Docker', 'Kubernetes'],
    gradient: 'from-pink-500 to-rose-500',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
    github: 'https://github.com/EngRidhoNet',
    award: 'Top 10 Hackfest 2024',
    features: [
      'Real-time vehicle tracking',
      'Route optimization algorithm',
      'Digital payment integration',
      'User feedback system',
      'Multi-language support'
    ]
  },
  {
    title: 'AURA+',
    description: 'Digital therapy application for children with Autism Spectrum Disorder (ASD) using AI-powered facial recognition and emotion detection. Won First Runner Up at International Paper Competition.',
    tech: ['AI/ML', 'TensorFlow', 'CNN', 'Python', 'Flutter'],
    gradient: 'from-cyan-500 to-blue-500',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
    award: '1st Runner Up International',
    features: [
      'AI-powered emotion detection',
      'Personalized therapy sessions',
      'Progress tracking dashboard',
      'Parent monitoring features',
      'Gamified learning modules'
    ]
  },
  {
    title: 'Mosque Management System',
    description: 'Published research implementation with agile methodology for efficient mosque operations. Comprehensive system for managing daily operations, finances, and community engagement.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
    gradient: 'from-orange-500 to-red-500',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&h=600&fit=crop',
    github: 'https://github.com/EngRidhoNet',
    features: [
      'Financial management module',
      'Event scheduling system',
      'Member database management',
      'Donation tracking',
      'Report generation'
    ]
  },
  {
    title: 'AI Recommendation System',
    description: 'Machine learning system for personalized content recommendations using advanced algorithms. Implements collaborative filtering and content-based filtering for accurate suggestions.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL'],
    gradient: 'from-green-500 to-teal-500',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    github: 'https://github.com/EngRidhoNet',
    features: [
      'Collaborative filtering algorithm',
      'Content-based recommendations',
      'Real-time processing pipeline',
      'A/B testing framework',
      'Analytics dashboard'
    ]
  }
];