import React from 'react';
import { MapPin, BadgeCheck } from 'lucide-react';
import AppWindow from './AppWindow';
import profileImg from '../../assets/profile.jpeg';

const ProfileCard: React.FC = () => {
  return (
    <AppWindow
      id="profile"
      appName="About"
      appIcon={<span className="text-[13px]">@</span>}
      className="h-full"
    >
      <div className="p-5 flex flex-col gap-4 h-full">
        <div className="flex items-start gap-3">
          <div className="relative shrink-0">
            <img
              src={profileImg}
              alt="Ridho Aulia Rahman"
              className="w-14 h-14 rounded-full object-cover border border-line/10"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-surface" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h2 className="text-[15px] font-semibold text-body truncate">
                Ridho Aulia Rahman
              </h2>
              <BadgeCheck className="w-4 h-4 text-sky-400" strokeWidth={2.5} />
            </div>
            <p className="text-[13px] text-muted">@EngRidhoNet</p>
          </div>
        </div>

        <p className="text-[13.5px] leading-relaxed text-body/80">
          Full Stack Developer & AI Engineer. i build{' '}
          <span className="font-serif-italic text-body">useful things</span>{' '}
          with code — web apps, ML systems, and the glue in between.
        </p>

        <div className="flex items-center gap-1.5 text-[12.5px] text-muted">
          <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
          <span>Malang, Indonesia</span>
          <span className="mx-1.5 text-muted-2">·</span>
          <span>open to work</span>
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2 pt-3 border-t border-line/5">
          <Stat label="Projects" value="20+" />
          <Stat label="Years" value="3+" />
          <Stat label="GPA" value="3.87" />
        </div>
      </div>
    </AppWindow>
  );
};

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <div className="text-[15px] font-semibold text-body">{value}</div>
    <div className="text-[11px] text-muted uppercase tracking-wider">
      {label}
    </div>
  </div>
);

export default ProfileCard;
