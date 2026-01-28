import ParticleNetwork from "./ParticleNetwork"

export default function Web3Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Aurora glow layers */}
      <div className="aurora absolute -top-48 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-60" />
      <div className="aurora2 absolute -bottom-48 left-1/3 h-[650px] w-[850px] -translate-x-1/2 rounded-full blur-3xl opacity-50" />

      {/* Particle network (canvas) */}
      <ParticleNetwork />

      {/* Noise + scanlines overlays */}
      <div className="noise absolute inset-0 opacity-[0.10]" />
      <div className="scanlines absolute inset-0 opacity-[0.12]" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.75)_100%)]" />
    </div>
  )
}
