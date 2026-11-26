import React, { useEffect, useRef, useState } from 'react';
import { Terminal, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import type { RouteView } from './PageNav';
import { playSoftClick } from '../../utils/sound';

interface CommandTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: RouteView) => void;
}

interface TermLine {
  type: 'cmd' | 'out';
  text: string;
}

const INITIAL_LINES: TermLine[] = [
  { type: 'cmd', text: 'whoami' },
  {
    type: 'out',
    text: 'Ridho Aulia Rahman (@EngRidhoNet) — Full Stack Developer & AI Engineer based in Malang, ID.',
  },
  { type: 'cmd', text: 'cat stack.txt' },
  {
    type: 'out',
    text: 'React · TypeScript · Laravel · Golang · Flutter · Python · TensorFlow · PostgreSQL · Docker',
  },
  { type: 'cmd', text: 'help' },
  {
    type: 'out',
    text: 'Commands: work | awards | writing | about | home | cv | contact | clear',
  },
];

export const CommandTerminalModal: React.FC<CommandTerminalModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [lines, setLines] = useState<TermLine[]>(INITIAL_LINES);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  if (!isOpen) return null;

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    playSoftClick();
    const nextLines: TermLine[] = [...lines, { type: 'cmd', text: raw }];

    if (cmd === 'clear') {
      setLines([]);
      setInput('');
      return;
    } else if (cmd === 'work' || cmd === 'projects') {
      nextLines.push({ type: 'out', text: 'Navigating to Work & Projects...' });
      onNavigate({ page: 'work' });
      onClose();
    } else if (cmd === 'awards' || cmd === 'wins') {
      nextLines.push({ type: 'out', text: 'Opening Small Wins & Achievements...' });
      onNavigate({ page: 'awards' });
      onClose();
    } else if (cmd === 'writing' || cmd === 'blog' || cmd === 'notes') {
      nextLines.push({ type: 'out', text: 'Opening Writing & Research Notes...' });
      onNavigate({ page: 'writing' });
      onClose();
    } else if (cmd === 'about') {
      nextLines.push({ type: 'out', text: 'Opening About Ridho...' });
      onNavigate({ page: 'about' });
      onClose();
    } else if (cmd === 'home') {
      nextLines.push({ type: 'out', text: 'Returning Home...' });
      onNavigate({ page: 'home' });
      onClose();
    } else if (cmd === 'cv' || cmd === 'resume') {
      nextLines.push({ type: 'out', text: 'Opening ridho-cv.pdf in a new tab...' });
      window.open('/ridho-cv.pdf', '_blank', 'noopener');
    } else if (cmd === 'contact' || cmd === 'email') {
      nextLines.push({
        type: 'out',
        text: 'Email: ridho.aulia7324@gmail.com | GitHub: github.com/EngRidhoNet',
      });
    } else if (cmd === 'whoami') {
      nextLines.push({
        type: 'out',
        text: 'Ridho Aulia Rahman — Founder @ Future AI Indonesia, Web Dev @ Hospital Penawar, Fullstack @ PT Noxio, Coding Educator @ Ruangguru.',
      });
    } else {
      nextLines.push({
        type: 'out',
        text: `Command not found: "${cmd}". Try: work, awards, writing, about, cv, contact, clear`,
      });
    }

    setLines(nextLines);
    setInput('');
  };

  const quickActions: { label: string; hint: string; action: () => void }[] = [
    {
      label: 'Go to Work & Projects',
      hint: '6 case studies + career timeline',
      action: () => {
        onNavigate({ page: 'work' });
        onClose();
      },
    },
    {
      label: 'Go to Small Wins (Awards)',
      hint: 'HackFest Top 10, Intl Paper 1st Runner Up, SISFO',
      action: () => {
        onNavigate({ page: 'awards' });
        onClose();
      },
    },
    {
      label: 'Go to Writing & Notes',
      hint: 'Engineering & AI research essays',
      action: () => {
        onNavigate({ page: 'writing' });
        onClose();
      },
    },
    {
      label: 'Go to About & Philosophy',
      hint: 'Story, education, and principles',
      action: () => {
        onNavigate({ page: 'about' });
        onClose();
      },
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-[22px] border border-white/15 bg-[#12161f] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#181d29] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-rose-500/80" />
            <span className="size-3 rounded-full bg-amber-400/80" />
            <span className="size-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-white/75">
              <Terminal className="size-3.5 text-sky-400" />
              ridho@malang:~ (zsh)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Close terminal"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Quick jump pills */}
        <div className="grid grid-cols-1 gap-1.5 border-b border-white/10 bg-[#151a24] p-3 sm:grid-cols-2">
          {quickActions.map((qa) => (
            <button
              key={qa.label}
              type="button"
              onClick={() => {
                playSoftClick();
                qa.action();
              }}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left transition hover:border-sky-400/50 hover:bg-white/[0.08]"
            >
              <div className="min-w-0">
                <div className="truncate text-xs font-semibold text-white">{qa.label}</div>
                <div className="truncate text-[10.5px] text-white/55">{qa.hint}</div>
              </div>
              <ArrowRight className="size-3.5 shrink-0 text-sky-400 transition-transform group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>

        {/* Terminal output log */}
        <div className="max-h-60 overflow-y-auto p-4 font-mono text-xs leading-relaxed">
          {lines.map((line, i) =>
            line.type === 'cmd' ? (
              <div key={i} className="mt-1.5 flex items-center gap-1.5">
                <span className="text-emerald-400">ridho@mac</span>
                <span className="text-white/40">:</span>
                <span className="text-sky-400">~</span>
                <span className="text-white/40">$</span>
                <span className="text-white">{line.text}</span>
              </div>
            ) : (
              <div key={i} className="pl-3 text-white/70">
                {line.text}
              </div>
            )
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input prompt */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            runCommand(input);
          }}
          className="flex items-center gap-2 border-t border-white/10 bg-[#0e1118] px-4 py-3 font-mono text-xs"
        >
          <span className="text-emerald-400">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. work, awards, writing, about, cv)..."
            className="w-full bg-transparent text-white placeholder-white/35 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-[10px] text-white/80 hover:bg-white/20"
          >
            <span>Run</span>
            <CornerDownLeft className="size-3" />
          </button>
        </form>
      </div>
    </div>
  );
};
