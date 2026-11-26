import React from 'react';
import { SubpageNavBar, type RouteView } from './PageNav';
import { skillCategories } from '../../data/skills';
import { education, certifications } from '../../data/experience';
import { playSoftClick } from '../../utils/sound';

interface AboutBentoPageProps {
  onNavigate: (route: RouteView) => void;
}

export const AboutBentoPage: React.FC<AboutBentoPageProps> = ({ onNavigate }) => {
  return (
    <div className="mx-auto max-w-[1024px]">
      <SubpageNavBar
        title="About Ridho"
        variant="about"
        onBack={() => onNavigate({ page: 'home' })}
      />

      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-12 md:gap-4">
        {/* Hero Intro Panel */}
        <section
          aria-labelledby="about-title"
          className="bento-card col-span-1 p-6 sm:p-10 md:col-span-12"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
            <span className="size-2.5 rounded-full bg-brand" />
            About / 01
          </span>
          <h1
            id="about-title"
            className="mt-4 text-[clamp(2.4rem,5.8vw,4.5rem)] font-semibold leading-[0.96] text-ink"
          >
            What I’m about.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            A Full Stack Developer &amp; AI Engineer from Malang who enjoys the full shape of a product: the messy first hypothesis, the system architecture, the ML pipeline, and the product that finally ships to real users.
          </p>
        </section>

        {/* Panel 1: Where I'm from (mint) */}
        <article className="bento-card surface-mint col-span-1 flex min-h-[250px] flex-col justify-between p-6 sm:p-8 md:col-span-6">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider opacity-75">
            Where I’m from
          </span>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Malang, Indonesia.
            </h2>
            <p className="mt-3 text-sm leading-relaxed opacity-85">
              I live and build in Malang, East Java—a university city big enough to have a vibrant engineering and AI research community, yet calm enough to think deeply and build with focus.
            </p>
          </div>
        </article>

        {/* Panel 2: What I do (sky blue) */}
        <article className="bento-card surface-sky col-span-1 flex min-h-[250px] flex-col justify-between p-6 sm:p-8 md:col-span-6">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider opacity-75">
            What I do
          </span>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              I build software from idea to production.
            </h2>
            <p className="mt-3 text-sm leading-relaxed opacity-85">
              I work across Full-Stack Web (Laravel, React, Golang), Mobile (Flutter), and Applied AI/ML (TensorFlow, Computer Vision, Recommenders). I also founded{' '}
              <strong>Future AI Indonesia</strong> (500+ members) and mentor 100+ developers at{' '}
              <strong>Ruangguru</strong>.
            </p>
          </div>
        </article>

        {/* Panel 3: How I think (sun yellow) */}
        <article className="bento-card surface-sun col-span-1 flex min-h-[250px] flex-col justify-between p-6 sm:p-8 md:col-span-6">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider opacity-75">
            How I think
          </span>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Simple, thoughtful, well-designed.
            </h2>
            <p className="mt-3 text-sm leading-relaxed opacity-90">
              The best systems feel invisible. I care about clean boundaries, clear database schemas, and knowing when AI is the right tool versus when a straightforward deterministic system wins.
            </p>
          </div>
        </article>

        {/* Panel 4: What I'm looking for (white/surface) */}
        <article className="bento-card col-span-1 flex min-h-[250px] flex-col justify-between p-6 sm:p-8 md:col-span-6">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
            What I’m looking for
          </span>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              Interesting problems with good people.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              I want to work on products that solve real operational or human problems, with teams that care about engineering craft and shipping.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:ridho.aulia7324@gmail.com"
                onClick={() => playSoftClick()}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-ink"
              >
                <span>Get in touch</span>
                <b className="grid size-7 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-1">
                  &rarr;
                </b>
              </a>
              <button
                type="button"
                onClick={() => {
                  playSoftClick();
                  onNavigate({ page: 'work' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft hover:text-brand"
              >
                <span>Explore my work &rarr;</span>
              </button>
            </div>
          </div>
        </article>

        {/* Education & Academic Excellence Panel (col-span-7) */}
        <article className="bento-card col-span-1 p-6 sm:p-8 md:col-span-7">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
            Academic Background
          </span>
          <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                {education.degree}
              </h2>
              <p className="mt-1 text-sm text-ink-soft">{education.university}</p>
            </div>
            <span className="rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-bold text-brand">
              GPA {education.gpa}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {education.achievements.map((ach) => (
              <div
                key={ach}
                className="rounded-xl border border-line-bento bg-page px-3.5 py-2.5 text-xs font-medium text-ink"
              >
                ✦ {ach}
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-line-bento pt-4">
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink-soft">
              Verified Certifications ({certifications.length})
            </span>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {certifications.map((cert) => (
                <span
                  key={cert.credentialId}
                  className="rounded-full border border-line-bento bg-page px-2.5 py-1 text-[11px] font-medium text-ink-soft"
                >
                  {cert.name} · <strong className="text-ink">{cert.issuer}</strong>
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Technical Arsenal / Skills Matrix Panel (col-span-5, pink) */}
        <article className="bento-card surface-pink col-span-1 p-6 sm:p-8 md:col-span-5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider opacity-75">
            Technical Stack
          </span>
          <h2 className="mt-2 text-2xl font-semibold leading-tight">
            Tools I ship with.
          </h2>

          <div className="mt-5 space-y-3.5">
            {skillCategories.map((cat) => (
              <div key={cat.category}>
                <span className="block font-mono text-[10.5px] font-bold uppercase tracking-wider opacity-75">
                  {cat.category}
                </span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold text-[#1d2330]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
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
