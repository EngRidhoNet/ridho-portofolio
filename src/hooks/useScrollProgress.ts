import type { Experience } from '../types';
import { useScroll } from 'framer-motion';

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}

export const experiences: Experience[] = [
  {
    company: 'Hospital Penawar Sdn Bhd',
    role: 'Web Developer',
    period: 'Dec 2025 - Present',
    location: 'Johor Bahru, Malaysia',
    achievements: [
      'Building healthcare web solutions with modern technologies',
      'Implementing responsive and user-friendly interfaces'
    ]
  },
  {
    company: 'Ruangguru',
    role: 'Coding Educator',
    period: 'Jul 2025 - Present',
    location: 'Remote',
    achievements: [
      'Teaching programming fundamentals to students',
      'Mentoring aspiring developers in their coding journey'
    ]
  },
  {
    company: 'PT Noxio Group Teknologi',
    role: 'Fullstack Developer',
    period: 'Mar 2025 - Present',
    location: 'Malang, Indonesia',
    achievements: [
      'Developed e-commerce platform with Laravel and React',
      'Implemented RESTful API architecture for scalable solutions'
    ]
  },
  {
    company: 'Future AI Indonesia',
    role: 'Founder',
    period: 'Jul 2025 - Present',
    location: 'Malang, Indonesia',
    achievements: [
      'Leading AI innovation initiatives in Indonesia',
      'Building community for AI enthusiasts and practitioners'
    ]
  },
  {
    company: 'Syabab Dev',
    role: 'Web Developer',
    period: 'Oct 2024 - Present',
    location: 'Malang, Indonesia',
    achievements: [
      'Developing web applications for various clients',
      'Ensuring code quality and best practices'
    ]
  },
  {
    company: 'Venturo Professional Programmer',
    role: 'Project Manager Intern',
    period: 'Jul 2024 - Oct 2024',
    location: 'Malang, Indonesia',
    achievements: [
      'Managed agile development workflows',
      'Coordinated cross-functional teams for project delivery'
    ]
  },
  {
    company: 'BTPN Syariah',
    role: 'Fullstack Developer Intern',
    period: 'Jan 2024 - Apr 2024',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Contributed to banking system development',
      'Implemented full-stack features with modern frameworks'
    ]
  }
];
