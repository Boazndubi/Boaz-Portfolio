import { useState } from 'react'

function Projects() {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Church Management System',
      description:
        'A comprehensive platform for managing church operations including member registration, event scheduling, donation tracking, and sermon management.',
      image: '/placeholder-church.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      links: {
        demo: '#',
        github: 'https://github.com/Boazndubi/church-management-s...',
      },
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description:
        'Full-featured online store with M-Pesa integration, product catalog, shopping cart, and admin dashboard for inventory management.',
      image: '/placeholder-ecommerce.jpg',
      tags: ['React', 'Node.js', 'MySQL', 'Tailwind'],
      category: 'fullstack',
      links: {
        demo: '#',
        github: '#',
      },
      featured: true,
    },
    {
      id: 3,
      title: 'Hardware Store Inventory',
      description:
        'Inventory management system for a local hardware store with stock tracking, sales reporting, and supplier management.',
      image: '/placeholder-hardware.jpg',
      tags: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
      category: 'fullstack',
      links: {
        demo: '#',
        github: 'https://github.com/Boazndubi/hardware-store',
      },
      featured: false,
    },
    {
      id: 4,
      title: 'ThriftDesk Platform',
      description:
        'A platform built specifically for TikTok sellers to manage their thrift business, track orders, and handle customer interactions.',
      image: '/placeholder-thrift.jpg',
      tags: ['React', 'PostgreSQL', 'Node.js'],
      category: 'fullstack',
      links: {
        demo: '#',
        github: '#',
      },
      featured: false,
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
  ]

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section scroll-animate relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-96 h-96 rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255,60,1,0.04) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(255,251,0,0.03) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '-8s',
          }}
        />
      </div>

      <div className="relative z-10">
        <h2 className="section-title">
          <span className="number">03.</span> Featured Projects
        </h2>
        <p className="section-subtitle">
          Some things I've built — from church management to e-commerce platforms
        </p>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                filter === f.id
                  ? 'bg-[#ff3c01]/20 text-[#ff3c01] border border-[#ff3c01]/30 shadow-[0_0_15px_rgba(255,60,1,0.15)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:border-[#ff3c01]/30 hover:text-white hover:shadow-[0_0_10px_rgba(255,60,1,0.1)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden group relative"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(255,60,1,0.1) 0%, transparent 70%)',
                }}
              />

              {/* Project Image Placeholder */}
              <div className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,60,1,0.15) 0%, rgba(255,100,0,0.1) 50%, rgba(255,251,0,0.08) 100%)'
                }}
              >
                <div className="text-6xl opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-500">💻</div>

                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent opacity-60" />

                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-[#ff3c01]/20 border border-[#ff3c01]/30 rounded-full text-xs font-medium text-[#ff3c01] backdrop-blur-sm">
                    Featured
                  </span>
                )}

                {/* Hover reveal effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#ff3c01]/20 backdrop-blur-sm border border-[#ff3c01]/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#ff3c01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ff3c01] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-400 hover:border-[#ff3c01]/30 hover:text-[#fffb00] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-2 text-sm text-[#ff3c01] hover:text-[#ff6b3d] transition-colors group/link"
                  >
                    <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
                  >
                    <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>

              {/* Bottom border glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff3c01]/0 to-transparent group-hover:via-[#ff3c01]/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects