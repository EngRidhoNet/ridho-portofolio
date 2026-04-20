import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import AppWindow from './AppWindow';
import { education, awards } from '../../data/experience';

const EducationCard: React.FC = () => {
  return (
    <AppWindow
      appName="Notes — Education"
      appIcon={<GraduationCap className="w-4 h-4" strokeWidth={2} />}
      className="h-full"
    >
      <div className="p-5 flex flex-col gap-4 h-full">
        <div>
          <div className="text-[13px] font-medium text-body leading-tight">
            {education.degree}
          </div>
          <div className="text-[12px] text-muted mt-0.5 leading-snug">
            {education.university}
          </div>
          <div className="flex items-center gap-2 mt-2 text-[11.5px] font-mono text-muted-2">
            <span>{education.period}</span>
            <span>·</span>
            <span>GPA {education.gpa}</span>
          </div>
        </div>

        <div className="wave-divider text-center opacity-60">~ ~ ~</div>

        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted">
          <Award className="w-3 h-3" strokeWidth={2.5} />
          <span>Selected awards</span>
        </div>
        <ul className="space-y-2">
          {awards.slice(0, 4).map((a) => (
            <li
              key={a.title}
              className="flex items-start gap-2.5 p-2.5 -mx-2.5 rounded-lg hover:bg-line/[0.03] transition-colors"
            >
              <span className="w-6 h-6 rounded-md bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-[11px] shrink-0">
                🏅
              </span>
              <div className="min-w-0">
                <div className="text-[12.5px] text-body truncate">
                  {a.title}
                </div>
                <div className="text-[11px] text-muted truncate">
                  {a.issuer} · {a.date}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AppWindow>
  );
};

export default EducationCard;
