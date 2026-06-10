function About() {
  const stats = [
    { number: '3+', label: 'Years Coding' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Happy Clients' },
    { number: '100%', label: 'Commitment' },
  ]

  return (
    <section id="about" className="section scroll-animate">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="section-title">
            <span className="number">01.</span> About Me
          </h2>

          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Hello! I'm <span className="text-white font-medium">Boaz</span>, a passionate 
              Full-Stack Developer based in <span className="text-[#14b8a6]">Nairobi, Kenya</span>. 
              I specialize in building practical web applications that solve real problems.
            </p>

            <p>
              My journey started with curiosity about how things work on the web, and it has 
              evolved into a career building everything from{' '}
              <span className="text-white">church management platforms</span> to{' '}
              <span className="text-white">e-commerce sites</span> with local payment 
              integrations like M-Pesa.
            </p>

            <p>
              I'm currently pursuing Software Development while actively working on freelance 
              projects. I love the challenge of turning complex requirements into clean, 
              user-friendly applications.
            </p>

            <p>
              When I'm not coding, you'll find me exploring cybersecurity concepts, networking 
              with fellow developers, or learning new technologies to stay ahead of the curve.
            </p>
          </div>

          {/* Quick Info */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="tag">
              <span className="w-2 h-2 rounded-full bg-[#14b8a6] mr-2" />
              Available for freelance
            </div>
            <div className="tag">
              <span className="w-2 h-2 rounded-full bg-[#6366f1] mr-2" />
              Open to remote work
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About