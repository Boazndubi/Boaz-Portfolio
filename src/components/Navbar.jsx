function Navbar() {
  const links = ['About', 'Projects', 'Skills', 'Contact']

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight">
          Boaz<span className="text-primary">.</span>
        </a>
        <ul className="hidden sm:flex gap-8 text-sm text-slate-300">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar