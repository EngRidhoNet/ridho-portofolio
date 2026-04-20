import React from 'react';
import { Github, Linkedin, Mail, FileText, MessageCircle, Twitter } from 'lucide-react';
import AppWindow from './AppWindow';

type Social = {
  label: string;
  value: string;
  href: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  accent: string;
};

const socials: Social[] = [
  { label: 'GitHub', value: '@EngRidhoNet', href: 'https://github.com/EngRidhoNet', Icon: Github, accent: '#ffffff' },
  { label: 'LinkedIn', value: 'Ridho Aulia', href: 'https://linkedin.com', Icon: Linkedin, accent: '#0a66c2' },
  { label: 'Twitter', value: '@EngRidhoNet', href: 'https://x.com', Icon: Twitter, accent: '#1d9bf0' },
  { label: 'Email', value: 'ridho.aulia133@gmail.com', href: 'mailto:ridho.aulia133@gmail.com', Icon: Mail, accent: '#ef4444' },
  { label: 'CV', value: 'ridho-cv.pdf', href: '/ridho-cv.pdf', Icon: FileText, accent: '#f59e0b' },
  { label: 'iMessage', value: 'say hi', href: 'mailto:ridho.aulia133@gmail.com', Icon: MessageCircle, accent: '#22c55e' },
];

const SocialCard: React.FC = () => {
  return (
    <AppWindow
      id="contact"
      appName="Messages"
      appIcon={<MessageCircle className="w-4 h-4" strokeWidth={2} />}
      trailing={<span>say hello</span>}
      className="h-full"
    >
      <div className="p-4 grid grid-cols-3 sm:grid-cols-6 gap-2">
        {socials.map(({ label, value, href, Icon, accent }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-line/5 hover:border-line/10 hover:bg-line/[0.04] transition-all relative"
          >
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center border border-line/10 group-hover:scale-105 transition-transform"
              style={{
                background: `linear-gradient(135deg, ${accent}22, ${accent}08)`,
                color: accent,
              }}
            >
              <Icon className="w-4 h-4" strokeWidth={2} />
            </div>
            <div className="text-center">
              <div className="text-[11px] font-medium text-body/90 leading-tight">
                {label}
              </div>
              <div className="text-[10px] text-muted truncate max-w-[100px] leading-tight">
                {value}
              </div>
            </div>
          </a>
        ))}
      </div>
    </AppWindow>
  );
};

export default SocialCard;
