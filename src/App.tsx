import React from 'react';
import Dock from './components/desktop/Dock';
import ProfileCard from './components/desktop/ProfileCard';
import ManifestoCard from './components/desktop/ManifestoCard';
import ProjectsListCard from './components/desktop/ProjectsListCard';
import FeaturedProjectCard from './components/desktop/FeaturedProjectCard';
import ToolsCard from './components/desktop/ToolsCard';
import ExperienceCard from './components/desktop/ExperienceCard';
import EducationCard from './components/desktop/EducationCard';
import TerminalCard from './components/desktop/TerminalCard';
import StackMarquee from './components/desktop/StackMarquee';
import SocialCard from './components/desktop/SocialCard';
import NowPlayingCard from './components/desktop/NowPlayingCard';
import ThemeToggle from './components/desktop/ThemeToggle';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-bg text-body desktop-bg noise">
      {/* Menubar */}
      <div className="relative z-20 px-4 md:px-6 h-10 flex items-center justify-between text-[11.5px] text-muted font-medium">
        <div className="flex items-center gap-3">
          <span className="text-body/90"></span>
          <span className="hidden sm:inline">ridho.fyi</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">Malang, ID</span>
          <span className="font-mono hidden sm:inline">v2026.04</span>
          <ThemeToggle />
        </div>
      </div>

      {/* Bento grid */}
      <main className="relative z-10 px-4 md:px-6 pb-32 pt-2 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 auto-rows-[minmax(90px,auto)] gap-3 md:gap-4">
          {/* Row 1 — Profile + Manifesto */}
          <div className="col-span-12 md:col-span-5 row-span-4">
            <ProfileCard />
          </div>
          <div className="col-span-12 md:col-span-7 row-span-4">
            <ManifestoCard />
          </div>

          {/* Row 2 — Featured project + Projects list */}
          <div id="projects-top" className="col-span-12 md:col-span-7 row-span-6">
            <FeaturedProjectCard />
          </div>
          <div className="col-span-12 md:col-span-5 row-span-6">
            <ProjectsListCard />
          </div>

          {/* Row 3 — Tools + Terminal + Now */}
          <div className="col-span-12 md:col-span-5 row-span-5">
            <ToolsCard />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-5">
            <TerminalCard />
          </div>
          <div className="col-span-12 md:col-span-3 row-span-5">
            <NowPlayingCard />
          </div>

          {/* Row 4 — Stack marquee full-width */}
          <div className="col-span-12 row-span-2">
            <StackMarquee />
          </div>

          {/* Row 5 — Experience + Education */}
          <div className="col-span-12 md:col-span-7 row-span-6">
            <ExperienceCard />
          </div>
          <div className="col-span-12 md:col-span-5 row-span-6">
            <EducationCard />
          </div>

          {/* Row 6 — Social */}
          <div className="col-span-12 row-span-3">
            <SocialCard />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] text-muted-2">
          <span className="wave-divider">~ ~ ~ ~ ~</span>
          <span>
            Designed & built by Ridho · © {new Date().getFullYear()} ·
            made in Malang
          </span>
          <span className="wave-divider">~ ~ ~ ~ ~</span>
        </div>
      </main>

      <Dock />
    </div>
  );
};

export default App;
