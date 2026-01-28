import Reveal from "./Reveal"
import TiltCard from "./TiltCard"

const skills = [
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Python",
  "React",
  "Next.js",
  "Git",
  "CI/CD",
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto py-20 px-4">
      {/* Glass container */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(56,189,248,0.08)]">
        
        {/* Section title */}
        <Reveal>
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Tools
            </span>
          </h2>
        </Reveal>

        {/* Skills grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <Reveal key={skill} delay={idx * 0.04}>
              <TiltCard className="px-5 py-3">
                <span className="text-sm font-semibold tracking-wide text-slate-100">
                  {skill}
                </span>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
