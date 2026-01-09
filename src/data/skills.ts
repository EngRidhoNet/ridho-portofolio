import { Code2, Server, Smartphone, Brain, Database, Wrench } from 'lucide-react';
import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Inertia.js', 'Vue.js']
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    skills: ['Laravel', 'Golang', 'Python', 'RESTful API', 'Node.js', 'FastAPI']
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-pink-500 to-rose-500',
    skills: ['Flutter', 'React Native', 'Mobile UI/UX', 'Firebase']
  },
  {
    category: 'AI/ML',
    icon: Brain,
    color: 'from-cyan-500 to-blue-500',
    skills: ['TensorFlow', 'BERT', 'ViT', 'CNN', 'Transformers', 'Deep Learning', 'PyTorch']
  },
  {
    category: 'Database',
    icon: Database,
    color: 'from-rose-500 to-orange-500',
    skills: ['MySQL', 'PostgreSQL', 'Firebase', 'MongoDB', 'Redis']
  },
  {
    category: 'DevOps',
    icon: Wrench,
    color: 'from-orange-500 to-yellow-500',
    skills: ['Docker', 'CI/CD', 'Git', 'GitLab', 'Linux', 'Nginx']
  }
];
