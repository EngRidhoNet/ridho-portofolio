export interface ProjectCaseStudy {
  slug: string;
  number: string;
  initials: string;
  eyebrow: string;
  title: string;
  category: string;
  placeholder: string;
  context: string;
  filterTags: ('all' | 'work' | 'ai' | 'research')[];
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

export const marqueeTechItems = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
];

export const awardsMarqueeItems = [
  { name: 'Google HackFest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
  { name: 'DeepLearning.AI', initial: 'DL' },
  { name: 'Stanford ML', initial: 'SU' },
  { name: 'UIN Malang', icon: '/assets/uin-malang.png' },
  { name: 'Jurnal SISFO', initial: 'JS' },
  { name: 'AWS Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Future AI Indonesia', initial: 'AI' },
];

export const galleryHighlights: GalleryHighlight[] = [
  {
    id: 'hackfest',
    title: 'Top 10 Google HackFest 2024',
    subtitle: 'Angkutkita · Smart Public Transport',
    tag: 'Hackathon',
    date: 'Nov 2024',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&h=1100&fit=crop',
    surface: '#bfe8db',
  },
  {
    id: 'aura-plus',
    title: '1st Runner Up Intl. Paper',
    subtitle: 'AURA+ · AI Autism Digital Therapy',
    tag: 'AI Research',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=1100&fit=crop',
    surface: '#dbe8f5',
  },
  {
    id: 'future-ai',
    title: 'Future AI Indonesia',
    subtitle: '500+ Community Members & Workshops',
    tag: 'Leadership',
    date: '2025 — Present',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=1100&fit=crop',
    surface: '#ffb743',
  },
  {
    id: 'marbot',
    title: 'Marbot Mosque Ecosystem',
    subtitle: 'Shipped on Google Play Store',
    tag: 'Production App',
    date: '2024 — Present',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900&h=1100&fit=crop',
    surface: '#f4cbca',
  },
  {
    id: 'penawar',
    title: 'Hospital Penawar Sdn Bhd',
    subtitle: 'Healthcare Web Ecosystem · Malaysia',
    tag: 'Healthcare Tech',
    date: 'Dec 2025 — Present',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&h=1100&fit=crop',
    surface: '#e8dff2',
  },
  {
    id: 'scholarship',
    title: 'Teladan Scholar · 3.87 GPA',
    subtitle: 'Informatics Engineering · UIN Malang',
    tag: 'Academic',
    date: '2022 — Present',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=1100&fit=crop',
    surface: '#cfe2d0',
  },
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: 'angkutkita',
    number: '01',
    initials: 'AK',
    eyebrow: 'Case study / smart mobility',
    title: 'Angkutkita',
    category: 'Public transport automation',
    placeholder: 'Smart transit',
    context: 'HackFest 2024 Google Indonesia · Top 10 Finalist',
    filterTags: ['all', 'ai', 'work'],
    role: 'Full Stack & Systems Engineer',
    period: '2024',
    surface: '#bfe8db',
    surfaceClass: 'surface-mint',
    awardBadge: 'Top 10 HackFest 2024',
    linkUrl: 'https://github.com/EngRidhoNet',
    linkLabel: 'View repository',
    githubUrl: 'https://github.com/EngRidhoNet',
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
    number: '02',
    initials: 'AU',
    eyebrow: 'Case study / AI healthcare',
    title: 'AURA+',
    category: 'AI digital therapy',
    placeholder: 'Emotion AI therapy',
    context: 'International Paper Competition · 1st Runner Up',
    filterTags: ['all', 'ai', 'research'],
    role: 'AI Engineer & Researcher',
    period: '2024',
    surface: '#dbe8f5',
    surfaceClass: 'surface-sky',
    awardBadge: '1st Runner Up International',
    linkUrl: 'https://github.com/EngRidhoNet',
    linkLabel: 'Read research overview',
    githubUrl: 'https://github.com/EngRidhoNet',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=600&fit=crop',
    summary:
      'Digital therapy application for children with Autism Spectrum Disorder (ASD) using CNN-based facial emotion recognition and personalized gamified sessions.',
    overview:
      'AURA+ bridges clinical behavioral therapy and home practice by giving children with ASD an interactive, emotion-aware mobile companion while providing parents and therapists with objective progress metrics.',
    problem:
      'Children with ASD often struggle with emotional recognition and consistent therapy outside clinical hours, while parents lack structured tools to monitor behavioral micro-progress.',
    contribution:
      'I trained and optimized the Convolutional Neural Network (CNN) emotion detection pipeline in TensorFlow/Python and integrated real-time inference into the Flutter therapy modules.',
    flow: [
      { label: 'Guided stimulus', detail: 'Child engages with interactive visual and emotional prompts.' },
      { label: 'AI emotion sensing', detail: 'Camera stream evaluates facial expressions safely in real time.' },
      { label: 'Clinical insight', detail: 'Parent & therapist dashboard logs response accuracy and trends.' },
    ],
    challenges: [
      'Running facial emotion recognition with low latency on consumer mobile devices.',
      'Adapting CNN models to children’s subtle and varied facial expressions.',
      'Designing a calm, sensory-friendly UI that avoids overstimulation.',
    ],
    decisions: [
      'Used lightweight quantized TensorFlow models for responsive on-device/edge inference.',
      'Paired gamified exercises with immediate, gentle visual feedback.',
      'Structured session logs around actionable metrics for caregivers.',
    ],
    architecture:
      'A modular AI pipeline pairs a Flutter interaction layer with a Python/TensorFlow computer vision engine, storing structured behavioral telemetry for longitudinal progress analysis.',
    features: [
      { title: 'CNN emotion detection', detail: 'Real-time facial expression classification.' },
      { title: 'Gamified therapy loops', detail: 'Sensory-safe interactive learning modules.' },
      { title: 'Caregiver analytics', detail: 'Longitudinal progress tracking for parents.' },
    ],
    stack: ['Python', 'TensorFlow', 'CNN', 'Computer Vision', 'Flutter', 'FastAPI'],
    outcome:
      'Won First Runner Up at the International Paper Competition (2024) and demonstrated how applied computer vision can create empathetic, human-centered healthcare tools.',
    nextSlug: 'marbot-app',
  },
  {
    slug: 'marbot-app',
    number: '03',
    initials: 'MB',
    eyebrow: 'Case study / community ecosystem',
    title: 'Marbot Application',
    category: 'Mosque management platform',
    placeholder: 'Community platform',
    context: 'Production · Google Play Store',
    filterTags: ['all', 'work'],
    role: 'Full Stack & Mobile Developer',
    period: '2024 — Present',
    surface: '#ffb743',
    surfaceClass: 'surface-sun',
    linkUrl: 'https://play.google.com',
    linkLabel: 'View on Play Store',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900&h=600&fit=crop',
    summary:
      'High-performance mosque administration and community engagement ecosystem shipped on Google Play Store, serving thousands of worshippers and administrators.',
    overview:
      'Marbot digitizes daily mosque operations—spanning prayer schedules, event calendars, transparent financial reporting, and congregation notifications—into a cohesive mobile and web experience.',
    problem:
      'Mosque committees frequently rely on manual spreadsheets and scattered messaging groups, reducing financial transparency and limiting community participation.',
    contribution:
      'I built the Laravel RESTful API backend, designed the MySQL relational schema, and developed the Flutter mobile client with Firebase push notification workflows.',
    flow: [
      { label: 'Committee setup', detail: 'Administrators manage events, finances, and announcements.' },
      { label: 'Realtime broadcast', detail: 'Firebase dispatches prayer and event notifications.' },
      { label: 'Community trust', detail: 'Congregation accesses live financial reports and schedules.' },
    ],
    challenges: [
      'Ensuring fast API responses during peak prayer and Ramadan traffic spikes.',
      'Making financial ledger entries simple for non-technical administrators.',
      'Synchronizing real-time push notifications reliably across Android devices.',
    ],
    decisions: [
      'Built a clean Laravel service-repository layer backed by indexed MySQL queries.',
      'Used Firebase Cloud Messaging for targeted congregation broadcasts.',
      'Designed an intuitive mobile-first ledger view for instant transparency.',
    ],
    architecture:
      'A centralized Laravel API serves both administrative dashboards and the Flutter Play Store app, supported by MySQL persistence and Firebase notification pipelines.',
    features: [
      { title: 'Financial transparency', detail: 'Real-time donation and operational reporting.' },
      { title: 'Event & prayer engine', detail: 'Automated scheduling and push reminders.' },
      { title: 'Community directory', detail: 'Connected congregation and committee roles.' },
    ],
    stack: ['Flutter', 'Laravel', 'RESTful API', 'MySQL', 'Firebase'],
    outcome:
      'Successfully deployed to production on Google Play Store and formed the foundation for a published agile software engineering paper in Jurnal SISFO.',
    nextSlug: 'noxio-commerce',
  },
  {
    slug: 'noxio-commerce',
    number: '04',
    initials: 'NX',
    eyebrow: 'Case study / e-commerce SaaS',
    title: 'Noxio Cosmetic Commerce',
    category: 'Full-stack e-commerce platform',
    placeholder: 'Retail & inventory',
    context: 'Work · PT Noxio Group Teknologi',
    filterTags: ['all', 'work'],
    role: 'Full Stack Developer',
    period: 'Mar 2025 — Present',
    surface: '#f4cbca',
    surfaceClass: 'surface-pink',
    linkUrl: 'https://noxio.id',
    linkLabel: 'Visit noxio.id',
    githubUrl: 'https://github.com/EngRidhoNet',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=900&h=600&fit=crop',
    summary:
      'End-to-end cosmetic e-commerce platform and real-time inventory control center built for PT Noxio Group Teknologi, improving performance by 40%.',
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
    nextSlug: 'ai-recommender',
  },
  {
    slug: 'ai-recommender',
    number: '05',
    initials: 'AR',
    eyebrow: 'Case study / machine learning',
    title: 'Hybrid AI Recommendation Engine',
    category: 'ML personalization pipeline',
    placeholder: 'Neural recommender',
    context: 'AI Engineering · Future AI Indonesia',
    filterTags: ['all', 'ai'],
    role: 'AI Engineer',
    period: '2024 — 2025',
    surface: '#e8dff2',
    surfaceClass: 'surface-lilac',
    linkUrl: 'https://github.com/EngRidhoNet',
    linkLabel: 'Explore architecture',
    githubUrl: 'https://github.com/EngRidhoNet',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop',
    summary:
      'Production-ready machine learning recommendation system combining collaborative filtering and deep content embeddings with a low-latency FastAPI + Redis serving layer.',
    overview:
      'Designed to bring personalized ranking to digital products without cold-start failure, blending user-behavior signals with semantic item representations.',
    problem:
      'Pure collaborative filtering fails on new items (cold start), while naive rule-based recommendations quickly feel repetitive and fail to scale.',
    contribution:
      'I built the hybrid training pipeline in Python/TensorFlow, exposed real-time scoring endpoints via FastAPI, and implemented Redis feature caching and A/B evaluation hooks.',
    flow: [
      { label: 'Event stream', detail: 'User interactions and item metadata feed the feature store.' },
      { label: 'Hybrid scoring', detail: 'Collaborative + content embeddings rank candidate items.' },
      { label: 'Sub-50ms serving', detail: 'FastAPI & Redis deliver personalized feeds with A/B tracking.' },
    ],
    challenges: [
      'Solving the cold-start problem for newly added catalog items.',
      'Keeping inference latency under 50ms for real-time user sessions.',
      'Measuring model uplift reliably across user segments.',
    ],
    decisions: [
      'Combined matrix factorization with transformer/content embeddings.',
      'Pre-computed candidate vectors into Redis for instant retrieval.',
      'Built native A/B experiment logging into the API response layer.',
    ],
    architecture:
      'Offline TensorFlow training jobs compute user/item embeddings stored in PostgreSQL & Redis, while a FastAPI microservice handles real-time candidate retrieval and re-ranking.',
    features: [
      { title: 'Hybrid ranking model', detail: 'Collaborative + content-based filtering.' },
      { title: 'Low-latency serving', detail: 'FastAPI + Redis vector lookup pipeline.' },
      { title: 'A/B testing framework', detail: 'Built-in CTR and conversion attribution.' },
    ],
    stack: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    outcome:
      'Demonstrated how ML models transition from Jupyter notebooks into maintainable, low-latency production microservices.',
    nextSlug: 'sisfo-mosque-research',
  },
  {
    slug: 'sisfo-mosque-research',
    number: '06',
    initials: 'MS',
    eyebrow: 'Case study / published research',
    title: 'Agile Mosque Information System',
    category: 'Published research & web platform',
    placeholder: 'Agile research',
    context: 'Published in Jurnal SISFO · 2024',
    filterTags: ['all', 'research', 'work'],
    role: 'Lead Researcher & Full Stack Developer',
    period: '2024',
    surface: '#cfe2d0',
    surfaceClass: 'surface-sage',
    awardBadge: 'Published in Jurnal SISFO',
    linkUrl: 'https://github.com/EngRidhoNet',
    linkLabel: 'View publication details',
    githubUrl: 'https://github.com/EngRidhoNet',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=900&h=600&fit=crop',
    summary:
      'Peer-reviewed research implementation applying Agile methodology to community religious institution governance, published in Jurnal SISFO (Sistem Informasi).',
    overview:
      'An academic and practical engineering study examining how iterative Agile sprints and modular web architecture solve governance, donation tracking, and operational bottlenecks.',
    problem:
      'Community institutions often reject rigid enterprise software because requirements evolve rapidly through committee consensus rather than formal specifications.',
    contribution:
      'I led the Agile requirements engineering, developed the Laravel + Vue.js web platform, evaluated usability metrics, and authored the peer-reviewed paper in Jurnal SISFO.',
    flow: [
      { label: 'Iterative discovery', detail: 'Short sprint cycles with mosque stakeholders.' },
      { label: 'Modular delivery', detail: 'Incremental release of finance, event, and member modules.' },
      { label: 'Empirical validation', detail: 'System testing and peer-reviewed publication.' },
    ],
    challenges: [
      'Translating informal committee workflows into structured database schemas.',
      'Maintaining high usability for volunteer operators across age groups.',
      'Validating software engineering methodology against academic rigor.',
    ],
    decisions: [
      'Adopted rapid Agile prototyping with weekly stakeholder feedback loops.',
      'Paired Laravel backend reliability with reactive Vue.js & Tailwind interfaces.',
      'Automated PDF/Excel financial report generation for board meetings.',
    ],
    architecture:
      'A clean MVC web architecture powered by Laravel, Vue.js, and MySQL, structured around independent domain modules for accounting, scheduling, and congregation records.',
    features: [
      { title: 'Automated ledger & audit', detail: 'One-click financial statements and donation logs.' },
      { title: 'Agile sprint framework', detail: 'Empirically validated development lifecycle.' },
      { title: 'Role-based governance', detail: 'Granular permissions for committee members.' },
    ],
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Agile Methodology'],
    outcome:
      'Published in Jurnal SISFO (2024) and deployed in real community operations, bridging academic software engineering and practical social impact.',
    nextSlug: 'angkutkita',
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
      'Organizing technical workshops, seminars, and university research collaborations.',
      'Developing applied AI/ML solutions for local businesses and organizations.',
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
      { label: 'GitHub Profile', url: 'https://github.com/EngRidhoNet' },
    ],
  },
  {
    id: 'aura-international-2024',
    date: '2024',
    kind: 'International Research',
    title: '1st Runner Up at International Paper Competition.',
    placement: 'First Runner Up · International Conference',
    organizer: 'International Academic Conference',
    project: 'AURA+ — AI Digital Therapy for Children with ASD',
    summary:
      'Recognized internationally for research and implementation of AURA+, combining CNN facial emotion recognition with gamified autism spectrum therapy.',
    surface: '#dbe8f5',
    icon: '/assets/uin-malang.png',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=600&fit=crop',
    teamName: 'AURA+ Research Group',
    team: [
      { name: 'Ridho Aulia Rahman', role: 'Lead AI Researcher & Engineer', url: 'https://github.com/EngRidhoNet' },
    ],
    highlights: [
      'Developed CNN computer vision pipeline in TensorFlow for child emotion detection.',
      'Validated clinical and caregiver progress tracking workflows.',
      'Presented paper and live prototype before an international jury.',
    ],
    links: [
      { label: 'Explore AURA+ Case Study', url: '#work' },
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
    surface: '#ffb743',
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
    kind: 'Academic Honor',
    title: 'Teladan Scholarship & 3.87 GPA.',
    placement: 'Academic Excellence Awardee · Dean’s List',
    organizer: 'UIN Maulana Malik Ibrahim Malang',
    project: 'B.Sc. in Informatics Engineering',
    summary:
      'Awarded the Teladan Scholarship for sustained academic excellence, maintaining a 3.87 / 4.00 GPA across all semesters alongside active research and leadership.',
    surface: '#f4cbca',
    icon: '/assets/uin-malang.png',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=600&fit=crop',
    teamName: 'Academic Milestone',
    team: [
      { name: 'Ridho Aulia Rahman', role: 'Informatics Engineering Scholar' },
    ],
    highlights: [
      'Dean’s List honoree across all semesters with GPA 3.87 / 4.00.',
      'Lead of Data Science Enthusiasts Maliki (50+ members).',
    ],
    links: [
      { label: 'Download CV (PDF)', url: '/ridho-cv.pdf' },
    ],
  },
  {
    id: 'deeplearning-stanford-ml',
    date: '2024',
    kind: 'AI Specializations',
    title: 'DeepLearning.AI & Stanford ML Specializations.',
    placement: '6+ Verified Specializations & Certifications',
    organizer: 'DeepLearning.AI · Stanford University · AWS',
    project: 'Neural Networks, CNNs, Sequence Models & Cloud',
    summary:
      'Completed intensive 5-course Deep Learning Specialization (DeepLearning.AI), Stanford Machine Learning Specialization, AWS Cloud Practitioner, and Laravel Pro Certification.',
    surface: '#e8dff2',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop',
    teamName: 'Verified Credentials',
    team: [
      { name: 'Deep Learning Specialization (5 Courses)', role: 'DeepLearning.AI' },
      { name: 'Machine Learning Specialization', role: 'Stanford University' },
      { name: 'AWS Cloud Practitioner', role: 'Amazon Web Services' },
      { name: 'Laravel Professional Certification', role: 'Laravel' },
    ],
    highlights: [
      'Mastered CNNs, RNNs, Transformers, YOLO object detection, and ML strategy.',
      'Applied theoretical foundations directly to AURA+ and hybrid recommender systems.',
    ],
    links: [
      { label: 'View LinkedIn Credentials', url: 'https://linkedin.com/in/ridho-aulia-rahman' },
    ],
  },
  {
    id: 'future-ai-founder',
    date: 'Jul 2025 — Present',
    kind: 'Ecosystem Building',
    title: 'Founded Future AI Indonesia.',
    placement: '500+ Members · Workshops & University Partnerships',
    organizer: 'Future AI Indonesia',
    project: 'AI Education & Applied Innovation Community',
    summary:
      'Built an independent AI community and consultancy in Malang connecting 500+ developers, students, and researchers through hands-on workshops and business solutions.',
    surface: '#cfe2d0',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=600&fit=crop',
    teamName: 'Future AI Leadership',
    team: [
      { name: 'Ridho Aulia Rahman', role: 'Founder & CEO' },
    ],
    highlights: [
      'Grew community to 500+ active AI enthusiasts and practitioners.',
      'Partnered with universities and local enterprises for applied AI adoption.',
    ],
    links: [
      { label: 'Get in Touch', url: 'mailto:ridho.aulia7324@gmail.com' },
    ],
  },
];

export const writingPosts: WritingPost[] = [
  {
    id: 'cnn-autism-therapy-aura',
    index: '01',
    date: '14 Nov 2024',
    category: 'AI & Healthcare',
    readTime: '6 min read',
    title: 'Designing Emotion-Aware AI for Autism Therapy: Lessons from AURA+',
    excerpt:
      'How we trained lightweight Convolutional Neural Networks to recognize subtle emotional cues in children with ASD—and turned a research paper into a usable mobile companion.',
    layout: 'feature',
    surface: '#1d2330',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=700&fit=crop',
    tags: ['TensorFlow', 'Computer Vision', 'CNN', 'Healthcare AI'],
    content: [
      'When we started AURA+, the hardest problem was not model accuracy on a benchmark dataset—it was how a child with Autism Spectrum Disorder actually interacts with a screen.',
      'Standard facial emotion datasets are biased toward exaggerated adult expressions. In clinical and home therapy, children express micro-emotions that shift rapidly. We had to curate and augment our training pipeline so the Convolutional Neural Network remained resilient under uneven lighting and partial camera angles.',
      'More importantly, an AI model is only useful when the product surface around it feels calm. By pairing quantized TensorFlow inference with a sensory-safe Flutter interface, AURA+ became a bridge between therapists, parents, and children—ultimately earning 1st Runner Up at the International Paper Competition.',
    ],
  },
  {
    id: 'golang-microservices-hackfest',
    index: '02',
    date: '02 Dec 2024',
    category: 'Systems Architecture',
    readTime: '5 min read',
    title: 'Why We Chose Golang Microservices for Public Transit Telemetry',
    excerpt:
      'Inside the architecture of Angkutkita (Top 10 Google HackFest 2024): handling live GPS streams, route optimization, and Flutter client state.',
    layout: 'tall',
    surface: '#1768e5',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=900&fit=crop',
    tags: ['Golang', 'Microservices', 'Flutter', 'Docker'],
    content: [
      'Public transit in Indonesian cities moves organically. To automate angkot and bus dispatch in Angkutkita, our backend had to ingest continuous GPS pings while serving passenger ETA queries with minimal latency.',
      'Separating the telemetry ingestion service in Golang from our transactional ticketing service prevented high-frequency location writes from locking user checkouts. Combined with Redis pub/sub and Docker containers, the system stayed predictable even under simulated peak-hour load.',
    ],
  },
  {
    id: 'agile-mosque-governance-sisfo',
    index: '03',
    date: '19 Aug 2024',
    category: 'Published Research',
    readTime: '7 min read',
    title: 'Agile Software Engineering for Community Institutions (Jurnal SISFO)',
    excerpt:
      'What happens when you apply iterative Agile sprints to mosque administration and financial transparency? Key takeaways from our peer-reviewed paper.',
    layout: 'wide',
    surface: '#1d2330',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=900&h=600&fit=crop',
    tags: ['Agile', 'Laravel', 'Research Paper', 'Jurnal SISFO'],
    content: [
      'Community institutions rarely have a fixed requirement document. Committee members rotate, financial reporting needs evolve during Ramadan, and operators vary widely in technical literacy.',
      'In our research published in Jurnal SISFO, we documented how short Agile feedback loops—paired with a modular Laravel & Flutter/Vue architecture—allowed stakeholders to shape the Marbot ecosystem organically while increasing congregation trust.',
    ],
  },
  {
    id: 'ecommerce-latency-40-percent',
    index: '04',
    date: '10 May 2025',
    category: 'Backend Performance',
    readTime: '4 min read',
    title: 'Cutting E-Commerce API Latency by 40% with PostgreSQL & Redis',
    excerpt:
      'Practical query indexing, cache invalidation, and atomic stock locking strategies from building the Noxio cosmetic commerce platform.',
    layout: 'compact',
    surface: '#2c6797',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700&h=600&fit=crop',
    tags: ['Laravel', 'PostgreSQL', 'Redis', 'React'],
    content: [
      'Most e-commerce slowdowns come from repeated catalog filtering queries and unindexed join paths. At PT Noxio, we profiled our hottest endpoints and introduced composite PostgreSQL indexes alongside a tiered Redis cache.',
      'By caching read-heavy product variant trees and reserving database transactions strictly for atomic stock locking during checkout, overall API latency dropped by 40%.',
    ],
  },
  {
    id: 'teaching-100-developers',
    index: '05',
    date: '28 Sep 2025',
    category: 'Engineering Culture',
    readTime: '4 min read',
    title: 'What Teaching 100+ Coding Students Taught Me About Clean Architecture',
    excerpt:
      'As a Coding Educator at Ruangguru and Lead at Data Science Enthusiasts, explaining systems to beginners forced me to strip away unnecessary complexity.',
    layout: 'compact',
    surface: '#17634f',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&h=600&fit=crop',
    tags: ['Mentorship', 'Clean Code', 'Ruangguru', 'Community'],
    content: [
      'If you cannot explain why a layer exists in your codebase to a first-year student, there is a high chance that layer is accidental complexity.',
      'Mentoring over 100 students at Ruangguru and leading 50+ members in Data Science Enthusiasts Maliki sharpened my own engineering philosophy: build simple architectures where every boundary has a clear reason to exist.',
    ],
  },
  {
    id: 'hybrid-recommenders-fastapi',
    index: '06',
    date: '15 Jan 2026',
    category: 'Applied ML',
    readTime: '6 min read',
    title: 'From Notebook to Production: Serving Hybrid Recommenders with FastAPI',
    excerpt:
      'Bridging collaborative filtering and transformer embeddings behind a sub-50ms FastAPI and Redis inference pipeline.',
    layout: 'wide',
    surface: '#1d2330',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop',
    tags: ['FastAPI', 'TensorFlow', 'Recommender Systems', 'Python'],
    content: [
      'A recommendation model that lives only in a Jupyter notebook delivers zero product value. The real engineering challenge begins when you need sub-50ms responses and graceful cold-start fallbacks.',
      'By pre-computing item embeddings into Redis and keeping the online FastAPI service focused on lightweight candidate scoring and A/B logging, we achieved both high relevance and operational simplicity.',
    ],
  },
];
