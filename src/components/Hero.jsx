function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
      <p className="text-accent font-mono text-sm mb-4">Hi, my name is</p>
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">Boaz</h1>
      <h2 className="text-2xl sm:text-4xl font-semibold text-slate-400 mb-6">
        I build web applications.
      </h2>
      <p className="max-w-xl text-slate-400 mb-8">
        Developer based in Nairobi, Kenya, focused on React, Node.js, and
        practical full-stack systems — from church management platforms to
        e-commerce sites with local payment integrations.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
      >
        View my work
      </a>
    </section>
  )
}

export default Hero