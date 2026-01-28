export default function FuturisticBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid animate-grid" />

      {/* Gradient glow blobs */}
      <div className="absolute top-[-20%] left-[-20%] h-[500px] w-[500px] rounded-full bg-blue-500/30 blur-3xl animate-float" />
      <div className="absolute bottom-[-20%] right-[-20%] h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-3xl animate-float-delay" />
    </div>
  )
}
