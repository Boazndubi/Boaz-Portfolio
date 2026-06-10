const skills = [
  'JavaScript', 'React', 'Vite', 'Tailwind CSS',
  'Node.js', 'Express', 'PostgreSQL', 'Prisma',
  'M-Pesa Daraja API', 'Git',
]

function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="text-primary font-mono text-lg">03.</span> Skills
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-sm font-mono text-slate-300 border border-slate-800 rounded-lg px-3 py-2 text-center"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills