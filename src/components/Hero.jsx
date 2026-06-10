import { useEffect, useRef } from 'react'

function Hero() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let mouse = { x: 0, y: 0 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Track mouse
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Create particles with more variety
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.6 + 0.1,
        color: Math.random() > 0.5 ? '255, 60, 1' : '255, 251, 0',
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Mouse interaction - particles move away from cursor
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.x -= (dx / distance) * force * 2
          particle.y -= (dy / distance) * force * 2
        }

        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.pulse += 0.02

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        const pulsingOpacity = particle.opacity * (0.7 + 0.3 * Math.sin(particle.pulse))

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color}, ${pulsingOpacity})`
        ctx.fill()
      })

      // Draw connections with gradient
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, `rgba(255, 60, 1, ${0.15 * (1 - distance / 200)})`)
            gradient.addColorStop(1, `rgba(255, 251, 0, ${0.15 * (1 - distance / 200)})`)

            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden"
    >
      {/* Animated Background Orbs with warm colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large floating orb - top left */}
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255,60,1,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Medium orb - bottom right */}
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(255,251,0,0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
            animationDelay: '-5s',
          }}
        />
        {/* Small accent orb - center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(255,60,1,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Additional orbs for more depth */}
        <div
          className="absolute top-[30%] right-[20%] w-[200px] h-[200px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(255,100,0,0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '-8s',
          }}
        />
        <div
          className="absolute bottom-[40%] left-[15%] w-[250px] h-[250px] rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255,200,0,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '-12s',
          }}
        />
        {/* Floating geometric shapes */}
        <div
          className="absolute top-[20%] right-[15%] w-20 h-20 rounded-2xl border border-[#ff3c01]/10 animate-float"
          style={{ animationDelay: '-2s' }}
        />
        <div
          className="absolute bottom-[25%] left-[10%] w-16 h-16 rounded-full border border-[#fffb00]/10 animate-float-slow"
          style={{ animationDelay: '-8s' }}
        />
        <div
          className="absolute top-[60%] right-[20%] w-12 h-12 rotate-45 border border-[#ff3c01]/10 animate-float"
          style={{ animationDelay: '-12s' }}
        />
        <div
          className="absolute top-[40%] left-[25%] w-8 h-8 rounded-lg border border-[#fffb00]/10 animate-float-slow"
          style={{ animationDelay: '-15s' }}
        />
        {/* Animated rings */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#ff3c01]/5 animate-spin"
          style={{ animationDuration: '30s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#fffb00]/5 animate-spin"
          style={{ animationDuration: '45s', animationDirection: 'reverse' }}
        />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p
          className="font-mono text-sm mb-6 animate-fade-in-up tracking-widest uppercase"
          style={{ color: '#fffb00' }}
        >
          Hi, my name is
        </p>

        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up delay-100"
          style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #ff3c01 40%, #fffb00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(255,60,1,0.3))',
          }}
        >
          Boaz
        </h1>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-slate-400 mb-6 animate-fade-in-up delay-200">
          I build{' '}
          <span className="text-white">web applications</span>.
        </h2>

        <p className="max-w-xl mx-auto text-slate-400 text-lg mb-10 animate-fade-in-up delay-300 leading-relaxed">
          Full-Stack Developer based in{' '}
          <span style={{ color: '#fffb00' }}>Nairobi, Kenya</span>. I craft
          practical full-stack systems — from church management platforms to
          e-commerce sites with local payment integrations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <button
            onClick={scrollToProjects}
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View my work
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b3d] to-[#fffb00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="mailto:boazbundi1@gmail.com"
            className="btn-outline group"
          >
            Get in touch
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        {/* Stats with hover effects */}
        <div className="flex items-center justify-center gap-8 mt-16 animate-fade-in-up delay-500">
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Built' },
            { number: '5+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group cursor-default"
              style={{ animationDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-slate-500 mt-1 group-hover:text-[#fffb00] transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator with glow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-[#ff3c01]/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-[#ff3c01] animate-pulse" />
        </div>
      </div>

      {/* Side decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#ff3c01]/30 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-[#ff3c01] animate-pulse" />
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#fffb00]/30 to-transparent" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#fffb00]/30 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-[#fffb00] animate-pulse" />
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#ff3c01]/30 to-transparent" />
      </div>
    </section>
  )
}

export default Hero