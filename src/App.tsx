import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TopNavBar, type RouteView } from './components/bento/PageNav';
import { HomeBentoPage } from './components/bento/HomeBentoPage';
import { WorkProjectsPage } from './components/bento/WorkProjectsPage';
import { ProjectDetailPage } from './components/bento/ProjectDetailPage';
import { AwardsWinsPage } from './components/bento/AwardsWinsPage';
import { WritingNotesPage } from './components/bento/WritingNotesPage';
import { AboutBentoPage } from './components/bento/AboutBentoPage';
import { CommandTerminalModal } from './components/bento/CommandTerminalModal';

function parseHashToRoute(hash: string): RouteView {
  const cleaned = hash.replace(/^#\/?/, '').trim();
  if (!cleaned || cleaned === 'home') return { page: 'home' };
  if (cleaned === 'work' || cleaned === 'projects') return { page: 'work' };
  if (cleaned.startsWith('project/')) {
    const slug = cleaned.replace('project/', '').trim();
    return { page: 'project-detail', slug: slug || 'angkutkita' };
  }
  if (cleaned === 'awards' || cleaned === 'wins') return { page: 'awards' };
  if (cleaned === 'writing' || cleaned === 'blog' || cleaned === 'notes') {
    return { page: 'writing' };
  }
  if (cleaned === 'about') return { page: 'about' };
  return { page: 'home' };
}

function routeToHash(route: RouteView): string {
  switch (route.page) {
    case 'home':
      return '#home';
    case 'work':
      return '#work';
    case 'project-detail':
      return `#project/${route.slug}`;
    case 'awards':
      return '#awards';
    case 'writing':
      return '#writing';
    case 'about':
      return '#about';
  }
}

const App: React.FC = () => {
  const [route, setRoute] = useState<RouteView>(() =>
    typeof window !== 'undefined' ? parseHashToRoute(window.location.hash) : { page: 'home' }
  );
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashToRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavigate = (nextRoute: RouteView) => {
    const targetHash = routeToHash(nextRoute);
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const routeKey =
    route.page === 'project-detail' ? `project-${route.slug}` : route.page;

  return (
    <div className="bento-grid-bg min-h-[100dvh] px-3 pt-5 pb-8 text-ink sm:px-5 sm:pt-8 sm:pb-10 xl:px-8 xl:pt-10 xl:pb-12">
      <TopNavBar
        currentRoute={route}
        onNavigate={handleNavigate}
        onOpenCommandPalette={() => setTerminalOpen(true)}
      />

      <main id="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={routeKey}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {route.page === 'home' && <HomeBentoPage onNavigate={handleNavigate} />}
            {route.page === 'work' && <WorkProjectsPage onNavigate={handleNavigate} />}
            {route.page === 'project-detail' && (
              <ProjectDetailPage slug={route.slug} onNavigate={handleNavigate} />
            )}
            {route.page === 'awards' && <AwardsWinsPage onNavigate={handleNavigate} />}
            {route.page === 'writing' && <WritingNotesPage onNavigate={handleNavigate} />}
            {route.page === 'about' && <AboutBentoPage onNavigate={handleNavigate} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <CommandTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;
