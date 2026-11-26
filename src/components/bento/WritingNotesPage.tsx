import React, { useState } from 'react';
import { SubpageNavBar, type RouteView } from './PageNav';
import { writingPosts, type WritingPost } from '../../data/portfolioData';
import { playSoftClick } from '../../utils/sound';
import { X, BookOpen, Clock, Tag } from 'lucide-react';

interface WritingNotesPageProps {
  onNavigate: (route: RouteView) => void;
}

const scribbleWords = [
  'Systems Architecture',
  'Computer Vision',
  'Golang Microservices',
  'Jurnal SISFO',
  'Clean Code',
  'TensorFlow & CNN',
  'Agile Sprints',
  'FastAPI & Redis',
];

export const WritingNotesPage: React.FC<WritingNotesPageProps> = ({ onNavigate }) => {
  const [promptActive, setPromptActive] = useState(false);
  const [selectedPost, setSelectedPost] = useState<WritingPost | null>(null);

  const layoutColClasses: Record<WritingPost['layout'], string> = {
    feature: 'md:col-span-7 md:row-span-2 min-h-[340px] md:min-h-[430px]',
    tall: 'md:col-span-5 md:row-span-2 min-h-[340px] md:min-h-[430px]',
    wide: 'md:col-span-8 min-h-[280px]',
    compact: 'md:col-span-4 min-h-[280px]',
    banner: 'md:col-span-12 min-h-[290px]',
    standard: 'md:col-span-6 min-h-[280px]',
  };

  return (
    <div className="mx-auto max-w-[1024px]">
      <SubpageNavBar
        title="Writing & Research Notes"
        variant="writing"
        onBack={() => onNavigate({ page: 'home' })}
      />

      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-12 md:gap-4">
        {/* Hero Banner with Scribbles Marquee + Floating Notebook */}
        <section
          aria-labelledby="writing-title"
          className="bento-card group relative col-span-1 flex min-h-[240px] flex-col justify-between overflow-hidden p-6 sm:p-10 md:col-span-12 md:min-h-[285px]"
        >
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
              <span className="size-2.5 rounded-full bg-sun" />
              Technical Essays · Research Papers · Field Notes
            </span>
            <h1
              id="writing-title"
              className="mt-3 text-[clamp(2.4rem,5.6vw,4.4rem)] font-semibold leading-[0.96] text-ink"
            >
              Yes, <span>yapping.</span>
            </h1>
          </div>

          {/* Scribble Marquee */}
          <div
            className="relative z-10 mt-6 flex max-w-2xl flex-col gap-3 overflow-hidden opacity-75"
            aria-hidden="true"
          >
            <div className="marquee-mask overflow-hidden">
              <div className="flex w-max animate-scroll-x items-center">
                {[...scribbleWords, ...scribbleWords].map((word, idx) => (
                  <span
                    key={`sc-1-${idx}`}
                    className={`font-script-hand mr-9 inline-block text-xl sm:text-2xl ${
                      idx % 2 === 0 ? 'text-ink-soft -rotate-2' : 'text-amber-500 rotate-2'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute right-4 bottom-[-4.5rem] z-10 w-[135px] translate-x-[4%] translate-y-[4%] rotate-[8deg] transition-transform duration-700 ease-out group-hover:-translate-x-10 group-hover:-translate-y-2 group-hover:rotate-[3deg] group-hover:scale-105 sm:w-[195px]"
            aria-hidden="true"
          >
            <img
              src="/assets/notebook.svg"
              alt=""
              className="h-auto w-full drop-shadow-[0_20px_16px_rgba(29,35,48,0.18)]"
            />
          </div>
        </section>

        {/* Interactive Stacked Paper Writing Prompt Card */}
        <section
          aria-label="Writing prompt"
          onMouseEnter={() => setPromptActive(true)}
          onMouseLeave={() => setPromptActive(false)}
          className="paper-stack-card surface-sun relative col-span-1 min-h-[215px] overflow-hidden rounded-[22px] border border-black/10 shadow-sm md:col-span-12 md:min-h-[245px]"
        >
          <div
            className="paper-back-far pointer-events-none absolute top-2.5 right-[17%] bottom-[-0.65rem] left-[-1%] -rotate-6 bg-[#eee9ce] transition-transform duration-500"
            aria-hidden="true"
          />
          <div
            className="paper-back pointer-events-none absolute top-4 right-[24%] bottom-[-1.2rem] left-[3%] -rotate-4 bg-[#eee9ce] transition-transform duration-500"
            aria-hidden="true"
          />
          <div
            className="paper-middle pointer-events-none absolute top-1 right-[5%] bottom-[-1.1rem] left-[29%] rotate-2 bg-[#eee9ce] transition-transform duration-500"
            aria-hidden="true"
          />
          <div
            className="paper-near pointer-events-none absolute top-7 right-[2%] bottom-[-4rem] left-[16%] -rotate-1 bg-[#eee9ce] transition-transform duration-500"
            aria-hidden="true"
          />

          <div className=" absolute top-12 right-0 bottom-0 left-[8%] z-10 overflow-hidden rounded-tl-[18px] border border-black/15 bg-white shadow-xl sm:top-14 sm:left-[10%]">
            <button
              type="button"
              onClick={() => {
                playSoftClick();
                setPromptActive((prev) => !prev);
              }}
              className="flex h-full w-full cursor-pointer items-center p-6 text-left text-[#1d2330] sm:p-10"
            >
              <span className="font-serif-editorial text-[clamp(1.3rem,3.4vw,2.15rem)] leading-[1.12]">
                Sometimes, I just want to share my engineering approach about{' '}
                <span className="inline-block font-semibold text-brand">
                  {promptActive ? 'AI, architecture & shipping.' : '...'}
                </span>
                <span
                  aria-hidden="true"
                  className="animate-cursor-blink ml-1 inline-block h-[1.05em] w-[2px] translate-y-1 bg-current"
                />
              </span>
            </button>
          </div>
        </section>

        {/* Bento Editorial Post Grid */}
        <div className="col-span-1 grid grid-cols-1 gap-4 md:col-span-12 md:grid-cols-12">
          {writingPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => {
                playSoftClick();
                setSelectedPost(post);
              }}
              className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[20px] bg-[#1d2330] p-6 text-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 ${
                layoutColClasses[post.layout]
              }`}
            >
              {/* Background Image + Gradient Shade */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-95"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-[#141923]/25 via-[#141923]/55 to-[#141923]/95" />
              </div>

              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between gap-2 font-mono text-[10.5px] uppercase tracking-wider text-white/80">
                <span className="grid size-7 place-items-center rounded-full border border-white/30 text-white">
                  {post.index}
                </span>
                <span>
                  {post.category} · {post.date}
                </span>
              </div>

              {/* Title & Excerpt */}
              <div className="relative z-10 mt-auto pt-8">
                <h2 className="max-w-[22ch] text-[clamp(1.25rem,2.3vw,1.95rem)] font-semibold leading-[1.08] text-white transition-transform duration-300 group-hover:-translate-y-1">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/75">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-3 font-mono text-[10.5px] uppercase tracking-wider text-white/80">
                  <span>Read engineering note · {post.readTime}</span>
                  <span className="grid size-8 place-items-center rounded-full border border-white/30 text-sm text-white transition duration-300 group-hover:-rotate-45 group-hover:bg-white group-hover:text-brand">
                    &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Drawer / Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs"
          onClick={() => setSelectedPost(null)}
        >
          <article
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[22px] border border-line-bento bg-surface text-ink shadow-2xl"
          >
            <div className="relative h-56 overflow-hidden bg-[#1d2330] text-white">
              {selectedPost.image && (
                <img
                  src={selectedPost.image}
                  alt=""
                  className="h-full w-full object-cover opacity-55"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12161f] via-[#12161f]/40 to-transparent" />

              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                aria-label="Close article"
                className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-xs transition hover:bg-white hover:text-black"
              >
                <X className="size-4" />
              </button>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-amber-300">
                  <span className="inline-flex items-center gap-1">
                    <BookOpen className="size-3.5" />
                    {selectedPost.category}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 text-white/75">
                    <Clock className="size-3.5" />
                    {selectedPost.readTime}
                  </span>
                  <span>·</span>
                  <span className="text-white/75">{selectedPost.date}</span>
                </div>
                <h2 className="font-serif-editorial mt-2 text-2xl font-medium leading-tight sm:text-3xl">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            <div className="space-y-4 p-6 sm:p-8">
              {selectedPost.content.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink sm:text-[15px]">
                  {paragraph}
                </p>
              ))}

              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line-bento pt-5">
                <Tag className="size-3.5 text-ink-soft" />
                {selectedPost.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line-bento bg-page px-3 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};
