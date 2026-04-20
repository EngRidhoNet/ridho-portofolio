import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import AppWindow from './AppWindow';
import { projects } from '../../data/projects';

const FeaturedProjectCard: React.FC = () => {
  const featured = projects.find((p) => p.title === 'Angkutkita') ?? projects[0];
  const url = featured.link || featured.github || '#';

  return (
    <AppWindow
      appName="Safari — featured.project"
      appIcon={<span className="text-[12px]">🌐</span>}
      trailing={<span className="font-mono truncate max-w-[180px]">{prettyUrl(url)}</span>}
      className="h-full"
    >
      <div className="p-5 flex flex-col h-full gap-4">
        <div className="relative rounded-xl overflow-hidden border border-line/10 bg-bg">
          <div className="flex items-center gap-1.5 px-3 h-7 bg-line/[0.04] border-b border-line/10">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-3 h-4 rounded bg-line/5 flex items-center px-2">
              <span className="text-[9.5px] font-mono text-muted truncate">
                {prettyUrl(url)}
              </span>
            </div>
          </div>
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[20px]" aria-hidden>🚍</span>
              <h3 className="text-[16px] font-semibold text-body truncate">
                {featured.title}
              </h3>
              {featured.award && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-400/15 text-yellow-700 dark:text-yellow-300/90 border border-yellow-500/30 dark:border-yellow-400/20 font-medium shrink-0">
                  {featured.award}
                </span>
              )}
            </div>
            <p className="text-[12.5px] text-muted leading-relaxed line-clamp-2">
              {featured.description}
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {featured.github && (
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-line/10 hover:bg-line/5 text-body/80"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-line/10 hover:bg-line/5 text-body/80"
              aria-label="Open"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {featured.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-md bg-line/[0.04] border border-line/5 text-body/70 font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </AppWindow>
  );
};

function prettyUrl(url: string) {
  if (url === '#') return 'github.com/EngRidhoNet';
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '') + u.pathname.replace(/\/$/, '');
  } catch {
    return url;
  }
}

export default FeaturedProjectCard;
