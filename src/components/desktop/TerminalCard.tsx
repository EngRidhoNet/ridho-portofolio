import React, { useEffect, useState } from 'react';
import AppWindow from './AppWindow';

const lines = [
  { prompt: 'ridho@mac', path: '~', cmd: 'whoami' },
  { output: 'Full Stack Developer & AI Engineer' },
  { prompt: 'ridho@mac', path: '~', cmd: 'cat stack.txt' },
  { output: 'react · laravel · go · python · tensorflow · postgres · docker' },
  { prompt: 'ridho@mac', path: '~', cmd: 'status' },
  { output: '▸ open to new opportunities · based in Malang, ID' },
  { prompt: 'ridho@mac', path: '~', cmd: '' },
];

const TerminalCard: React.FC = () => {
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 550);
    return () => clearInterval(id);
  }, []);

  return (
    <AppWindow
      appName="Terminal — zsh"
      appIcon={<span className="text-[12px]">⌁</span>}
      trailing={<span className="font-mono">80×24</span>}
      className="h-full terminal-surface force-dark"
    >
      <div className="p-4 font-mono text-[12px] leading-relaxed text-body/85 h-full">
        {lines.map((l, i) =>
          l.cmd !== undefined ? (
            <div key={i} className="flex gap-1.5">
              <span className="text-emerald-400">{l.prompt}</span>
              <span className="text-body/40">:</span>
              <span className="text-sky-400">{l.path}</span>
              <span className="text-body/40">$</span>
              <span className="text-body">
                {l.cmd}
                {i === lines.length - 1 && (
                  <span
                    className={`inline-block w-[7px] h-[13px] align-middle ml-1 ${
                      blink ? 'bg-line/80' : 'bg-transparent'
                    }`}
                  />
                )}
              </span>
            </div>
          ) : (
            <div key={i} className="pl-0 text-body/60">
              {l.output}
            </div>
          )
        )}
      </div>
    </AppWindow>
  );
};

export default TerminalCard;
