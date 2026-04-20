import React from 'react';
import { motion } from 'framer-motion';

type AppWindowProps = {
  appName?: string;
  appIcon?: React.ReactNode;
  accentColor?: string;
  trailing?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  scrollable?: boolean;
  id?: string;
  children: React.ReactNode;
};

const AppWindow: React.FC<AppWindowProps> = ({
  appName,
  appIcon,
  accentColor,
  trailing,
  className = '',
  bodyClassName = '',
  scrollable = false,
  id,
  children,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`card card-interactive overflow-hidden flex flex-col ${className}`}
    >
      {(appName || appIcon) && (
        <header className="flex items-center gap-2.5 px-4 h-11 border-b border-line/5 shrink-0">
          <div className="flex items-center gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          {appIcon && (
            <span
              className="w-5 h-5 flex items-center justify-center rounded-[5px] shrink-0"
              style={accentColor ? { color: accentColor } : undefined}
            >
              {appIcon}
            </span>
          )}
          {appName && (
            <span className="text-[12px] font-medium text-body/80 tracking-tight">
              {appName}
            </span>
          )}
          <div className="ml-auto flex items-center gap-2 text-muted text-[11px]">
            {trailing}
          </div>
        </header>
      )}
      <div
        className={`${
          scrollable ? 'overflow-y-auto' : ''
        } flex-1 ${bodyClassName}`}
      >
        {children}
      </div>
    </motion.section>
  );
};

export default AppWindow;
