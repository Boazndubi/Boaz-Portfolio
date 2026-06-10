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
        {skillCategories.map((category, catIndex) => (
          <div
            key={category.title}
            className="glass-card p-6"
            style={{
              animationDelay: `${catIndex * 150}ms`,
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
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
                        transitionDelay: `${skillIndex * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="relative">
        <div
          className="absolute -top-10 -left-10 w-24 h-24 rounded-full border border-[#6366f1]/10 animate-float-slow hidden lg:block"
          style={{ animationDelay: '-3s' }}
        />
        <div
          className="absolute -bottom-10 -right-10 w-20 h-20 rounded-2xl border border-[#14b8a6]/10 animate-float hidden lg:block"
          style={{ animationDelay: '-7s' }}
        />

        {/* Tech Tags */}
        <div className="text-center relative z-10">
          <h3 className="text-lg font-semibold text-white mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-[#6366f1]/50 hover:text-white hover:bg-[#6366f1]/10 transition-all cursor-default"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills