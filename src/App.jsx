import { useEffect, useRef, useState } from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────

const ROLES = [
  'Full Stack Developer',
  'Agentic AI Engineer',
  'Multi-Agent Orchestrator',
  'Enterprise Modernizer',
]

const TECH_STRIP = [
  'Python', 'React', 'Java 17', 'TypeScript', 'Angular 15', 'Spring 6',
  'AutoGen', 'AWS Bedrock', 'MCP Servers', 'PostgreSQL', 'Redis',
  'Copilot SDK', 'Claude AI', 'Gemini', 'Jenkins CI/CD', 'TailwindCSS',
  'LLM Orchestration', 'RAG Apps', 'Multi-Agent Systems', 'Maven', 'Ansible',
]

const EXPERIENCE = [
  {
    company: 'Deloitte USI',
    badge: 'DL',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(34,211,238,0.25)',
    role: 'Consultant — Development',
    location: 'Pune, IN',
    period: "Aug '24 — Present",
    tag: 'Full Stack + Agentic AI',
    stack: ['Python', 'React', 'PostgreSQL', 'AutoGen', 'MCP Servers', 'AWS Bedrock', 'Gemini', 'Copilot SDK'],
    bullets: [
      { icon: '🤖', text: 'Led team building an AI-driven COBOL modernization platform using multi-agent orchestration — compressing months of manual analysis into days.' },
      { icon: '⚙️', text: 'Designed agentic workflows using agents, skills, hooks, MCP servers, and Copilot CLI/SDK integrations to automate enterprise modernization at scale.' },
      { icon: '🏗️', text: 'Architected intelligent documentation pipelines using specialized agents: dependency fetchers, code miners, assemblers, reviewers, and DB persistence agents.' },
      { icon: '🔗', text: 'Built distributed multi-agent pipelines for legacy code mining, app code generation, automated reviews, test creation, and SAST/DAST remediation.' },
      { icon: '⚡', text: 'Developed full-stack AI platform on Python + React generating modernization docs through multi-agent conversational workflows powered by AutoGen.' },
    ],
  },
  {
    company: 'Snap-on Business Solutions',
    badge: 'SB',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.25)',
    role: 'Consultant — Development',
    location: 'Noida, IN',
    period: "Sep '21 — Aug '24",
    tag: 'Full Stack Development',
    stack: ['Angular 15', 'Java 17', 'Spring 6', 'PostgreSQL', 'Jenkins', 'Ansible', 'AWS S3'],
    bullets: [
      { icon: '🔄', text: 'Migrated Java 8→17, Spring 5→6, Tomcat 9→10, and SQL→PostgreSQL — a full-stack tech generation upgrade.' },
      { icon: '🔒', text: 'Conducted web security threat analysis, resolved CSRF vulnerabilities, and automated quarterly Tomcat/Java upgrades via Ansible + Jenkins.' },
      { icon: '📦', text: 'Automated AWS S3 ↔ remote-server file transfers using SFTP Ansible playbooks; migrated all Jenkins pipelines from scratch.' },
      { icon: '🧪', text: 'Wrote comprehensive unit tests covering UI, backend, and DB layers; led weekly code reviews with senior developers.' },
    ],
  },
  {
    company: 'Infosys',
    badge: 'IN',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.2)',
    role: 'Systems Engineer',
    location: 'Mysore → Bangalore, IN',
    period: "Jan '19 — Aug '21",
    tag: 'Promoted from intern',
    stack: ['Oracle Data Integrator', 'SQL', 'Angular 11', 'Spring', 'Hibernate', 'Bootstrap'],
    segments: [
      {
        title: 'Systems Engineer Intern',
        period: "Jan '19 — May '19",
        context: 'Mysore · Internal Tooling',
        bullets: [
          { icon: '🏛️', text: 'Built a portal for inter-office transfer requests across India; designed Spring APIs with round-robin matching algorithms to initiate transfers.' },
        ],
      },
      {
        title: 'Systems Engineer',
        period: "Aug '19 — Aug '21",
        context: 'Bangalore · ETL / Big Data',
        bullets: [
          { icon: '📊', text: 'Fully automated data migration design on Oracle Data Integrator with multiple cost-reduction optimisations.' },
          { icon: '🗃️', text: 'Wrote complex queries against large-volume production databases in an Agile Scrum environment.' },
        ],
      },
    ],
  },
  {
    company: 'DRDO',
    badge: 'DR',
    color: 'from-rose-500 to-pink-600',
    glow: 'rgba(244,63,94,0.2)',
    role: 'Research Intern',
    location: 'New Delhi, IN',
    period: "Apr '18 — Jun '18",
    tag: 'Defense Research / GIS',
    stack: ['.NET', 'DotSpatial'],
    bullets: [
      { icon: '🛩️', text: 'Under Scientist-G at ISSA, built a desktop GIS app to visualise weather trends over aircraft flight regions using DotSpatial and shapefile coordinate extraction.' },
    ],
  },
]

