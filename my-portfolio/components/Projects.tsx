import Reveal from "./Reveal"
import TiltCard from "./TiltCard"

const projects = [
  {
    name: "Azure Secrets Expiry Report",
    description:
      "A Python script that generates a report of expiring secrets in Azure Key Vaults.",
    link: "https://github.com/vishwapendota/azure_expiry_report",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-20 px-4">
      {/* Glass container */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(56,189,248,0.08)]">
        
        {/* Section title */}
        <Reveal>
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </Reveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((proj, idx) => (
            <Reveal key={proj.name} delay={idx * 0.08}>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <TiltCard className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-slate-100">
                      {proj.name}
                    </h3>
                    <span className="text-xs text-slate-300/80">
                      GitHub ↗
                    </span>
                  </div>

                  <p className="mt-3 text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-300">
                    View project <span className="opacity-70">→</span>
                  </div>
                </TiltCard>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
