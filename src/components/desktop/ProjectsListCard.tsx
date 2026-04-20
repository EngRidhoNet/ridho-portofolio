import React from 'react';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';
import AppWindow from './AppWindow';
import { projects } from '../../data/projects';

const categoryEmoji: Record<string, string> = {
  web: '🌐',
  mobile: '📱',
  ai: '🧠',
};

const ProjectsListCard: React.FC = () => {
  return (
    <AppWindow
      id="projects"
      appName="Finder — Projects"
      appIcon={<FolderGit2 className="w-4 h-4" strokeWidth={2} />}
      trailing={<span>{projects.length} items</span>}
      scrollable
      bodyClassName="max-h-[420px]"
      className="h-full"
    >
      <ul className="divide-y divide-line/5">
        {projects.map((p) => {
          const primaryLink = p.link || p.github;
          return (
            <li
              key={p.title}
              className="group flex items-center gap-3 px-4 py-3 hover:bg-line/[0.03] transition-colors"
            >
              <span
                className="w-9 h-9 rounded-lg bg-line/5 border border-line/5 flex items-center justify-center text-[18px] shrink-0"
                aria-hidden
              >
                {categoryEmoji[p.category] ?? '•'}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[13.5px] font-medium text-body truncate">
                    {p.title}
                  </span>
                  {p.award && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-400/15 text-yellow-700 dark:text-yellow-300/90 border border-yellow-500/30 dark:border-yellow-400/20 font-medium shrink-0">
                      {p.award}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-[11.5px] text-muted truncate">
                  <span className="truncate">{p.tech.slice(0, 3).join(' · ')}</span>
                  {primaryLink && (
                    <>
                      <span className="text-muted-2">·</span>
                      <span className="font-mono text-muted-2 truncate">
                        {prettyUrl(primaryLink)}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-line/5 text-body/70"
                    aria-label="GitHub repo"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {primaryLink && (
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-line/5 text-body/70"
                    aria-label="Open project"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </AppWindow>
  );
};

function prettyUrl(url: string) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '') + u.pathname.replace(/\/$/, '');
  } catch {
    return url;
  }
}

export default ProjectsListCard;
