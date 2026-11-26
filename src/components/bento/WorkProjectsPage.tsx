import React, { useState } from 'react';
import { SubpageNavBar, type RouteView } from './PageNav';
import {
  marqueeTechItems,
  careerEntries,
  projectCaseStudies,
  featuredGithubRepos,
  type ProjectFilterTag,
} from '../../data/portfolioData';
import { playSoftClick } from '../../utils/sound';
import { ChevronDown, Award, ExternalLink, Github, Globe, Code2 } from 'lucide-react';

interface WorkProjectsPageProps {
  onNavigate: (route: RouteView) => void;
}

export const WorkProjectsPage: React.FC<WorkProjectsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<ProjectFilterTag>('all');
  const [internshipsOpen, setInternshipsOpen] = useState(false);

  const mainWorkEntries = careerEntries.filter(
    (entry) => entry.employmentType !== 'Internship' && entry.employmentType !== 'Leadership'
  );
  const internshipAndLeadershipEntries = careerEntries.filter(
    (entry) => entry.employmentType === 'Internship' || entry.employmentType === 'Leadership'
  );

  const filteredProjects = projectCaseStudies.filter((p) => p.filterTags.includes(filter));

  const scrollToSection = (id: string, openDisclosure = false) => {
    playSoftClick();
    if (openDisclosure) {
      setInternshipsOpen(true);
    }
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="mx-auto max-w-[1024px]">
      <SubpageNavBar
        title="Work & Projects"
        variant="work"
        onBack={() => onNavigate({ page: 'home' })}
      />

      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-12 md:gap-4">
        {/* Hero Banner with Devicon Marquee + Floating MacBook */}
        <section
          aria-labelledby="work-title"
          className="bento-card group relative col-span-1 min-h-[250px] overflow-hidden p-6 sm:p-10 md:col-span-12 md:min-h-[300px]"
        >
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
              <span className="size-2.5 rounded-full bg-brand" />
              Live Products · Open-Source Toolkits · AI Research
            </span>
            <h1
              id="work-title"
              className="mt-3 text-[clamp(2.35rem,5.5vw,4.35rem)] font-semibold leading-[0.96] text-ink"
            >
              Work &amp; Projects.
            </h1>

            <nav className="mt-5 flex flex-wrap gap-2" aria-label="Work sections">
              <button
                type="button"
                onClick={() => scrollToSection('selected-projects')}
                className="inline-flex items-center gap-2 rounded-full border border-line-bento bg-page/80 px-3.5 py-2 text-xs font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
              >
                <span>Selected case studies (12)</span>
                <b className="text-brand">&darr;</b>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('github-spotlight')}
                className="inline-flex items-center gap-2 rounded-full border border-line-bento bg-page/80 px-3.5 py-2 text-xs font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
              >
                <span>Open-source &amp; GitHub repos</span>
                <b className="text-brand">&darr;</b>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('work-experience')}
                className="inline-flex items-center gap-2 rounded-full border border-line-bento bg-page/80 px-3.5 py-2 text-xs font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
              >
                <span>Work experience</span>
                <b className="text-brand">&darr;</b>
              </button>
            </nav>
          </div>

          {/* Dual row Devicon Marquee */}
          <div
            className="relative z-10 mt-8 flex max-w-2xl flex-col gap-3 overflow-hidden"
            aria-hidden="true"
          >
            <div className="marquee-mask overflow-hidden">
              <div className="flex w-max animate-scroll-x items-center">
                {[...marqueeTechItems, ...marqueeTechItems].map((item, idx) => (
                  <span
                    key={`${item.name}-1-${idx}`}
                    className="mr-8 inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-wider text-ink-soft"
                  >
                    <img src={item.icon} alt="" className="size-5 object-contain" />
                    <span>{item.name}</span>
                    <span className="ml-2 size-1.5 rounded-full bg-brand/70" />
                  </span>
                ))}
              </div>
            </div>

            <div className="marquee-mask overflow-hidden opacity-75">
              <div className="flex w-max animate-scroll-x-reverse items-center">
                {[...marqueeTechItems, ...marqueeTechItems].map((item, idx) => (
                  <span
                    key={`${item.name}-2-${idx}`}
                    className="mr-8 inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-wider text-ink-soft"
                  >
                    <img src={item.icon} alt="" className="size-5 object-contain" />
                    <span>{item.name}</span>
                    <span className="ml-2 size-1.5 rounded-full bg-brand/70" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating MacBook Illustration */}
          <div
            className="pointer-events-none absolute right-[-1.5rem] bottom-[-2.5rem] z-10 hidden w-[36%] translate-x-[4%] translate-y-[6%] -rotate-[12deg] transition-transform duration-700 ease-out group-hover:translate-x-[-2%] group-hover:translate-y-[-4%] group-hover:-rotate-[5deg] group-hover:scale-105 sm:block"
            aria-hidden="true"
          >
            <img
              src="/assets/macbook.svg"
              alt=""
              className="h-auto w-full drop-shadow-[0_20px_18px_rgba(29,35,48,0.18)]"
            />
          </div>
        </section>

        {/* Live Shipped Products Quick Launch Bar */}
        <section
          aria-label="Live shipped products"
          className="bento-card col-span-1 p-5 sm:p-6 md:col-span-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Production Websites &amp; Apps
            </span>
            <span className="font-mono text-[11px] text-ink-soft">
              Click to open live domain ↗ or read case study below
            </span>
          </div>

          <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Flooty',
                domain: 'flooty.id',
                url: 'https://flooty.id/',
                slug: 'flooty',
                badge: 'App Store 5.0★ · Play Store',
                bg: '#bfe8db',
              },
              {
                name: 'MacBridge',
                domain: 'macbridge.my.id',
                url: 'https://macbridge.my.id/',
                slug: 'macbridge',
                badge: 'macOS 15+ · iPadOS 18+',
                bg: '#dbe8f5',
              },
              {
                name: 'Clova',
                domain: 'clova.my.id',
                url: 'https://clova.my.id/',
                slug: 'clova',
                badge: 'AI Personal Stylist',
                bg: '#ffb743',
              },
              {
                name: 'Winsta',
                domain: 'winsta.net',
                url: 'https://www.winsta.net/',
                slug: 'winsta',
                badge: 'Competitions & AI Trends',
                bg: '#f4cbca',
              },
            ].map((prod) => (
              <div
                key={prod.domain}
                style={{ backgroundColor: prod.bg }}
                className="flex flex-col justify-between rounded-2xl border border-black/10 p-4 text-[#1d2330] transition hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <strong className="text-base font-bold">{prod.name}</strong>
                    <a
                      href={prod.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playSoftClick()}
                      className="inline-flex items-center gap-1 rounded-full bg-white/85 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-[#1768e5] shadow-2xs hover:bg-[#1768e5] hover:text-white"
                    >
                      <Globe className="size-3" />
                      {prod.domain} ↗
                    </a>
                  </div>
                  <span className="mt-1.5 block font-mono text-[10px] font-semibold uppercase tracking-wider opacity-75">
                    {prod.badge}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    playSoftClick();
                    onNavigate({ page: 'project-detail', slug: prod.slug });
                  }}
                  className="mt-3 inline-flex items-center gap-1 text-left text-xs font-semibold underline-offset-4 hover:underline"
                >
                  <span>Read engineering case study &rarr;</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects Heading & Filter Chips */}
        <section
          id="selected-projects"
          aria-labelledby="selected-projects-title"
          className="bento-card col-span-1 p-6 sm:p-8 md:col-span-12"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                What I built &amp; shipped
              </span>
              <h2
                id="selected-projects-title"
                className="font-serif-editorial mt-1 text-[clamp(2rem,4vw,3rem)] font-medium leading-none text-ink"
              >
                Selected projects &amp; case studies
              </h2>
              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-soft">
                From live consumer marketplaces (`flooty.id`, `clova.my.id`, `winsta.net`) and native Apple bridges (`macbridge.my.id`) to open-source AI safety toolkits (`GuardBench`), 3D documentary engines (`CosmosMotion`), and medical computer vision.
              </p>
            </div>
            <span className="font-mono text-xs text-ink-soft">01</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2" aria-label="Filter projects">
            {(
              [
                { id: 'all', label: `All Case Studies (${projectCaseStudies.length})` },
                { id: 'live', label: 'Live Products & Domains' },
                { id: 'opensource', label: 'Open Source (GuardBench, CosmosMotion, etc.)' },
                { id: 'ai', label: 'AI / ML & Vision' },
                { id: 'work', label: 'Company & Production' },
                { id: 'research', label: 'Published Research' },
              ] as const
            ).map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => {
                  playSoftClick();
                  setFilter(chip.id);
                }}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  filter === chip.id
                    ? 'border-ink bg-ink text-white'
                    : 'border-line-bento bg-page text-ink-soft hover:border-ink hover:text-ink'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </section>

        {/* 2-Column Editorial Project Cards Grid */}
        <div className="col-span-1 grid grid-cols-1 gap-4 md:col-span-12 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              onClick={() => {
                playSoftClick();
                onNavigate({ page: 'project-detail', slug: project.slug });
              }}
              className="bento-card bento-card-hover group flex cursor-pointer flex-col overflow-hidden"
            >
              {/* Framed Pastel Visual Header */}
              <div
                className="project-frame-art flex min-h-[210px] items-center justify-center p-6"
                style={{ backgroundColor: project.surface }}
              >
                <div className="relative z-10 flex flex-col items-center gap-2 text-center">
                  <span className="rounded-md bg-white/85 px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-[#1d2330] shadow-2xs">
                    {project.placeholder}
                  </span>
                  {project.awardBadge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#1d2330] px-2.5 py-0.5 font-mono text-[10px] font-medium text-amber-300">
                      <Award className="size-3" />
                      {project.awardBadge}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Body */}
              <div className="flex flex-1 flex-col justify-between gap-3 p-6">
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="mt-1.5 text-2xl font-semibold leading-tight text-ink group-hover:text-brand">
                    {project.title}
                  </h3>

                  <span className="mt-1 block font-mono text-[10.5px] uppercase tracking-wider text-ink-soft">
                    {project.context}
                  </span>

                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line-bento bg-page px-2.5 py-1 text-[10.5px] font-semibold text-ink-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-line-bento pt-3">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink">
                      View case study
                      <b className="grid size-6 place-items-center rounded-full bg-brand text-xs text-white transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </b>
                    </span>

                    {project.linkUrl && (
                      <a
                        href={project.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-brand hover:underline"
                      >
                        <span>{project.linkLabel}</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Open-Source & GitHub Repositories Spotlight (90+ Repos) */}
        <section
          id="github-spotlight"
          aria-labelledby="github-spotlight-title"
          className="bento-card col-span-1 p-6 sm:p-8 md:col-span-12"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                Open-source archive / 02
              </span>
              <h2
                id="github-spotlight-title"
                className="font-serif-editorial mt-1 text-[clamp(1.85rem,3.6vw,2.75rem)] font-medium leading-none text-ink"
              >
                Notable GitHub repositories
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                Selected engineering repositories from my 90+ public codebases on{' '}
                <a
                  href="https://github.com/EngRidhoNet?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand hover:underline"
                >
                  @EngRidhoNet
                </a>
                —spanning AI safety evaluation, 3D video engines, biomedical vision, transformers, and systems tooling.
              </p>
            </div>
            <a
              href="https://github.com/EngRidhoNet?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-bento bg-page px-4 py-2 text-xs font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              <Github className="size-3.5" />
              <span>Explore all 90+ repos ↗</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGithubRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSoftClick()}
                className="group flex flex-col justify-between rounded-2xl border border-line-bento bg-page p-5 transition hover:-translate-y-1 hover:border-brand hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-[#1d2330]"
                      style={{ backgroundColor: repo.surface }}
                    >
                      <Code2 className="size-3" />
                      {repo.category}
                    </span>
                    <span className="font-mono text-xs text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-brand">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-3 font-mono text-base font-bold text-ink group-hover:text-brand">
                    {repo.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                    {repo.tagline}
                  </p>
                </div>

                <div className="mt-4 border-t border-line-bento pt-3">
                  <div className="flex flex-wrap gap-1">
                    {repo.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-md bg-black/5 px-2 py-0.5 font-mono text-[10px] text-ink-soft dark:bg-white/10"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 font-mono text-[10.5px] font-semibold text-ink">
                    {repo.language}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Career Timeline Section */}
        <section
          id="work-experience"
          aria-labelledby="work-experience-title"
          className="bento-card col-span-1 p-6 sm:p-8 md:col-span-12"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                Career journey / 03
              </span>
              <h2
                id="work-experience-title"
                className="mt-1 text-[clamp(1.8rem,3.6vw,2.75rem)] font-medium leading-none text-ink"
              >
                Work
              </h2>
            </div>
            <span className="font-mono text-xs text-ink-soft">
              {mainWorkEntries.length} active roles
            </span>
          </div>

          <div className="mt-6 divide-y divide-line-bento border-t border-line-bento">
            {mainWorkEntries.map((entry) => (
              <article
                key={entry.id}
                className="grid grid-cols-1 gap-2 py-4 transition hover:bg-page/60 sm:grid-cols-12 sm:items-center sm:gap-4 sm:px-2"
              >
                <time className="font-mono text-[11.5px] uppercase text-ink-soft sm:col-span-3">
                  {entry.period}
                </time>

                <div className="flex items-center gap-2.5 sm:col-span-3">
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-lg border border-black/10 font-mono text-xs font-bold text-[#1d2330]"
                    style={{ backgroundColor: entry.surface }}
                  >
                    {entry.initial}
                  </span>
                  <span className="text-sm font-semibold text-ink">{entry.organization}</span>
                </div>

                <div className="sm:col-span-4">
                  <h3 className="text-base font-medium text-ink">{entry.role}</h3>
                  <p className="mt-0.5 text-xs text-ink-soft line-clamp-1">
                    {entry.highlights[0]}
                  </p>
                </div>

                <div className="sm:col-span-2 sm:text-right">
                  <span className="block text-xs font-semibold text-ink">
                    {entry.employmentType} · {entry.workMode}
                  </span>
                  <span className="block text-[11.5px] text-ink-soft">{entry.location}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Internships & Leadership Disclosure */}
          <div id="internships-leadership" className="mt-2 border-t border-line-bento">
            <button
              type="button"
              onClick={() => {
                playSoftClick();
                setInternshipsOpen((prev) => !prev);
              }}
              aria-expanded={internshipsOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:opacity-85"
            >
              <div>
                <span className="block text-[clamp(1.65rem,3.4vw,2.5rem)] font-medium leading-none text-ink">
                  Internships &amp; Leadership
                </span>
                <span className="mt-1.5 block text-xs text-ink-soft">
                  BTPN Syariah · Venturo · Data Science Enthusiasts Maliki
                </span>
              </div>
              <span
                className={`grid size-9 place-items-center rounded-full border border-line-bento bg-page text-brand transition-transform duration-300 ${
                  internshipsOpen ? 'rotate-180' : ''
                }`}
              >
                <ChevronDown className="size-4" />
              </span>
            </button>

            {internshipsOpen && (
              <div className="grid grid-cols-1 gap-3.5 pb-2 pt-2 md:grid-cols-12">
                {internshipAndLeadershipEntries.map((item, idx) => (
                  <article
                    key={item.id}
                    style={{ backgroundColor: item.surface }}
                    className={`relative flex min-h-[165px] items-center justify-between overflow-hidden rounded-2xl border border-black/10 p-5 text-[#1d2330] ${
                      idx === 0 ? 'md:col-span-12' : 'md:col-span-6'
                    }`}
                  >
                    <div className="relative z-10 max-w-[75%] space-y-1">
                      <span className="inline-block rounded-full bg-white/70 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider">
                        {item.employmentType} · {item.workMode}
                      </span>
                      <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="text-xs font-semibold opacity-85">{item.organization}</p>
                      <p className="text-xs opacity-75">{item.highlights[0]}</p>
                      <time className="block pt-2 font-mono text-[10.5px] uppercase opacity-75">
                        {item.period} · {item.location}
                      </time>
                    </div>

                    <div
                      className="grid size-16 shrink-0 rotate-6 place-items-center rounded-2xl border border-white/80 bg-white/85 font-mono text-xl font-bold text-[#1d2330] shadow-sm sm:size-20 sm:text-2xl"
                      aria-hidden="true"
                    >
                      {item.initial}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <footer className="mt-6 flex flex-wrap items-center justify-between gap-4 px-1 pt-4 text-xs text-ink-soft">
        <span className="font-mono">© {new Date().getFullYear()} Ridho Aulia Rahman</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/EngRidhoNet"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ridho-aulia-rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand"
          >
            LinkedIn
          </a>
          <a href="mailto:ridho.aulia7324@gmail.com" className="hover:text-brand">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
};