const SKILLS = [
  {
    title: 'Agentic AI',
    icon: '🤖',
    accent: 'border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5',
    items: ['Prompt Engineering', 'AI Workflow Design', 'Agents & Skills', 'LLM Integration', 'Multi-Step Orchestration', 'RAG Apps', 'AutoGen', 'MCP Servers', 'Copilot CLI & SDK'],
  },
  {
    title: 'AI Platforms',
    icon: '🧠',
    accent: 'border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-purple-500/5',
    items: ['Claude', 'AWS Bedrock', 'Gemini', 'GitHub Copilot'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    accent: 'border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/5',
    items: ['React 17', 'Angular 15', 'TypeScript', 'JavaScript', 'Tailwind', 'HTML5', 'CSS', 'NgRx', 'RxJS', 'Redux', 'PrimeReact', 'MUI', 'ShadCN', 'TanStack Query'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    accent: 'border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-amber-500/5',
    items: ['Java 17', 'Python', 'Spring 6.0', 'Resilience4j', 'Hibernate'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    accent: 'border-rose-500/30 bg-gradient-to-br from-rose-500/10 to-pink-500/5',
    items: ['PostgreSQL', 'Oracle', 'MySQL', 'Redis', 'Oracle Data Integrator'],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    accent: 'border-slate-600/40 bg-gradient-to-br from-slate-800/60 to-slate-900/40',
    items: ['Jenkins', 'Ansible', 'Maven', 'GitHub', 'JUnit', 'Mockito', 'JIRA', 'Confluence', 'NVM', 'Browser Stack', 'Mend.io', 'GlowRoot', 'Accurev'],
  },
]

const EDUCATION = [
  {
    degree: 'MS in Computer Science',
    school: 'Liverpool John Moores University, England',
    sub: 'Distance Learning via UpGrad · Research Driver Program',
    period: "Sep '22 — Nov '23",
    icon: '🎓',
  },
  {
    degree: 'PG Diploma in Full Stack Development',
    school: 'IIIT Bangalore',
    sub: 'Distance Learning · CGPA 3.45 / 4',
    period: "Feb '21 — Mar '22",
    icon: '💻',
  },
  {
    degree: 'B.Tech in Computer Science',
    school: 'DIT University',
    sub: 'Dehradun, IN · CGPA 8.25 / 10',
    period: "Aug '15 — May '19",
    icon: '🏛️',
  },
]

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function useRoleCycle() {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)
  useEffect(() => {
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIdx(i => (i + 1) % ROLES.length)
        setFading(false)
      }, 350)
    }, 3000)
    return () => clearInterval(t)
  }, [])
  return { role: ROLES[idx], fading }
}

