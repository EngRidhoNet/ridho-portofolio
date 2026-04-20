import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'ridho-theme';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
};

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme);
};

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      className="group relative inline-flex items-center gap-1.5 h-7 px-2 rounded-full border border-line/10 hover:border-line/20 bg-line/[0.03] hover:bg-line/[0.06] text-body/80 hover:text-body transition-colors"
    >
      <span className="relative w-4 h-4">
        <Sun
          className={`absolute inset-0 w-4 h-4 transition-all ${
            theme === 'dark'
              ? 'opacity-0 -rotate-90 scale-75'
              : 'opacity-100 rotate-0 scale-100'
          }`}
          strokeWidth={2}
        />
        <Moon
          className={`absolute inset-0 w-4 h-4 transition-all ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-75'
          }`}
          strokeWidth={2}
        />
      </span>
      <span className="text-[11px] font-medium capitalize hidden sm:inline">
        {theme}
      </span>
    </button>
  );
};

export default ThemeToggle;
