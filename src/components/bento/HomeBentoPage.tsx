import React, { useEffect, useState } from 'react';
import type { RouteView } from './PageNav';
import { galleryHighlights } from '../../data/portfolioData';
import { playPianoNote, playSoftClick } from '../../utils/sound';
import { Github, Linkedin, Mail, FileText, ArrowUpRight, Sparkles } from 'lucide-react';

interface HomeBentoPageProps {
  onNavigate: (route: RouteView) => void;
}

interface FloatingNote {
  id: number;
  glyph: string;
  right: string;
  top: string;
  delay: string;
  duration: string;
  drift: string;
  rotation: string;
}

export const HomeBentoPage: React.FC<HomeBentoPageProps> = ({ onNavigate }) => {
  const [notes, setNotes] = useState<FloatingNote[]>([]);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [isGalleryFading, setIsGalleryFading] = useState(false);
  const [lastPlayedNote, setLastPlayedNote] = useState<string | null>(null);
  const [isPlayingNote, setIsPlayingNote] = useState(false);

  const spawnFloatingGlyphs = () => {
    const glyphs = ['✦', '⚡', '♪', '⌘'];
    const spawned: FloatingNote[] = glyphs.map((glyph, idx) => ({
      id: Date.now() + idx,
      glyph,
      right: `${10 + Math.random() * 28}%`,
      top: `${14 + Math.random() * 62}%`,
      delay: `${idx * 85}ms`,
      duration: `${1200 + Math.random() * 400}ms`,
      drift: `${-8 + Math.random() * 20}px`,
      rotation: `${-14 + Math.random() * 28}deg`,
    }));
    setNotes(spawned);
  };

  useEffect(() => {
    if (isGalleryPaused) return;
    const timer = window.setInterval(() => {
      changeSlide((galleryIndex + 1) % galleryHighlights.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [galleryIndex, isGalleryPaused]);

  const changeSlide = (nextIdx: number) => {
    const normalized = (nextIdx + galleryHighlights.length) % galleryHighlights.length;
    setIsGalleryFading(true);
    window.setTimeout(() => {
      setGalleryIndex(normalized);
      setIsGalleryFading(false);
    }, 180);
  };

  const handlePlayPiano = () => {
    const note = playPianoNote();
    setLastPlayedNote(note);
    setIsPlayingNote(true);
    window.setTimeout(() => setIsPlayingNote(false), 700);
  };

  const currentSlide = galleryHighlights[galleryIndex];

  return (
    <section className="mx-auto max-w-[1024px]" aria-labelledby="intro-title">
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-12 md:gap-4 xl:gap-[1.15rem]">
        {/* Tile 1: Intro Hero Card (col-span-7) */}
        <article
          onMouseEnter={spawnFloatingGlyphs}
          onClick={() => {
            playSoftClick();
            onNavigate({ page: 'about' });
          }}
          className="bento-card group relative col-span-1 h-[352px] max-h-[352px] min-w-0 cursor-pointer overflow-hidden md:col-span-7"
        >
          <div className="relative z-10 flex h-full w-[64%] flex-col justify-between p-6 sm:p-8 xl:p-10">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-line-bento bg-page/80 px-2.5 py-1 font-mono text-[10.5px] font-medium text-ink-soft backdrop-blur-xs">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>Available for projects</span>
            </div>

            <h1
              id="intro-title"
              className="relative z-10 max-w-[10.5ch] text-[clamp(1.95rem,3.5vw,3.35rem)] font-semibold leading-[0.99] text-ink"
            >
              I’m{' '}
              <span className="font-script-hand relative inline-block whitespace-nowrap text-[1.12em] font-normal leading-[0.82]">
                Ridho
                <svg
                  className="pointer-events-none absolute top-full left-0 mt-[0.12em] h-[0.34em] w-full text-brand"
                  viewBox="0 0 170 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C32.8203 5.34032 108.769 -0.881146 166 3.51047"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.9"
                  />
                </svg>
              </span>
              .
              <span className="mt-[0.62em] block text-[0.44em] font-medium leading-[1.14] text-ink-soft">
                Full Stack &amp; AI Engineer
                <br />
                building from idea to production.
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 text-[0.76rem] font-semibold text-ink">
              <span>About my story</span>
              <b className="grid size-6 place-items-center rounded-full bg-brand/10 text-xs text-brand transition duration-300 group-hover:translate-x-1 group-hover:bg-brand group-hover:text-white">
                →
              </b>
            </div>
          </div>

          {/* Right portrait image with soft gradient blend */}
          <figure className=" absolute inset-y-0 right-0 m-0 w-[52%] overflow-hidden bg-[#d7b8a4]">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-20"
              style={{
                background:
                  'linear-gradient(90deg, var(--color-surface) 0%, rgba(255,255,255,0) 100%)',
              }}
            />
            <img
              className="h-full w-full object-cover object-center saturate-95 transition-transform duration-700 ease-out group-hover:scale-105"
              src="/assets/profile.jpeg"
              alt="Ridho Aulia Rahman"
            />
            {/* Floating interactive glyphs on hover */}
            <div className="pointer-events-none absolute inset-0 z-[4]" aria-hidden="true">
              {notes.map((n) => (
                <span
                  key={n.id}
                  className="intro-floating-glyph"
                  style={
                    {
                      right: n.right,
                      top: n.top,
                      '--note-delay': n.delay,
                      '--note-dur': n.duration,
                      '--note-drift': n.drift,
                      '--note-rot': n.rotation,
                    } as React.CSSProperties
                  }
                >
                  {n.glyph}
                </span>
              ))}
            </div>
          </figure>
        </article>

        {/* Tile 2: Spotify Embed Card (col-span-5) */}
        <article className="bento-card relative col-span-1 h-[352px] max-h-[352px] min-w-0 overflow-hidden md:col-span-5">
          <iframe
            title="Spotify Favorite Coding Track"
            style={{ borderRadius: '18px' }}
            src="https://open.spotify.com/embed/track/3CAjTAN46i7Y8RuWgLP11l?utm_source=generator&si=6829d2db6d744f3d"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </article>

        {/* Tile 3: Work & Projects Card (col-span-5, mint) */}
        <button
          type="button"
          onClick={() => {
            playSoftClick();
            onNavigate({ page: 'work' });
          }}
          className="bento-card bento-card-hover surface-mint group relative col-span-1 grid min-h-[235px] min-w-0 cursor-pointer overflow-hidden p-6 text-left sm:p-8 md:col-span-5 md:min-h-[225px] md:p-6"
        >
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span className="font-mono text-[10.5px] font-medium uppercase tracking-wider opacity-70">
                01 / Shipped systems
              </span>
              <h2 className="mt-1.5 max-w-[8ch] text-[clamp(1.6rem,2.5vw,2.35rem)] font-medium leading-[1.02]">
                Work &amp;
                <br />
                projects.
              </h2>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-[0.76rem] font-semibold">
              See selected work{' '}
              <b className="grid size-7 place-items-center rounded-full bg-white text-base text-brand transition duration-500 ease-out group-hover:translate-x-1 group-hover:bg-brand group-hover:text-white">
                →
              </b>
            </span>
          </div>
          <div
            className="pointer-events-none absolute right-[-8%] bottom-[-8%] w-[52%] translate-x-6 translate-y-[32%] -rotate-[20deg] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:-translate-y-4 group-hover:-rotate-[4deg] group-hover:scale-110"
            aria-hidden="true"
          >
            <img
              className="block h-auto w-full drop-shadow-[0_18px_16px_rgba(29,35,48,0.2)]"
              src="/assets/macbook.svg"
              alt=""
            />
          </div>
        </button>

        {/* Tile 4: Small Wins / Awards Card (col-span-4, sky blue) */}
        <button
          type="button"
          onClick={() => {
            playSoftClick();
            onNavigate({ page: 'awards' });
          }}
          className="bento-card bento-card-hover surface-sky group relative col-span-1 min-h-[235px] min-w-0 cursor-pointer overflow-hidden p-6 text-left sm:p-8 md:col-span-4 md:min-h-[225px] md:p-6"
        >
          <div className="relative z-10 flex h-full flex-col justify-between md:max-w-[65%]">
            <div>
              <span className="font-mono text-[10.5px] font-medium uppercase tracking-wider opacity-70">
                02 / Milestones
              </span>
              <h2 className="mt-1.5 max-w-[10ch] text-[clamp(1.5rem,2.4vw,2.3rem)] font-medium leading-[1.04]">
                Small wins.
              </h2>
              <p className="mt-1.5 text-xs font-medium opacity-75">
                HackFest Top 10 · Intl. Paper 1st Runner Up
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-[0.76rem] font-semibold">
              See the wins{' '}
              <b className="grid size-7 place-items-center rounded-full bg-white text-base text-brand transition duration-500 ease-out group-hover:translate-x-1 group-hover:bg-brand group-hover:text-white">
                →
              </b>
            </span>
          </div>
          <img
            className="pointer-events-none absolute right-[-4%] bottom-[-1.75rem] w-[42%] rotate-[8deg] drop-shadow-[0_18px_16px_rgba(29,35,48,0.2)] transition-transform duration-500 ease-out group-hover:-translate-x-4 group-hover:-translate-y-6 group-hover:rotate-[4deg] group-hover:scale-110"
            src="/assets/trophy.png"
            alt=""
          />
        </button>

        {/* Tile 5: Writing / Research Notes Card (col-span-3, sun yellow) */}
        <button
          type="button"
          onClick={() => {
            playSoftClick();
            onNavigate({ page: 'writing' });
          }}
          className="bento-card bento-card-hover surface-sun group relative col-span-1 flex min-h-[235px] min-w-0 cursor-pointer flex-col justify-between overflow-hidden p-6 text-left sm:p-8 md:col-span-3 md:min-h-[225px] md:p-6"
        >
          <div className="relative z-10">
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-wider opacity-75">
              03 / Notes
            </span>
            <h2 className="mt-1.5 max-w-full text-[clamp(1.55rem,2.4vw,2.25rem)] font-medium leading-[1.02]">
              Yes, yapping.
            </h2>
          </div>
          <span className="relative z-10 inline-flex items-center gap-2 self-start text-[0.76rem] font-semibold">
            Read notes{' '}
            <b className="grid size-7 place-items-center rounded-full bg-white text-base text-brand transition duration-500 ease-out group-hover:translate-x-1 group-hover:bg-brand group-hover:text-white">
              →
            </b>
          </span>
          <img
            className="pointer-events-none absolute right-[-9%] bottom-[-52%] w-[48%] rotate-[10deg] drop-shadow-[0_18px_16px_rgba(29,35,48,0.22)] transition duration-500 ease-out group-hover:-translate-x-10 group-hover:-translate-y-9 group-hover:rotate-[5deg] group-hover:scale-90 md:right-[-11%] md:bottom-[-55%] md:w-[52%]"
            src="/assets/notebook.svg"
            alt=""
          />
        </button>

        {/* Tile 6: Craft & Interactive Synth Piano Tile (col-span-8, pink) */}
        <article className="bento-card surface-pink group relative col-span-1 min-h-[240px] min-w-0 overflow-hidden p-6 sm:p-8 md:col-span-8 md:min-h-[225px]">
          <div className="relative z-10 max-w-[60%]">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider opacity-75">
              <Sparkles className="size-3" />
              Founder @ Future AI Indonesia · Educator
            </span>
            <h2 className="mt-2 max-w-[13ch] text-[clamp(1.45rem,2.35vw,2.25rem)] font-medium leading-[1.05]">
              Architecture is the score. Clean code is harmony.
            </h2>
            <p className="mt-2 hidden text-xs leading-relaxed opacity-80 sm:block">
              Leading 500+ AI community members in Malang &amp; teaching 100+ developers at Ruangguru.
            </p>
          </div>

          <div
            className="pointer-events-none absolute right-[-4%] bottom-[8%] h-[60%] w-[58%] -rotate-[5deg] transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-1.5 group-hover:rotate-[2deg] md:right-[3%] md:w-[41%]"
            aria-hidden="true"
          >
            <img
              className="h-auto w-full drop-shadow-[12px_15px_0_rgba(29,35,48,0.1)]"
              src="/assets/piano.svg"
              alt=""
            />
          </div>

          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 sm:bottom-6 sm:left-6">
            <button
              type="button"
              onClick={handlePlayPiano}
              aria-pressed={isPlayingNote}
              className={`inline-flex items-center gap-2 rounded-full border border-black/15 px-3.5 py-2 text-[0.7rem] font-semibold transition active:scale-95 ${
                isPlayingNote
                  ? 'bg-[#1d2330] text-white'
                  : 'bg-white/80 text-[#1d2330] hover:bg-white'
              }`}
            >
              <span className={isPlayingNote ? 'animate-bounce' : ''} aria-hidden="true">
                ♪
              </span>
              <span>{lastPlayedNote ? `Sounding (${lastPlayedNote})` : 'Play a note'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playSoftClick();
                onNavigate({ page: 'about' });
              }}
              className="rounded-full bg-white/60 px-3 py-2 text-[0.7rem] font-semibold text-[#1d2330] transition hover:bg-white"
            >
              Philosophy →
            </button>
          </div>
        </article>

        {/* Tile 7: Interactive Highlights Gallery Carousel (col-span-4) */}
        <article
          onMouseEnter={() => setIsGalleryPaused(true)}
          onMouseLeave={() => setIsGalleryPaused(false)}
          className="bento-card group relative col-span-1 min-h-[240px] min-w-0 overflow-hidden bg-[#e9eef2] md:col-span-4 md:min-h-[225px]"
        >
          <div className="relative flex h-full min-h-[225px] w-full items-center justify-center overflow-hidden">
            <img
              className={`h-full w-full object-cover transition-all duration-500 ${
                isGalleryFading ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
              }`}
              src={currentSlide.image}
              alt={currentSlide.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Slide Caption */}
            <div className="absolute inset-x-0 bottom-7 z-10 p-4 text-white">
              <span className="inline-block rounded-full bg-white/20 px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider backdrop-blur-xs">
                {currentSlide.tag} · {currentSlide.date}
              </span>
              <h3 className="mt-1 text-sm font-semibold leading-snug">{currentSlide.title}</h3>
              <p className="text-[11px] text-white/80">{currentSlide.subtitle}</p>
            </div>
          </div>

          {/* Prev / Next Controls */}
          <div
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-label="Gallery navigation"
          >
            <button
              type="button"
              onClick={() => {
                playSoftClick();
                changeSlide(galleryIndex - 1);
              }}
              aria-label="Previous highlight"
              className="pointer-events-auto grid size-7 place-items-center rounded-full bg-white text-sm font-bold text-brand shadow-md transition hover:bg-brand hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => {
                playSoftClick();
                changeSlide(galleryIndex + 1);
              }}
              aria-label="Next highlight"
              className="pointer-events-auto grid size-7 place-items-center rounded-full bg-white text-sm font-bold text-brand shadow-md transition hover:bg-brand hover:text-white"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="absolute right-0 bottom-2.5 left-0 z-20 flex justify-center gap-1.5">
            {galleryHighlights.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  playSoftClick();
                  changeSlide(idx);
                }}
                aria-label={`Show highlight ${idx + 1}`}
                className={`size-1.5 rounded-full transition-all duration-300 ${
                  idx === galleryIndex ? 'w-4 bg-white' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </article>
      </div>

      {/* Bottom Row: GitHub Streak Card + Direct Contact Bento Card */}
      <section className="mt-4 grid grid-cols-1 gap-3.5 md:mt-5 md:grid-cols-12 md:gap-4" aria-label="GitHub and Contact">
        {/* GitHub Streak Card */}
        <div className="bento-card surface-ink group col-span-1 p-5 text-white sm:p-7 md:col-span-6">
          <div className="relative z-10 flex items-start justify-between gap-4">
            <a
              className="inline-flex items-center gap-3 text-white"
              href="https://github.com/EngRidhoNet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="grid size-8 place-items-center rounded-full bg-white/10">
                <Github className="size-4 text-white" />
              </span>
              <div>
                <span className="block text-sm font-semibold">@EngRidhoNet</span>
                <span className="block font-mono text-[10.5px] text-white/60">
                  Full Stack · AI/ML · Microservices
                </span>
              </div>
            </a>
            <a
              className="grid size-8 place-items-center rounded-full bg-white/15 text-base text-white transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-brand"
              href="https://github.com/EngRidhoNet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Ridho on GitHub"
            >
              ↗
            </a>
          </div>

          <div className="relative z-10 my-4 flex min-h-[125px] w-full items-center justify-center overflow-hidden rounded-xl bg-[#0d1117] p-2">
            <a
              className="block w-full"
              href="https://github.com/EngRidhoNet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open EngRidhoNet GitHub streak stats"
            >
              <img
                className="block w-full transition group-hover:brightness-110"
                src="https://github-readme-streak-stats.herokuapp.com/?user=EngRidhoNet&theme=github-dark-blue&hide_border=true&background=0d1117&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff"
                alt="EngRidhoNet GitHub Streak Stats"
              />
            </a>
          </div>

          <div className="relative z-10 flex items-baseline justify-between">
            <h2 className="text-[clamp(1.35rem,2.1vw,1.9rem)] font-medium leading-[1.04]">
              Code on streak.
            </h2>
            <span className="font-mono text-[11px] text-sky-400">20+ shipped repos</span>
          </div>
        </div>

        {/* Quick Connect & Stats Card */}
        <div className="bento-card col-span-1 flex flex-col justify-between p-5 sm:p-7 md:col-span-6">
          <div>
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-wider text-ink-soft">
              Direct channels · Malang, ID
            </span>
            <h2 className="mt-1.5 text-[clamp(1.4rem,2.2vw,2rem)] font-semibold leading-tight text-ink">
              Let’s build something meaningful together.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              Open for full-stack engineering, applied AI/ML collaborations, research, and product consulting.
            </p>
          </div>

          <div className="my-4 grid grid-cols-3 gap-2.5">
            <div className="rounded-xl border border-line-bento bg-page p-3">
              <div className="text-lg font-bold text-ink">3+ yrs</div>
              <div className="font-mono text-[10px] uppercase text-ink-soft">Experience</div>
            </div>
            <div className="rounded-xl border border-line-bento bg-page p-3">
              <div className="text-lg font-bold text-ink">3.87</div>
              <div className="font-mono text-[10px] uppercase text-ink-soft">GPA · Scholar</div>
            </div>
            <div className="rounded-xl border border-line-bento bg-page p-3">
              <div className="text-lg font-bold text-ink">500+</div>
              <div className="font-mono text-[10px] uppercase text-ink-soft">AI Community</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <a
              href="mailto:ridho.aulia7324@gmail.com"
              onClick={() => playSoftClick()}
              className="group flex items-center justify-between rounded-xl border border-line-bento bg-page px-3 py-2.5 text-xs font-semibold text-ink transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <span className="inline-flex items-center gap-1.5">
                <Mail className="size-3.5" />
                Email
              </span>
              <ArrowUpRight className="size-3 opacity-60 group-hover:opacity-100" />
            </a>
            <a
              href="https://linkedin.com/in/ridho-aulia-rahman"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSoftClick()}
              className="group flex items-center justify-between rounded-xl border border-line-bento bg-page px-3 py-2.5 text-xs font-semibold text-ink transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <span className="inline-flex items-center gap-1.5">
                <Linkedin className="size-3.5" />
                LinkedIn
              </span>
              <ArrowUpRight className="size-3 opacity-60 group-hover:opacity-100" />
            </a>
            <a
              href="https://github.com/EngRidhoNet"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSoftClick()}
              className="group flex items-center justify-between rounded-xl border border-line-bento bg-page px-3 py-2.5 text-xs font-semibold text-ink transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <span className="inline-flex items-center gap-1.5">
                <Github className="size-3.5" />
                GitHub
              </span>
              <ArrowUpRight className="size-3 opacity-60 group-hover:opacity-100" />
            </a>
            <a
              href="/ridho-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSoftClick()}
              className="group flex items-center justify-between rounded-xl border border-line-bento bg-page px-3 py-2.5 text-xs font-semibold text-ink transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <span className="inline-flex items-center gap-1.5">
                <FileText className="size-3.5" />
                Resume
              </span>
              <ArrowUpRight className="size-3 opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Tagline */}
      <footer className="flex flex-wrap items-center justify-between gap-2 px-1 pt-5 text-[0.72rem] leading-[1.35] tracking-[0.015em] text-ink-soft sm:pt-7">
        <span>Curious by default. Precise on purpose. Built in Malang, Indonesia.</span>
        <span className="font-mono text-[0.65rem]">© {new Date().getFullYear()} Ridho Aulia Rahman</span>
      </footer>
    </section>
  );
};
