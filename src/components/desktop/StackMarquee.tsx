import React from 'react';
import AppWindow from './AppWindow';
import { skillCategories } from '../../data/skills';

const StackMarquee: React.FC = () => {
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const loop = [...allSkills, ...allSkills];

  return (
    <AppWindow
      appName="Stack"
      appIcon={<span className="text-[12px]">◈</span>}
      trailing={<span>what i ship with</span>}
      className="h-full"
    >
      <div className="py-5 overflow-hidden relative h-full flex items-center">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent z-10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent z-10"
          aria-hidden
        />
        <div className="flex gap-2 w-max animate-scroll-x">
          {loop.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="text-[12px] px-3 py-1.5 rounded-full bg-line/[0.04] border border-line/10 text-body/80 font-mono whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </AppWindow>
  );
};

export default StackMarquee;
