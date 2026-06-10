import { useEffect, useRef } from 'react'

function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 60, 1, ${particle.opacity})`
        ctx.fill()
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255, 60, 1, ${0.1 * (1 - distance / 150)})`
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
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p
          className="font-mono text-sm mb-6 animate-fade-in-up"
          style={{ color: '#fffb00' }}
        >
          Hi, my name is
        </p>

        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up delay-100"
          style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #ff3c01 50%, #fffb00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
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
            className="btn-primary group"
          >
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
          </button>

          <a
            href="mailto:boazbundi1@gmail.com"
            className="btn-outline"
          >
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mt-16 animate-fade-in-up delay-500">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">3+</div>
            <div className="text-sm text-slate-500 mt-1">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
            <div className="text-sm text-slate-500 mt-1">Projects Built</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">5+</div>
            <div className="text-sm text-slate-500 mt-1">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero