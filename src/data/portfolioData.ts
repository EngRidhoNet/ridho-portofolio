export type ProjectFilterTag = 'all' | 'live' | 'opensource' | 'ai' | 'work' | 'research';

export interface ProjectCaseStudy {
  slug: string;
  number: string;
  initials: string;
  eyebrow: string;
  title: string;
  category: string;
  placeholder: string;
  context: string;
  filterTags: ProjectFilterTag[];
  role: string;
  period: string;
  surface: string;
  surfaceClass: string;
  summary: string;
  overview: string;
  problem: string;
  contribution: string;
  image?: string;
  linkUrl?: string;
  linkLabel: string;
  githubUrl?: string;
  awardBadge?: string;
  flow: { label: string; detail: string }[];
  challenges: string[];
  decisions: string[];
  architecture: string;
  features: { title: string; detail: string }[];
  stack: string[];
  outcome: string;
  nextSlug: string;
}

export interface CareerEntry {
  id: string;
  role: string;
  organization: string;
  initial: string;
  employmentType: 'Full-time' | 'Part-time' | 'Founder' | 'Contract' | 'Internship' | 'Leadership';
  workMode: string;
  period: string;
  location: string;
  surface: string;
  highlights: string[];
}

export interface AwardItem {
  id: string;
  date: string;
  kind: string;
  title: string;
  placement: string;
  organizer: string;
  project: string;
  summary: string;
  surface: string;
  icon?: string;
  image?: string;
  teamName: string;
  team: { name: string; role?: string; url?: string }[];
  highlights: string[];
  links: { label: string; url: string }[];
}

export interface WritingPost {
  id: string;
  index: string;
  date: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  layout: 'feature' | 'tall' | 'wide' | 'compact' | 'banner' | 'standard';
  surface: string;
  image?: string;
  tags: string[];
  content: string[];
  externalUrl?: string;
}

export interface GalleryHighlight {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  image: string;
  surface: string;
}

export interface FeaturedRepoItem {
  name: string;
  tagline: string;
  language: string;
  category: string;
  url: string;
  liveUrl?: string;
  surface: string;
  highlights: string[];
}

export const marqueeTechItems = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Swift / macOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
  { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
];

