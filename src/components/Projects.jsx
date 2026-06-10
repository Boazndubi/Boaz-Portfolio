import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
        <span className="text-primary font-mono text-lg">02.</span> Projects
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-slate-800 rounded-xl p-6 hover:border-primary transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 text-sm">
              <a href={project.link} className="text-primary hover:underline">
                Live
              </a>
              <a href={project.github} className="text-primary hover:underline">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects