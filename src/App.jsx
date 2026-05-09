export default function PortfolioApp() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_35%)]" />

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-10 py-6 border-b border-slate-700/50 backdrop-blur-md">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Jaagriti Bisht</h1>
          <p className="text-sm text-gray-400">Full Stack & AI Integration Developer</p>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-slate-100 transition">About</a>
          <a href="#experience" className="hover:text-slate-100 transition">Experience</a>
          <a href="#skills" className="hover:text-slate-100 transition">Skills</a>
          <a href="#projects" className="hover:text-slate-100 transition">Projects</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-10 md:px-20 pt-24 pb-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Building AI-Driven Engineering Systems
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Modern
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"> AI-Powered </span>
            Full Stack Experiences
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-2xl">
            Full Stack Developer with 6.5+ years of experience building enterprise applications, AI workflows, multi-agent orchestration systems, and modernization platforms that accelerate legacy transformation from months to days.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-medium shadow-2xl shadow-cyan-500/20 hover:scale-105 transition">
              Explore Projects
            </button>

            <button className="px-7 py-4 rounded-2xl border border-slate-700/60 bg-slate-800/40 backdrop-blur-lg hover:bg-slate-800/60 transition">
              Download Resume
            </button>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {[
              'Agentic AI',
              'Multi-Agent Workflows',
              'React',
              'Python',
              'OpenAI',
              'AWS Bedrock',
              'MCP Servers',
              'Enterprise Modernization'
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-slate-700/60 bg-slate-900/40 text-sm text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* AI Orb */}
        <div className="relative flex justify-center items-center h-[500px]">
          <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

          <div className="relative w-[320px] h-[320px] rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_80px_rgba(34,211,238,0.25)]">
            <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/20 animate-spin" style={{ animationDuration: '18s' }} />
            <div className="absolute inset-12 rounded-full border border-violet-400/20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '24s' }} />

            <div className="text-center px-8">
              <div className="text-7xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold">AI Workflow Engine</h3>
              <p className="text-sm text-gray-400 mt-3 leading-6">
                Multi-Agent Systems • LLM Integrations • Intelligent Automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 px-10 md:px-20 py-24 border-t border-slate-700/50">
        <div className="max-w-5xl">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-6">About</p>
          <h3 className="text-4xl font-bold mb-8 leading-tight">
            Engineering AI-driven systems for enterprise modernization and developer acceleration.
          </h3>

          <p className="text-gray-400 text-lg leading-9">
            I specialize in building scalable full stack platforms, AI orchestration systems, and intelligent automation workflows that streamline software engineering processes. My recent work focuses on multi-agent AI systems for COBOL modernization, automated documentation generation, AI-assisted code transformation, and developer productivity acceleration using modern LLM ecosystems.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative z-10 px-10 md:px-20 py-24 border-t border-slate-700/50">
        <div className="flex items-center justify-between mb-14">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">Experience</p>
            <h3 className="text-4xl font-bold">What I’m Building</h3>
          </div>
        </div>

        <div className="grid gap-8">
          {[
            {
              company: 'Deloitte USI',
              role: 'Consultant (Development)',
              period: '2024 — Present',
              desc: 'Building AI-driven modernization platforms using agentic workflows, MCP servers, AutoGen, Copilot CLI, and multi-agent orchestration pipelines for enterprise COBOL transformation.'
            },
            {
              company: 'Snap-on Business Solutions',
              role: 'Consultant (Development)',
              period: '2021 — 2024',
              desc: 'Worked on enterprise modernization, Angular and Spring ecosystem upgrades, automation workflows, CI/CD optimization, and scalable application development.'
            },
            {
              company: 'Infosys',
              role: 'Systems Engineer',
              period: '2019 — 2021',
              desc: 'Worked on ETL, large-scale data migration systems, and enterprise data processing solutions using Oracle technologies and SQL.'
            }
          ].map((item) => (
            <div
              key={item.company}
              className="group relative rounded-3xl border border-slate-700/60 bg-slate-900/60 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500/5 to-violet-500/5" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold">{item.company}</h4>
                    <p className="text-gray-400">{item.role}</p>
                  </div>

                  <div className="px-4 py-2 rounded-full border border-slate-700/60 bg-slate-950/40 text-sm text-slate-300">
                    {item.period}
                  </div>
                </div>

                <p className="text-gray-400 leading-8 text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 px-10 md:px-20 py-24 border-t border-slate-700/50">
        <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">Skills</p>
        <h3 className="text-4xl font-bold mb-14">Tech Stack & AI Ecosystem</h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: 'Frontend',
              items: ['React', 'Angular', 'Tailwind CSS', 'TypeScript']
            },
            {
              title: 'Backend',
              items: ['Java', 'Python', 'Spring Framework', 'PostgreSQL']
            },
            {
              title: 'Agentic AI',
              items: ['AutoGen', 'MCP Servers', 'AI Workflows', 'LLM Orchestration']
            },
            {
              title: 'AI Platforms',
              items: ['OpenAI', 'Claude', 'Gemini', 'AWS Bedrock']
            }
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900/60 to-slate-950/70 p-8 backdrop-blur-xl"
            >
              <h4 className="text-xl font-bold mb-6">{card.title}</h4>

              <div className="flex flex-wrap gap-3">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-xl bg-slate-900/40 border border-slate-700/60 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-10 md:px-20 py-12 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
        <p>© 2026 Jaagriti Bisht — AI-Driven Engineering Portfolio</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-100 transition">LinkedIn</a>
          <a href="#" className="hover:text-slate-100 transition">GitHub</a>
          <a href="#" className="hover:text-slate-100 transition">Email</a>
        </div>
      </footer>
    </div>
  )
}
