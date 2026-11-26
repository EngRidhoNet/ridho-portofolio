import React from 'react';
import { SubpageNavBar, type RouteView } from './PageNav';
import { projectCaseStudies } from '../../data/portfolioData';
import { playSoftClick } from '../../utils/sound';
import { Award, ExternalLink } from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (route: RouteView) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onNavigate }) => {
  const project =
    projectCaseStudies.find((p) => p.slug === slug) || projectCaseStudies[0];
  const nextProject =
    projectCaseStudies.find((p) => p.slug === project.nextSlug) || projectCaseStudies[0];

  return (
    <div className="mx-auto max-w-[1024px]">
      <SubpageNavBar
        title="Project details"
        backLabel="Back to Work"
        variant="work"
        onBack={() => onNavigate({ page: 'work' })}
      />

      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-12 md:gap-4">
        {/* Hero Panel */}
        <section
          className="bento-card col-span-1 p-6 sm:p-10 md:col-span-12"
          style={{ backgroundColor: project.surface, color: '#1d2330' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider opacity-80">
              <span className="size-2.5 rounded-full bg-[#1768e5]" />
              {project.eyebrow}
            </span>
            {project.awardBadge && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1d2330] px-3 py-1 font-mono text-[11px] font-medium text-amber-300">
                <Award className="size-3.5" />
                {project.awardBadge}
              </span>
            )}
          </div>

          <h1 className="mt-4 max-w-2xl text-[clamp(2.3rem,5.5vw,4.3rem)] font-semibold leading-[0.96]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-85">
            {project.summary}
          </p>

          {/* 4-column Metadata Grid */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-xl bg-white/75 p-4">
              <span className="block font-mono text-[10.5px] uppercase tracking-wider opacity-70">
                Context
              </span>
              <span className="mt-1 block text-xs font-semibold">{project.context}</span>
            </div>
            <div className="rounded-xl bg-white/55 p-4">
              <span className="block font-mono text-[10.5px] uppercase tracking-wider opacity-70">
                Role
              </span>
              <span className="mt-1 block text-xs font-semibold">{project.role}</span>
            </div>
            <div className="rounded-xl bg-white/75 p-4">
              <span className="block font-mono text-[10.5px] uppercase tracking-wider opacity-70">
                Period
              </span>
              <span className="mt-1 block text-xs font-semibold">{project.period}</span>
            </div>
            <div className="rounded-xl bg-white/55 p-4">
              <span className="block font-mono text-[10.5px] uppercase tracking-wider opacity-70">
                Artifact Link
              </span>
              {project.linkUrl ? (
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#1768e5] hover:underline"
                >
                  <span>{project.linkLabel}</span>
                  <ExternalLink className="size-3" />
                </a>
              ) : (
                <span className="mt-1 block text-xs font-semibold">{project.linkLabel}</span>
              )}
            </div>
          </div>
        </section>

        {/* Visual Artifact Mark (col-span-7) */}
        <figure
          className="bento-card col-span-1 flex min-h-[320px] flex-col justify-between p-5 sm:p-7 md:col-span-7"
          style={{ backgroundColor: project.surface, color: '#1d2330' }}
        >
          <div className="relative flex min-h-[250px] flex-1 -rotate-1 flex-col justify-between overflow-hidden rounded-2xl border-[6px] border-[#1d2330] bg-white/75 p-6 shadow-[0_14px_0_rgba(29,35,48,0.12)]">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
            )}
            <span className="relative z-10 font-mono text-xs font-semibold uppercase tracking-widest opacity-70">
              {project.initials} · {project.number}
            </span>
            <strong className="relative z-10 max-w-[9ch] text-[clamp(2.1rem,5vw,3.9rem)] font-semibold leading-[0.95] tracking-tight">
              {project.title}
            </strong>
            <span className="relative z-10 font-mono text-xs font-medium opacity-75">
              {project.category}
            </span>
          </div>
          <figcaption className="mt-3 font-mono text-[10.5px] uppercase tracking-wider opacity-75">
            Project artifact / engineering case study
          </figcaption>
        </figure>

        {/* Overview (col-span-5) */}
        <article className="bento-card col-span-1 flex flex-col justify-between p-6 sm:p-8 md:col-span-5">
          <div>
            <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
              Overview
            </span>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink">
              The shape of the project.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.overview}</p>
          </div>
          <div className="mt-6 border-t border-line-bento pt-4 font-mono text-[11px] text-ink-soft">
            Category: {project.category}
          </div>
        </article>

        {/* Problem (col-span-7, sky blue) */}
        <article className="bento-card surface-sky col-span-1 p-6 sm:p-8 md:col-span-7">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider opacity-75">
            Problem
          </span>
          <h2 className="mt-3 text-2xl font-semibold leading-tight">
            The problem worth solving.
          </h2>
          <p className="mt-4 text-sm leading-relaxed opacity-85">{project.problem}</p>
        </article>

        {/* Contribution (col-span-5, pink) */}
        <article className="bento-card surface-pink col-span-1 p-6 sm:p-8 md:col-span-5">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider opacity-75">
            My role
          </span>
          <h2 className="mt-3 text-2xl font-semibold leading-tight">Where I contributed.</h2>
          <p className="mt-4 text-sm leading-relaxed opacity-85">{project.contribution}</p>
        </article>

        {/* User Flow (col-span-12) */}
        <article className="bento-card col-span-1 p-6 sm:p-8 md:col-span-12">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
            User &amp; Data Flow
          </span>
          <h2 className="mt-2 text-2xl font-semibold leading-tight text-ink">
            How the product moves.
          </h2>
          <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {project.flow.map((step, idx) => (
              <li
                key={step.label}
                className="rounded-2xl border border-line-bento bg-page p-5"
              >
                <span className="font-mono text-xs font-bold text-brand">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <strong className="mt-2 block text-base font-semibold text-ink">
                  {step.label}
                </strong>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{step.detail}</p>
              </li>
            ))}
          </ol>
        </article>

        {/* Key Challenges (col-span-7) */}
        <article className="bento-card col-span-1 p-6 sm:p-8 md:col-span-7">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
            Key challenges
          </span>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink">
            What made it difficult.
          </h2>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink-soft">
            {project.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </article>

        {/* Engineering Decisions (col-span-5, sun) */}
        <article className="bento-card surface-sun col-span-1 p-6 sm:p-8 md:col-span-5">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider opacity-75">
            Engineering decisions
          </span>
          <h2 className="mt-3 text-2xl font-semibold leading-tight">
            The trade-offs I made.
          </h2>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed opacity-90">
            {project.decisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </article>

        {/* System Architecture (col-span-12) */}
        <article className="bento-card col-span-1 p-6 sm:p-8 md:col-span-12">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
            Architecture / technical approach
          </span>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink">
            How the system holds together.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            {project.architecture}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {project.features.map((feat, idx) => {
              const bgClasses = ['bg-page text-ink', 'surface-mint', 'surface-sun'];
              return (
                <div
                  key={feat.title}
                  className={`flex min-h-[140px] flex-col justify-between rounded-2xl border border-black/10 p-5 ${
                    bgClasses[idx % bgClasses.length]
                  }`}
                >
                  <span className="font-mono text-xs opacity-70">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <strong className="block text-base font-semibold">{feat.title}</strong>
                    <small className="mt-1 block text-xs opacity-80">{feat.detail}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        {/* Tech Stack (col-span-5, sky) */}
        <article className="bento-card surface-sky col-span-1 p-6 sm:p-8 md:col-span-5">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider opacity-75">
            Tech stack
          </span>
          <h2 className="mt-3 text-2xl font-semibold leading-tight">
            The tools that carried it.
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-black/15 bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#1d2330]"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        {/* Outcome / Learnings (col-span-7, pink) */}
        <article className="bento-card surface-pink col-span-1 p-6 sm:p-8 md:col-span-7">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider opacity-75">
            Outcome / learnings
          </span>
          <h2 className="mt-3 text-2xl font-semibold leading-tight">What happened next.</h2>
          <p className="mt-4 text-sm leading-relaxed opacity-90">{project.outcome}</p>
        </article>

        {/* Next Project Banner */}
        <nav
          aria-label="Next project navigation"
          className="bento-card surface-ink col-span-1 overflow-hidden md:col-span-12"
        >
          <button
            type="button"
            onClick={() => {
              playSoftClick();
              onNavigate({ page: 'project-detail', slug: nextProject.slug });
            }}
            className="group flex w-full items-center justify-between gap-6 p-6 text-left text-white sm:p-9"
          >
            <div>
              <small className="block font-mono text-[11px] uppercase tracking-wider text-white/60">
                Next project case study
              </small>
              <strong className="font-serif-editorial mt-1 block text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none">
                {nextProject.title}
              </strong>
            </div>
            <b className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-xl text-white transition group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#1d2330]">
              &rarr;
            </b>
          </button>
        </nav>
      </div>
    </div>
  );
};
