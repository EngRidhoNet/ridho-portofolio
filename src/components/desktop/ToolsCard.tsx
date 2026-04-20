import React from 'react';
import { Terminal } from 'lucide-react';
import AppWindow from './AppWindow';

type Tool = {
  name: string;
  role: string;
  color: string;
  glyph: string;
  url: string;
};

const tools: Tool[] = [
  { name: 'VS Code', role: 'Editor of choice', color: '#3b82f6', glyph: '{ }', url: 'https://code.visualstudio.com' },
  { name: 'Terminal', role: 'zsh + tmux', color: '#10b981', glyph: '$_', url: '#' },
  { name: 'Docker', role: 'Container runtime', color: '#0ea5e9', glyph: '🐳', url: 'https://docker.com' },
  { name: 'GitHub', role: '@EngRidhoNet', color: '#ffffff', glyph: '⌥', url: 'https://github.com/EngRidhoNet' },
  { name: 'Jupyter', role: 'Notebooks & research', color: '#f59e0b', glyph: 'π', url: 'https://jupyter.org' },
  { name: 'Postman', role: 'API workbench', color: '#f97316', glyph: '⇄', url: 'https://postman.com' },
  { name: 'TensorFlow', role: 'Deep learning', color: '#fb923c', glyph: 'TF', url: 'https://tensorflow.org' },
  { name: 'PostgreSQL', role: 'Primary database', color: '#60a5fa', glyph: 'SQL', url: 'https://postgresql.org' },
  { name: 'Figma', role: 'Design & handoff', color: '#a855f7', glyph: '◐', url: 'https://figma.com' },
];

const ToolsCard: React.FC = () => {
  return (
    <AppWindow
      id="tools"
      appName="Applications"
      appIcon={<Terminal className="w-4 h-4" strokeWidth={2} />}
      trailing={<span>{tools.length} apps</span>}
      className="h-full"
    >
      <div className="p-4 grid grid-cols-3 gap-2">
        {tools.map((t) => (
          <a
            key={t.name}
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-line/[0.04] transition-colors"
          >
            <div
              className="w-11 h-11 rounded-[12px] border border-line/10 flex items-center justify-center text-[15px] font-semibold shadow-[0_6px_16px_-6px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform"
              style={{
                background: `linear-gradient(135deg, ${t.color}22, ${t.color}0a)`,
                color: t.color,
              }}
            >
              {t.glyph}
            </div>
            <div className="text-center">
              <div className="text-[11.5px] font-medium text-body/90 leading-tight">
                {t.name}
              </div>
              <div className="text-[10px] text-muted leading-tight mt-0.5">
                {t.role}
              </div>
            </div>
          </a>
        ))}
      </div>
    </AppWindow>
  );
};

export default ToolsCard;
