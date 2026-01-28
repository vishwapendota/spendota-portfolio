import { useEffect, useRef } from "react"

type Dot = { x: number; y: number; vx: number; vy: number; r: number }

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const density = Math.min(120, Math.max(70, Math.floor((w * h) / 18000))) // auto-scale
    const dots: Dot[] = []

    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    const init = () => {
      dots.length = 0
      const count = prefersReduced ? Math.floor(density * 0.35) : density
      for (let i = 0; i < count; i++) {
        dots.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.25, 0.25),
          vy: rand(-0.25, 0.25),
          r: rand(0.9, 1.8),
        })
      }
    }

    init()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      init()
    }

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }
    const onLeave = () => (mouseRef.current.active = false)

    window.addEventListener("resize", onResize)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)

    let raf = 0

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Dots
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy

        if (d.x < -20) d.x = w + 20
        if (d.x > w + 20) d.x = -20
        if (d.y < -20) d.y = h + 20
        if (d.y > h + 20) d.y = -20
      }

      // Lines
      const maxDist = prefersReduced ? 90 : 120
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i]
          const b = dots[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > maxDist) continue

          const alpha = 1 - dist / maxDist
          ctx.strokeStyle = `rgba(56,189,248,${alpha * 0.25})` // cyan-ish
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // Mouse glow + attract
      const m = mouseRef.current
      if (!prefersReduced && m.active) {
        for (const d of dots) {
          const dx = m.x - d.x
          const dy = m.y - d.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 160) {
            d.vx += (dx / (dist + 0.001)) * 0.0006
            d.vy += (dy / (dist + 0.001)) * 0.0006
          }
        }

        const grd = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 220)
        grd.addColorStop(0, "rgba(168,85,247,0.18)") // purple
        grd.addColorStop(0.6, "rgba(56,189,248,0.08)") // cyan
        grd.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(m.x, m.y, 220, 0, Math.PI * 2)
        ctx.fill()
      }

      // Dot render on top
      for (const d of dots) {
        ctx.fillStyle = "rgba(226,232,240,0.65)" // slate-200
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
