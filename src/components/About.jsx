function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="text-primary font-mono text-lg">01.</span> About Me
      </h2>
      <p className="text-slate-400 leading-relaxed mb-4">
        I'm a developer who enjoys turning real-world problems into working
        software — whether that's a membership system for a church or a
        storefront that accepts M-Pesa payments. My toolkit centers on React,
        Vite, Tailwind CSS, and Node.js/Express, usually backed by
        PostgreSQL and Prisma.
      </p>
      <p className="text-slate-400 leading-relaxed">
        I'm currently exploring backend payment integrations (Daraja API,
        Stripe, Flutterwave) and refining full-stack systems end to end —
        from database schema to polished UI.
      </p>
    </section>
  )
}

export default About