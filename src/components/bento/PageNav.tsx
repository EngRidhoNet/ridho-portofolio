import React, { useEffect, useState } from 'react';
import { Sun, Moon, Terminal, FileDown, Sparkles } from 'lucide-react';
import { playSoftClick } from '../../utils/sound';

export type RouteView =
  | { page: 'home' }
  | { page: 'work' }
  | { page: 'project-detail'; slug: string }
  | { page: 'awards' }
  | { page: 'writing' }
  | { page: 'about' };

interface TopNavBarProps {
  currentRoute: RouteView;
  onNavigate: (route: RouteView) => void;
  onOpenCommandPalette: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  currentRoute,
  onNavigate,
  onOpenCommandPalette,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [timeWib, setTimeWib] = useState<string>('');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const updateClock = () => {
      try {
        setTimeWib(
          new Date().toLocaleTimeString('en-GB', {
            timeZone: 'Asia/Jakarta',
            hour: '2-digit',
            minute: '2-digit',
          })
        );
      } catch {
        setTimeWib('14:30');
      }
    };
    updateClock();
    const timer = window.setInterval(updateClock, 30000);
    return () => window.clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    playSoftClick();
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('ridho-theme', next);
    } catch {
      // ignore
    }
  };

  const navItems: { label: string; page: RouteView['page']; route: RouteView }[] = [
    { label: 'Home', page: 'home', route: { page: 'home' } },
    { label: 'Work', page: 'work', route: { page: 'work' } },
    { label: 'Small wins', page: 'awards', route: { page: 'awards' } },
    { label: 'Writing', page: 'writing', route: { page: 'writing' } },
    { label: 'About', page: 'about', route: { page: 'about' } },
  ];

  const isActive = (page: RouteView['page']) => {
    if (page === 'work' && currentRoute.page === 'project-detail') return true;
    return currentRoute.page === page;
  };

  return (
    <header className="mx-auto mb-4 max-w-[1024px]">
      <div className="bento-card flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 sm:px-5">
        {/* Brand / Status */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              playSoftClick();
              onNavigate({ page: 'home' });
            }}
            className="group inline-flex items-center gap-2.5 text-left focus:outline-none"
          >
            <span className="grid size-7 place-items-center rounded-lg bg-ink text-xs font-bold text-white transition group-hover:bg-brand">
              R
            </span>
            <div>
              <span className="block text-xs font-semibold tracking-tight text-ink">
                ridho.fyi
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-soft">
                <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Malang, ID {timeWib && `· ${timeWib} WIB`}
              </span>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-1 overflow-x-auto py-0.5 text-xs font-medium"
        >
          {navItems.map((item) => {
            const active = isActive(item.page);
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  playSoftClick();
                  onNavigate(item.route);
                }}
                className={`rounded-full px-3 py-1.5 transition ${
                  active
                    ? 'bg-ink text-white shadow-xs'
                    : 'text-ink-soft hover:bg-black/5 hover:text-ink dark:hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions: Terminal, CV, Theme */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              playSoftClick();
              onOpenCommandPalette();
            }}
            title="Open Interactive Terminal (⌘K)"
            className="inline-flex items-center gap-1.5 rounded-full border border-line-bento bg-page px-2.5 py-1.5 font-mono text-[11px] font-medium text-ink-soft transition hover:border-brand hover:text-brand"
          >
            <Terminal className="size-3.5" />
            <span className="hidden md:inline">Terminal</span>
            <kbd className="hidden rounded bg-black/5 px-1 py-0.5 text-[9.5px] sm:inline dark:bg-white/10">
              ⌘K
            </kbd>
          </button>

          <a
            href="/ridho-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSoftClick()}
            title="Download CV (PDF)"
            className="inline-flex items-center gap-1 rounded-full border border-line-bento bg-page px-2.5 py-1.5 text-[11px] font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            <FileDown className="size-3.5" />
            <span className="hidden sm:inline">CV</span>
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="grid size-8 place-items-center rounded-full border border-line-bento bg-page text-ink-soft transition hover:border-brand hover:text-brand"
          >
            {theme === 'light' ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

interface SubpageNavBarProps {
  title: string;
  backLabel?: string;
  variant: 'work' | 'awards' | 'writing' | 'about';
  onBack: () => void;
}

export const SubpageNavBar: React.FC<SubpageNavBarProps> = ({
  title,
  backLabel = 'Back',
  variant,
  onBack,
}) => {
  const variantClasses: Record<SubpageNavBarProps['variant'], string> = {
    work: 'surface-mint shadow-[0_14px_32px_rgba(68,126,105,0.16)]',
    awards: 'surface-sky shadow-[0_14px_32px_rgba(82,126,164,0.16)]',
    writing: 'surface-sun shadow-[0_14px_32px_rgba(190,128,28,0.16)]',
    about: 'surface-ink shadow-[0_14px_32px_rgba(29,35,48,0.16)]',
  };

  return (
    <nav
      aria-label="Page navigation"
      className={`mb-4 flex min-h-[54px] items-center justify-between gap-4 rounded-[18px] border border-black/10 px-4 py-2.5 ${variantClasses[variant]}`}
    >
      <button
        type="button"
        onClick={() => {
          playSoftClick();
          onBack();
        }}
        className="group inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.05em] transition hover:opacity-80"
      >
        <span
          aria-hidden="true"
          className="text-base leading-none transition-transform duration-200 group-hover:-translate-x-1"
        >
          &larr;
        </span>
        <span>{backLabel}</span>
      </button>

      <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
        <Sparkles className="size-3.5 opacity-70" />
        {title}
      </span>
    </nav>
  );
};
