import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import AppWindow from './AppWindow';

const NowPlayingCard: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <AppWindow
      appName="Now"
      appIcon={<Clock className="w-4 h-4" strokeWidth={2} />}
      trailing={<span className="font-mono">{time} WIB</span>}
      className="h-full"
    >
      <div className="p-5 flex flex-col gap-3 h-full">
        <Row label="Currently" value="Building AI tooling for small teams" />
        <Row label="Learning" value="Rust · Transformers · System design" />
        <Row label="Listening" value="Lo-fi · Tame Impala · Masego" />
        <Row label="Reading" value="Designing Data-Intensive Applications" />
        <div className="wave-divider text-center mt-auto opacity-50">~ ~ ~</div>
        <p className="text-[12px] text-muted italic">
          &ldquo;Slow is smooth, smooth is fast.&rdquo;
        </p>
      </div>
    </AppWindow>
  );
};

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-baseline gap-3">
    <span className="text-[10.5px] uppercase tracking-wider text-muted-2 w-20 shrink-0">
      {label}
    </span>
    <span className="text-[12.5px] text-body/85 truncate">{value}</span>
  </div>
);

export default NowPlayingCard;
