function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vite', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'MongoDB', level: 70 },
        { name: 'MySQL', level: 65 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'Linux', level: 70 },
        { name: 'Figma', level: 65 },
        { name: 'Cybersecurity Basics', level: 55 },
      ],
    },
  ]

  const technologies = [
    'React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
    'MongoDB', 'Express', 'Git', 'GitHub', 'Docker', 'Linux',
    'Vite', 'REST API', 'Figma', 'VS Code'
  ]

  return (
    <section id="skills" className="section scroll-animate">
      <h2 className="section-title">
        <span className="number">02.</span> Skills & Technologies
      </h2>
      <p className="section-subtitle">
        Technologies I work with to bring ideas to life
      </p>

      {/* Skill Bars */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category) => (
          <div key={category.title} className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-6">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #6366f1, #14b8a6)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-6">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-[#6366f1]/50 hover:text-white hover:bg-[#6366f1]/10 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills