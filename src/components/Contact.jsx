function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
        <span className="text-primary font-mono text-lg">04.</span> Get In Touch
      </h2>
      <p className="text-slate-400 mb-8">
        I'm open to freelance work and new opportunities. Based in Nairobi,
        Kenya, available for remote collaboration.
      </p>
      
      <a
        href="mailto:you@example.com"
        className="inline-block px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
      >
        Say Hello
      </a>
    </section>
  )
}

export default Contact