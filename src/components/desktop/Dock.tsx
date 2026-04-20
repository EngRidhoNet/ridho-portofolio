import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Sparkles,
  FolderGit2,
  Terminal,
  Briefcase,
  Mail,
  FileText,
} from 'lucide-react';

type DockItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  href?: string;
  external?: boolean;
};

const items: DockItem[] = [
  { id: 'profile', label: 'About', icon: User },
  { id: 'manifesto', label: 'Manifesto', icon: Sparkles },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'tools', label: 'Tools', icon: Terminal },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'cv', label: 'CV (PDF)', icon: FileText, href: '/ridho-cv.pdf', external: true },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Dock: React.FC = () => {
  const handleClick = (item: DockItem) => {
    if (item.external && item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }
    const el = document.getElementById(item.id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-3 pointer-events-none">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        className="force-dark pointer-events-auto flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-1.5 sm:py-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]"
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              aria-label={item.label}
              className="group relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              <Icon
                className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                strokeWidth={1.75}
              />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] px-2 py-1 rounded-md bg-white text-black font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
              <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-white/0 group-hover:bg-white/60 transition-colors" />
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Dock;
