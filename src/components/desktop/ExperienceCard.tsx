import React from 'react';
import { Briefcase } from 'lucide-react';
import AppWindow from './AppWindow';
import { experiences } from '../../data/experience';

const ExperienceCard: React.FC = () => {
  return (
    <AppWindow
      id="experience"
      appName="Calendar — Work"
      appIcon={<Briefcase className="w-4 h-4" strokeWidth={2} />}
      trailing={<span>{experiences.length} entries</span>}
      scrollable
      bodyClassName="max-h-[420px]"
      className="h-full"
    >
      <ol className="relative px-5 py-4">
        <span className="absolute left-[26px] top-6 bottom-6 w-px bg-line/5" />
        {experiences.map((e) => (
          <li key={`${e.company}-${e.period}`} className="relative pl-8 py-3">
            <span className="absolute left-[22px] top-[18px] w-2 h-2 rounded-full bg-line/40 ring-4 ring-surface" />
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <div className="min-w-0">
                <div className="text-[13.5px] font-medium text-body truncate">
                  {e.role}
                </div>
                <div className="text-[12px] text-muted truncate">
                  {e.company} · {e.location}
                </div>
              </div>
              <span className="text-[11px] font-mono text-muted-2 whitespace-nowrap">
                {e.period}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </AppWindow>
  );
};

export default ExperienceCard;
