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
    <section id="skills" className="section scroll-animate relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255,60,1,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(255,251,0,0.03) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '-10s',
          }}
        />
      </div>

      <div className="relative z-10">
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
              className="glass-card p-6 group hover:border-[#ff3c01]/30 transition-all duration-500"
              style={{
                animationDelay: `${catIndex * 150}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#ff3c01]/10 border border-[#ff3c01]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#ff3c01] font-bold text-sm">
                    {category.title[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-slate-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                      <span className="text-sm text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover/skill:brightness-110"
                          style={{
                            width: `${skill.level}%`,
                            background: 'linear-gradient(90deg, #ff3c01, #ff6b3d, #fffb00)',
                            transitionDelay: `${skillIndex * 100 + catIndex * 200}ms`,
                            boxShadow: '0 0 10px rgba(255,60,1,0.3)',
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
                            style={{ backgroundSize: '200% 100%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Tags with enhanced effects */}
        <div className="relative">
          <div className="text-center relative z-10">
            <h3 className="text-lg font-semibold text-white mb-2">
              Tech Stack
            </h3>
            <p className="text-slate-500 text-sm mb-8">Technologies I use daily</p>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-[#ff3c01]/50 hover:text-white hover:bg-[#ff3c01]/10 hover:shadow-[0_0_15px_rgba(255,60,1,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default"
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
      </div>
    </section>
  )
}

export default Skills