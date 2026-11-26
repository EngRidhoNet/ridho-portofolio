import React, { useEffect, useState } from 'react';
import { SubpageNavBar, type RouteView } from './PageNav';
import {
  awardsMarqueeItems,
  awardItems,
  type AwardItem,
} from '../../data/portfolioData';
import { playSoftClick } from '../../utils/sound';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AwardsWinsPageProps {
  onNavigate: (route: RouteView) => void;
}

export const AwardsWinsPage: React.FC<AwardsWinsPageProps> = ({ onNavigate }) => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAward(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="mx-auto max-w-[1024px]">
      <SubpageNavBar
        title="Achievement & Small Wins"
        variant="awards"
        onBack={() => onNavigate({ page: 'home' })}
      />

      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-12 md:gap-4">
        {/* Hero Banner with Marquee + Floating Trophy */}
        <section
          aria-labelledby="awards-title"
          className="bento-card surface-sky group relative col-span-1 min-h-[260px] overflow-hidden p-6 sm:p-10 md:col-span-12 md:min-h-[300px]"
        >
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider opacity-75">
              <span className="size-2.5 rounded-full bg-[#1768e5]" />
              Hackathons · International Papers · Scholarships
            </span>
            <h1
              id="awards-title"
              className="mt-3 text-[clamp(2.35rem,5.5vw,4.35rem)] font-semibold leading-[0.96] text-[#1d2330]"
            >
              Small wins, for me.
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed opacity-80">
              Click any milestone card to open the slide-over drawer with project facts, research context, and verified credentials.
            </p>
          </div>

          {/* Dual row Awards Marquee */}
          <div
            className="relative z-10 mt-8 flex max-w-xl flex-col gap-3 overflow-hidden"
            aria-hidden="true"
          >
            <div className="marquee-mask overflow-hidden">
              <div className="flex w-max animate-scroll-x items-center">
                {[...awardsMarqueeItems, ...awardsMarqueeItems].map((item, idx) => (
                  <span
                    key={`${item.name}-a1-${idx}`}
                    className="mr-8 inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#1d2330]/75"
                  >
                    {item.icon ? (
                      <img src={item.icon} alt="" className="size-5 object-contain" />
                    ) : (
                      <span className="grid size-5 place-items-center rounded border border-current text-[10px]">
                        {item.initial}
                      </span>
                    )}
                    <span>{item.name}</span>
                    <span className="ml-2 size-1.5 rounded-full bg-[#1768e5]" />
                  </span>
                ))}
              </div>
            </div>

            <div className="marquee-mask overflow-hidden opacity-75">
              <div className="flex w-max animate-scroll-x-reverse items-center">
                {[...awardsMarqueeItems, ...awardsMarqueeItems].map((item, idx) => (
                  <span
                    key={`${item.name}-a2-${idx}`}
                    className="mr-8 inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#1d2330]/75"
                  >
                    {item.icon ? (
                      <img src={item.icon} alt="" className="size-5 object-contain" />
                    ) : (
                      <span className="grid size-5 place-items-center rounded border border-current text-[10px]">
                        {item.initial}
                      </span>
                    )}
                    <span>{item.name}</span>
                    <span className="ml-2 size-1.5 rounded-full bg-[#1768e5]" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <img
            src="/assets/trophy.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-2 bottom-[-2rem] z-10 w-[135px] rotate-[8deg] drop-shadow-[0_20px_16px_rgba(29,35,48,0.2)] transition-transform duration-700 ease-out group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:rotate-[4deg] group-hover:scale-105 sm:right-6 sm:w-[210px]"
          />
        </section>

        {/* 2-Column Wins Grid */}
        <section
          aria-label="Awards and achievements"
          className="col-span-1 grid grid-cols-1 gap-3.5 md:col-span-12 md:grid-cols-2"
        >
          {awardItems.map((award) => (
            <button
              key={award.id}
              type="button"
              onClick={() => {
                playSoftClick();
                setSelectedAward(award);
              }}
              className="bento-card bento-card-hover group grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_130px] items-stretch overflow-hidden text-left sm:grid-cols-[minmax(0,1fr)_165px]"
            >
              <div className="flex flex-col justify-between p-5 sm:p-6">
                <div>
                  <span className="font-mono text-[10.5px] font-medium uppercase tracking-wider text-ink-soft">
                    {award.kind} · {award.date}
                  </span>
                  <h3 className="mt-1.5 text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.08] text-ink">
                    {award.title}
                  </h3>
                </div>
                <p className="mt-4 text-xs font-semibold text-ink">{award.placement}</p>
              </div>

              <div
                className="relative min-h-[155px] overflow-hidden"
                style={{ backgroundColor: award.surface }}
              >
                {award.image && (
                  <img
                    src={award.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute right-2.5 bottom-2.5 z-10 grid size-8 place-items-center rounded-full bg-white text-sm font-bold text-brand shadow-md transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-brand group-hover:text-white"
                >
                  &rarr;
                </span>
              </div>
            </button>
          ))}
        </section>
      </div>

      {/* Slide-over Detail Drawer */}
      {selectedAward && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs"
          onClick={() => setSelectedAward(null)}
        >
          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="award-drawer-title"
            onClick={(e) => e.stopPropagation()}
            className="relative h-full w-full max-w-xl overflow-y-auto bg-surface text-ink shadow-2xl"
          >
            {/* Drawer Hero */}
            <div className="relative min-h-[290px] overflow-hidden bg-[#181d26] text-white">
              {selectedAward.image && (
                <div
                  className="absolute inset-0 scale-105 bg-cover bg-center opacity-55 saturate-85"
                  style={{ backgroundImage: `url("${selectedAward.image}")` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#12151c]" />

              <div className="relative z-10 flex justify-end p-4">
                <button
                  type="button"
                  onClick={() => setSelectedAward(null)}
                  aria-label="Close achievement details"
                  className="grid size-9 place-items-center rounded-full border border-white/20 bg-white/15 text-white transition hover:bg-white hover:text-black"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="relative z-10 grid grid-cols-[90px_minmax(0,1fr)] items-end gap-4 px-6 pb-6 pt-6 sm:grid-cols-[116px_minmax(0,1fr)] sm:px-8">
                <div className="grid aspect-square place-items-center overflow-hidden rounded-2xl bg-white p-4 text-[#1d2330] shadow-xl">
                  {selectedAward.icon ? (
                    <img
                      src={selectedAward.icon}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="font-serif-editorial text-4xl font-semibold">
                      {selectedAward.project.charAt(0)}
                    </span>
                  )}
                </div>

                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-white/75">
                    {selectedAward.kind}
                  </span>
                  <h2
                    id="award-drawer-title"
                    className="font-serif-editorial mt-1 text-2xl font-medium leading-tight sm:text-3xl"
                  >
                    {selectedAward.title}
                  </h2>
                  <p className="mt-1.5 text-xs font-semibold text-amber-300">
                    {selectedAward.placement}
                  </p>
                  <time className="mt-1 block font-mono text-[11px] uppercase text-white/65">
                    {selectedAward.date}
                  </time>
                </div>
              </div>
            </div>

            {/* Drawer Body */}
            <div className="p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-ink-soft">
                {selectedAward.summary}
              </p>

              <dl className="mt-5 grid grid-cols-1 gap-4 border-y border-line-bento py-4 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[10.5px] uppercase tracking-wider text-ink-soft">
                    Project / Scope
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">
                    {selectedAward.project}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10.5px] uppercase tracking-wider text-ink-soft">
                    Organizer / Institution
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">
                    {selectedAward.organizer}
                  </dd>
                </div>
              </dl>

              {/* Key Highlights */}
              <div className="mt-5">
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  Key Highlights &amp; Impact
                </h3>
                <ul className="mt-2.5 space-y-2">
                  {selectedAward.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Team / Credentials */}
              <div className="mt-6">
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  {selectedAward.teamName}
                </h3>
                <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {selectedAward.team.map((member) => (
                    <li
                      key={member.name}
                      className="rounded-xl border border-line-bento bg-page p-3 text-xs"
                    >
                      <strong className="block font-semibold text-ink">{member.name}</strong>
                      {member.role && (
                        <span className="mt-0.5 block text-ink-soft">{member.role}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {selectedAward.links.map((link) => {
                  const isInternalWork = link.url === '#work';
                  const isInternalWriting = link.url === '#writing';
                  if (isInternalWork || isInternalWriting) {
                    return (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => {
                          setSelectedAward(null);
                          onNavigate({
                            page: isInternalWork ? 'work' : 'writing',
                          });
                        }}
                        className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="size-3.5" />
                      </button>
                    );
                  }
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-line-bento bg-page px-4 py-2 text-xs font-semibold text-ink transition hover:border-brand hover:text-brand"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};