export const awardsMarqueeItems = [
  { name: 'Google HackFest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
  { name: 'Flooty App Store 5.0★', initial: 'FL' },
  { name: 'GuardBench OSS', initial: 'GB' },
  { name: 'CosmosMotion npm', initial: 'CM' },
  { name: 'DeepLearning.AI', initial: 'DL' },
  { name: 'UIN Malang', icon: '/assets/uin-malang.png' },
  { name: 'Jurnal SISFO', initial: 'JS' },
  { name: 'Future AI Indonesia', initial: 'AI' },
];

export const galleryHighlights: GalleryHighlight[] = [
  {
    id: 'flooty',
    title: 'Flooty — Surplus Food Marketplace',
    subtitle: 'flooty.id · Live on App Store (5.0★) & Google Play',
    tag: 'Live Product',
    date: '2025 — 2026',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&h=1100&fit=crop',
    surface: '#bfe8db',
  },
  {
    id: 'macbridge',
    title: 'MacBridge — Local-First Mac to iPad',
    subtitle: 'macbridge.my.id · macOS 15+ & iPadOS 18+',
    tag: 'Native Systems',
    date: '2026',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&h=1100&fit=crop',
    surface: '#dbe8f5',
  },
  {
    id: 'clova',
    title: 'Clova — AI Personal Wardrobe Stylist',
    subtitle: 'clova.my.id · Weather-Aware Outfit Intelligence',
    tag: 'AI Product',
    date: '2026',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&h=1100&fit=crop',
    surface: '#ffb743',
  },
  {
    id: 'winsta',
    title: 'Winsta — AI Trends & Competitions',
    subtitle: 'winsta.net · Challenges, Viral AI & Ad Campaigns',
    tag: 'Creator Platform',
    date: '2025 — 2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&h=1100&fit=crop',
    surface: '#f4cbca',
  },
  {
    id: 'guardbench',
    title: 'GuardBench — AI Guardrail Eval Toolkit',
    subtitle: 'Local-first allow / block / escalate benchmarking',
    tag: 'Open Source AI',
    date: '2026',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&h=1100&fit=crop',
    surface: '#e8dff2',
  },
  {
    id: 'hackfest',
    title: 'Top 10 Google HackFest 2024',
    subtitle: 'Angkutkita · Smart Public Transport Microservices',
    tag: 'Hackathon',
    date: 'Nov 2024',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&h=1100&fit=crop',
    surface: '#cfe2d0',
  },
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: 'flooty',
    number: '01',
    initials: 'FL',
    eyebrow: 'Case study / sustainability marketplace',
    title: 'Flooty',
    category: 'Surplus food rescue marketplace',
    placeholder: 'flooty.id · iOS & Android',
    context: 'Live Product · App Store (5.0★) & Google Play',
    filterTags: ['all', 'live', 'work'],
    role: 'Founder & Lead Product Engineer',
    period: '2025 — Present',
    surface: '#bfe8db',
    surfaceClass: 'surface-mint',
    awardBadge: '5.0★ on App Store · Live',
    linkUrl: 'https://flooty.id/',
    linkLabel: 'Visit flooty.id',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&h=600&fit=crop',
    summary:
      'Indonesia’s surplus food rescue marketplace connecting local bakeries, restaurants, and fresh grocers with consumers at 30%–70% off before closing time—shipped on iOS App Store and Google Play.',
    overview:
      'Every day, local kitchens and bakeries produce high-quality food that goes unsold at closing time. Flooty turns daily surplus into affordable mystery bags and curated rescue items with self-pickup or instant GoSend delivery, preventing 2.2 kg of CO₂ emissions per rescued portion.',
    problem:
      'Culinary merchants lose margin on unsold daily inventory while throwing away edible food, yet discounting items manually during regular hours hurts brand perception and lacks real-time radius discovery.',
    contribution:
      'I built the end-to-end Flooty ecosystem—from the high-conversion landing platform (with interactive CO₂ impact and merchant revenue simulators) to the cross-platform iOS & Android apps and real-time rescue window inventory engine.',
    flow: [
      { label: 'Daily rescue windows', detail: 'Merchants publish surplus stock for Morning (07:00–11:00) or Happy Hour (15:00–21:30 WIB).' },
      { label: 'Instant claim & pay', detail: 'Users reserve portions at 30%–70% discount via App Store or Google Play app.' },
      { label: 'Pickup or GoSend', detail: 'Zero-fee self-pickup at store closing or instant courier dispatch.' },
    ],
    challenges: [
      'Synchronizing time-boxed surplus inventory so flash claims never oversell limited daily portions.',
      'Building trust around food safety standards and strict merchant quality verification.',
      'Designing dual-sided tools for both consumers (impact tracker) and merchants (omzet simulator).',
    ],
    decisions: [
      'Structured inventory around strict daily rescue windows (Morning Market & Evening Happy Hour).',
      'Integrated both zero-cost self-pickup handoff codes and instant GoSend courier routing.',
      'Built an interactive ecological & financial impact calculator directly into flooty.id.',
    ],
    architecture:
      'A mobile-first commerce architecture spanning iOS (App Store), Android (Google Play), and the flooty.id web portal, backed by atomic stock reservation, geolocation radius search, and real-time push alerts.',
    features: [
      { title: 'Time-boxed rescue windows', detail: 'Automated 15:00–21:30 WIB surplus flash catalog.' },
      { title: 'Ecological impact engine', detail: 'Tracks -2.2 kg CO₂ saved per rescued portion.' },
      { title: 'Merchant revenue simulator', detail: 'Helps partner stores project recovered monthly margin.' },
    ],
    stack: ['Flutter', 'iOS App Store', 'Google Play', 'TypeScript', 'REST API', 'Geolocation'],
    outcome:
      'Live at flooty.id and published on both the Apple App Store (5.0★ rating) and Google Play Store, partnering with 100+ active local menus across bakeries, cafes, and fresh markets.',
    nextSlug: 'macbridge',
  },
  {
    slug: 'macbridge',
    number: '02',
    initials: 'MB',
    eyebrow: 'Case study / native Apple systems',
    title: 'MacBridge',
    category: 'Local-first Mac to iPad bridge',
    placeholder: 'macbridge.my.id · macOS & iPadOS',
    context: 'Open-Source Preview · macOS 15+ & iPadOS 18+',
    filterTags: ['all', 'live', 'opensource'],
    role: 'Systems & Apple Platform Engineer',
    period: '2026',
    surface: '#dbe8f5',
    surfaceClass: 'surface-sky',
    awardBadge: 'macOS 15+ · iPadOS 18+',
    linkUrl: 'https://macbridge.my.id/',
    linkLabel: 'Visit macbridge.my.id',
    githubUrl: 'https://github.com/EngRidhoNet/macbridge-privacy',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&h=600&fit=crop',
    summary:
      'A native, local-first bridge to wake, verify, and control your Mac securely from an iPad—built around cryptographic device identity and explicit session approval.',
    overview:
      'MacBridge lets you leave your Mac at your desk and take only your iPad. Unlike bloated remote-desktop suites, MacBridge is purpose-built for one job: local discovery, six-digit cryptographic pairing, wake-on-demand, and low-latency native control.',
    problem:
      'Traditional remote desktop tools require manual IP/port configuration, route traffic through third-party cloud relays, or silently maintain background access without clear session visibility.',
    contribution:
      'I designed the local-first pairing protocol, the macOS Host permission & session manager (Screen Recording + Accessibility status), the iPadOS client flow, and the macbridge.my.id distribution portal.',
    flow: [
      { label: 'Zero-config discovery', detail: 'MacBridge Host announces presence locally without manual IP or port entry.' },
      { label: 'Six-digit verification', detail: 'Both Mac and iPad verify a matching 6-digit code to bind cryptographic device identity.' },
      { label: 'Wake & control', detail: 'One-tap wake and low-latency native screen/input session with instant revoke.' },
    ],
    challenges: [
      'Eliminating IP address and port friction while preventing unauthorized local network spoofing.',
      'Communicating macOS power-state and Wake-on-LAN readiness honestly to the iPad user.',
      'Ensuring transparent privacy: visible active sessions and immediate one-click revocation.',
    ],
    decisions: [
      'Tied trust to cryptographic device identity rather than mutable hostnames or local IPs.',
      'Blocked connection automatically if a saved device identity ever mutates unexpectedly.',
      'Surfaced macOS Screen Recording and Accessibility permissions in a clean pre-flight checklist.',
    ],
    architecture:
      'A peer-to-peer Apple ecosystem architecture pairing the macOS 15+ Host daemon with an iPadOS 18+ client over local network discovery, identity pinning, and hardware-accelerated screen streaming.',
    features: [
      { title: 'Cryptographic identity pinning', detail: '6-digit verification binds one iPad to one Mac.' },
      { title: 'Wake & Connect workflow', detail: 'Honest power-state checks and remote wake triggers.' },
      { title: 'Explicit session control', detail: 'Visible active status and instant trust revocation.' },
    ],
    stack: ['Swift', 'macOS 15+', 'iPadOS 18+', 'Local Networking', 'Zero-Config Discovery', 'Security'],
    outcome:
      'Shipped as an open-source development preview at macbridge.my.id with downloadable Mac Host and iPad beta access.',
    nextSlug: 'clova',
  },
  {
    slug: 'clova',
    number: '03',
    initials: 'CL',
    eyebrow: 'Case study / consumer AI product',
    title: 'Clova',
    category: 'AI personal wardrobe stylist',
    placeholder: 'clova.my.id · AI Stylist',
    context: 'Live AI Product · clova.my.id',
    filterTags: ['all', 'live', 'ai'],
    role: 'Product & AI Engineer',
    period: '2026',
    surface: '#ffb743',
    surfaceClass: 'surface-sun',
    awardBadge: 'Live at clova.my.id',
    linkUrl: 'https://clova.my.id/',
    linkLabel: 'Visit clova.my.id',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&h=600&fit=crop',
    summary:
      'An AI personal stylist that digitizes your real closet from photos and curates daily weather-aware, mood-matched outfits tailored to your silhouette and color palette.',
    overview:
      'Clova removes morning decision fatigue ("nothing to wear" despite a full closet). Users snap photos of their garments, and Clova’s vision pipeline tags category, color, fabric, and season—then generates daily outfit combinations adapted to local weather forecasts and schedules.',
    problem:
      'Most fashion apps push users to buy more fast fashion rather than helping them style the clothes they already own in harmony with real-time weather and personal color theory.',
    contribution:
      'I built the computer-vision wardrobe ingestion workflow, the context-aware styling engine (combining personal color palette, silhouette, and live weather telemetry), and the editorial bilingual (EN/ID) web experience at clova.my.id.',
    flow: [
      { label: 'Snap your closet', detail: 'Photograph garments; AI extracts category, color palette, fabric, and seasonality.' },
      { label: 'Contextual matching', detail: 'Engine cross-references your wardrobe with today’s local temperature, weather, and vibe.' },
      { label: 'Daily lookbook', detail: 'Delivers scored outfit picks (e.g., 94% match Soft City Layers) every morning.' },
    ],
    challenges: [
      'Extracting accurate garment attributes (fabric weight, undertones) from casual smartphone photos.',
      'Balancing aesthetic color harmony rules with practical tropical/urban weather constraints.',
      'Crafting a warm, magazine-grade editorial interface that feels fashion-native rather than technical.',
    ],
    decisions: [
      'Combined vision classification with a constraint-based color & weather compatibility scorer.',
      'Designed an interactive digital closet organizer that requires zero manual form filling.',
      'Built a tactile paper-and-lime editorial design system with instant EN/ID localization.',
    ],
    architecture:
      'An AI vision and recommendation pipeline that transforms raw clothing images into structured wardrobe vectors, queried daily against live meteorological data and user style profiles.',
    features: [
      { title: 'Vision closet digitization', detail: 'Auto-recognizes category, color, fabric, and season.' },
      { title: 'Weather-ready styling', detail: 'Adapts looks to real-time local temperature & forecast.' },
      { title: 'Personal color palette', detail: 'Curates combinations that complement your silhouette.' },
    ],
    stack: ['Computer Vision', 'AI Recommendation', 'TypeScript', 'Weather API', 'Editorial UI'],
    outcome:
      'Launched live at clova.my.id, showcasing how multimodal AI can be packaged into an effortless, human-centered consumer lifestyle product.',
    nextSlug: 'winsta',
  },
  {
    slug: 'winsta',
    number: '04',
    initials: 'WN',
    eyebrow: 'Case study / creator & AI platform',
    title: 'Winsta',
    category: 'Competitions, challenges & AI trends',
    placeholder: 'winsta.net · Web, iOS & Android',
    context: 'Live Platform · winsta.net',
    filterTags: ['all', 'live', 'ai', 'work'],
    role: 'Full Stack & AI Platform Engineer',
    period: '2025 — 2026',
    surface: '#f4cbca',
    surfaceClass: 'surface-pink',
    awardBadge: 'Global Multi-Language Platform',
    linkUrl: 'https://www.winsta.net/',
    linkLabel: 'Visit winsta.net',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&h=600&fit=crop',
    summary:
      'All-in-one social competition, viral AI content creation, and ad campaign platform shipped across Web (Next.js), iOS App Store, and Google Play with 4-language localization.',
    overview:
      'Winsta empowers creators and brands to join prize-backed competitions, generate trending posts using built-in viral AI templates, and launch targeted ad campaigns inside a single unified ecosystem.',
    problem:
      'Creators juggle separate tools for generative AI trends, contest participation, and audience monetization, while brands struggle to run engaging challenge-based campaigns.',
    contribution:
      'I engineered the Next.js multi-locale web platform (English, Arabic RTL, Hindi, Bahasa Indonesia) with dynamic theme switching and integrated the cross-platform mobile distribution and AI trend workflows.',
    flow: [
      { label: 'Create with AI trends', detail: 'Users pick viral AI templates to generate high-impact visual posts.' },
      { label: 'Compete in challenges', detail: 'Submit entries to live competitions and climb real-time leaderboards for cash prizes.' },
      { label: 'Amplify with ads', detail: 'Brands and creators boost top-performing posts via integrated ad campaigns.' },
    ],
    challenges: [
      'Supporting seamless internationalization across LTR and RTL scripts (English, Arabic, Hindi, Indonesian).',
      'Keeping feeds, competition leaderboards, and AI generation responsive across web and mobile.',
      'Unifying creator contests and self-serve ad campaign management in one coherent UX.',
    ],
    decisions: [
      'Built on Next.js App Router with Turbopack and adaptive system/light/dark theme persistence.',
      'Designed modular competition, AI studio, and ad-campaign micro-surfaces.',
      'Synchronized web onboarding directly with native iOS App Store and Google Play apps.',
    ],
    architecture:
      'A Next.js and cross-platform mobile ecosystem backed by scalable media generation pipelines, real-time leaderboard scoring, and multi-region localization.',
    features: [
      { title: 'Prize competitions engine', detail: 'Interactive challenges with live voting & rewards.' },
      { title: 'Viral AI trend studio', detail: 'One-click generative templates for trending social posts.' },
      { title: '4-language global UI', detail: 'Full support for EN, AR, HI, and ID across themes.' },
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Generative AI', 'iOS & Android', 'i18n'],
    outcome:
      'Live in production at winsta.net with companion mobile apps on the App Store and Google Play, serving an international creator audience.',
    nextSlug: 'guardbench',
  },
  {
    slug: 'guardbench',
    number: '05',
    initials: 'GB',
    eyebrow: 'Case study / AI safety & evaluation',
    title: 'GuardBench',
    category: 'Local-first AI guardrail evaluation toolkit',
    placeholder: 'github.com/EngRidhoNet/guardbench',
    context: 'Open Source · Apache-2.0 · Python + React',
    filterTags: ['all', 'opensource', 'ai'],
    role: 'Creator & Lead Maintainer',
    period: '2026',
    surface: '#e8dff2',
    surfaceClass: 'surface-lilac',
    awardBadge: 'Open-Source AI Safety Toolkit',
    linkUrl: 'https://github.com/EngRidhoNet/guardbench',
    linkLabel: 'View on GitHub',
    githubUrl: 'https://github.com/EngRidhoNet/guardbench',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&h=600&fit=crop',
    summary:
      'Know when your AI guardrail allows too much—or blocks too much. A local-first evaluation toolkit for deterministic allow, block, and escalate policy decisions.',
    overview:
      'GuardBench evaluates application-specific AI policy guardrails against immutable versioned datasets. Instead of vague response-quality scores, it surfaces costly policy regressions: False Blocks, Missed Blocks, Missed Escalations, and Execution Failures.',
    problem:
      'Teams shipping LLM applications often tweak system prompts or safety classifiers blindly—accidentally blocking legitimate users (false blocks), letting prohibited prompts slip through (missed blocks), or treating adapter timeouts as implicit ALLOWs.',
    contribution:
      'I architected and built GuardBench from scratch: the deterministic 3-class evaluation engine in Python 3.11+, SSRF-hardened HTTP & callable adapters, FastAPI + SQLite/PostgreSQL + Alembic backend, React comparison dashboard, and CI/CD CLI quality gates (JSON + JUnit).',
    flow: [
      { label: 'Immutable dataset', detail: 'Define versioned test cases with expected ALLOW, BLOCK, or ESCALATE labels.' },
      { label: 'Adapter execution', detail: 'Run against Mock, Python-callable, or SSRF-hardened HTTP endpoints.' },
      { label: 'Regression gate', detail: 'Compare runs via confusion matrices, latency percentiles, and CI quality gates.' },
    ],
    challenges: [
      'Ensuring timeouts or malformed guardrail responses are never silently counted as ALLOW.',
      'Preventing dataset drift when comparing historical guardrail runs across prompt revisions.',
      'Making the entire benchmark suite runnable locally without mandatory cloud API keys.',
    ],
    decisions: [
      'Enforced immutable dataset versions with compatibility-aware run diffing.',
      'Separated execution failures into an explicit fourth diagnostic bucket alongside the 3-class confusion matrix.',
      'Shipped both a React visual dashboard and a JUnit/JSON CLI for automated GitHub Actions CI gates.',
    ],
    architecture:
      'A local-first Python 3.11+ core engine paired with FastAPI, SQLAlchemy/Alembic (SQLite & PostgreSQL), an SSRF-hardened adapter layer, and a React analytics frontend.',
    features: [
      { title: '3-class policy metrics', detail: 'Explicit False Block, Missed Block, and Missed Escalation rates.' },
      { title: 'CI/CD quality gates', detail: 'CLI outputs JSON & JUnit XML to block regressing PRs.' },
      { title: 'SSRF-hardened adapters', detail: 'Safe local & remote HTTP evaluation with latency percentiles.' },
    ],
    stack: ['Python 3.11+', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL / SQLite', 'Alembic', 'Pytest'],
    outcome:
      'Published as an Apache-2.0 open-source toolkit with full CI pipelines, synthetic credential-free benchmarks, and production-ready guardrail observability.',
    nextSlug: 'cosmos-motion',
  },
  {
    slug: 'cosmos-motion',
    number: '06',
    initials: 'CM',
    eyebrow: 'Case study / generative video engine',
    title: 'CosmosMotion',
    category: 'Open-source science documentary engine',
    placeholder: 'npmjs.com/package/cosmos-motion',
    context: 'Open Source · Published on npm · Remotion + Three.js',
    filterTags: ['all', 'opensource', 'ai'],
    role: 'Creator & Principal Engineer',
    period: '2026',
    surface: '#cfe2d0',
    surfaceClass: 'surface-sage',
    awardBadge: 'Published on npm · MIT',
    linkUrl: 'https://github.com/EngRidhoNet/cosmos-motion',
    linkLabel: 'View on GitHub & npm',
    githubUrl: 'https://github.com/EngRidhoNet/cosmos-motion',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=600&fit=crop',
    summary:
      'Code-first science & history documentary engine combining 3D NASA Blue Marble WebGL globes, real D3/OpenStreetMap cartography, 2D viseme-synced historical actors, and a Python CLI.',
    overview:
      'Inspired by Cosmos: A Spacetime Odyssey, CosmosMotion eliminates "AI video slop" (hallucinated maps, shifting character faces, and zero citations) by treating vertical (1080×1920) documentary filmmaking as deterministic, verifiable code.',
    problem:
      'Generative AI history and science shorts suffer from inaccurate geography, inconsistent character rigs, and unverifiable claims—undermining educational credibility.',
    contribution:
      'I built and published the modular npm monorepo (`@cosmos-motion/geo-space`, `@cosmos-motion/characters`) and Python CLI orchestrator combining Remotion 4.x, Three.js NASA Blue Marble textures, D3-Geo Natural Earth, OpenStreetMap slippy tiles, and audio-reactive lip-sync.',
    flow: [
      { label: 'Declarative script & citations', detail: 'Define scenes, exact (lat, lon) coordinates, and verifiable source attributions.' },
      { label: '3D globe & 2D actor rig', detail: 'Three.js renders NASA Blue Marble Earth while JSON rigs animate viseme lip-sync.' },
      { label: 'Deterministic MP4 render', detail: 'Python CLI & Remotion compile frame-accurate 1080×1920 documentary videos.' },
    ],
    challenges: [
      'Synchronizing Three.js WebGL atmospheric globes frame-by-frame inside Remotion’s deterministic renderer.',
      'Stitching high-resolution OpenStreetMap & Esri satellite tiles with geodesic D3-Geo camera flyovers.',
      'Animating consistent 2D graphic-novel historical characters with audio-reactive viseme lip-sync.',
    ],
    decisions: [
      'Used real NASA Visible Earth Blue Marble Next Generation textures and Natural Earth 110m vector coastlines.',
      'Built a JSON-driven <HistoricalActor /> rig supporting Front, 3/4, and Profile views with procedural breathing.',
      'Baked verifiable source citation overlays directly into the scene graph.',
    ],
    architecture:
      'A hybrid TypeScript/Remotion 4.x rendering engine coupled with Three.js WebGL shaders, D3-Geo cartography, and a Python 3 CLI + AI Agent Skill interface.',
    features: [
      { title: '3D NASA Blue Marble globe', detail: 'WebGL atmospheric scattering and exact (lat, lon) pins.' },
      { title: 'Real cartography engine', detail: 'D3-Geo coastlines + OpenStreetMap / Esri satellite tiles.' },
      { title: '2D historical actor rig', detail: 'Audio-reactive viseme lip-sync and multi-angle character views.' },
    ],
    stack: ['TypeScript', 'Remotion 4.x', 'Three.js / WebGL', 'D3-Geo', 'OpenStreetMap', 'Python CLI'],
    outcome:
      'Published to npm (`cosmos-motion`) under the MIT license, providing educators and technical storytellers with a reproducible alternative to AI video slop.',
    nextSlug: 'angkutkita',
  },
  {
    slug: 'angkutkita',
    number: '07',
    initials: 'AK',
    eyebrow: 'Case study / smart mobility',
    title: 'Angkutkita',
    category: 'Public transport automation',
    placeholder: 'Smart transit · Go Microservices',
    context: 'HackFest 2024 Google Indonesia · Top 10 Finalist',
    filterTags: ['all', 'ai', 'work'],
    role: 'Full Stack & Systems Engineer',
    period: '2024',
    surface: '#bfe8db',
    surfaceClass: 'surface-mint',
    awardBadge: 'Top 10 HackFest 2024',
    linkUrl: 'https://github.com/EngRidhoNet/AngkutKita_Hackfest',
    linkLabel: 'View repository',
    githubUrl: 'https://github.com/EngRidhoNet/AngkutKita_Hackfest',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&h=600&fit=crop',
    summary:
      'Public transportation automation platform that achieved Top 10 at Google Indonesia HackFest 2024, powered by Golang microservices and real-time fleet telemetry.',
    overview:
      'Angkutkita reimagines local public transit (angkot & city buses) by connecting passengers, drivers, and route operators through real-time GPS telemetry, route optimization, and cashless ticketing.',
    problem:
      'Informal public transit suffers from unpredictable arrival times, inefficient routing, and fragmented payment systems—making daily commuters reluctant to rely on public transport.',
    contribution:
      'I architected the Golang microservices backend, designed the real-time vehicle tracking pipeline, and collaborated on the Flutter passenger & driver mobile interfaces.',
    flow: [
      { label: 'Live discovery', detail: 'Commuters view nearby transit routes and real-time vehicle positions.' },
      { label: 'Smart dispatch', detail: 'Route optimization balances fleet headway and passenger demand.' },
      { label: 'Seamless ride', detail: 'Cashless QR boarding and automated arrival notifications close the loop.' },
    ],
    challenges: [
      'Handling high-frequency GPS location streams without overwhelming mobile clients.',
      'Designing resilient microservices boundaries under tight hackathon and production constraints.',
      'Keeping the passenger UX simple for diverse urban demographics.',
    ],
    decisions: [
      'Used Golang services with Docker & Redis pub/sub for low-latency location broadcasting.',
      'Separated telemetry ingestion from ticketing and route-planning domains.',
      'Built a unified Flutter codebase with clear role state transitions.',
    ],
    architecture:
      'The platform separates real-time telemetry ingestion (Go + WebSockets) from core transactional services, orchestrated inside containerized environments so fleet scale never blocks user interactions.',
    features: [
      { title: 'Real-time fleet telemetry', detail: 'Live vehicle positioning and ETA prediction.' },
      { title: 'Route optimization', detail: 'Algorithmic dispatch to reduce waiting times.' },
      { title: 'Digital fare settlement', detail: 'Fast cashless payment and trip history.' },
    ],
    stack: ['Flutter', 'Golang', 'Microservices', 'Docker', 'Kubernetes', 'Redis'],
    outcome:
      'Selected among the Top 10 teams nationwide at HackFest 2024 by Google Indonesia. It validated how clean systems engineering can directly address urban mobility challenges.',
    nextSlug: 'aura-plus',
  },
  {
    slug: 'aura-plus',
    number: '08',
    initials: 'AU',
    eyebrow: 'Case study / AI & AR healthcare',
    title: 'AURA+',
    category: 'AI & AR autism digital therapy',
    placeholder: 'Emotion CNN + AR Therapy',
    context: 'International Paper Competition · 1st Runner Up',
    filterTags: ['all', 'ai', 'research', 'opensource'],
    role: 'AI Engineer & Researcher',
    period: '2024 — 2025',
    surface: '#dbe8f5',
    surfaceClass: 'surface-sky',
    awardBadge: '1st Runner Up International',
    linkUrl: 'https://github.com/EngRidhoNet/auraplus',
    linkLabel: 'View GitHub repo',
    githubUrl: 'https://github.com/EngRidhoNet/auraplus',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=600&fit=crop',
    summary:
      'Digital therapy application for children with Autism Spectrum Disorder (ASD) combining CNN facial emotion recognition, Augmented Reality (AR) 3D vocabulary modules, and speech evaluation.',
    overview:
      'AURA+ bridges clinical behavioral therapy and home practice by giving children with ASD an interactive, emotion-aware and AR-enabled mobile companion while providing parents and therapists with objective progress metrics.',
    problem:
      'Children with ASD often struggle with emotional recognition and consistent vocabulary therapy outside clinical hours, while parents lack structured offline-first tools to monitor behavioral micro-progress.',
    contribution:
      'I trained the Convolutional Neural Network (CNN) emotion detection pipeline in TensorFlow/Python and engineered the offline-first Flutter + Riverpod app featuring ARCore/ARKit 3D GLB vocabulary viewers, TTS/STT pronunciation guides, and Hive session tracking.',
    flow: [
      { label: 'AR & emotion stimulus', detail: 'Child interacts with 3D AR objects and emotional visual prompts.' },
      { label: 'AI sensing & speech check', detail: 'CNN evaluates facial expressions while STT scores pronunciation.' },
      { label: 'Offline-first clinical log', detail: 'Hive local storage & parent dashboard track longitudinal progress.' },
    ],
    challenges: [
      'Running facial emotion recognition and 3D AR rendering smoothly on mid-range mobile devices.',
      'Providing an automatic 3D orbit fallback viewer when a device lacks ARCore/ARKit hardware support.',
      'Designing a calm, sensory-friendly UI that works 100% offline.',
    ],
    decisions: [
      'Used quantized TensorFlow models alongside Flutter Clean Architecture and Riverpod.',
      'Built an interactive 3D GLB/GLTF fallback viewer so every child can access therapy modules.',
      'Persisted session telemetry locally via Hive with modular downloadable content packs.',
    ],
    architecture:
      'A Clean Architecture Flutter client (Riverpod + Hive + AR/3D viewer + TTS/STT) paired with a Python/TensorFlow computer vision emotion engine.',
    features: [
      { title: 'CNN emotion detection', detail: 'Real-time facial expression classification.' },
      { title: 'AR 3D vocabulary & speech', detail: 'GLB/GLTF AR viewer with STT pronunciation scoring.' },
      { title: 'Caregiver analytics', detail: 'Offline-first longitudinal progress tracking.' },
    ],
    stack: ['Flutter', 'Riverpod', 'TensorFlow', 'CNN', 'ARCore / 3D GLTF', 'Hive', 'Python'],
    outcome:
      'Won First Runner Up at the International Paper Competition (2024) and evolved into a full offline-first AR & AI therapy assistant.',
    nextSlug: 'f1-race-intelligence',
  },
  {
    slug: 'f1-race-intelligence',
    number: '09',
    initials: 'F1',
    eyebrow: 'Case study / telemetry & open LLMs',
    title: 'F1 Race Intelligence',
    category: 'Real-time telemetry & LLM race analyst',
    placeholder: 'FastF1 + WebSocket + Open LLMs',
    context: 'Open Source · FastAPI + Next.js + Ollama',
    filterTags: ['all', 'opensource', 'ai'],
    role: 'Backend & AI Systems Engineer',
    period: '2025',
    surface: '#ffb743',
    surfaceClass: 'surface-sun',
    linkUrl: 'https://github.com/EngRidhoNet/f1-race-intelligence',
    linkLabel: 'View backend & analytics repo',
    githubUrl: 'https://github.com/EngRidhoNet/f1-race-intelligence',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&h=600&fit=crop',
    summary:
      'Production-ready Formula 1 telemetry ingestion engine, live WebSocket race replay server, and data-aware AI race engineer powered by open-source LLMs (Llama, Mistral, Qwen).',
    overview:
      'F1 Race Intelligence ingests official FastF1 lap, stint, tire, and car telemetry into PostgreSQL, streams real-time race replays over WebSockets to a Next.js analytics dashboard (`f1-analytics`), and lets fans query strategy insights using open LLMs.',
    problem:
      'Raw motorsport telemetry contains millions of time-series points that are difficult to explore interactively, while generic LLM chatbots hallucinate lap times unless grounded in actual session databases.',
    contribution:
      'I built the FastAPI + SQLAlchemy 2.x + Alembic telemetry pipeline, the WebSocket car-position replay streamer, the pluggable Ollama / OpenAI-compatible LLM grounding layer, and the Next.js frontend.',
    flow: [
      { label: 'FastF1 ingestion', detail: 'Automated pipeline parses lap times, tire compounds, and car telemetry into PostgreSQL.' },
      { label: 'WebSocket live replay', detail: 'Streams synchronized multi-car track positions and telemetry frames.' },
      { label: 'Data-aware LLM analyst', detail: 'Open-source LLMs (Llama/Mistral/Qwen) answer strategy questions grounded in SQL data.' },
    ],
    challenges: [
      'Normalizing high-volume FastF1 pandas telemetry frames into relational PostgreSQL schemas without bottlenecks.',
      'Keeping WebSocket race replay playback smooth and synchronized across 20 cars.',
      'Preventing LLM hallucinations on numeric lap deltas and pit-stop windows.',
    ],
    decisions: [
      'Designed a pluggable LLM adapter supporting local Ollama models (Llama, Mistral, Qwen) and OpenAI-compatible endpoints.',
      'Injected structured SQL telemetry context into prompts before LLM inference.',
      'Used SQLAlchemy 2.x async patterns with Alembic migrations for clean schema evolution.',
    ],
    architecture:
      'A FastAPI + Uvicorn backend connected to PostgreSQL and FastF1 data pipelines, exposing REST endpoints, WebSocket replay streams, and a grounded LLM chat service consumed by a Next.js TypeScript frontend.',
    features: [
      { title: 'WebSocket race replay', detail: 'Real-time car positioning and telemetry streaming.' },
      { title: 'Grounded open-LLM analyst', detail: 'Pluggable Llama, Mistral, and Qwen strategy chat.' },
      { title: 'Automated FastF1 pipeline', detail: 'Pandas-to-PostgreSQL ingestion with Alembic.' },
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'WebSockets', 'FastF1', 'Ollama / Open LLMs', 'Next.js'],
    outcome:
      'Delivered a complete full-stack motorsport intelligence suite (`f1-race-intelligence` + `f1-analytics`) combining real-time telemetry streaming with local open-source LLM reasoning.',
    nextSlug: 'marbot-app',
  },
  {
    slug: 'marbot-app',
    number: '10',
    initials: 'MA',
    eyebrow: 'Case study / community ecosystem',
    title: 'Marbot & Agile Mosque Suite',
    category: 'Play Store app & published SISFO research',
    placeholder: 'Play Store + Jurnal SISFO',
    context: 'Production App & Peer-Reviewed Publication',
    filterTags: ['all', 'live', 'work', 'research'],
    role: 'Full Stack Developer & Lead Researcher',
    period: '2024 — Present',
    surface: '#f4cbca',
    surfaceClass: 'surface-pink',
    awardBadge: 'Published in Jurnal SISFO',
    linkUrl: 'https://native-simasjid.vercel.app',
    linkLabel: 'View live web preview',
    githubUrl: 'https://github.com/EngRidhoNet/sistem-manajemen-masjid',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900&h=600&fit=crop',
    summary:
      'High-performance mosque administration and community engagement ecosystem shipped on Google Play Store and published as peer-reviewed Agile engineering research in Jurnal SISFO.',
    overview:
      'Marbot digitizes daily mosque operations—spanning prayer schedules, event calendars, transparent financial reporting, and congregation notifications—into a cohesive mobile and web experience.',
    problem:
      'Mosque committees frequently rely on manual spreadsheets and scattered messaging groups, reducing financial transparency and limiting community participation.',
    contribution:
      'I built the Laravel RESTful API backend, designed the MySQL relational schema, developed the Flutter mobile client with Firebase push notifications, and authored the peer-reviewed Agile methodology paper in Jurnal SISFO.',
    flow: [
      { label: 'Committee setup', detail: 'Administrators manage events, finances, and announcements.' },
      { label: 'Realtime broadcast', detail: 'Firebase dispatches prayer and event notifications.' },
      { label: 'Community trust', detail: 'Congregation accesses live financial reports and schedules.' },
    ],
    challenges: [
      'Ensuring fast API responses during peak prayer and Ramadan traffic spikes.',
      'Making financial ledger entries simple for non-technical volunteer administrators.',
      'Validating Agile sprint iterations empirically for academic publication.',
    ],
    decisions: [
      'Built a clean Laravel service-repository layer backed by indexed MySQL queries.',
      'Used Firebase Cloud Messaging for targeted congregation broadcasts.',
      'Adopted weekly Agile stakeholder sprints documented in Jurnal SISFO.',
    ],
    architecture:
      'A centralized Laravel API serves both administrative web dashboards (Vue/Tailwind) and the Flutter Play Store app, supported by MySQL persistence and Firebase notification pipelines.',
    features: [
      { title: 'Financial transparency', detail: 'Real-time donation and operational reporting.' },
      { title: 'Event & prayer engine', detail: 'Automated scheduling and push reminders.' },
      { title: 'Peer-reviewed Agile model', detail: 'Published in Jurnal SISFO (Sistem Informasi).' },
    ],
    stack: ['Flutter', 'Laravel', 'Vue.js', 'RESTful API', 'MySQL', 'Firebase'],
    outcome:
      'Deployed to production on Google Play Store and published in Jurnal SISFO (2024), bridging practical community impact and academic software engineering.',
    nextSlug: 'noxio-commerce',
  },
  {
    slug: 'noxio-commerce',
    number: '11',
    initials: 'NX',
    eyebrow: 'Case study / e-commerce SaaS',
    title: 'Noxio Cosmetic Commerce',
    category: 'Full-stack e-commerce platform',
    placeholder: 'noxio.id · Retail & Inventory',
    context: 'Work · PT Noxio Group Teknologi',
    filterTags: ['all', 'live', 'work'],
    role: 'Full Stack Developer',
    period: 'Mar 2025 — Present',
    surface: '#e8dff2',
    surfaceClass: 'surface-lilac',
    linkUrl: 'https://noxio.id',
    linkLabel: 'Visit noxio.id',
    githubUrl: 'https://github.com/EngRidhoNet',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=900&h=600&fit=crop',
    summary:
      'End-to-end cosmetic e-commerce platform and real-time inventory control center built for PT Noxio Group Teknologi, cutting API & page latency by 40%.',
    overview:
      'A full-featured online storefront and back-office suite handling multi-SKU cosmetic catalogs, automated stock synchronization, payment gateways, and shipping logistics.',
    problem:
      'High-volume cosmetic retail requires accurate stock locking, fast catalog filtering, and seamless checkout—where slow queries or inventory drift directly cause lost sales.',
    contribution:
      'I engineered the Laravel + React full-stack architecture, integrated payment and courier APIs, and optimized PostgreSQL + Redis caching to cut response times by 40%.',
    flow: [
      { label: 'Catalog discovery', detail: 'Customers filter and explore multi-variant cosmetic products.' },
      { label: 'Atomic checkout', detail: 'Stock reservation, payment gateway, and courier calculation.' },
      { label: 'Operations hub', detail: 'Admins track fulfillment and real-time sales analytics.' },
    ],
    challenges: [
      'Preventing race conditions on flash-sale inventory updates.',
      'Integrating multiple Indonesian payment gateways and shipping providers cleanly.',
      'Keeping the React storefront snappy on mobile networks.',
    ],
    decisions: [
      'Leveraged Redis caching for hot catalog queries and session state.',
      'Encapsulated payment and logistics providers behind uniform adapter interfaces.',
      'Used transactional PostgreSQL locks for inventory reservation.',
    ],
    architecture:
      'A decoupled React frontend communicates with a Laravel REST API layer, backed by PostgreSQL for transactional integrity and Redis for high-speed catalog caching.',
    features: [
      { title: 'Real-time stock engine', detail: 'Zero-drift inventory tracking across SKUs.' },
      { title: 'Multi-gateway checkout', detail: 'Automated payment and shipping integration.' },
      { title: 'Executive analytics', detail: 'Live revenue, cohort, and fulfillment metrics.' },
    ],
    stack: ['Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'RESTful API'],
    outcome:
      'Reduced page and API latency by 40% while providing PT Noxio with a scalable retail and back-office foundation.',
    nextSlug: 'hybrid-densenet-pneumonia',
  },
  {
    slug: 'hybrid-densenet-pneumonia',
    number: '12',
    initials: 'DN',
    eyebrow: 'Case study / medical computer vision',
    title: 'Hybrid DenseNet121 Pneumonia AI',
    category: 'Chest X-ray diagnosis with SE Blocks & Grad-CAM',
    placeholder: 'PyTorch · Grad-CAM Explainable AI',
    context: 'Biomedical AI Research · Open Source',
    filterTags: ['all', 'ai', 'research', 'opensource'],
    role: 'Deep Learning Researcher',
    period: '2024 — 2025',
    surface: '#cfe2d0',
    surfaceClass: 'surface-sage',
    linkUrl: 'https://github.com/EngRidhoNet/Hybrid-Densenet-Pneumonia',
    linkLabel: 'View research repository',
    githubUrl: 'https://github.com/EngRidhoNet/Hybrid-Densenet-Pneumonia',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&h=600&fit=crop',
    summary:
      'Explainable medical imaging pipeline enhancing DenseNet121 with Squeeze-and-Excitation (SE) channel attention blocks, model pruning, and Grad-CAM heatmaps for chest X-ray pneumonia detection.',
    overview:
      'Medical AI requires not only accuracy but also clinical interpretability. This project augments DenseNet121 with Squeeze-and-Excitation attention blocks to detect pneumonia from chest radiographs while generating Grad-CAM visual explanations.',
    problem:
      'Standard black-box CNNs struggle with class imbalance in medical datasets and fail to show radiologists which lung regions triggered a positive pneumonia classification.',
    contribution:
      'I implemented the hybrid DenseNet121 + SE Block architecture in PyTorch, applied weighted loss for class imbalance, performed model pruning for deployment efficiency, and built the 5-fold cross-validation and Grad-CAM visualization suite.',
    flow: [
      { label: 'Radiograph preprocessing', detail: 'Chest X-ray normalization, augmentation, and class-balanced sampling.' },
      { label: 'SE-Attention inference', detail: 'DenseNet121 + Squeeze-and-Excitation blocks weight critical feature channels.' },
      { label: 'Grad-CAM heatmap', detail: 'Generates visual lung localization overlays for clinical interpretability.' },
    ],
    challenges: [
      'Mitigating severe class imbalance between normal and pneumonia X-ray samples.',
      'Reducing model parameter footprint via pruning without sacrificing sensitivity.',
      'Making activation maps clinically legible via Grad-CAM.',
    ],
    decisions: [
      'Embedded Squeeze-and-Excitation (SE) blocks into DenseNet121 to recalibrate channel-wise feature responses.',
      'Combined class-weighted cross-entropy loss with 5-fold stratified cross-validation.',
      'Exported Grad-CAM overlays alongside confusion matrices for every validation fold.',
    ],
    architecture:
      'A PyTorch deep learning pipeline integrating DenseNet121 backbones, SE attention modules, structured pruning, and Grad-CAM gradient attribution.',
    features: [
      { title: 'DenseNet121 + SE Blocks', detail: 'Channel-wise attention for radiographic features.' },
      { title: 'Grad-CAM explainability', detail: 'Visualizes exact lung opacity regions driving predictions.' },
      { title: 'Model pruning & 5-fold CV', detail: '83.8% validated accuracy with reduced model size.' },
    ],
    stack: ['PyTorch', 'Python', 'DenseNet121', 'Squeeze-and-Excitation', 'Grad-CAM', 'Medical Imaging'],
    outcome:
      'Achieved 83.8% cross-validated accuracy with full Grad-CAM interpretability and open-sourced the reproducible training notebook and model weights.',
    nextSlug: 'flooty',
  },
];

export const featuredGithubRepos: FeaturedRepoItem[] = [
  {
    name: 'guardbench',
    tagline: 'Local-first evaluation toolkit for allow, block, and escalate AI guardrail decisions with CI quality gates.',
    language: 'Python · FastAPI · React',
    category: 'AI Safety & Evals',
    url: 'https://github.com/EngRidhoNet/guardbench',
    surface: '#e8dff2',
    highlights: ['3-class confusion matrix', 'SSRF-hardened adapters', 'JUnit & JSON CI gates'],
  },
  {
    name: 'cosmos-motion',
    tagline: 'Open-Source Science Documentary Video Engine (Remotion + Three.js NASA Blue Marble + D3-Geo + OpenStreetMap + Python CLI).',
    language: 'TypeScript · Three.js · Python',
    category: 'Generative Video Engine',
    url: 'https://github.com/EngRidhoNet/cosmos-motion',
    liveUrl: 'https://www.npmjs.com/package/cosmos-motion',
    surface: '#bfe8db',
    highlights: ['Published on npm', '3D NASA Blue Marble Globe', '2D Viseme Lip-Sync Actors'],
  },
  {
    name: 'f1-race-intelligence',
    tagline: 'Formula 1 telemetry backend, WebSocket live race replay, and data-aware chatbot powered by open-source LLMs.',
    language: 'Python · FastAPI · WebSocket',
    category: 'Telemetry & Open LLMs',
    url: 'https://github.com/EngRidhoNet/f1-race-intelligence',
    surface: '#ffb743',
    highlights: ['FastF1 ingestion', 'Real-time WebSocket replay', 'Llama / Mistral / Qwen chat'],
  },
  {
    name: 'Hybrid-Densenet-Pneumonia',
    tagline: 'Pneumonia detection from chest X-rays using DenseNet121 + Squeeze-and-Excitation Blocks, model pruning, and Grad-CAM.',
    language: 'Python · PyTorch · CV',
    category: 'Biomedical Computer Vision',
    url: 'https://github.com/EngRidhoNet/Hybrid-Densenet-Pneumonia',
    surface: '#dbe8f5',
    highlights: ['DenseNet121 + SE Blocks', 'Grad-CAM explainability', '5-fold cross validation'],
  },
  {
    name: 'BertLite-Summarizer',
    tagline: 'Sequence-to-Sequence Transformer decoder paired with a pre-trained BERT encoder for automated question generation & summarization.',
    language: 'Python · TensorFlow · NLP',
    category: 'NLP & Transformers',
    url: 'https://github.com/EngRidhoNet/BertLite-Summarizer',
    surface: '#f4cbca',
    highlights: ['BERT Encoder + Custom Decoder', 'Autoregressive generation', 'Custom masked loss'],
  },
  {
    name: 'focusgate',
    tagline: 'Manifest V3 Chrome Extension for schedule-based distraction blocking, Pomodoro focus timers, and accountability unlocks.',
    language: 'TypeScript · Chrome MV3 · Node',
    category: 'Productivity Tooling',
    url: 'https://github.com/EngRidhoNet/focusgate',
    surface: '#cfe2d0',
    highlights: ['Manifest V3 Service Worker', 'Weekly schedule grid', 'Pomodoro + PayPal API'],
  },
  {
    name: 'islamic-history-app',
    tagline: 'Modular Golang backend service with clean internal architecture for structured historical timelines and knowledge retrieval.',
    language: 'Golang · Clean Architecture',
    category: 'Backend Systems',
    url: 'https://github.com/EngRidhoNet/islamic-history-app',
    surface: '#bfe8db',
    highlights: ['Idiomatic Go layout', 'Internal domain boundaries', 'RESTful knowledge API'],
  },
  {
    name: 'semantic-document-search',
    tagline: 'Vector embedding and semantic document retrieval interface built with Next.js and TypeScript for natural-language search.',
    language: 'TypeScript · Next.js · Embeddings',
    category: 'RAG & Semantic Search',
    url: 'https://github.com/EngRidhoNet/semantic-document-search',
    surface: '#dbe8f5',
    highlights: ['Semantic vector search', 'Document chunking', 'Next.js App Router'],
  },
  {
    name: 'invoice-ai',
    tagline: 'Automated invoice parsing, structured line-item extraction, and financial workflow assistant built with Next.js & AI.',
    language: 'TypeScript · Next.js · Document AI',
    category: 'Applied Document AI',
    url: 'https://github.com/EngRidhoNet/invoice-ai',
    surface: '#ffb743',
    highlights: ['Structured OCR extraction', 'Automated line-item validation', 'Export workflows'],
  },
];

export const careerEntries: CareerEntry[] = [
  {
    id: 'hospital-penawar',
    role: 'Web Developer',
    organization: 'Hospital Penawar Sdn Bhd',
    initial: 'HP',
    employmentType: 'Full-time',
    workMode: 'Healthcare Tech',
    period: 'Dec 2025 — Present',
    location: 'Johor Bahru, Malaysia',
    surface: '#bfe8db',
    highlights: [
      'Building healthcare web solutions and responsive patient management systems.',
      'Developing real-time appointment scheduling and clinical workflow features.',
      'Optimizing relational database queries for high-reliability hospital operations.',
    ],
  },
  {
    id: 'future-ai',
    role: 'Founder & CEO',
    organization: 'Future AI Indonesia',
    initial: 'FA',
    employmentType: 'Founder',
    workMode: 'AI Initiative',
    period: 'Jul 2025 — Present',
    location: 'Malang, Indonesia',
    surface: '#ffb743',
    highlights: [
      'Leading AI innovation initiatives and building a 500+ member AI community.',
      'Shipped independent products and open-source toolkits including GuardBench, CosmosMotion, and Clova.',
      'Organizing technical workshops, seminars, and university research collaborations.',
    ],
  },
  {
    id: 'noxio',
    role: 'Fullstack Developer',
    organization: 'PT Noxio Group Teknologi',
    initial: 'NX',
    employmentType: 'Full-time',
    workMode: 'On-site / Hybrid',
    period: 'Mar 2025 — Present',
    location: 'Malang, Indonesia',
    surface: '#f4cbca',
    highlights: [
      'Developed cosmetic e-commerce platform and admin suite with Laravel & React.',
      'Integrated multi-payment gateways, shipping APIs, and real-time inventory.',
      'Improved application performance by 40% via PostgreSQL & Redis optimization.',
    ],
  },
  {
    id: 'ruangguru',
    role: 'Coding Educator',
    organization: 'Ruangguru',
    initial: 'RG',
    employmentType: 'Part-time',
    workMode: 'Remote',
    period: 'Jul 2025 — Present',
    location: 'Remote, Indonesia',
    surface: '#dbe8f5',
    highlights: [
      'Teaching programming fundamentals and web engineering to 100+ students.',
      'Creating interactive coding curriculum, live sessions, and code reviews.',
    ],
  },
  {
    id: 'syabab-dev',
    role: 'Web Developer',
    organization: 'Syabab Dev',
    initial: 'SD',
    employmentType: 'Contract',
    workMode: 'Malang',
    period: 'Oct 2024 — Present',
    location: 'Malang, Indonesia',
    surface: '#e8dff2',
    highlights: [
      'Delivering modern, responsive web applications for diverse client industries.',
      'Collaborating closely with UI/UX designers and project managers.',
    ],
  },
  {
    id: 'venturo',
    role: 'Project Manager Intern',
    organization: 'Venturo Professional Programmer',
    initial: 'VP',
    employmentType: 'Internship',
    workMode: 'Malang',
    period: 'Jul 2024 — Oct 2024',
    location: 'Malang, Indonesia',
    surface: '#bfe8db',
    highlights: [
      'Managed Agile development workflows across 3 software projects with 5–8 engineers.',
      'Improved team sprint productivity by 25% through structured standups and process tuning.',
    ],
  },
  {
    id: 'btpn-syariah',
    role: 'Fullstack Developer Intern',
    organization: 'BTPN Syariah',
    initial: 'BS',
    employmentType: 'Internship',
    workMode: 'Fintech / Banking',
    period: 'Jan 2024 — Apr 2024',
    location: 'Jakarta, Indonesia',
    surface: '#dbe8f5',
    highlights: [
      'Contributed to banking system development and RESTful APIs using Laravel.',
      'Implemented secure authentication, authorization, and fintech compliance flows.',
    ],
  },
  {
    id: 'dse-maliki',
    role: 'Community Lead',
    organization: 'Data Science Enthusiasts Maliki',
    initial: 'DS',
    employmentType: 'Leadership',
    workMode: 'UIN Malang',
    period: 'Oct 2024 — Present',
    location: 'Malang, Indonesia',
    surface: '#ffb743',
    highlights: [
      'Leading 50+ student researchers in machine learning, data analysis, and paper publications.',
      'Previously served as Technical Staff (2023–2024) mentoring junior members.',
    ],
  },
];

export const awardItems: AwardItem[] = [
  {
    id: 'hackfest-2024',
    date: 'Nov 2024',
    kind: 'National Hackathon',
    title: 'Top 10 Finalist at HackFest 2024.',
    placement: 'Top 10 Team Nationwide · Google Indonesia',
    organizer: 'Google Developer Student Clubs Indonesia',
    project: 'Angkutkita — Smart Public Transit Automation',
    summary:
      'Selected among the Top 10 teams across Indonesia for building Angkutkita, a microservices and Flutter-based public transportation automation platform.',
    surface: '#bfe8db',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&h=600&fit=crop',
    teamName: 'Angkutkita Engineering Team',
    team: [
      { name: 'Ridho Aulia Rahman', role: 'Full Stack & Microservices Lead', url: 'https://github.com/EngRidhoNet' },
    ],
    highlights: [
      'Architected Golang + Docker microservices for real-time fleet GPS tracking.',
      'Designed route optimization and digital fare integration for urban transit.',
      'Competed against hundreds of university teams across Indonesia.',
    ],
    links: [
      { label: 'View Project Case Study', url: '#work' },
      { label: 'GitHub Repository', url: 'https://github.com/EngRidhoNet/AngkutKita_Hackfest' },
    ],
  },
  {
    id: 'aura-international-2024',
    date: '2024',
    kind: 'International Research',
    title: '1st Runner Up at International Paper Competition.',
    placement: 'First Runner Up · International Conference',
    organizer: 'International Academic Conference',
    project: 'AURA+ — AI & AR Digital Therapy for Children with ASD',
    summary:
      'Recognized internationally for research and implementation of AURA+, combining CNN facial emotion recognition and AR 3D vocabulary modules with gamified autism spectrum therapy.',
    surface: '#dbe8f5',
    icon: '/assets/uin-malang.png',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=600&fit=crop',
    teamName: 'AURA+ Research Group',
    team: [
      { name: 'Ridho Aulia Rahman', role: 'Lead AI Researcher & Engineer', url: 'https://github.com/EngRidhoNet' },
    ],
    highlights: [
      'Developed CNN computer vision pipeline in TensorFlow for child emotion detection.',
      'Built offline-first Flutter + Riverpod app with AR 3D model viewers and speech pronunciation scoring.',
      'Presented paper and live prototype before an international jury.',
    ],
    links: [
      { label: 'Explore AURA+ Case Study', url: '#work' },
      { label: 'AURA+ GitHub Repo', url: 'https://github.com/EngRidhoNet/auraplus' },
    ],
  },
  {
    id: 'shipped-live-products',
    date: '2025 — 2026',
    kind: 'Product Launches',
    title: 'Shipped Flooty, MacBridge, Clova & Winsta.',
    placement: '4 Live Production Products · Web, iOS & Android',
    organizer: 'Independent & Venture Product Engineering',
    project: 'Flooty.id · MacBridge.my.id · Clova.my.id · Winsta.net',
    summary:
      'Took four distinct products from zero to live production across domains: a surplus food rescue marketplace on the App Store (5.0★) & Play Store, a native macOS-to-iPad bridge, an AI personal wardrobe stylist, and a global AI creator competition platform.',
    surface: '#ffb743',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&h=600&fit=crop',
    teamName: 'Live Product Ecosystem',
    team: [
      { name: 'Flooty (flooty.id)', role: 'App Store 5.0★ & Google Play' },
      { name: 'MacBridge (macbridge.my.id)', role: 'macOS 15+ & iPadOS 18+' },
      { name: 'Clova (clova.my.id)', role: 'AI Wardrobe Stylist' },
      { name: 'Winsta (winsta.net)', role: 'Competitions & AI Trends' },
    ],
    highlights: [
      'Flooty is live on Apple App Store (5.0★) and Google Play with 100+ local partner menus.',
      'MacBridge delivers zero-config local discovery and 6-digit identity pairing between Mac and iPad.',
      'Clova and Winsta bring computer vision and generative AI trends to everyday consumers.',
    ],
    links: [
      { label: 'Visit flooty.id', url: 'https://flooty.id/' },
      { label: 'Visit macbridge.my.id', url: 'https://macbridge.my.id/' },
      { label: 'Visit clova.my.id', url: 'https://clova.my.id/' },
      { label: 'Visit winsta.net', url: 'https://www.winsta.net/' },
    ],
  },
  {
    id: 'open-source-ai-engines',
    date: '2026',
    kind: 'Open Source Releases',
    title: 'Published GuardBench & CosmosMotion.',
    placement: 'Apache-2.0 & MIT · GitHub & npm Registry',
    organizer: 'Open Source Community',
    project: 'GuardBench (AI Guardrail Evals) & CosmosMotion (3D Documentary Engine)',
    summary:
      'Authored and open-sourced two deep technical frameworks: GuardBench for local-first AI policy guardrail evaluation, and CosmosMotion (`npmjs.com/package/cosmos-motion`) for code-first 3D science documentaries.',
    surface: '#e8dff2',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=600&fit=crop',
    teamName: 'Open-Source Packages',
    team: [
      { name: 'GuardBench', role: 'Python 3.11+ · FastAPI · React' },
      { name: 'CosmosMotion', role: 'Remotion 4.x · Three.js · D3-Geo · npm' },
    ],
    highlights: [
      'GuardBench catches False Blocks, Missed Blocks, and Missed Escalations with CI quality gates.',
      'CosmosMotion renders NASA Blue Marble 3D globes, OpenStreetMap tiles, and viseme-synced 2D actors.',
    ],
    links: [
      { label: 'GuardBench on GitHub', url: 'https://github.com/EngRidhoNet/guardbench' },
      { label: 'CosmosMotion on npm', url: 'https://www.npmjs.com/package/cosmos-motion' },
    ],
  },
  {
    id: 'jurnal-sisfo-2024',
    date: '2024',
    kind: 'Journal Publication',
    title: 'Published Research in Jurnal SISFO.',
    placement: 'Peer-Reviewed Journal · Sistem Informasi',
    organizer: 'Jurnal SISFO — Sistem Informasi',
    project: 'Mosque Management System using Agile Methodology',
    summary:
      'Authored and published peer-reviewed research on applying iterative Agile software engineering to community religious institution governance.',
    surface: '#f4cbca',
    icon: '/assets/uin-malang.png',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=900&h=600&fit=crop',
    teamName: 'Published Author',
    team: [
      { name: 'Ridho Aulia Rahman', role: 'First Author & System Architect' },
    ],
    highlights: [
      'Demonstrated how Agile sprints overcome informal governance bottlenecks.',
      'Backed by real-world deployment of the Marbot & Mosque Management platform.',
    ],
    links: [
      { label: 'Read Research Notes', url: '#writing' },
    ],
  },
  {
    id: 'teladan-scholarship',
    date: '2023 — Present',
    kind: 'Academic & AI Credentials',
    title: 'Teladan Scholar (3.87 GPA) & DeepLearning.AI.',
    placement: 'Dean’s List · 8+ Verified AI & Cloud Certifications',
    organizer: 'UIN Malang · DeepLearning.AI · Stanford · AWS',
    project: 'Informatics Engineering & Deep Learning Specialization',
    summary:
      'Awarded the Teladan Scholarship for maintaining a 3.87 / 4.00 GPA alongside completing the 5-course Deep Learning Specialization, Stanford ML Specialization, and AWS Cloud Practitioner.',
    surface: '#cfe2d0',
    icon: '/assets/uin-malang.png',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=600&fit=crop',
    teamName: 'Academic & Certifications',
    team: [
      { name: 'Teladan Scholarship (GPA 3.87)', role: 'UIN Malang' },
      { name: 'Deep Learning Specialization (5 Courses)', role: 'DeepLearning.AI' },
      { name: 'Machine Learning Specialization', role: 'Stanford University' },
      { name: 'AWS Cloud Practitioner & Laravel Pro', role: 'AWS & Laravel' },
    ],
    highlights: [
      'Dean’s List honoree across all semesters with GPA 3.87 / 4.00.',
      'Lead of Data Science Enthusiasts Maliki (50+ members) & Founder of Future AI Indonesia (500+ members).',
    ],
    links: [
      { label: 'Download CV (PDF)', url: '/ridho-cv.pdf' },
    ],
  },
];

export const writingPosts: WritingPost[] = [
  {
    id: 'why-i-built-guardbench',
    index: '01',
    date: '18 Mar 2026',
    category: 'AI Safety & Evals',
    readTime: '6 min read',
    title: 'Why I Built GuardBench: Knowing When Your AI Guardrail Allows or Blocks Too Much',
    excerpt:
      'Generic LLM response scores hide costly policy regressions. Here is how GuardBench evaluates deterministic allow, block, and escalate decisions locally.',
    layout: 'feature',
    surface: '#1d2330',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&h=700&fit=crop',
    tags: ['GuardBench', 'AI Safety', 'Python', 'FastAPI', 'CI/CD'],
    content: [
      'When shipping domain-specific AI applications, a single scalar "helpfulness" score tells you almost nothing about operational policy safety. In production, guardrail failures happen in three concrete ways: False Blocks (rejecting legitimate users), Missed Blocks (allowing prohibited requests), and Missed Escalations (failing to route edge cases to human review).',
      'Even worse, many evaluation scripts treat an HTTP timeout or malformed JSON response from a guardrail service as a silent pass. While building GuardBench, I made execution failures an explicit fourth diagnostic state—ensuring an adapter crash never becomes an implicit ALLOW.',
      'GuardBench runs locally with immutable dataset versions, SSRF-hardened HTTP adapters, a React comparison dashboard, and a CLI that emits JUnit XML so GitHub Actions can block any pull request that regresses policy coverage.',
    ],
  },
  {
    id: 'cosmos-motion-fighting-ai-slop',
    index: '02',
    date: '04 Apr 2026',
    category: 'Generative Video & WebGL',
    readTime: '7 min read',
    title: 'Fighting "AI Video Slop" with Code-First Documentaries in CosmosMotion',
    excerpt:
      'Combining Remotion 4.x, Three.js NASA Blue Marble globes, D3-Geo cartography, and audio-reactive 2D historical actors into an open-source npm engine.',
    layout: 'tall',
    surface: '#1768e5',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=900&fit=crop',
    tags: ['CosmosMotion', 'Remotion', 'Three.js', 'D3-Geo', 'npm'],
    content: [
      'Short-form science and history videos generated by prompt-only AI tools almost always suffer from the same flaws: melting character faces, hallucinated country borders, and zero verifiable source citations.',
      'With CosmosMotion (published on npm), I treated documentary filmmaking as deterministic code. By pairing Three.js NASA Blue Marble Next Generation textures with D3-Geo Natural Earth coastlines and OpenStreetMap satellite tiles, every camera flyover is geographically exact.',
      'For historical storytelling, `@cosmos-motion/characters` uses a JSON-driven 2D graphic-novel rig with audio-reactive viseme lip-sync and baked-in per-scene academic source attributions.',
    ],
  },
  {
    id: 'flooty-macbridge-shipping-products',
    index: '03',
    date: '22 Feb 2026',
    category: 'Product Engineering',
    readTime: '6 min read',
    title: 'From Local-First Apple Bridges to Food Rescue: Lessons from Shipping Flooty & MacBridge',
    excerpt:
      'What building a 5.0★ App Store surplus food marketplace (flooty.id) and a native macOS-to-iPad bridge (macbridge.my.id) taught me about trust and UX.',
    layout: 'wide',
    surface: '#1d2330',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&h=600&fit=crop',
    tags: ['Flooty', 'MacBridge', 'Product Design', 'iOS & macOS'],
    content: [
      'Flooty (flooty.id) and MacBridge (macbridge.my.id) sit in completely different domains—one rescues daily surplus bakery and restaurant food at 30%–70% discounts across Indonesia, while the other bridges a Mac to an iPad over local discovery. Yet both products succeed or fail on a single variable: user trust.',
      'In Flooty, trust meant designing strict daily rescue windows (15:00–21:30 WIB), clear food eligibility standards, and transparent CO₂ and merchant revenue calculators. In MacBridge, trust meant throwing away manual IP addresses in favor of 6-digit cryptographic device identity pinning and one-click session revocation.',
    ],
  },
  {
    id: 'cnn-autism-therapy-aura',
    index: '04',
    date: '14 Nov 2024',
    category: 'AI & Healthcare',
    readTime: '6 min read',
    title: 'Designing Emotion-Aware AI & AR for Autism Therapy: Lessons from AURA+',
    excerpt:
      'How we combined CNN facial emotion recognition with offline-first AR 3D vocabulary modules—winning 1st Runner Up at the International Paper Competition.',
    layout: 'compact',
    surface: '#2c6797',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=700&h=600&fit=crop',
    tags: ['TensorFlow', 'Flutter', 'ARCore', 'CNN'],
    content: [
      'When we started AURA+, the hardest problem was not model accuracy on a benchmark dataset—it was how a child with Autism Spectrum Disorder actually interacts with a screen.',
      'By pairing quantized TensorFlow emotion inference with an offline-first Flutter + Riverpod app featuring 3D AR vocabulary objects (with automatic 3D viewer fallback) and speech pronunciation scoring, AURA+ became a practical bridge between therapists, parents, and children.',
    ],
  },
  {
    id: 'densenet-se-gradcam-pneumonia',
    index: '05',
    date: '09 Jul 2025',
    category: 'Biomedical Vision',
    readTime: '5 min read',
    title: 'Explainable Chest X-Ray Diagnosis with DenseNet121, SE Blocks & Grad-CAM',
    excerpt:
      'Improving pneumonia classification sensitivity with Squeeze-and-Excitation channel attention and visual Grad-CAM heatmaps in PyTorch.',
    layout: 'compact',
    surface: '#17634f',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&h=600&fit=crop',
    tags: ['PyTorch', 'DenseNet121', 'Grad-CAM', 'Medical AI'],
    content: [
      'In medical imaging, an 83.8% accuracy score is meaningless if a clinician cannot inspect where the neural network is looking. In our Hybrid-Densenet-Pneumonia study, we augmented DenseNet121 with Squeeze-and-Excitation (SE) blocks to dynamically weight informative feature channels.',
      'Using 5-fold cross-validation, weighted loss for class imbalance, and Grad-CAM heatmaps, every prediction highlights the exact lung opacity regions driving the diagnosis.',
    ],
  },
  {
    id: 'golang-microservices-hackfest',
    index: '06',
    date: '02 Dec 2024',
    category: 'Systems Architecture',
    readTime: '5 min read',
    title: 'Why We Chose Golang Microservices for Public Transit Telemetry (HackFest Top 10)',
    excerpt:
      'Inside the architecture of Angkutkita: handling live GPS streams, route optimization, and cutting e-commerce latency by 40% with PostgreSQL & Redis.',
    layout: 'wide',
    surface: '#1d2330',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&h=600&fit=crop',
    tags: ['Golang', 'Microservices', 'PostgreSQL', 'Redis'],
    content: [
      'To automate public transit dispatch in Angkutkita (Top 10 Google HackFest 2024), our backend had to ingest continuous GPS pings while serving passenger ETA queries with minimal latency.',
      'Separating telemetry ingestion in Golang from transactional services—and applying the same Redis + PostgreSQL indexing principles that cut API latency by 40% at PT Noxio—kept our systems fast and predictable under load.',
    ],
  },
];
