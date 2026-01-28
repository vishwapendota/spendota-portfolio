export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 shadow-[0_0_50px_rgba(168,85,247,0.10)]">
          <div className="flex items-center justify-between">
            <div className="font-semibold tracking-tight">Sai Vishwa Nihar</div>

            <div className="flex gap-5 text-sm text-slate-200">
              <a className="hover:text-cyan-300 transition" href="#about">About</a>
              <a className="hover:text-cyan-300 transition" href="#skills">Skills</a>
              <a className="hover:text-cyan-300 transition" href="#projects">Projects</a>
              <a className="hover:text-cyan-300 transition" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
