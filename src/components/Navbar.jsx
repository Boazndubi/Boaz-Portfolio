import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold text-white hover:text-[#ff3c01] transition-colors cursor-pointer"
        >
          Boaz<span className="text-[#ff3c01]">.</span>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative text-sm font-medium transition-colors cursor-pointer ${
                activeSection === link.id
                  ? 'text-[#ff3c01]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="font-mono text-[#ff3c01] mr-1 text-xs">
                {String(navLinks.indexOf(link) + 1).padStart(2, '0')}.
              </span>
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ff3c01] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:boazbundi1@gmail.com"
          className="hidden md:inline-flex px-5 py-2.5 text-sm font-medium text-[#ff3c01] border border-[#ff3c01]/30 rounded-lg hover:bg-[#ff3c01]/10 hover:border-[#ff3c01] transition-all cursor-pointer"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar