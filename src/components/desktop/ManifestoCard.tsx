import React from 'react';
import { motion } from 'framer-motion';
import AppWindow from './AppWindow';

const lines = [
  { text: 'i build things.', italic: 'things' },
  { text: 'i think code can change things.', italic: 'change' },
  { text: 'the best systems are invisible.', italic: 'invisible' },
  { text: 'i care about shipping, not shipping demos.', italic: 'shipping' },
  { text: 'ai is a tool. the craft is in knowing when to use it.', italic: 'craft' },
];

const ManifestoCard: React.FC = () => {
  return (
    <AppWindow
      id="manifesto"
      appName="readme.md"
      appIcon={<span className="text-[13px]">#</span>}
      trailing={<span className="font-mono">manifesto</span>}
      className="h-full"
    >
      <div className="p-6 md:p-8 h-full flex flex-col justify-center">
        <div className="space-y-2 md:space-y-3">
          {lines.map((line, i) => (
            <motion.p
              key={line.text}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-[26px] md:text-[34px] leading-[1.15] tracking-tight font-medium text-body/95 lowercase"
            >
              {line.text.split(line.italic).map((part, idx, arr) => (
                <React.Fragment key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <span className="font-serif-italic text-body/60">
                      {line.italic}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </motion.p>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="wave-divider">~  ~  ~</span>
          <span className="text-[12px] text-muted">
            Ridho · Engineer · Malang, ID
          </span>
        </div>
      </div>
    </AppWindow>
  );
};

export default ManifestoCard;