function useActiveSection() {
  const [active, setActive] = useState('hero')
  useEffect(() => {
    const ids = ['hero', 'about', 'experience', 'skills', 'education', 'contact']
    const fn = () => {
      const y = window.scrollY + 140
      let cur = 'hero'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return active
}

function useBackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return show
}

// ─── Primitives ───────────────────────────────────────────────────────────────

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}

function Label({ children }) {
  return (
    <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-cyan-400 mb-5">
      <span className="w-6 h-px bg-cyan-400 inline-block" />
      {children}
    </p>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { role, fading } = useRoleCycle()
  const active = useActiveSection()
  const showTop = useBackToTop()

  const navLinks = [
    { id: 'about',      label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills',     label: 'Skills' },
    { id: 'education',  label: 'Education' },
    { id: 'contact',    label: 'Contact' },
  ]

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
      {/* Dot grid */}
      <div className="dot-grid pointer-events-none fixed inset-0" />
      {/* Ambient glows */}
      <div className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />

      {/* ── Navbar ──────────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#020617]/75 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="group flex flex-col text-left leading-none">
            <span className="text-base font-black tracking-tight group-hover:text-cyan-300 transition-colors">
              Jaagriti Bisht
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
              Full Stack · Agentic AI
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  active === link.id
                    ? 'text-cyan-300 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/JaagritiBisht-Resume.pdf"
              download
              className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-opacity"
            >
              Download CV
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#020617]/95 px-6 py-5 flex flex-col gap-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setMenuOpen(false) }}
                className="text-left py-2.5 text-gray-300 hover:text-cyan-300 transition-colors border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/JaagritiBisht-Resume.pdf"
              download
              className="mt-2 py-3 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold"
            >
              Download CV
            </a>
          </div>
        )}
      </header>

      {/* ── Hero — single column editorial ──────────────────────────────── */}
      <section id="hero" className="relative min-h-screen pt-20 flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full py-16 md:py-24">

          <div className="hero-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AWS AI Certified · Open to opportunities
          </div>

          <h1 className="hero-2 text-[clamp(3.5rem,13vw,11rem)] font-black tracking-[-0.04em] leading-[0.85]">
            <span className="text-white">Jaagriti</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Bisht.
            </span>
          </h1>

          <div className="hero-3 mt-8 flex items-baseline gap-3 min-h-[2rem]">
            <span className="text-gray-700 text-2xl font-thin">—</span>
            <span
              className="text-xl md:text-3xl font-medium text-gray-300"
              style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.35s ease' }}
            >
              {role}
            </span>
          </div>

          <p className="hero-4 mt-10 text-gray-400 text-lg md:text-2xl leading-[1.6] max-w-3xl">
            Currently at <span className="text-white font-semibold">Deloitte USI</span>, leading multi-agent orchestration for enterprise modernization — building agentic AI workflows that turn months of legacy COBOL work into days.
          </p>

          <div className="hero-5 mt-12 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('experience')}
              className="group px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all"
            >
              View My Work
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a
              href="/JaagritiBisht-Resume.pdf"
              download
              className="px-7 py-3.5 rounded-xl font-semibold border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="px-7 py-3.5 rounded-xl font-semibold border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-all"
            >
              Let&apos;s Talk
            </button>
          </div>

          <div className="hero-5 mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
            <span><span className="text-cyan-300 font-bold">6.5+</span> years</span>
            <span className="text-gray-700">·</span>
            <span><span className="text-violet-300 font-bold">3</span> companies</span>
            <span className="text-gray-700">·</span>
            <span><span className="text-emerald-300 font-bold">AWS AI</span> certified</span>
            <span className="text-gray-700">·</span>
            <span>Pune, India</span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700 text-[10px] uppercase tracking-[0.3em]">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-transparent" />
        </div>
      </section>

      {/* ── Tech strip ───────────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-white/5 bg-slate-900/20 py-4">
        <div
          className="marquee-inner flex gap-10 whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {[...TECH_STRIP, ...TECH_STRIP].map((t, i) => (
            <span key={i} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── About — magazine layout ──────────────────────────────────────── */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <Label>About</Label>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal delay={80} className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight">
                I build systems where{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  AI does the heavy lifting
                </span>
                <span className="text-cyan-400">.</span>
              </h2>

              <div className="mt-10 space-y-6 text-gray-400 text-lg md:text-xl leading-[1.75]">
                <p>
                  I&apos;m a full-stack developer turned <span className="text-white">agentic AI engineer</span>, with{' '}
                  <span className="text-cyan-300 font-semibold">6.5+ years</span> shipping enterprise-scale software across <span className="text-white">3 companies</span> in India.
                </p>
                <p>
                  At <span className="text-white">Deloitte</span>, I lead a team building a multi-agent platform that transforms legacy <span className="text-white">COBOL</span> systems into modern architectures. Day-to-day I work with orchestrators, code miners, doc generators, and reviewers — agents collaborating to compress months of manual work into days.
                </p>
                <p>
                  Before agents, I shipped Angular + Spring 6 platforms at <span className="text-white">Snap-on</span>, ETL pipelines at <span className="text-white">Infosys</span>, and a desktop GIS tool at <span className="text-white">DRDO</span>. Strong foundations across the stack — sharpened by a deep dive into LLMs, MCP servers, and AI tooling.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180} as="aside" className="lg:col-span-4 lg:sticky lg:top-24 space-y-7">
              <div className="border-l-2 border-cyan-500/60 pl-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">Currently</span>
                <p className="mt-2 text-slate-200 text-[15px] leading-7">
                  Architecting agentic workflows for COBOL → modern architecture transformation at Deloitte USI.
                </p>
              </div>

              <div className="border-l-2 border-violet-500/60 pl-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-violet-400">Stack</span>
                <p className="mt-2 text-slate-300 text-[15px] leading-7">
                  Python · React · AutoGen · MCP Servers · AWS Bedrock · PostgreSQL
                </p>
              </div>

              <div className="border-l-2 border-emerald-500/60 pl-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400">Studied</span>
                <p className="mt-2 text-slate-300 text-[15px] leading-7">
                  MS Computer Science · Liverpool John Moores
                  <br />
                  <span className="text-gray-500">PG Diploma · IIIT Bangalore</span>
                </p>
              </div>

              <div className="border-l-2 border-orange-500/60 pl-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-orange-400">Off-screen</span>
                <p className="mt-2 text-slate-300 text-[15px] leading-7">
                  Marathon running · reading · learning German
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Experience — editorial, no cards ─────────────────────────────── */}
      <section id="experience" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <Label>Experience</Label>
            <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">A career in production.</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mb-20">
              Three companies. Three cities. One throughline: shipping software that real teams depend on.
            </p>
          </Reveal>

          <div className="divide-y divide-white/5">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={`${exp.company}-${i}`} delay={i * 60}>
                <article className="grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 group">
                  {/* Left rail: period, badge, location */}
                  <div className="col-span-12 md:col-span-3 lg:col-span-2">
                    <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} items-center justify-center text-white text-xs font-black mb-5 shadow-lg`}
                      style={{ boxShadow: `0 4px 24px ${exp.glow}` }}>
                      {exp.badge}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gray-500">{exp.period}</div>
                    <div className="text-xs text-gray-600 mt-2">{exp.location}</div>
                  </div>

                  {/* Right: content */}
                  <div className="col-span-12 md:col-span-9 lg:col-span-10 max-w-3xl">
                    <h3 className="text-2xl md:text-4xl font-black leading-[1.15] tracking-tight">
                      <span className="text-gray-500 font-light text-xl md:text-2xl block mb-1.5">
                        {exp.role}
                      </span>
                      <span className="text-white">{exp.company}</span>
                      <span className={`ml-3 inline-block align-middle text-xs uppercase tracking-[0.2em] font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.tag}
                      </span>
                    </h3>

                    {exp.segments ? (
                      <div className="mt-8 space-y-8 relative">
                        {/* connecting line */}
                        <div className={`absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b ${exp.color} opacity-40`} />
                        {exp.segments.map((seg, j) => (
                          <div key={j} className="relative pl-7">
                            <div className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-[#020617]`} />
                            <div className="flex items-baseline gap-3 flex-wrap">
                              <h4 className="text-base md:text-lg font-bold text-white">{seg.title}</h4>
                              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500">{seg.period}</span>
                              {j > 0 && (
                                <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                  ↑ Promoted
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{seg.context}</p>
                            <div className="mt-4 space-y-3">
                              {seg.bullets.map((b, k) => (
                                <p key={k} className="flex gap-3 text-gray-400 text-[15px] md:text-base leading-[1.85]">
                                  <span className="flex-shrink-0 mt-1 text-sm">{b.icon}</span>
                                  <span>{b.text}</span>
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-7 space-y-4">
                        {exp.bullets.map((b, j) => (
                          <p key={j} className="flex gap-3 text-gray-400 text-[15px] md:text-base leading-[1.85]">
                            <span className="flex-shrink-0 mt-1 text-sm">{b.icon}</span>
                            <span>{b.text}</span>
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Stack as inline text — like a footer line, not chips */}
                    <p className="mt-7 text-xs text-gray-600 leading-7">
                      <span className="text-gray-500 uppercase tracking-[0.2em] mr-2">Stack</span>
                      {exp.stack.map((s, idx) => (
                        <span key={s}>
                          <span className="text-gray-400 hover:text-cyan-300 transition-colors cursor-default">{s}</span>
                          {idx < exp.stack.length - 1 && <span className="text-gray-700 mx-2">·</span>}
                        </span>
                      ))}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills — editorial numbered rows ─────────────────────────────── */}
      <section id="skills" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <Label>Skills</Label>
            <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">The toolkit.</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mb-20">
              Tools I reach for, ordered by where I spend most of my time today.
            </p>
          </Reveal>

          {(() => {
            const taglines = {
              'Agentic AI':       'Where I spend most of my time — designing and shipping agent systems.',
              'AI Platforms':     'Production LLM platforms I integrate into agentic workflows.',
              'Frontend':         'Crafting interfaces in React and Angular ecosystems.',
              'Backend':          'Java + Python services backed by Spring 6 and async pipelines.',
              'Databases':        'From Oracle and PostgreSQL to Redis caches and ETL.',
              'DevOps & Tools':   'CI/CD, code quality, and the daily-driver tooling.',
            }
            const accents = {
              'Agentic AI':     'text-cyan-300',
              'AI Platforms':   'text-violet-300',
              'Frontend':       'text-emerald-300',
              'Backend':        'text-orange-300',
              'Databases':      'text-rose-300',
              'DevOps & Tools': 'text-slate-300',
            }
            return (
              <div className="divide-y divide-white/5">
                {SKILLS.map((card, i) => (
                  <Reveal key={card.title} delay={i * 50}>
                    <div className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 group transition-all hover:bg-white/[0.015]">
                      <div className="col-span-2 md:col-span-1">
                        <span className="text-3xl md:text-5xl font-black text-slate-800 group-hover:text-slate-700 transition-colors tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="col-span-10 md:col-span-4">
                        <h3 className={`text-xl md:text-2xl font-black tracking-tight ${accents[card.title]}`}>
                          {card.title}
                        </h3>
                        <p className="mt-2 text-gray-500 text-sm leading-6">
                          {taglines[card.title]}
                        </p>
                      </div>

                      <div className="col-span-12 md:col-span-7 min-w-0 self-center">
                        <p className="text-base md:text-lg leading-9 text-gray-400 break-words">
                          {card.items.map((item, idx) => (
                            <span key={item}>
                              <span className="hover:text-white transition-colors cursor-default">{item}</span>
                              {idx < card.items.length - 1 && <span className="text-gray-700 mx-2.5">·</span>}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )
          })()}

          {/* SDLC line — single discrete row, not a card */}
          <Reveal delay={400}>
            <div className="mt-12 pt-6 border-t border-white/5 text-sm text-gray-500 leading-7">
              <span className="text-gray-600 uppercase tracking-[0.25em] mr-3">Methodology</span>
              <span>Agile — Scrum · Kanban · Code Review · Sprint Planning · Confluence Documentation</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Education — CV list ──────────────────────────────────────────── */}
      <section id="education" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <Label>Education &amp; Credentials</Label>
            <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">The paper trail.</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mb-16">
              Formal training, certifications, and the languages I speak.
            </p>
          </Reveal>

          {/* Education list */}
          <div className="divide-y divide-white/5">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.degree} delay={i * 60}>
                <div className="grid grid-cols-12 gap-6 py-7 group hover:bg-white/[0.015] transition-colors">
                  <div className="col-span-12 md:col-span-3">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-cyan-400/80">{e.period}</div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="text-lg md:text-xl font-bold text-white">{e.degree}</h3>
                    <p className="text-gray-500 text-sm mt-1">{e.school}</p>
                  </div>
                  <div className="col-span-12 md:col-span-3 md:text-right">
                    <p className="text-gray-600 text-xs leading-6">{e.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Inline footnote: cert · languages · interests */}
          <Reveal delay={300}>
            <div className="mt-16 grid md:grid-cols-3 gap-10 pt-12 border-t border-white/5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 mb-3">Certification</div>
                <p className="text-white text-lg font-bold leading-snug">AWS AI Certified Practitioner</p>
                <p className="text-gray-600 text-sm mt-1">Amazon Web Services</p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-violet-400 mb-3">Languages</div>
                <p className="text-gray-300 text-[15px] leading-7">
                  <span className="text-white">Hindi</span> <span className="text-gray-600">native</span>
                  <span className="text-gray-700 mx-2">·</span>
                  <span className="text-white">English</span> <span className="text-gray-600">professional</span>
                  <span className="text-gray-700 mx-2">·</span>
                  <span className="text-white">German</span> <span className="text-gray-600">elementary</span>
                </p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 mb-3">Off-screen</div>
                <p className="text-gray-300 text-[15px] leading-7">
                  Marathon running · reading · slowly improving my German
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <Label>Contact</Label>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
              Let&apos;s build something
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                intelligent together.
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mb-12 leading-8">
              Open to roles in agentic AI, full-stack engineering, and enterprise modernization. I reply promptly.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:jaagriti08@gmail.com"
                className="group rounded-2xl border border-white/5 bg-slate-900/50 p-7 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-cyan-500/20">
                  📧
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">Email</p>
                  <p className="font-semibold group-hover:text-cyan-300 transition-colors">jaagriti08@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jaagriti-fsd/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/5 bg-slate-900/50 p-7 hover:border-violet-500/30 hover:bg-slate-900/80 transition-all flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-violet-500/20">
                  💼
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">LinkedIn</p>
                  <p className="font-semibold group-hover:text-violet-300 transition-colors">linkedin.com/in/jaagriti-fsd</p>
                </div>
              </a>

              <a
                href="tel:+919816538391"
                className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all flex items-center gap-4"
              >
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">Phone</p>
                  <p className="font-medium group-hover:text-emerald-300 transition-colors">+91 98165 38391</p>
                </div>
              </a>

              <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">Location</p>
                  <p className="font-medium">Pune, India</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-700 text-sm">
          <p>© {new Date().getFullYear()} Jaagriti Bisht — AI-Driven Engineering Portfolio</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/jaagriti-fsd/" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">LinkedIn</a>
            <a href="mailto:jaagriti08@gmail.com" className="hover:text-cyan-300 transition-colors">Email</a>
            <a href="/JaagritiBisht-Resume.pdf" download className="hover:text-cyan-300 transition-colors">Resume ↓</a>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 hover:scale-110 transition-all flex items-center justify-center text-sm font-bold"
        style={{ opacity: showTop ? 1 : 0, pointerEvents: showTop ? 'auto' : 'none', transition: 'opacity 0.3s, transform 0.2s' }}
      >
        ↑
      </button>
    </div>
  )
}
