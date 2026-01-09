export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    achievements: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    tech: string[];
    gradient: string;
    category: 'web' | 'mobile' | 'ai';
    image: string;
    link?: string;
    github?: string;
    award?: string;
    features?: string[];
  }
  
  export interface SkillCategory {
    category: string;
    icon: any;
    color: string;
    skills: string[];
  }
  
  export interface ContactInfo {
    icon: any;
    label: string;
    value: string;
    link?: string;
  }
  
  export interface StatItem {
    label: string;
    value: number;
    suffix: string;
    icon?: React.ComponentType<{ className?: string }>;
  }